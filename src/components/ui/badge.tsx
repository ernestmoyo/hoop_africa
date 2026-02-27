import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
}

export function Badge({
  className,
  variant = "primary",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-700",
    accent: "bg-accent-100 text-accent-700",
    outline: "border border-neutral-300 text-neutral-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
