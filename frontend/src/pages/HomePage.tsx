import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircleMore, PhoneCall, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard.tsx';
import SectionHeader from '@/components/SectionHeader.tsx';
import ServiceCard from '@/components/ServiceCard.tsx';
import TestimonialCard from '@/components/TestimonialCard.tsx';
import {
  companyInfo,
  homeStats,
  products,
  reasonsToChoose,
  services,
  testimonials,
} from '@/data/siteContent.ts';

export default function HomePage() {
  return (
    <>
      <section className="section-shell pt-8">
        <div className="relative overflow-hidden rounded-[2.8rem] bg-[#050505] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-18">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(230,0,0,0.4),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_26%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow border-white/15 bg-white/10 text-white">Trusted local service desk</span>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Laptop Repair | Sales | Accessories
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{companyInfo.trustLine}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={companyInfo.phoneHref} className="btn-primary">
                  <PhoneCall size={18} />
                  Call Now
                </a>
                <a
                  href={companyInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-950"
                >
                  <MessageCircleMore size={18} />
                  Chat on WhatsApp
                </a>
                <Link
                  to="/booking"
                  className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-950"
                >
                  Book Repair
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {homeStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.8rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                  >
                    <p className="font-display text-3xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/65">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid gap-4"
            >
              <div className="glass-panel rounded-[2rem] border-white/10 bg-white/10 p-6 text-white shadow-[0_25px_60px_-30px_rgba(230,0,0,0.65)]">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-200">Workshop ready</p>
                <h2 className="mt-4 font-display text-3xl font-semibold">
                  Premium diagnostics and device care under one roof
                </h2>
                <div className="mt-6 grid gap-3">
                  {[
                    'Laptop and PC repair support',
                    'Accessories for work, study, and gaming',
                    'Software installation and system tune-ups',
                    'Secure recovery support for urgent files',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                      <CheckCircle2 size={18} className="text-brand-200" />
                      <span className="text-sm text-white/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasonsToChoose.map((reason) => {
                  const Icon = reason.icon;

                  return (
                    <div
                      key={reason.title}
                      className="rounded-[1.8rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-200">
                        <Icon size={22} />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold">{reason.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">{reason.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-24">
        <SectionHeader
          eyebrow="Core services"
          title="Repair, recovery, and setup support that feels reliable from the first call."
          description="WS Computer combines clean diagnostics, fast service, and transparent pricing to help visitors move from browsing to booking with confidence."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Featured products"
            title="Handpicked laptops and accessories for office, campus, and gaming setups."
            description="Browse real products from Apple, Dell, Lenovo, Xiaomi, HP, ASUS, and genuine accessories chosen for local customers."
          />
          <Link to="/products" className="btn-secondary w-fit">
            Explore all products
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="glass-panel overflow-hidden rounded-[2.5rem] p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="eyebrow">Fast conversion zone</span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Need urgent repair help today?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Call for same-day diagnostics, or send a WhatsApp message with photos of the issue and your laptop
                model.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={companyInfo.phoneHref}
                className="rounded-[2rem] bg-slate-950 p-6 text-white transition hover:-translate-y-1"
              >
                <PhoneCall size={22} className="text-brand-300" />
                <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/55">Call for support</p>
                <p className="mt-2 font-display text-2xl font-semibold">{companyInfo.phoneDisplay}</p>
              </a>

              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-[2rem] bg-brand-600 p-6 text-white transition hover:-translate-y-1"
              >
                <MessageCircleMore size={22} />
                <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/70">Chat instantly</p>
                <p className="mt-2 font-display text-2xl font-semibold">WhatsApp support</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-24">
        <SectionHeader
          eyebrow="Customer love"
          title="Real feedback that reinforces trust before a visitor ever walks in."
          description="Testimonials are placed here to answer the most important question on any service site: can I trust these people with my device?"
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="overflow-hidden rounded-[2.6rem] bg-gradient-to-br from-brand-700 via-brand-600 to-black px-8 py-12 text-white sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                <ShieldCheck size={16} />
                Premium local support
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to upgrade, repair, or recover your device?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                Book a repair in under a minute or visit the contact page for directions to the shop.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/booking" className="btn-secondary border-white/20 bg-white text-slate-950">
                Book Repair
              </Link>
              <Link
                to="/contact"
                className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-950"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
