import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';

// Liquid Glass CSS
const liquidGlassCSS = `
.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.liquid-glass-strong {
  background: rgba(255,255,255,0.02);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
.liquid-glass-strong::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.5) 0%,
    rgba(255,255,255,0.2) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.2) 80%,
    rgba(255,255,255,0.5) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
`;

// FadingVideo Component
interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

function FadingVideo({ src, className = '', style = {} }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rAFRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const FADE_MS = 500;
  const FADE_OUT_LEAD = 0.55;

  const fadeTo = (target: number, duration: number) => {
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);

    const video = videoRef.current;
    if (!video) return;

    const startTime = Date.now();
    const startOpacity = parseFloat(video.style.opacity) || 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      video.style.opacity = String(startOpacity + (target - startOpacity) * progress);

      if (progress < 1) {
        rAFRef.current = requestAnimationFrame(animate);
      }
    };

    rAFRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.style.opacity = '0';
      video.play();
      fadeTo(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
      if (!fadingOutRef.current && video.duration - video.currentTime <= FADE_OUT_LEAD && video.currentTime > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
        fadingOutRef.current = false;
        fadeTo(1, FADE_MS);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
    />
  );
}

// BlurText Component
function BlurText({ text, className }: { text: string; className: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <p
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em',
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: (i * 100) / 1000,
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

// Icon Components
function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 4 20 12 6 20" />
    </svg>
  );
}

// SVG Icons for Cards
function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11 10.07 7.5 12 7.5s3.5 1.57 3.5 3.5z" />
    </svg>
  );
}

function PipeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
}

// Main Component
export default function Homev2() {
  return (
    <>
      <style>{liquidGlassCSS}</style>

      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Video */}
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: '120%', height: '120%' }}
        />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col h-screen">
          {/* Navbar */}
          <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
            <div className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center">
              <span className="font-heading italic text-white text-lg">G</span>
            </div>

            <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1.5">
              {['Services', 'Features', 'About', 'Contact', 'Blog'].map((item) => (
                <button
                  key={item}
                  className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition"
                >
                  {item}
                </button>
              ))}
              <button className="bg-white text-black px-3 py-2 rounded-full text-sm font-semibold ml-1 flex items-center gap-2 whitespace-nowrap">
                Book Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="w-12 h-12" />
          </nav>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 pt-24">
            {/* Badge */}
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="liquid-glass rounded-full px-1 py-1 mb-8 flex items-center gap-2"
            >
              <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">New</span>
              <span className="text-sm text-white/90 pr-3">{siteContent.hero.headline}</span>
            </motion.div>

            {/* Headline */}
            <BlurText
              text="Professional Plumbing You Can Trust"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
            />

            {/* Subheading */}
            <motion.p
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight text-center"
            >
              {siteContent.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-6 mt-6"
            >
              <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2">
                {siteContent.hero.cta1}
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="text-white flex items-center gap-2 hover:text-white/70 transition">
                <PlayIcon className="w-4 h-4" />
                {siteContent.hero.cta2}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex items-stretch gap-4 mt-8"
            >
              {siteContent.stats.slice(0, 2).map((stat, idx) => (
                <div key={idx} className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col">
                  <div className="w-7 h-7 text-white/70 mb-4">
                    {idx === 0 ? <ClockIcon /> : <GlobeIcon />}
                  </div>
                  <div className="flex-1" />
                  <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white font-body font-light mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Partners */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col items-center gap-4 pb-8"
          >
            <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
              Certified & Trusted Across {siteContent.company.name}
            </div>
            <div className="flex gap-12 md:gap-16 font-heading italic text-white text-2xl md:text-3xl tracking-tight">
              {siteContent.certifications.map((cert, idx) => (
                <span key={idx}>{cert.name}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CAPABILITIES */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
          {/* Header */}
          <div className="mb-auto">
            <div className="text-sm font-body text-white/80 mb-6">// Services</div>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Solutions <br /> for Every Need
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {siteContent.services.slice(0, 3).map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                  whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
                >
                  {/* Top Section */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center">
                      <div className="w-6 h-6 text-white">
                        {idx === 0 && <ClockIcon />}
                        {idx === 1 && <PipeIcon />}
                        {idx === 2 && <GlobeIcon />}
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                      {['Professional', 'Certified', 'Fast', 'Reliable'].map((tag, i) => (
                        <div key={i} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Bottom Section */}
                  <div>
                    <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
