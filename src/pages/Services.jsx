import { Link } from "react-router-dom";
import {
  Users,
  Clock,
  ShieldCheck,
  Handshake,
  Receipt,
  Calculator,
  FileText,
  Building,
  Percent,
  ClipboardCheck,
  Layers,
  CheckCircle,
  Headset,
} from "lucide-react";

const topFeatures = [
  { icon: Users, label: "Expert Guidance" },
  { icon: Clock, label: "Timely & Accurate" },
  { icon: ShieldCheck, label: "Compliant & Secure" },
  { icon: Handshake, label: "Client Focused" },
];

const services = [
  {
    icon: Receipt,
    title: "GST Services",
    desc: "End-to-end GST compliance to keep your business tax-ready and penalty-free.",
    points: ["GST Registration", "GST Return Filing", "GST Cancellation", "GST Notice Handling"],
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    desc: "Clean, up-to-date books and financial reports to track your business performance.",
    points: [
      "Monthly Bookkeeping",
      "Bank Reconciliation",
      "Financial Statements & MIS Reports",
      "Tally Setup",
      "Project Report Preparation",
      "CMA Data Preparation",
    ],
  },
  {
    icon: FileText,
    title: "Income Tax Return (ITR)",
    desc: "Accurate ITR filing and planning across every income category.",
    points: ["Salaried Employees", "Business & Professions", "Capital Gains", "Income from Other Sources", "Tax Planning"],
  },
  {
    icon: Building,
    title: "ROC Compliances",
    desc: "Complete ROC compliance support for companies and LLPs.",
    points: [
      "Company Incorporation (Pvt Ltd, OPC, LLP)",
      "Annual Filing (AOC-4, MGT-7)",
      "Appointment / Resignation of Director",
      "Conversion of Company",
    ],
  },
  {
    icon: Percent,
    title: "TDS & TCS Services",
    desc: "Deduction, deposit and reconciliation handled accurately and on time.",
    points: ["TDS Returns", "TDS Payment", "TDS Reconciliation", "TCS Filing"],
  },
  {
    icon: ClipboardCheck,
    title: "Audit Services",
    desc: "Independent audit support across tax, GST and operations.",
    points: ["Income Tax Audit", "GST Audit", "Internal Audit", "Stock & Inventory Audit"],
  },
  {
    icon: Users,
    title: "Labour Law Compliances",
    desc: "Payroll and statutory labour compliance, fully managed.",
    points: [
      "PF Registration & Returns",
      "ESIC Registration & Returns",
      "Professional Tax (P-Tax) Registration & Returns",
      "Payroll Services",
    ],
  },
  {
    icon: Layers,
    title: "Other Services",
    desc: "Registrations and certifications that support your business growth.",
    points: [
      "Udyam Registration",
      "Startup India Registration",
      "Import Export Code (IEC) Registration",
      "FSSAI Registration",
      "Trademark Registration",
      "Digital Signature Certificate (DSC)",
    ],
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-ink text-paper">
        <div className="container-page py-16">
          <p className="eyebrow text-gold-light">Our Services</p>
          <h1 className="font-display text-4xl sm:text-5xl mt-2">
            Comprehensive support,
            <br />
            <span className="text-gold-light">priced by scope</span>
          </h1>
          <p className="mt-4 text-paper/75 max-w-xl">
            Every business is unique, our services are designed to fit your needs and
            grow with you.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {topFeatures.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm text-paper/85">
                <f.icon size={18} className="text-gold-light" strokeWidth={1.75} />
                {f.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.title} className="border border-line p-8">
            <span className="inline-flex w-14 h-14 rounded-full bg-gold/10 items-center justify-center text-gold-dark mb-4">
              <s.icon size={26} strokeWidth={1.5} />
            </span>
            <h2 className="font-display text-2xl text-ink">{s.title}</h2>
            <p className="mt-2 text-sm text-slate leading-relaxed">{s.desc}</p>
            <ul className="mt-5 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-charcoal">
                  <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-gold/10 border-y border-gold/30">
        <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="shrink-0 w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center text-gold-dark">
              <Headset size={24} strokeWidth={1.5} />
            </span>
            <div>
              <h2 className="font-display text-2xl text-ink">Not sure which service fits?</h2>
              <p className="text-slate mt-1">Share your details and we will guide you to the right solution.</p>
            </div>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}