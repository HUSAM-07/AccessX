import React from 'react';
import AttendanceTracker from '@/app/components/ui/AttendanceTracker';

export default function AttendanceTrackerPage() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Attendance Tracker</h2>
      <AttendanceTracker />
    </div>
  )
}
