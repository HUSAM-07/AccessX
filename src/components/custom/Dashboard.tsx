'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

// Move this to a separate config file for better maintainability
import { portalLinks } from '@/config/portal-links'

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalLinks.map((portal, index) => (
            <Card 
              key={portal.title} // Use meaningful key instead of index
              className="hover:shadow-lg transition-shadow flex flex-col h-full rounded-3xl"
            >
              <CardHeader>
                <CardTitle>{portal.title}</CardTitle>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button 
                  asChild 
                  className="w-full rounded-full hover:shadow-md transition-all bg-primary text-primary-foreground hover:bg-[#fc4707]"
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