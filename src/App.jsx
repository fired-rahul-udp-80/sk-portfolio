import React, { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Palette,
  Rocket,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import {
  education,
  experience,
  profile,
  projects,
  services,
  skills,
  stats,
} from "./data/portfolioData";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
  { label: "Hire Me", id: "contact", highlight: true },
];

const serviceIcons = [Laptop, Palette, Code2, UserRound];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-coal text-white">
      <BackgroundEffects />
      <Header
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((value) => !value)}
        onNavigate={scrollToSection}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
    </main>
  );
}

function Header({ isMenuOpen, onToggle, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-coal/78 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          className="group flex items-center gap-3"
          onClick={() => onNavigate("home")}
          aria-label="Go to home"
        >
          <span className="grid h-11 w-11 place-items-center rounded border border-blood-500/50 bg-blood-500/15 text-blood-100 shadow-glow">
            <Code2 size={22} />
          </span>
          <span className="text-lg font-black tracking-[0.08em]">{profile.brand}</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={`${item.label}-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={
                item.highlight
                  ? "rounded bg-blood-500 px-4 py-2 text-sm font-black text-white shadow-glow transition hover:bg-blood-600"
                  : "rounded px-4 py-2 text-sm font-semibold text-ash transition hover:bg-white/10 hover:text-white"
              }
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded border border-white/10 bg-white/5 lg:hidden"
          onClick={onToggle}
          aria-label="Open navigation menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-coal px-5 py-4 lg:hidden">
          {navItems.map((item) => (
            <button
              key={`${item.label}-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className="block w-full rounded px-3 py-3 text-left text-sm font-semibold text-ash hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-blood-500/40 bg-blood-500/10 px-4 py-2 text-sm font-bold text-blood-100">
            <Sparkles size={16} />
            Available For Freelance
          </div>
          <p className="text-lg font-bold text-ash">Hi, I&apos;m</p>
          <h1 className="mt-2 max-w-4xl text-5xl font-black leading-[0.98] sm:text-7xl lg:text-8xl">
            {profile.name}
            <span className="block text-blood-500">{profile.role}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ash sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded bg-blood-500 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-glow transition hover:-translate-y-1 hover:bg-blood-600"
            >
              Hire Me
              <ArrowUpRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:border-blood-500/70"
            >
              My Projects
              <Rocket size={18} />
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="border-l border-blood-500/50 pl-4">
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-sm text-ash">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[480px] animate-float-slow">
          <div className="absolute inset-4 rotate-6 rounded border border-blood-500/40 bg-blood-500/10 shadow-glow" />
          <div className="absolute inset-0 -rotate-3 overflow-hidden rounded border border-white/12 bg-iron shadow-hard">
            <div className="absolute inset-x-0 top-0 flex h-12 items-center gap-2 border-b border-white/10 bg-black/50 px-5">
              <span className="h-3 w-3 rounded-full bg-blood-500" />
              <span className="h-3 w-3 rounded-full bg-white/25" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
            </div>
            <div className="flex h-full flex-col justify-center p-8 pt-16">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blood-300">
                Building Modern Experiences
              </p>
              <p className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                React.
                <span className="block text-blood-500">Tailwind.</span>
                JavaScript.
              </p>
              <p className="mt-6 text-base leading-7 text-ash">{profile.summary}</p>
            </div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blood-500/20 to-transparent" />
            <div className="absolute inset-x-0 top-24 h-px animate-scan-line bg-blood-500/70" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Building Modern Experiences">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded border border-blood-500/40 bg-blood-500/10 p-7">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blood-100">
            {profile.role}
          </p>
          <h3 className="mt-4 text-3xl font-black leading-tight">
            Final year B.Tech student focused on frontend craft.
          </h3>
          <p className="mt-5 leading-7 text-ash">{profile.tagline}</p>
        </div>
        <div className="rounded border border-white/10 bg-white/[0.035] p-7">
          <p className="leading-8 text-ash">{profile.summary}</p>
          <p className="mt-6 leading-8 text-ash">{profile.goal}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Supabase"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-blood-100"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="My Skills" title="Technologies I Use">
      <p className="-mt-8 mb-10 max-w-3xl text-lg leading-8 text-ash">
        Technologies and tools that help me build fast, scalable and modern web
        applications.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group rounded border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-2 hover:border-blood-500/60 hover:bg-blood-500/10"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-2xl font-black">{skill.name}</p>
                <p className="mt-1 text-sm font-semibold text-ash">{skill.category}</p>
              </div>
              <span className="text-lg font-black text-blood-300">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded bg-white/10">
              <div
                className="h-full rounded bg-blood-500 shadow-glow transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Modern React Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex min-h-[300px] flex-col justify-between rounded border border-white/10 bg-iron p-6 shadow-hard transition duration-300 hover:-translate-y-2 hover:border-blood-500/70"
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded bg-blood-500/15 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blood-100">
                  {project.type}
                </span>
                <a
                  href={project.link}
                  aria-label={`Open ${project.title}`}
                  className="grid h-10 w-10 place-items-center rounded bg-white/5 text-white transition group-hover:bg-blood-500"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <h3 className="text-3xl font-black">{project.title}</h3>
              <p className="mt-4 leading-7 text-ash">{project.description}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded border border-white/10 px-3 py-2 text-xs font-bold text-ash"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Freelance Services">
      <p className="-mt-8 mb-10 max-w-3xl text-lg leading-8 text-ash">
        Helping businesses, startups and individuals create modern digital experiences
        with high-quality web solutions.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = serviceIcons[index] ?? BriefcaseBusiness;
          return (
            <article
              key={service.title}
              className="rounded border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-2 hover:border-blood-500/60 hover:bg-blood-500/10"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded bg-blood-500/15 text-blood-100">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-ash">{service.description}</p>
            </article>
          );
        })}
      </div>
      <a
        href="#contact"
        className="mt-10 inline-flex items-center gap-2 rounded bg-blood-500 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-glow transition hover:-translate-y-1 hover:bg-blood-600"
      >
        Start a Project
        <ArrowUpRight size={18} />
      </a>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Education" title="Learning Path And Experience">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.title} className="rounded border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded bg-blood-500/15 text-blood-100">
                  <GraduationCap size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold text-blood-300">{item.year}</p>
                  <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ash">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <div key={item.title} className="rounded border border-white/10 bg-iron p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-black">{item.title}</h3>
                <span className="text-sm font-bold text-blood-300">{item.period}</span>
              </div>
              <p className="mt-4 leading-7 text-ash">{item.description}</p>
            </div>
          ))}
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center justify-center gap-2 rounded border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:border-blood-500/70"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded border border-blood-500/50 bg-blood-500 p-px shadow-glow">
        <div className="grid gap-8 rounded bg-coal p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blood-100">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-ash">
              Have a project idea or want to collaborate? Feel free to send a message
              and I&apos;ll get back to you soon.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-4 text-ash transition hover:border-blood-500/70 hover:text-white"
              >
                <Mail size={20} className="text-blood-300" />
                {profile.email}
              </a>
              <div className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-4 text-ash">
                <MapPin size={20} className="text-blood-300" />
                {profile.location}
              </div>
              <div className="flex gap-3">
                <SocialIcon label="GitHub" icon={<Github size={20} />} />
                <SocialIcon label="LinkedIn" icon={<Linkedin size={20} />} />
              </div>
            </div>
          </div>
          <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-ash">
                Your Name
                <input
                  className="rounded border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blood-500"
                  placeholder="Your Name"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-ash">
                Email Address
                <input
                  className="rounded border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blood-500"
                  placeholder="Email Address"
                  type="email"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-ash">
              Message
              <textarea
                className="min-h-40 resize-none rounded border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blood-500"
                placeholder="Write your message..."
              />
            </label>
            <button
              className="inline-flex items-center justify-center gap-2 rounded bg-blood-500 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-glow transition hover:-translate-y-1 hover:bg-blood-600"
              type="submit"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ label, icon }) {
  const href = profile.socials.find((item) => item.label === label)?.href ?? "#";

  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded border border-white/10 bg-white/5 text-ash transition hover:-translate-y-1 hover:border-blood-500/70 hover:bg-blood-500 hover:text-white"
    >
      {icon}
    </a>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blood-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(229,9,20,0.24),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,#08080a_0%,#111114_45%,#290307_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blood-500/18 to-transparent" />
    </div>
  );
}

export default App;
