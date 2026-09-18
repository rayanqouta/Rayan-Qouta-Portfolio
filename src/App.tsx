/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  ChevronLeft, 
  ChevronRight, 
  MoveRight,
  Github,
  Menu,
  X,
  ArrowUp,
  Search,
  ExternalLink,
  Quote
} from "lucide-react";

// --- SOCIAL LINKS & ASSETS ---
const LINKEDIN_URL = "https://www.linkedin.com/in/rayan-qouta-1633a0292/";
const LINKEDIN_LOGO = "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail";
const GITHUB_URL = "https://github.com/rayanqouta";
const GITHUB_LOGO = "https://cdn-icons-png.flaticon.com/256/25/25231.png";
const ALJEEL_LOGO_REMOTE = "https://aljeel.com/wp-content/uploads/elementor/thumbs/logo-normal-rkgocvn6ioa7v8nqwpzyy5t99enahiosjtqaboizcy.png";
const ALJEEL_LOGO = "/logo-normal-rkgocvn6ioa7v8nqwpzyy5t99enahiosjtqaboizcy (1).png";
const TMU_LOGO = "/tmu-logo.png";

// --- SKETCH ILLUSTRATIONS (SVG) ---

const DroneSketch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    <path d="M50 50 L20 20 M50 50 L80 20 M50 50 L20 80 M50 50 L80 80" />
    <circle cx="20" cy="20" r="8" />
    <circle cx="80" cy="20" r="8" />
    <circle cx="20" cy="80" r="8" />
    <circle cx="80" cy="80" r="8" />
    <circle cx="50" cy="50" r="12" />
    <path d="M15 20 L25 20 M80 15 L80 25" strokeWidth="0.8"/>
  </svg>
);

const MechanicalSketch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    <rect x="30" y="30" width="40" height="40" rx="2" />
    <circle cx="50" cy="50" r="10" />
    <path d="M10 50 L30 50 M70 50 L90 50 M50 10 L50 30 M50 70 L50 90" />
    <path d="M25 25 L35 35 M65 65 L75 75" />
    <circle cx="50" cy="50" r="18" strokeDasharray="2 2" />
  </svg>
);

const EngineSketch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    <path d="M30 20 L70 20 L80 80 L20 80 Z" />
    <path d="M40 20 L40 10 M60 20 L60 10" />
    <path d="M25 80 L15 90 M75 80 L85 90" />
    <circle cx="50" cy="50" r="15" />
    <path d="M35 50 H65" strokeDasharray="1 1" />
  </svg>
);

// --- TYPES ---

interface ProjectDetail {
  id: number;
  label: string;
  title: string;
  summary: string;
  heroImage: string;
  heroImageAlt?: string;
  overview: string;
  tags: string[];
  githubUrl?: string;
  topSkills?: { skill: string; detail: string }[];
  sections: { title: string; content: string }[];
  componentsUsed?: { name: string; description: string }[];
  gallery: { image: string; title: string; description: string; alt?: string }[];
}

