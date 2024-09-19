import React from 'react';
import ShimmerButton from '@/components/magicui/shimmer-button';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl font-bold mb-4">About UniDash</h2>
      <p className="mb-4 text-sm sm:text-base">
        UniDash is a web application designed to consolidate university portals and websites into a single, accessible platform. Our goal is to help students and faculty easily navigate and find the information they need from various universities.
      </p>
      <p className="text-xl font-bold mb-4">
        With UniDash, You Can:
      </p>
      <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
        <li>Search for specific universities or portals</li>
        <li>Browse a comprehensive list of university resources</li>
        <li>Find tools and resources to help you with your university life</li>
        <li>**Find all the course handouts in a single place**</li>
      </ul>
      <div className="mb-6 flex justify-center">
        <Image
          src="/UniDash_Thumbnail.png"
          alt="UniDash Dashboard"
          width={600}
          height={400}
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
      <div className="flex justify-center">
        <a href="https://www.mohammedhusamuddin.me/" target="_blank" rel="noopener noreferrer">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              About Author
            </span>
          </ShimmerButton>
        </a>
      </div>
    </div>
  )
}