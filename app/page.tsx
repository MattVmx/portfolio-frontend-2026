"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Language = "es" | "en";
type Theme = "light" | "dark";
type Category = "all" | "apps" | "web" | "ui";
type SkillGroup = "frontend" | "backend" | "tools";
type Localized = Record<Language, string>;

type Project = {
  id: string;
  index: string;
  title: string;
  category: Exclude<Category, "all">;
  eyebrow: Localized;
  summary: Localized;
  outcome: Localized;
  highlights: Record<Language, string[]>;
  stack: string[];
  status: Localized;
  accent: string;
  image: string;
  href: string;
  hrefLabel: Localized;
};

const categories: Category[] = ["all", "apps", "web", "ui"];
const skillGroups: SkillGroup[] = ["frontend", "backend", "tools"];

const copy = {
  es: {
    navProjects: "Proyectos",
    navProfile: "Perfil",
    navAria: "Navegación principal",
    home: "Inicio",
    skipToContent: "Saltar al contenido",
    contact: "Contacto",
    theme: "Cambiar tema",
    language: "Cambiar a inglés",
    available: "Disponible para oportunidades frontend",
    kicker: "Frontend Developer",
    heroA: "Desarrollador Frontend",
    heroLead: "Soy Matías Speroni. Desarrollo experiencias web responsive y cuidadas, combinando React, APIs, testing y criterio visual.",
    viewProjects: "Ver proyectos",
    linkedin: "Contactar por LinkedIn",
    profileLabel: "Perfil profesional",
    focus: "Foco",
    extra: "Extra",
    languageShort: "Idioma",
    frontend: "Frontend",
    qa: "QA",
    english: "Inglés C2",
    projectsIndex: "01 / PROYECTOS",
    projectsTitleA: "Proyectos",
    projectsTitleB: "seleccionados.",
    projectsIntro: "Una selección de aplicaciones, sitios web y diseño UI. Cada tarjeta abre el caso completo y su enlace original.",
    categoryLabels: { all: "Todos", apps: "Aplicaciones", web: "Sitios web", ui: "Diseño UI" } as Record<Category, string>,
    profileIndex: "02 / PERFIL",
    profileTitleA: "Experiencia",
    profileTitleB: "y enfoque.",
    profileText: "Desarrollador frontend enfocado en React, con experiencia trabajando con APIs y aplicaciones full-stack. Sumo testing, datos y herramientas visuales para entender el producto completo.",
    timeline: [
      ["Frontend", "Interfaz y producto", "React, JavaScript, TypeScript, HTML y CSS para experiencias responsive."],
      ["Calidad", "QA testing", "Pruebas manuales, validación responsive y control de calidad de interfaces."],
      ["Versatilidad", "CMS y diseño", "WordPress y Figma para resolver desde el prototipo hasta un sitio administrable."],
    ],
    techTitle: "Tecnologías y herramientas",
    techHint: "Elegí un área",
    groupLabels: { frontend: "Frontend", backend: "Backend", tools: "Herramientas" } as Record<SkillGroup, string>,
    communication: "Comunicación",
    languageValue: "Español nativo · Inglés C2",
    languageNote: "Preparado para colaborar en equipos locales o internacionales.",
    contactPrompt: "Disponible para roles frontend, QA y proyectos web.",
    contactTitleA: "Contacto",
    contactTitleB: "",
    email: "Escribime por email",
    result: "Resultado",
    features: "Características",
    close: "Cerrar detalle",
    open: "Abrir",
  },
  en: {
    navProjects: "Projects",
    navProfile: "Profile",
    navAria: "Main navigation",
    home: "Home",
    skipToContent: "Skip to content",
    contact: "Contact",
    theme: "Switch theme",
    language: "Cambiar a español",
    available: "Available for frontend opportunities",
    kicker: "Frontend Developer",
    heroA: "Frontend Developer",
    heroLead: "I’m Matías Speroni. I build polished, responsive web experiences by combining React, APIs, testing and a strong visual eye.",
    viewProjects: "View projects",
    linkedin: "Contact me on LinkedIn",
    profileLabel: "Professional profile",
    focus: "Focus",
    extra: "Extra",
    languageShort: "Language",
    frontend: "Frontend",
    qa: "QA",
    english: "English C2",
    projectsIndex: "01 / PROJECTS",
    projectsTitleA: "Selected",
    projectsTitleB: "projects.",
    projectsIntro: "A selection of applications, websites and UI work. Open any card to explore the full case and its original link.",
    categoryLabels: { all: "All", apps: "Applications", web: "Websites", ui: "UI Design" } as Record<Category, string>,
    profileIndex: "02 / PROFILE",
    profileTitleA: "Experience",
    profileTitleB: "and focus.",
    profileText: "Frontend developer focused on React, with experience working with APIs and full-stack applications. I also use testing, data and visual tools to understand the complete product.",
    timeline: [
      ["Frontend", "Interface and product", "React, JavaScript, TypeScript, HTML and CSS for responsive experiences."],
      ["Quality", "QA testing", "Manual testing, responsive validation and interface quality checks."],
      ["Versatility", "CMS and design", "WordPress and Figma, from early prototypes to manageable websites."],
    ],
    techTitle: "Technologies and tools",
    techHint: "Choose an area",
    groupLabels: { frontend: "Frontend", backend: "Backend", tools: "Tools" } as Record<SkillGroup, string>,
    communication: "Communication",
    languageValue: "Native Spanish · English C2",
    languageNote: "Ready to collaborate with local or international teams.",
    contactPrompt: "Available for frontend, QA and web project opportunities.",
    contactTitleA: "Contact",
    contactTitleB: "",
    email: "Send me an email",
    result: "Outcome",
    features: "Features",
    close: "Close project details",
    open: "Open",
  },
};

