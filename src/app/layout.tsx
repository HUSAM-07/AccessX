import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/custom/Footer";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniDash",
  description: "Start your saving hours daily!",
};

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
        <header className="flex justify-between items-center p-4 md:px-8 md:justify-start border-b border-gray-200">
          <nav className="w-full">
            <DesktopMenu />
            <MobileMenu />
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
