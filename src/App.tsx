/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { ReactNode } from "react";
import { 
  Terminal, 
  Camera, 
  AtSign, 
  Hexagon, 
  Activity, 
  Moon,
  Github,
  ChevronRight,
  Search,
  UserCircle
} from "lucide-react";

// --- Types ---

type View = "landing" | "gallery";

/**
 * Core features/artifacts displayed on the landing page.
 */
const features = [
  {
    icon: <Hexagon className="w-8 h-8 text-primary/40" />,
    title: "Minimalism",
    description: "Reduction as a creative discipline. Removing the noise to amplify the signal.",
    bg: "bg-surface-container-low"
  },
  {
    icon: <Activity className="w-8 h-8 text-primary/40" />,
    title: "Motion",
    description: "Fluid interactions that respect user intent and cognitive load.",
    bg: "bg-surface-container-lowest border border-outline-variant"
  },
  {
    icon: <Moon className="w-8 h-8 text-primary/40" />,
    title: "Contrast",
    description: "Leveraging obsidian depths and metallic highlights for focus.",
    bg: "bg-surface-container-low"
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState<View>("landing");

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary text-on-surface">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => handleNavigate("landing")}
            className="font-display text-2xl tracking-tighter text-primary cursor-pointer"
          >
            THE MONOLITH
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-10 font-headline text-sm tracking-[0.1em] uppercase">
            <a 
              onClick={(e) => { e.preventDefault(); handleNavigate("landing"); }}
              className={`cursor-pointer transition-colors duration-300 ${currentView === "landing" ? "text-primary border-b border-primary/30 pb-1" : "text-primary/50 hover:text-primary"}`}
              href="#"
            >
              Archive
            </a>
            <a 
              onClick={(e) => { e.preventDefault(); handleNavigate("gallery"); }}
              className={`cursor-pointer transition-colors duration-300 ${currentView === "gallery" ? "text-primary border-b border-primary/30 pb-1" : "text-primary/50 hover:text-primary"}`}
              href="#"
            >
              Gallery
            </a>
            <a className="text-primary/50 hover:text-primary transition-colors duration-300 cursor-pointer" href="#">Social</a>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button className="font-headline text-sm tracking-[0.1em] uppercase text-primary border border-primary/20 px-6 py-2 rounded-full hover:bg-white/10 transition-all active:scale-95 cursor-pointer">
              Connect
            </button>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {currentView === "landing" ? (
          <LandingView onNavigateToGallery={() => handleNavigate("gallery")} />
        ) : (
          <GalleryView />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full py-20 px-12 bg-surface-container-lowest mt-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full max-w-screen-2xl mx-auto">
          <div 
            onClick={() => handleNavigate("landing")}
            className="font-display text-primary text-sm font-bold uppercase tracking-widest cursor-pointer"
          >
            THE MONOLITH
          </div>
          
          <div className="flex gap-10 font-headline text-[10px] tracking-widest uppercase">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#" className="text-primary/30 hover:text-primary transition-all">
                {item}
              </a>
            ))}
          </div>

          <div className="font-headline text-[10px] tracking-widest uppercase text-primary/30">
            © 2024 THE MONOLITH. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}

