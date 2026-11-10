import Image from "next/image";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { clinic, whatsAppLink } from "@/lib/site";

export function Header({ onBook }: { onBook: () => void }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="wordmark" href="#top" aria-label="HRG Hair Regrowth Clinic, home">
          <Image className="brand-logo" src="/images/hrg-logo-transparent.png" alt="" width={1448} height={1086} priority />
        </a>
        <div className="header-actions">
          <a className="icon-circle" href={clinic.phoneHref} aria-label={`Call HRG on ${clinic.phoneDisplay}`}>
            <Phone aria-hidden="true" />
          </a>
          <a className="icon-circle" href={whatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with HRG on WhatsApp">
            <WhatsAppIcon />
          </a>
          <button className="btn btn-small" type="button" onClick={onBook}>Talk to Our Experts</button>
        </div>
      </div>
    </header>
  );
}
