## Project Requirements for Unidash: A University Portal Aggregator

### 1. Overview
Unidash is a web application designed to consolidate the university portals and websites of BITS Pilani Dubai Campus into a single, accessible platform. Users will be able to easily navigate and find the information they need from various portals embedded in the application.

### 2. Features
* **Landing Page:**
  * Simple and intuitive interface (as provided in the image)
  * A dashboard page with all the embedded portals
  * An attendance tracker page which allows students to track their attendance for a their courses, students will have to login using their GMAIL ID
* **User Authentication:**
  * Optional user registration and login features
  * Allow users to create profiles and save preferences
* **Mobile Responsiveness:**
  * The application should be fully responsive and accessible on various devices, including smartphones and tablets
* **Website Link:**
    { title: 'BITS ERP', url: 'https://erp.bits-pilani.ac.in/', description: 'The main website for registration, academic progress, and grading' },
    { title: 'LMS', url: 'https://lms.bitspilanidubai.ae/', description: 'A website for coursework management, assessments, and coursework resources' },
    { title: 'Uni Notes', url: 'https://uni-notes.netlify.app/', description: 'Find information across courses and their respective notes, contributed by individual students' },
    { title: 'Google DSC Resources', url: 'https://gdscbpdc.github.io/', description: 'Find information of technical workshops and events conducted by Google DSC BPDC' },
    { title: 'ACM lib Resources', url: 'https://openlib-cs.acmbpdc.org/', description: 'A library of resources provided by ACM BPDC' },

### 3. Technology Stack
* **Frontend:**
  * Tailwind CSS for styling
  * NextJs

### 4. Design and User Experience
* Adhere to the provided landing page design or create a new design that aligns with the application's purpose
* Ensure a user-friendly and intuitive interface
* Prioritize accessibility and inclusivity in the design
* Optimize for performance and load times

### 5. Development and Deployment
* Follow a structured development methodology (e.g., Agile)
* Implement version control (e.g., Git)
* Conduct thorough testing (unit, integration, and end-to-end)
* Deploy the application to a suitable hosting environment

### 6. Maintenance and Updates
* Establish a maintenance plan for regular updates and bug fixes
* Monitor user feedback and implement necessary improvements
* Consider future features and enhancements to expand the application's capabilities

### 7. File Structure
MY-APP
├── next
├── node_modules
├── public
├── requirements
├── src
│   └── app
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx
│       └── components
│           ├── magicui
│           │   └── dot-pattern.tsx
│           └── ui
│               ├── About.tsx
│               ├── AttendanceTracker.tsx
│               ├── Dashboard.tsx
│               └── HomePage.tsx
├── lib
├── bits.png
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

**Note:** This is a basic requirements document. The specific implementation details may vary depending on the complexity of the project and the chosen technologies. It's important to refine and expand these requirements as the project progresses.
