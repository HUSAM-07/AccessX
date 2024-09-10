import React from 'react';

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">About Unidash</h2>
      <p className="mb-4">
        Unidash is a web application designed to consolidate university portals and websites into a single, accessible platform. Our goal is to help students and faculty easily navigate and find the information they need from various universities.
      </p>
      <p className="mb-4">
        With Unidash, you can:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Search for specific universities or portals</li>
        <li>Browse a comprehensive list of universities and their corresponding portals</li>
        <li>Bookmark your favorite university portals for quick access</li>
        <li>Create a personalized dashboard to display your bookmarked portals</li>
      </ul>
      <p>
        We're committed to providing a user-friendly, intuitive, and responsive experience across all devices. If you have any questions or feedback, please don't hesitate to contact us.
      </p>
    </div>
  )
}

export default About
