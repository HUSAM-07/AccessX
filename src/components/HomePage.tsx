"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import DotPattern from "@/components/magicui/dot-pattern"; // Adjust the import path as needed

interface HomePageProps {
  onEnter: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onEnter }) => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 z-0">
        <DotPattern />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white bg-opacity-80">
          <h1 className="text-2xl font-bold">UniDash</h1>
          <nav>
            <ul className="flex space-x-4 items-center">
              <li><Link href="/about" className="text-gray-600 hover:text-black">About Us</Link></li>
              <li><Link href="/attendance-tracker" className="text-gray-600 hover:text-black">Attendance Tracker</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center mb-8 bg-white bg-opacity-80 p-8 rounded-lg">
            <h2 className="text-5xl font-bold mb-4">All University Resources in a Single Place</h2>
            <p className="text-xl text-gray-600 mb-8">
              Quickly access course materials, campus services, and academic tools. 
              Stay organized and save time with UniDash.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800" onClick={onEnter}>
              Go to UniDash
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;