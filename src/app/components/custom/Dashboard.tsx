'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { User } from 'firebase/auth'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

const portalLinks = [
  { title: 'BITS ERP', url: 'https://erp.bits-pilani.ac.in/', description: 'Registration, academic progress, and grading', color: 'bg-blue-100' },
  { title: 'LMS', url: 'https://lms.bitspilanidubai.ae/', description: 'Coursework management and resources', color: 'bg-green-100' },
  { title: 'Uni-Notes', url: 'https://uni-notes.netlify.app/', description: 'Course notes contributed by students', color: 'bg-yellow-100' },
  { title: 'Google Developer Groups Resources', url: 'https://gdscbpdc.github.io/', description: 'Access to technical resources and guides by Google Developers Groups', color: 'bg-red-100' },
  { title: 'ACM Lib Resources', url: 'https://openlib-cs.acmbpdc.org/', description: 'Library of resources by ACM BPDC', color: 'bg-purple-100' },
  { title: 'MTC Resources', url: 'https://mtcbpdcdubai.github.io/Coursework-Resources-and-Links/', description: 'Set of resources by MTC', color: 'bg-orange-100' },
  { title: 'BITS Library', url: 'http://webopac.bits-dubai.ac.ae/AutoLib/', description: 'Access to books, PYQs and journals', color: 'bg-orange-100' },
]

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const initializeAuth = async () => {
      const { auth } = await import('@/lib/firebase')
      if (auth) {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setUser(user)
          setLoading(false)
          if (!user) {
            router.push('/')
          }
        })
        return () => unsubscribe()
      } else {
        setLoading(false)
        router.push('/')
      }
    }
    initializeAuth()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null // This will prevent the dashboard from rendering before redirecting
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalLinks.map((portal, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow flex flex-col h-full rounded-3xl border border-gray-200">
              <CardHeader>
                <CardTitle>{portal.title}</CardTitle>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* You can add additional content here if needed */}
              </CardContent>
              <CardFooter className="mt-auto">
                <Button 
                  asChild 
                  className="w-full rounded-full hover:shadow-md transition-all bg-gray-900 text-white hover:bg-[#fc4707]"
                  variant="outline"
                >
                  <a 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" /> 
                    Go to Resource
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard