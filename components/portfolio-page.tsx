"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, ClipboardCheck, Database, Download, ExternalLink, FlaskConical, GitBranch, Mail, MapPin, Menu, Moon, Send, Sun, X } from "lucide-react";
import type { IconType } from "react-icons";
import { FaCss3Alt } from "react-icons/fa";
import { SiAndroid, SiDjango, SiFigma, SiFlutter, SiGit, SiGithub, SiHtml5, SiJavascript, SiJest, SiJunit5, SiMongodb, SiMysql, SiNextdotjs, SiOpenjdk, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiSentry, SiSpringboot, SiSwagger } from "react-icons/si";
import { portfolio } from "@/data/portfolio";

const navItems = [
  ["about", "About"], ["experience", "Experience"], ["skills", "Stack"],
  ["projects", "Projects"], ["education", "Education"], ["contact", "Contact"],
] as const;

const skillIcons: Record<string, IconType> = {
  react: SiReact,
  "next.js": SiNextdotjs,
  javascript: SiJavascript,
  html: SiHtml5,
  css: FaCss3Alt,
  python: SiPython,
  php: SiPhp,
  java: SiOpenjdk,
  "spring boot": SiSpringboot,
  "rest apis": SiSwagger,
  django: SiDjango,
  flutter: SiFlutter,
  android: SiAndroid,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  "junit 5": SiJunit5,
  jest: SiJest,
  postman: SiPostman,
  sentry: SiSentry,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
};

function SkillIcon({ name }: { name: string }) {
  if (name === "SQL") return <Database aria-hidden="true" />;
  if (name === "API Testing") return <FlaskConical aria-hidden="true" />;
  if (name === "Software Testing") return <ClipboardCheck aria-hidden="true" />;
  const Icon = skillIcons[name.toLowerCase()];
  return Icon ? <Icon aria-hidden="true" /> : <strong>{name.replace(/[^A-Za-z+#]/g, "").slice(0, 3).toUpperCase()}</strong>;
}

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return <div className="section-heading reveal"><span>{number}</span><div><p>{eyebrow}</p><h2>{title}</h2></div></div>;
}

function BrandMark() {
  const p = portfolio.person;
  return p.profileImage ? <img className="brand-photo" src={p.profileImage} alt="" /> : <span>{p.initials}</span>;
}

function ThemeToggle() {
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const initial = saved ? saved === "dark" : true;
    document.documentElement.classList.toggle("dark", initial);
  }, []);
  const toggle = () => { const next = !document.documentElement.classList.contains("dark"); document.documentElement.classList.toggle("dark", next); localStorage.setItem("portfolio-theme", next ? "dark" : "light"); };
  return <button className="icon-button theme-toggle" onClick={toggle} aria-label="Toggle color theme"><Sun className="sun-icon" size={18} /><Moon className="moon-icon" size={18} /></button>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Main navigation">
    <a href="#top" className="brand" aria-label="Home"><BrandMark/><strong>{portfolio.person.name}</strong></a>
    <div className="nav-links">{navItems.filter(([key]) => portfolio.sections[key]).map(([key, label]) => <a key={key} href={`#${key}`}>{label}</a>)}</div>
    <div className="nav-actions"><ThemeToggle /><a className="nav-cta" href={`mailto:${portfolio.person.email}`}>Let&apos;s talk <ArrowUpRight size={16} /></a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div>
  </nav>{open && <div className="mobile-menu">{navItems.filter(([key]) => portfolio.sections[key]).map(([key, label]) => <a key={key} href={`#${key}`} onClick={() => setOpen(false)}>{label}</a>)}</div>}</header>;
}

function Hero() {
  const p = portfolio.person;
  return <section id="top" className="hero shell">
    <div className="hero-copy reveal"><div className="profile-ring">{p.profileImage ? <img className="profile-photo" src={p.profileImage} alt={`Portrait of ${p.name}`} /> : <span>{p.initials}</span>}</div><div className="availability"><i />{p.availability}</div><p className="kicker">HELLO, I&apos;M</p><h1>{p.name}</h1><h2>{p.headline}</h2><p className="hero-intro">{p.intro}</p>
      <div className="hero-actions"><a className="primary-button" href="#projects">Explore my work <ArrowDown size={18} /></a>{p.resumeUrl ? <a className="secondary-button" href={p.resumeUrl} download>Download CV <Download size={18} /></a> : <a className="secondary-button" href="#contact">Request my CV <Mail size={18} /></a>}</div>
      <div className="social-row"><span><MapPin size={15}/>{p.location}</span><a href={p.socials.github} target="_blank" rel="noreferrer"><GitBranch size={17}/>GitHub</a><a href={p.socials.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17}/>LinkedIn</a></div>
    </div>
  </section>;
}

