"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Easing } from "framer-motion";
import { EtheralShadow } from "@/components/ui/etheral-shadow";

const ease: Easing = [0.16, 1, 0.3, 1];
const accent = "#00C853";

/* ═══ HORIZONTAL SCROLL HINT ═══ */
function HScrollHint({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check, { passive: true });
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", check); ro.disconnect(); };
  }, [check]);

  return (
    <div className={`relative ${className}`}>
      {/* Left fade */}
      <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none transition-opacity duration-300 md:hidden ${canScrollLeft ? "opacity-100" : "opacity-0"}`} />
      {/* Right fade + arrow */}
      <div className={`absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none transition-opacity duration-300 md:hidden flex items-center justify-end pr-1 ${canScrollRight ? "opacity-100" : "opacity-0"}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><path d="M9 18l6-6-6-6"/></svg>
      </div>
      <div ref={ref} className="flex gap-1 overflow-x-auto pb-2 md:pb-0 md:flex-col md:overflow-x-visible scrollbar-hide" data-scrollable>
        {children}
      </div>
    </div>
  );
}

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
  {
    title: "60–70% Faster Production",
    impact: "60–70%",
    impactLabel: "time saved per campaign",
    before: "Every campaign restarts from scratch. Your team manually rebuilds the same assets in different sizes, formats, and languages. A full production week for what should take a day. Senior designers spend 80% of their time on mechanical tasks instead of creative work. The bottleneck is never the idea — it's the production.",
    after: "One source file generates every variant your team needs — automatically. A campaign that took a full production week now ships in one to two days. Your designers reclaim their time for creative thinking, strategy, and innovation. Production becomes the fastest part of the pipeline instead of the slowest. The system pays for itself in the first sprint.",
    for: "Marketing & Brand Teams",
  },
  {
    title: "Platform-Ready Templates",
    impact: "50+",
    impactLabel: "platform formats",
    before: "Every new campaign means guessing dimensions, safe zones, and platform specs. Your designer Googles \"Instagram Reels size\" for the hundredth time. Ads get rejected because text lands outside the safe area. Videos get cropped awkwardly. Every platform — Meta, TikTok, Google Display, LinkedIn, Snapchat, X — has different rules, and your team re-learns them every single time.",
    after: "A complete template library covering every major platform — social media posts, stories, reels, display ads, website banners, video formats — all pre-built with accurate safe zones, bleed areas, and platform-specific constraints baked in. Your team opens a template and starts designing immediately. No rejected ads, no cropped content, no wasted production cycles. Works for both static design and motion templates, so your video content ships just as fast as your graphics.",
    for: "Ads & Social Media Teams",
  },
  {
    title: "1-Click Multi-Format Export",
    impact: "1-click",
    impactLabel: "all formats delivered",
    before: "Social needs square and vertical. The website needs 16:9. Display ads need twelve different sizes. The presentation needs light backgrounds. Your team manually exports, resizes, renames, and reformats for every single channel — every single campaign. Hours of tedious work that adds zero creative value.",
    after: "Every deliverable — social, web, display, presentation, video — generated from a single source of truth in one click. Every format pre-configured with the correct specs, naming conventions, and quality settings. Your digital and social teams receive final, publish-ready assets instead of raw files they need to process. This alone saves hours of back-and-forth every single campaign cycle and eliminates the human errors that come with manual resizing.",
    for: "Digital & Social Teams",
  },
  {
    title: "AI Language Engine",
    impact: "Auto",
    impactLabel: "AR/EN detection",
    before: "Your team produces Arabic and English versions separately. Someone forgets to flip the layout. The Arabic text alignment is wrong. The English version uses a different visual hierarchy. Two designers working on the same campaign in parallel, producing inconsistent results. Every bilingual campaign takes twice the time and introduces twice the errors.",
    after: "An intelligent system that automatically detects whether content is Arabic or English and applies the correct rules — right-to-left layout, appropriate font pairing, proper text alignment, mirrored compositions. One designer handles both languages from a single file. The system ensures visual parity between versions without manual intervention. Your regional campaigns launch simultaneously in both languages, with guaranteed consistency that no manual process can match.",
    for: "Regional & Bilingual Teams",
  },
  {
    title: "Smart Production Tracker",
    impact: "Real-time",
    impactLabel: "project visibility",
    before: "Project status lives in someone's head or scattered across chat messages. Deadlines slip because no one saw the bottleneck forming. The manager spends hours every week chasing updates. When something is late, you find out after the deadline — not before. There's no clear picture of how many tasks are in progress, what's blocked, or which projects are at risk.",
    after: "A fully automated production sheet that tracks every project in real time. It calculates remaining days, sends daily reminders to the team, flags delays before they become crises, and generates reports automatically. Your manager opens one dashboard and sees everything — what's on track, what's at risk, what's overdue. Delay patterns are analyzed so you can fix recurring bottlenecks instead of firefighting the same problems every sprint. The team stays aligned without a single status meeting.",
    for: "Project Management & Leadership",
  },
  {
    title: "Zero-Error Handoff",
    impact: "0",
    impactLabel: "revision loops",
    before: "The designer finishes a layout and hands it to the animator. Three rounds of revisions follow because the animation doesn't match the original intent. Colors are slightly off, spacing is different, the hierarchy got lost in translation. Your creative operations team spends more time fixing handoff errors than actually creating new work.",
    after: "Design decisions flow directly into animation — every color, every spacing value, every typographic choice transfers with zero loss. What your designer approves is exactly what gets animated, frame by frame. No more revision ping-pong, no more \"that's not what I meant\" conversations. Your creative team moves at full speed because the handoff itself is invisible.",
    for: "Creative Operations",
  },
  {
    title: "AI File & Delivery System",
    impact: "100%",
    impactLabel: "organized always",
    before: "Files live in personal drives, on random desktops, buried in email threads. When someone leaves the team, their projects disappear with them. Naming conventions are different for every team member. Finding last quarter's campaign assets means searching through five folders and three chat threads. Client delivery is a manual zip-and-pray process where files inevitably go missing.",
    after: "An AI-powered system that enforces file organization across the entire team automatically. Every asset is named, versioned, and stored in the right location without anyone thinking about it. When a project is ready for delivery, the system packages everything into a structured, client-ready format — organized by asset type, platform, and language. New team members see every project laid out clearly from day one. Nothing gets lost, nothing gets misfiled, and client handoffs happen in minutes instead of hours.",
    for: "Team Operations & Client Delivery",
  },
  {
    title: "Brand Consistency Engine",
    impact: "100%",
    impactLabel: "on-brand guarantee",
    before: "Your brand is touched by multiple designers, agencies, freelancers, and departments. Each one interprets the brand guidelines slightly differently. Logo spacing varies. Colors drift. Typography gets substituted. Legal disclaimers go missing. These small inconsistencies accumulate until your brand looks different on every channel — undermining the trust and recognition you've spent years building.",
    after: "Every brand rule — colors, spacing, typography, logo placement, legal requirements — is enforced automatically at the system level. It doesn't matter if a junior designer, a senior art director, or an external agency is producing the asset. The output is guaranteed to be 100% brand-compliant every single time. Your brand governance team stops policing deliverables manually and starts focusing on brand strategy instead. The system becomes your brand's immune system — protecting consistency at scale.",
    for: "Brand Governance & Quality",
  },
];

