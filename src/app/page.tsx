"use client";

import { useState } from 'react';
import HomePage from '@/components/HomePage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const webPages = [
    { name: "Uni-Notes", url: "https://uninotes.com" },
    { name: "ERP", url: "https://erp.bits-pilani.ac.in" },
    // Add other web pages as needed
  ];

  if (!showDashboard) {
    return <HomePage onEnter={() => setShowDashboard(true)} />;
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 p-2 sm:p-4 md:p-6">
      <Card className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg mb-6">
        <CardHeader className="border-b border-gray-200 bg-gray-50 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">University Dashboard</h2>
            <div className="flex space-x-2">
              <Button
                variant={activeTab === "home" ? "default" : "outline"}
                onClick={() => setActiveTab("home")}
              >
                Home
              </Button>
              <Button
                variant={activeTab === "features" ? "default" : "outline"}
                onClick={() => setActiveTab("features")}
              >
                Features
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-2 sm:p-4">
          {activeTab === "home" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {webPages.map((page, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{page.name}</h3>
                  <div className="h-[400px] sm:h-[500px] md:h-[600px]">
                    <iframe 
                      src={page.url} 
                      title={page.name} 
                      width="100%" 
                      height="100%" 
                      className="border-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "features" && <div>Features content here</div>}
        </CardContent>
      </Card>
    </div>
  );
}