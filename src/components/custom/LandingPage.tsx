'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

const LandingPage = () => {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">UniDash</h1>
          <Button 
            onClick={handleNavigation}
            variant="outline"
            className="rounded-full"
          >
            Dashboard
          </Button>
        </div>
      </nav>
      {/* ... rest of the existing content ... */}
    </div>
  )
} 