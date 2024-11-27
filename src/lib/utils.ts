import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault()
  const href = e.currentTarget.href
  const targetId = href.replace(/.*\#/, "")
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: "smooth"
  })
}
