import type React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("bg-[#1E1E1E] border border-[#FF4420]/20 rounded-2xl text-white shadow-sm", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };