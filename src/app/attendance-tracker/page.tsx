"use client";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

interface Subject {
  total: number
  missed: number
}

interface AttendanceTrackerProps {
  // Remove the onBack prop from here
}

const AttendanceTracker: React.FC<AttendanceTrackerProps> = () => {
  const [subjects, setSubjects] = useState<Record<string, Subject>>({})
  const [newSubject, setNewSubject] = useState("")
  const [totalClasses, setTotalClasses] = useState(30)

  useEffect(() => {
    const storedSubjects = localStorage.getItem("subjects")
    if (storedSubjects) {
      setSubjects(JSON.parse(storedSubjects))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects))
  }, [subjects])

  const addSubject = () => {
    if (newSubject && !(newSubject in subjects)) {
      setSubjects(prev => ({
        ...prev,
        [newSubject]: { total: totalClasses, missed: 0 }
      }))
      setNewSubject("")
      setTotalClasses(30)
    }
  }

  const updateMissedClasses = (subject: string, missed: number) => {
    setSubjects(prev => ({
      ...prev,
      [subject]: { ...prev[subject], missed }
    }))
  }

  const clearAllSubjects = () => {
    setSubjects({})
    localStorage.removeItem("subjects")
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance Tracker</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Add New Subject</h3>
        <Input
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          placeholder="Enter a new subject"
          className="mb-2"
        />
        <Input
          type="number"
          value={totalClasses}
          onChange={(e) => setTotalClasses(parseInt(e.target.value))}
          min={1}
          className="mb-2"
        />
        <Button onClick={addSubject}>Add Subject</Button>
      </div>

      {Object.keys(subjects).length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold mb-2">Your Subjects</h3>
          <div className="grid grid-cols-4 gap-4 mb-2">
            <div>Subject</div>
            <div>Missed</div>
            <div>Total</div>
            <div>Attendance</div>
          </div>
          {Object.entries(subjects).map(([subject, data]) => (
            <div key={subject} className="grid grid-cols-4 gap-4 mb-2">
              <div>{subject}</div>
              <Input
                type="number"
                value={data.missed}
                onChange={(e) => updateMissedClasses(subject, parseInt(e.target.value))}
                min={0}
                max={data.total}
              />
              <div>{data.total}</div>
              <div>{(((data.total - data.missed) / data.total) * 100).toFixed(2)}%</div>
              <Progress value={((data.total - data.missed) / data.total) * 100} className="col-span-4" />
            </div>
          ))}
          <Button onClick={clearAllSubjects} className="mt-4">Clear All Subjects</Button>
        </div>
      ) : (
        <p>No subjects added yet&sbquo; Use the Add New Subject section to start tracking attendance</p>
      )}
    </div>
  )
}

export default function AttendanceTrackerPage() {
  return <AttendanceTracker />;
}
