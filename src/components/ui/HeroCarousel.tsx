import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import './HeroCarousel.css';

interface CarouselSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  category: string;
  metaTop: string[];
  counterText: string;
  metaBottom: string[];
  reticleCaption: string[];
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: '/images/hero-server-rack.jpg',
    alt: 'Enterprise 42U server rack with organized cabling and amber status LEDs',
    title: 'Server Room Infrastructure & 42U Racks',
    category: 'Core Infrastructure',
    metaTop: ['SURVEILLANCE', 'BIOMETRICS', 'NETWORKS', 'SERVERS'],
    counterText: '01 / 06',
    metaBottom: ['SCALABLE', 'COMPLIANT', 'ZERO-DOWNTIME'],
    reticleCaption: ['RELIABLE', 'ENGINEERING', 'PROVEN IN', 'THE FIELD'],
  },
  {
    id: 2,
    image: '/images/cctv-surveillance.jpg',
    alt: 'Commercial outdoor IP bullet camera with metal conduit piping for yard surveillance',
    title: 'Commercial CCTV & 4K Video Surveillance',
    category: 'Physical Security',
    metaTop: ['YARDS', 'DOCKS', 'PERIMETERS', 'NVR ARRAYS'],
    counterText: '02 / 06',
    metaBottom: ['4MP & 4K IP', 'CLOUD REMOTE', 'ANPR READY'],
    reticleCaption: ['PERIMETER', 'FACILITY', '24/7 DOCK', 'COVERAGE'],
  },
  {
    id: 3,
    image: '/images/biometric-access.jpg',
    alt: 'Wall mounted biometric facial recognition and fingerprint terminal with EM glass door lock',
    title: 'Biometric Attendance & Door Access Control',
    category: 'Access Systems',
    metaTop: ['FACE SCAN', 'FINGERPRINT', 'EM LOCKS', 'SHIFTS'],
    counterText: '03 / 06',
    metaBottom: ['HIGH SPEED', 'SHIFT PAYROLL', 'SECURE GATES'],
    reticleCaption: ['AUTHENTIC', 'TOUCHLESS', 'SHIFT TIMING', 'ACCURACY'],
  },
  {
    id: 4,
    image: '/images/network-switch-cabling.jpg',
    alt: 'Enterprise network rack with Cat6A patch cabling and managed 48-port PoE switches',
    title: 'Cat6A Structured Cabling & Managed Switching',
    category: 'Network Backbone',
    metaTop: ['CAT6A', 'FIBER', 'SWITCHING', 'POE+'],
    counterText: '04 / 06',
    metaBottom: ['FLUKE TESTED', '10G BACKBONES', 'MANAGED POE'],
    reticleCaption: ['FLUKE', 'CERTIFIED', 'STRUCTURED', 'NETWORKS'],
  },
  {
    id: 5,
    image: '/images/corporate-workstations.jpg',
    alt: 'Corporate workstations with dual monitors, commercial laptops and genuine software',
    title: 'Corporate Workstations & Fleet Procurement',
    category: 'Workplace Hardware',
    metaTop: ['DESKTOPS', 'LAPTOPS', 'MONITORS', 'OEM'],
    counterText: '05 / 06',
    metaBottom: ['GENUINE OEM', 'DELL & LENOVO', 'MICROSOFT 365'],
    reticleCaption: ['AUTHORIZED', 'ENTERPRISE', 'WORKSTATION', 'HARDWARE'],
  },
  {
    id: 6,
    image: '/images/warehouse-logistics-it.jpg',
    alt: 'High-bay logistics warehouse distribution center with wireless access points and surveillance',
    title: 'Warehouse & Port Logistics IT Infrastructure',
    category: 'Logistics Operations',
    metaTop: ['HIGH-BAY WI-FI', 'JNPT PORT', 'WEIGHBRIDGES', 'CFS DEPOTS'],
    counterText: '06 / 06',
    metaBottom: ['PORT READY', '2-4 HR DISPATCH', 'NO DEAD ZONES'],
    reticleCaption: ['PORT & CFS', 'HIGH-BAY', 'INDUSTRIAL', 'CONNECTIVITY'],
  },
];

export const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideDuration = 4000; // 4 seconds per slide

  // Auto-rotation timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="hero-carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="PRA IT Solutions Infrastructure Showcase Slideshow"
    >
      {/* Background Reticle Technical Graphic */}
      <div className="hero-reticle-graphic" aria-hidden="true">
        <svg viewBox="0 0 400 400" className="reticle-svg">
          <circle cx="200" cy="200" r="160" fill="none" stroke="#B85F3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.45" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="#B85F3B" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#B85F3B" strokeWidth="1" opacity="0.5" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="#B85F3B" strokeWidth="1" opacity="0.3" />
          <circle cx="200" cy="200" r="4" fill="#B85F3B" />
        </svg>
        <div className="reticle-caption">
          {activeSlide.reticleCaption.map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Visual Photo Container with Crossfade Stack */}
      <div className="hero-image-frame">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              className={`carousel-slide-item ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="carousel-slide-img"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Angular Olive Charcoal Technical Overlay Panel */}
        <div className="hero-image-overlay-panel">
          <div className="overlay-meta-top">
            {activeSlide.metaTop.map((item, idx) => (
              <React.Fragment key={idx}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </div>

          <div className="overlay-counter">
            {activeSlide.counterText.split('/')[0].trim()} <span>/</span> 06
          </div>

          <div className="overlay-meta-bottom">
            <div className="meta-copper-line" />
            {activeSlide.metaBottom.map((item, idx) => (
              <React.Fragment key={idx}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Manual Arrow Controls */}
        <button
          className="carousel-nav-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous Slide"
          title="Previous Infrastructure Showcase"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="carousel-nav-btn next-btn"
          onClick={handleNext}
          aria-label="Next Slide"
          title="Next Infrastructure Showcase"
        >
          <ChevronRight size={18} />
        </button>

        {/* Floating Indicator Dots & Timer Pill */}
        <div className="carousel-indicators-bar">
          <button
            className="carousel-pause-toggle"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Resume Slideshow' : 'Pause Slideshow'}
            title={isPaused ? 'Resume Slideshow' : 'Pause Slideshow'}
          >
            {isPaused ? <Play size={12} /> : <Pause size={12} />}
          </button>

          <div className="carousel-dots-list">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                className={`carousel-dot ${idx === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                title={slide.title}
              >
                <span className="dot-fill-progress" style={{
                  animationDuration: `${slideDuration}ms`,
                  animationPlayState: isPaused ? 'paused' : 'running'
                }} />
              </button>
            ))}
          </div>

          <span className="carousel-slide-tag">
            {activeSlide.category}
          </span>
        </div>
      </div>
    </div>
  );
};
