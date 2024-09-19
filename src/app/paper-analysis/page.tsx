import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

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
      <Link href="https://www.pdftochat.com/" target="_blank" rel="noopener noreferrer">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Analyze Papers with PDFtoChat
        </Button>
      </Link>
    </div>
  );
}
