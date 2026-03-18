import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircleMore, PhoneCall, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { companyInfo, navigationLinks } from '@/data/siteContent.ts';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
      <nav
        className={`section-shell rounded-[2rem] border transition duration-300 ${
          isScrolled
            ? 'glass-panel border-white/55 py-3 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.65)]'
            : 'border-transparent bg-white/20 py-4'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-12 w-12 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-brand-500 via-brand-600 to-black text-white shadow-[0_18px_45px_-22px_rgba(230,0,0,0.8)]">
              <span className="font-display text-xl font-bold">WS</span>
            </div>

            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-slate-950">
                WS Computer
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Repairs and sales</p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-white/85 hover:text-brand-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href={companyInfo.phoneHref} className="btn-secondary px-4 py-2.5">
              <PhoneCall size={18} />
              {companyInfo.phoneDisplay}
            </a>
            <a href={companyInfo.whatsappHref} target="_blank" rel="noreferrer" className="btn-primary px-5 py-2.5">
              <MessageCircleMore size={18} />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/85 text-slate-900 shadow-sm lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 space-y-2 border-t border-slate-200/70 pt-4">
                {navigationLinks.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? 'bg-slate-950 text-white'
                          : 'bg-white/70 text-slate-800 hover:bg-white hover:text-brand-700'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <div className="grid gap-2 pt-2 sm:grid-cols-2">
                  <a href={companyInfo.phoneHref} className="btn-secondary w-full justify-center" onClick={closeMenu}>
                    <PhoneCall size={18} />
                    Call Now
                  </a>
                  <a
                    href={companyInfo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full justify-center"
                    onClick={closeMenu}
                  >
                    <MessageCircleMore size={18} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
