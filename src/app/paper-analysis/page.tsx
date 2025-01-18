import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FAQ } from "@/components/ui/faq-section";

export default function PaperAnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Previous Year Paper Analysis</h1>
      <p className="mb-6 text-gray-600">
        Combine all of the PYQs into a single PDF and upload to the site.
        <br />
        <em>The tool used is an open-sourced tool and will never be charged.</em>
        <br />
        <em>We believe in building our own tools or using open-sourced tools to build on top of it.</em>
      </p>
      <Link href="https://elicit.com/" target="_blank" rel="noopener noreferrer">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white mb-16">
          Analyze Papers with Elicit
        </Button>
      </Link>

      {/* FAQ Section with custom content for paper analysis */}
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
