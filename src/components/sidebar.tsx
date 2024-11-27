import Link from 'next/link'
import { cn, smoothScroll } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Target, History, Trophy, Users, LayoutList, Download, HandHeart, Calendar, Briefcase, Award, UserPlus, UserCircle, Network } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const aboutLinks = [
    { href: "#mission", icon: Target, label: "Our Mission" },
    { href: "#history", icon: History, label: "Our History" },
    { href: "#achievements", icon: Trophy, label: "Achievements" },
    { href: "#team", icon: Users, label: "Our Team" },
    { href: "#committees", icon: LayoutList, label: "Committees and Functions" },
    { href: "#resources", icon: Download, label: "Resources and Brand Assets" },
    { href: "#get-involved", icon: HandHeart, label: "Get Involved" },
  ]

  const emcLinks = [
    { href: "#overview", icon: Briefcase, label: "EMC Overview" },
    { href: "#responsibilities", icon: LayoutList, label: "Responsibilities" },
    { href: "#team-heads", icon: UserCircle, label: "Team Heads" },
    { href: "#teams-departments", icon: Network, label: "Teams & Departments" },
    { href: "#upcoming-events", icon: Calendar, label: "Upcoming Events" },
    { href: "#past-events", icon: Award, label: "Past Events Highlights" },
    { href: "#join-emc", icon: UserPlus, label: "Join the EMC" },
  ]

  const courseLinks = [
    { href: "#overview", icon: Briefcase, label: "Course Guide Overview" },
    { href: "#domains", icon: Network, label: "Core Domains" },
    { href: "#specializations", icon: LayoutList, label: "Specialized Tracks" },
    { href: "#prerequisites", icon: History, label: "Prerequisites" },
  ]

  const isAboutPage = pathname === '/about'
  const isEMCPage = pathname === '/emc'
  const isCoursesPage = pathname === '/courses'

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            {isAboutPage ? "About Us" : isEMCPage ? "Event Management Committee" : isCoursesPage ? "Course Pathways" : "Navigation"}
          </h2>
          <div className="space-y-1">
            {isAboutPage && aboutLinks.map((link, index) => (
              <Button key={index} asChild variant={index === 0 ? "secondary" : "ghost"} className="w-full justify-start">
                <Link href={link.href} onClick={smoothScroll}>
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
            {isEMCPage && emcLinks.map((link, index) => (
              <Button key={index} asChild variant={index === 0 ? "secondary" : "ghost"} className="w-full justify-start">
                <Link href={link.href} onClick={smoothScroll}>
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
            {isCoursesPage && courseLinks.map((link, index) => (
              <Button key={index} asChild variant={index === 0 ? "secondary" : "ghost"} className="w-full justify-start">
                <Link href={link.href} onClick={smoothScroll}>
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

