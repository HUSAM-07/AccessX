"use client"

import React, { useState, useMemo } from "react"
import Image from "next/image"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { VelocityScroll } from "@/components/ui/scroll-based-velocity"
import { Separator } from "@/components/ui/separator"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useSWR from 'swr'
import Papa from 'papaparse'
import ShimmerButton from '@/components/magicui/shimmer-button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const sortOptions = [
  { value: "stipend_high_low", label: "Stipend: High to Low" },
  { value: "ps1", label: "PS-1" },
  { value: "ps2", label: "PS-2" },
]

type Company = {
  "Company Name": string;
  Stipend: string;
  "Common Roles": string;
  "Hires In": string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.text()).then((data) => {
  const parsed = Papa.parse(data, { header: true });
  return parsed.data as Company[];
});

export default function CareerPage() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const companiesPerPage = 5
  const { data: companies, error } = useSWR<Company[]>('/companies.csv', fetcher)

  const sortedCompanies = useMemo(() => {
    if (!companies) return [];
    
    let sorted = [...companies];
    
    if (value === "stipend_high_low") {
      sorted.sort((a, b) => {
        const stipendA = parseInt(a.Stipend.replace(/[^0-9]/g, '')) || 0;
        const stipendB = parseInt(b.Stipend.replace(/[^0-9]/g, '')) || 0;
        return stipendB - stipendA;
      });
    } else if (value === "ps1") {
      sorted = sorted.filter(company => company["Hires In"].includes("PS-1"));
    } else if (value === "ps2") {
      sorted = sorted.filter(company => company["Hires In"].includes("PS-2"));
    }
    
    return sorted;
  }, [companies, value]);

  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * companiesPerPage
    return sortedCompanies.slice(startIndex, startIndex + companiesPerPage)
  }, [sortedCompanies, currentPage])

  const totalPages = useMemo(() => {
    return Math.ceil(sortedCompanies.length / companiesPerPage)
  }, [sortedCompanies])

  if (error) return <div>Failed to load</div>
  if (!companies) return <div>Loading...</div>

  const sections = [
    { id: "about", title: "What We Are" },
    { id: "vision-mission", title: "Our Vision and Mission" },
    { id: "support", title: "Support We Offer" },
    { id: "resume-tips", title: "Resume Building Tips" },
    { id: "companies", title: "List of Companies" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-blue-50 opacity-20 blur-3xl rounded-3xl"></div>
        <div className="relative">
          <span className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full mb-4">We're Hiring!</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Career Services Division</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            We're looking for passionate people to join us on our mission. We value clear communication, and full ownership and responsibility.
          </p>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-2 mb-12 justify-start">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="inline-flex px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {section.title}
          </a>
        ))}
      </div>

      {/* About CSD Section */}
      <section id="about" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">What We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-600">
              The Career Services Division at BITS Pilani Dubai plays a pivotal role in facilitating career opportunities for students in their final years and after graduation. We foster strong industry partnerships to bring a wide range of employment options.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-600">
              Our flagship event, the BITS Career Fair, takes place during the second semester each year, attracting over 70 companies from various sectors to recruit students from all disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Building Tips Section */}
      <section id="resume-tips" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Resume Building Tips</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold mb-4">Create a Winning Resume</h3>
              <p className="text-gray-600 mb-8">
                Download our comprehensive guide to crafting a professional resume that stands out. 
                Learn about formatting best practices, essential sections, and industry-specific tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <ShimmerButton
                  onClick={() => window.open('/Resume Building Process.pdf', '_blank')}
                  shimmerColor="#000000"
                  background="linear-gradient(135deg, #000000 0%, #333333 100%)"
                  className="font-medium px-6 py-2 rounded-full"
                >
                  Download Resume Guide
                </ShimmerButton>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-gray-600">Professional formatting templates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-gray-600">Action words and power phrases</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-gray-600">Industry-specific examples</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-gray-600">Common mistakes to avoid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">List of Companies</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <p className="text-sm text-gray-500">
                Found {sortedCompanies.length} companies
              </p>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between rounded-full"
                  >
                    {value
                      ? sortOptions.find((option) => option.value === value)?.label
                      : "Filter by"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                      <CommandEmpty>No option found.</CommandEmpty>
                      <CommandGroup>
                        {sortOptions.map((option) => (
                          <CommandItem
                            key={option.value}
                            value={option.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue)
                              setOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === option.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {option.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="border rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-medium">Company Name</TableHead>
                    <TableHead className="font-medium">Stipend</TableHead>
                    <TableHead className="font-medium hidden md:table-cell">Common Roles</TableHead>
                    <TableHead className="font-medium hidden md:table-cell">Hires In</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedCompanies.map((company) => (
                    <TableRow key={company["Company Name"]} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{company["Company Name"]}</TableCell>
                      <TableCell>{company.Stipend}</TableCell>
                      <TableCell className="hidden md:table-cell">{company["Common Roles"]}</TableCell>
                      <TableCell className="hidden md:table-cell">{company["Hires In"]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing {Math.min(companiesPerPage, sortedCompanies.length)} of {sortedCompanies.length} companies
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full border border-gray-200",
                    currentPage === 1 
                      ? "opacity-50 cursor-not-allowed" 
                      : "hover:bg-gray-50 cursor-pointer"
                  )}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full border border-gray-200",
                    currentPage === totalPages 
                      ? "opacity-50 cursor-not-allowed" 
                      : "hover:bg-gray-50 cursor-pointer"
                  )}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center text-sm text-gray-500">
        <p>All the companies listed are potential companies that have been reported to come for recruitment season every year.</p>
      </div>
    </div>
  )
}
