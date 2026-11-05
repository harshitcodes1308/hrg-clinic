import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, formatBookingMessage } from "../lib/booking";

const booking = {
  fullName: "Aarav Mehta",
  age: "34",
  location: "Rohini, Delhi",
  treatment: "Not sure / need guidance" as const,
};

describe("WhatsApp booking", () => {
  it("formats representative booking details", () => {
    const message = formatBookingMessage(booking);
    expect(message).toContain("Name: Aarav Mehta");
    expect(message).toContain("Age: 34");
    expect(message).toContain("Location: Rohini, Delhi");
    expect(message).toContain("Treatment Interest: Not sure / need guidance");
  });

  it("builds an encoded click-to-chat URL", () => {
    const url = buildWhatsAppUrl("919999999999", booking);
    expect(url).toMatch(/^https:\/\/wa\.me\/919999999999\?text=/);
    expect(url).toContain("Aarav+Mehta");
    expect(url).toContain("Rohini%2C+Delhi");
  });

  it("returns null when the clinic number is unconfigured", () => {
    expect(buildWhatsAppUrl("", booking)).toBeNull();
  });

  it("rejects punctuation in a misconfigured clinic number", () => {
    expect(buildWhatsAppUrl("+91 99999 99999", booking)).toBeNull();
  });
});
