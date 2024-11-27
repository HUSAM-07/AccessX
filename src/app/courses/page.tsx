'use client'
import { CoursesLayout } from '@/components/courses-layout'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function CoursesPage() {
  return (
    <CoursesLayout>
      <div className="space-y-6">
        <section id="overview">
          <h2 className="text-3xl font-bold">Course Pathways Guide</h2>
          <p className="mt-2">
            Explore recommended courses for different specializations within Computer Science. This guide helps you choose electives that align with your career goals and interests in various domains of computing.
          </p>
        </section>

        <section id="domains">
          <h2 className="text-3xl font-bold">Core Domains</h2>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Domain</TableHead>
                  <TableHead>Core Courses</TableHead>
                  <TableHead>Recommended Electives</TableHead>
                  <TableHead>Career Paths</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    domain: "Software Engineering",
                    core: "Data Structures, OOP, Database Systems",
                    electives: "Software Engineering, Cloud Computing, DevOps",
                    careers: "Software Developer, Full-stack Engineer"
                  },
                  {
                    domain: "AI/ML",
                    core: "Probability & Statistics, Linear Algebra",
                    electives: "Machine Learning, Deep Learning, NLP",
                    careers: "ML Engineer, Data Scientist"
                  },
                  {
                    domain: "Systems",
                    core: "Computer Architecture, Operating Systems",
                    electives: "Distributed Systems, Computer Networks",
                    careers: "Systems Engineer, DevOps Engineer"
                  },
                  {
                    domain: "Security",
                    core: "Computer Networks, Operating Systems",
                    electives: "Cryptography, Network Security",
                    careers: "Security Analyst, Security Engineer"
                  }
                ].map((domain) => (
                  <TableRow key={domain.domain}>
                    <TableCell className="font-medium">{domain.domain}</TableCell>
                    <TableCell>{domain.core}</TableCell>
                    <TableCell>{domain.electives}</TableCell>
                    <TableCell>{domain.careers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Graduation Prerequisites */}
        <section id="prerequisites">
          <h2 className="text-3xl font-bold mb-6">Graduation Prerequisites</h2>
          <p className="mt-2 mb-6">
            Understanding course prerequisites is crucial for planning your academic journey. Make sure to complete all required electives across different categories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#fc4707] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-[#fc4707] font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold">Open Electives</h3>
              </div>
              <p className="text-gray-600">
                Choose from a wide range of courses across different departments to broaden your knowledge base.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#fc4707] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-[#fc4707] font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold">Disciplinary Electives</h3>
              </div>
              <p className="text-gray-600">
                Specialized courses within your major to deepen your expertise in specific areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#fc4707] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-[#fc4707] font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold">Humanities Electives</h3>
              </div>
              <p className="text-gray-600">
                Courses in humanities and social sciences to develop well-rounded perspectives.
              </p>
            </div>
          </div>
        </section>
      </div>
    </CoursesLayout>
  )
}