function LandingView({ onNavigateToGallery }: { onNavigateToGallery: () => void }) {
  const heroVideo = "https://www.youtube.com/embed/lqFQ540ARgk?autoplay=1&mute=1&controls=0&loop=1&playlist=lqFQ540ARgk&modestbranding=1&showinfo=0&rel=0";
  
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-12">
        {/* Hero Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none text-primary">
            NOCTURNE
          </h1>
          <p className="font-headline text-sm md:text-base tracking-[0.3em] uppercase text-on-surface-variant">
            Digital Artifact // Sequence 001
          </p>
        </motion.div>

        {/* Video Monolith */}
        <VideoMonolith src={heroVideo} />

        {/* Info Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl space-y-8"
        >
          <p className="text-on-surface/80 leading-relaxed text-lg font-light">
            An exploration into the boundary between digital ephemera and archival physicalism. This sequence represents the transition from void to structure.
          </p>

          {/* Social Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <ActionButton icon={<Github className="w-5 h-5" />} label="Github" />
            <ActionButton icon={<Camera className="w-5 h-5" />} label="Gallery" onClick={onNavigateToGallery} />
            <ActionButton icon={<AtSign className="w-5 h-5" />} label="Social" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 w-full max-w-6xl mt-48 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`p-10 ${feature.bg} rounded-3xl flex flex-col justify-between aspect-square md:aspect-auto min-h-[300px] group transition-transform hover:-translate-y-1 border border-white/5`}
          >
            <div className="mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-headline text-2xl mb-3 text-primary">{feature.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-60">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
}

function GalleryView() {
  /**
   * ADD NEW VIDEOS HERE:
   * Simply add the YouTube embed URL to this list.
   */
  const videoArtifacts = [
    "https://www.youtube.com/embed/lqFQ540ARgk?start=30&autoplay=1&mute=1&controls=0&loop=1&playlist=lqFQ540ARgk&modestbranding=1&showinfo=0&rel=0",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?start=20&autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ&modestbranding=1&showinfo=0&rel=0",
    "https://www.youtube.com/embed/gJu3lS_qXNY?autoplay=1&mute=1&controls=0&loop=1&playlist=gJu3lS_qXNY&modestbranding=1&showinfo=0&rel=0",
    "https://www.youtube.com/embed/lqFQ540ARgk?autoplay=1&mute=1&controls=0&loop=1&playlist=lqFQ540ARgk&modestbranding=1&showinfo=0&rel=0",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ&modestbranding=1&showinfo=0&rel=0",
    "https://www.youtube.com/embed/gJu3lS_qXNY?autoplay=1&mute=1&controls=0&loop=1&playlist=gJu3lS_qXNY&modestbranding=1&showinfo=0&rel=0",
    "https://www.youtube.com/embed/lqFQ540ARgk?autoplay=1&mute=1&controls=0&loop=1&playlist=lqFQ540ARgk&modestbranding=1&showinfo=0&rel=0",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ&modestbranding=1&showinfo=0&rel=0",
    "https://www.youtube.com/embed/gJu3lS_qXNY?autoplay=1&mute=1&controls=0&loop=1&playlist=gJu3lS_qXNY&modestbranding=1&showinfo=0&rel=0",
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-40 pb-24 px-8 md:px-24 max-w-screen-2xl mx-auto"
    >
      <header className="text-center mb-24">
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-primary mb-4">THE ALTAR</h1>
        <p className="font-sans text-sm tracking-[0.2em] text-on-surface-variant uppercase opacity-60">Visual artifacts from the monolithic collection</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start max-w-[1400px] mx-auto">
        {videoArtifacts.map((url, idx) => (
          <div key={idx} className="relative group">
            <VideoMonolith 
              src={url} 
              className="aspect-video transition-all duration-500 hover:scale-[1.02]" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent pointer-events-none transition-colors duration-500 rounded-lg"></div>
          </div>
        ))}
      </div>

      <div className="mt-32 flex flex-col items-center gap-8">
        <div className="h-px w-24 bg-primary/20"></div>
        <button className="font-display text-primary bg-surface-container-highest/20 hover:bg-primary hover:text-black px-12 py-6 rounded-lg transition-all duration-500 tracking-tighter uppercase ring-1 ring-primary/20 cursor-pointer">
          LOAD MORE ARTIFACTS
        </button>
      </div>
    </motion.main>
  );
}

/**
 * Reusable component for the specific video monolith style.
 */
function VideoMonolith({ src, className = "" }: { src: string; className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`w-full bg-surface-container-lowest rounded-lg shadow-[0_40px_100_px_-20px_rgba(0,0,0,0.9)] overflow-hidden ring-1 ring-white/5 group relative ${className}`}
    >
      <div className="video-container">
        <iframe 
          src={src} 
          title="Video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}

/**
 * Reusable action button with motion effects.
 */
function ActionButton({ icon, label, onClick }: { icon: ReactNode; label: string; onClick?: () => void }) {
  return (
    <motion.a 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href="#" 
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="flex items-center gap-3 px-8 py-3 bg-surface-container hover:bg-surface-container-high transition-all rounded-full group border border-white/5"
    >
      <span className="text-primary/60 group-hover:text-primary transition-colors">
        {icon}
      </span>
      <span className="font-headline text-xs tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">
        {label}
      </span>
    </motion.a>
  );
}
