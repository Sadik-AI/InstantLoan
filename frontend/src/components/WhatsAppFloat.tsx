import { MessageCircleMore } from 'lucide-react';
import { companyInfo } from '@/data/siteContent.ts';

export default function WhatsAppFloat() {
  return (
    <a
      href={companyInfo.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_22px_40px_-18px_rgba(37,211,102,0.9)] transition hover:-translate-y-1"
    >
      <MessageCircleMore size={28} />
    </a>
  );
}
