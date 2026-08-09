import { Link } from "react-router-dom";
import {
  Award,
  FileText,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <div>

      {/* HERO */}

      <section className="bg-ink text-paper">

        <div className="container-page py-16 lg:py-20">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}

            <div>

              <p className="eyebrow text-gold-light">
                ABOUT ME
              </p>

              <h1 className="font-display text-5xl leading-tight mt-4">

                Your Growth,

                <br />

                <span className="text-gold">
                  My Commitment
                </span>

              </h1>

              <div className="w-16 h-[2px] bg-gold mt-8 mb-8"></div>

              <p className="text-paper/80 text-lg leading-8">

                Helping individuals, startups and businesses stay
                compliant, make better financial decisions and
                grow with confidence.

              </p>

              <div className="grid grid-cols-2 gap-8 mt-12">

                <div className="text-center">

                  <Award className="mx-auto text-gold w-9 h-9"/>

                  <h3 className="mt-4 text-3xl font-bold">
                    250+
                  </h3>

                  <p className="text-paper/70">
                    Trusted Clients
                  </p>

                </div>

                <div className="text-center">

                  <FileText className="mx-auto text-gold w-9 h-9"/>

                  <h3 className="mt-4 text-3xl font-bold">
                    500+
                  </h3>

                  <p className="text-paper/70">
                    Filings Completed
                  </p>

                </div>

                <div className="text-center">

                  <CalendarDays className="mx-auto text-gold w-9 h-9"/>

                  <h3 className="mt-4 text-3xl font-bold">
                    5+
                  </h3>

                  <p className="text-paper/70">
                    Years Experience
                  </p>

                </div>

                <div className="text-center">

                  <TrendingUp className="mx-auto text-gold w-9 h-9"/>

                  <h3 className="mt-4 text-3xl font-bold">
                    10+
                  </h3>

                  <p className="text-paper/70">
                    Industries Served
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="flex justify-center lg:justify-end">

              <img
                src="/ca.png"
                alt="CA"
                className="w-[420px] sm:w-[480px] lg:w-[520px] h-auto object-contain"
              />

            </div>

          </div>

        </div>

      </section>
            {/* MY STORY */}

      <section className="bg-paper py-20">

        <div className="container-page">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}

            <div>

              <p className="eyebrow">
                MY STORY
              </p>

              <h2 className="font-display text-4xl text-ink mt-3">

                Building businesses with trust, 
                compliance and long-term success.

              </h2>

              <p className="mt-8 text-slate leading-8">

                I'm Dhruv Singh, founder of Singh & Associates. I help individuals, professionals, startups and businesses simplify taxation, 
                accounting and regulatory compliance through practical, reliable and personalized financial solutions.

              </p>

              <p className="mt-6 text-slate leading-8">

                I believe every client deserves more than just return filing. My approach is built on transparency, 
                timely compliance and strategic guidance that helps businesses stay compliant, 
                reduce risks and make confident financial decisions.

              </p>

              <p className="mt-6 text-slate leading-8">

                At Singh & Associates, my commitment is simple—deliver accurate advice, dependable service and long-term support 
                so you can focus on growing your business while we take care of the compliance.

              </p>

              <Link
                to="/contact"
                className="btn-primary mt-10 inline-flex"
              >

                Work With Me

              </Link>

            </div>

            {/* RIGHT */}

            <div className="bg-[#FBF8F1] rounded-xl p-10 border border-line">

              <p className="eyebrow">

                WHAT I DO

              </p>

              <h3 className="font-display text-3xl text-ink mt-3">

                Helping businesses stay compliant
                and financially stronger.

              </h3>

              <div className="mt-10 space-y-6">

                <div className="flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold">

                    1

                  </div>

                  <div>

                    <h4 className="font-semibold text-ink">

                      Income Tax Filing

                    </h4>

                    <p className="text-slate">

                      Individuals, professionals,
                      salaried employees and businesses.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold">

                    2

                  </div>

                  <div>

                    <h4 className="font-semibold text-ink">

                      GST Registration & Returns

                    </h4>

                    <p className="text-slate">

                      Complete GST compliance
                      with timely filings.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold">

                    3

                  </div>

                  <div>

                    <h4 className="font-semibold text-ink">

                      Business Advisory

                    </h4>

                    <p className="text-slate">

                      Strategic financial planning
                      for startups and SMEs.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold">

                    4

                  </div>

                  <div>

                    <h4 className="font-semibold text-ink">

                      Accounting & Bookkeeping

                    </h4>

                    <p className="text-slate">

                      Accurate books for better
                      business decisions.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* QUOTE */}

      <section className="bg-ink text-paper py-20">

        <div className="container-page text-center max-w-4xl">

          <p className="eyebrow text-gold-light">
            MY PHILOSOPHY
          </p>

          <h2 className="font-display text-4xl mt-5 leading-relaxed">

            "Numbers tell a story.
            My responsibility is to make sure
            that story helps you grow."

          </h2>

        </div>

      </section>

      {/* PROCESS */}

      <section className="bg-paper py-20">

        <div className="container-page">

          <p className="eyebrow text-center">
            HOW I WORK
          </p>

          <h2 className="font-display text-4xl text-center text-ink mt-3">

            A Simple & Transparent Process

          </h2>

          <div className="grid md:grid-cols-5 gap-8 mt-16">

            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-gold text-white flex items-center justify-center text-2xl font-bold">
                1
              </div>

              <h3 className="font-semibold mt-5 text-ink">
                Understand
              </h3>

              <p className="text-slate mt-3 text-sm">
                Learn about your business,
                goals and challenges.
              </p>

            </div>

            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-gold text-white flex items-center justify-center text-2xl font-bold">
                2
              </div>

              <h3 className="font-semibold mt-5 text-ink">
                Analyze
              </h3>

              <p className="text-slate mt-3 text-sm">
                Review financial records
                and compliance needs.
              </p>

            </div>

            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-gold text-white flex items-center justify-center text-2xl font-bold">
                3
              </div>

              <h3 className="font-semibold mt-5 text-ink">
                Plan
              </h3>

              <p className="text-slate mt-3 text-sm">
                Prepare a practical
                strategy for your goals.
              </p>

            </div>

            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-gold text-white flex items-center justify-center text-2xl font-bold">
                4
              </div>

              <h3 className="font-semibold mt-5 text-ink">
                Execute
              </h3>

              <p className="text-slate mt-3 text-sm">
                Complete filings,
                registrations and reports.
              </p>

            </div>

            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-gold text-white flex items-center justify-center text-2xl font-bold">
                5
              </div>

              <h3 className="font-semibold mt-5 text-ink">
                Support
              </h3>

              <p className="text-slate mt-3 text-sm">
                Continue guiding you
                whenever needed.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="bg-[#FBF8F1] py-20">

        <div className="container-page">

          <p className="eyebrow text-center">
            WHY CLIENTS CHOOSE ME
          </p>

          <h2 className="font-display text-4xl text-center text-ink mt-3">

            Values Behind Every Engagement

          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

            <div className="bg-white p-8 rounded-xl shadow-sm">

              <h3 className="font-display text-xl text-ink">
                Integrity
              </h3>

              <p className="text-slate mt-4">
                Honest advice, complete
                transparency and ethical
                professional conduct.
              </p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">

              <h3 className="font-display text-xl text-ink">
                Accuracy
              </h3>

              <p className="text-slate mt-4">
                Every filing is checked
                carefully before submission.
              </p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">

              <h3 className="font-display text-xl text-ink">
                Client First
              </h3>

              <p className="text-slate mt-4">
                Personalized solutions,
                never one-size-fits-all.
              </p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">

              <h3 className="font-display text-xl text-ink">
                Availability
              </h3>

              <p className="text-slate mt-4">
                Always reachable through
                call, email or WhatsApp.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}