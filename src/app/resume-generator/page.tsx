import ShimmerButton from "@/components/magicui/shimmer-button";
import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Icon */}
        <div className="w-16 h-16 bg-orange-100 rounded-2xl mx-auto flex items-center justify-center">
          <Construction className="w-8 h-8 text-[#fc4707]" />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Resume Generator Coming Soon
          </h1>
          <p className="text-gray-600">
            We're working hard to bring you an amazing resume generation tool. 
            Stay tuned for updates!
          </p>
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Link href="/career">
            <ShimmerButton
              shimmerColor="#ffffff"
              background="linear-gradient(135deg, #fc4707 0%, #ff6b3d 100%)"
              className="font-medium px-6 py-2 rounded-full text-white inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Career Services
            </ShimmerButton>
          </Link>
        </div>

        {/* Timeline */}
        <div className="pt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-medium text-gray-900 mb-4">Expected Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">Development in Progress</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-sm text-gray-600">Testing Phase</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-sm text-gray-600">Launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
