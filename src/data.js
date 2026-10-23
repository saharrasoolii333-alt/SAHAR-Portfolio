export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const SOCIALS = [
  { href: 'https://github.com', icon: 'fa-brands fa-github', title: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/sahar-rasooli', icon: 'fa-brands fa-linkedin-in', title: 'LinkedIn', external: true },
  { href: 'tel:+93783737307', icon: 'fa-solid fa-phone', title: 'Call Phone' },
  { href: 'mailto:sahar.rasoolii333@gmail.com', icon: 'fa-solid fa-envelope', title: 'Email Me' },
]

export const STATS = [
  { to: 4, suffix: 'th', label: 'Year CS Senior' },
  { to: 10, suffix: '+', label: 'Projects Completed' },
  { to: 100, suffix: '%', label: 'Dedication' },
]

export const EDUCATION = [
  {
    logo: '/images/logo-mora-highschool.jpeg',
    alt: 'Mora High School Logo',
    title: 'High School Diploma',
    institution: 'Mora High School',
    tag: 'Secondary Education',
    backTitle: 'Foundational Excellence',
    backText: 'Completed secondary studies with top honors, developing core foundational knowledge in mathematics, logic, and computing.',
    url: 'https://mora.edu.af',
  },
  {
    logo: '/images/logo-auaf.png',
    alt: 'AUAF Logo',
    title: 'B.S. Computer Science',
    institution: 'American University of Afghanistan',
    tag: 'Concentration: Cybersecurity',
    backTitle: 'Specialized Studies',
    backText: 'Advanced coursework in network security architectures, threat analysis, doubly linked lists, hashing algorithms, and digital systems.',
    url: 'https://www.auaf.edu.af',
  },
  {
    logo: '/images/logo-cacc.jpeg',
    alt: 'Canadian All Care College Logo',
    title: 'Professional Diploma',
    institution: 'Canadian All Care College',
    tag: 'Interactive Tech & Web',
    backTitle: 'Key Outcomes',
    backText: 'Comprehensive training covering full-stack web development foundations, modern UI frameworks, and enterprise management tools.',
    url: 'https://allcarecollege.ca',
  },
  {
    logo: '/images/logo-netlinks.jpeg',
    alt: 'Netlinks Logo',
    title: 'Live Development Course',
    institution: 'Netlinks Afghanistan',
    tag: 'Software Engineering',
    backTitle: 'Applied Experience',
    backText: 'Hands-on engineering training focused on enterprise software implementation, modern web programming, and real-world system solutions.',
    url: 'https://netlinks.af',
  },
]

export const EXPERIENCE = [
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Administrative and Documentation Assistant',
    date: null,
    org: 'IWRD Kabul · Kabul, Afghanistan',
    points: [
      'Collected and verified information from staff and stakeholders for accurate reporting.',
      'Coordinated with program teams to gather timely updates for internal reports.',
      'Organized digital records to keep documentation accurate and easy to find.',
    ],
  },
  {
    icon: 'fa-solid fa-pen-nib',
    title: 'Digital Marketing and Content Assistant',
    date: 'Jan – Mar 2025',
    org: 'The Borgen Project · Remote',
    points: [
      'Reviewed field case studies and verified details before writing summaries.',
      'Coordinated with a remote team to plan work and meet deadlines.',
      'Wrote content for a broad public audience.',
    ],
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Communications and Outreach Support Assistant',
    date: 'Jun 2024 – Jan 2025',
    org: 'Art in Tanzania · Remote',
    points: [
      'Compiled field updates, photos, and partner input into accurate reports.',
      'Wrote field based stories documenting community and program information.',
      'Maintained organized records of outreach content and reporting materials.',
    ],
  },
]

export const SKILL_GROUPS = [
  {
    title: 'Development & Security',
    skills: [
      { icon: 'fa-brands fa-html5', name: 'HTML5' },
      { icon: 'fa-brands fa-css3-alt', name: 'CSS Grid & Flexbox' },
      { icon: 'fa-brands fa-js', name: 'JavaScript' },
      { icon: 'fa-solid fa-code', name: 'C++' },
      { icon: 'fa-solid fa-lock', name: 'Network Security' },
      { icon: 'fa-solid fa-diagram-project', name: 'Data Structures' },
    ],
  },
  {
    title: 'Design & Creative Tools',
    skills: [
      { icon: 'fa-brands fa-figma', name: 'Figma' },
      { icon: 'fa-solid fa-layer-group', name: 'Framer' },
      { icon: 'fa-solid fa-photo-film', name: 'Canva' },
      { icon: 'fa-solid fa-video', name: 'Premiere Pro' },
      { icon: 'fa-solid fa-clapperboard', name: 'CapCut' },
      { icon: 'fa-solid fa-robot', name: 'ChatGPT / AI Tools' },
    ],
  },
]

export const PROJECTS = [
  {
    img: '/images/project-skill-courses.jpeg',
    alt: 'Skill Courses App',
    title: 'Skill Courses Mobile UI',
    category: 'Mobile Learning Interface',
    backTitle: 'Skill Courses App',
    backText: 'Designed clean course discovery cards with integrated module trackers and financial planning course highlights.',
    tags: ['Figma', 'Mobile UI'],
  },
  {
    img: '/images/project-saas-form.jpeg',
    alt: 'SaaS Enterprise Form',
    title: 'SaaS Enterprise Form',
    category: 'Web Contact Interface',
    backTitle: 'Untitled UI Landing',
    backText: 'Enterprise layout featuring customized form controls, dynamic multi-column grids, and sleek brand headers.',
    tags: ['HTML/CSS', 'Flexbox'],
  },
  {
    img: '/images/project-real-estate.jpeg',
    alt: 'Real Estate Listings Website',
    title: 'Real Estate Listings Site',
    category: 'Property Browsing UI',
    backTitle: 'Property Showcase',
    backText: 'Featured listings layout with location-based property cards, tags for rent/sale status, and clean card grids.',
    tags: ['UI/UX', 'CSS Grid'],
  },
  {
    img: '/images/project-ecommerce-store.jpeg',
    alt: 'Minimalist Storefront',
    title: 'Minimalist E-Commerce',
    category: 'E-Commerce Landing',
    backTitle: 'Minimalist Storefront',
    backText: 'E-commerce aesthetic featuring smooth typography, luxury visual cards, and high-contrast call-to-actions.',
    tags: ['Web Design', 'Figma'],
  },
  {
    img: '/images/project-netlinks-portal.jpeg',
    alt: 'Netlinks Portal',
    title: 'Enterprise System Portal',
    category: 'Odoo & AI Solutions',
    backTitle: 'Netlinks Portal',
    backText: 'Comprehensive corporate platform layout highlighting enterprise software modules and business integration systems.',
    tags: ['JavaScript', 'SaaS'],
  },
  {
    img: '/images/project-mentor-booking.jpeg',
    alt: 'Mentor Booking Platform',
    title: 'Mentor Directory Grid',
    category: 'Booking Platform',
    backTitle: 'Mentor Booking Platform',
    backText: 'Profile matrix displaying ratings, specialty tags, and direct scheduling triggers for technical mentorship.',
    tags: ['CSS Grid', 'UX System'],
  },
]

export const CONTACT_ITEMS = [
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Kabul, Afghanistan' },
  { icon: 'fa-solid fa-phone', label: 'Phone', value: '+93 783737307' },
  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'sahar.rasoolii333@gmail.com' },
  { icon: 'fa-solid fa-graduation-cap', label: 'University', value: 'American University of Afghanistan' },
]
