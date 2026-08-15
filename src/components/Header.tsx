"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative z-50 border-b border-slate-100 bg-[#eef7f1] shadow-sm lg:sticky lg:top-0">
      {/* MAIN NAV */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:py-5">
        {/* LOGO */}
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-bold tracking-[-0.03em] text-[#063f3b] sm:text-xl"
        >
          CarePath{" "}
          <span className="text-[#2f7d5c]">
            Support
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <a
            href="#"
            className="transition hover:text-[#2f7d5c]"
          >
            Home
          </a>

          <a
            href="#services"
            className="transition hover:text-[#2f7d5c]"
          >
            Services
          </a>

          <a
            href="#"
            className="transition hover:text-[#2f7d5c]"
          >
            NDIS Support
          </a>

          <a
            href="#stories"
            className="transition hover:text-[#2f7d5c]"
          >
            Stories
          </a>

          <a
            href="#contact"
            className="transition hover:text-[#2f7d5c]"
          >
            Contact
          </a>
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-[#f6b84b] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e8a936] lg:inline-flex"
        >
          Get Support
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#d9e9df] bg-white text-xl font-bold text-[#063f3b] shadow-sm transition active:scale-95 lg:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* MOBILE / TABLET DROPDOWN */}
      {open && (
        <div className="border-t border-[#d9e9df] bg-white px-4 py-4 shadow-lg sm:px-6 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 text-sm font-medium text-slate-700">
            <a
              onClick={closeMenu}
              href="#"
              className="rounded-xl px-4 py-3 transition hover:bg-[#eef7f1] hover:text-[#2f7d5c]"
            >
              Home
            </a>

            <a
              onClick={closeMenu}
              href="#services"
              className="rounded-xl px-4 py-3 transition hover:bg-[#eef7f1] hover:text-[#2f7d5c]"
            >
              Services
            </a>

            <a
              onClick={closeMenu}
              href="#"
              className="rounded-xl px-4 py-3 transition hover:bg-[#eef7f1] hover:text-[#2f7d5c]"
            >
              NDIS Support
            </a>

            <a
              onClick={closeMenu}
              href="#stories"
              className="rounded-xl px-4 py-3 transition hover:bg-[#eef7f1] hover:text-[#2f7d5c]"
            >
              Stories
            </a>

            <a
              onClick={closeMenu}
              href="#contact"
              className="rounded-xl px-4 py-3 transition hover:bg-[#eef7f1] hover:text-[#2f7d5c]"
            >
              Contact
            </a>

            <a
              onClick={closeMenu}
              href="#contact"
              className="mt-3 rounded-xl bg-[#2f7d5c] px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#256b4d]"
            >
              Get Support →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}