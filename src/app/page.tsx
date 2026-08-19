"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateEnquiryModal from "@/components/TemplateEnquiryModal";

const services = [
  [
    "☼",
    "Daily Living Support",
    "Assistance with day-to-day activities to help you live independently.",
  ],
  [
    "⟡",
    "Community Participation",
    "We support you to connect with your community and pursue your interests.",
  ],
  [
    "♡",
    "Personal Care",
    "Compassionate care that respects your dignity and personal preferences.",
  ],
  [
    "→",
    "Transport Assistance",
    "Safe and reliable transport to appointments, activities and everyday events.",
  ],
];

const whyItems = [
  "Person-centred approach",
  "Experienced and caring team",
  "Flexible support",
  "Local and approachable",
];

const steps = [
  [
    "1",
    "Contact Us",
    "Reach out to our friendly team via phone or online form.",
  ],
  [
    "2",
    "We Understand Your Needs",
    "We listen and learn about your goals and support needs.",
  ],
  [
    "3",
    "We Create Your Support Plan",
    "We design personalised support that works for you.",
  ],
];

const stories = [
  {
    title: "Daily Living Support",
    text: "The support has helped me feel more confident with my everyday routine and work towards greater independence.",
  },
  {
    title: "Community Participation",
    text: "Having support to get out into the community has helped me feel more connected and comfortable trying new activities.",
  },
  {
    title: "Independent Living",
    text: "With the right support around me, I can make more of my own choices and keep working towards my personal goals.",
  },
];

