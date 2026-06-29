import type { Job } from '../components/work-experience-item'
import type { Education } from '../components/education-item'
import type { Language } from '../components/language-item'
import type { SkillCategory } from '../components/skill-group'

export const cv = {
  name: 'Zauri Metreveli',
  title: 'Front-end Engineer',
  summary: `Front-end Developer with 5+ years of experience building real-time React/TypeScript applications for online gaming and casino platforms, specializing in scalable UI architecture, gamification systems, and performance optimization.

Experienced in WebSockets, reusable component systems, design systems, and full-cycle development with backend integrations (PHP, GraphQL), architecture decisions, and code reviews.`,
  photoUrl: undefined,
  contact: {
    email: 'metreveli2014@gmail.com',
    phone: '+(995) 555 45 26 45',
    location: 'Tbilisi, Georgia',
    linkedin: 'linkedin.com/in/zauri-metreveli-a45703164',
    github: 'github.com/Metrevelii',
    instagram: 'instagram.com/metrevelii33',
  },
  jobs: [
    {
      role: 'Front-end Developer',
      company: 'Aviator Studio',
      period: '02/2025 - Present',
      location: 'Tbilisi, Georgia',
      description: 'Developing and maintaining high-traffic, real-money online casino games, focusing on scalable React applications, reusable UI architecture, real-time gameplay features, and performance optimization.',
      achievements: [
        'Developed and maintained production features for Aviator and Minescape, delivering interactive, real-time gaming experiences for a global player base.',
        'Played a key role in the redesign of Aviator, modernizing the user interface and improving usability, maintainability, and overall user experience.',
        'Designed and implemented the Raindrop promotional feature, including gameplay logic, reward claiming, and animated user interactions, allowing players to collect free bets directly within the game.',
        'Built a dynamic skin management system that enables operators to configure brand-specific and event-based game themes directly from the back office without requiring in-game deployments.',
        'Architected a shared component library—buttons, menus, dialogs, accordions, and other core UI primitives—that kept design and behavior consistent across multiple gaming products as the suite scaled.',
        'Built and maintained a shared feature layer powering Minescape, preserving feature parity across products while strong typing kept regressions from creeping into a fast-moving codebase.',
        "Introduced a centralized design-token system for colors, typography, and components, aligning the codebase with the company's Design System and enabling consistent theming across products.",
        'Standardized responsive behavior across the application through shared custom hooks for device and breakpoint detection, removing duplicated logic that had been scattered across teams.',
        'Engineered real-time client-server synchronization for live gameplay over WebSockets, keeping state consistent under continuous, high-frequency updates.',
        'Designed the state architecture for high-frequency, complex UI by combining Zustand, plain mutable singleton objects, and React Context—choosing the right model per use case to keep behavior predictable at scale.',
        'Cut load times and improved runtime efficiency by applying memoization, lazy loading, code splitting, and bundle optimization across the application.',
        'Designed motion systems for gameplay and promotional events using Lottie and CSS animation, increasing engagement during key player moments.',
        'Participated in application architecture discussions, technical design decisions, and peer code reviews to maintain high code quality and long-term scalability.',
        'Collaborated within an Agile development environment with designers, backend engineers, QA specialists, and Product Owners to deliver high-quality production releases.',
      ],
    },
    {
      role: 'Front-end Developer',
      company: 'Flutter',
      period: '03/2021 - Present',
      location: 'Tbilisi, Georgia',
      description: 'Leading development of high-traffic promotional platforms and gamification experiences for one of the largest online casino operators in the Caucasus region.',
      achievements: [
        'Designed and developed large-scale promotional web applications and landing pages used by 100,000–150,000+ monthly users, delivering responsive, high-performance user experiences.',
        'Built numerous interactive casino gamification products for the Georgian market, including slot machine mechanics, spinning wheel games, card games, redeem systems, fullscreen mobile experiences, and other custom promotional components.',
        'Architected a reusable, modular front-end system that let new promotional campaigns ship rapidly without rebuilding core logic each time.',
        'Engineered real-time data integration between front-end interfaces and backend services, keeping live player state—spin counts, redemption status, progression, and eligibility—consistent across complex campaign logic.',
        'Collaborated closely with backend developers to connect database-driven data with dynamic user interfaces, ensuring data consistency and seamless user interactions.',
        'Implemented complex animations and interactive UI behaviors to improve player engagement, campaign retention, and overall user experience.',
        "Played a key role in delivering the company's flagship promotional campaigns for the Georgian market, contributing to increased customer engagement and business growth.",
        "Contributed to the company's market leadership by helping deliver promotional products that supported a 2% increase in Georgian market share, moving the company from #2 to #1 in the market.",
        'Worked in an Agile/Scrum environment, collaborating daily with Product Owners, Scrum Masters, designers, QA engineers, and backend developers to deliver production-ready features.',
        'Utilized Git for version control, code reviews, collaborative development, and maintaining high code quality across multiple concurrent projects.',
      ],
    },
    {
      role: 'Front-end Developer (part-time)',
      company: 'ArtDev',
      period: '10/2022 - 02/2023',
      location: 'Tbilisi, Georgia',
      description: 'This project is an innovative online platform designed to support artists in showcasing and auctioning their paintings to a broad audience.',
      achievements: [
        'Leading front-end development of a real-time bidding platform for artists, architecting the application for long-term maintainability as the product grows.',
        'Delivered the core UI layer across five product surfaces—modals, authentication flows, and accordions—prioritizing consistent interaction patterns over one-off implementations.',
        'Built advanced interaction patterns, including route-transition loading states and pull-to-refresh, to improve perceived performance on mobile.',
        'Designed error-handling flows across login, registration, and upload to reduce user friction and failed submissions.',
        'Optimized data retrieval across the platform by designing efficient GraphQL queries, reducing payload size and response times.',
        'Ongoing collaboration with team members to deliver the project as per defined timelines and quality standards.',
      ],
    },
  ] satisfies Job[],
  education: [
    {
      degree: "Business Administration (Bachelor's Degree)",
      institution: 'Ilia State University',
      period: '09/2016 - 12/2019',
      field: 'Management',
    },
  ] satisfies Education[],
  technicalSkills: [
    {
      title: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'HTML5', 'CSS3 / SCSS'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['React', 'Next.js', 'jQuery', 'Tailwind CSS', 'Bootstrap', 'Zustand', 'GraphQL', 'AJAX', 'Lottie'],
    },
    {
      title: 'Build & Development Tools',
      items: ['Vite', 'Git', 'Figma', 'PugJS'],
    },
    {
      title: 'Architecture & Practices',
      items: [
        'Component-Based Architecture',
        'Design Systems',
        'State Management',
        'Responsive Web Design',
        'Performance Optimization',
        'Lazy Loading',
        'Code Splitting',
        'Memoization',
        'WebSockets',
        'Cross-Browser Compatibility',
        'Agile / Scrum',
      ],
    },
  ] satisfies SkillCategory[],
  languages: [
    { name: 'English', proficiency: 'Upper Intermediate' },
    { name: 'Georgian', proficiency: 'Native Proficiency' },
    { name: 'Russian', proficiency: 'Limited Working Proficiency' },
  ] satisfies Language[],
}
