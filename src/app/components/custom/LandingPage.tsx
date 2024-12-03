'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { User } from 'firebase/auth'

const LandingPage: React.FC = () => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState<string | null>(null)

  useEffect(() => {
    const initializeAuth = async () => {
      const { auth } = await import('@/lib/firebase')
      if (auth) {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setUser(user)
          setLoading(false)
        })
        return () => unsubscribe()
      } else {
        setLoading(false)
      }
    }
    initializeAuth()
  }, [])

  const handleNavigation = async () => {
    if (user) {
      router.push('/dashboard')
    } else {
      try {
        const { auth } = await import('@/lib/firebase')
        const { signInWithPopup, GoogleAuthProvider } = await import('firebase/auth')
        if (auth) {
          const provider = new GoogleAuthProvider()
          await signInWithPopup(auth, provider)
          router.push('/dashboard')
        }
      } catch (error) {
        console.error('Authentication error:', error)
        setAuthError('Failed to sign in. Please try again.')
      }
    }
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
            {user ? 'Dashboard' : 'Log in'}
          </Button>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center px-4 max-w-4xl mx-auto text-center">
        <div className="relative w-full max-w-[600px] aspect-[16/9] mb-8">
          <Image
            src="/hero-illustration.png"
            alt="UniDash Platform Preview"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        <div className="text-sm mb-4 flex items-center justify-center">
          <Image src="/bits.png" alt="Student Council Logo" width={24} height={24} className="mr-2 rounded-full" />
          <span className="text-xs sm:text-sm">Trusted by Students at BITS Pilani Dubai Campus</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Access all your university tools and resources in one place.
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Quickly find info about course requirements, simplify resources navigation, be organized. <span className="font-bold">Save hours on your academic planning.</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            onClick={handleNavigation}
            className="bg-black text-white px-6 py-3 rounded-full w-full sm:w-auto"
          >
            {loading ? 'Loading...' : (user ? 'Go to Dashboard' : 'Sign In')}
          </Button>
          <span className="text-sm sm:text-base">Join 1000+ faculty and students</span>
        </div>
        {authError && <p className="text-red-500 mt-4">{authError}</p>}
      </main>
    </div>
  )
}

export default LandingPage