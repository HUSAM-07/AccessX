import React from 'react';

const webPages = [
    { title: 'BITS ERP', url: 'https://erp.bits-pilani.ac.in/', description: 'The main website for registration, academic progress, and grading' },
    { title: 'LMS', url: 'https://lms.bitspilanidubai.ae/', description: 'A website for coursework management, assessments, and coursework resources' },
    { title: 'Uni Notes', url: 'https://uni-notes.netlify.app/', description: 'Find information across courses and their respective notes, contributed by individual students' },
    { title: 'Google DSC Resources', url: 'https://gdscbpdc.github.io/', description: 'Find information of technical workshops and events conducted by Google DSC BPDC' },
    { title: 'ACM lib Resources', url: 'https://openlib-cs.acmbpdc.org/', description: 'A library of resources provided by ACM BPDC' },
];

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Web Pages</h1>
      <div className="space-y-6">
        {webPages.map((page, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold mb-2">{page.title}</h2>
            <p className="text-sm mb-2">{page.description}</p>
            <div className="w-full h-[600px]">
              <iframe
                src={page.url}
                className="w-full h-full border rounded"
                title={page.title}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;