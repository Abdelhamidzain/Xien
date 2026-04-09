"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Easing } from "framer-motion";
import { EtheralShadow } from "@/components/ui/etheral-shadow";

const ease: Easing = [0.16, 1, 0.3, 1];
const accent = "#00C853";

/* ═══ DATA ═══ */

const experience = [
  {
    period: "2024 – Present", role: "Senior Art Director / Motion Designer", company: "Tawuniya Insurance", location: "Riyadh, Saudi Arabia", type: "Full-time",
    bullets: [
      "Translated campaign objectives into strong visual concepts, from ideation and sketching to polished brand-ready executions.",
      "Delivered high-impact motion and design assets for social and web platforms with full brand alignment.",
      "Contributed to over-achievement of 2025 KPI targets within Tawuniya's Digital Hub (Digital Sales).",
      "Built scalable creative systems and automation tools (Illustrator / After Effects), improving cross-team efficiency.",
    ],
  },
  {
    period: "2022 – 2024", role: "Art Director / Motion Designer", company: "Gene Branding", location: "Riyadh, Saudi Arabia", type: "Remote",
    bullets: [
      "Created concept presentations and short branding films that boosted client approvals.",
      "Directed and produced the official showreel that attracted new clients.",
      "Collaborated with creative directors to visualize brand strategies through animation and motion identity.",
    ],
  },
  {
    period: "2021 – 2022", role: "Freelance Art Director / Motion Designer", company: "International Clients", location: "London · Istanbul · Jeddah · Cairo", type: "Freelance",
    bullets: [
      "Astucemedia (London) — Rebranding and motion package for Alghad News Channel.",
      "ID8 (Istanbul) — Full branding and animation system for Al-Fallujah TV (Iraq).",
      "Bear Studio (Jeddah) — 2D animation for corporate video and digital campaigns.",
      "MERF (Cairo) — Animated films for major real estate developments such as 1Ninety.",
    ],
  },
  {
    period: "2020 – 2021", role: "Senior Motion Designer", company: "The Brand Company", location: "Cairo, Egypt", type: "Full-time",
    bullets: [
      "Developed branding animations and explainer videos for government and corporate clients.",
      "Delivered high-impact visuals for the Ministry of International Cooperation's strategic campaigns.",
    ],
  },
  {
    period: "2019 – 2020", role: "Senior Motion Designer", company: "Seven Brands", location: "Cairo, Egypt", type: "Full-time",
    bullets: [
      "Created animated advertising concepts for Emaar Misr, Ooredoo Bahrain, Formula 1, and Bahrain Airport.",
      "Strengthened visual storytelling in campaign pitches across five regional branches.",
    ],
  },
  {
    period: "2018 – 2019", role: "Senior Motion Designer", company: "AZ Studios", location: "Cairo, Egypt", type: "Full-time",
    bullets: [
      "Led the animation team to produce branding and explainer videos for clients in Egypt, KSA, and the US.",
      "Helped expand the company's market reach through innovative motion solutions.",
    ],
  },
  {
    period: "2017 – 2018", role: "Junior Motion Designer", company: "Dawayer Studio", location: "Cairo, Egypt", type: "Full-time",
    bullets: [
      "Transitioned from illustration to motion design within 3 months by self-learning animation techniques.",
      "Produced animated content for corporate and advertising clients nationwide.",
    ],
  },
  {
    period: "2013 – 2017", role: "Freelance Illustrator / Designer", company: "Freelance", location: "Cairo, Egypt", type: "Freelance",
    bullets: [
      "Worked on print, UI design, and illustration projects while studying Management Information Systems.",
      "Built a solid foundation in design thinking and visual communication.",
    ],
  },
];

