'use client'

import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface AnimatedHeroProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

const AnimatedHero = ({ 
  title, 
  description, 
  ctaText, 
  ctaLink 
}: AnimatedHeroProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-gray-100">
      <motion.div
        className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="relative pt-20 pb-20 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-[#fc4707] text-white rounded-full px-8 py-6 flex items-center gap-2 text-base">
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export { AnimatedHero }
