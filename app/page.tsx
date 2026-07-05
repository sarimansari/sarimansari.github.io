'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const name = 'Sarim Ansari';
const siteBasePath = process.env.NODE_ENV === 'production' ? '/sarimansari.github.io' : '';
const skills = [
  'Java',
  'Spring Boot',
  'Microservices',
  'GenAI',
  'Agentic RAG',
  'LangChain',
  'LLMs',
  'Angular',
  'Snowflake',
  'MongoDB',
  'Redis',
  'Apache Kafka',
  'System Design',
];

const companies = ['Morgan Stanley', 'Accolite Digital', 'Infosys'];

const projects = [
  {
    title: 'GenAI Analytics Platform',
    description: 'Natural language querying over Snowflake',
    tech: ['LangChain', 'Snowflake Cortex', 'Java'],
  },
  {
    title: 'Real-time Data Pipeline',
    description: 'Kafka-based system reducing latency to milliseconds',
    tech: ['Kafka', 'Spring Boot'],
  },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarimansari/' },
  { label: 'GitHub', href: 'https://github.com/sarimansari' },
  { label: 'Instagram', href: 'https://www.instagram.com/isarimansari/' },
  { label: 'Email', href: 'mailto:ansarisarim55@gmail.com' },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(28);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = () => setCursorSize(44);
    const handleMouseUp = () => setCursorSize(28);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030303] text-[#f5f5f5]">
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ y }}
        aria-hidden="true"
      >
        <div className="glow-orb absolute left-[10%] top-[12%] h-56 w-56 rounded-full bg-[#cccccc]/10 blur-3xl" />
        <div className="glow-orb absolute right-[6%] top-[28%] h-72 w-72 rounded-full bg-[#cccccc]/8 blur-3xl" />
        <div className="glow-orb absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-[#cccccc]/10 blur-3xl" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed z-40 rounded-full border border-[#cccccc]/30 bg-[#cccccc]/10 backdrop-blur-xl"
        style={{
          left: mousePosition.x - cursorSize / 2,
          top: mousePosition.y - cursorSize / 2,
          width: cursorSize,
          height: cursorSize,
          boxShadow: '0 0 60px rgba(204, 204, 204, 0.15)',
        }}
      />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#030303]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-sm font-medium tracking-[0.3em] text-[#cccccc] uppercase">
            SARIM
          </a>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="transition hover:text-[#cccccc]">About</a>
            <a href="#experience" className="transition hover:text-[#cccccc]">Experience</a>
            <a href="#skills" className="transition hover:text-[#cccccc]">Skills</a>
            <a href="#projects" className="transition hover:text-[#cccccc]">Projects</a>
            <a href="#contact" className="transition hover:text-[#cccccc]">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#cccccc]">Software Engineer • GenAI</p>
            <h1 className="mb-6 text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              {name.split('').map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.045, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="ml-1 inline-block h-8 w-[2px] bg-[#cccccc] align-middle"
              />
            </h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="mb-6 max-w-2xl text-lg text-white/70 sm:text-xl">
              Crafting AI-powered platforms that think, scale, and evolve
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }} className="mb-8 max-w-2xl text-base leading-7 text-white/60">
              Senior Software Engineer with 8+ years of experience building scalable systems, now focused on GenAI and intelligent platforms.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }} className="flex flex-wrap gap-4">
              <a href={`${siteBasePath}/Profile.pdf`} target="_blank" rel="noreferrer" className="rounded-full border border-[#cccccc]/50 px-5 py-3 text-sm font-medium text-[#cccccc] transition hover:-translate-y-0.5 hover:border-[#cccccc] hover:bg-[#cccccc]/10">
                Download Resume
              </a>
              <a href="#contact" className="rounded-full bg-[#cccccc] px-5 py-3 text-sm font-medium text-[#030303] transition hover:-translate-y-0.5">
                Connect
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }} className="mt-8 flex flex-wrap gap-4 text-sm text-white/50">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-[#cccccc]">
                  {item.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[#cccccc]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-transparent shadow-none">
              <img
                src="https://res.cloudinary.com/atuyae0l/image/upload/f_auto,q_auto/CD936988-7167-4587-9385-9BE56039E731_2-removebg-preview_yd5qdp"
                alt="AI and coding concept"
                className="w-full rounded-[2rem] object-contain opacity-55"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(3,3,3,0.005),_rgba(3,3,3,0.05)_50%,_rgba(3,3,3,0.99)_100%)]" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#cccccc]">About</p>
          <p className="max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            I like building systems that scale, but now I’m more interested in systems that think.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
            I’m a full-stack engineer focused on GenAI, backend systems, and clean UI. Over the years, I’ve worked on enterprise-scale platforms, real-time systems, and modern architectures. I enjoy simplifying complex problems and turning them into elegant, efficient solutions.
          </p>
        </motion.div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#cccccc]">Experience</p>
          <div className="grid gap-4 md:grid-cols-3">
            {companies.map((company) => (
              <motion.div key={company} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-6 text-lg font-medium text-white/80 transition hover:border-[#cccccc]/40 hover:bg-[#cccccc]/10">
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#cccccc]">Skills</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <motion.span key={skill} whileHover={{ y: -2, scale: 1.02, boxShadow: '0 0 0 1px rgba(204,204,204,0.25)' }} className="rounded-full border border-[#cccccc]/20 bg-[#cccccc]/10 px-4 py-2 text-sm text-white/80">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#cccccc]">Projects</p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article key={project.title} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/60">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-[#cccccc]/20 bg-[#cccccc]/10 px-3 py-1.5 text-sm text-[#cccccc]">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#cccccc]">Contact</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build something thoughtful.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
            Reach out for collaborations, product ideas, or conversations around intelligent platforms.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <a href="mailto:ansarisarim55@gmail.com" className="transition hover:text-[#cccccc]">ansarisarim55@gmail.com</a>
            {socials.filter((item) => item.label !== 'Email').map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-[#cccccc]">
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
