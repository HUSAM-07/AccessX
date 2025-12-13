import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Coffee, Zap, BookOpen, GraduationCap, LayoutGrid, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          UniDash is a web application designed to consolidate university portals and websites into a single, 
          accessible platform with features like auth, API routes, and static pages.
        </p>
      </div>

      <Separator className="my-16" />

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Portal Integration */}
        <div className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:border-[#fc4707] transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
            <LayoutGrid className="w-6 h-6 text-[#fc4707]" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Portal Integration</h3>
          <p className="text-muted-foreground">
            Access LMS, ERP, and other university portals in one place. Simplified navigation for all your academic needs.
          </p>
        </div>

        {/* Academic Tools */}
        <div className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:border-[#fc4707] transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
            <GraduationCap className="w-6 h-6 text-[#fc4707]" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Academic Tools</h3>
          <p className="text-muted-foreground">
            Track attendance, access course handouts, and analyze previous year papers with our built-in tools.
          </p>
        </div>

        {/* Resource Hub */}
        <div className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:border-[#fc4707] transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6 text-[#fc4707]" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Resource Hub</h3>
          <p className="text-muted-foreground">
            Access student-contributed notes, Google DSC resources, and ACM library materials all in one place.
          </p>
        </div>

        {/* Career Services */}
        <div className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:border-[#fc4707] transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="w-6 h-6 text-[#fc4707]" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Career Services</h3>
          <p className="text-muted-foreground">
            Get career guidance, practice school resources, and access to company listings and placement information.
          </p>
        </div>

        {/* Security */}
        <div className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:border-[#fc4707] transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
            <Shield className="w-6 h-6 text-[#fc4707]" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Secure Access</h3>
          <p className="text-muted-foreground">
            Protected with modern authentication and security measures to keep your academic data safe.
          </p>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Preview Section */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Modern Interface</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Clean and intuitive design for the best user experience
          </p>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-border">
            <Image
              src="/UniDash_Thumbnail.png"
              alt="UniDash Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Support Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-3xl p-12 max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm">
            <Coffee className="w-8 h-8 text-[#fc4707]" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Support UniDash</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            If you find UniDash helpful, consider supporting us. Your contribution helps maintain and improve the platform for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://buymeacoffee.com/unihusam" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ShimmerButton
                shimmerColor="#ffffff"
                background="linear-gradient(135deg, #fc4707 0%, #ff6b3d 100%)"
                className="font-medium px-8 py-3 rounded-xl text-white"
              >
                Buy me a coffee ☕
              </ShimmerButton>
            </a>
            <a 
              href="https://www.mohammedhusamuddin.me/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ShimmerButton
                shimmerColor="#ffffff"
                background="linear-gradient(135deg, #fc4707 0%, #ff6b3d 100%)"
                className="font-medium px-8 py-3 rounded-xl text-white"
              >
                About Author
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}