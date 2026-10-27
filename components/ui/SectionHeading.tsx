import { cn } from "@/lib/utils";
import { Pill } from "./Pill";

type Props = {
  id?: string;
  pill: string;
  title: string;
  muted?: string;
  align?: "left" | "center";
  className?: string;
};

/** Attio pattern: small pill, then a headline whose second sentence is muted. */
export function SectionHeading({ id, pill, title, muted, align = "left", className }: Props) {
  return (
    <div className={cn("flex flex-col items-start gap-5", align === "center" && "items-center text-center", className)}>
      <Pill>{pill}</Pill>
      <h2 id={id} className="max-w-[18ch] text-[30px] leading-[1.1] font-medium tracking-[-0.02em] text-balance md:text-[40px]">
        {title} {muted && <span className="text-muted">{muted}</span>}
      </h2>
    </div>
  );
}
