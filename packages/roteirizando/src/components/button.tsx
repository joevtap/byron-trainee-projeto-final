interface ButtonProps {
  variant: "CTA" | "primary" | "secondary" | "destroy";
  type: "button" | "anchor";
  children: React.ReactNode;
  submit?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return props.type === "button" ? (
    <button
      onClick={props.onClick}
      type={props.submit ? "submit" : "button"}
      className={`${
        props.variant === "secondary"
          ? "bg-neutral-50 h-12 border-[1px] border-neutral-300 rounded-lg text-neutral-700 px-8 py-2 font-sans font-medium text-sm"
          : props.variant === "primary"
          ? "bg-yellow-300 h-12 rounded-lg text-neutral-800 font-medium text-sm px-8 py-2 font-sans"
          : props.variant === "destroy"
          ? "bg-red-600 h-12 rounded-lg text-neutral-50 font-medium text-sm px-8 py-2 font-sans"
          : null
      } ${props.className} hover:brightness-90 transition-all duration-200`}
    >
      {props.children}
    </button>
  ) : (
    <a
      href={props.href}
      className={`${
        props.variant === "CTA"
          ? "bg-blue-700 flex items-center justify-center w-full md:w-fit text-neutral-50 h-14 px-8 py-2 font-semibold text-base font-sans rounded-lg"
          : props.variant === "primary"
          ? "bg-blue-700"
          : "bg-neutral-50 h-12 border-[1px] border-neutral-300 rounded-lg text-neutral-700"
      } ${props.className} hover:brightness-90 transition-all duration-200`}
    >
      {props.children}
    </a>
  );
};
