import { Link } from "react-router-dom";
import { Headset, Target, Clock, ShieldCheck, Users, MapPin, Phone, Mail, ChevronRight, MessageCircle } from "lucide-react";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.36C16.24 4.32 15.36 4.25 14.33 4.25c-2.15 0-3.63 1.31-3.63 3.72V10.5H8v3h2.7V21h2.8Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.5 9.75h3v10.75h-3V9.75Zm6.25 0h2.88v1.47h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.24h-3v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.62h-3V9.75Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 mt-24">
      <div className="container-page pt-14">
        <div className="bg-paper text-charcoal p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="shrink-0 w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center text-gold-dark">
              <Headset size={28} strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="font-display text-2xl text-ink">Not sure which service fits?</h3>
              <p className="text-slate mt-1 max-w-md">
                Book a free consultation and we will understand your needs to guide you to the right solution.
              </p>
            </div>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <div className="container-page py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Singh and Associates logo" className="h-12 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl text-paper">SINGH AND ASSOCIATES</span>
              <span className="text-xs tracking-widest uppercase text-gold-light mt-1">
                Accounting | Taxation | Advisory
              </span>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed max-w-sm">
            At Singh and Associates, we deliver reliable and professional financial, taxation and compliance solutions to individuals, startups, MSMEs and companies across India.
          </p>
          <p className="mt-3 text-sm leading-relaxed max-w-sm">
            Our mission is simple: to ensure accuracy, timely compliance and valuable advice that empowers your business to grow with confidence.
          </p>

          <div className="mt-6 grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="w-11 h-11 rounded-full border border-gold-light text-gold-light flex items-center justify-center">
                <Target size={20} strokeWidth={1.5} />
              </span>
              <span className="text-xs text-paper">Accurate Work</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-11 h-11 rounded-full border border-gold-light text-gold-light flex items-center justify-center">
                <Clock size={20} strokeWidth={1.5} />
              </span>
              <span className="text-xs text-paper">Timely Compliance</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-11 h-11 rounded-full border border-gold-light text-gold-light flex items-center justify-center">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </span>
              <span className="text-xs text-paper">Confidential and Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-11 h-11 rounded-full border border-gold-light text-gold-light flex items-center justify-center">
                <Users size={20} strokeWidth={1.5} />
              </span>
              <span className="text-xs text-paper">Client Focused</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gold-light text-sm font-semibold tracking-wide uppercase mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-gold-light">
                <ChevronRight size={14} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 hover:text-gold-light">
                <ChevronRight size={14} />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-gold-light">
                <ChevronRight size={14} />
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 hover:text-gold-light">
                <ChevronRight size={14} />
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gold-light text-sm font-semibold tracking-wide uppercase mb-4">Get in Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-light shrink-0 mt-0.5" />
              <span>97/99/1 Shri Arabinda Road, Salkia, Howrah, West Bengal - 711106</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold-light shrink-0" />
              <span>+91 62074 31660</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold-light shrink-0" />
              <span>singh.associates1102@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-gold-light shrink-0" />
              <span>Mon to Sat: 10:00 AM to 7:00 PM</span>
            </li>
          </ul>

          <h3 className="text-paper text-sm font-semibold mt-6 mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/r/1DLMFNsvqt/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gold-light text-gold-light flex items-center justify-center hover:bg-gold-light hover:text-ink transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/singh.associates1102?igsh=ZTRqYW16MnNyczc0" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gold-light text-gold-light flex items-center justify-center hover:bg-gold-light hover:text-ink transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/singh-associates-india/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gold-light text-gold-light flex items-center justify-center hover:bg-gold-light hover:text-ink transition-colors">
              <LinkedinIcon />
            </a>
            <a href="https://wa.me/916207431660" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gold-light text-gold-light flex items-center justify-center hover:bg-gold-light hover:text-ink transition-colors">
              <MessageCircle size={16} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page py-5 text-xs flex flex-col sm:flex-row justify-between gap-2">
          <span>Copyright {new Date().getFullYear()} Singh and Associates. All rights reserved.</span>
          <span className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-gold-light">Terms and Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}