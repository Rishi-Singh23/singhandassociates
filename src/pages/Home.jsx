import { Link } from "react-router-dom";
import {
  FileCheck2,
  Calculator,
  Landmark,
  Headset,
  ShieldCheck,
  Receipt,
  FileText,
  Building2,
  Percent,
  ClipboardCheck,
  Users,
  Layers,
} from "lucide-react";

const highlights = [
  { icon: FileCheck2, title: "GST Solutions", desc: "Registration, Returns, Notice Handling & More" },
  { icon: Calculator, title: "Income Tax (ITR)", desc: "ITR Filing, Tax Planning & Advisory" },
  { icon: Landmark, title: "ROC Compliances", desc: "Company Incorporation, Annual Filing & More" },
  { icon: Headset, title: "Dedicated Support", desc: "Expert Guidance, Timely Support" },
];

function ComplianceCard() {
  return (
    <div className="bg-paper text-charcoal p-6 border border-line">
      <p className="eyebrow">We Help You Stay Compliant &amp; Grow With Confidence</p>
      <div className="mt-4 divide-y divide-line border-y border-line">
        {highlights.map((h) => (
          <div key={h.title} className="flex items-start gap-4 py-4">
            <span className="shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark">
              <h.icon size={20} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-display text-base text-ink">{h.title}</h3>
              <p className="text-sm text-slate mt-0.5">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 border border-gold/30 bg-gold/10 px-4 py-3">
        <ShieldCheck size={20} className="text-gold-dark shrink-0" strokeWidth={1.75} />
        <span className="text-sm text-ink font-medium">
          Committed to Accuracy, Integrity &amp; Confidentiality
        </span>
      </div>
    </div>
  );
}

const services = [
  {
    title: "GST Services",
    icon: Receipt,
    points: ["Registration", "Return Filing", "Cancellation", "Notice Handling"],
  },
  {
    title: "Accounting & Bookkeeping",
    icon: Calculator,
    points: ["Monthly Books", "Bank Reconciliation", "Financial Statements"],
  },
  {
    title: "Income Tax Return (ITR)",
    icon: FileText,
    points: ["Salaried", "Business & Professions", "Capital Gains", "Tax Planning"],
  },
  {
    title: "ROC Compliances",
    icon: Building2,
    points: ["Incorporation", "Annual Filing", "Director Changes"],
  },
  {
    title: "TDS & TCS Services",
    icon: Percent,
    points: ["Returns", "Payment", "Reconciliation"],
  },
  {
    title: "Audit Services",
    icon: ClipboardCheck,
    points: ["Income Tax Audit", "GST Audit", "Internal & Stock Audit"],
  },
  {
    title: "Labour Law Compliances",
    icon: Users,
    points: ["PF Registration", "ESIC Registration", "Payroll"],
  },
  {
    title: "Other Services",
    icon: Layers,
    points: ["Udyam", "Startup India", "IEC", "FSSAI", "Trademark", "DSC"],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0 bg-ledger opacity-40 pointer-events-none" />
        <div className="container-page relative py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-snug max-w-xl">
              Your Trusted Partner for{" "}
              <span className="text-gold-light">Accounting, Taxation &amp; Business Compliance</span>
            </h1>
            <div className="w-16 h-[2px] bg-gold mt-6" />
            <p className="mt-6 text-paper/75 text-lg max-w-md leading-relaxed">
              From GST registration and ITR filing to ROC compliance, accounting and
              audit, Singh &amp; Associates provides reliable financial solutions
              that let you focus on growing your business while we handle the compliances.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/85">
              {["Accurate Work", "Timely Compliance", "Transparent Advice"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-gold-light">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary !bg-gold hover:!bg-gold-dark">
                Book Free Consultation →
              </Link>
              <Link to="/services" className="btn-outline !border-paper/40 !text-paper hover:!bg-paper hover:!text-ink">
                Explore Services →
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <ComplianceCard />
          </div>
        </div>
      </section>

      {/* Mobile compliance card */}
      <section className="md:hidden container-page py-10">
        <ComplianceCard />
      </section>

      {/* Services preview */}
      <section className="container-page py-20">
        <p className="eyebrow">What I Do</p>
        <h2 className="font-display text-3xl sm:text-4xl mt-2 text-ink">
          Services built around your stage of business
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-line p-6 hover:border-gold transition-colors">
              <div className="flex items-center gap-3">
                <span className="shrink-0 inline-flex w-10 h-10 rounded-full bg-gold/10 items-center justify-center text-gold-dark">
                  <s.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl text-ink">{s.title}</h3>
              </div>
              <ul className="mt-3 space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate leading-relaxed">
                    <span className="text-gold mt-0.5">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link to="/services" className="inline-block mt-8 text-sm font-semibold text-ink border-b border-gold">
          See all services →
        </Link>
      </section>

      {/* CTA band */}
      <section className="bg-gold/10 border-y border-gold/30">
        <div className="container-page py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-ink">
              Ready to get your finances in order?
            </h2>
            <p className="text-slate mt-2">Book a free 15-minute consultation call.</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}