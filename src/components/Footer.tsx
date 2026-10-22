import React from "react";
import Link from "next/link";
import { Recycle, ShieldCheck, Heart, Sparkles, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#201f1f] bg-[#0e0e0e] text-slate-400">
      <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8 2xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & Mission */}
          <div className="md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm">
                <Recycle className="h-5 w-5" />
              </div>
              <span className="font-black text-xl tracking-tight text-white font-headline-sm">
                Saanjha
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Share more. Buy less. Saanjha helps college students and nearby communities borrow useful resources locally, with AI-powered matching and trusted sharing.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#1c1b1b] px-2.5 py-1 text-xs font-semibold text-[#8bd6b6] border border-[#201f1f]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#8bd6b6]" />
                Zero Single-Use Waste
              </span>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/explore"
                  className="hover:text-[#8bd6b6] transition-colors"
                >
                  Browse Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/matches"
                  className="hover:text-[#8bd6b6] transition-colors flex items-center gap-1.5"
                >
                  <span>AI Smart Matcher</span>
                  <span className="rounded bg-[#065f46] px-1 text-[10px] font-bold text-[#8bd6b6]">
                    Live
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-[#8bd6b6] transition-colors"
                >
                  Community Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard?tab=impact"
                  className="hover:text-[#8bd6b6] transition-colors"
                >
                  CO₂ & Eco Impact Tracker
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Potential Campus Pilot Communities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              CAMPUS PARTNERS (NOIDA &amp; NEARBY)
            </h4>
            <p className="text-[11px] text-slate-500">Potential pilot communities</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <MapPin className="h-3 w-3 text-[#8bd6b6] shrink-0" />
                <span>KIET Group of Institutions</span>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="h-3 w-3 text-[#8bd6b6] shrink-0" />
                <span>JSS Academy of Technical Education</span>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="h-3 w-3 text-[#8bd6b6] shrink-0" />
                <span>Ajay Kumar Garg Engineering College (AKGEC)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="h-3 w-3 text-[#8bd6b6] shrink-0" />
                <span>GL Bajaj Institute of Technology &amp; Management</span>
              </li>
            </ul>
            <p className="text-[11px] leading-relaxed text-slate-500">
              Starting with our campus community &bull; Expanding across Noida and nearby colleges
            </p>
          </div>

          {/* Column 4: PeerTrust Assurance */}
          <div className="space-y-3 rounded-2xl bg-[#1c1b1b] p-4 border border-[#201f1f]">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#8bd6b6]" />
              <h4 className="text-xs font-bold text-slate-200">
                Safe & Community Verified
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every peer is verified with college IDs & phone numbers. Secure OTP handovers prevent disputes.
            </p>
            <div className="text-[11px] font-medium text-slate-500 pt-1 border-t border-[#262626]">
              Built for circular economy & zero waste.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[#201f1f] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Saanjha. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span>for Sustainable Campus Communities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
