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
      <div
        className="absolute -top-[20%] -left-[10%] h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full opacity-40 blur-[120px] animate-drift-slow"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,45,143,0.55) 0%, rgba(255,45,143,0.15) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[20%] -right-[10%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] rounded-full opacity-35 blur-[120px] animate-drift"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[35%] left-[40%] h-[35vw] w-[35vw] max-h-[450px] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[100px] animate-drift"
        style={{
          background:
            "radial-gradient(circle at center, rgba(192,38,211,0.5) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
