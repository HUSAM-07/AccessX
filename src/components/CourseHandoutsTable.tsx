import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const courseHandouts = [
  { id: 1, course: "Principles of Programming Languages", filename: "Principles of Programming Languages.pdf", courseType: "CS Core" },
  { id: 2, course: "Theory of Computation", filename: "TOC.pdf", courseType: "CS Core" },
  { id: 3, course: "Data Mining", filename: "Data Mining.pdf", courseType: "CS Elective" },
  { id: 4, course: "Compiler Construction", filename: "Compiler Construction.pdf", courseType: "CS Core" },
  { id: 5, course: "Principles of Management", filename: "Principles of Management.pdf", courseType: "Open Elective/Core" },
  { id: 6, course: "Optimization", filename: "Optimization.pdf", courseType: "Open Elective" },
  { id: 7, course: "Introduction to Arabic", filename: "Introduction to ARABIC.pdf", courseType: "Open Elective"},
  { id:8, course: "Principles of Economics", filename: "Principles of Economics.pdf", courseType: "Open Elective/Core"}
  // Add more handouts as needed
]

export function CourseHandoutsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course</TableHead>
          <TableHead>Filename</TableHead>
          <TableHead>Course Type</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courseHandouts.map((handout) => (
          <TableRow key={handout.id}>
            <TableCell>{handout.course}</TableCell>
            <TableCell>{handout.filename}</TableCell>
            <TableCell>{handout.courseType}</TableCell>
            <TableCell>
              <a
                href={`/handouts/${handout.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View PDF
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}