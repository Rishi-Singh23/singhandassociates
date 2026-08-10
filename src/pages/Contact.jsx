import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Lock,
  Zap,
} from "lucide-react";

const CONTACT_ENDPOINT =
  "https://singh-contact-form.singh-associates1102.workers.dev/";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      console.log("Cloudflare Worker response:", result);

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        console.error("Worker error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Request error:", err);
      setStatus("error");
    }
  }

  return (
    <div>
      {/* HERO */}
      <section className="bg-ink text-paper">
        <div className="container-page py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-gold-light mb-4">
                CONTACT
              </p>

              <h1 className="font-display text-5xl leading-tight">
                Let's talk about
                <br />
                <span className="text-gold">
                  your finances.
                </span>
              </h1>

              <div className="w-14 h-[2px] bg-gold mt-8 mb-8"></div>

              <p className="text-paper/80 text-lg leading-8 max-w-md">
                Have a question or need expert guidance?
                <br />
                We're here to help.
              </p>
            </div>

            <div className="hidden lg:flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}contact-illustration.png`}
                alt="Contact"
                className="w-[1000px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-paper py-20">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* LEFT */}
            <div>
              <p className="eyebrow mb-8">
                GET IN TOUCH
              </p>

              <div className="space-y-8">

                {/* PHONE */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#FBF6EA] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold-dark" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-ink">
                      Phone
                    </h3>

                    <p>
                      +91 62074 31660
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#FBF6EA] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold-dark" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-ink">
                      Email
                    </h3>

                    <p>
                      contact@singhandassociates.co.in
                    </p>
                  </div>
                </div>

                {/* CONTACT TIME */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#FBF6EA] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold-dark" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-ink">
                      Contact Time
                    </h3>

                    <p>
                      9:00 AM – 2:00 AM
                    </p>

                    <p>
                      (Everyday)
                    </p>
                  </div>
                </div>

                {/* WHATSAPP */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#FBF6EA] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-gold-dark" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-ink">
                      WhatsApp
                    </h3>

                    <a
                      href="https://wa.me/916207431660"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gold-dark font-semibold"
                    >
                      Chat directly →
                    </a>
                  </div>
                </div>

                {/* OFFICE */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#FBF6EA] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold-dark" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-ink">
                      Office
                    </h3>

                    <p>
                      97/99/1 Shri Arabinda Road,
                    </p>

                    <p>
                      Salkia, Howrah,
                    </p>

                    <p>
                      West Bengal - 711106
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT - CONTACT FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-line rounded-lg p-8 shadow-sm space-y-5"
            >

              {/* NAME */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name *
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-line px-4 py-3 rounded focus:outline-none focus:border-gold"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-line px-4 py-3 rounded focus:outline-none focus:border-gold"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-line px-4 py-3 rounded focus:outline-none focus:border-gold"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  className="w-full border border-line px-4 py-3 rounded focus:outline-none focus:border-gold"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>

                <textarea
                  rows="5"
                  name="message"
                  required
                  className="w-full border border-line px-4 py-3 rounded focus:outline-none focus:border-gold"
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center"
              >
                <Send className="w-4 h-4" />

                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {/* SUCCESS MESSAGE */}
              {status === "sent" && (
                <div className="rounded-md border border-green-200 bg-green-50 p-4">
                  <p className="font-semibold text-green-700">
                    Message sent successfully!
                  </p>

                  <p className="text-sm text-green-600 mt-1">
                    Thank you for contacting Singh & Associates.
                    Our team will get back to you shortly.
                  </p>
                </div>
              )}

              {/* ERROR MESSAGE */}
              {status === "error" && (
                <p className="text-red-700 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

            </form>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-paper pb-20">
        <div className="container-page">
          <div className="grid md:grid-cols-3 border border-line rounded-lg overflow-hidden bg-[#FBF8F1]">

            {/* QUICK RESPONSE */}
            <div className="flex items-start gap-4 p-8 border-b md:border-b-0 md:border-r border-line">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Zap className="w-5 h-5 text-gold-dark" />
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-2">
                  Quick Response
                </h3>

                <p className="text-sm text-charcoal">
                  We reply as quickly as possible.
                </p>
              </div>
            </div>

            {/* SECURITY */}
            <div className="flex items-start gap-4 p-8 border-b md:border-b-0 md:border-r border-line">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Lock className="w-5 h-5 text-gold-dark" />
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-2">
                  Your Information is Safe
                </h3>

                <p className="text-sm text-charcoal">
                  Your details are secure and never shared.
                </p>
              </div>
            </div>

            {/* CONFIDENTIAL */}
            <div className="flex items-start gap-4 p-8">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-gold-dark" />
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-2">
                  100% Confidential
                </h3>

                <p className="text-sm text-charcoal">
                  All conversations are strictly confidential.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}