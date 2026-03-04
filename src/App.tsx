import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EMICalculator from './components/EMICalculator';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        <HowItWorks />
        
        <EMICalculator />
        
        <Testimonials />
        
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-24 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-gradient-to-r from-brand-600 to-brand-800 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-600/20"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-400/20 rounded-full -mr-32 -mb-32 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">Get approved for your loan today.</h2>
              <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                Join over 2 million satisfied customers who have trusted InstantLoan for their financial needs.
              </p>
              <button className="bg-white text-brand-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl active:scale-95">
                Apply Now
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
