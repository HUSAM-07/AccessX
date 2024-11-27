import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/custom/Footer";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu, Sparkle, AtSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackpackIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniDash",
  description: "Start saving time doing your uni work!",
};

function DesktopMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex space-x-6">
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:text-[#fc4707] transition-colors" href="/">
            <AtSign className="h-5 w-5" />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/attendance-tracker">Attendance</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/course-handouts">Course Handouts</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/paper-analysis">Paper Analysis</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/resume-generator">Resume Builder</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/courses">Pathways</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild variant="outline" size="sm">
            <NavigationMenuLink className="inline-flex items-center" href="/career">
              Career Guidance
              <BackpackIcon className="ml-2 h-4 w-4" />
            </NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className="border-purple-200 bg-purple-50 hover:bg-purple-100 hover:text-purple-900 text-purple-700"
          >
            <NavigationMenuLink className="inline-flex items-center" href="/dashboard">
              Access LMS, ERP, and more
              <Sparkle className="ml-2 h-4 w-4" />
            </NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden p-2">
        <Menu className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <a href="/" className="w-full inline-flex items-center">
            <AtSign className="h-4 w-4 mr-2" />
            Home
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/about" className="w-full">About</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/attendance-tracker" className="w-full">Attendance</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/course-handouts" className="w-full">Course Handouts</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/paper-analysis" className="w-full">Paper Analysis</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/resume-generator" className="w-full">Resume Builder</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/courses" className="w-full">Pathways</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button asChild variant="outline" className="w-full justify-start">
            <a href="/career" className="inline-flex items-center justify-start w-full">
              Career Guidance
              <BackpackIcon className="ml-auto h-4 w-4" />
            </a>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button 
            asChild 
            variant="outline" 
            className="w-full justify-start border-purple-200 bg-purple-50 hover:bg-purple-100 hover:text-purple-900 text-purple-700"
          >
            <a href="/dashboard" className="inline-flex items-center justify-start w-full">
              Access LMS, ERP, and more
              <Sparkle className="ml-auto h-4 w-4" />
            </a>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center p-4 md:px-8 border-b border-gray-200">
          <nav className="w-full">
            <DesktopMenu />
            <MobileMenu />
          </nav>
        </header>
        <main className="max-w-full px-4 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
