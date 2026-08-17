export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="size-7 shrink-0 rounded-lg"
      >
        <rect width="64" height="64" rx="14" className="fill-brand-600" />
        <path
          d="M32 12c-7.2 0-13 5.6-13 12.6 0 9.3 11.2 20.9 11.7 21.4a1.9 1.9 0 0 0 2.6 0C33.8 45.5 45 33.9 45 24.6 45 17.6 39.2 12 32 12Z"
          fill="#fff"
        />
        <circle cx="32" cy="24.6" r="5.2" className="fill-brand-600" />
      </svg>
      <span className="text-lg font-semibold tracking-tight">PrinceFirms</span>
    </span>
  );
}
