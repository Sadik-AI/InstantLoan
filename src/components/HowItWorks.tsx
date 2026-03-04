import { motion } from 'motion/react';
import { UserPlus, Fingerprint, Landmark, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Apply Online',
    description: 'Fill out a simple application form with your basic details in less than 2 minutes.',
    icon: UserPlus,
    color: 'bg-blue-600'
  },
  {
    title: 'Digital KYC',
    description: 'Upload your documents and complete a quick video KYC for instant verification.',
    icon: Fingerprint,
    color: 'bg-brand-600'
  },
  {
    title: 'Receive Funds',
    description: 'Once approved, the loan amount is disbursed directly into your bank account.',
    icon: Landmark,
    color: 'bg-emerald-600'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-brand-950 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our 3-step digital process ensures you get your funds without visiting a single bank branch.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center shadow-xl shadow-brand-600/20 relative z-10`}>
                  <step.icon size={36} className="text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center font-bold text-brand-600 z-20 shadow-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-950 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="absolute top-10 -right-6 hidden lg:block text-slate-300">
                  <ArrowRight size={32} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="btn-primary px-10 py-4 text-lg">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}
