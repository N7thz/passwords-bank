import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface RobotProps extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

export const Robot = ({ 
  animated = true, 
  size = "md", 
  className, 
  ...props 
}: RobotProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  }

  return (
    <div 
      className={cn(
        "flex items-center justify-center",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-full",
          animated && "animate-bounce animate-duration-2000 animate-ease-in-out animate-infinite"
        )}
      >
        {/* Robot Body */}
        <rect
          x="50"
          y="80"
          width="100"
          height="80"
          rx="10"
          className="fill-primary stroke-primary-foreground stroke-2"
        />
        
        {/* Robot Head */}
        <rect
          x="60"
          y="40"
          width="80"
          height="60"
          rx="15"
          className="fill-primary stroke-primary-foreground stroke-2"
        />
        
        {/* Eyes */}
        <circle
          cx="80"
          cy="65"
          r="8"
          className={cn(
            "fill-primary-foreground",
            animated && "animate-pulse animate-duration-1000 animate-infinite"
          )}
        />
        <circle
          cx="120"
          cy="65"
          r="8"
          className={cn(
            "fill-primary-foreground", 
            animated && "animate-pulse animate-duration-1000 animate-infinite animate-delay-500"
          )}
        />
        
        {/* Eye pupils */}
        <circle
          cx="80"
          cy="65"
          r="3"
          className="fill-primary"
        />
        <circle
          cx="120"
          cy="65"
          r="3"
          className="fill-primary"
        />
        
        {/* Mouth */}
        <rect
          x="85"
          y="80"
          width="30"
          height="4"
          rx="2"
          className="fill-primary-foreground"
        />
        
        {/* Antenna */}
        <line
          x1="100"
          y1="40"
          x2="100"
          y2="25"
          className="stroke-primary-foreground stroke-3"
        />
        <circle
          cx="100"
          cy="25"
          r="4"
          className={cn(
            "fill-destructive",
            animated && "animate-ping animate-duration-2000 animate-infinite"
          )}
        />
        
        {/* Arms */}
        <rect
          x="30"
          y="90"
          width="25"
          height="8"
          rx="4"
          className="fill-primary stroke-primary-foreground stroke-1"
        />
        <rect
          x="145"
          y="90"
          width="25"
          height="8"
          rx="4"
          className="fill-primary stroke-primary-foreground stroke-1"
        />
        
        {/* Hands */}
        <circle
          cx="25"
          cy="94"
          r="8"
          className="fill-primary stroke-primary-foreground stroke-2"
        />
        <circle
          cx="175"
          cy="94"
          r="8"
          className="fill-primary stroke-primary-foreground stroke-2"
        />
        
        {/* Legs */}
        <rect
          x="70"
          y="160"
          width="12"
          height="25"
          rx="6"
          className="fill-primary stroke-primary-foreground stroke-1"
        />
        <rect
          x="118"
          y="160"
          width="12"
          height="25"
          rx="6"
          className="fill-primary stroke-primary-foreground stroke-1"
        />
        
        {/* Feet */}
        <ellipse
          cx="76"
          cy="190"
          rx="15"
          ry="6"
          className="fill-primary stroke-primary-foreground stroke-2"
        />
        <ellipse
          cx="124"
          cy="190"
          rx="15"
          ry="6"
          className="fill-primary stroke-primary-foreground stroke-2"
        />
        
        {/* Body Details */}
        <rect
          x="70"
          y="100"
          width="20"
          height="4"
          rx="2"
          className="fill-primary-foreground"
        />
        <rect
          x="70"
          y="110"
          width="15"
          height="4"
          rx="2"
          className="fill-primary-foreground"
        />
        <rect
          x="70"
          y="120"
          width="25"
          height="4"
          rx="2"
          className="fill-primary-foreground"
        />
        
        {/* Control Panel */}
        <rect
          x="110"
          y="100"
          width="30"
          height="30"
          rx="5"
          className="fill-card stroke-primary-foreground stroke-1"
        />
        
        {/* Control Buttons */}
        <circle
          cx="118"
          cy="108"
          r="3"
          className={cn(
            "fill-green-500",
            animated && "animate-pulse animate-duration-1500 animate-infinite"
          )}
        />
        <circle
          cx="132"
          cy="108"
          r="3"
          className={cn(
            "fill-yellow-500",
            animated && "animate-pulse animate-duration-1500 animate-infinite animate-delay-300"
          )}
        />
        <circle
          cx="118"
          cy="122"
          r="3"
          className={cn(
            "fill-blue-500",
            animated && "animate-pulse animate-duration-1500 animate-infinite animate-delay-600"
          )}
        />
        <circle
          cx="132"
          cy="122"
          r="3"
          className={cn(
            "fill-red-500",
            animated && "animate-pulse animate-duration-1500 animate-infinite animate-delay-900"
          )}
        />
      </svg>
    </div>
  )
}

// Loading variant with different animation
export const RobotLoader = ({ 
  size = "md", 
  className, 
  ...props 
}: Omit<RobotProps, "animated">) => {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)} {...props}>
      <Robot 
        size={size} 
        animated 
        className="animate-spin animate-duration-3000 animate-ease-in-out animate-infinite"
      />
      <p className="text-sm text-muted-foreground animate-pulse">
        Securing your passwords...
      </p>
    </div>
  )
}

// Security themed variant
export const SecurityRobot = ({ 
  size = "lg", 
  className, 
  ...props 
}: Omit<RobotProps, "animated">) => {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)} {...props}>
      <Robot size={size} animated />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-primary">Password Guardian</h3>
        <p className="text-sm text-muted-foreground">
          Your digital security companion
        </p>
      </div>
    </div>
  )
}
