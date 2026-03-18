import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer.tsx';
import Navbar from '@/components/Navbar.tsx';
import ScrollToTop from '@/components/ScrollToTop.tsx';
import WhatsAppFloat from '@/components/WhatsAppFloat.tsx';

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-10rem] h-80 w-80 rounded-full bg-brand-200/35 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-100/55 blur-3xl" />
      </div>

      <ScrollToTop />
      <Navbar />

      <main className="relative pt-24 md:pt-28">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
