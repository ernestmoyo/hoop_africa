import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-20 bg-primary-500 rounded-full",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