const videos = [
  // Primary selection (ordered)
  { id: "898076260", title: "Gene Showreel", tag: "Showreel" },
  { id: "1117231791", title: "Ministry of Energy", tag: "Government" },
  { id: "1181378251", title: "Tawuniya Campaign", tag: "Insurance" },
  { id: "1069451512", title: "Al-Marsa", tag: "Branding" },
  { id: "1050307377", title: "Toroun Branding", tag: "Branding" },
  { id: "1157896464", title: "Alfallujah TV", tag: "Broadcast" },
  { id: "1157896773", title: "Rebranding Royal", tag: "Branding" },
  { id: "1069451529", title: "Zaher", tag: "Branding" },
  { id: "625487879", title: "Eveready", tag: "Advertising" },
  { id: "605660833", title: "MOIC Egypt 02", tag: "Government" },
  { id: "1157896575", title: "MOIC Annual Report", tag: "Government" },
  { id: "1117246565", title: "Tawuniya Third Party", tag: "Insurance" },
  { id: "1117249195", title: "Travel Insurance", tag: "Insurance" },
  // Extended collection
  { id: "1157897306", title: "Nile Development", tag: "Real Estate" },
  { id: "1117252882", title: "Tawuniya Motor", tag: "Insurance" },
  { id: "1117253841", title: "Third Party + Addons", tag: "Insurance" },
  { id: "1050324149", title: "Flat6Labs", tag: "Startup" },
  { id: "843928917", title: "Nautic", tag: "Branding" },
  { id: "816002322", title: "Gene Showreel V01", tag: "Showreel" },
  { id: "816002745", title: "Mohamed Fawzy", tag: "Personal" },
  { id: "662836586", title: "TMF", tag: "Corporate" },
  { id: "662835332", title: "Golden Gate", tag: "Real Estate" },
  { id: "662834993", title: "L'Occitane", tag: "Beauty" },
  { id: "662832684", title: "El Asreya", tag: "Real Estate" },
  { id: "662815326", title: "EduMS Tunisia", tag: "Education" },
  { id: "662810279", title: "Mahamma Platform", tag: "Tech" },
  { id: "662597968", title: "Digital Bear", tag: "Branding" },
  { id: "662301299", title: "Comma", tag: "Branding" },
  { id: "605672483", title: "Switch Mall Jordan", tag: "Retail" },
  { id: "605668258", title: "Temet from OWest", tag: "Real Estate" },
  { id: "601873777", title: "MOIC Egypt", tag: "Government" },
  { id: "601854331", title: "The Grocer", tag: "F&B" },
  { id: "601852607", title: "Lyve", tag: "Tech" },
  { id: "601850948", title: "Hyperone", tag: "Retail" },
  { id: "601842343", title: "Ghabbour Auto", tag: "Automotive" },
  { id: "601838356", title: "Ezdehar", tag: "Real Estate" },
  { id: "601827652", title: "Bono Sandwich", tag: "F&B" },
  { id: "601822452", title: "Elgouna WSF", tag: "Sports" },
  { id: "601801444", title: "Cocacola", tag: "F&B" },
  { id: "601799709", title: "Bahrain Airport", tag: "Travel" },
  { id: "578002121", title: "Saned", tag: "Corporate" },
  { id: "471337784", title: "Nindeliver", tag: "Startup" },
  { id: "469060393", title: "Let Them Learn", tag: "Education" },
  { id: "468115223", title: "Morena", tag: "Branding" },
  { id: "467419645", title: "Logofolio Doo", tag: "Branding" },
  { id: "444296193", title: "Saudi Egyptian Dev", tag: "Real Estate" },
  { id: "440068336", title: "Fat & Thin", tag: "F&B" },
  { id: "393205199", title: "Soft Hands", tag: "Beauty" },
  { id: "390573329", title: "Cut & Fit", tag: "Fashion" },
  { id: "390560551", title: "Drink Rani", tag: "F&B" },
  { id: "383154960", title: "EG Bank", tag: "Finance" },
  { id: "355367580", title: "Clincy", tag: "Health" },
  { id: "355136913", title: "Novo Eats", tag: "F&B" },
  { id: "354693677", title: "Royal 12 Years", tag: "Branding" },
  { id: "323454034", title: "MME", tag: "Corporate" },
  { id: "305742552", title: "IOTBlue Hologram", tag: "Tech" },
];

