import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, formatBookingMessage } from "../lib/booking";

const booking = {
  fullName: "Aarav Mehta",
  phone: "+91 9876543210",
  treatment: "Not Sure / Need Guidance" as const,
  date: "2026-11-17",
  time: "Afternoon" as const,
  message: "I’d like to understand my options & expected recovery.",
};

describe("WhatsApp booking", () => {
  it("formats representative input without dropping punctuation", () => {
    const message = formatBookingMessage(booking);
    expect(message).toContain("Name: Aarav Mehta");
    expect(message).toContain("17 November 2026");
    expect(message).toContain("options & expected recovery");
  });

  it("builds an encoded click-to-chat URL", () => {
    const url = buildWhatsAppUrl("919999999999", booking);
    expect(url).toMatch(/^https:\/\/wa\.me\/919999999999\?text=/);
    expect(url).toContain("Aarav+Mehta");
    expect(url).toContain("%26+expected+recovery");
  });

  it("returns null when the clinic number is unconfigured", () => {
    expect(buildWhatsAppUrl("", booking)).toBeNull();
  });

  it("rejects punctuation in a misconfigured clinic number", () => {
    expect(buildWhatsAppUrl("+91 99999 99999", booking)).toBeNull();
  });
});
