"use client";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = "h-9 w-9 text-[#D95338]" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 4L4 11L18 18L32 11L18 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.5V23.5C8 26.5 12.5 29 18 29C23.5 29 28 26.5 28 23.5V13.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}
