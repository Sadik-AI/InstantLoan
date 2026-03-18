import {
  BadgeCheck,
  DatabaseZap,
  Download,
  HardDriveDownload,
  Keyboard,
  LaptopMinimal,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Wrench,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  startingPrice: string;
};

export type ProductCategory = 'Laptops' | 'Accessories';

export type Product = {
  id: number;
  category: ProductCategory;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  image: string;
  tag: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type Stat = {
  value: string;
  label: string;
};

export const companyInfo = {
  name: 'WS Computer',
  phoneDisplay: '+91 95797 17983',
  phoneHref: 'tel:+919579717983',
  whatsappHref: 'https://wa.me/919579717983?text=Hi%20WS%20Computer%2C%20I%20need%20help%20with%20my%20device.',
  email: 'support@wscomputer.in',
  address: 'Chikhali, Pune, Maharashtra, India',
  workingHours: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: 11:00 AM - 4:00 PM'],
  trustLine:
    'Certified technicians, genuine parts, transparent quotes, and dependable after-sales support for home, office, and gaming devices.',
  googleMapsEmbed: 'https://www.google.com/maps?q=Chikhali%2C%20Pune%2C%20Maharashtra%2C%20India&output=embed',
};

export const navigationLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Book Repair', href: '/booking' },
  { label: 'Contact', href: '/contact' },
];

export const homeStats: Stat[] = [
  { value: '1 Hour', label: 'Average diagnosis window' },
  { value: '2,500+', label: 'Devices repaired with care' },
  { value: '4.9/5', label: 'Local customer satisfaction' },
];

export const services: Service[] = [
  {
    icon: Wrench,
    title: 'Laptop Repair',
    description:
      'Fast fixes for overheating, charging issues, motherboard faults, hinge damage, and everyday performance problems.',
    startingPrice: 'Starting at Rs. 499',
  },
  {
    icon: MonitorSmartphone,
    title: 'Screen Replacement',
    description:
      'Premium replacement panels for cracked, flickering, or dead laptop displays with clean finishing and calibration.',
    startingPrice: 'Starting at Rs. 2,999',
  },
  {
    icon: Keyboard,
    title: 'Keyboard Repair',
    description:
      'Key replacement, liquid spill recovery, full keyboard swap, and touchpad troubleshooting for popular laptop models.',
    startingPrice: 'Starting at Rs. 899',
  },
  {
    icon: Download,
    title: 'Software Installation',
    description:
      'Fresh Windows installs, driver setup, antivirus, office apps, creative tools, and system optimization for smooth performance.',
    startingPrice: 'Starting at Rs. 599',
  },
  {
    icon: DatabaseZap,
    title: 'Data Recovery',
    description:
      'Recovery support for deleted files, damaged drives, formatted partitions, and urgent backup migration requests.',
    startingPrice: 'Starting at Rs. 1,499',
  },
];

export const serviceHighlights = [
  {
    icon: ShieldCheck,
    title: 'Genuine Parts Promise',
    description: 'We source quality components and clearly explain options before any replacement begins.',
  },
  {
    icon: TimerReset,
    title: 'Same-Day Assessment',
    description: 'Most devices receive a clear diagnosis and repair estimate on the same day they arrive.',
  },
  {
    icon: BadgeCheck,
    title: 'Post-Service Testing',
    description: 'Every repair goes through thermal, charging, and stability checks before handover.',
  },
];

export const repairProcess = [
  {
    step: '01',
    title: 'Quick diagnosis',
    description: 'We inspect the device, confirm symptoms, and identify the right repair path.',
  },
  {
    step: '02',
    title: 'Transparent quote',
    description: 'You receive the repair estimate and turnaround time before any paid work starts.',
  },
  {
    step: '03',
    title: 'Precision repair',
    description: 'Our technicians complete the work using tested parts and careful workmanship.',
  },
  {
    step: '04',
    title: 'Quality handover',
    description: 'We verify the fix, explain what was done, and share care tips before delivery.',
  },
];

