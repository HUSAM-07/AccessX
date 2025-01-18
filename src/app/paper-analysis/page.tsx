import React from 'react';
import { FAQ } from "@/components/ui/faq-section";
import { AnimatedHero } from "@/components/ui/animated-hero";

export default function PaperAnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedHero 
        title="Previous Year Paper Analysis"
        description="Combine all of the PYQs into a single PDF and upload to the site. The tool used is an open-sourced tool and will never be charged. We believe in building our own tools or using open-sourced tools to build on top of it."
        ctaText="Analyze Papers with Elicit"
        ctaLink="https://elicit.com/"
      />

      <FAQ 
        title="Paper Analysis FAQ"
        description="Common questions about our idea of analyzing previous year papers"
        questions={[
          {
            question: "How does the paper analysis tool work?",
            answer: "The tool uses AI to analyze patterns in previous year papers, helping identify important topics and question types."
          },
          {
            question: "What format should I upload my papers in?",
            answer: "Please upload your papers in PDF format. Make sure they are clearly scanned and text is readable."
          },
          {
            question: "Is there a limit to how many papers I can analyze?",
            answer: "No, you can analyze as many papers as you need. However, we recommend analyzing papers from the last 3-5 years for best results."
          },
          {
            question: "How accurate is the analysis?",
            answer: "The analysis provides insights based on historical patterns but should be used as a study aid, not a definitive prediction."
          },
          {
            question: "Can I analyze papers from different courses?",
            answer: "Yes, you can analyze papers from any course. Just make sure to organize them properly before uploading."
          },
          {
            question: "How long does the analysis take?",
            answer: "The analysis typically takes 2-3 minutes per paper, depending on the length and complexity."
          },
          {
            question: "Can I download the analysis results?",
            answer: "Yes, you can download the analysis results in PDF format for offline reference."
          },
          {
            question: "Is my paper data secure?",
            answer: "Yes, all uploaded papers are processed securely and are not stored permanently on our servers."
          }
        ]}
      />
    </div>
  );
}
