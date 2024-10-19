'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/custom/Footer";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

function DesktopMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex space-x-6">
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:underline" href="/">Home Page</NavigationMenuLink>
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
          <Button asChild variant="outline" size="sm">
            <NavigationMenuLink className="inline-flex items-center" href="/career">
              Career Guidance
              <ArrowRightIcon className="ml-2 h-4 w-4" />
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
          <a href="/" className="w-full">Home Page</a>
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
        <DropdownMenuItem asChild>
          <Button asChild variant="outline" className="w-full justify-start">
            <a href="/career" className="inline-flex items-center w-full">
              Career Guidance
              <ArrowRightIcon className="ml-2 h-4 w-4" />
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
  const pathname = usePathname();
  const showSidebar = !['/'].includes(pathname);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex">
            {showSidebar && <AppSidebar />}
            <div className="flex-1">
              <header className="flex justify-between items-center p-4 md:px-8 md:justify-start border-b border-gray-200">
                <nav className="w-full">
                  {showSidebar && <SidebarTrigger />}
                  <DesktopMenu />
                  <MobileMenu />
                </nav>
              </header>
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
