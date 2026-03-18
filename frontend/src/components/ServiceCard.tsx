import type { Service } from '@/data/siteContent.ts';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="glass-panel hover-lift rounded-[2rem] p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
        <Icon size={26} />
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-950">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
        {service.startingPrice}
      </p>
    </article>
  );
}
