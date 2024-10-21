import dynamic from 'next/dynamic'

const CourseHandoutsTable = dynamic(() => import('@/components/CourseHandoutsTable').then((mod) => mod.CourseHandoutsTable), { ssr: false })

export default function CourseHandoutsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Course Handouts</h1>
      <CourseHandoutsTable />
    </div>
  )
}
