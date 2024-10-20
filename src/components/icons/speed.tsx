export function Speed({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11" cy="16" r="3" stroke="#626C85" stroke-width="1.5" />
      <path
        d="M11 13V8"
        stroke="#626C85"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11"
        stroke="#626C85"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
