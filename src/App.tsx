import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  TrendingUp,
  Users,
  Award,
  ExternalLink
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Stat, ContactFormData } from './types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Media Kit', path: '/media-kit' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter">OtakuPulse<span className="text-emerald-500">.</span></Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-500",
                location.pathname === link.path ? "text-emerald-500" : "text-zinc-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all">
            Work with me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-black/5 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-zinc-50 border-t border-black/5 py-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-bold tracking-tighter mb-6">OtakuPulse<span className="text-emerald-500">.</span></h2>
        <p className="text-zinc-500 max-w-md mb-8">
          Creating meaningful content that inspires a global community. Let's build something extraordinary together.
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/anime_1otakupulse111/" className="p-2 bg-white rounded-full border border-black/5 hover:border-emerald-500 transition-colors"><Instagram size={20} /></a>
          <a href="https://www.youtube.com/@anime_1OtakuPulse111" className="p-2 bg-white rounded-full border border-black/5 hover:border-emerald-500 transition-colors"><Youtube size={20} /></a>
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-6">Quick Links</h3>
        <ul className="space-y-4 text-zinc-500 text-sm">
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/media-kit">Media Kit</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-6">Contact</h3>
        <ul className="space-y-4 text-zinc-500 text-sm">
          <li>RAJDEEPNAYEK2905@gamil.com</li>
          <li>KOLKATA, WESTBENGAL INDIA</li>
          <li></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-black/5 text-center text-zinc-400 text-xs">
      © 2026 OtakuPulse. All rights reserved.
    </div>
  </footer>
);

// --- Pages ---

const Home = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Lifestyle & Tech Influencer
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Elevating <br /> <span className="text-zinc-400 italic">Digital</span> Brands.
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed">
              I help world-class brands connect with authentic audiences through storytelling and high-impact visual content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all">
                Start a Project <ArrowRight size={20} />
              </Link>
              <Link to="/media-kit" className="border border-black/10 px-8 py-4 rounded-full font-bold hover:bg-zinc-50 transition-all">
                View Media Kit
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/influencer/800/1000" 
                alt="Alexa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-black/5">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <TrendingUp />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Engagement Rate</p>
                  <p className="text-2xl font-bold">8.5%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.platform}</p>
                <h3 className="text-5xl font-bold mb-2">{stat.followers}</h3>
                <p className="text-emerald-400 text-sm font-medium">Followers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-zinc-400 text-sm font-bold uppercase tracking-widest mb-12">Trusted by Global Brands</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            <span className="text-3xl font-black">NIKE</span>
            <span className="text-3xl font-black">APPLE</span>
            <span className="text-3xl font-black">ADOBE</span>
            <span className="text-3xl font-black">SONY</span>
            <span className="text-3xl font-black">TESLA</span>
          </div>
        </div>
      </section>
    </div>
  );
};

const About = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="aspect-square rounded-3xl overflow-hidden">
          <img 
            src="https://picsum.photos/seed/about/1000/1000" 
            alt="About Me" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h2 className="text-5xl font-bold tracking-tighter mb-8">The Story Behind <br /> The Lens.</h2>
          <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
            <p>
              I started my journey in 2018 with nothing but a smartphone and a passion for capturing the beauty in everyday moments. What began as a hobby quickly evolved into a platform where I share my love for technology, travel, and sustainable living.
            </p>
            <p>
              Today, I've built a community of over 500,000 across all platforms. My mission is to bridge the gap between brands and consumers through authentic, high-quality content that doesn't just sell, but tells a story.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-black mb-2">5+ Years</h4>
                <p className="text-sm">Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-black mb-2">200+</h4>
                <p className="text-sm">Brand Deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MediaKit = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div className="pt-32 pb-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold tracking-tighter mb-4">Media Kit 2026</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Detailed insights into my audience demographics and platform performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-zinc-100 rounded-2xl">
                  {stat.platform === 'Instagram' && <Instagram className="text-pink-600" />}
                  {stat.platform === 'YouTube' && <Youtube className="text-red-600" />}
                  {stat.platform === 'TikTok' && <TrendingUp className="text-black" />}
                </div>
                <span className="text-emerald-500 font-bold text-sm">+{stat.engagement_rate} Eng.</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.followers}</h3>
              <p className="text-zinc-500 text-sm font-medium">{stat.platform} Community</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-black/5">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Users className="text-emerald-500" /> Audience Demographics
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Age 18-24</span>
                  <span>45%</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-emerald-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Age 25-34</span>
                  <span>35%</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="w-[35%] h-full bg-emerald-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Female / Male</span>
                  <span>60% / 40%</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="w-[60%] h-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 text-white p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-emerald-400" /> Services Offered
            </h3>
            <ul className="space-y-4">
              {[
                'Sponsored Instagram Posts & Stories',
                'YouTube Dedicated Reviews',
                'TikTok Creative Challenges',
                'UGC Content Creation',
                'Brand Ambassadorship',
                'Speaking Engagements'
              ].map((service) => (
                <li key={service} className="flex items-center gap-3 text-zinc-400">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-5xl font-bold tracking-tighter mb-4">Selected Work.</h2>
          <p className="text-zinc-500 max-w-md">A showcase of recent collaborations and creative projects.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full bg-black text-white text-sm font-bold">All</button>
          <button className="px-6 py-2 rounded-full border border-black/5 text-sm font-bold hover:bg-zinc-50">Fashion</button>
          <button className="px-6 py-2 rounded-full border border-black/5 text-sm font-bold hover:bg-zinc-50">Tech</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Nike Air Max Campaign', category: 'Lifestyle', img: 'https://picsum.photos/seed/nike/800/600' },
          { title: 'Apple Studio Setup', category: 'Tech', img: 'https://picsum.photos/seed/apple/800/600' },
          { title: 'Adobe Creative Cloud', category: 'Software', img: 'https://picsum.photos/seed/adobe/800/600' },
          { title: 'Tesla Road Trip', category: 'Travel', img: 'https://picsum.photos/seed/tesla/800/600' },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                <h4 className="text-2xl font-bold">{item.title}</h4>
              </div>
              <div className="p-3 rounded-full border border-black/5 group-hover:bg-black group-hover:text-white transition-colors">
                <ExternalLink size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('https://portfoliomailer-znp9.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter mb-8">Let's Create <br /> Together.</h2>
            <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
              Interested in a collaboration, sponsorship, or just want to say hi? Drop me a message and I'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-600">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <p className="font-bold">RAJDEEPNAYEK2905@.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-600">
                  <Instagram />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-1">Instagram</p>
                  <p className="font-bold">@anime_1otakupulse111</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-10 rounded-3xl border border-black/5">
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-zinc-500 mb-8">Thanks for reaching out. I'll be in touch soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="OtakuPulse"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:border-emerald-500 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Name@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:border-emerald-500 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-zinc-800 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/media-kit" element={<MediaKit />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
