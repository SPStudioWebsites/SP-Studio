import { cn } from "@/lib/utils";

export function GradientOrbs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="gradient-orb gradient-orb-a absolute -top-[20%] -left-[10%] h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full animate-drift-slow" />
      <div className="gradient-orb gradient-orb-b absolute -bottom-[20%] -right-[10%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] rounded-full animate-drift" />
      <div className="gradient-orb gradient-orb-c absolute top-[35%] left-[40%] h-[35vw] w-[35vw] max-h-[450px] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-drift" />
    </div>
  );
}
