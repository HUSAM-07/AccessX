'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, RefreshCw, Terminal, Home, BookOpen } from 'lucide-react'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import ShimmerButton from "@/components/magicui/shimmer-button"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"

const puns = [
  "Oops! Looks like this page took a coffee break at the BITS cafe!",
  "404: This page is as elusive as a free slot in your timetable!",
  "This page went for PS2 and forgot to return.",
  "Houston, we have a problem. This page is as lost as a freshman in C-Block!",
  "404: Like missing attendance, this page isn't where it should be.",
  "This page is taking a power nap in the library.",
  "Error 404: This page is still stuck in online classes.",
  "Looks like this page took a wrong turn at the Academic Block.",
  "404: This page is as mysterious as the campus cats!",
  "This page is probably in a lab practical right now.",
  "Error: This page is busier than the cafeteria during lunch break.",
  "404: This page went for a walk to lighthouse and got lost.",
  "This page is as unavailable as SAC during exam week.",
  "Oops! This page is running on BITS time (always 5 minutes late).",
  "404: Like the campus WiFi, this page is temporarily unavailable.",
];

export default function UniversalError() {
  const [pun, setPun] = useState('')

  const getRandomPun = () => {
    const randomIndex = Math.floor(Math.random() * puns.length)
    setPun(puns[randomIndex])
  }

  useEffect(() => {
    getRandomPun()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-background">
      <div className="space-y-6 max-w-md">
        <NeonGradientCard 
          className="p-8"
          neonColors={{ firstColor: '#fc4707', secondColor: '#ff6b3d' }}
        >
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-6">
            {pun}
          </p>
        </NeonGradientCard>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Looking for something?</AlertTitle>
          <AlertDescription>
            Try checking the navigation menu or use the links below to find what you need.
          </AlertDescription>
        </Alert>

        <Button variant="outline" size="sm" onClick={getRandomPun} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          New Pun
        </Button>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="default" className="flex-1">
            <Link href="/" className="inline-flex items-center justify-center">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="flex-1">
            <Link href="/course-handouts" className="inline-flex items-center justify-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Course Resources
            </Link>
          </Button>
        </div>

        <ShimmerButton
          className="w-full"
        >
          <Link href="https://github.com/HUSAM-07" className="inline-flex items-center justify-center w-full" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Report an Issue
          </Link>
        </ShimmerButton>
      </div>
    </div>
  )
}