export const products: Product[] = [
  {
    id: 1,
    category: 'Laptops',
    name: 'Apple MacBook Air 13-inch (M4)',
    price: 'From Rs. 99,900',
    priceValue: 99900,
    description:
      'Apple laptop with the M4 chip, Liquid Retina display, 16GB starting memory, and the thin, premium build customers expect from a MacBook Air.',
    image: '/images/products/ws-business-elite.svg',
    tag: 'Apple',
  },
  {
    id: 2,
    category: 'Laptops',
    name: 'Dell Inspiron 14 2-in-1 (7440)',
    price: 'From Rs. 77,290',
    priceValue: 77290,
    description:
      'Convertible 14-inch Dell laptop with touchscreen flexibility, Intel Core Ultra performance, 16GB RAM, and SSD storage.',
    image: '/images/products/ws-creator-pro.svg',
    tag: 'Dell',
  },
  {
    id: 3,
    category: 'Laptops',
    name: 'Lenovo IdeaPad Slim 5 Ryzen 7',
    price: 'Rs. 70,990',
    priceValue: 70990,
    description:
      'Slim Lenovo notebook with AMD Ryzen 7 performance, FHD display, privacy shutter webcam, and everyday portability.',
    image: '/images/products/ws-student-air.svg',
    tag: 'Lenovo',
  },
  {
    id: 4,
    category: 'Laptops',
    name: 'Xiaomi Notebook Pro 120G',
    price: 'Rs. 74,999',
    priceValue: 74999,
    description:
      'Premium Xiaomi laptop with a 2.5K 120Hz display, 12th Gen Intel Core i5 H-series processor, and GeForce MX550 graphics.',
    image: '/images/products/xiaomi-notebook-pro.svg',
    tag: 'Xiaomi',
  },
  {
    id: 5,
    category: 'Laptops',
    name: 'HP OMEN 16 (16-xd0015AX)',
    price: 'Rs. 99,999',
    priceValue: 99999,
    description:
      'Gaming-focused HP laptop with Ryzen 7, RTX 4050 graphics, 165Hz display, 16GB DDR5 memory, and 1TB SSD storage.',
    image: '/images/products/ws-titan-gaming.svg',
    tag: 'HP Gaming',
  },
  {
    id: 6,
    category: 'Laptops',
    name: 'ASUS Vivobook S14 (S3407)',
    price: 'From Rs. 56,990',
    priceValue: 56990,
    description:
      'Lightweight ASUS laptop with a 14-inch WUXGA display, 13th Gen Intel performance, metallic design, and strong daily portability.',
    image: '/images/products/asus-vivobook-s14.svg',
    tag: 'ASUS',
  },
  {
    id: 7,
    category: 'Accessories',
    name: 'Acer Wireless Keyboard & Mouse HD Combo',
    price: 'Rs. 999',
    priceValue: 999,
    description:
      'Acer accessory combo with a wireless keyboard, 1600 DPI mouse, multimedia keys, and wide OS compatibility.',
    image: '/images/products/mechanical-keyboard.svg',
    tag: 'Acer Accessory',
  },
  {
    id: 8,
    category: 'Accessories',
    name: 'Dell 65W USB-C Adapter',
    price: 'Rs. 1,899',
    priceValue: 1899,
    description:
      'Compact original Dell USB-C charger designed for portability, broad voltage support, and reliable daily charging.',
    image: '/images/products/fastcharge-adapter.svg',
    tag: 'Dell Accessory',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Ritika Sharma',
    role: 'Graphic Designer',
    quote:
      'My laptop screen was replaced faster than I expected, and the finish looked factory new. The whole experience felt premium and trustworthy.',
    rating: 5,
  },
  {
    name: 'Arman Khan',
    role: 'Business Owner',
    quote:
      'WS Computer helped recover critical accounting files from a failing drive. They explained the process clearly and delivered exactly on time.',
    rating: 5,
  },
  {
    name: 'Sourav Dey',
    role: 'Engineering Student',
    quote:
      'I bought a laptop and accessories here and got Windows plus software setup done before delivery. Everything was ready to use on day one.',
    rating: 5,
  },
];

export const reasonsToChoose = [
  {
    icon: Sparkles,
    title: 'Premium customer experience',
    description: 'Clean communication, smart recommendations, and a showroom-style digital presence.',
  },
  {
    icon: Zap,
    title: 'Fast turnaround',
    description: 'Urgent jobs are prioritized with realistic timelines and regular status updates.',
  },
  {
    icon: HardDriveDownload,
    title: 'Recovery-first mindset',
    description: 'We protect your files whenever possible before deeper hardware interventions.',
  },
];

export const deviceOptions = [
  'Laptop',
  'Desktop PC',
  'Gaming Laptop',
  'MacBook',
  'All-in-One PC',
];

export const productFilters = ['All', 'Laptops', 'Accessories'] as const;
