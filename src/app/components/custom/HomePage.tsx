'use client'

import React from 'react'
import Image from 'next/image'

const portalLinks = [
  { title: 'BITS ERP', url: 'https://erp.bits-pilani.ac.in/', description: 'The main website for registration, academic progress, and grading' },
  { title: 'LMS', url: 'https://lms.bitspilanidubai.ae/', description: 'A website for coursework management, assessments, and coursework resources' },
  { title: 'Uni Notes', url: 'https://uni-notes.netlify.app/', description: 'Find information across courses and their respective notes, contributed by individual students' },
  { title: 'Google DSC Resources', url: 'https://gdscbpdc.github.io/', description: 'Find information of technical workshops and events conducted by Google DSC BPDC' },
  { title: 'ACM lib Resources', url: 'https://openlib-cs.acmbpdc.org/', description: 'A library of resources provided by ACM BPDC' },
]

const HomePage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-primary">Unidash</h1>
        <p className="text-xl text-muted-foreground">Your BITS Pilani Dubai Campus Portal Aggregator</p>
      </header>

      <div className="mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for portals"
            className="w-full p-4 pl-12 rounded-full border-2 border-input bg-background focus:outline-none focus:border-primary text-lg text-foreground placeholder:text-muted-foreground"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-foreground">BITS Pilani Dubai Campus Portals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portalLinks.map((portal, index) => (
          <a
            key={index}
            href={portal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card border border-border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">{portal.title}</h3>
            <p className="text-muted-foreground">{portal.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default HomePage