"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import DotPattern from "@/components/magicui/dot-pattern"; // Adjust the import path as needed

interface HomePageProps {
  onEnter: () => void;
  navigation: React.ReactNode;
}

function HomePage({ onEnter, navigation }: HomePageProps) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <DotPattern />
      </div>
      
      <div className="relative z-10 p-6">
        <div className="mb-6">
          {navigation}
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to the University Dashboard</h1>
        <p className="mb-4">This is your central hub for all university-related information and tools.</p>
        <Button onClick={onEnter}>Enter Dashboard</Button>
      </div>
    </div>
  );
}

export default HomePage;