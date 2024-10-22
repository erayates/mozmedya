export function Plus({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4L12 20M20 12L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Minus({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 12L4 12"
        stroke="url(#paint0_linear_242_2926)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_242_2926"
          x1="4.73272"
          y1="11.9908"
          x2="4.7776"
          y2="13.3897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07DEFD" />
          <stop offset="1" stopColor="#1476FB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
