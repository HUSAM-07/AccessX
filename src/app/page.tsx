"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Menu, X } from "lucide-react"
import AttendanceTracker from "@/components/AttendanceTracker"
import Features from "@/components/Features"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Component() {
  const [isAttendanceTrackerOpen, setIsAttendanceTrackerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const webPages = [
    { name: "Uni-Notes", url: "https://uni-notes.netlify.app/" },
    { name: "ERP", url: "https://erp.bits-pilani.ac.in/" },
    { name: "ACM Library", url: "https://openlib-cs.acmbpdc.org/" },
    { name: "GDSC Resources", url: "https://gdscbpdc.github.io" }
  ]

  return (
    <div className="min-h-screen w-full bg-gray-100 p-2 sm:p-4 md:p-6">
      <Card className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg mb-6">
        <CardHeader className="flex flex-col space-y-2 border-b border-gray-200 bg-gray-50 px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger onClick={() => setActiveTab("home")}>Home</NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger onClick={() => setActiveTab("features")}>Features</NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setIsAttendanceTrackerOpen(true)}>
                      Attendance Tracker
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            <Input className="w-full max-w-[200px]" placeholder="Search..." />
          </div>
          {isMenuOpen && (
            <div className="flex flex-col space-y-2 md:hidden">
              <Button 
                variant={activeTab === "home" ? "default" : "outline"} 
                onClick={() => { setActiveTab("home"); setIsMenuOpen(false); }}
                className="w-full"
              >
                Home page
              </Button>
              <Button 
                variant={activeTab === "features" ? "default" : "outline"} 
                onClick={() => { setActiveTab("features"); setIsMenuOpen(false); }}
                className="w-full"
              >
                Features
              </Button>
              <Button 
                variant="outline" 
                onClick={() => { setIsAttendanceTrackerOpen(true); setIsMenuOpen(false); }}
                className="w-full"
              >
                Attendance Tracker
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-2 sm:p-4">
          {activeTab === "home" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {webPages.map((page, index) => (
                <div key={index} className="border rounded-lg overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]">
                  <h3 className="bg-gray-100 p-2 font-semibold text-sm">{page.name}</h3>
                  <iframe 
                    src={page.url} 
                    title={page.name} 
                    width="100%" 
                    height="100%" 
                    className="border-0"
                  />
                </div>
              ))}
            </div>
          )}
          {activeTab === "features" && <Features />}
        </CardContent>

        <Dialog open={isAttendanceTrackerOpen} onOpenChange={setIsAttendanceTrackerOpen}>
          <DialogContent className="w-[90vw] max-w-[400px] sm:max-w-[600px]">
            <AttendanceTracker />
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  )
}