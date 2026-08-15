export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-[#f9fbfa]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-lg font-bold tracking-[-0.02em] text-[#063f3b]">
              CarePath{" "}
              <span className="text-[#2f7d5c]">
                Support
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Supporting independence and well-being through
              personalised care, community support and everyday
              assistance.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-[#cfe9dc] bg-[#eef7f1] px-3 py-1.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#2f7d5c]">
                Sample website
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-[#0f172a]">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="#"
                  className="transition hover:text-[#2f7d5c]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-[#2f7d5c]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#stories"
                  className="transition hover:text-[#2f7d5c]"
                >
                  Participant Stories
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-[#2f7d5c]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-[#0f172a]">
              Our Services
            </h3>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              <li>Daily Living Support</li>
              <li>Community Participation</li>
              <li>Personal Care</li>
              <li>Transport Assistance</li>
              <li>Household Support</li>
            </ul>
          </div>

          {/* SUPPORT AREAS */}
          <div>
            <h3 className="text-sm font-semibold text-[#0f172a]">
              Support Areas
            </h3>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              <li>Daily Living</li>
              <li>Community Access</li>
              <li>Personal Support</li>
              <li>Social Participation</li>
              <li>Independent Living</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-[#0f172a]">
              Contact Us
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#2f7d5c]">☎</span>
                <span>Sample phone number</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2f7d5c]">✉</span>

                <span className="break-all">
                  hello@example.com
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2f7d5c]">●</span>

                <span>
                  Sydney, NSW
                </span>
              </li>
            </ul>

            <p className="mt-4 max-w-[200px] text-[10px] leading-4 text-slate-400">
              Sample contact details shown for design preview.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">
              © 2026 CarePath Support.
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              Demo website content for design preview only.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}