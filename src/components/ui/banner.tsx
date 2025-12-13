"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

function Grid({
  cellSize = 12,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className,
}: {
  cellSize?: number
  strokeWidth?: number
  patternOffset?: [number, number]
  className?: string
}) {
  const id = React.useId()

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 text-black/10",
        className,
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          x={patternOffset[0] - 1}
          y={patternOffset[1] - 1}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#grid-${id})`} width="100%" height="100%" />
    </svg>
  )
}

interface BannerProps {
  show: boolean
  onHide: () => void
  icon?: React.ReactNode
  title: React.ReactNode
  action: {
    label: string
    onClick: () => void
  }
  learnMoreUrl?: string
}

export function Banner({
  show,
  onHide,
  icon,
  title,
  action,
  learnMoreUrl,
}: BannerProps) {
  if (!show) return null

  return (
    <div className="relative isolate flex flex-col justify-between gap-3 overflow-hidden rounded-lg border border-border bg-gradient-to-r from-muted/80 to-muted/60 py-3 pl-4 pr-12 sm:flex-row sm:items-center sm:py-2">
      <Grid
        cellSize={13}
        patternOffset={[0, -1]}
        className="text-foreground/30 mix-blend-overlay [mask-image:linear-gradient(to_right,black,transparent)] md:[mask-image:linear-gradient(to_right,black_60%,transparent)]"
      />

      <div className="flex items-center gap-3">
        {icon && (
          <div className="hidden rounded-full border border-border bg-background/50 p-1 shadow-[inset_0_0_1px_1px_hsl(var(--background))] sm:block">
            {icon}
          </div>
        )}
        <p className="text-sm text-foreground">
          {title}
          {learnMoreUrl && (
            <>
              {""}
              <a
                href={learnMoreUrl}
                target="_blank"
                className="text-muted-foreground underline transition-colors hover:text-foreground"
              >
                Learn more
              </a>
            </>
          )}
        </p>
      </div>

      <div className="flex items-center sm:-my-1">
        <button
          type="button"
          className="whitespace-nowrap rounded-md border border-border px-3 py-1 text-sm text-foreground transition-colors hover:bg-accent"
          onClick={action.onClick}
        >
          {action.label}
        </button>
      </div>

      <button
        type="button"
        className="absolute inset-y-0 right-2.5 p-1 text-sm text-muted-foreground underline transition-colors hover:text-foreground"
        onClick={onHide}
      >
        <X className="h-[18px] w-[18px]" />
      </button>
    </div>
  )
}