"use client";

import { portfolioData } from "@/data/portfolioData";
import { 
  Zap, 
  Layers, 
  ShieldCheck, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  Award
} from "lucide-react";

export default function About() {
  const { personal, education } = portfolioData;

  const philosophies = [
    {
      icon: Zap,
      title: "Fault-Tolerant & Scalable",
      description: "Idempotent DAGs, distributed streaming watermarking, and zero data loss architectures.",
    },
    {
      icon: ShieldCheck,
      title: "Data Quality & Lineage",
      description: "Automated schema enforcement, testing with dbt and Great Expectations, and auditability.",
    },
    {
      icon: Layers,
      title: "Compute & Query Tuning",
      description: "Smart partitioning, Z-ordering, and cloud warehouse credit efficiency for optimal ROI.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering with Purpose & Precision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A glimpse into my background, development philosophy, and the principles that guide my work.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 glow-primary overflow-hidden group">
              {/* Background gradient pattern */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Modern Avatar Frame */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden mb-6 p-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-xl group/avatar">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
                    {personal.avatarUrl ? (
                      <img
                        src={personal.avatarUrl}
                        alt={personal.name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover/avatar:scale-105"
                      />
                    ) : (
                      <>
                        <span className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {personal.name.split(" ").map(n => n[0]).join("")}
                        </span>
                        <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mt-1">
                          {personal.role}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {personal.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                  {personal.role}
                </p>

                {/* Info Pills */}
                <div className="mt-6 w-full space-y-2.5 text-left text-xs sm:text-sm">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="truncate">{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300">
                    <Briefcase className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>Open to Data Engineering & Cloud Roles</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300">
                    <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="truncate">{education[0].degree}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophies */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Over the past 5+ years, I have architected and deployed enterprise data platforms handling tens of terabytes daily. My focus is building robust, fault-tolerant pipelines that seamlessly bridge raw operational data with high-performance analytics and machine learning.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                From high-throughput event streaming with Apache Kafka and Spark, to modern lakehouses using Delta Lake, dbt, and Snowflake, I ensure data arrives on time, fully tested, and queryable with sub-second performance.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {philosophies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-panel border border-slate-200/70 dark:border-slate-800/70 hover:border-blue-500/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