const systems = [
  { title: "Brand System Engine", stat: "24+ artboards", desc: "Grid, logo, legal, palette — one script controls all." },
  { title: "CTA Builder", stat: "5 modes", desc: "Arabic centering, smallest-font detection." },
  { title: "Design → Motion Bridge", stat: "JSON", desc: "Structured data from Illustrator to AE." },
  { title: "Motion Translator", stat: "12 comps", desc: "Brand logic rebuilds in AE programmatically." },
  { title: "Batch Output", stat: "1-click", desc: "PNG at 1x/2x/3x with auto-naming." },
  { title: "Folder Architecture", stat: "30+ dirs", desc: "ZIP-ready hierarchy from project metadata." },
];

const sections = ["Manifesto", "About", "Experience", "Process", "Systems", "Works", "Contact"];

const enterEase: Easing = [0.25, 1, 0.5, 1];
const exitEase: Easing = [0.4, 0, 1, 1];
const skewEase: Easing = [0.16, 1, 0.3, 1];

const panelVariants = {
  enter: (d: number) => ({
    x: d > 0 ? "15%" : "-15%",
    opacity: 0,
    filter: "blur(6px) brightness(2)",
    skewX: d > 0 ? 4 : -4,
  }),
  center: {
    x: 0, opacity: 1, filter: "blur(0px) brightness(1)", skewX: 0,
    transition: { duration: 0.5, ease: enterEase, skewX: { duration: 0.3, ease: skewEase }, filter: { duration: 0.4 } },
  },
  exit: (d: number) => ({
    x: d > 0 ? "-8%" : "8%",
    opacity: 0,
    filter: "blur(4px) brightness(1.8)",
    skewX: d > 0 ? -3 : 3,
    transition: { duration: 0.3, ease: exitEase },
  }),
};
const TOTAL = sections.length;

/* ═══ EXPERIENCE PANEL ═══ */

