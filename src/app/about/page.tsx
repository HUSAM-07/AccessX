import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Coffee } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-4">Frequently asked questions</h1>
        <p className="text-gray-600">Everything you need to know about UniDash and its features.</p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* What is UniDash? */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#fc4707] transition-colors">
          <h3 className="text-lg font-semibold mb-4">What is UniDash?</h3>
          <p className="text-gray-600">
            UniDash is a web application designed to consolidate university portals and websites into a single, accessible platform. Our goal is to help students and faculty easily navigate and find the information & tools they need.
          </p>
        </div>

        {/* What can you do with UniDash? */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#fc4707] transition-colors">
          <h3 className="text-lg font-semibold mb-4">What can you do with UniDash?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#fc4707]"></div>
              <span>Find all university portals in a single page</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#fc4707]"></div>
              <span>Track your attendance with built-in tools</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#fc4707]"></div>
              <span>Access course handouts in one place</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#fc4707]"></div>
              <span>Get career guidance & practice school resources</span>
            </li>
          </ul>
        </div>

        {/* Available Resources */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#fc4707] transition-colors">
          <h3 className="text-lg font-semibold mb-4">What resources are available?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#fc4707]"></div>
              <span>LMS & ERP access</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#fc4707]"></div>
              <span>Student-contributed course notes</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#fc4707]"></div>
              <span>Google DSC & ACM resources</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#fc4707]"></div>
              <span>Association resources and compiled notes</span>
            </li>
          </ul>
        </div>

        {/* Preview Image */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#fc4707] transition-colors">
          <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
            <Image
              src="/UniDash_Thumbnail.png"
              alt="UniDash Dashboard"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 text-sm">
            A glimpse of the UniDash interface - your all-in-one university resource hub
          </p>
        </div>
      </div>

      {/* Support Us Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-8">Support Us</h2>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Coffee className="w-8 h-8 text-[#fc4707]" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Help us keep UniDash running</h3>
              <p className="text-gray-600">
                If you find UniDash helpful, consider supporting us. Your contribution helps maintain and improve the platform for everyone.
              </p>
              <a 
                href="https://buymeacoffee.com/unihusam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <ShimmerButton
                  shimmerColor="#ffffff"
                  background="linear-gradient(135deg, #fc4707 0%, #ff6b3d 100%)"
                  className="font-medium px-6 py-3 rounded-lg text-white"
                >
                  Buy me a coffee ☕
                </ShimmerButton>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Author Button */}
      <div className="text-center">
        <a 
          href="https://www.mohammedhusamuddin.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <ShimmerButton
            shimmerColor="#ffffff"
            background="linear-gradient(135deg, #fc4707 0%, #ff6b3d 100%)"
            className="font-medium px-6 py-2 rounded-lg text-white"
          >
            About Author
          </ShimmerButton>
        </a>
      </div>
    </div>
  );
}