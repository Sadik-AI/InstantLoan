import PageHero from '@/components/PageHero.tsx';
import SectionHeader from '@/components/SectionHeader.tsx';
import ServiceCard from '@/components/ServiceCard.tsx';
import { repairProcess, serviceHighlights, services } from '@/data/siteContent.ts';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Professional repair and support services for every stage of your device lifecycle."
        description="From small software issues to complex laptop repairs, WS Computer is positioned as a trustworthy local partner with premium service presentation and strong conversion-focused messaging."
        highlights={[
          'Same-day diagnostics for many common device issues.',
          'Straightforward repair estimates before any paid work begins.',
          'Clear upgrade and replacement advice when repairs are not the best option.',
        ]}
      />

      <section className="section-shell pt-24">
        <SectionHeader
          eyebrow="What we do"
          title="Every core service is presented as a polished, high-trust offer."
          description="The service cards use clean hierarchy, strong pricing anchors, and modern glassmorphism styling to feel more premium than a typical small-shop website."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-24">
        <SectionHeader
          eyebrow="How service works"
          title="A simple process removes friction and builds confidence before booking."
          description="A conversion-focused repair page should answer what happens next. These steps keep expectations clear and reduce hesitation."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {repairProcess.map((item) => (
            <article key={item.step} className="glass-panel rounded-[2rem] p-6">
              <p className="font-display text-4xl font-semibold text-brand-600">{item.step}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceHighlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <article
                key={highlight.title}
                className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_26px_60px_-32px_rgba(15,23,42,0.8)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{highlight.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