const projects: Project[] = [
  {
    id: "vitalidapp",
    index: "01",
    title: "Vitalidapp",
    category: "apps",
    eyebrow: { es: "Aplicación full-stack · Salud", en: "Full-stack application · Healthcare" },
    summary: { es: "Plataforma de servicios de salud con gestión de citas, usuarios y flujos diferenciados por rol.", en: "Healthcare services platform with appointment scheduling, user management and role-based workflows." },
    outcome: { es: "Una experiencia completa para encontrar especialidades, administrar usuarios y organizar turnos desde una interfaz clara.", en: "A complete experience for finding specialties, managing users and scheduling appointments through a clear interface." },
    highlights: {
      es: ["Gestión de citas y usuarios", "Acceso por roles con Spring Security", "Interfaz responsive renderizada con Thymeleaf"],
      en: ["Appointment and user management", "Role-based access with Spring Security", "Responsive interface rendered with Thymeleaf"],
    },
    stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    status: { es: "Código disponible", en: "Source available" },
    accent: "#79d56b",
    image: "/images/vitalidapp.webp",
    href: "https://github.com/MattVmx/vitalidapp",
    hrefLabel: { es: "Ver código en GitHub", en: "View source on GitHub" },
  },
  {
    id: "punta-glacial",
    index: "02",
    title: "Punta Glacial",
    category: "web",
    eyebrow: { es: "Sitio web · Heladería", en: "Website · Ice cream shop" },
    summary: { es: "Sitio moderno para una heladería, con una identidad colorida y secciones pensadas para presentar productos y marca.", en: "A modern ice cream shop website with a colorful identity and sections designed to showcase products and brand." },
    outcome: { es: "Una vidriera digital cálida y fácil de recorrer que combina catálogo, historia y puntos de contacto.", en: "A warm, easy-to-browse digital storefront combining products, brand story and contact points." },
    highlights: {
      es: ["Identidad visual aplicada a toda la interfaz", "Jerarquía de productos y especialidades", "Recorrido responsive entre secciones"],
      en: ["Consistent visual identity", "Product and specialty hierarchy", "Responsive section flow"],
    },
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    status: { es: "Demo online", en: "Live demo" },
    accent: "#ef3f86",
    image: "/images/heladeria.webp",
    href: "https://mattvmx.github.io/puntaglacial-web/",
    hrefLabel: { es: "Visitar sitio", en: "Visit website" },
  },
  {
    id: "macrotec",
    index: "03",
    title: "Macrotec",
    category: "web",
    eyebrow: { es: "Sitio web · Inmobiliaria", en: "Website · Real estate" },
    summary: { es: "Plataforma inmobiliaria con presentación institucional, catálogo de propiedades y búsqueda orientada a oportunidades.", en: "Real estate platform with company information, a property catalog and opportunity-focused search." },
    outcome: { es: "Un sitio sobrio que ordena información compleja y dirige la atención hacia propiedades, servicios y contacto.", en: "A clean website that organizes complex information and guides attention to properties, services and contact." },
    highlights: {
      es: ["Catálogo y exploración de propiedades", "Arquitectura de información institucional", "Diseño adaptable a distintas pantallas"],
      en: ["Property catalog and exploration", "Corporate information architecture", "Responsive interface"],
    },
    stack: ["HTML5", "CSS3", "JavaScript", "UI Web"],
    status: { es: "Demo online", en: "Live demo" },
    accent: "#1976d2",
    image: "/images/macrotec.webp",
    href: "https://mattvmx.github.io/macrotec-web/",
    hrefLabel: { es: "Visitar sitio", en: "Visit website" },
  },
  {
    id: "supremo",
    index: "04",
    title: "Supremo",
    category: "web",
    eyebrow: { es: "Sitio web · Restaurante", en: "Website · Restaurant" },
    summary: { es: "Experiencia web para restaurante con una estética elegante, menú visual y accesos a reservas y delivery.", en: "Restaurant website with an elegant aesthetic, visual menu and quick access to bookings and delivery." },
    outcome: { es: "Una interfaz donde la fotografía gastronómica lidera el recorrido y convierte la navegación en una experiencia apetecible.", en: "An interface where food photography leads the experience and makes navigation genuinely appetizing." },
    highlights: {
      es: ["Menú visual con categorías", "Accesos a reservas y contacto", "Composición editorial centrada en producto"],
      en: ["Category-based visual menu", "Bookings and contact access", "Product-centered editorial layout"],
    },
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive"],
    status: { es: "Demo online", en: "Live demo" },
    accent: "#c29b54",
    image: "/images/supremo.webp",
    href: "https://mattvmx.github.io/supremo-web/",
    hrefLabel: { es: "Visitar sitio", en: "Visit website" },
  },
  {
    id: "sucar",
    index: "05",
    title: "Sucar",
    category: "web",
    eyebrow: { es: "Sitio web · Concesionaria", en: "Website · Car dealership" },
    summary: { es: "Sitio para una concesionaria con catálogo de vehículos, presentación comercial y opciones directas de contacto.", en: "Car dealership website with a vehicle catalog, commercial presentation and direct contact options." },
    outcome: { es: "Una portada de alto impacto que conduce rápidamente al catálogo, los avisos y la consulta comercial.", en: "A high-impact homepage that quickly guides visitors to inventory, listings and sales inquiries." },
    highlights: {
      es: ["Catálogo orientado a conversión", "Navegación comercial directa", "Uso de imagen y contraste para guiar la mirada"],
      en: ["Conversion-focused catalog", "Direct commercial navigation", "Image and contrast used to guide attention"],
    },
    stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "UI Web"],
    status: { es: "Demo online", en: "Live demo" },
    accent: "#3aa6e9",
    image: "/images/sucar.webp",
    href: "https://mattvmx.github.io/sucar-web/",
    hrefLabel: { es: "Visitar sitio", en: "Visit website" },
  },
  {
    id: "app-design",
    index: "06",
    title: "App Design",
    category: "ui",
    eyebrow: { es: "Landing · Diseño visual", en: "Landing page · Visual design" },
    summary: { es: "Concepto visual para una experiencia de descarga con una identidad gráfica intensa y llamados a la acción claros.", en: "Visual concept for a download experience with a bold graphic identity and clear calls to action." },
    outcome: { es: "Una landing breve, expresiva y enfocada en una sola acción, con contraste fuerte y lectura inmediata.", en: "A concise, expressive landing page focused on one action, strong contrast and immediate readability." },
    highlights: {
      es: ["Dirección visual y sistema de color", "Jerarquía tipográfica de alto impacto", "Flujo simple orientado a descarga"],
      en: ["Visual direction and color system", "High-impact type hierarchy", "Simple download-focused flow"],
    },
    stack: ["UI/UX", "HTML5", "CSS3", "Visual Design"],
    status: { es: "Demo online", en: "Live demo" },
    accent: "#fa3986",
    image: "/images/app.webp",
    href: "https://mattvmx.github.io/app-visual-design/",
    hrefLabel: { es: "Visitar diseño", en: "View design" },
  },
];