function ExperiencePanel() {
  const [selected, setSelected] = useState(0);
  const exp = experience[selected];

  return (
    <div className="section-inner flex flex-col justify-center h-full">
      <div className="mb-6">
        <span className="overline block mb-2">Career</span>
        <h2 className="heading-lg">Where I&apos;ve <span style={{ color: accent }}>built</span>.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-4 md:gap-8 items-start">
        {/* Company list — horizontal on mobile, vertical on desktop */}
        <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
          {experience.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 md:w-full text-left px-3 md:px-4 py-2 md:py-3 rounded transition-all relative ${i === selected
                ? "bg-white/[0.06]"
                : "hover:bg-white/[0.02]"
                }`}
            >
              {i === selected && (
                <motion.div
                  layoutId="exp-indicator"
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                  style={{ background: accent }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="text-[16px] font-mono uppercase tracking-wider block mb-0.5"
                style={{ color: i === selected ? accent : "rgba(255,255,255,0.25)" }}>
                {e.period}
              </span>
              <span className={`text-[16px] font-bold uppercase tracking-wide block ${i === selected ? "text-white" : "text-white/30"
                }`}>
                {e.company}
              </span>
            </button>
          ))}
        </div>

        {/* Right — selected details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="module-card p-5 md:p-8 relative"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
              <div>
                <h3 className="text-[18px] md:text-[22px] font-black uppercase tracking-wide mb-1">{exp.company}</h3>
                <p className="text-[16px] text-white/50">{exp.role}</p>
              </div>
              <div className="md:text-right flex md:block items-center gap-2">
                <span className="text-[16px] font-mono uppercase tracking-wider px-2 py-1 border border-white/[0.06] rounded text-white/20">{exp.type}</span>
                <span className="text-[16px] font-mono text-white/15 uppercase tracking-wider md:mt-2 md:block">{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-2.5 mt-6">
              {exp.bullets.map((b, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.08, duration: 0.3 }}
                  className="flex gap-3 text-[16px] text-white/40 leading-relaxed"
                >
                  <span className="text-[8px] mt-[7px] flex-shrink-0" style={{ color: accent }}>●</span>
                  {b}
                </motion.li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="flex items-center gap-6 mt-8 pt-5 border-t border-white/[0.04]">
              <span className="text-[16px] font-mono uppercase tracking-wider" style={{ color: accent }}>{exp.period}</span>
              <span className="text-[16px] text-white/20">{exp.location}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ═══ WORKS PANEL ═══ */

function WorksPanel({ featuredVideo, setFeaturedVideo }: {
  featuredVideo: typeof videos[0];
  setFeaturedVideo: (v: typeof videos[0]) => void;
}) {
  return (
    <div className="section-inner flex flex-col justify-center h-full">
      <div className="mb-4">
        <span className="overline block mb-1">Works</span>
        <h2 className="heading-lg">The <span style={{ color: accent }}>evidence</span>.</h2>
      </div>

      {/* Use aspect-ratio trick: video col is ~700px at max-w-1000, so 700*0.5625 ≈ 394px for the list */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_260px] gap-4 md:gap-6 items-start max-w-[1000px] mx-auto w-full">
        {/* Left — main player */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredVideo.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full rounded overflow-hidden bg-[#0e0e0e]" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={`https://player.vimeo.com/video/${featuredVideo.id}?title=0&byline=0&portrait=0`}
                  allow="autoplay; fullscreen" allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="text-[16px] font-bold uppercase tracking-wide">{featuredVideo.title}</span>
              <span className="text-[16px] font-mono uppercase tracking-wider ml-3" style={{ color: accent }}>{featuredVideo.tag}</span>
            </div>
            <span className="text-[16px] font-mono text-white/20">
              {videos.findIndex(v => v.id === featuredVideo.id) + 1} / {videos.slice(0, 20).length}
            </span>
          </div>
        </div>

        {/* Mobile: thumbnail grid */}
        <div className="md:hidden grid grid-cols-4 gap-1.5">
          {videos.slice(0, 12).map((vid) => (
            <button key={vid.id} onClick={() => setFeaturedVideo(vid)}
              className={`rounded overflow-hidden transition-all ${vid.id === featuredVideo.id ? "ring-2 ring-[#00C853]" : "opacity-40 hover:opacity-80"}`}>
              <div className="aspect-video bg-[#1a1a1a]">
                <img src={`https://vumbnail.com/${vid.id}.jpg`} alt={vid.title} loading="lazy" className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.background = "#222"; }} />
              </div>
            </button>
          ))}
        </div>

        {/* Desktop: vertical list */}
        <div className="hidden md:block overflow-y-auto pr-1 space-y-1" style={{ maxHeight: "min(60vh, 420px)" }} data-scrollable>
          {videos.slice(0, 20).map((vid, i) => (
            <button key={vid.id} onClick={() => setFeaturedVideo(vid)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-all relative ${vid.id === featuredVideo.id ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"}`}>
              {vid.id === featuredVideo.id && (
                <motion.div layoutId="works-indicator" className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                  style={{ background: accent }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} />
              )}
              <div className="w-[64px] flex-shrink-0 rounded overflow-hidden bg-[#1a1a1a]">
                <div className="aspect-video">
                  <img src={`https://vumbnail.com/${vid.id}.jpg`} alt={vid.title} loading="lazy" className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.background = "#222"; }} />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <span className={`text-[16px] font-bold uppercase tracking-wide block truncate ${vid.id === featuredVideo.id ? "text-white" : "text-white/30"}`}>{vid.title}</span>
                <span className="text-[16px] font-mono uppercase tracking-wider" style={{ color: vid.id === featuredVideo.id ? accent : "rgba(255,255,255,0.15)" }}>{vid.tag}</span>
              </div>
              <span className="text-[16px] font-mono text-white/10 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══ MAIN ═══ */

export default function Home() {
  const [panel, setPanel] = useState(0);
  const [dir, setDir] = useState(1);
  const [featuredVideo, setFeaturedVideo] = useState(videos[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollTime = useRef(0);

  const go = useCallback((target: number) => {
    if (target < 0 || target >= TOTAL || target === panel) return;
    setDir(target > panel ? 1 : -1);
    setPanel(target);
    setMenuOpen(false);
  }, [panel]);

  const next = useCallback(() => { if (panel < TOTAL - 1) go(panel + 1); }, [go, panel]);
  const prev = useCallback(() => { if (panel > 0) go(panel - 1); }, [go, panel]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      const scrollable = target.closest("[data-scrollable]");
      if (scrollable) {
        const el = scrollable as HTMLElement;
        const isVertical = el.scrollHeight > el.clientHeight;
        const isHorizontal = el.scrollWidth > el.clientWidth;
        if (isVertical) {
          const atTop = el.scrollTop <= 0 && e.deltaY < 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4 && e.deltaY > 0;
          if (!atTop && !atBottom) return;
        }
        if (isHorizontal && Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      }
      e.preventDefault();
      const absDelta = Math.abs(e.deltaY);
      if (absDelta < 15) return;
      const now = Date.now();
      if (now - lastScrollTime.current < 600) return;
      lastScrollTime.current = now;
      if (e.deltaY > 0) next(); else if (e.deltaY < 0) prev();
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      else if (e.key === "Escape") setMenuOpen(false);
    };
    let touchStartX = 0, touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; };
    const handleTouchEnd = (e: TouchEvent) => {
      const dX = touchStartX - e.changedTouches[0].clientX;
      const dY = touchStartY - e.changedTouches[0].clientY;
      if (Math.max(Math.abs(dX), Math.abs(dY)) < 60) return;
      if (Math.abs(dX) > Math.abs(dY)) { dX > 0 ? next() : prev(); }
      else { dY > 0 ? next() : prev(); }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  const variants = panelVariants;

  return (
    <div className="h-dvh w-full overflow-hidden bg-[#0a0a0c] relative">


      {/* ═══ BG — Full on desktop, lightweight on mobile ═══ */}
      {/* Mobile: static CSS gradient (no SVG animation) */}
      <div className="md:hidden fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(0,200,83,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,200,83,0.06) 0%, transparent 50%), #0a0a0c",
        }}
      />
      {/* Desktop: full animated background */}
      <div className="hidden md:block fixed inset-0 z-0 pointer-events-none">
        <EtheralShadow
          color="rgba(0, 200, 83, 0.15)"
          animation={{ scale: 80, speed: 90 }}
          noise={{ opacity: 0.6, scale: 1 }}
          sizing="fill"
        />
      </div>

      {/* ═══ SIDE MENU BAR (desktop) / BOTTOM BAR (mobile) ═══ */}
      {/* Desktop sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-[56px] z-[100] bg-black/50 backdrop-blur-md border-r border-white/[0.04] flex-col items-center justify-between py-6">
        <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]">
          <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
        <div className="flex flex-col gap-3">
          {sections.map((_, i) => (
            <button key={i} onClick={() => go(i)} className="group relative flex items-center justify-center">
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${i === panel ? "bg-[#00C853] scale-125" : "bg-white/20 hover:bg-white/40"}`} />
              {i === panel && (
                <motion.div layoutId="dot-ring" className="absolute w-4 h-4 rounded-full border border-[#00C853]/40"
                  transition={{ duration: 0.3, ease }} />
              )}
            </button>
          ))}
        </div>
        <span className="text-[16px] font-mono text-white/30">{String(panel + 1).padStart(2, "0")}/{String(TOTAL).padStart(2, "0")}</span>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-[#0a0a0c]/95 border-t border-white/[0.04] flex items-center justify-between px-4 py-3">
        <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8 flex flex-col items-center justify-center gap-[4px]">
          <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
        </button>
        <div className="flex gap-2">
          {sections.map((_, i) => (
            <button key={i} onClick={() => go(i)}>
              <div className={`w-2 h-2 rounded-full transition-all ${i === panel ? "bg-[#00C853] scale-125" : "bg-white/20"}`} />
            </button>
          ))}
        </div>
        <span className="text-[16px] font-mono text-white/30">{String(panel + 1).padStart(2, "0")}/{String(TOTAL).padStart(2, "0")}</span>
      </div>

      {/* ═══ MENU PANEL ═══ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[95] bg-black/60" onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ duration: 0.4, ease }}
              className="fixed left-0 md:left-[56px] top-0 bottom-0 w-full md:w-[260px] z-[96] bg-[#0a0a0c]/95 md:bg-black/70 md:backdrop-blur-xl md:border-r border-white/[0.04] flex flex-col justify-center px-8"
            >
              <span className="text-[16px] font-mono text-white/20 uppercase tracking-[0.3em] mb-8">Index</span>
              {sections.map((name, i) => (
                <button key={name} onClick={() => go(i)}
                  className={`flex items-center gap-4 py-3.5 text-left w-full border-b border-white/[0.04] transition-all ${i === panel ? "opacity-100" : "opacity-30 hover:opacity-60"
                    }`}>
                  <span className="text-[16px] font-mono w-8" style={{ color: i === panel ? accent : "rgba(255,255,255,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-bold uppercase tracking-wider text-white">{name}</span>
                  {i === panel && <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: accent }} />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══ PROGRESS ═══ */}
      <div className="hidden md:block fixed bottom-0 left-[56px] right-0 h-[3px] bg-white/[0.04] z-[50]">
        <div className="h-full transition-all duration-500" style={{ width: `${((panel + 1) / TOTAL) * 100}%`, background: accent }} />
      </div>

      {/* ═══ TOP-RIGHT INFO ═══ */}
      <div className="hidden md:block fixed top-4 right-6 z-[50] pointer-events-none">
        <span className="text-[7rem] font-black leading-none text-white/[0.04]">{String(panel + 1).padStart(2, "0")}</span>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div
        className="absolute z-[5] top-0 bottom-[52px] md:bottom-[3px] left-0 md:left-[56px] right-0"
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div key={panel} custom={dir} variants={variants} initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} className="absolute inset-0 flex items-center overflow-x-hidden overflow-y-auto" data-scrollable>

            {/* 01 MANIFESTO */}
            {panel === 0 && (
              <div className="w-full h-full flex flex-col md:flex-row">
                {/* Mobile: photo at top */}
                <div className="md:hidden w-full h-[40%] relative flex items-center justify-center overflow-hidden">
                  <img src="/photo.png" alt="Abdelhamid Zainhom" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-6 md:pl-[clamp(40px,5vw,100px)] md:pr-8 -mt-10 md:mt-0 py-6 md:py-10 relative z-10">
                  <span className="overline block mb-3">Abdelhamid Zainhom</span>
                  <h1 className="heading-hero mb-4">
                    I don&apos;t just<br />design or<br />animate.<br />
                    I build <span style={{ color: accent }}>creative</span><br />
                    <span style={{ color: accent }}>systems</span> that<br />move brands<br />forward.
                  </h1>
                  <p className="body-text mb-6 max-w-md hidden md:block">
                    Fast turnaround. High quality. 13+ years turning strategic
                    concepts into scalable visual systems — from the first sketch
                    to the final automated delivery.
                  </p>
                  <button className="btn-primary" onClick={() => go(5)}>View Works</button>
                </div>
                {/* Desktop: photo on right */}
                <div className="w-[38%] h-full relative hidden lg:block">
                  <img src="/photo.png" alt="Abdelhamid Zainhom" className="absolute inset-0 w-full h-full object-cover object-top" />
                  <div className="absolute top-0 left-0 w-24 h-24 bg-[#0a0a0c]" />
                  <div className="absolute top-0 left-24 w-16 h-16 bg-[#0a0a0c]/60" />
                </div>
              </div>
            )}

            {/* 02 ABOUT */}
            {panel === 1 && (
              <div className="section-inner">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
                  <div>
                    <span className="overline block mb-4">About</span>
                    <h2 className="heading-lg mb-5">Over 13 years<br />of visual<br /><span style={{ color: accent }}>storytelling</span>.</h2>
                    <p className="body-text">Art direction and motion expertise to create impactful brand identities, animated campaigns, and story-driven content across Saudi Arabia, the UK, Egypt, and Turkey and more.</p>
                  </div>
                  <div className="space-y-4 pt-2">
                    {[
                      { l: "Years", v: "13+" },
                      { l: "Countries", v: "Saudi Arabia · UK · Egypt · Turkey · UAE · Qatar · USA · Morocco" },
                      { l: "Industries", v: "Insurance · Media · Real Estate · Government · F&B · Tech · Startup · Corporate · Automotive · Energy · Telecom · Fashion · Education · Health · Beauty · Jewelry · Luxury · Sports · Entertainment · Travel · Hospitality · Retail · Finance · Banking" },
                      { l: "Languages", v: "Arabic (Native) · English (Advanced)" },
                      { l: "Currently", v: "Tawuniya Insurance, Riyadh" },
                    ].map((f) => (
                      <div key={f.l} className="flex justify-between border-b border-white/[0.06] pb-3">
                        <span className="label-mono flex-shrink-0">{f.l}</span>
                        <span className="text-[16px] text-white/60 text-right ml-4 line-clamp-2">{f.v}</span>
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["Art Direction", "Motion Design", "Branding", "3D Animation", "Automation"].map((s) => (
                        <span key={s} className="px-2.5 py-1 text-[16px] font-mono uppercase tracking-wider border border-white/[0.08] text-white/35">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 03 EXPERIENCE — INTERACTIVE CARD SELECTOR */}
            {panel === 2 && <ExperiencePanel />}

            {/* 04 PROCESS */}
            {panel === 3 && (
              <div className="section-inner">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                  <div>
                    <span className="overline block mb-3">Process</span>
                    <h2 className="heading-lg mb-5">From <span style={{ color: accent }}>idea</span><br />to execution.</h2>
                    <p className="body-text">Every project moves through a disciplined process that turns concepts into systems.</p>
                  </div>
                  <div>
                    {["Understand", "Sketch", "Design", "Adapt", "Animate", "Systemize", "Deliver"].map((step, i) => (
                      <div key={step} className="flex items-center gap-4 py-3 border-b border-white/[0.06] group hover:bg-white/[0.01] px-2 -mx-2 transition-colors">
                        <span className="text-[16px] font-mono text-white/15 w-5 group-hover:text-[#00C853] transition-colors">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[16px] font-bold uppercase tracking-wide">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 05 SYSTEMS */}
            {panel === 4 && (
              <div className="section-inner">
                <span className="overline block mb-3">Automation</span>
                <h2 className="heading-lg mb-2">I build <span style={{ color: accent }}>systems</span>.</h2>
                <p className="body-text mb-6">Scripting within Adobe apps — efficiency boost up to 60–70%.</p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {systems.map((sys, i) => (
                    <div key={sys.title} className="module-card">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[16px] font-mono text-white/20">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[16px] font-mono uppercase tracking-wider text-white/20 px-1.5 py-0.5 bg-white/[0.06]">{sys.stat}</span>
                      </div>
                      <h3 className="text-[16px] font-bold uppercase tracking-wide mb-1">{sys.title}</h3>
                      <p className="text-[16px] text-white/30 leading-relaxed">{sys.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 06 WORKS — INTERACTIVE SELECTOR */}
            {panel === 5 && <WorksPanel featuredVideo={featuredVideo} setFeaturedVideo={setFeaturedVideo} />}

            {/* 07 CONTACT */}
            {panel === 6 && (
              <div className="section-inner">
                <span className="overline block mb-4">Get in Touch</span>
                <h2 className="heading-hero mb-8">Let&apos;s build<br />something<br /><span style={{ color: accent }}>remarkable</span>.</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-5">
                    <span className="label-mono w-16">Email</span>
                    <a href="mailto:Abdelhamid.zainhom@gmail.com" className="text-[16px] text-white/60 hover:text-[#00C853] transition-colors">Abdelhamid.zainhom@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="label-mono w-16">Phone</span>
                    <a href="tel:0563787025" className="text-[16px] text-white/60 hover:text-[#00C853] transition-colors">0563787025</a>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="label-mono w-16">Location</span>
                    <span className="text-[16px] text-white/60">Riyadh — Saudi Arabia</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <a href="https://vimeo.com/xien" target="_blank" rel="noopener noreferrer" className="btn-primary">Vimeo</a>
                  <a href="https://www.behance.net/Xien/" target="_blank" rel="noopener noreferrer" className="btn-outline">Behance</a>
                  <a href="https://www.linkedin.com/in/xien/" target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
                  <a href="/cv.pdf" download className="btn-outline">Download CV</a>
                </div>
                <p className="mt-10 text-[16px] font-mono text-white/15 uppercase tracking-wider">&copy; 2026 Abdelhamid Zainhom</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
