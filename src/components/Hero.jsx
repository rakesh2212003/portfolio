"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Sparkles, 
  Terminal, 
  Code2, 
  CheckCircle2, 
  Layers 
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

export default function Hero() {
  const { personal, stats } = portfolioData;
  const roles = [
    "Senior Data Engineer",
    "Apache Spark & Kafka Specialist",
    "Cloud Lakehouse & Warehouse Architect",
    "Distributed Streaming & ETL Expert"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.statusBadge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">{personal.name}</span>
            <br />
            <span className="text-gradient">
              {personal.headline}
            </span>
          </h1>

          {/* Dynamic Changing Subtitle */}
          <div className="h-8 flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium text-lg sm:text-xl">
              <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="inline-block transition-all duration-300 transform">
                {roles[currentRoleIndex]}
              </span>
            </div>
          </div>

          {/* Bio paragraph */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {personal.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get In Touch</span>
              <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-base transition-all duration-200 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-blue-500/50 hover:scale-110 transition-all duration-200 shadow-sm"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:scale-110 transition-all duration-200 shadow-sm"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-sky-500 hover:border-sky-500/50 hover:scale-110 transition-all duration-200 shadow-sm"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-rose-500 hover:border-rose-500/50 hover:scale-110 transition-all duration-200 shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
            {stats.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-2xl glass-panel text-left hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
