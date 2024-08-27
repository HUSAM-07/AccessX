"use client";

import { useState } from 'react';
import HomePage from '@/components/HomePage';
import Dashboard from '@/components/Dashboard';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from 'next/link';
import AttendanceTracker from '@/components/AttendanceTracker'; // Import the existing component

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showAttendanceTracker, setShowAttendanceTracker] = useState(false);

  const renderNavigation = () => (
    <nav className="flex items-center justify-between p-4">
      <div className="font-bold text-xl">UniDash</div>
      <div className="flex items-center space-x-4">
        <a href="f20210150@dubai.bits-pilani.ac.in" className="hover:underline">Contact</a>
        <Link href="/about" className="hover:underline">About</Link>
        <button onClick={() => setShowAttendanceTracker(true)} className="hover:underline">Attendance Tracker</button>
        <Link href="/code" className="text-gray-500 hover:underline">Code</Link>
        <Button variant="default" className="bg-black text-white px-4 py-2 rounded-md">Join Up</Button>
      </div>
    </nav>
  );

  if (showAttendanceTracker) {
    return <AttendanceTracker onBack={() => setShowAttendanceTracker(false)} />;
  }

  if (!showDashboard) {
    return (
      <HomePage 
        onEnter={() => setShowDashboard(true)}
        navigation={renderNavigation()}
      />
    );
  }

  return <Dashboard />;
}