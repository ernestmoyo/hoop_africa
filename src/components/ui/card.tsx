import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-neutral-200 overflow-hidden",
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={cn("w-full h-48 object-cover", className)}
      loading="lazy"
      {...props}
    />
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}
