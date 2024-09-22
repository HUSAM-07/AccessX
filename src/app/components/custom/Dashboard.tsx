'use client'

import React from 'react'
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
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalLinks.map((portal, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <CardTitle>{portal.title}</CardTitle>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* You can add additional content here if needed */}
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full">
                  <a href={portal.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Go to Resource
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