import { CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';
import BookingForm from '@/components/BookingForm.tsx';
import PageHero from '@/components/PageHero.tsx';
import { companyInfo } from '@/data/siteContent.ts';

export default function BookingPage() {
  return (
    <>
      <PageHero
        badge="Repair booking"
        title="A stylish booking flow that makes it easy for visitors to start a repair request."
        description="The booking page is designed to convert interest into action with a polished form, clear reassurance, and low-friction contact options."
        highlights={[
          'Client-side validation keeps the form clean and user-friendly.',
          'Submissions are stored in MongoDB through the Express API.',
          'Fallback phone and WhatsApp actions are visible for urgent cases.',
        ]}
      />

      <section className="section-shell pt-24">
        <div className="grid gap-8 xl:grid-cols-[0.66fr_0.34fr]">
          <BookingForm />

          <div className="grid gap-6">
            <article className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_26px_60px_-32px_rgba(15,23,42,0.8)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-300">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Why customers convert here</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-white/72">
                <p className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-300" />
                  Clear field labels and validation reduce hesitation during form submission.
                </p>
                <p className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-300" />
                  The layout keeps trust messaging and urgent contact options close to the form.
                </p>
                <p className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-300" />
                  Submissions are persisted so the business can follow up on every lead.
                </p>
              </div>
            </article>

            <article className="glass-panel rounded-[2rem] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Urgent help</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-950">Need immediate support?</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Call the shop directly for same-day diagnostics and quick repair status updates.
              </p>

              <a href={companyInfo.phoneHref} className="btn-primary mt-6 w-full justify-center">
                <PhoneCall size={18} />
                {companyInfo.phoneDisplay}
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
