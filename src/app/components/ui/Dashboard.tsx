'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const portalLinks = [
  { title: 'BITS ERP', url: 'https://erp.bits-pilani.ac.in/', description: 'Registration, academic progress, and grading', color: 'bg-blue-100' },
  { title: 'LMS', url: 'https://lms.bitspilanidubai.ae/', description: 'Coursework management and resources', color: 'bg-green-100' },
  { title: 'Uni Notes', url: 'https://uni-notes.netlify.app/', description: 'Course notes contributed by students', color: 'bg-yellow-100' },
  { title: 'Google DSC Resources', url: 'https://gdscbpdc.github.io/', description: 'Technical workshops and events', color: 'bg-red-100' },
  { title: 'ACM lib Resources', url: 'https://openlib-cs.acmbpdc.org/', description: 'Library of resources by ACM BPDC', color: 'bg-purple-100' },
]

interface DashboardProps {
  onAttendanceClick: () => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onAttendanceClick, onLogout }) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalLinks.map((portal, index) => (
            <Card key={index} className={`${portal.color} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <CardTitle>{portal.title}</CardTitle>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <a href={portal.url} target="_blank" rel="noopener noreferrer">
                    Open
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard