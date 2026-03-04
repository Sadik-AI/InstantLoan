import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-600/20">
                <span className="text-white font-black text-2xl italic">I</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter text-white">
                  INSTANT<span className="text-brand-400">LOAN</span>
                </span>
                <span className="text-[10px] font-bold text-brand-300 tracking-[0.2em] uppercase mt-1">
                  Premium Finance
                </span>
              </div>
            </div>
            <p className="text-brand-200 leading-relaxed">
              Empowering millions of Indians with instant, secure, and transparent financial solutions. InstantLoan is your partner in growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-200">
              <li><a href="#" className="hover:text-white transition-colors">Personal Loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eligibility Criteria</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-brand-200">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fair Practice Code</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grievance Redressal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-brand-200">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-400 shrink-0" />
                <span>Level 12, Cyber City, Tower B, Gurgaon, Haryana - 122002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-400 shrink-0" />
                <span>1800-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-400 shrink-0" />
                <span>support@instantloan.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-brand-400">
          <p>© 2026 InstantLoan Financial Services Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <span>CIN: L65923DL2015PLC276234</span>
            <span>RBI Registered NBFC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
