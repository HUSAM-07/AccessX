"use client"

import React, { useState, useMemo } from "react"
import Image from "next/image"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

  if (error) return <div>Failed to load</div>
  if (!companies) return <div>Loading...</div>

  const sections = [
    { id: "about", title: "What We Are" },
    { id: "vision-mission", title: "Our Vision and Mission" },
    { id: "support", title: "Support We Offer" },
    { id: "companies", title: "List of Companies" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Career Services Division</h1>
      
      {/* Navigation */}
      <nav className="mb-8">
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              {index > 0 && (
                <Separator orientation="vertical" className="h-6 hidden md:block" />
              )}
              <li>
                <a
                  href={`#${section.id}`}
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors relative group"
                >
                  {section.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>

      <Separator className="my-8" />
      
      {/* About CSD Section */}
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 mb-4">
              The Career Services Division at BITS Pilani Dubai plays a pivotal role in facilitating career opportunities for students in their final years and after graduation. We foster strong industry partnerships to bring a wide range of employment options, including full-time, part-time, and internship positions.
            </p>
            <p className="text-gray-700">
              Over the years, we&apos;ve supported numerous BITS alumni in developing essential soft and hard skills through workshops, talks, and seminars that prepare them for the professional world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 mb-4">
              Our flagship event, the BITS Career Fair, takes place during the second semester each year, attracting over 70 companies from various sectors to recruit students from all disciplines. Additionally, the Startup Career Fair, held in February, focuses on connecting startups with pre-final and final-year students for both short-term and long-term roles.
            </p>
            <p className="text-gray-700">
              We also organize various sessions at our Center for Higher Education, providing students aspiring to pursue higher studies the opportunity to engage with representatives and admission officers from leading global universities.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Vision and Mission Section */}
      <section id="vision-mission" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision and Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Vision</h2>
            <p className="text-gray-700">
              To empower students to explore and pursue meaningful and fulfilling career paths by providing comprehensive career services.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Mission</h2>
            <p className="text-gray-700">
              To provide exceptional career counselling, coaching, and resources to support students in their career development journey.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Support We Offer Section */}
      <section id="support" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Support We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Career Guidance", "Career Talks & Workshops", "Campus Placement Program", 
            "Career Readiness Programs", "Career Fairs", "Higher Education Support"].map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Companies Section */}
      <section id="companies">
        <h2 className="text-2xl font-semibold mb-6">List of Companies</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
            <div className="w-full h-64 relative mb-4">
              <Image
                src="/cdc_illustration.svg"
                alt="Career Services Division Illustration"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Career Services Division</h2>
            <p className="text-sm text-gray-600 mb-4">
              We help you in bringing clarity in your application process
            </p>
            <p className="text-xs text-gray-500">
              All details and resources provided here, is a part of an initiative by the author and the Career Services Division
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <p className="text-sm text-gray-600 mb-2 sm:mb-0">Found {sortedCompanies.length} companies.</p>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
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
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company Name</TableHead>
                    <TableHead>Stipend</TableHead>
                    <TableHead>Common Roles</TableHead>
                    <TableHead>Hires In</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedCompanies.map((company) => (
                    <TableRow key={company["Company Name"]}>
                      <TableCell>{company["Company Name"]}</TableCell>
                      <TableCell>{company.Stipend}</TableCell>
                      <TableCell>{company["Common Roles"]}</TableCell>
                      <TableCell>{company["Hires In"]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>All the companies listed are potential companies that have been reported to come for recruitment season every year.</p>
      </div>
    </div>
  )
}
