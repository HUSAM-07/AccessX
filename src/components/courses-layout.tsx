import { Sidebar } from '@/components/sidebar'

interface EMCLayoutProps {
  children: React.ReactNode
}

export function CoursesLayout({ children }: EMCLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 container flex-col md:flex-row flex md:gap-6 md:py-6">
        <Sidebar className="md:w-1/4" />
        <main className="flex-1 py-6 md:py-0">{children}</main>
      </div>
    </div>
  )
}

