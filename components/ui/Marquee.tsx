import Icon from "@/components/ui/Icon";
import { marqueeItems } from "@/lib/data";

/** Infinite scrolling service strip; pauses on hover, static if reduced motion. */
export default function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-line bg-surface/60 py-5"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {marqueeItems.map((item) => (
              <span
                key={`${half}-${item}`}
                className="flex items-center font-mono text-sm uppercase tracking-[0.22em] text-faint"
              >
                <span className="mx-7">{item}</span>
                <Icon name="star" size={12} className="text-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
