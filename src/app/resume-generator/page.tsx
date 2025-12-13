import ShimmerButton from "@/components/magicui/shimmer-button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedHero } from "@/components/ui/animated-hero";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-card flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl space-y-10 text-center">
        {/* Animated Hero for Resume Optimizer */}
        <div>
          <AnimatedHero
            title="Resume Optimizer"
            description="Get AI-powered insights to improve your resume for your dream PS Station"
            ctaText="Try Resume Optimizer"
            ctaLink="https://resume-analyzer.ihusam.tech/"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-foreground">
            Under maintenance
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The Resume Generator is currently under maintenance and will be back soon. Stay tuned!
          </p>
        </div>

        {/* Mockup Image */}
        <div className="relative w-full aspect-[16/9] max-w-2xl mx-auto rounded-2xl overflow-hidden border border-border">
          <Image
            src="/resume-mockup.jpg"
            alt="Resume Generator Preview"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link href="/career" className="text-muted-foreground hover:text-foreground font-medium flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Go back
          </Link>
          <Link href="/career">
            <ShimmerButton
              shimmerColor="#ffffff"
              background="linear-gradient(135deg, #fc4707 0%, #ff6b3d 100%)"
              className="font-medium px-6 py-2 rounded-lg text-white"
            >
              Go home
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
