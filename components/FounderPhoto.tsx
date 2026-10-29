import Image from "next/image";
import { FOUNDER_PHOTO, founder } from "@/lib/content";
import { Rosette } from "./Guilloche";

/**
 * Banknote style oval portrait. Until FOUNDER_PHOTO is set in lib/content.ts
 * it shows an engraved monogram. An engraved treatment of the real photo
 * would sit perfectly here.
 */
export function FounderPhoto({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[480px] ${className}`}>
      <Rosette size={480} petals={40} rings={6} strokeWidth={0.5} className="absolute inset-0 h-full w-full text-mint-soft" />
      <div className="absolute inset-[14%] overflow-hidden rounded-[50%] border border-mint-soft bg-ink-deep">
        {FOUNDER_PHOTO ? (
          <Image src={FOUNDER_PHOTO} alt={`${founder.name}, ${founder.role}`} fill sizes="360px" className="object-cover grayscale sepia-[.4] hue-rotate-[70deg]" />
        ) : (
          <div role="img" aria-label={`Portrait of ${founder.name} goes here`} className="absolute inset-0 flex items-center justify-center">
            <svg aria-hidden className="absolute inset-0 h-full w-full text-mint-line" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse">
                  <path d="M0 3H6" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hatch)" />
            </svg>
            <span className="relative text-7xl font-semibold tracking-tight text-mint">AB</span>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-mint-line bg-ink-deep py-2 px-3 text-sm">
        <span className="font-semibold text-paper">{founder.name}</span>
        <span className="text-paper-70"> · {founder.role}</span>
      </div>
    </div>
  );
}
