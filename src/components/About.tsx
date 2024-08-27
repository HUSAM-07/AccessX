import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function About() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-4">About Us</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#university" className="text-blue-600 hover:underline">Our University</a></li>
            <li><a href="#courses" className="text-blue-600 hover:underline">Courses & Requirements</a></li>
            <li><a href="#admissions" className="text-blue-600 hover:underline">Admissions</a></li>
            <li><a href="#campus-life" className="text-blue-600 hover:underline">Campus Life</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">About BITS Pilani Dubai Campus</h1>
        
        <section id="university" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our University</h2>
          <p>BITS Pilani Dubai Campus is a premier institution of higher education known for its excellence in engineering and technology. As part of the renowned BITS Pilani network, we offer world-class education with a focus on innovation and practical learning.</p>
        </section>

        <section id="courses" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Courses & Requirements</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Core Subjects and Electives</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Core Subjects:</strong> All core subjects must be completed by the end of the graduation program.</li>
                  <li><strong>Humanities Electives:</strong> Three humanities electives are required.</li>
                  <li><strong>Discipline Electives:</strong> Five discipline electives are required.</li>
                  <li><strong>Open Electives:</strong> Five open electives are required.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Design Projects</AccordionTrigger>
              <AccordionContent>
                <p>It is recommended to incorporate more design projects starting in the second or third year to reduce workload in the fourth year.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Degree Programs</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>B.E. Computer Science</li>
                  <li>B.E. Electrical and Electronics Engineering</li>
                  <li>B.E. Mechanical Engineering</li>
                  <li>B.E. Biotechnology</li>
                  <li>B.E. Software Systems</li>
                  <li>B.E. Microelectronics</li>
                  <li>Executive MBA</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-4">On this page</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#university" className="text-gray-600 hover:text-blue-600">Our University</a></li>
            <li><a href="#courses" className="text-gray-600 hover:text-blue-600">Courses & Requirements</a></li>
            <li><a href="#admissions" className="text-gray-600 hover:text-blue-600">Admissions</a></li>
            <li><a href="#campus-life" className="text-gray-600 hover:text-blue-600">Campus Life</a></li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
