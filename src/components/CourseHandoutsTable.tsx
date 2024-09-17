import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const courseHandouts = [
  { id: 1, course: "Principles of Programming Languages", filename: "Principles of Programming Languages.pdf", uploadDate: "2023-03-15" },
  { id: 2, course: "Theory of Computation", filename: "TOC.pdf", uploadDate: "2023-03-16" },
  { id: 3, course: "Data Mining", filename: "Data Mining.pdf", uploadDate: "2023-03-17" },
  { id: 3, course: "Compiler Construction", filename: "Compiler Construction.pdf", uploadDate: "2023-03-17" },
  // Add more handouts as needed
]

export function CourseHandoutsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course</TableHead>
          <TableHead>Filename</TableHead>
          <TableHead>Upload Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courseHandouts.map((handout) => (
          <TableRow key={handout.id}>
            <TableCell>{handout.course}</TableCell>
            <TableCell>{handout.filename}</TableCell>
            <TableCell>{handout.uploadDate}</TableCell>
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