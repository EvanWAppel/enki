import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & ComponentPropsWithoutRef<"a">)
    | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
  );

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white dark:text-neutral-950 hover:bg-accent-hover focus-visible:ring-accent",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-white dark:hover:text-neutral-950 focus-visible:ring-accent",
  ghost:
    "text-neutral-700 dark:text-neutral-300 hover:text-accent hover:bg-neutral-100 dark:hover:bg-neutral-700 focus-visible:ring-neutral-400",
};

const base =
  "inline-flex items-center justify-center gap-3 px-5 py-3 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonBaseProps & { href: string } & ComponentPropsWithoutRef<"a">;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