function About() { const a = portfolio.about; return <section id="about" className="section shell"><SectionHeading number="01" eyebrow={a.eyebrow} title={a.title}/><div className="about-cards">{a.cards.map(card => <article className="about-card reveal" key={card.title}><span className="about-icon" aria-hidden="true">{card.icon}</span><h3>{card.title}</h3><ul>{card.items.map(item => <li key={item.text}><span>{item.text}</span>{item.date && <time>{item.date}</time>}</li>)}</ul></article>)}</div></section>; }

function Experience() { return <section id="experience" className="section shell"><SectionHeading number="02" eyebrow="Where I’ve contributed" title="Experience"/><div className="timeline">{portfolio.experience.map((e, i) => <article className="timeline-item reveal" key={e.company + e.role}><div className="timeline-meta"><span>0{i + 1}</span><p>{e.period}</p><small>{e.location}</small></div><div className="timeline-content"><p className="eyebrow">{e.company}</p><h3>{e.role}</h3><p>{e.summary}</p><ul>{e.achievements.map(x => <li key={x}><Check size={16}/>{x}</li>)}</ul><div className="tags">{e.technologies.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div></section>; }

function Projects() { return <section id="projects" className="section shell"><SectionHeading number="03" eyebrow="What I’ve built" title="Projects"/><div className="projects-grid">{portfolio.projects.map(p => <article className="project-card reveal" key={p.title}><div className="project-cover" style={p.image ? {backgroundImage:`url(${p.image})`} : undefined}>{!p.image && <span>{p.title.split(" ").map(x => x[0]).join("").slice(0,3)}</span>}</div><div className="project-body"><p className="eyebrow">{p.category}</p><div className="tags">{p.technologies.map(t => <span key={t}>{t}</span>)}</div><h3>{p.title}</h3><p>{p.description}</p><div className="project-links">{p.demo && <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink/>{p.demoLabel || "Live demo"}</a>}{p.github && <a href={p.github} target="_blank" rel="noreferrer"><GitBranch/>GitHub</a>}{portfolio.projectsNote && <span>{portfolio.projectsNote}</span>}</div></div></article>)}</div></section>; }

function Skills() { return <section id="skills" className="section shell"><SectionHeading number="02" eyebrow="What I work with" title="Tech Stack"/><div className="skill-groups">{portfolio.skills.map(s => <article className="skill-group reveal" key={s.group}><h3>{s.group}</h3><div>{s.items.map(x => <div className="skill-tile" key={x}><SkillIcon name={x}/><span>{x}</span></div>)}</div></article>)}</div></section>; }

function Education() { return <section id="education" className="section shell"><SectionHeading number="05" eyebrow="The foundation" title="Education"/><div className="education-list">{portfolio.education.map(e => <article className="education-card reveal" key={e.school}><div><p className="eyebrow">{e.period}</p><h3>{e.qualification}</h3><strong>{e.school}</strong></div><p>{e.note}</p></article>)}</div></section>; }

function Contact() {
  const [sent, setSent] = useState(false); const c = portfolio.contact;
  function submit(e: FormEvent<HTMLFormElement>) { if (c.formEndpoint) return; e.preventDefault(); const fd = new FormData(e.currentTarget); window.location.href = `mailto:${portfolio.person.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${fd.get("name")}`)}&body=${encodeURIComponent(String(fd.get("message")))}`; setSent(true); }
  return <section id="contact" className="contact"><div className="shell contact-grid"><div className="reveal"><p className="eyebrow">04 — SAY HELLO</p><h2>{c.title}</h2><p>{c.description}</p><a href={`mailto:${portfolio.person.email}`}><Mail size={18}/>{portfolio.person.email}</a></div>{c.showForm && <form className="contact-form reveal" action={c.formEndpoint || undefined} method="POST" onSubmit={submit}><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required name="email" type="email" placeholder="you@example.com"/></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me a little about your idea..."/></label><button className="primary-button" type="submit">{sent ? "Opening your email…" : "Send message"}<Send size={17}/></button></form>}</div></section>;
}

export function PortfolioPage() {
  useEffect(() => { document.documentElement.style.setProperty("--accent", portfolio.site.accent); const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 }); document.querySelectorAll(".reveal").forEach(el => observer.observe(el)); return () => observer.disconnect(); }, []);
  const s = portfolio.sections;
  return <><Navbar/><main><Hero/>{s.about && <About/>}{s.experience && <Experience/>}{s.skills && <Skills/>}{s.projects && <Projects/>}{s.education && <Education/>}{s.contact && <Contact/>}</main><footer><div className="shell"><a href="#top" className="brand"><BrandMark/><strong>{portfolio.person.name}</strong></a><p>Built with Next.js.</p><a href="#top">Back to top ↑</a></div></footer></>;
}
