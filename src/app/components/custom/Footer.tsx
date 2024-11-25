'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLinkIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const footerSections = [
  {
    title: 'Resources',
    links: [
      { name: 'Attendance Tracker', href: '/attendance-tracker' },
      { name: 'Course Handouts', href: '/course-handouts' },
      { name: 'PYQ Analyzer', href: '/paper-analysis' },
      { name: 'Career Services', href: '/career' },
      { name: 'Resume Generator', href: '/resume-generator' },
    ]
  },
  {
    title: 'Social',
    links: [
      { name: 'Instagram', href: 'https://www.instagram.com/itshu.sam/', icon: <InstagramLogoIcon className="h-4 w-4" /> },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammedhusamuddin/', icon: <LinkedInLogoIcon className="h-4 w-4" /> },
      { name: 'Twitter', href: 'https://x.com/HU_SAM007', icon: <TwitterLogoIcon className="h-4 w-4" /> },
      { name: 'Blog', href: 'https://valuevault.beehiiv.com/', icon: <ExternalLinkIcon className="h-4 w-4" /> },
    ]
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Desktop and Tablet Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-600 hover:text-gray-900 flex items-center">
                      {link.name}
                      {'icon' in link && <span className="ml-1">{link.icon}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold mb-4">Support Us</h3>
            <Link href="https://buymeacoffee.com/unihusam" className="text-gray-600 hover:text-gray-900 flex items-center">
              <PersonIcon className="h-4 w-4 mr-2" />
              Thank the Author
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          <Accordion type="single" collapsible className="w-full">
            {footerSections.map((section, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{section.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="text-gray-600 hover:text-gray-900 flex items-center">
                          {link.name}
                          {'icon' in link && <span className="ml-1">{link.icon}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="support-us">
              <AccordionTrigger>Support Us</AccordionTrigger>
              <AccordionContent>
                <Link href="https://www.buymeacoffee.com/yourname" className="text-gray-600 hover:text-gray-900 flex items-center">
                  <PersonIcon className="h-4 w-4 mr-2" />
                  Thank the Author
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>© 2024 UniDash All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-900">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer