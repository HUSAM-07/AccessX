'use client'

import React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

const courseHandouts = [
  { id: 1, course: "Principles of Programming Languages", filename: "Principles of Programming Languages.pdf", courseType: "CS Core" },
  { id: 2, course: "Theory of Computation", filename: "TOC.pdf", courseType: "CS Core" },
  { id: 3, course: "Data Mining", filename: "Data Mining.pdf", courseType: "CS Elective" },
  { id: 4, course: "Compiler Construction", filename: "Compiler Construction.pdf", courseType: "CS Core" },
  { id: 5, course: "Principles of Management", filename: "Principles of Management.pdf", courseType: "Open Elective/Core" },
  { id: 6, course: "Optimization", filename: "Optimization.pdf", courseType: "Open Elective" },
  { id: 7, course: "Introduction to Arabic", filename: "Introduction to ARABIC.pdf", courseType: "Open Elective"},
  { id:8, course: "Principles of Economics", filename: "Principles of Economics.pdf", courseType: "Open Elective/Core"},
  { id:9, course: "Introduction to Psychology", filename: "Introduction to Psychology.docx", courseType: "Open Elective"},
  { id:10, course: "Applied Statistical Methods", filename: "Applied Statistical Methods.docx", courseType: "Open Elective"},
  { id:11, course: "Computer Networks", filename: "Computer Networks.pdf", courseType: "CS Core"},
  { id:12, course: "Design and Analysis of Algorithms", filename: "Design and Analysis of Algorithms.doc", courseType: "CS Core"},
  { id:13, course: "Environmental Studies", filename: "Environmental Studies.pdf", courseType: "Core Elective(Ungraded)"},
  { id:14, course: "International Law", filename: "International Law.docx", courseType: "Open Elective"},
  { id:15, course: "Machine Learning", filename: "Machine Learning.pdf", courseType: "CS Elective"},
  { id:16, course: "Modern Political Concepts", filename: "Modern Political Concepts.doc", courseType: "Open Elective"}


  // Add more handouts as needed
]

type Handout = {
  id: number
  course: string
  filename: string
  courseType: string
}

const columns: ColumnDef<Handout>[] = [
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "courseType",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Course Type
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <a
        href={`/handouts/${row.original.filename}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View PDF
      </a>
    ),
  },
]

export function CourseHandoutsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  const table = useReactTable({
    data: courseHandouts,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by course type..."
          value={(table.getColumn("courseType")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("courseType")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
