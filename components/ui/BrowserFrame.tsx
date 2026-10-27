import { cn } from "@/lib/utils";

type Props = {
  url?: string;
  poster?: string;
  video?: string;
  className?: string;
  children?: React.ReactNode;
};

/** Project preview frame. Pass a video (looping, muted) or children (coded UI). */
export function BrowserFrame({ url = "project.app", poster, video, className, children }: Props) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.05)]", className)}>
      <div className="flex h-9 items-center gap-3 border-b border-line px-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="mx-auto flex h-5 w-1/2 max-w-64 items-center justify-center rounded bg-hover font-mono text-[11px] text-faint">
          {url}
        </div>
        <div className="w-[42px]" />
      </div>
      <div className="relative aspect-[4/3] bg-bg sm:aspect-[16/10]">
        {video ? (
          <video className="size-full object-cover" src={video} poster={poster} autoPlay muted loop playsInline preload="none" />
        ) : (
          children ?? <PreviewPlaceholder />
        )}
      </div>
    </div>
  );
}

/** Skeleton UI shown until you add a real preview. */
function PreviewPlaceholder() {
  return (
    <div className="flex size-full">
      <div className="hidden w-1/5 flex-col gap-2 border-r border-line p-3 sm:flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={cn("h-2.5 rounded bg-line", i === 1 && "bg-accent-soft")} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <span className="h-4 w-1/3 rounded bg-line" />
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-14 rounded-lg border border-line bg-surface" />
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-line bg-surface p-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 border-b border-line py-2 last:border-0">
              <span className="size-4 rounded bg-line" />
              <span className="h-2.5 flex-1 rounded bg-line" />
              <span className="h-2.5 w-12 rounded bg-success-soft" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
