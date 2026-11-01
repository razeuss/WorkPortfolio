import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  variant?: "solid" | "outline";
  arrow?: boolean;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  "data-inspect"?: string;
};

export function Button({ href, variant = "outline", arrow = true, external, className, children, ...rest }: Props) {
  return (
    <Link
      {...rest}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-3.5 text-[13px] font-medium transition-colors duration-150",
        variant === "solid"
          ? "bg-ink text-white hover:bg-ink/85"
          : "border border-line-strong bg-surface text-ink hover:bg-hover",
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={1.75} />
      )}
    </Link>
  );
}
