import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "green" | "orange";
};

export default function GameButton({
  children,
  icon,
  variant = "green",
}: Props) {
  const styles = {
    green: `
  bg-gradient-to-b
  from-[#7fd31f]
  via-[#5b830f]
  to-[#596912]

  shadow-[0_6px_0_#4b2a15,0_10px_20px_rgba(0,0,0,.18)]
`,
    orange: `
  bg-gradient-to-b
  from-[#ffd98d]
  via-[#f8c66a]
  to-[#efb14e]

  shadow-[0_6px_0_#4b2a15,0_10px_20px_rgba(0,0,0,.18)]
`,
  };

  return (
    <button
      className={`
    ${styles[variant]}

    flex items-center gap-2

    px-4 py-2

    rounded-full

    border-2
    ${variant === "green" ? "border-[#4b2a15]" : "border-[#8d5524]"}

    font-extrabold
    uppercase
    tracking-tight

    ${variant === "green" ? "text-white" : "text-[#4b2a15]"}

    text-sm

    transition-all duration-200

    hover:-translate-y-1
    hover:brightness-105

    active:translate-y-1
    active:shadow-none

    cursor-pointer
  `}
    >
      {icon}
      {children}
    </button>
  );
}
