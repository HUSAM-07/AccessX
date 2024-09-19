import React from 'react';
import ShimmerButton from '@/components/magicui/shimmer-button';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">About UniDash</h2>
      <p className="mb-4">
        UniDash is a web application designed to consolidate university portals and websites into a single, accessible platform. Our goal is to help students and faculty easily navigate and find the information they need from various universities.
      </p>
      <p className="text-xl font-bold mb-4">
        With UniDash, You Can:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Search for specific universities or portals</li>
        <li>Browse a comprehensive list of universities and their corresponding portals</li>
        <li>Bookmark your favorite university portals for quick access</li>
        <li>Create a personalized dashboard to display your bookmarked portals</li>
      </ul>
      <div className="mb-6 flex justify-center">
        <Image
          src="/UniDash_Thumbnail.png"
          alt="UniDash Dashboard"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex justify-center"> {/* New wrapper div for centering */}
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">About Author</span>
          <a href="https://www.mohammedhusamuddin.me/" target="_blank" rel="noopener noreferrer"></a>
        </ShimmerButton>
      </div>
    </div>
  )
}