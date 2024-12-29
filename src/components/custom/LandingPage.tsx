'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

const LandingPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">UniDash</h1>
          <Button 
            onClick={() => router.push('/dashboard')}
            variant="outline"
            className="rounded-full"
          >
            Dashboard
          </Button>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center px-4 max-w-4xl mx-auto text-center">
        <div className="relative w-full max-w-[600px] aspect-[16/9] mb-8">
          <Image
            src="/hero-illustration.png"
            alt="UniDash Platform Preview"
            fill
            sizes="(max-width: 600px) 100vw, 600px"
            className="object-cover rounded-2xl"
            priority
            loading="eager"
          />
        </div>
        <div className="text-sm mb-4 flex items-center justify-center">
          <Image 
            src="/bits.png" 
            alt="Student Council Logo" 
            width={24} 
            height={24} 
            className="mr-2 rounded-full"
            loading="eager"
          />
          <span className="text-xs sm:text-sm">Trusted by Students at BITS Pilani Dubai Campus</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Access all your university tools and resources in one place.
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Quickly find info about course requirements, simplify resources navigation, be organized. Save hours on your academic planning.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            onClick={() => router.push('/dashboard')}
            className="bg-black text-white px-6 py-3 rounded-full w-full sm:w-auto"
          >
            Access Dashboard
          </Button>
          <span className="text-sm sm:text-base">Join 1000+ faculty and students</span>
        </div>
      </main>
    </div>
  )
}

export default LandingPage 