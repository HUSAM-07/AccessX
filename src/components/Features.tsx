import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Attendance Tracking</AccordionTrigger>
        <AccordionContent>
          Easily track and manage student attendance with our intuitive interface.
          <Button className="mt-2" variant="outline">
            Learn More
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Course Management</AccordionTrigger>
        <AccordionContent>
          Organize and manage courses, including schedules, materials, and assignments.
          <Button className="mt-2" variant="outline">
            Learn More
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Grade Book</AccordionTrigger>
        <AccordionContent>
          Record and calculate grades, generate reports, and share progress with students.
          <Button className="mt-2" variant="outline">
            Learn More
          </Button>
        </AccordionContent>
      </AccordionItem>
      {/* Add more AccordionItems for additional features */}
    </Accordion>
  )
}
