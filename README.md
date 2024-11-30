# UniDash 🎓

> A unified portal aggregator for BITS Pilani Dubai Campus

UniDash simplifies university life by bringing all your academic tools and resources into one place. Built specifically for BITS Pilani Dubai Campus students and faculty.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.0-38bdf8)](https://tailwindcss.com/)

## 📚 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/unidash.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🚀 Key Features

### 📱 Core Functionality
- Single sign-on integration for all university portals
- Unified dashboard for ERP, LMS, and other systems
- Progressive Web App (PWA) support

### 📚 Academic Resources
- Course pathways visualization
- Previous year papers repository
- Student-contributed study materials
- ACM library access integration

### 💼 Career Services
- PS1/PS2 company listings
- Resume builder and templates
- Career counseling appointment system
- Google DSC resources

## 🛠️ Technical Overview

### Tech Stack
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI/Shadcn
- **Authentication**: Firebase
- **Data Management**: 
  - SWR for fetching
  - React Hooks for state
  - Papa Parse for CSV handling
- **Icons**: Lucide React

### System Architecture

```mermaid
flowchart TD
A[UniDash] --> B[Frontend]
A --> C[Authentication]
A --> D[Data Management]
B --> B1[Next.js 14]
B --> B2[TypeScript]
B --> B3[Tailwind CSS]
B --> B4[Radix UI/Shadcn]
C --> C1[Firebase Auth]
D --> D1[SWR]
D --> D2[React Hooks]
D --> D3[Papa Parse]
```

### User Flow

```mermaid
flowchart LR
User --> |Authenticates| Auth[Firebase Auth]
Auth --> |Grants Access| App[UniDash App]
App --> |Fetches Data| Resources[University Resources]
Resources --> ERP[BITS ERP]
Resources --> LMS[LMS Portal]
Resources --> Notes[Uni Notes]
Resources --> Career[Career Services]
```

## 👩‍💻 Development Guide

### Project Structure
```
unidash/
├── src/
│   ├── app/         # Next.js app router
│   ├── components/  # Reusable UI components
│   ├── lib/        # Utility functions
│   └── styles/     # Global styles
├── public/         # Static assets
└── tests/         # Test files
```

### Contributing Workflow

```mermaid
flowchart LR
    A[Fork] --> B[Clone]
    B --> C[Create Branch]
    C --> D[Make Changes]
    D --> E[Test]
    E --> F[Create PR]
```

## 🚀 Deployment

### Deployment Flow
```mermaid
flowchart LR
A[Code Changes] --> B[PR Created]
B --> C[Preview Deploy]
C --> D{Tests Pass?}
D -->|Yes| E[Review]
D -->|No| A
E --> F[Merge to Main]
F --> G[Production Deploy]
```

## 📄 Additional Resources

- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](LICENSE.md)

## 🤝 Support

For support, email support@unidash.com or join our [Discord community](https://discord.gg/unidash).