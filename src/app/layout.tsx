import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uni◉Dash - BITS Pilani Dubai Campus',
  description: 'Access all your university tools and resources in one place',
  icons: {
    icon: '/favicon.svg', // Path to your new favicon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isHomePage && (
          <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/course-handouts">Course Handouts</Link></li>
              <li><Link href="/attendance-tracker">Attendance Tracker</Link></li>
              {/* Add more navigation items as needed */}
            </ul>
          </nav>
        )}
        {children}
      </body>
    </html>
  )
}