const PROJECT_DETAILS: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    label: "Project 01",
    title: "Low-Cost ECG Signal Acquisition System",
    summary: "Designed and built a low-cost ECG system using analog signal conditioning, Arduino Uno, and LabVIEW to display ECG waveforms in real time.",
    heroImage: "ecg-1.png",
    heroImageAlt: "ECG signal processing circuit testing with sensor",
    githubUrl: "https://github.com/rayanqouta/arduino-labview-ecg-monitor",
    overview: "Developed as part of a three-person team, this project involved creating a complete, low-cost ECG signal acquisition system. The design utilized an analog front-end for signal conditioning, an Arduino Uno for digital sampling and R-peak detection, and LabVIEW for advanced digital filtering and real-time visualization. The project achieved a final grade of 100%.",
    tags: ["ECG", "LabVIEW", "Arduino Uno", "Analog Front-End", "AD620 Amplifier", "Signal Processing", "Biomedical Engineering"],
    topSkills: [
      { skill: "Analog Front-End Circuit Design", detail: "Engineered differential bio-potential amplification with AD620 instrumentation amp, active band-pass filtering, diode protection, and right-leg drive feedback." },
      { skill: "Digital Signal Processing in LabVIEW", detail: "Implemented 60 Hz notch filtering and bandpass filters for clean PQRST feature extraction and accurate real-time BPM calculation." },
      { skill: "Microcontroller Firmware & Sampling", detail: "Programmed Arduino Uno in C++ to sample conditioned analog ECG signals, detect R-peaks in real time, and trigger optical indicators." },
      { skill: "Biomedical Instrumentation & Noise Mitigation", detail: "Maintained patient electrical safety, minimized common-mode interference, and stabilized DC baseline drift." }
    ],
    sections: [
      {
        title: "What I Built",
        content: "I built and tested the analog front-end utilizing an AD620 amplifier, incorporating filtering, right-leg-drive feedback, diode protection, and DC offset circuitry to safely and accurately capture the heart's electrical activity."
      },
      {
        title: "How It Works (Hardware & Firmware)",
        content: "The Arduino Uno was programmed to sample the conditioned ECG signals and accurately detect R-peaks, providing immediate visual feedback via an LED for each heartbeat."
      },
      {
        title: "Digital Processing (LabVIEW)",
        content: "In LabVIEW, bandpass and 60 Hz notch filters were implemented to further enhance the ECG signal quality. This allowed for clear identification of PQRST features and accurate BPM calculation during both resting and active testing phases."
      }
    ],
    gallery: [
      {
        image: "ecg-1.png",
        title: "Real-Time ECG Monitoring",
        description: "LabVIEW interface displaying raw data and the filtered signal for real-time monitoring.",
        alt: "LabVIEW interface showing raw and filtered ECG signals"
      },
      {
        image: "ecg-2.png",
        title: "Analog Front-End Testing",
        description: "Complete hardware testing setup including power supply, breadboard circuits, and multimeters.",
        alt: "Hardware setup for ECG signal processing"
      },
      {
        image: "ecg-3.png",
        title: "Signal Conditioning Circuit",
        description: "Close-up of the analog band-pass filter and amplification circuitry on a breadboard.",
        alt: "Breadboard circuit implementation"
      },
      {
        image: "ecg-4.jpg",
        title: "Active Filtering & Amplification",
        description: "Another angle showing the cascaded filters and AD620 instrumentation amplifier components.",
        alt: "Filter implementation on breadboard"
      },
      {
        image: "ecg-5.png",
        title: "AD620 Instrumentation Amplifier",
        description: "Detailed view of the operational amplifiers and passive components used in the ECG design.",
        alt: "Circuit assembly on breadboard"
      },
      {
        image: "ecg-6.png",
        title: "System Integration",
        description: "Integration of the analog circuitry with the Arduino microcontroller.",
        alt: "System integration view"
      },
      {
        image: "ecg-7.png",
        title: "ECG Testing Phase",
        description: "Testing the ECG system to ensure accurate heartbeat detection.",
        alt: "ECG testing"
      },
      {
        image: "ecg-8.png",
        title: "Data Acquisition",
        description: "Capturing and analyzing the ECG waveforms in real time.",
        alt: "Data acquisition setup"
      },
      {
        image: "ecg-9.jpg",
        title: "Project Results",
        description: "Final demonstration of the low-cost ECG signal acquisition system.",
        alt: "Final project results"
      }
    ]
  },
  2: {
    id: 2,
    label: "Project 02",
    title: "8-Bit VHDL CPU Architecture",
    summary: "Built an 8-bit CPU on an Altera FPGA board using VHDL and Quartus with two teammates, earning 95% on the project.",
    heroImage: "vhdl-cpu.jpeg",
    heroImageAlt: "8-Bit VHDL CPU Architecture FPGA Setup",
    githubUrl: "https://github.com/rayanqouta/8-bit-vhdl-cpu-architecture",
    overview: "This project involved designing and implementing a fully functional 8-bit central processing unit on an Altera FPGA board using VHDL and Quartus. Working alongside two teammates, the project achieved a final grade of 95%.",
    tags: ["VHDL", "Quartus", "Altera FPGA", "8-Bit CPU", "ALU", "Digital Logic", "Computer Architecture"],
    topSkills: [
      { skill: "VHDL & RTL Hardware Description", detail: "Authored modular structural and behavioral VHDL code for all internal CPU datapaths, registers, and multiplexers." },
      { skill: "ALU & Digital Processor Architecture", detail: "Engineered the Arithmetic Logic Unit, opcode instruction decoder, status flags, and micro-operation sequencing." },
      { skill: "FPGA Synthesis & Quartus Prime", detail: "Synthesized and mapped digital logic to an Altera FPGA, verifying timing constraints and I/O assignments." },
      { skill: "Simulation & Hardware Verification", detail: "Validated instruction execution cycles via timing waveform simulation and monitored runtime operations on 7-segment displays." }
    ],
    sections: [
      {
        title: "What I Built",
        content: "I contributed to building an 8-bit CPU deployed on an Altera FPGA board, utilizing VHDL and Quartus software."
      },
      {
        title: "Design Process (Architecture)",
        content: "The design involved creating the Arithmetic Logic Unit (ALU), control logic, and an opcode decoder to successfully handle the CPU’s main operations and instruction sets."
      },
      {
        title: "Testing & Results",
        content: "We thoroughly tested the design using waveform analysis and 7-segment displays, verifying that the CPU was working properly and executing instructions accurately."
      }
    ],
    gallery: [
      {
        image: "vhdl-cpu.jpeg",
        title: "FPGA Setup",
        description: "The Altera FPGA board used to deploy and test the 8-bit CPU architecture.",
        alt: "Altera FPGA board setup"
      },
      {
        image: "vhdl-cpu.mp4",
        title: "CPU Execution Demo",
        description: "Video demonstration showing the CPU in action, verified using 7-segment displays.",
        alt: "Video of CPU running on FPGA"
      }
    ]
  },
  3: {
    id: 3,
    label: "Project 03",
    title: "Elderly Fall-Detection System",
    summary: "Built a fall-detection prototype with one teammate using a PIC32 microcontroller and ADXL accelerometer to detect possible falls in elderly users, earning 98% on the project.",
    heroImage: "fall-cover.png",
    heroImageAlt: "Elderly Fall-Detection System Prototype and Sensor Setup",
    githubUrl: "https://github.com/rayanqouta/elderly-fall-detection-pic32",
    overview: "Developed with one teammate (Nov 2025 – Dec 2025), this project focused on designing and constructing a fall-detection prototype to detect possible falls in elderly users. The embedded system integrates a PIC32 microcontroller with an ADXL accelerometer, using C firmware with timers and interrupts to process real-time motion data, achieving a 98% evaluation.",
    tags: ["PIC32", "ADXL335 Accelerometer", "Embedded C", "ADC Sampling", "Timer3 Interrupts", "PORTD LEDs", "RF2 Switch", "Oscilloscopes"],
    topSkills: [
      { skill: "Embedded C Firmware Development", detail: "Wrote robust, real-time bare-metal C firmware with state machines to monitor motion patterns and identify falls." },
      { skill: "PIC32 Timers & Interrupt Handling", detail: "Configured Timer3 hardware interrupts running at 10 Hz (100 ms intervals) for precise, jitter-free sensor sampling." },
      { skill: "ADC Interfacing & Sensor Conditioning", detail: "Sampled continuous analog voltage signals from an ADXL335 3-axis accelerometer across X, Y, and Z coordinate planes." },
      { skill: "Hardware Calibration & Debugging", detail: "Calibrated dynamic threshold algorithms using oscilloscopes and logic analyzers to minimize false positive triggers." }
    ],
    sections: [
      {
        title: "What I Built",
        content: "Built a fall-detection prototype with one teammate using a PIC32 microcontroller and ADXL accelerometer to detect possible falls in elderly users, earning 98% on the project."
      },
      {
        title: "Firmware & Processing",
        content: "Programmed the system in C and used ADC sampling, timers, and interrupts to read and process the sensor data."
      },
      {
        title: "Testing & Calibration",
        content: "Tested the system with oscilloscopes and logic analyzers and adjusted the settings to reduce false detections."
      }
    ],
    componentsUsed: [
      { name: "ADXL335 3-axis accelerometer", description: "Measured movement in the X, Y, and Z axes." },
      { name: "PIC32 microcontroller", description: "Read and processed the accelerometer signals." },
      { name: "PIC32 internal ADC", description: "Converted the accelerometer’s analog voltage signals into digital values." },
      { name: "Timer3 interrupt", description: "Sampled the sensor every 100 ms, or 10 Hz." },
      { name: "C programming", description: "Used to implement the detection algorithm." },
      { name: "LEDs connected to PORTD", description: "Showed the system status and indicated when a fall was detected." },
      { name: "Toggle switch on RF2", description: "Used to start/reset the monitoring system." }
    ],
    gallery: [
      {
        image: "fall-cover.png",
        title: "System Overview",
        description: "Prototype layout featuring the PIC32 development setup, ADXL accelerometer wiring, and power interface.",
        alt: "Fall detection system overview"
      },
      {
        image: "fall-2.jpeg",
        title: "Microcontroller & Sensor Wiring",
        description: "Hardware connection between the PIC32 board and the ADXL analog accelerometer sensor.",
        alt: "Microcontroller and sensor wiring"
      },
      {
        image: "fall-3.jpeg",
        title: "Oscilloscope Signal Testing",
        description: "Testing acceleration waveforms and impact spike thresholds on the oscilloscope.",
        alt: "Oscilloscope waveform display"
      },
      {
        image: "fall-4.jpeg",
        title: "Logic Analyzer Waveform Analysis",
        description: "Verification of ADC sampling intervals, interrupt timing, and logic signals.",
        alt: "Logic analyzer waveform"
      }
    ]
  },
  4: {
    id: 4,
    label: "Project 04",
    title: "Control Systems and Servo Motor Modeling",
    summary: "Modeled dynamic systems, DC motors, and rotary servo systems in MATLAB and Simulink, designing PID controllers, lead/lag compensators, and state-feedback control.",
    heroImage: "servo-cover.png",
    heroImageAlt: "Control Systems and Servo Motor Modeling Simulation Results",
    githubUrl: "https://github.com/rayanqouta/control-systems-servo-modeling",
    overview: "A three-lab MATLAB and Simulink control engineering portfolio covering dynamic-system modeling, open- and closed-loop response, stability analysis, lead/lag compensation, classical P/PI/PD/PID control, DC motor transfer-function models, and state-feedback control of a rotary servo and inverted-pendulum system.",
    tags: ["MATLAB", "Simulink", "Control Systems", "PID Control", "State-Space", "DC Motor", "Servo Motor", "Lead/Lag Compensation"],
    topSkills: [
      { skill: "Dynamic Systems & Feedback Fundamentals", detail: "Analyzed first, second, and third-order transfer functions, transient response, steady-state error, and Routh-Hurwitz critical-gain stability." },
      { skill: "DC Motor Modeling & Frequency Response", detail: "Derived voltage-to-speed and voltage-to-position physical models, evaluating step responses, Bode diagrams, gain margins, and phase margins." },
      { skill: "Lead & Lag Compensator Design", detail: "Engineered first-order and higher-order compensators in Simulink to meet strict overshoot and settling time criteria." },
      { skill: "State-Feedback & Inverted Pendulum Control", detail: "Implemented full-state feedback and pole-placement algorithms for inverted-pendulum stabilization and reference tracking." }
    ],
    sections: [
      {
        title: "Dynamic Systems & Feedback Fundamentals",
        content: "Simulated step, impulse, and sinusoidal responses across varied transfer functions. Computed steady-state errors under unity feedback and established stability boundaries using pole-zero mapping and Routh-Hurwitz criteria."
      },
      {
        title: "Motor Modeling & Lead/Lag Compensation",
        content: "Constructed both physical electromechanical and mathematical transfer-function models for a DC servo motor. Applied cascade lead/lag compensators to enhance phase margin and system responsiveness."
      },
      {
        title: "State-Space & Pendulum Control",
        content: "Designed full state-feedback controllers in Simulink for balancing an inverted pendulum attached to a rotary servo arm, verifying robust disturbance rejection and reference tracking."
      }
    ],
    gallery: [
      {
        image: "servo-cover.png",
        title: "Rotary Servo Reference Tracking",
        description: "Closed-loop simulation tracking command angles with state-feedback control.",
        alt: "Rotary servo reference tracking plot"
      },
      {
        image: "servo-2.png",
        title: "State-Feedback Response",
        description: "State-variable trajectories demonstrating fast settling time and minimal overshoot.",
        alt: "State feedback response plot"
      },
      {
        image: "servo-3.png",
        title: "Disturbance Rejection & Stability",
        description: "System response under external disturbance testing pendulum equilibrium.",
        alt: "Disturbance rejection plot"
      }
    ]
  }
};

// --- COMPONENTS ---

const ProjectImage = ({ src, alt, className, placeholderText }: { src: string; alt: string; className?: string; placeholderText?: string }) => {
  const [isError, setIsError] = useState(false);

  // If path looks like a placeholder or error happens, show fallback
  const showPlaceholder = isError || src.includes('placeholder');
  
  const formattedSrc = src.startsWith('/') ? src : `/${src}`;

  if (showPlaceholder) {
    return (
      <div className={`bg-slate-50 flex items-center justify-center p-8 text-center border border-dashed border-slate-300 ${className}`}>
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Placeholder</p>
          <p className="text-sm font-display font-bold text-slate-600 px-4">{placeholderText || alt}</p>
        </div>
      </div>
    );
  }

  if (formattedSrc.toLowerCase().endsWith('.mp4')) {
    return (
      <video
        src={formattedSrc}
        className={className}
        autoPlay
        loop
        muted
        playsInline
        onError={() => setIsError(true)}
      />
    );
  }

  return (
    <img 
      src={formattedSrc} 
      alt={alt} 
      className={className} 
      onError={() => setIsError(true)}
      referrerPolicy="no-referrer"
    />
  );
};

// --- DATA ---

const PROJECTS = [
  {
    id: 1,
    title: "Low-Cost ECG Signal Acquisition System",
    category: "Biomedical Engineering",
    image: "ecg-1.png",
    githubUrl: "https://github.com/rayanqouta/arduino-labview-ecg-monitor",
    description: "Designed and built a low-cost ECG system using analog signal conditioning, Arduino Uno, and LabVIEW to display ECG waveforms in real time.",
    topSkills: ["Analog Conditioning (AD620)", "LabVIEW DSP", "Arduino C++", "Bio-Instrumentation"],
    placeholderText: "ECG System Setup",
    altText: "Low-cost ECG system hardware and interface setup"
  },
  {
    id: 2,
    title: "8-Bit VHDL CPU Architecture",
    category: "Computer Architecture",
    image: "vhdl-cpu.jpeg",
    githubUrl: "https://github.com/rayanqouta/8-bit-vhdl-cpu-architecture",
    description: "Built an 8-bit CPU on an Altera FPGA board using VHDL and Quartus with two teammates, earning 95% on the project.",
    topSkills: ["VHDL & RTL Design", "ALU & Datapath", "Altera FPGA Synthesis", "Logic Verification"],
    placeholderText: "VHDL CPU Setup",
    altText: "8-Bit VHDL CPU Architecture on FPGA"
  },
  {
    id: 3,
    title: "Elderly Fall-Detection System",
    category: "Embedded Systems",
    image: "fall-cover.png",
    githubUrl: "https://github.com/rayanqouta/elderly-fall-detection-pic32",
    description: "Built a fall-detection prototype with one teammate using a PIC32 microcontroller and ADXL accelerometer to detect possible falls in elderly users, earning 98% on the project.",
    topSkills: ["Embedded C (PIC32)", "Timer3 Interrupts (10 Hz)", "ADC & ADXL335", "Oscilloscope Testing"],
    placeholderText: "Fall Detection Prototype",
    altText: "Elderly Fall-Detection System Prototype"
  },
  {
    id: 4,
    title: "Control Systems & Servo Motor Modeling",
    category: "Control Systems & Simulation",
    image: "servo-cover.png",
    githubUrl: "https://github.com/rayanqouta/control-systems-servo-modeling",
    description: "Modeled dynamic systems, DC motors, and rotary servo systems in MATLAB and Simulink, designing PID controllers, lead/lag compensators, and state-feedback control.",
    topSkills: ["MATLAB & Simulink", "PID & State-Feedback", "DC Servo Modeling", "Lead/Lag Compensation"],
    placeholderText: "Servo Motor Modeling",
    altText: "Control Systems and Servo Motor Modeling Simulation"
  }
];

