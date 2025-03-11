import * as React from "react" // Modified for notification-system

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return ( // Modified for notification-system
      <input
        type={type}
        className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:           "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file_updated,
          className
        )}
        ref={ref}
        {...props}
      />
// Added for performance-optimization implementation
// Added for performance-optimization implementation
    )
  }
)
Input.displayName = "Input" // Modified for notification-system

export { Input }
