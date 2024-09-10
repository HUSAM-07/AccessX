'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Course {
  name: string;
  attended: number;
  total: number;
}

const subjectOptions = [
  "Computer Networks",
  "Database Systems",
  "Operating Systems",
  "Data Structures",
  "Algorithms",
  "Software Engineering",
  "Web Development",
  "Machine Learning",
  "Artificial Intelligence",
  "Cybersecurity",
]

const AttendanceTracker = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedSubject, setSelectedSubject] = useState("")

  const handleLogin = () => {
    // Implement Google login logic here
    setIsLoggedIn(true)
  }

  const updateAttendance = (index: number, attended: number, total: number) => {
    const updatedCourses = [...courses]
    updatedCourses[index] = { ...updatedCourses[index], attended, total }
    setCourses(updatedCourses)
  }

  const addSubject = () => {
    if (selectedSubject && !courses.some(course => course.name === selectedSubject)) {
      setCourses([...courses, { name: selectedSubject, attended: 0, total: 48 }])
      setSelectedSubject("")
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Attendance Tracker</h2>
        <p className="mb-4">Please log in with your BITS Pilani Gmail ID to access the Attendance Tracker.</p>
        <Button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Login with Google
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Attendance Tracker</h2>
      <div className="mb-6 flex space-x-4">
        <Select onValueChange={setSelectedSubject} value={selectedSubject}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            {subjectOptions.map((subject) => (
              <SelectItem key={subject} value={subject}>{subject}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={addSubject}>Add Subject</Button>
      </div>
      <div className="grid gap-6">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>Track your attendance for this course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <label className="mr-2">Attended:</label>
                  <Input
                    type="number"
                    value={course.attended}
                    onChange={(e) => updateAttendance(index, parseInt(e.target.value), course.total)}
                    className="w-20"
                  />
                </div>
                <div>
                  <label className="mr-2">Total:</label>
                  <Input
                    type="number"
                    value={course.total}
                    onChange={(e) => updateAttendance(index, course.attended, parseInt(e.target.value))}
                    className="w-20"
                  />
                </div>
                <div>
                  Attendance: {course.total > 0 ? ((course.attended / course.total) * 100).toFixed(2) : 0}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AttendanceTracker