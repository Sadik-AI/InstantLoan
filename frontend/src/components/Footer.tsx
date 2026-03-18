import { Link } from 'react-router-dom';
import { Clock3, MapPin, MessageCircleMore, PhoneCall } from 'lucide-react';
import { companyInfo, navigationLinks } from '@/data/siteContent.ts';

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#050505] text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-brand-500 via-brand-600 to-white/20">
                <span className="font-display text-xl font-bold">WS</span>
              </div>
              <div>
                <p className="font-display text-xl font-semibold">WS Computer</p>
                <p className="text-sm text-white/60">Premium repair and retail experience</p>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/70">{companyInfo.trustLine}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={companyInfo.phoneHref} className="btn-secondary border-white/15 bg-white/10 text-white hover:bg-white hover:text-slate-950">
                <PhoneCall size={18} />
                Call Now
              </a>
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircleMore size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold">Quick links</p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {navigationLinks.map((item) => (
                <Link key={item.label} to={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-sm text-white/70">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-400" />
              <span>{companyInfo.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <PhoneCall size={18} className="mt-0.5 shrink-0 text-brand-400" />
              <span>{companyInfo.phoneDisplay}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 size={18} className="mt-0.5 shrink-0 text-brand-400" />
              <div>
                {companyInfo.workingHours.map((entry) => (
                  <p key={entry}>{entry}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          © {new Date().getFullYear()} WS Computer. Built for premium repairs, sales, and service enquiries.
        </div>
      </div>
    </footer>
  );
}
