'use client'

import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { VelocityScroll } from "@/components/ui/scroll-based-velocity"
import { MermaidDiagram } from "@/app/components/custom/mermaid-diagram"
import { RainbowButton } from "@/components/ui/rainbow-button"
import AvatarCircles  from "@/components/ui/avatar-circles"

import { 
  MessageSquare, 
  Mail, 
  FileCode, 
  GraduationCap,
  Users,
  GitBranch,
  Code2,
  BookOpen,
  Workflow,
  School,
  FileText,
  Book,
  GitPullRequest,
  Terminal,
  Code,
  Blocks,
  Sparkle,
  ArrowUpRight,
  ShieldCheck

} from "lucide-react"
import ShimmerButton from "@/components/magicui/shimmer-button"
import { Button } from "@/components/ui/button"

export default function ContributePage() {
  const branchingDiagram = `flowchart TD
    A[Branch Types] --> B[feature/]
    A --> C[bugfix/]
    A --> D[hotfix/]
    A --> E[docs/]
    B --> F[feature/add-attendance-tracker]
    C --> G[bugfix/fix-login-error]
    D --> H[hotfix/security-patch]
    E --> I[docs/update-readme]`;

  const prProcessDiagram = `flowchart LR
    A[Create Branch] --> B[Make Changes]
    B --> C[Test Changes]
    C --> D[Create PR]
    D --> E[Code Review]
    E --> F{Approved?}
    F -->|Yes| G[Merge]
    F -->|No| B`;

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-black" />,
      title: "Student-First",
      description: "Built by BITS Pilani Dubai students for students"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-black" />,
      title: "Community",
      description: "Join our Discord for real-time collaboration"
    },
    {
      icon: <FileCode className="w-12 h-12 text-black" />,
      title: "Open Source",
      description: "Contribute to improve university experience"
    },
    {
      icon: <School className="w-12 h-12 text-black" />,
      title: "Academic Focus",
      description: "Help build tools for academic success"
    },
    {
      icon: <Users className="w-12 h-12 text-black" />,
      title: "Teamwork",
      description: "Work with fellow BITS Pilani developers"
    }
  ]

  const documentationSections = [
    {
      title: "Getting Started",
      description: "Quick setup guide and development environment configuration",
      icon: <Terminal className="w-6 h-6" />,
      className: "col-span-12 sm:col-span-6 md:col-span-6 xl:row-span-4"
    },
    {
      title: "Component Guidelines",
      description: "Learn about our component structure and best practices",
      icon: <Blocks className="w-6 h-6" />,
      className: "col-span-12 sm:col-span-6 md:col-span-3 xl:row-span-4"
    },
    {
      title: "API Documentation",
      description: "Explore our API endpoints and integration guides",
      icon: <Code className="w-6 h-6" />,
      className: "col-span-12 sm:col-span-6 md:col-span-3 xl:row-span-2"
    },
    {
      title: "Contributing Guide",
      description: "Learn how to contribute to UniDash effectively",
      icon: <GitPullRequest className="w-6 h-6" />,
      className: "col-span-12 sm:col-span-6 md:col-span-3 xl:row-span-2"
    }
  ]

  const contributors = [
    {
      imageUrl: "https://github.com/HUSAM-07.png",
      profileUrl: "https://github.com/HUSAM-07"
    },
    // Add more contributors as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center max-w-7xl">
        <div className="flex justify-center mb-8">
          <RainbowButton
            className="font-medium text-white flex items-center gap-2"
          >
            <span>We are accepting contributions now!</span>
            <Sparkle className="w-4 h-4" />
          </RainbowButton>
        </div>

        <h1 className="flex flex-col gap-2 sm:gap-4 mb-6 sm:mb-8">
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold">
            Contribute to UniDash
          </span>
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#fc4707] to-[#ff6b3d] text-transparent bg-clip-text">
            Make University Life Better
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-6">
          Join us in building the ultimate unified portal for BITS Pilani Dubai Campus students.
          Every contribution helps make university life easier for everyone.
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href="https://github.com/HUSAM-07/AccessX"
          className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
        >
          <span>Start Contributing</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>

        {/* Feature List */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 text-base sm:text-lg text-gray-600">
          <span className="flex items-center justify-center gap-3">
            <GitBranch className="w-5 h-5 sm:w-6 sm:h-6" /> Fork Repository
          </span>
          <span className="flex items-center justify-center gap-3">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6" /> TypeScript & Next.js
          </span>
          <span className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" /> Secure & Reliable
          </span>
        </div>
      </div>

      {/* Add Contributors Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Contributors</h2>
            <p className="text-gray-600 mb-8">
              Join these awesome developers and contributors in making unidash better
            </p>
            <div className="flex justify-center">
              <AvatarCircles 
                avatarUrls={contributors}
                numPeople={10} // Represents additional contributors
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Development Workflow Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Development Workflow</h2>
            <p className="text-gray-600">Follow our structured process for contributing to UniDash</p>
          </div>
          
          <ScrollArea className="h-[400px] sm:h-[500px] rounded-xl border">
            <div className="p-4 sm:p-6 lg:p-8 space-y-8 sm:space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Workflow className="w-6 h-6" /> Branch Naming Convention
                </h3>
                <MermaidDiagram 
                  diagram={branchingDiagram}
                  className="bg-white p-6 rounded-xl shadow-sm"
                />
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <GitBranch className="w-6 h-6" /> Pull Request Process
                </h3>
                <MermaidDiagram 
                  diagram={prProcessDiagram}
                  className="bg-white p-6 rounded-xl shadow-sm"
                />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Documentation</h2>
            <p className="text-gray-600 sm:text-lg">Everything you need to contribute effectively</p>
          </div>

          <div className="grid grid-cols-12 gap-4 sm:gap-6 max-w-[1328px] mx-auto">
            {documentationSections.map((section, index) => (
              <div 
                key={index} 
                className={`@container/section flex flex-col p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#fc4707] transition-all hover:shadow-md ${section.className}`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
