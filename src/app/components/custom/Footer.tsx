'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLinkIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, PersonIcon, BackpackIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { GitBranch, Signature } from 'lucide-react'
import Link from 'next/link'

const footerSections = [
  {
    title: 'Resources',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Attendance Tracker', href: '/attendance-tracker' },
      { name: 'Course Handouts', href: '/course-handouts' },
      { name: 'PYQ Analyzer', href: '/paper-analysis' },
      { name: 'Career Services', href: '/career' },
    ]
  },
  {
    title: 'Social',
    links: [
      { name: 'Instagram', href: 'https://www.instagram.com/itshu.sam/', icon: <InstagramLogoIcon className="h-4 w-4" /> },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammedhusamuddin/', icon: <LinkedInLogoIcon className="h-4 w-4" /> },
      { name: 'Twitter', href: 'https://x.com/HU_SAM007', icon: <TwitterLogoIcon className="h-4 w-4" /> },
      { name: 'View Portfolio', href: 'https://www.mohammedhusamuddin.me/', icon: <BackpackIcon className="h-4 w-4" /> },
      { name: 'GitHub', href: 'https://github.com/HUSAM-07', icon: <GitHubLogoIcon className="h-4 w-4" /> },
      { name: 'Blog', href: 'https://valuevault.beehiiv.com/', icon: <ExternalLinkIcon className="h-4 w-4" /> },
    ]
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Desktop and Tablet Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground flex items-center transition-colors">
                      {link.name}
                      {'icon' in link && <span className="ml-1">{link.icon}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support Us</h3>
            <Link href="https://buymeacoffee.com/unihusam" className="text-muted-foreground hover:text-foreground flex items-center transition-colors">
              <PersonIcon className="h-4 w-4 mr-2" />
              Thank the Author
            </Link>
            <Link href="/contribute" className="text-muted-foreground hover:text-foreground flex items-center transition-colors">
              <GitBranch className="h-4 w-4 mr-2" />
              Contribute as a Developer
            </Link>
            <Link href="/author" className="text-muted-foreground hover:text-foreground flex items-center transition-colors">
              <Signature className="h-4 w-4 mr-2" />
              Author Page
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
                        <Link href={link.href} className="text-muted-foreground hover:text-foreground flex items-center transition-colors">
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
                <Link href="https://buymeacoffee.com/unihusam" className="text-muted-foreground hover:text-foreground flex items-center transition-colors">
                  <PersonIcon className="h-4 w-4 mr-2" />
                  Thank the Author
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/contribute" className="text-muted-foreground hover:text-foreground flex items-center transition-colors">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Contribute as a Developer
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/author" className="text-muted-foreground hover:text-foreground flex items-center transition-colors">
                  <Signature className="h-4 w-4 mr-2" />
                  Author Page
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 UniDash All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/contribute" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/contribute" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/contribute" className="hover:text-foreground transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer