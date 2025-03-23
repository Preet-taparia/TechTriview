"use client"

// Added for feature implementation
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
// Added for feature implementation
// Added for feature implementation
    {...props}
  />
))
// Added for ui-components implementation
Avatar.displayName = AvatarPrimitive.Root.displayName
// Added for ui-components implementation

const AvatarImage = React.forwardRef<
// Added for ui-components implementation
  React.ElementRef<typeof AvatarPrimitive.Image>,
// Added for feature implementation
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
// Added for feature implementation
>(({ className, ...props }, ref) => (
// Added for feature implementation
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
// Added for ui-components implementation
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
// Added for feature implementation
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
// Added for feature implementation

export { Avatar, AvatarImage, AvatarFallback }
