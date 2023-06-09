import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: React.ComponentProps<"div">["className"];
  disabled?: boolean;
  icon?: ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`flex flex-row items-center justify-center gap-1 rounded-full bg-primary px-4 py-2 font-semibold text-slate-100 hover:brightness-110 ${
        props.className || ""
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon}
      {props.children}
    </button>
  );
};

export default Button;
