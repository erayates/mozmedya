export function SmartPhone({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 8C1 4.70017 1 3.05025 2.02513 2.02513C3.05025 1 4.70017 1 8 1C11.2998 1 12.9497 1 13.9749 2.02513C15 3.05025 15 4.70017 15 8V14C15 17.2998 15 18.9497 13.9749 19.9749C12.9497 21 11.2998 21 8 21C4.70017 21 3.05025 21 2.02513 19.9749C1 18.9497 1 17.2998 1 14V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 18H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 1L5.089 1.53402C5.28188 2.69129 5.37832 3.26993 5.77519 3.62204C6.18918 3.98934 6.77614 4 8 4C9.22386 4 9.81082 3.98934 10.2248 3.62204C10.6217 3.26993 10.7181 2.69129 10.911 1.53402L11 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}