'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'

const portalLinks = [
  { title: 'BITS ERP', url: 'https://erp.bits-pilani.ac.in/', description: 'Registration, academic progress, and grading', color: 'bg-blue-100' },
  { title: 'LMS', url: 'https://lms.bitspilanidubai.ae/', description: 'Coursework management and resources', color: 'bg-green-100' },
  // ... rest of the portal links ...
]

const Dashboard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Bookmarked Portals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portalLinks.map((portal, index) => (
          <a
            key={index}
            href={portal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-gray-300 rounded-3xl hover:shadow-md transition-all group"
          >
            <h3 className="text-lg font-semibold mb-2">{portal.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{portal.description}</p>
            <div className="text-gray-900 text-sm font-medium hover:text-[#fc4707] transition-colors inline-flex items-center">
              Go to Resource
              <ExternalLink className="ml-2 h-4 w-4" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Dashboard 