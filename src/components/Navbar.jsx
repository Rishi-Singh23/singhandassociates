import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-colors ${
      isActive ? "text-gold" : "text-paper/85 hover:text-gold-light"
    }`;

  return (
    <header className="bg-ink sticky top-0 z-50">
      <div className="container-page flex items-center justify-between py-3 min-h-24">
        <div className="flex items-center gap-3">
          <NavLink to="/" onClick={() => setOpen(false)} className="shrink-0">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Singh & Associates logo" className="h-16 w-auto" />
          </NavLink>
          <div className="flex flex-col items-start leading-tight">
            <NavLink to="/" onClick={() => setOpen(false)}>
              <span className="font-display text-2xl text-paper leading-none tracking-wide">
                SINGH &amp; ASSOCIATES
              </span>
            </NavLink>
            <span className="mt-1.5 text-[11px] tracking-[0.2em] uppercase text-gold-light">
              Accounting&nbsp;|&nbsp;Taxation&nbsp;|&nbsp;Advisory
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn-primary !py-2.5 !px-5 !bg-gold hover:!bg-gold-dark">
            Book a Consultation
          </NavLink>
        </nav>

        <button
          className="md:hidden text-paper"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-paper/10 bg-ink px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary !bg-gold hover:!bg-gold-dark justify-center"
          >
            Book a Consultation
          </NavLink>
        </nav>
      )}
    </header>
  );
}