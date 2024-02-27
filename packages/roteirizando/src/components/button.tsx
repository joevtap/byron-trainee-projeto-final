interface ButtonProps {
  variant: "CTA" | "primary" | "secondary";
  type: "button" | "anchor";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return props.type === "button" ? (
    <button onClick={props.onClick}>{props.children}</button>
  ) : (
    <a
      href={props.href}
      className={`${
        props.variant === "CTA"
          ? "bg-blue-700 flex items-center justify-center w-full md:w-fit text-neutral-50 h-14 px-8 py-2 font-semibold text-base font-sans rounded-lg"
          : props.variant === "primary"
          ? "bg-blue-700"
          : "bg-neutral-50"
      } ${props.className} hover:brightness-90 transition-all duration-200`}
    >
      {props.children}
    </a>
  );
};