export default function Home() {
  const [templateModalOpen, setTemplateModalOpen] = useState(false);

  return (
    <>
      <Header />


      <main className="bg-white">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-b from-[#eef7f1] to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-7 sm:gap-10 sm:px-6 sm:pb-12 sm:pt-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-16 lg:pt-7">
            <div className="min-w-0">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2f7d5c] sm:mb-4 sm:text-sm">
                SUPPORT BUILT AROUND YOU
              </p>

<h1 className="max-w-xl break-words text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0f172a] min-[360px]:text-[34px] sm:text-5xl sm:leading-[1.08] lg:text-[52px]">
  Compassionate Support{" "}
  <span className="text-[#2f7d5c]/90">
    Every Step of the Way
  </span>
</h1>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-600 sm:mt-6 sm:text-base">
                We provide personalised support that empowers you to live
                independently, achieve your goals, and feel confident every
                day.
              </p>

              <div className="mt-6 flex flex-col gap-5">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="rounded-xl bg-[#2f7d5c] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#256b4d] sm:px-6"
                  >
                    Get Support
                  </a>

                  <a
                    href="#services"
                    className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:px-6"
                  >
                    Learn More
                  </a>
                </div>

                <div className="flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:text-sm">
                  {[
                    "Person-Centred Support",
                    "Flexible Support Options",
                    "Supporting Local Communities",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-[#2f7d5c]">
                        ✓
                      </span>

                      <p className="leading-tight">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-1 h-[240px] w-full overflow-hidden rounded-[24px] shadow-md min-[360px]:h-[270px] sm:mt-2 sm:h-[320px] sm:rounded-[28px] lg:h-[430px] lg:rounded-[32px]">
              <Image
                src="/images/ndis-hero.png"
                alt="CarePath Support participant and support worker"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <section className="border-y border-slate-100 bg-white px-4 py-9 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-lg font-semibold text-[#0f172a] md:text-xl">
              Support designed around your needs
            </h2>

            <div className="mt-8 grid grid-cols-2 items-center gap-y-6 md:grid-cols-4 md:gap-0">
              <div className="flex items-center justify-center gap-3 border-r border-slate-100 px-2 sm:gap-4 sm:px-4 md:justify-start md:px-8">
                <Image
                  src="/images/ndis-log.png"
                  alt="NDIS Logo"
                  width={42}
                  height={42}
                  className="object-contain"
                />

                <p className="text-[10px] font-semibold uppercase leading-[1.15] tracking-wide text-slate-700 sm:text-xs">
                  Person-Centred Support
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 px-2 sm:gap-4 sm:px-4 md:border-r md:border-slate-100 md:justify-start md:px-8">
                <Image
                  src="/images/quality-support.png"
                  alt="Quality Support"
                  width={42}
                  height={42}
                  className="object-contain"
                />

                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-700 sm:text-xs">
                  Quality Care
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 border-r border-slate-100 px-2 sm:gap-4 sm:px-4 md:justify-start md:px-8">
                <Image
                  src="/images/safe-icon.png"
                  alt="Safe and Responsible"
                  width={42}
                  height={42}
                  className="object-contain"
                />

                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-700 sm:text-xs">
                  Experienced Support Team
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 px-2 sm:gap-4 sm:px-4 md:justify-start md:px-8">
                <Image
                  src="/images/first-ai.png"
                  alt="First Aid Certified"
                  width={42}
                  height={42}
                  className="object-contain"
                />

                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-700 sm:text-xs">
                  Safe & Respectful Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section
          id="services"
          className="bg-[#f9fbfa] px-4 pb-8 pt-14 sm:px-6 lg:pb-8 lg:pt-16"
        >
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f7d5c]">
              Our Services
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0f172a] md:text-4xl">
              Support That Suits Your Needs
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map(([icon, title, desc]) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cfe9dc] hover:shadow-md sm:p-6"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef7f1] text-xl text-[#2f7d5c] transition group-hover:bg-[#2f7d5c] group-hover:text-white sm:h-16 sm:w-16 sm:text-2xl">
                    {icon}
                  </div>

                  <h3 className="mt-4 text-[13px] font-semibold leading-snug text-[#0f172a] sm:mt-5 sm:text-base">
                    {title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
                    {desc}
                  </p>

                  <p className="mt-4 text-xs font-semibold text-[#2f7d5c] transition group-hover:underline sm:mt-5 sm:text-sm">
                    Learn more
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex rounded-xl bg-[#2f7d5c] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#256b4d]"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY + HOW
        ====================================================== */}

        <section className="bg-[#f9fbfa] px-4 pb-14 pt-4 sm:px-6">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[26px] border border-[#e3f1ea] bg-[#eef7f1] sm:rounded-[32px] lg:grid-cols-2">
            <div className="grid gap-8 p-5 sm:p-8 md:grid-cols-[220px_1fr] lg:p-10">
              <div className="flex flex-col gap-6">
                <div className="relative h-[260px] overflow-hidden rounded-[24px] shadow-sm sm:h-[290px] sm:rounded-[28px]">
                  <Image
                    src="/images/ndis-why.png"
                    alt="Support worker helping participant"
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-[#e3f1ea] bg-white/80 p-5">
                  <p className="text-sm font-semibold text-[#0f172a]">
                    Support designed around you
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    We take time to understand your goals, preferences and daily
                    routine before creating the right support plan.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f7d5c]">
                  Why Choose Us
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-4xl">
                  Why Families Trust CarePath Support
                </h2>

                <div className="mt-7 space-y-5">
                  {whyItems.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#2f7d5c] text-sm font-bold text-[#2f7d5c]">
                        ✓
                      </span>

                      <div>
                        <h3 className="font-semibold text-[#0f172a]">
                          {item}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          We support around your goals, choices and community.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#f8fbf9] p-5 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f7d5c]">
                How It Works
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-4xl">
                Getting Support is Easy
              </h2>

              <div className="mt-8 space-y-7">
                {steps.map(([num, title, desc]) => (
                  <div
                    key={title}
                    className="flex gap-4 sm:gap-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef7f1] text-sm font-bold text-[#2f7d5c] sm:h-12 sm:w-12">
                      {num}
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#0f172a]">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <div className="rounded-3xl border border-[#e3f1ea] bg-white/80 p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    Ready to start your support journey?
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Speak with our friendly team and we’ll help you understand
                    the next step clearly.
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex rounded-xl bg-[#2f7d5c] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#256b4d]"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STORIES + CONTACT
        ====================================================== */}

        <section
          id="stories"
          className="bg-[#f9fbfa] px-4 pb-4 pt-8 sm:px-6 sm:pb-5"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f7d5c]">
                Example Participant Stories
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#0f172a] md:text-4xl">
                Show the Impact of Your Support
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                This section can be customised with genuine participant or
                family feedback when the website is prepared for your
                organisation.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stories.map((item) => (
                  <div
                    key={item.title}
                    className="flex h-full flex-col justify-between rounded-2xl border border-[#e3f1ea] bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div>
                      <span className="inline-flex rounded-full bg-[#eef7f1] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#2f7d5c]">
                        Sample Story
                      </span>

                      <p className="mt-5 text-sm leading-6 text-slate-600">
                        “{item.text}”
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7f1] text-lg text-[#2f7d5c]">
                        ♡
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">
                          {item.title}
                        </p>

                        <p className="text-xs text-slate-500">
                          Example story
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                DEMO CONTACT FORM
            ================================================== */}

            <div
              id="contact"
              className="rounded-[28px] border border-[#e3f1ea] bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f7d5c]">
                Get In Touch
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#0f172a]">
                Let’s Talk About How We Can Help
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="rounded-xl border border-[#2f7d5c] px-4 py-2 text-sm font-medium text-[#2f7d5c]"
                >
                  I’m a Participant
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600"
                >
                  Carer / Family
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600"
                >
                  Referrer
                </button>
              </div>

              <form className="mt-5 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-slate-400 focus:border-[#2f7d5c]"
                    placeholder="Full Name"
                  />

                  <input
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-slate-400 focus:border-[#2f7d5c]"
                    placeholder="Phone Number"
                  />
                </div>

                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-slate-400 focus:border-[#2f7d5c]"
                  placeholder="Email Address"
                />

                <textarea
                  className="h-28 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-slate-400 focus:border-[#2f7d5c]"
                  placeholder="How can we help you?"
                />

                <button
                  type="button"
                  className="w-full rounded-xl bg-[#2f7d5c] py-4 text-sm font-semibold text-white transition hover:bg-[#256b4d]"
                >
                  Send Enquiry
                </button>

                <p className="text-center text-[10px] leading-4 text-slate-400">
                  Demo form shown for layout preview.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          AXIS STUDIO DEMO CTA
      ====================================================== */}

      <section
        id="axis-demo-cta"
        className="bg-[#f9fbfa] px-4 pb-9 pt-6 sm:px-6 sm:pb-11 sm:pt-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[24px] border border-slate-800 bg-[#0f172a] px-5 py-6 shadow-[0_14px_40px_rgba(15,23,42,0.10)] sm:rounded-[26px] sm:px-8 sm:py-7 lg:px-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT */}

              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#2f7d5c] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-white sm:text-[9px]">
                    Axis Studio Demo
                  </span>

                  <span className="text-[9px] font-medium text-slate-400 sm:text-[10px]">
                    Care Services Website
                  </span>
                </div>

                <h2 className="mt-4 text-[1.55rem] font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                  Like this website design?
                </h2>

                <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                  We can customise this design with your branding, services,
                  content, images and contact details, then help you launch it.
                </p>
              </div>

              {/* BUTTONS */}

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setTemplateModalOpen(true)}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d5c] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#256b4d] sm:px-7"
                >
                  Start With This Design →
                </button>

                <a
                  href="https://axistudio.studio/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.08] sm:px-7"
                >
                  View More Designs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ONE ENQUIRY MODAL FOR BOTH CTA BUTTONS
      ====================================================== */}

      <TemplateEnquiryModal
        open={templateModalOpen}
        onClose={() => setTemplateModalOpen(false)}
      />

      <Footer />
    </>
  );
}