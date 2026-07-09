import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Wiederverwendbarer Browser-Rahmen für echte Projekt-Screenshots.
 * Ersetzt die früheren, pro Sektion duplizierten Mini-Chrome-Leisten und
 * das code-gemalte Fake-Wireframe – überall dieselbe, saubere Optik.
 */
export function BrowserFrame({
  src,
  alt,
  url,
  className,
  imageClassName,
  aspect = "aspect-[16/10]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 620px",
}: {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  imageClassName?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_70px_-30px_rgba(20,24,31,0.32)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-[#f4f3ef] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e5554e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f5b544]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4bbf73]" />
        {url && (
          <div className="ml-2.5 hidden h-5 max-w-[62%] flex-1 items-center gap-1.5 rounded-md border border-border bg-white px-2.5 sm:flex">
            <span className="text-[8px] text-[#4bbf73]">●</span>
            <span className="truncate text-[10px] font-medium text-muted">{url}</span>
          </div>
        )}
      </div>
      <div className={cn("relative", aspect)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={82}
          sizes={sizes}
          className={cn("object-cover object-top", imageClassName)}
        />
      </div>
    </div>
  );
}
