import { Star } from 'lucide-react';
import type { Testimonial } from '@/data/siteContent.ts';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="glass-panel hover-lift rounded-[2rem] p-6">
      <div className="flex gap-1 text-brand-500">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={`${testimonial.name}-${index}`} size={18} fill="currentColor" />
        ))}
      </div>

      <p className="mt-5 text-base leading-8 text-slate-700">"{testimonial.quote}"</p>

      <div className="mt-6">
        <p className="font-display text-xl font-semibold text-slate-950">{testimonial.name}</p>
        <p className="text-sm text-slate-500">{testimonial.role}</p>
      </div>
    </article>
  );
}
