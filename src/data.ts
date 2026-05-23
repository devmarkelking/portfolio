import { Project, SkillCategory } from './types';

export const ME_PROFILE = {
  name: 'Mark Elking',
  title: 'Senior PHP & Magento 2 Developer',
  tagline: '7+ Years Building Scalable E-commerce Solutions. I architect high-performance digital experiences with precision and passion.',
  bio: 'With over 7 years of experience in PHP ecosystems, I specialize in transforming complex business requirements into robust, high-performing e-commerce platforms. Since earning my BSIT in 2017, I\'ve dedicated my career to mastering Magento 2 and modern PHP frameworks.',
  bioDetailed: 'I thrive at the intersection of performance and scalability, specializing in complex API integrations and custom module architecture. Currently, I\'m expanding my horizons with Node.js and Next.js to bring more agility to headless commerce solutions.',
  yearsExp: '7+',
  projectsCount: '10+',
  satisfaction: '100%',
  email: 'devmarkelking@gmai.com', // following design guidelines
  location: 'Manila, Philippines',
};

export const PROJECTS: Project[] = [
  {
    id: 'trailready',
    title: 'TrailReadyParts E-commerce Website',
    description: 'Developed a custom Magento 2 e-commerce platform based on a Figma design. Implemented responsive frontend layouts, backend integrations, and optimized user experience for online shoppers.',
    longDescription: 'Developed and maintained a Magento 2 eCommerce platform specializing in OEM off-road vehicle parts and accessories. Implemented custom vehicle fitment search (Year-Make-Model), catalog management, payment integrations, customer account features, and responsive frontend components to improve product discovery and purchasing experience.',
    tags: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'Redis-Cache', 'Less'],
    category: 'E-commerce',
    imageUrl: '/images/trailreadyparts.png',
    liveUrl: 'https://trailreadyparts.com',
    stats: [
      { label: 'PLP page load', value: 'up to 20%' },
      { label: '', value: '' },
      { label: '', value: '' },
    ],
    keyFeatures: [
      'Custom Year-Make-Model vehicle filtering system',
      'Vehicle-specific product catalog and fitment validation',
      'Dedicated brand and vehicle landing pages',
      'Advanced category-based product navigation',
      'Secure checkout with multiple payment methods',
      'Featured products, best sellers, and promotional sections',
      'Newsletter subscription and marketing campaign integration',
      'Shipping, returns, and order tracking functionality',
    ],
    architectureDetails: 'Magento 2 eCommerce platform, Custom Year-Make-Model fitment architecture, Configured caching, indexing, and deployment workflows for production environments'
  },
  {
    id: 'goodprice',
    title: 'Good Price Pharmacy E-commerce Website',
    description: 'Enhanced and extended existing Magento 2 modules to support evolving business requirements and improve website functionality. Maintained site content including banners, promotions, and catalog updates.',
    longDescription: 'Enhanced and extended existing Magento 2 modules to support evolving business requirements and improve website functionality. Maintained site content including banners, promotions, and catalog updates.',
    tags: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'Less', 'Performance Optimization','cron job'],
    category: 'E-commerce',
    imageUrl: '/images/gpp.png',
    liveUrl: 'https://goodpricepharmacy.com.au',
    stats: [
      { label: 'PHP Engine', value: 'PHP 8.2' },
      { label: 'Downtime', value: '0%' },
    ],
    keyFeatures: [
      'Customized Click & Collect depends on store availability',
      'Optimized deployment routines to achieve zero downtime code updates during business hours',
      'Fully responsive newsletter and notification templating layers with high email-client compatibility',
      'Weekly website content updates including banners, product promotions, and catalog updates',
    ],
    architectureDetails: 'Structured clean PHP layers using Magento Dependency Injection patterns. Created automatic database backup and schema migration workflows inside Docker local setups, ensuring seamless version transitions.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Mastery',
    icon: 'terminal',
    skills: ['PHP 8.x', 'Magento 2', 'Laravel', 'CodeIgniter', 'MySQL', 'Redis', 'REST APIs', 'Node.js']
  },
  {
    id: 'frontend',
    title: 'Frontend Craft',
    icon: 'devices',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'WordPress Theme/Plugin Dev', 'Alpine.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Tools',
    icon: 'build',
    skills: ['Docker', 'Git / GitHub', 'Linux VPS Security', 'CI/CD Workflows', 'Performance Auditing', 'Varnish HTTP Cache', 'REST integrations']
  }
];
