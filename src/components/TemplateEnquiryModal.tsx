"use client";

import { type FormEvent, useEffect, useState } from "react";

type TemplateEnquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#0f172a] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#2f7d5c] focus:ring-4 focus:ring-[#2f7d5c]/10";

export default function TemplateEnquiryModal({
  open,
  onClose,
}: TemplateEnquiryModalProps) {
  const [carePlan, setCarePlan] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* =========================================================
     RESET MODAL STATE
  ========================================================= */
  useEffect(() => {
    if (!open) return;

    setCarePlan(false);
    setError("");
    setSubmitting(false);
    setSubmitted(false);
  }, [open]);

  /* =========================================================
     LOCK PAGE SCROLL + ESCAPE TO CLOSE
  ========================================================= */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  /* =========================================================
     SUBMIT
  ========================================================= */
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const payload = {
      business: String(
        formData.get("business") ?? "",
      ).trim(),

      email: String(
        formData.get("email") ?? "",
      ).trim(),

      phone: String(
        formData.get("phone") ?? "",
      ).trim(),

      currentWebsite: String(
        formData.get("currentWebsite") ?? "",
      ).trim(),

      budget: String(
        formData.get("budget") ?? "",
      ).trim(),

      message: String(
        formData.get("message") ?? "",
      ).trim(),

      companyFax: String(
        formData.get("companyFax") ?? "",
      ).trim(),

      carePlan,

      selectedTemplate: {
        name: "NDIS Care Services",
        type: "Care & Support Website Design",
      },

      websiteType: "Ready-Made Website",
    };

    if (!payload.business || !payload.email) {
      setError(
        "Please enter your business name and email address.",
      );

      setSubmitting(false);
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(payload.email)) {
      setError(
        "Please enter a valid email address.",
      );

      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "/api/project-enquiry",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        },
      );

      const result = await response
        .json()
        .catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "We couldn't send your enquiry. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f172a]/70 p-3 backdrop-blur-md sm:p-5">
      {/* =====================================================
          BACKDROP
      ====================================================== */}
      <button
        type="button"
        aria-label="Close enquiry form"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      {/* =====================================================
          MODAL
      ====================================================== */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Start with the NDIS Care Services design"
        className={`relative z-10 w-full overflow-hidden bg-white shadow-[0_30px_90px_rgba(15,23,42,0.35)] transition-all ${
          submitted
            ? "max-w-[440px] rounded-[26px]"
            : "max-h-[88dvh] max-w-[560px] overflow-y-auto overscroll-contain rounded-[24px] sm:max-h-[90dvh] sm:rounded-[30px]"
        }`}
      >
        {/* TOP ACCENT */}
        <div className="h-1.5 bg-gradient-to-r from-[#2f7d5c] via-[#55a17e] to-[#a8d8c0]" />

        {/* =====================================================
            SUCCESS SCREEN
        ====================================================== */}
        {submitted ? (
          <div className="relative px-5 pb-7 pt-9 text-center sm:px-8 sm:pb-9 sm:pt-10">
            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-400 transition hover:border-[#2f7d5c]/30 hover:bg-[#eef7f1] hover:text-[#2f7d5c]"
            >
              ×
            </button>

            {/* SUCCESS ICON */}
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 scale-[1.35] rounded-full bg-[#2f7d5c]/10" />

              <div className="relative grid size-16 place-items-center rounded-full bg-[#2f7d5c] text-2xl font-bold text-white shadow-[0_14px_35px_rgba(47,125,92,0.24)]">
                ✓
              </div>
            </div>

            {/* STATUS */}
            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe9dc] bg-[#f4faf6] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#2f7d5c]">
                <span className="size-1.5 rounded-full bg-[#2f7d5c]" />
                Enquiry Received
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mx-auto mt-4 max-w-[360px] text-[1.85rem] font-semibold leading-[1.12] tracking-[-0.04em] text-[#0f172a] sm:text-[2rem]">
              Thanks — we&apos;ve got your request.
            </h2>

            {/* MESSAGE */}
            <p className="mx-auto mt-3 max-w-[350px] text-sm leading-6 text-slate-500">
              We&apos;ve received your project details and
              will review them shortly. We&apos;ll contact
              you with the next steps.
            </p>

            {/* WHAT HAPPENS NEXT */}
            <div className="mt-6 rounded-[18px] border border-[#dcebe3] bg-[#f8fbf9] p-4 text-left sm:p-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#2f7d5c]">
                What happens next
              </p>

              <div className="mt-4 space-y-4">
                {/* STEP 1 */}
                <div className="flex items-start gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#e5f3eb] text-xs font-bold text-[#2f7d5c]">
                    1
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">
                      We review your request
                    </p>

                    <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
                      We&apos;ll look through your business
                      details and website requirements.
                    </p>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="flex items-start gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#e5f3eb] text-xs font-bold text-[#2f7d5c]">
                    2
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">
                      We&apos;ll contact you
                    </p>

                    <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
                      We&apos;ll explain the recommended next
                      step and answer any questions you have.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SELECTED DESIGN */}
            <div className="mt-4 flex items-center justify-between gap-3 rounded-[16px] border border-[#cfe9dc] bg-white px-4 py-3.5 text-left shadow-sm">
              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#2f7d5c]">
                  Selected Design
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-[#0f172a]">
                  NDIS Care Services
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#eef7f1] px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#2f7d5c]">
                <span className="grid size-4 place-items-center rounded-full bg-[#2f7d5c] text-[9px] text-white">
                  ✓
                </span>
                Received
              </span>
            </div>

            {/* DONE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#0f172a] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:bg-[#1e293b]"
            >
              Done
            </button>

            <p className="mt-3 text-[10px] leading-4 text-slate-400">
              You can safely close this window.
            </p>
          </div>
        ) : (
          /* =====================================================
             FORM SCREEN
          ====================================================== */
          <div className="p-4 sm:p-7">
            {/* HEADER */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2f7d5c]">
                  Axis Studio · NDIS Demo
                </p>

                <h2 className="mt-2.5 text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0f172a] sm:text-[2.2rem]">
                  Start with this design.
                </h2>

                <p className="mt-2 max-w-md text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  Send us a few details and we&apos;ll
                  explain how we can customise this NDIS
                  website for your business.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-slate-200 text-lg leading-none text-slate-400 transition hover:border-[#2f7d5c]/30 hover:bg-[#eef7f1] hover:text-[#2f7d5c]"
              >
                ×
              </button>
            </div>

            {/* SELECTED DESIGN */}
            <div className="mt-5 flex items-center justify-between gap-3 rounded-[18px] border border-[#cfe9dc] bg-[#f4faf6] p-3.5 sm:p-4">
              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#2f7d5c]">
                  Selected Design
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-[#0f172a] sm:text-base">
                  NDIS Care Services
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  Care &amp; Support Website Design
                </p>
              </div>

              <span className="shrink-0 rounded-full border border-[#b7dfca] bg-white px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#2f7d5c]">
                ✓ Selected
              </span>
            </div>

            {/* =================================================
                FORM
            ================================================== */}
            <form
              onSubmit={handleSubmit}
              className="mt-5"
            >
              {/* HONEYPOT */}
              <input
                type="text"
                name="companyFax"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* BUSINESS + EMAIL */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="business"
                    className="mb-2 block text-xs font-semibold text-slate-800"
                  >
                    Business name{" "}
                    <span className="text-[#2f7d5c]">
                      *
                    </span>
                  </label>

                  <input
                    id="business"
                    name="business"
                    type="text"
                    maxLength={120}
                    placeholder="Your business name"
                    className={fieldClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-slate-800"
                  >
                    Email address{" "}
                    <span className="text-[#2f7d5c]">
                      *
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    className={fieldClass}
                    required
                  />
                </div>
              </div>

              {/* PHONE + WEBSITE */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold text-slate-800"
                  >
                    Phone{" "}
                    <span className="font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={50}
                    placeholder="Phone number"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentWebsite"
                    className="mb-2 block text-xs font-semibold text-slate-800"
                  >
                    Existing website{" "}
                    <span className="font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="currentWebsite"
                    name="currentWebsite"
                    type="url"
                    maxLength={300}
                    placeholder="https://..."
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* BUDGET */}
              <div className="mt-4">
                <label
                  htmlFor="budget"
                  className="mb-2 block text-xs font-semibold text-slate-800"
                >
                  Approximate budget{" "}
                  <span className="font-normal text-slate-400">
                    (optional)
                  </span>
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="">
                    Select a budget range
                  </option>

                  <option value="Under $500">
                    Under $500
                  </option>

                  <option value="$500 – $1,000">
                    $500 – $1,000
                  </option>

                  <option value="$1,000 – $2,000">
                    $1,000 – $2,000
                  </option>

                  <option value="$2,000+">
                    $2,000+
                  </option>

                  <option value="Not sure yet">
                    Not sure yet
                  </option>
                </select>
              </div>

              {/* CARE PLAN */}
              <button
                type="button"
                onClick={() =>
                  setCarePlan((value) => !value)
                }
                className={`mt-4 flex w-full items-start gap-3 rounded-[16px] border p-4 text-left transition ${
                  carePlan
                    ? "border-[#2f7d5c]/35 bg-[#eef7f1]"
                    : "border-slate-200 bg-[#fafcfa] hover:border-[#2f7d5c]/20"
                }`}
              >
                <span
                  className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border text-xs transition ${
                    carePlan
                      ? "border-[#2f7d5c] bg-[#2f7d5c] text-white"
                      : "border-slate-300 bg-white text-transparent"
                  }`}
                >
                  ✓
                </span>

                <div>
                  <p className="text-xs font-semibold text-[#0f172a] sm:text-sm">
                    Add Website Care Plan
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
                    Hosting, updates, backups and ongoing
                    website support.
                  </p>
                </div>
              </button>

              {/* PROJECT DETAILS */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-slate-800"
                >
                  Tell us about your project{" "}
                  <span className="font-normal text-slate-400">
                    (optional)
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell us briefly about your business, pages you need or anything you would like changed in this design."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium leading-6 text-[#0f172a] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#2f7d5c] focus:ring-4 focus:ring-[#2f7d5c]/10"
                />
              </div>

              {/* ERROR */}
              {error && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700">
                  {error}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={submitting}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2f7d5c] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(47,125,92,0.2)] transition hover:-translate-y-0.5 hover:bg-[#256b4d] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting
                  ? "Sending Request..."
                  : "Send Website Enquiry →"}
              </button>

              <p className="mt-3 text-center text-[10px] font-medium text-slate-400">
                No payment or commitment required to send
                an enquiry.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}