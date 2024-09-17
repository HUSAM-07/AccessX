import { CourseHandoutsTable } from '@/components/CourseHandoutsTable'

export default function CourseHandoutsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Course Handouts</h1>
      <CourseHandoutsTable />
    </div>
  )
}