const skills = [
  { abbr: "Re", name: "React", group: "frontend" as SkillGroup, note: { es: "Interfaces por componentes", en: "Component-based interfaces" } },
  { abbr: "JS", name: "JavaScript", group: "frontend" as SkillGroup, note: { es: "Interacción y lógica", en: "Interaction and client logic" } },
  { abbr: "TS", name: "TypeScript", group: "frontend" as SkillGroup, note: { es: "Código tipado y mantenible", en: "Typed, maintainable code" } },
  { abbr: "</>", name: "HTML5", group: "frontend" as SkillGroup, note: { es: "Estructura semántica", en: "Semantic structure" } },
  { abbr: "#", name: "CSS3", group: "frontend" as SkillGroup, note: { es: "Responsive y detalle visual", en: "Responsive visual detail" } },
  { abbr: "Ja", name: "Java", group: "backend" as SkillGroup, note: { es: "Aplicaciones full-stack", en: "Full-stack applications" } },
  { abbr: "No", name: "Node.js", group: "backend" as SkillGroup, note: { es: "Entorno y servicios web", en: "Runtime and web services" } },
  { abbr: "DB", name: "MySQL", group: "backend" as SkillGroup, note: { es: "Datos relacionales", en: "Relational data" } },
  { abbr: "API", name: "REST APIs", group: "backend" as SkillGroup, note: { es: "Integración de servicios", en: "Service integration" } },
  { abbr: "Wp", name: "WordPress", group: "tools" as SkillGroup, note: { es: "CMS y sitios administrables", en: "CMS and manageable websites" } },
  { abbr: "Fi", name: "Figma", group: "tools" as SkillGroup, note: { es: "Diseño y prototipado UI", en: "UI design and prototyping" } },
  { abbr: "Git", name: "Git", group: "tools" as SkillGroup, note: { es: "Control de versiones", en: "Version control" } },
  { abbr: "Bs", name: "Bootstrap", group: "tools" as SkillGroup, note: { es: "Prototipado responsive", en: "Responsive prototyping" } },
  { abbr: "QA", name: "QA Testing", group: "tools" as SkillGroup, note: { es: "Pruebas manuales y validación responsive", en: "Manual testing and responsive validation" } },
  { abbr: "Ps/Ai", name: "Adobe CC", group: "tools" as SkillGroup, note: { es: "Photoshop e Illustrator para recursos web", en: "Photoshop and Illustrator for web assets" } },
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" /></svg>;
}

function CloseIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

function SunIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></svg>;
}

function MoonIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5 8.5 8.5 0 1 0 20.5 14.3Z" /></svg>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const [theme, setTheme] = useState<Theme>("light");
  const [category, setCategory] = useState<Category>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [skillGroup, setSkillGroup] = useState<SkillGroup>("frontend");
  const modalCloseRef = useRef<HTMLButtonElement | null>(null);
  const projectTriggerRef = useRef<HTMLElement | null>(null);
  const t = copy[language];

  const visibleProjects = useMemo(
    () => projects.filter((project) => category === "all" || project.category === category),
    [category]
  );
  const visibleSkills = skills.filter((skill) => skill.group === skillGroup);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const initialTheme = savedTheme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    const savedLanguage = window.localStorage.getItem("portfolio-language") as Language | null;
    if (savedLanguage === "es" || savedLanguage === "en") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    const closeModal = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.requestAnimationFrame(() => modalCloseRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", closeModal);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeModal);
      if (activeProject) projectTriggerRef.current?.focus();
    };
  }, [activeProject]);

  const openProject = (project: Project) => {
    projectTriggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActiveProject(project);
  };

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem("portfolio-theme", next);
      return next;
    });
  };

  const toggleLanguage = () => setLanguage((current) => current === "es" ? "en" : "es");

  return (
    <main>
      <a className="skipLink" href="#proyectos">{t.skipToContent}</a>
      <section className="hero" id="inicio">
        <nav className="nav shell" aria-label={t.navAria}>
          <a className="brand" href="#inicio" aria-label={t.home}>MS<span>.</span></a>
          <div className="navLinks"><a href="#proyectos">{t.navProjects}</a><a href="#perfil">{t.navProfile}</a></div>
          <div className="navControls">
            <button type="button" className="iconButton languageToggle" onClick={toggleLanguage} aria-label={t.language}>{language === "es" ? "EN" : "ES"}</button>
            <button type="button" className="iconButton" onClick={toggleTheme} aria-label={t.theme}>{theme === "light" ? <MoonIcon /> : <SunIcon />}</button>
            <a className="navCta" href="mailto:smatias94.rz@gmail.com">{t.contact} <ArrowIcon /></a>
          </div>
        </nav>

        <div className="heroGrid shell">
          <div className="heroCopy">
            <div className="availability"><span /> {t.available}</div>
            <p className="kicker">{t.kicker}</p>
            <h1>{t.heroA}</h1>
            <p className="heroLead">{t.heroLead}</p>
            <div className="heroActions">
              <a className="button primary" href="#proyectos">{t.viewProjects} <span>↓</span></a>
              <a className="button ghost" href="https://www.linkedin.com/in/speroni-matias/" target="_blank" rel="noreferrer">{t.linkedin}</a>
            </div>
          </div>

          <aside className="signalCard portraitCard" aria-label={t.profileLabel}>
            <div className="signalTop"><span>{t.profileLabel}</span><span className="signalPulse" /></div>
            <div className="portrait" aria-hidden="true"><img src="/images/profile.webp" alt="" /><span>MATÍAS<br />SPERONI</span></div>
            <dl className="signalStats">
              <div><dt>{t.focus}</dt><dd>{t.frontend}</dd></div>
              <div><dt>{t.extra}</dt><dd>{t.qa}</dd></div>
              <div><dt>{t.languageShort}</dt><dd>{t.english}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="projects shell" id="proyectos">
        <div className="sectionHeading">
          <div><p className="sectionIndex">{t.projectsIndex}</p><h2>{t.projectsTitleA}<br /><em>{t.projectsTitleB}</em></h2></div>
          <p className="sectionIntro">{t.projectsIntro}</p>
        </div>

        <div className="filterRow" aria-label={t.navProjects}>
          {categories.map((item) => (
            <button type="button" className={category === item ? "filter active" : "filter"} key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>
              {t.categoryLabels[item]}<span>{item === "all" ? projects.length : projects.filter((project) => project.category === item).length}</span>
            </button>
          ))}
        </div>

        <div className="projectList" aria-live="polite">
          {visibleProjects.map((project) => (
            <button type="button" className="projectCard" key={project.id} onClick={() => openProject(project)} style={{ "--accent": project.accent } as React.CSSProperties}>
              <span className="projectIndex">{project.index}</span>
              <span className="projectVisual" aria-hidden="true"><img src={project.image} alt="" /></span>
              <span className="projectMain">
                <span className="projectEyebrow">{project.eyebrow[language]}</span>
                <strong>{project.title}</strong>
                <span className="projectSummary">{project.summary[language]}</span>
                <span className="projectStack">{project.stack.slice(0, 3).map((tech) => <i key={tech}>{tech}</i>)}</span>
              </span>
              <span className="projectOpen" aria-label={`${t.open} ${project.title}`}><ArrowIcon /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="profile" id="perfil">
        <div className="shell profileGrid">
          <div className="profileCopy">
            <p className="sectionIndex light">{t.profileIndex}</p>
            <h2>{t.profileTitleA}<br /><em>{t.profileTitleB}</em></h2>
            <p>{t.profileText}</p>
            <div className="timeline">
              {t.timeline.map(([label, title, description]) => (
                <div key={label}><span>{label}</span><strong>{title}</strong><p>{description}</p></div>
              ))}
            </div>
          </div>

          <div className="skillPanel">
            <div className="skillPanelHead"><span>{t.techTitle}</span><small>{t.techHint}</small></div>
            <div className="skillTabs">
              {skillGroups.map((group) => (
                <button type="button" key={group} className={skillGroup === group ? "active" : ""} onClick={() => setSkillGroup(group)}>{t.groupLabels[group]}</button>
              ))}
            </div>
            <div className="techGrid" aria-live="polite">
              {visibleSkills.map((skill) => (
                <div className="techItem" key={skill.name}><span>{skill.abbr}</span><div><strong>{skill.name}</strong><small>{skill.note[language]}</small></div></div>
              ))}
            </div>
            <div className="languageCard"><span>{t.communication}</span><strong>{t.languageValue}</strong><p>{t.languageNote}</p></div>
          </div>
        </div>

        <div className="contact shell">
          <div><p>{t.contactPrompt}</p><h2>{t.contactTitleA}{t.contactTitleB && <> <em>{t.contactTitleB}</em></>}</h2><div className="socialLinks"><a href="https://www.linkedin.com/in/speroni-matias/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/MattVmx" target="_blank" rel="noreferrer">GitHub</a></div></div>
          <a className="contactCircle" href="mailto:smatias94.rz@gmail.com">{t.email} <ArrowIcon /></a>
        </div>
        <footer className="shell"><span>© {new Date().getFullYear()} Matías Speroni</span><span>Frontend Developer</span></footer>
      </section>

      {activeProject && (
        <div className="modalBackdrop" role="presentation" onMouseDown={() => setActiveProject(null)}>
          <article className="modal" role="dialog" aria-modal="true" aria-labelledby="project-title" aria-describedby="project-summary" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" ref={modalCloseRef} className="modalClose" onClick={() => setActiveProject(null)} aria-label={t.close}><CloseIcon /></button>
            <span className="modalStatus"><i style={{ background: activeProject.accent }} /> {activeProject.status[language]}</span>
            <div className="modalImage"><img src={activeProject.image} alt={`${activeProject.title} preview`} /></div>
            <p className="projectEyebrow">{activeProject.eyebrow[language]}</p>
            <h3 id="project-title">{activeProject.title}</h3>
            <p className="modalLead" id="project-summary">{activeProject.summary[language]}</p>
            <div className="modalBlock"><span>{t.result}</span><p>{activeProject.outcome[language]}</p></div>
            <div className="modalBlock"><span>{t.features}</span><ul>{activeProject.highlights[language].map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="modalTech">{activeProject.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <a className="modalLink" href={activeProject.href} target="_blank" rel="noreferrer">{activeProject.hrefLabel[language]} <ArrowIcon /></a>
          </article>
        </div>
      )}
    </main>
  );
}