// --- NEW SECTIONS ---
const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16 md:mb-24">
    {subtitle && <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal mb-4">{subtitle}</p>}
    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">{title}</h2>
  </div>
);

const Section = ({ id, children, className = "" }: { id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-24 scroll-mt-16 ${className}`}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default function App() {
  const [activeLink, setActiveLink] = useState("Home");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  const navLinks = ["Home", "About", "Education", "Experience", "Skills", "Projects", "GitHub", "Testimonials", "Resume", "Contact"];

  const currentProjectDetails = selectedProjectId ? PROJECT_DETAILS[selectedProjectId] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null || !currentProjectDetails) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => prev !== null && prev < currentProjectDetails.gallery.length - 1 ? prev + 1 : 0);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => prev !== null && prev > 0 ? prev - 1 : currentProjectDetails.gallery.length - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, currentProjectDetails]);

  useEffect(() => {
    if (selectedProjectId) return; // disable scroll spy in project detail view

    const handleScroll = () => {
      // Back to top button visibility
      setShowBackToTop(window.scrollY > 500);

      // Scroll Spy
      const sections = navLinks.map(link => document.getElementById(link.toLowerCase()));
      let current = "";
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id') || "";
          }
        }
      });
      
      if (current) {
        setActiveLink(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedProjectId]);

  const handleNavClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (selectedProjectId) {
      setSelectedProjectId(null);
      setTimeout(() => {
        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const target = document.getElementById(link.toLowerCase());
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setSelectedProjectId(null);
    setActiveLink("Projects");
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen selection:bg-navy selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-navy z-50 origin-left"
        style={{ scaleX }}
      />

      {/* --- TOP NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Name */}
          <div className="flex-1">
            <h2 
              className="text-xl font-display font-bold tracking-tight uppercase cursor-pointer" 
              onClick={(e) => handleNavClick("Home", e)}
            >
              Rayan Qouta
            </h2>
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex gap-5 items-center flex-1 justify-center">
            {navLinks.map((link) => (
               <a
                 key={link}
                 href={`#${link.toLowerCase()}`}
                 onClick={(e) => handleNavClick(link, e)}
                 className={`text-[11px] font-bold uppercase tracking-wider transition-all relative whitespace-nowrap ${
                   activeLink === link ? "text-teal" : "text-slate-400 hover:text-slate-900"
                 }`}
               >
                 {link}
                 {activeLink === link && (
                   <motion.div 
                     layoutId="underline"
                     className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal"
                   />
                 )}
               </a>
             ))}
           </div>

          {/* Socials / Mobile Menu Toggle */}
          <div className="flex xl:hidden gap-6 items-center flex-1 justify-end text-slate-900">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden xl:flex gap-4 items-center flex-1 justify-end">
             <a 
               href={LINKEDIN_URL} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 text-slate-700 hover:text-navy transition-colors font-bold uppercase text-xs tracking-wider bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg"
             >
                <img src={LINKEDIN_LOGO} alt="LinkedIn" className="w-3.5 h-3.5 object-contain" referrerPolicy="no-referrer" />
                <span>LinkedIn</span>
             </a>
             <a 
               href={GITHUB_URL} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 text-slate-700 hover:text-navy transition-colors font-bold uppercase text-xs tracking-wider bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg"
             >
                <img src={GITHUB_LOGO} alt="GitHub" className="w-3.5 h-3.5 object-contain" referrerPolicy="no-referrer" />
                <span>GitHub</span>
             </a>
             <a href="mailto:Rrayan4493@gmail.com" className="text-slate-400 hover:text-teal transition-colors font-bold uppercase text-xs tracking-widest ml-1">
                Email
             </a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => (
               <a
                 key={link}
                 href={`#${link.toLowerCase()}`}
                 onClick={(e) => handleNavClick(link, e)}
                 className={`text-sm font-bold uppercase tracking-widest ${activeLink === link ? "text-teal" : "text-slate-500"}`}
               >
                 {link}
               </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-teal"
              >
                <img src={LINKEDIN_LOGO} alt="LinkedIn" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-teal"
              >
                <img src={GITHUB_LOGO} alt="GitHub" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                <span>GitHub (rayanqouta)</span>
              </a>
              <a 
                href="mailto:Rrayan4493@gmail.com"
                className="text-sm font-bold text-slate-500 hover:text-teal"
              >
                Email
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- MAIN CONTENT --- */}
      <motion.main 
        key={selectedProjectId ? 'detail' : 'home'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-24"
      >
        {!selectedProjectId ? (
          /* HOMEPAGE VIEW */
          <div className="px-6 max-w-7xl mx-auto">
            {/* 1. HERO SECTION */}
            <Section id="home" className="pt-8 pb-24 lg:pt-16 lg:pb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Column: Image */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square overflow-hidden rounded-[3rem] shadow-2xl"
                >
                  {/* EDIT PORTRAIT IMAGE HERE */}
                  <img 
                    src="/portrait.png"
                    alt="Rayan Qouta Portrait"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Right Column: Text Content */}
                <div className="relative">
                  <motion.div animate={{ opacity: 0.15 }} className="absolute -top-12 -right-8 w-24 h-24 text-slate-900 pointer-events-none">
                    <DroneSketch />
                  </motion.div>
                  <motion.div animate={{ opacity: 0.15 }} className="absolute -bottom-8 -left-12 w-28 h-28 text-slate-900 pointer-events-none">
                    <MechanicalSketch />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h1 className="text-5xl md:text-7xl leading-[1.1] mb-8 text-slate-900">
                      I'm Rayan Qouta,<br />
                      a Biomedical Engineering Student.
                    </h1>
                    
                    <div className="space-y-6 text-slate-600 max-w-lg mb-12">
                      <p className="text-lg leading-relaxed">
                        I am a Biomedical Engineering student at Toronto Metropolitan University with experience in control systems, embedded systems, circuit design, signal analysis, simulation, and biomedical instrumentation. I enjoy combining hardware, software, and design to build practical engineering solutions.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="#projects"
                        onClick={(e) => handleNavClick("Projects", e)}
                        className="bg-gradient-to-r from-navy to-teal hover:from-navy-light hover:to-teal-light text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[11px] group shadow-lg shadow-teal/20"
                      >
                        Projects
                        <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href="#contact"
                        onClick={(e) => handleNavClick("Contact", e)}
                        className="bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[11px] hover:shadow-sm"
                      >
                        Contact Me
                      </a>
                    </div>

                    {/* Social Quick Connect */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a 
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider hover:border-teal/40 hover:shadow-sm transition-all"
                      >
                        <img src={LINKEDIN_LOGO} alt="LinkedIn" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider hover:border-teal/40 hover:shadow-sm transition-all"
                      >
                        <img src={GITHUB_LOGO} alt="GitHub" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                        <span>GitHub: rayanqouta</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Section>

            {/* 2. ABOUT SECTION */}
            <Section id="about" className="bg-slate-50 rounded-[3rem] px-8 py-20 lg:p-24 shadow-sm border border-slate-100">
              <SectionHeader title="About Me" subtitle="Introduction" />
              <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                <div className="flex-1 max-w-3xl">
                  <p className="text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                    I specialize in bridging biological systems and engineering principles. My academic and project experience spans from designing analog front-ends for physiological signal processing to implementing digital logic and processor architecture on FPGAs.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                    I am passionate about creating technologies that solve real-world biomedical and hardware challenges—from building low-cost ECG signal acquisition systems with LabVIEW and microcontroller feedback to developing ALU and control architectures.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    Toronto, ON based. Always looking for new opportunities to learn and build.
                  </p>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-xl border border-slate-200">
                    <img 
                      src="/rayanincoat.png"
                      alt="About Me - Rayan Qouta"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </Section>

            {/* 3. EDUCATION SECTION */}
            <Section id="education">
              <SectionHeader title="Education" subtitle="Academic Background" />
              
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-12 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
                  <div className="flex items-center gap-6">
                    <img src="/tmu-logo.png" alt="Toronto Metropolitan University" className="w-16 h-16 object-contain" />
                    <div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">B.Eng. Biomedical Engineering</h3>
                      <p className="text-lg text-teal font-semibold">Toronto Metropolitan University</p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 text-sm font-bold tracking-widest uppercase text-slate-400 bg-slate-50 px-4 py-2 rounded-full inline-flex items-center self-start border border-slate-100">
                    Sept. 2023 – Present
                  </div>
                </div>

                <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Signals and Systems", "Digital Logic Design", "Electronic Devices and Circuits (Analog and Digital)", 
                    "Sensors", "Microprocessor Systems", "Hardware/Software Organization", "System Memory", 
                    "Data Structures and Algorithms in C and C++", "Electrical Machines and Actuators", 
                    "Control Systems and Bio-Robotics", "Biomedical Instrumentation", "Biomedical Physics", 
                    "Biomechanics", "Biomaterials", "Anatomy", "Physiology"
                  ].map((course) => (
                    <span 
                      key={course} 
                      className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-100 hover:border-teal/30 hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            {/* 4. PROFESSIONAL EXPERIENCE SECTION */}
            <Section id="experience" className="scroll-mt-20">
              <SectionHeader title="Professional Experience" subtitle="Industry Experience" />
              
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 lg:p-12 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8 pb-8 border-b border-slate-100">
                  <div className="flex items-start sm:items-center gap-5">
                    <div className="w-20 h-20 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-2.5 shrink-0 overflow-hidden shadow-xs">
                      <img 
                        src={ALJEEL_LOGO} 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = ALJEEL_LOGO_REMOTE;
                        }}
                        alt="Al-Jeel Medical & Trading Co. Ltd." 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">
                        Biomedical Engineering Intern
                      </h3>
                      <p className="text-lg text-teal font-semibold">
                        Al-Jeel Medical & Trading Co. Ltd.
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-slate-500 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full inline-flex items-center self-start">
                    May 2024 – Aug 2024
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-4 mb-8">
                  {[
                    "Worked alongside three biomedical engineers on preventive maintenance, equipment testing, troubleshooting, and installation of medical devices, including checking fuses with a multimeter to make sure they were working properly.",
                    "Helped with hospital service requests by recording equipment issues, organizing customer and device information, and following up with engineers when needed.",
                    "Updated equipment and service records in Oracle and Excel, including model numbers, serial numbers, warranty details, service contracts, and work orders.",
                    "Prepared weekly service reports in Excel to track service calls, equipment history, repeat issues, and the time engineers spent on service work.",
                    "Tracked spare parts and shipments, following up with suppliers on availability and delivery updates."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-slate-600 leading-relaxed text-base">
                      <div className="w-2 h-2 rounded-full bg-teal shrink-0 mt-2.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills/Tools badges */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2.5 items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-2">Core Competencies:</span>
                  {[
                    "Preventive Maintenance",
                    "Medical Device Testing & Troubleshooting",
                    "Multimeter Diagnostics",
                    "Hospital Service Requests",
                    "Oracle ERP",
                    "Microsoft Excel Reports",
                    "Supply Chain & Spare Parts Tracking"
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-lg text-slate-700 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            {/* 5. TECHNICAL SKILLS SECTION */}
            <Section id="skills" className="bg-slate-50 rounded-[3rem] px-8 py-20 lg:p-24 shadow-sm border border-slate-100">
               <SectionHeader title="Technical Skills" subtitle="Core Competencies" />
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Category 1 */}
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-teal/30 hover:-translate-y-1.5 transition-all duration-300">
                    <h3 className="text-xl font-display font-bold mb-6 text-slate-900 border-b border-slate-100 pb-4">Software</h3>
                    <div className="flex flex-col gap-3 text-slate-600">
                      {["MATLAB", "Simulink", "C", "C++", "Python", "NI Multisim", "LaTeX", "VHDL", "Verilog", "Quartus"].map(skill => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal/40" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-teal/30 hover:-translate-y-1.5 transition-all duration-300">
                    <h3 className="text-xl font-display font-bold mb-6 text-slate-900 border-b border-slate-100 pb-4">Testing</h3>
                    <div className="flex flex-col gap-3 text-slate-600">
                      {["Oscilloscopes", "Function Generators", "Digital Multimeters"].map(skill => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal/40" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-teal/30 hover:-translate-y-1.5 transition-all duration-300">
                    <h3 className="text-xl font-display font-bold mb-6 text-slate-900 border-b border-slate-100 pb-4">Technical</h3>
                    <div className="flex flex-col gap-3 text-slate-600">
                      {["Circuit Simulation", "Signal Analysis", "Control System Modeling", "DC Motor Control", "System Simulation"].map(skill => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal/40" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

               </div>
            </Section>

            {/* 5. PROJECT PREVIEW SECTION */}
            <Section id="projects">
              <SectionHeader title="Technical Projects" subtitle="Featured Work" />
              
              <div className="flex items-end justify-between mb-8 -mt-8">
                <div></div>
                <div className="flex gap-4">
                  <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar pb-12 snap-x">
                {PROJECTS.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="w-[320px] md:w-[450px] shrink-0 group snap-start flex flex-col"
                  >
                    <div className="shrink-0 bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden aspect-[4/3] mb-6 shadow-sm group-hover:shadow-2xl group-hover:border-teal/30 transition-all cursor-pointer relative" onClick={() => handleProjectClick(project.id)}>
                <ProjectImage 
                  src={project.image} 
                  alt={project.altText || project.title}
                  placeholderText={project.placeholderText}
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-[1.03]"
                />
                    </div>
                    <div className="self-start inline-block bg-slate-50 border border-slate-200 text-teal px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-2xl mb-4 text-slate-900 font-display font-bold">{project.title}</h3>
                    {project.description && (
                      <p className="text-sm text-slate-600 mb-5 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                    {project.topSkills && (
                      <div className="mb-6">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                          Top Skills Utilized
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.topSkills.map((skill) => (
                            <span key={skill} className="text-[11px] font-medium bg-slate-100/90 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-auto pt-2 flex flex-wrap items-center gap-3">
                      <button 
                        onClick={() => handleProjectClick(project.id)}
                        className="bg-gradient-to-r from-navy to-teal hover:from-navy-light hover:to-teal-light text-white font-bold py-3.5 px-7 rounded-xl transition-all uppercase tracking-widest text-[10px] shadow-md shadow-teal/10 transform active:scale-95"
                      >
                        Learn More
                      </button>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl transition-all text-[11px] uppercase tracking-wider hover:border-teal/30 hover:shadow-sm"
                          title="View Repository on GitHub"
                        >
                          <img src={GITHUB_LOGO} alt="GitHub" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                          <span>Repo</span>
                          <ExternalLink size={12} className="text-slate-400" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* 6. GITHUB REPOSITORIES SECTION */}
            <Section id="github" className="bg-slate-50 rounded-[3rem] px-8 py-20 lg:p-24 shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal mb-4">Open Source & Codebases</p>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">GitHub Repositories</h2>
                </div>
                <a 
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start md:self-auto inline-flex items-center gap-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold py-3.5 px-6 rounded-2xl transition-all text-xs uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <img src={GITHUB_LOGO} alt="GitHub" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                  <span>Profile: Rayan Qouta</span>
                  <ExternalLink size={14} className="text-slate-400" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Control Systems and Servo Motor Modeling",
                    url: "https://github.com/rayanqouta/control-systems-servo-modeling",
                    tags: ["MATLAB", "Simulink", "PID Control", "State-Space"],
                    desc: "Dynamic systems, DC motor modeling, root locus, lead/lag compensators, and state-feedback control of a rotary servo pendulum system."
                  },
                  {
                    title: "Elderly Fall-Detection System",
                    url: "https://github.com/rayanqouta/elderly-fall-detection-pic32",
                    tags: ["Embedded C", "PIC32", "ADXL335", "Interrupts"],
                    desc: "Microcontroller firmware with ADC sampling, Timer3 10 Hz interrupts, and analog accelerometer signal conditioning."
                  },
                  {
                    title: "8-Bit VHDL CPU Architecture",
                    url: "https://github.com/rayanqouta/8-bit-vhdl-cpu-architecture",
                    tags: ["VHDL", "Quartus", "Altera FPGA", "ALU"],
                    desc: "Complete 8-bit central processing unit architecture with custom ALU, opcode decoder, status flags, and 7-segment output."
                  },
                  {
                    title: "Arduino–LabVIEW ECG Monitor",
                    url: "https://github.com/rayanqouta/arduino-labview-ecg-monitor",
                    tags: ["Arduino C++", "LabVIEW DSP", "AD620 Instrumentation"],
                    desc: "Bio-potential signal acquisition system with analog hardware filtering, microcontroller sampling, and LabVIEW real-time display."
                  }
                ].map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-teal/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <img src={GITHUB_LOGO} alt="GitHub" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">rayanqouta</span>
                        </div>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-navy transition-colors mb-3">
                        {repo.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {repo.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                      {repo.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </Section>

            {/* 7. WHAT OTHERS THINK OF ME SECTION */}
            <Section id="testimonials" className="bg-slate-50 rounded-[3rem] px-8 py-20 lg:p-24 shadow-sm border border-slate-100">
              <SectionHeader title="What Others Think of Me" subtitle="Endorsements & Recommendations" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Recommendation 1: Mohamed Saidam */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal/30 transition-all flex flex-col justify-between relative group"
                >
                  <div className="mb-8">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl p-2 flex items-center justify-center overflow-hidden">
                        <img 
                          src={ALJEEL_LOGO} 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = ALJEEL_LOGO_REMOTE;
                          }}
                          alt="Al-Jeel Medical & Trading Co. Ltd." 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                        <Quote size={20} />
                      </div>
                    </div>

                    <div className="space-y-4 text-slate-700 text-base leading-relaxed italic">
                      <p>
                        "Rayan is an excellent problem solver, great team player, and approached all his tasks with a positive and professional attitude."
                      </p>
                      <p>
                        "His motivation to constantly improve and strive for the top is unmatched. His independent work always showed progress and he showed great dedication to the schedule. I would recommend Rayan anytime!"
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-lg text-slate-900">Mohamed Saidam</h4>
                      <p className="text-sm font-semibold text-teal">Maintenance Supervisor</p>
                      <p className="text-xs text-slate-500">Al-Jeel Medical & Trading Co. Ltd.</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                      Supervisor
                    </span>
                  </div>
                </motion.div>

                {/* Recommendation 2: Mohamed Amer El Bekshi */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal/30 transition-all flex flex-col justify-between relative group"
                >
                  <div className="mb-8">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl p-2 flex items-center justify-center overflow-hidden">
                        <img 
                          src={TMU_LOGO} 
                          alt="Toronto Metropolitan University" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                        <Quote size={20} />
                      </div>
                    </div>

                    <div className="text-slate-700 text-base leading-relaxed italic">
                      <p>
                        "I had the opportunity to work with Rayan as my lab partner at Toronto Metropolitan University. He was reliable, easy to work with, and a strong communicator. Rayan always contributed to the team, listened to others, and helped make sure our work was completed properly and on time. I really enjoyed working with him."
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-lg text-slate-900">Mohamed Amer El Bekshi</h4>
                      <p className="text-sm font-semibold text-teal">Lab Partner</p>
                      <p className="text-xs text-slate-500">Toronto Metropolitan University</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                      Lab Partner
                    </span>
                  </div>
                </motion.div>
              </div>
            </Section>

            {/* 8. RESUME SECTION */}
            <Section id="resume" className="bg-white rounded-[3rem] px-8 py-20 lg:p-24 shadow-sm border border-slate-100 text-center">
              <SectionHeader title="Resume" subtitle="Curriculum Vitae" />
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                  Interested in my complete academic and professional experience? Download my resume for a detailed view of my projects, technical skills, and coursework.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-navy to-teal hover:from-navy-light hover:to-teal-light text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[11px] hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-1"
                  >
                    Download Resume
                  </a>
                  <a 
                    href="#projects"
                    onClick={(e) => handleNavClick("Projects", e)}
                    className="bg-white border border-slate-200 hover:border-teal/30 text-slate-900 font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[11px] hover:shadow-sm hover:-translate-y-1"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </Section>

            {/* 7. CONTACT SECTION */}
            <Section id="contact" className="mb-24">
              <SectionHeader title="Let's Connect" subtitle="Contact Me" />
              <div className="bg-white p-8 lg:p-12 rounded-[3rem] border border-slate-100 shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                
                {/* Image side */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full md:rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden transform transition-transform hover:scale-[1.02]">
                    <img 
                      src="/rayanincoat.png"
                      alt="Rayan Qouta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details side */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Rayan Qouta</h3>
                  <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto md:mx-0">
                    Biomedical Engineering Student actively looking for co-op and engineering opportunities.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8">
                    <a href="mailto:Rrayan4493@gmail.com" className="bg-gradient-to-r from-navy to-teal hover:from-navy-light hover:to-teal-light text-white font-bold py-4 px-7 rounded-xl transition-all flex items-center justify-center gap-2.5 uppercase tracking-widest text-[11px] shadow-lg shadow-teal/20 hover:-translate-y-0.5">
                       Send an Email
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="bg-slate-50 hover:bg-white border border-slate-200 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2.5 uppercase tracking-widest text-[11px] hover:shadow-md hover:-translate-y-0.5 hover:border-teal/30">
                       <img src={LINKEDIN_LOGO} alt="LinkedIn" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                       LinkedIn
                    </a>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="bg-slate-50 hover:bg-white border border-slate-200 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2.5 uppercase tracking-widest text-[11px] hover:shadow-md hover:-translate-y-0.5 hover:border-teal/30">
                       <img src={GITHUB_LOGO} alt="GitHub" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                       GitHub
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start text-sm text-slate-600 font-medium">
                     <a href="tel:+16478635662" className="flex items-center justify-center md:justify-start gap-2 hover:text-teal transition-colors">
                       <MoveRight size={14} className="text-teal" /> +1 647-863-5662
                     </a>
                     <span className="flex items-center justify-center md:justify-start gap-2">
                       <MoveRight size={14} className="text-teal" /> Toronto, ON
                     </span>
                  </div>
                </div>

              </div>
            </Section>

          </div>
        ) : (
          /* PROJECT DETAIL VIEW */
          <section 
            id={
              selectedProjectId === 1 ? "ecg-signal-acquisition" :
              selectedProjectId === 2 ? "vhdl-cpu-architecture" : 
              selectedProjectId === 3 ? "elderly-fall-detection" :
              selectedProjectId === 4 ? "control-systems-servo-modeling" :
              undefined
            }
            className="project-detail-section max-w-7xl mx-auto"
          >
            <div className="project-header">
              <p className="project-label">{PROJECT_DETAILS[selectedProjectId].label}</p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-slate-900">{PROJECT_DETAILS[selectedProjectId].title}</h1>
                {PROJECT_DETAILS[selectedProjectId].githubUrl && (
                  <a 
                    href={PROJECT_DETAILS[selectedProjectId].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start md:self-auto inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-5 rounded-xl transition-all uppercase tracking-widest text-[11px] shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    <img src={GITHUB_LOGO} alt="GitHub" className="w-4 h-4 invert object-contain" referrerPolicy="no-referrer" />
                    <span>View on GitHub</span>
                    <ExternalLink size={13} className="text-slate-400" />
                  </a>
                )}
              </div>
              <p className="project-summary text-slate-600">
                {PROJECT_DETAILS[selectedProjectId].summary}
              </p>
            </div>

            <div className="project-hero-grid">
              <div className="overflow-hidden rounded-[36px] shadow-2xl aspect-video w-full">
                <ProjectImage 
                  src={PROJECT_DETAILS[selectedProjectId].heroImage} 
                  alt={PROJECT_DETAILS[selectedProjectId].heroImageAlt || "Final Prototype"} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="project-info-card bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4 text-slate-900">Overview</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {PROJECT_DETAILS[selectedProjectId].overview}
                  </p>
                  {PROJECT_DETAILS[selectedProjectId].githubUrl && (
                    <div className="mb-6">
                      <a 
                        href={PROJECT_DETAILS[selectedProjectId].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-xl transition-all shadow-xs hover:border-teal/30"
                      >
                        <img src={GITHUB_LOGO} alt="GitHub" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                        <span>Source Code Repository</span>
                        <ExternalLink size={12} className="text-slate-400" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-200/80">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal"></span>
                    Top Skills Utilized
                  </h3>
                  <div className="project-tags mt-0">
                    {PROJECT_DETAILS[selectedProjectId].tags.map(tag => (
                      <span key={tag} className="project-tag bg-navy text-white">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="project-content-grid">
              {PROJECT_DETAILS[selectedProjectId].sections.map((section, idx) => (
                <div key={idx} className="project-text-block border-slate-100 bg-white">
                  <h2 className="text-xl font-display font-bold mb-4 text-slate-900">{section.title}</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {PROJECT_DETAILS[selectedProjectId].topSkills && (
              <div className="mb-12 bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal"></div>
                  <h2 className="text-2xl font-display font-bold text-slate-900">Top Skills Utilized</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECT_DETAILS[selectedProjectId].topSkills.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-1.5 transition-all hover:border-teal/30 hover:bg-white hover:shadow-sm">
                      <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0"></span>
                        {item.skill}
                      </span>
                      <span className="text-xs text-slate-600 pl-3.5 leading-relaxed">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {PROJECT_DETAILS[selectedProjectId].componentsUsed && (
              <div className="mt-12 bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal"></div>
                  <h2 className="text-2xl font-display font-bold text-slate-900">Hardware & Components Used</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECT_DETAILS[selectedProjectId].componentsUsed.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1 transition-all hover:border-teal/30 hover:bg-white hover:shadow-sm">
                      <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0"></span>
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-600 pl-3.5 leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="project-gallery">
              <h2 className="text-3xl mb-12 text-center text-slate-900">Project Gallery</h2>
              <div className="gallery-grid">
                {PROJECT_DETAILS[selectedProjectId].gallery.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="gallery-card group relative cursor-pointer block border border-slate-200 hover:border-teal/30"
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <div className="relative overflow-hidden w-full h-[230px] bg-slate-50">
                      <ProjectImage src={item.image} alt={item.alt || item.title} className="w-full h-full object-contain p-4.5 transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-105" />
                      <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/95 backdrop-blur-sm text-navy font-bold text-[10px] uppercase tracking-widest py-2.5 px-5 rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Search size={14} /> Click to View
                        </span>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-lg mb-2 text-slate-900 font-display font-bold">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 text-center">
              <button 
                onClick={goHome}
                className="bg-gradient-to-r from-navy to-teal hover:from-navy-light hover:to-teal-light text-white font-bold py-4 px-12 rounded-2xl transition-all uppercase tracking-widest text-[12px] flex items-center justify-center gap-3 mx-auto shadow-xl hover:-translate-y-1 hover:shadow-teal/20"
              >
                <ChevronLeft size={16} />
                Back to Projects
              </button>
            </div>
          </section>
        )}
      </motion.main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 border-t border-slate-200 py-20 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-slate-900">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Connect & Profiles</p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center">
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-slate-700 hover:text-teal transition-colors font-bold uppercase text-[11px] tracking-widest"
              >
                <img src={LINKEDIN_LOGO} alt="LinkedIn" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-slate-700 hover:text-teal transition-colors font-bold uppercase text-[11px] tracking-widest"
              >
                <img src={GITHUB_LOGO} alt="GitHub" className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                <span>GitHub</span>
              </a>
              <a href="mailto:Rrayan4493@gmail.com" className="hover:text-teal transition-colors font-bold uppercase text-[11px] tracking-widest text-slate-700">Email</a>
              <a href="tel:+16478635662" className="hover:text-teal transition-colors font-bold uppercase text-[11px] tracking-widest text-slate-700">Phone</a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">© 2026 Rayan Qouta</p>
            <p className="text-[11px] text-slate-500">Built with React & Engineering Precision.</p>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button 
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.8, pointerEvents: showBackToTop ? "auto" : "none" }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-navy to-teal hover:from-navy-light hover:to-teal-light text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </footer>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && currentProjectDetails && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-900/95 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative border border-slate-200/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top right */}
              <button 
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="flex-1 bg-slate-50 flex items-center justify-center p-8 relative min-h-[40vh] md:min-h-0">
                <ProjectImage 
                  src={currentProjectDetails.gallery[lightboxIndex].image} 
                  alt={currentProjectDetails.gallery[lightboxIndex].title} 
                  className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]" 
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => prev !== null && prev > 0 ? prev - 1 : currentProjectDetails.gallery.length - 1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur rounded-full flex items-center justify-center text-slate-900 shadow-sm transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => prev !== null && prev < currentProjectDetails.gallery.length - 1 ? prev + 1 : 0);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur rounded-full flex items-center justify-center text-slate-900 shadow-sm transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-[360px] p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 bg-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-teal mb-3">
                  {currentProjectDetails.title}
                </p>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                  {currentProjectDetails.gallery[lightboxIndex].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentProjectDetails.gallery[lightboxIndex].description}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] font-medium text-slate-400 uppercase tracking-widest">
                  Image {lightboxIndex + 1} of {currentProjectDetails.gallery.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
