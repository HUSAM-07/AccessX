import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQProps {
  title?: string;
  description?: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

function FAQ({ 
  title = "FAQ",
  description = "Frequently asked questions about our services",
  questions 
}: FAQProps) {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{title}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-4xl tracking-tighter max-w-xl text-left font-regular">
                  We're trying something new here and you might have questions
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-slate-500 text-left dark:text-slate-400">
                  {description}
                </p>
              </div>
              <div className="">
                <Button asChild className="gap-4" variant="outline">
                  <a 
                    href="https://uni-dash-pyq-analyzer.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Try and have a look at the beta version <Sparkles className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
