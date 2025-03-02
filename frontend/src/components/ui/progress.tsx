"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  bookedSlots: number;
  totalSlots: number;
}

function Progress({ className, bookedSlots, totalSlots, ...props }: ProgressProps) {
  const value = (bookedSlots / totalSlots) * 100;

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-primary h-full flex-1 transition-all"
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </ProgressPrimitive.Root>

      {/* Percentage Label */}
      <div className="text-right text-sm font-semibold mt-1 text-primary">
        {Math.round(value)}% booked
      </div>
    </div>
  )
}

export { Progress }
