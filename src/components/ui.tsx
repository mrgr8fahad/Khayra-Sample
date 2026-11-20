import Image from "next/image";
import Link from "next/link";

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Khayra Technologies wordmark (PNG, 1018x281, transparent background).
const LOGO_RATIO = 1018 / 281;

export function Logo({ height = 48 }: { height?: number }) {
  return (
    <Link href="/" aria-label="Khayra Technologies home" style={{ display: "inline-flex" }}>
      <Image
        src="/logo/khayra-technologies-logo.png"
        alt="Khayra Technologies"
        width={Math.round(height * LOGO_RATIO)}
        height={height}
        priority
      />
    </Link>
  );
}

/** Lilac rounded square holding one of the pack's line icons. */
export function IconBadge({
  src,
  size = 48,
  className,
}: {
  src: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        display: "inline-grid",
        placeItems: "center",
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.28),
        background: "var(--khayra-lilac)",
      }}
    >
      <Image src={src} alt="" width={size * 0.5} height={size * 0.5} unoptimized />
    </span>
  );
}
