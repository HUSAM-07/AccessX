'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, Mail, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { BorderBeam } from "@/components/ui/border-beam"
import { Meteors } from "@/components/ui/meteors"

const AuthorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main content wrapper with meteors */}
      <div className="relative overflow-hidden">
        {/* Meteors Background - Contained within main content */}
        <div className="absolute inset-0 w-full h-full">
          <Meteors number={40} />
        </div>

        {/* Content Wrapper */}
        <div className="relative backdrop-blur-[2px] z-10">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16 bg-white/60 backdrop-blur-sm p-8 rounded-3xl">
              <div className="flex-1 space-y-8">
                {/* Say Hello Button - Now at the top */}
                <Button 
                  onClick={() => window.open('mailto:workforhusam@gmail.com')}
                  variant="outline"
                  className="rounded-full hover:bg-[#fc4707] hover:text-white transition-all"
                >
                  Say "Hello!"
                </Button>

                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-gray-600">Hi, I'm Husam 👋</p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Software Engineer. I love building things and helping people.
                  </h1>
                </div>

                {/* Social Links - Before Portfolio Link */}
                <div className="flex gap-4">
                  <Link 
                    href="https://github.com/HUSAM-07" 
                    target="_blank"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link 
                    href="https://x.com/HU_SAM007" 
                    target="_blank"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link 
                    href="mailto:workforhusam@gmail.com"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>

                {/* Portfolio Link - Left aligned */}
                <div className="pt-2 text-left">
                  <AnimatedShinyText className="text-lg sm:text-xl inline-block">
                    <Link 
                      href="https://www.mohammedhusamuddin.me/" 
                      target="_blank" 
                      className="hover:text-black transition-colors inline-flex items-center"
                    >
                      View Portfolio 
                      <ArrowUpRight className="ml-1 w-5 h-5" />
                    </Link>
                  </AnimatedShinyText>
                </div>
              </div>

              {/* Profile Image - Responsive sizing */}
              <div className="relative w-full md:w-auto md:flex-shrink-0">
                <div className="w-full max-w-[300px] aspect-square mx-auto">
                  <Image
                    src="/contributors/husam.jpg"
                    alt="Mohammed Husamuddin"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-16 bg-white/60 backdrop-blur-sm p-8 rounded-3xl">
              <h2 className="text-2xl font-semibold mb-6">About</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed">
                  I am a computer science engineering student and a freelance software engineer. 
                  I interned at Brio Technologies and PropReturns as a Software Engineering and 
                  Data Science Intern. My passion for software lies with dreaming up ideas and 
                  making them come true with elegant interfaces. I take great care in the experience, 
                  architecture, and code quality of the things I build.
                </p>
              </div>
            </div>

            {/* Skills Section - using consistent card styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { 
                  title: 'Engineering', 
                  items: ['Full Stack Development', 'System Architecture', 'API Design'] 
                },
                { 
                  title: 'Data Science', 
                  items: ['Machine Learning', 'Data Analysis', 'Statistical Modeling'] 
                },
                { 
                  title: 'Tools & Technologies', 
                  items: ['React/Next.js', 'Python', 'Cloud Services'] 
                }
              ].map((category, index) => (
                <div 
                  key={index}
                  className="relative p-6 rounded-3xl bg-white/80 backdrop-blur-sm hover:shadow-md transition-all group border border-gray-200 hover:border-[#fc4707]"
                >
                  <BorderBeam 
                    size={300}
                    duration={20}
                    borderWidth={2}
                    colorFrom="#fc4707"
                    colorTo="#ff6b3d"
                    delay={index}
                  />
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects Section - using consistent card styling */}
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl">
              <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'UniDash',
                    description: 'A unified portal for BITS Pilani Dubai Campus students',
                    link: 'https://github.com/HUSAM-07/AccessX'
                  },
                  {
                    title: 'Portfolio',
                    description: 'Personal portfolio website built with Next.js',
                    link: 'https://www.mohammedhusamuddin.me'
                  }
                ].map((project, index) => (
                  <Link 
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="group p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#fc4707] transition-all hover:bg-white/95"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#fc4707]" />
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AuthorPage