import { Clock3, Mail, MapPin, MessageCircleMore, PhoneCall } from 'lucide-react';
import PageHero from '@/components/PageHero.tsx';
import { companyInfo } from '@/data/siteContent.ts';

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Make it effortless for customers to visit, call, or message the shop."
        description="The contact experience combines address details, map embed, working hours, and fast-action buttons so high-intent visitors can reach WS Computer without friction."
        highlights={[
          'Address and hours are visible above the fold.',
          'Map embed supports quick location checks on mobile and desktop.',
          'Phone and WhatsApp actions remain one tap away.',
        ]}
      />

      <section className="section-shell pt-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="glass-panel rounded-[2rem] p-6">
            <MapPin size={22} className="text-brand-700" />
            <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">Shop address</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{companyInfo.address}</p>
          </article>

          <article className="glass-panel rounded-[2rem] p-6">
            <PhoneCall size={22} className="text-brand-700" />
            <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">Phone</h3>
            <a href={companyInfo.phoneHref} className="mt-3 block text-sm font-medium text-slate-600 hover:text-brand-700">
              {companyInfo.phoneDisplay}
            </a>
          </article>

          <article className="glass-panel rounded-[2rem] p-6">
            <MessageCircleMore size={22} className="text-brand-700" />
            <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">WhatsApp</h3>
            <a
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm font-medium text-slate-600 hover:text-brand-700"
            >
              Start a chat
            </a>
          </article>

          <article className="glass-panel rounded-[2rem] p-6">
            <Clock3 size={22} className="text-brand-700" />
            <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">Working hours</h3>
            <div className="mt-3 space-y-1 text-sm leading-7 text-slate-600">
              {companyInfo.workingHours.map((entry) => (
                <p key={entry}>{entry}</p>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.65fr_0.35fr]">
          <div className="glass-panel overflow-hidden rounded-[2.2rem] p-3">
            <iframe
              title="WS Computer location map"
              src={companyInfo.googleMapsEmbed}
              className="h-[420px] w-full rounded-[1.7rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-6">
            <article className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_26px_60px_-32px_rgba(15,23,42,0.8)]">
              <Mail size={22} className="text-brand-300" />
              <h3 className="mt-4 font-display text-2xl font-semibold">Support email</h3>
              <a href={`mailto:${companyInfo.email}`} className="mt-3 block text-sm text-white/72 hover:text-white">
                {companyInfo.email}
              </a>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Use email for bulk orders, business enquiries, or warranty-related follow-up.
              </p>
            </article>

            <article className="glass-panel rounded-[2rem] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Visit planning</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-950">Before you arrive</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Carry your device charger if the issue is power related.</li>
                <li>Bring any recovery drive or backup details for data-related jobs.</li>
                <li>Send photos on WhatsApp if you want a faster initial estimate.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
