import { motion } from 'motion/react';
import { ShieldCheck, Zap, FileText, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Trusted by 2M+ Indians
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-brand-950 leading-[1.1] mb-6">
              Instant Personal Loans up to <span className="text-brand-600">₹15 Lakhs</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Get funds directly into your bank account in minutes with our secure digital loan process. No paperwork, no hidden charges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <button className="btn-primary text-lg px-10 py-4.5">Apply for Loan</button>
              <button className="btn-secondary text-lg px-10 py-4.5">Check Eligibility</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="text-brand-600" size={24} />
                <span className="text-sm font-medium text-slate-700">256-bit Encryption</span>
              </div>
              <div className="flex flex-col gap-2">
                <FileText className="text-brand-600" size={24} />
                <span className="text-sm font-medium text-slate-700">100% Paperless</span>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="text-brand-600" size={24} />
                <span className="text-sm font-medium text-slate-700">2M+ Users</span>
              </div>
              <div className="flex flex-col gap-2">
                <Zap className="text-brand-600" size={24} />
                <span className="text-sm font-medium text-slate-700">Fast Disbursal</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-4 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                alt="Fintech Interface"
                className="rounded-2xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Loan Approved</p>
                    <p className="text-sm font-bold text-slate-900">₹5,00,000</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Verified KYC</p>
                    <p className="text-sm font-bold text-slate-900">100% Secure</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-100 rounded-full -z-10 opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-50 rounded-full -z-10 opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
