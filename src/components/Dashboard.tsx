import React from 'react';
import { ExternalLink } from 'lucide-react';

const portalLinks = [
    { title: 'BITS ERP', url: 'https://erp.bits-pilani.ac.in/', description: 'The main website for registration, academic progress, and grading' },
    { title: 'LMS', url: 'https://lms.bitspilanidubai.ae/', description: 'A website for coursework management, assessments, and coursework resources' },
    { title: 'Uni Notes', url: 'https://uni-notes.netlify.app/', description: 'Find information across courses and their respective notes, contributed by individual students' },
    { title: 'Google DSC Resources', url: 'https://gdscbpdc.github.io/', description: 'Find information of technical workshops and events conducted by Google DSC BPDC' },
    { title: 'ACM lib Resources', url: 'https://openlib-cs.acmbpdc.org/', description: 'A library of resources provided by ACM BPDC' },
    { title: 'MTC Resources', url: 'https://mtcbpdcdubai.github.io/Coursework-Resources-and-Links/', description: 'A set of resources provided by MTC' }

];

const Dashboard: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Bookmarked Portals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portalLinks.map((portal, index) => (
                    <a
                        key={index}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 border border-gray-300 rounded-3xl hover:shadow-md transition-all group"
                    >
                        <h3 className="text-lg font-semibold mb-2">{portal.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{portal.description}</p>
                        <div className="text-gray-900 text-sm font-medium hover:text-[#fc4707] transition-colors inline-flex items-center">
                            Go to Resource
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;