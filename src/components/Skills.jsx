"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Code2, 
  Sparkles, 
  Globe, 
  Atom, 
  Palette, 
  Layout, 
  Layers, 
  Smartphone, 
  Server, 
  Cpu, 
  Share2, 
  Network, 
  ShieldCheck, 
  Boxes, 
  Database, 
  DatabaseZap, 
  Binary, 
  Zap, 
  Cloud, 
  CloudSun, 
  GitBranch, 
  Container, 
  Workflow, 
  CheckCircle2, 
  Gauge, 
  PenTool 
} from "lucide-react";

// Safe icon lookup mapping
const iconMap = {
  Globe,
  Atom,
  Code2,
  Palette,
  Layout,
  Layers,
  Smartphone,
  Sparkles,
  Server,
  Cpu,
  Share2,
  Network,
  ShieldCheck,
  Boxes,
  Database,
  DatabaseZap,
  Binary,
  Zap,
  Cloud,
  CloudSun,
  GitBranch,
  Container,
  Workflow,
  CheckCircle2,
  Gauge,
  PenTool,
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillCategories.map((c) => c.name)];

  const displayedSkills = activeCategory === "All"
    ? skillCategories.flatMap((cat) => cat.skills.map(s => ({ ...s, categoryName: cat.name })))
    : (skillCategories.find((cat) => cat.name === activeCategory)?.skills || []).map(s => ({ ...s, categoryName: activeCategory }));

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "Advanced":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      default:
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    }
  };

  const getLevelPercentage = (level) => {
    switch (level) {
      case "Expert":
        return "95%";
      case "Advanced":
        return "85%";
      default:
        return "75%";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Modern Tech Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A curated set of technologies, frameworks, and methodologies I leverage to build scalable software.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {displayedSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const percentage = getLevelPercentage(skill.level);

            return (
              <div
                key={`${skill.name}-${index}`}
                className="group relative p-4 sm:p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>

                <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  {skill.name}
                </div>

                {activeCategory === "All" && (
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                    {skill.categoryName}
                  </div>
                )}

                {/* Progress bar */}
                <div className="w-full bg-slate-200/60 dark:bg-slate-800/60 h-1.5 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500 group-hover:opacity-100 opacity-80"
                    style={{ width: percentage }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
