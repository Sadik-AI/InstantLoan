import { motion } from 'framer-motion';
import { MessageCircleMore, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '@/data/siteContent.ts';

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  highlights: string[];
};

export default function PageHero({ badge, title, description, highlights }: PageHeroProps) {
  return (
    <section className="section-shell pt-8">
      <div className="glass-panel relative overflow-hidden rounded-[2.5rem] border-white/70 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(230,0,0,0.18),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(255,245,245,0.88))]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">{badge}</span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={companyInfo.phoneHref} className="btn-primary">
                <PhoneCall size={18} />
                Call Now
              </a>
              <a href={companyInfo.whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary">
                <MessageCircleMore size={18} />
                Chat on WhatsApp
              </a>
              <Link to="/booking" className="btn-secondary">
                Book a Repair
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-4"
          >
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_26px_55px_-38px_rgba(15,23,42,0.5)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">Why it matters</p>
                <p className="mt-3 text-base leading-7 text-slate-700">{highlight}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