const processSteps = [
  {
    name: "Understand",
    headline: "Before a single pixel — I study your business.",
    desc: "I don't start with design. I start with your goals, your audience, and the problem you're solving. I study your competitors, analyze what's working in your industry, and identify where your brand has gaps. This phase determines everything that follows — because a beautiful design built on wrong assumptions is still a failure. By the end, I have a clear strategic brief that every creative decision will be measured against.",
    outcome: "Strategic brief & competitive analysis",
  },
  {
    name: "Sketch",
    headline: "Rapid concepts — no time wasted on wrong directions.",
    desc: "Instead of jumping into Illustrator and spending days on a polished concept that might miss the mark, I sketch 10–15 rough directions in hours. These aren't pretty — they're strategic. Each one explores a different angle, a different tone, a different visual approach. You see all the options early and choose the direction before any real production time is invested. This saves weeks of revision later because alignment happens at the cheapest possible stage.",
    outcome: "10–15 concept directions in hours, not days",
  },
  {
    name: "Design",
    headline: "Every design is built as a system — not a one-off.",
    desc: "When I design, I'm not creating a single poster or a single social post. I'm building a visual system that can scale across 50+ formats, two languages, and multiple campaigns. Every color, every spacing rule, every typography choice is structured so it can be replicated automatically. This means the first asset takes full creative effort — but the next 100 assets take almost zero time because the system generates them.",
    outcome: "Scalable design system, not one-time artwork",
  },
  {
    name: "Adapt",
    headline: "One design becomes every format your team needs.",
    desc: "This is where most agencies burn time — manually resizing and reformatting for every channel. I've eliminated this entirely. The design system automatically adapts to Instagram stories, Facebook ads, LinkedIn banners, Google Display networks, website headers, presentation slides, and print formats. Each adaptation respects platform-specific safe zones and constraints. Your team receives publish-ready files for every channel, not one master file they need to recreate 20 times.",
    outcome: "50+ platform-ready formats from one source",
  },
  {
    name: "Animate",
    headline: "Motion that follows the same system — zero deviation.",
    desc: "Animation isn't a separate track. It's a direct extension of the design system. Every color, timing, and composition choice flows from the approved design into motion automatically. The animator doesn't reinterpret the design — the system transfers it. This eliminates the revision cycles that plague most design-to-motion handoffs. What you approved in the design phase is exactly what you see in motion — frame by frame, pixel by pixel.",
    outcome: "Design-to-motion with zero revision loops",
  },
  {
    name: "Systemize",
    headline: "Everything becomes repeatable — your team inherits the system.",
    desc: "After delivery, I don't leave you with files. I leave you with a production system. Templates, automation scripts, folder structures, naming conventions, export presets — everything your team needs to produce the next campaign without me. A junior designer can maintain the output quality of a senior art director because the system enforces the rules. Your creative operations become predictable, scalable, and independent of any single person.",
    outcome: "Self-sustaining production system for your team",
  },
  {
    name: "Deliver",
    headline: "Organized, labeled, ready — not a folder dump.",
    desc: "Delivery isn't a zip file thrown over email. Every asset is organized by platform, language, and format. Naming conventions follow your team's structure. Version history is preserved. The delivery package includes everything needed to go live immediately — no sorting, no renaming, no guessing which file is final. Your project manager opens the package and knows exactly where everything is. Client-ready in minutes, not hours of archaeology.",
    outcome: "Client-ready delivery package in minutes",
  },
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
        <HScrollHint>
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
              <span className="text-[13px] md:text-[16px] font-mono uppercase tracking-wider block mb-0.5"
                style={{ color: i === selected ? accent : "rgba(255,255,255,0.25)" }}>
                {e.period}
              </span>
              <span className={`text-[13px] md:text-[16px] font-bold uppercase tracking-wide block ${i === selected ? "text-white" : "text-white/30"
                }`}>
                {e.company}
              </span>
            </button>
          ))}
        </HScrollHint>

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
                <p className="text-[13px] md:text-[16px] text-white/50">{exp.role}</p>
              </div>
              <div className="md:text-right flex md:block items-center gap-2">
                <span className="text-[13px] md:text-[16px] font-mono uppercase tracking-wider px-2 py-1 border border-white/[0.06] rounded text-white/20">{exp.type}</span>
                <span className="text-[13px] md:text-[16px] font-mono text-white/15 uppercase tracking-wider md:mt-2 md:block">{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-2.5 mt-6">
              {exp.bullets.map((b, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.08, duration: 0.3 }}
                  className="flex gap-3 text-[13px] md:text-[16px] text-white/40 leading-relaxed"
                >
                  <span className="text-[8px] mt-[7px] flex-shrink-0" style={{ color: accent }}>●</span>
                  {b}
                </motion.li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="flex items-center gap-6 mt-8 pt-5 border-t border-white/[0.04]">
              <span className="text-[13px] md:text-[16px] font-mono uppercase tracking-wider" style={{ color: accent }}>{exp.period}</span>
              <span className="text-[13px] md:text-[16px] text-white/20">{exp.location}</span>
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
              <span className="text-[13px] md:text-[16px] font-bold uppercase tracking-wide">{featuredVideo.title}</span>
              <span className="text-[13px] md:text-[16px] font-mono uppercase tracking-wider ml-3" style={{ color: accent }}>{featuredVideo.tag}</span>
            </div>
            <span className="text-[13px] md:text-[16px] font-mono text-white/20">
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
                <span className={`text-[13px] md:text-[16px] font-bold uppercase tracking-wide block truncate ${vid.id === featuredVideo.id ? "text-white" : "text-white/30"}`}>{vid.title}</span>
                <span className="text-[13px] md:text-[16px] font-mono uppercase tracking-wider" style={{ color: vid.id === featuredVideo.id ? accent : "rgba(255,255,255,0.15)" }}>{vid.tag}</span>
              </div>
              <span className="text-[13px] md:text-[16px] font-mono text-white/10 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══ PROCESS PANEL ═══ */

function ProcessPanel() {
  const [selected, setSelected] = useState(0);
  const step = processSteps[selected];

  return (
    <div className="section-inner flex flex-col justify-center h-full">
      <div className="mb-6">
        <span className="overline block mb-2">Process</span>
        <h2 className="heading-lg">From <span style={{ color: accent }}>idea</span> to execution.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-4 md:gap-8 items-start">
        {/* Left — step selector */}
        <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0" data-scrollable>
          {processSteps.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 md:w-full text-left flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded transition-all relative ${i === selected
                ? "bg-white/[0.06]"
                : "hover:bg-white/[0.02]"
                }`}
            >
              {i === selected && (
                <motion.div
                  layoutId="proc-indicator"
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                  style={{ background: accent }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="text-[13px] md:text-[16px] font-mono"
                style={{ color: i === selected ? accent : "rgba(255,255,255,0.15)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`text-[13px] md:text-[16px] font-bold uppercase tracking-wide ${i === selected ? "text-white" : "text-white/30"}`}>
                {s.name}
              </span>
            </button>
          ))}
        </div>

        {/* Right — selected step details */}
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
                <h3 className="text-[18px] md:text-[22px] font-black uppercase tracking-wide mb-1">{step.name}</h3>
                <p className="text-[13px] md:text-[16px] text-white/50">{step.headline}</p>
              </div>
              <span className="text-[13px] md:text-[16px] font-mono uppercase tracking-wider px-2 py-1 border border-white/[0.06] rounded text-white/20">Step {String(selected + 1).padStart(2, "0")}</span>
            </div>

            <p className="text-[13px] md:text-[16px] text-white/40 leading-relaxed mt-6">{step.desc}</p>

            {/* Outcome */}
            <div className="flex items-center gap-6 mt-8 pt-5 border-t border-white/[0.04]">
              <span className="text-[13px] md:text-[16px] font-mono uppercase tracking-wider" style={{ color: accent }}>{step.outcome}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ═══ SYSTEMS PANEL ═══ */

function SystemsPanel() {
  const [selected, setSelected] = useState(0);
  const sys = systems[selected];

  return (
    <div className="section-inner flex flex-col justify-start md:justify-center h-full pt-16 pb-4 md:py-6">
      <div className="mb-3 md:mb-6 flex-shrink-0">
        <span className="overline block mb-1 md:mb-2">What You Get</span>
        <h2 className="heading-lg">I build <span style={{ color: accent }}>systems</span><br className="hidden md:block" /> that save your team time.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-3 md:gap-6 items-start flex-1 min-h-0">
        {/* Left — system selector */}
        <HScrollHint className="flex-shrink-0">
          {systems.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 md:w-full text-left px-3 md:px-4 py-1.5 md:py-2.5 rounded transition-all relative ${i === selected
                ? "bg-white/[0.06]"
                : "hover:bg-white/[0.02]"
                }`}
            >
              {i === selected && (
                <motion.div
                  layoutId="sys-indicator"
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                  style={{ background: accent }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="text-[10px] md:text-[12px] font-mono uppercase tracking-wider block mb-0.5"
                style={{ color: i === selected ? accent : "rgba(255,255,255,0.2)" }}>
                {s.for}
              </span>
              <span className={`text-[11px] md:text-[14px] font-bold uppercase tracking-wide block ${i === selected ? "text-white" : "text-white/30"}`}>
                {s.title}
              </span>
            </button>
          ))}
        </HScrollHint>

        {/* Right — selected system details */}
        <div className="overflow-y-auto min-h-0 flex-1 md:flex-initial" data-scrollable>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="module-card p-4 md:p-8 relative"
            >
              {/* Impact metric — hero number */}
              <div className="flex items-baseline gap-3 mb-3 md:mb-5">
                <span className="text-[2rem] md:text-[3.5rem] font-black leading-none" style={{ color: accent }}>{sys.impact}</span>
                <span className="text-[12px] md:text-[16px] font-mono uppercase tracking-wider text-white/40">{sys.impactLabel}</span>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="text-[11px] md:text-[14px] font-bold uppercase tracking-wider text-white/30">Without system</span>
                  </div>
                  <p className="text-[12px] md:text-[15px] text-white/30 leading-relaxed">{sys.before}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
                    <span className="text-[11px] md:text-[14px] font-bold uppercase tracking-wider" style={{ color: accent }}>With system</span>
                  </div>
                  <p className="text-[12px] md:text-[15px] text-white/60 leading-relaxed">{sys.after}</p>
                </div>
              </div>

              {/* Footer tag */}
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/[0.04]">
                <span className="text-[10px] md:text-[13px] font-mono uppercase tracking-wider px-2 py-1 rounded" style={{ color: accent, background: "rgba(0,200,83,0.08)" }}>{sys.for}</span>
                <span className="text-[11px] md:text-[14px] font-bold uppercase tracking-wide text-white/50">{sys.title}</span>
              </div>
            </motion.div>
          </AnimatePresence>
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
    let touchStartX = 0, touchStartY = 0, touchStartTarget: EventTarget | null = null;
    const handleTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; touchStartTarget = e.target; };
    const handleTouchEnd = (e: TouchEvent) => {
      const dX = touchStartX - e.changedTouches[0].clientX;
      const dY = touchStartY - e.changedTouches[0].clientY;
      if (Math.max(Math.abs(dX), Math.abs(dY)) < 60) return;
      // Check if swipe started inside a scrollable container
      const scrollable = (touchStartTarget as HTMLElement)?.closest?.("[data-scrollable]");
      if (scrollable) {
        const el = scrollable as HTMLElement;
        const isHorizontal = el.scrollWidth > el.clientWidth;
        const isVertical = el.scrollHeight > el.clientHeight;
        if (isHorizontal && Math.abs(dX) > Math.abs(dY)) {
          const atLeft = el.scrollLeft <= 0 && dX < 0;
          const atRight = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 && dX > 0;
          if (!atLeft && !atRight) return;
        }
        if (isVertical && Math.abs(dY) > Math.abs(dX)) {
          const atTop = el.scrollTop <= 0 && dY < 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4 && dY > 0;
          if (!atTop && !atBottom) return;
        }
      }
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
        <span className="text-[13px] md:text-[16px] font-mono text-white/30">{String(panel + 1).padStart(2, "0")}/{String(TOTAL).padStart(2, "0")}</span>
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
        <span className="text-[13px] md:text-[16px] font-mono text-white/30">{String(panel + 1).padStart(2, "0")}/{String(TOTAL).padStart(2, "0")}</span>
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
              <span className="text-[13px] md:text-[16px] font-mono text-white/20 uppercase tracking-[0.3em] mb-8">Index</span>
              {sections.map((name, i) => (
                <button key={name} onClick={() => go(i)}
                  className={`flex items-center gap-4 py-3.5 text-left w-full border-b border-white/[0.04] transition-all ${i === panel ? "opacity-100" : "opacity-30 hover:opacity-60"
                    }`}>
                  <span className="text-[13px] md:text-[16px] font-mono w-8" style={{ color: i === panel ? accent : "rgba(255,255,255,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] md:text-[16px] font-bold uppercase tracking-wider text-white">{name}</span>
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
                        <span className="text-[13px] md:text-[16px] text-white/60 text-right ml-4 line-clamp-2">{f.v}</span>
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["Art Direction", "Motion Design", "Branding", "3D Animation", "Automation"].map((s) => (
                        <span key={s} className="px-2.5 py-1 text-[13px] md:text-[16px] font-mono uppercase tracking-wider border border-white/[0.08] text-white/35">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 03 EXPERIENCE — INTERACTIVE CARD SELECTOR */}
            {panel === 2 && <ExperiencePanel />}

            {/* 04 PROCESS — INTERACTIVE SELECTOR */}
            {panel === 3 && <ProcessPanel />}

            {/* 05 SYSTEMS — INTERACTIVE SELECTOR */}
            {panel === 4 && <SystemsPanel />}

            {/* 06 WORKS — INTERACTIVE SELECTOR */}
            {panel === 5 && <WorksPanel featuredVideo={featuredVideo} setFeaturedVideo={setFeaturedVideo} />}

            {/* 07 CONTACT */}
            {panel === 6 && (
              <div className="section-inner">
                <span className="overline block mb-4">Get in Touch</span>
                <h2 className="heading-hero mb-8">Let&apos;s build<br />something<br /><span style={{ color: accent }}>remarkable</span>.</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-5">
                    <span className="label-mono w-28 flex-shrink-0">Email</span>
                    <a href="mailto:Abdelhamid.zainhom@gmail.com" className="text-[13px] md:text-[16px] text-white/60 hover:text-[#00C853] transition-colors">Abdelhamid.zainhom@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="label-mono w-28 flex-shrink-0">Phone</span>
                    <a href="tel:0563787025" className="text-[13px] md:text-[16px] text-white/60 hover:text-[#00C853] transition-colors">0563787025</a>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="label-mono w-28 flex-shrink-0">Location</span>
                    <span className="text-[13px] md:text-[16px] text-white/60">Riyadh — Saudi Arabia</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <a href="https://vimeo.com/xien" target="_blank" rel="noopener noreferrer" className="btn-primary">Vimeo</a>
                  <a href="https://www.behance.net/Xien/" target="_blank" rel="noopener noreferrer" className="btn-outline">Behance</a>
                  <a href="https://www.linkedin.com/in/xien/" target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
                  <a href="/cv.pdf" download className="btn-outline">Download CV</a>
                </div>
                <p className="mt-10 text-[13px] md:text-[16px] font-mono text-white/15 uppercase tracking-wider">&copy; 2026 Abdelhamid Zainhom</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
