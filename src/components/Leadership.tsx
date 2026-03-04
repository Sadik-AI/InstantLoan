import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Captain Shakdweep',
    role: 'Founder',
    bio: 'Captain Shakdweep is the Founder of our platform and the visionary behind the company’s mission to simplify access to instant financial solutions. With strong leadership and strategic direction, he guides the organization toward innovation and growth.',
    mobile: '9607184602',
    email: 'sagarmishr7@gmail.com',
    image: 'https://storage.googleapis.com/content-api-storage/v1/projects/ais-dev-nkkni6qiy37353ejn3ywfd-408216098131/locations/asia-southeast1/buckets/content-api-storage/objects/input_file_0.png',
    social: '#'
  },
  {
    name: 'Otis Singh',
    role: 'Co-Founder',
    bio: 'Otis Singh serves as the Co-Founder and plays a key role in developing business strategies and partnerships. His dedication and business insight contribute significantly to the growth and success of the platform.',
    mobile: '7066659051',
    email: 'jerryatbusiness@gmail.com',
    image: 'https://storage.googleapis.com/content-api-storage/v1/projects/ais-dev-nkkni6qiy37353ejn3ywfd-408216098131/locations/asia-southeast1/buckets/content-api-storage/objects/input_file_1.png',
    social: '#'
  },
  {
    name: 'Popeye Ansari',
    role: 'Co-Founder',
    bio: 'Popeye Ansari is the Co-Founder responsible for technology and digital development. With expertise in web development and innovative solutions, he ensures the platform remains modern, efficient, and user-friendly.',
    mobile: '8850202568',
    email: 'sadik.work4fam@gmail.com',
    image: 'https://storage.googleapis.com/content-api-storage/v1/projects/ais-dev-nkkni6qiy37353ejn3ywfd-408216098131/locations/asia-southeast1/buckets/content-api-storage/objects/input_file_2.png',
    social: '#'
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-brand-950 mb-4">Our Leadership Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Meet the visionaries behind InstantLoan who are dedicated to transforming the financial landscape of India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-8 overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl shadow-slate-200/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 transition-colors">
                      <Mail size={20} />
                    </a>
                    <a href={`tel:${member.mobile}`} className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 transition-colors">
                      <Phone size={20} />
                    </a>
                    <a href={member.social} className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-brand-950">{member.name}</h3>
                  <p className="text-brand-600 font-bold uppercase tracking-wider text-sm">{member.role}</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-3 text-slate-500 hover:text-brand-600 transition-colors">
                    <Phone size={18} className="text-brand-400" />
                    <a href={`tel:${member.mobile}`} className="text-sm font-medium">{member.mobile}</a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 hover:text-brand-600 transition-colors">
                    <Mail size={18} className="text-brand-400" />
                    <a href={`mailto:${member.email}`} className="text-sm font-medium">{member.email}</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
