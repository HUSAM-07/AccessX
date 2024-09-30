"use client"

import React, { useState, useMemo } from "react"
import Image from "next/image"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">List of Companies</h1>
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
      <div className="text-center text-sm text-gray-500">
        <p>All the companies listed are potential companies that have been reported to come for recruitment season every year.</p>
      </div>
    </div>
  )
}