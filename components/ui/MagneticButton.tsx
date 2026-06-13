"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
  /** Classes for the magnetic wrapper (e.g. responsive full-width). */
  wrapperClassName?: string;
};

const VARIANTS = {
  primary:
    "bg-accent text-ink hover:bg-accent-soft focus-visible:bg-accent-soft",
  outline:
    "border border-line text-cream hover:border-cream/50 hover:bg-surface",
};

const SIZES = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * CTA that subtly follows the cursor (desktop only) and slides its arrow
 * on hover. Renders an <a> when href is given, a <button> otherwise.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  external,
  variant = "primary",
  size = "md",
  className = "",
  wrapperClassName = "inline-block",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <span className="relative inline-flex items-center gap-2.5">
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  );

  const sharedClass = `group inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-colors duration-300 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={wrapperClassName}
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          className={sharedClass}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={sharedClass}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
