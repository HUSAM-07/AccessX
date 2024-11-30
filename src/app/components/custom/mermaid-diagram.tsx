"use client";

import { useEffect } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  diagram: string;
  className?: string;
}

export function MermaidDiagram({ diagram, className }: MermaidProps) {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose",
      themeVariables: {
        fontFamily: "inherit",
      },
    });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className={className}>
      <pre className="mermaid">{diagram}</pre>
    </div>
  );
} 