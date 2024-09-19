import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BITS Student Portal',
  description: 'A portal for BITS Pilani students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="font-medium px-3 py-2 hover-underline-animation">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="font-medium px-3 py-2 hover-underline-animation">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/course-handouts" legacyBehavior passHref>
                    <NavigationMenuLink className="font-medium px-3 py-2 hover-underline-animation">
                      Course Handouts
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/paper-analysis" legacyBehavior passHref>
                    <NavigationMenuLink className="font-medium px-3 py-2 hover-underline-animation">
                      Paper Analysis
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/attendance-tracker" legacyBehavior passHref>
                    <NavigationMenuLink className="font-medium px-3 py-2 hover-underline-animation">
                      Attendance Tracker
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
