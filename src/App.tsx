/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Camera, 
  Mail, 
  Binary, 
  Waves, 
  Moon, 
  Search, 
  UserCircle 
} from "lucide-react";

// --- Types ---

type View = "landing" | "gallery";

// --- Components ---

const NavBar = ({ onViewChange, currentView }: { onViewChange: (v: View) => void, currentView: View }) => (
  <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-2xl shadow-black/40">
    <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
      <div 
        onClick={() => onViewChange("landing")}
        className="font-display text-2xl tracking-tighter text-primary cursor-pointer Dela_Gothic_One"
      >
        {currentView === "landing" ? "THE MONOLITH" : "THE ALTAR"}
      </div>
      <div className="hidden md:flex items-center space-x-10 font-headline text-sm tracking-[0.1em] uppercase">
        <a 
          onClick={(e) => { e.preventDefault(); onViewChange("gallery"); }}
          className={`cursor-pointer transition-colors duration-300 ${currentView === "gallery" ? "text-primary border-b border-primary/30 pb-1" : "text-primary/50 hover:text-primary"}`}
          href="#"
        >
          Gallery
        </a>
        <a className="text-primary/50 hover:text-primary transition-colors duration-300 cursor-pointer" href="#">Artifacts</a>
        <a className="text-primary/50 hover:text-primary transition-colors duration-300 cursor-pointer" href="#">Archive</a>
      </div>
      <div className="flex items-center gap-6">
        {currentView === "gallery" && (
          <div className="flex items-center gap-4 text-primary opacity-60">
            <Search size={20} className="hover:opacity-100 cursor-pointer transition-opacity" />
            <UserCircle size={20} className="hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        )}
        <button className="font-headline text-sm tracking-[0.1em] uppercase text-primary border border-primary/20 px-6 py-2 rounded-full hover:bg-white/10 transition-all active:scale-95">
          Connect
        </button>
      </div>
    </div>
  </nav>
);

const Footer = ({ onViewChange, brand }: { onViewChange: (v: View) => void, brand: string }) => (
  <footer className="w-full py-16 px-12 bg-surface-container-lowest mt-20">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
      <div 
        onClick={() => onViewChange("landing")}
        className="font-display text-primary text-sm font-bold uppercase tracking-widest cursor-pointer"
      >
        {brand}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="font-sans text-[10px] tracking-widest uppercase text-primary/30">
          © 2024 THE MONOLITH. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-10 font-headline text-[10px] tracking-widest uppercase">
          <a className="text-primary/30 hover:text-primary transition-all" href="#">Privacy</a>
          <a className="text-primary/30 hover:text-primary transition-all" href="#">Terms</a>
          <a className="text-primary/30 hover:text-primary transition-all" href="#">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

const VideoLandingPage = ({ onNavigateToGallery }: { onNavigateToGallery: () => void }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-12 pt-32 pb-20 px-6">
        {/* Background Ambient Elements */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="space-y-4">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none text-primary">
            NOCTURNE
          </h1>
          <p className="font-headline text-sm md:text-base tracking-[0.3em] uppercase text-on-surface-variant/60">
            Digital Artifact // Sequence 001
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full bg-surface-container-lowest rounded-lg shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden ring-1 ring-white/5 group relative"
        >
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/gJu3lS_qXNY?autoplay=1&mute=1&controls=0&loop=1&playlist=gJu3lS_qXNY&modestbranding=1&showinfo=0&rel=0" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="no-referrer"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <div className="max-w-xl space-y-8">
          <p className="text-on-surface/80 text-lg font-light leading-relaxed">
            An exploration into the boundary between digital ephemera and archival physicalism. This sequence represents the transition from void to structure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a className="flex items-center gap-2 px-6 py-3 bg-surface-container hover:bg-surface-container-high transition-all rounded-full group" href="#">
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-headline text-xs tracking-widest uppercase text-on-surface-variant">Github</span>
            </a>
            <a 
              onClick={onNavigateToGallery}
              className="flex items-center gap-2 px-6 py-3 bg-surface-container hover:bg-surface-container-high transition-all rounded-full group cursor-pointer"
            >
              <Camera className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-headline text-xs tracking-widest uppercase text-on-surface-variant">Gallery</span>
            </a>
            <a className="flex items-center gap-2 px-6 py-3 bg-surface-container hover:bg-surface-container-high transition-all rounded-full group" href="#">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-headline text-xs tracking-widest uppercase text-on-surface-variant">Social</span>
            </a>
          </div>
        </div>

        <section className="w-full max-w-6xl mt-48 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-10 bg-surface-container-low rounded-xl flex flex-col justify-between aspect-square md:aspect-auto min-h-[250px] border border-white/5">
            <Binary className="text-primary/40 w-10 h-10" />
            <div>
              <h3 className="font-headline text-xl mb-2 text-primary">Minimalism</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-60">Reduction as a creative discipline. Removing the noise to amplify the signal.</p>
            </div>
          </div>
          <div className="p-10 bg-surface-container-lowest rounded-xl flex flex-col justify-between aspect-square md:aspect-auto min-h-[250px] border border-white/10">
            <Waves className="text-primary/40 w-10 h-10" />
            <div>
              <h3 className="font-headline text-xl mb-2 text-primary">Motion</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-60">Fluid interactions that respect user intent and cognitive load.</p>
            </div>
          </div>
          <div className="p-10 bg-surface-container-low rounded-xl flex flex-col justify-between aspect-square md:aspect-auto min-h-[250px] border border-white/5">
            <Moon className="text-primary/40 w-10 h-10" />
            <div>
              <h3 className="font-headline text-xl mb-2 text-primary">Contrast</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-60">Leveraging obsidian depths and metallic highlights for focus.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const VideoGallery = () => {
  const videoItems = [
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
    { id: "gJu3lS_qXNY", aspect: "aspect-video" },
  ];

  return (
    <div className="min-h-screen pt-40 pb-24 px-8 md:px-24 max-w-screen-2xl mx-auto">
      <header className="text-center mb-24">
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-primary mb-4">ARCHIVE.01</h1>
        <p className="font-sans text-sm tracking-[0.2em] text-on-surface-variant uppercase opacity-60">Visual artifacts from the monolithic collection</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start max-w-[1400px] mx-auto">
        {videoItems.map((video, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 * (idx % 3) }}
            className={`relative overflow-hidden bg-surface-container-lowest rounded-lg group ${video.aspect} shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/5 transition-all duration-500 hover:scale-[1.02]`}
          >
            <iframe 
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3`} 
              title={`Archive shard ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="no-referrer"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent pointer-events-none transition-colors duration-500"></div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 flex flex-col items-center gap-8">
        <div className="h-px w-24 bg-primary/20"></div>
        <button className="font-display text-primary bg-surface-container-highest/20 hover:bg-primary hover:text-black px-12 py-6 rounded-lg transition-all duration-500 tracking-tighter uppercase ring-1 ring-primary/20">
          LOAD MORE ARTIFACTS
        </button>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [direction, setDirection] = useState<1 | -1>(1);

  const handleNavigate = (view: View) => {
    if (view === currentView) return;
    setDirection(view === "gallery" ? 1 : -1);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="bg-surface min-h-screen text-on-surface">
      <NavBar onViewChange={handleNavigate} currentView={currentView} />
      
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={currentView}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {currentView === "landing" ? (
            <VideoLandingPage onNavigateToGallery={() => handleNavigate("gallery")} />
          ) : (
            <VideoGallery />
          )}
        </motion.div>
      </AnimatePresence>

      <Footer 
        onViewChange={handleNavigate} 
        brand={currentView === "landing" ? "THE MONOLITH" : "THE ALTAR"} 
      />
    </div>
  );
}
