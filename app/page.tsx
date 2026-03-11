"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      id: "01",
      title: "FRC Takım Kaptanlığı",
      tag: "Robotik Liderlik",
      desc: "FIRST Robotics Competition'da genel kaptan olarak takımı yönetiyor, strateji belirliyor ve teknik kararları koordine ediyorum.",
      tech: ["Takım Yönetimi", "Strateji", "FRC"],
      color: "#FF4D00",
    },
    {
      id: "02",
      title: "FTC & FLL Mentörlüğü",
      tag: "Eğitim & Mentorluk",
      desc: "FIRST Tech Challenge ve FIRST LEGO League takımlarında mentor olarak genç mühendislere rehberlik ettim. FLL'de ulusal başarı elde ettik.",
      tech: ["Mentorluk", "FTC", "FLL", "Ulusal Ödül"],
      color: "#00C2FF",
    },
    {
      id: "03",
      title: "Yazılım Projeleri",
      tag: "Software Dev",
      desc: "Python, HTML, CSS ve JavaScript kullanarak çeşitli yazılım projeleri geliştirdim. MEB ve game jam yarışmalarına katıldım.",
      tech: ["Python", "JavaScript", "HTML/CSS", "Game Jam"],
      color: "#7CFF4D",
    },
    {
      id: "04",
      title: "Robot Tasarımı & 3D Modelleme",
      tag: "Mühendislik",
      desc: "Mekanik sistemler, robot tasarımı ve 3D modelleme alanlarında deneyim edinerek gerçek dünyadaki problemlere çözüm üretiyorum.",
      tech: ["3D Modelleme", "Mekanik", "Sistem Tasarımı"],
      color: "#FF4DFF",
    },
  ];

  const skills = [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "HTML & CSS", level: 80 },
    { name: "Robot Tasarımı", level: 90 },
    { name: "3D Modelleme", level: 80 },
    { name: "Takım Yönetimi", level: 95 },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #050505;
          --surface: #0f0f0f;
          --border: rgba(255,255,255,0.07);
          --text: #e8e8e8;
          --muted: #555;
          --accent-1: #FF4D00;
          --accent-2: #00C2FF;
          --accent-3: #7CFF4D;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Syne', sans-serif;
          overflow-x: hidden;
          cursor: none;
        }

        .cursor {
          position: fixed;
          width: 12px; height: 12px;
          background: var(--accent-1);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s;
        }

        .cursor-ring {
          position: fixed;
          width: 40px; height: 40px;
          border: 1px solid rgba(255,77,0,0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: left 0.15s ease, top 0.15s ease;
        }

        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 48px;
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(20px);
          background: rgba(5,5,5,0.8);
        }

        .nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 3px;
          color: var(--text);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-links a:hover { color: var(--text); }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 140px 48px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,77,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,77,0,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,77,0,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--accent-1);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-tag::before {
          content: '';
          display: block;
          width: 32px; height: 1px;
          background: var(--accent-1);
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 12vw, 160px);
          line-height: 0.9;
          letter-spacing: -2px;
          margin-bottom: 40px;
        }

        .hero-title .line-2 {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }

        .hero-title .accent { color: var(--accent-1); }

        .hero-desc {
          max-width: 520px;
          font-size: 16px;
          line-height: 1.8;
          color: #888;
          margin-bottom: 56px;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: var(--accent-1);
          color: #000;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
          transition: opacity 0.3s;
        }

        .btn-primary:hover { opacity: 0.85; }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border: 1px solid var(--border);
          color: var(--text);
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.3s, background 0.3s;
        }

        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.03);
        }

        .hero-stats {
          position: absolute;
          right: 48px;
          bottom: 80px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          text-align: right;
        }

        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          color: var(--text);
          line-height: 1;
        }

        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--muted);
          text-transform: uppercase;
        }

        section {
          padding: 120px 48px;
          position: relative;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 80px;
        }

        .section-num {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--accent-1);
          letter-spacing: 2px;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          letter-spacing: 1px;
          line-height: 1;
        }

        .section-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }

        .project-card {
          background: var(--surface);
          padding: 48px;
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          transition: border-color 0.4s;
          cursor: none;
        }

        .project-card:hover { border-color: rgba(255,255,255,0.15); }

        .project-id {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          margin-bottom: 24px;
        }

        .project-tag {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 2px;
          margin-bottom: 20px;
        }

        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .project-desc {
          font-size: 14px;
          line-height: 1.8;
          color: #777;
          margin-bottom: 32px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-pill {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          padding: 4px 10px;
          border: 1px solid var(--border);
          color: var(--muted);
          text-transform: uppercase;
        }

        .project-arrow {
          position: absolute;
          top: 48px;
          right: 48px;
          font-size: 20px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s, transform 0.3s;
        }

        .project-card:hover .project-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .skills-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .skill-item {
          margin-bottom: 32px;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .skill-name {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text);
        }

        .skill-pct {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: var(--muted);
        }

        .skill-bar-bg {
          height: 2px;
          background: var(--border);
          position: relative;
        }

        .skill-bar-fill {
          height: 100%;
          background: var(--accent-1);
          position: relative;
        }

        .skill-bar-fill::after {
          content: '';
          position: absolute;
          right: 0;
          top: -3px;
          width: 8px; height: 8px;
          background: var(--accent-1);
          border-radius: 50%;
        }

        .about-text {
          font-size: 18px;
          line-height: 2;
          color: #777;
        }

        .about-text strong { color: var(--text); font-weight: 700; }
        .about-highlight { color: var(--accent-1); font-style: italic; }

        .contact-big {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 8vw, 100px);
          line-height: 0.9;
          margin-bottom: 60px;
          letter-spacing: -1px;
        }

        .contact-big span {
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
          color: transparent;
        }

        .contact-links {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 28px;
          border: 1px solid var(--border);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          transition: all 0.3s;
        }

        .contact-link:hover {
          color: var(--text);
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.03);
        }

        footer {
          padding: 32px 48px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-text {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 1px;
        }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1000;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--accent-1), transparent);
          animation: scrollPulse 2s infinite;
        }

        .scroll-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          color: var(--muted);
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255,77,0,0.1);
          border: 1px solid rgba(255,77,0,0.2);
          border-radius: 2px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--accent-1);
          text-transform: uppercase;
          margin-bottom: 12px;
          margin-right: 8px;
        }

        .badge-dot {
          width: 6px; height: 6px;
          background: var(--accent-1);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .marquee-wrapper {
          overflow: hidden;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 16px 0;
          background: var(--surface);
        }

        .marquee-track {
          display: flex;
          animation: marquee 25s linear infinite;
          width: max-content;
        }

        .marquee-item {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 4px;
          color: var(--muted);
          padding: 0 48px;
          white-space: nowrap;
        }

        .marquee-accent { color: var(--accent-1); }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          nav { padding: 20px 24px; }
          .hero { padding: 120px 24px 80px; }
          section { padding: 80px 24px; }
          .hero-stats { display: none; }
          .nav-links { display: none; }
          .projects-grid { grid-template-columns: 1fr; }
          .skills-layout { grid-template-columns: 1fr; gap: 48px; }
          footer { padding: 24px; flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      <div className="noise" />

      <div
        className="cursor"
        style={{ left: mousePos.x - 6, top: mousePos.y - 6 }}
      />
      <div
        className="cursor-ring"
        style={{ left: mousePos.x - 20, top: mousePos.y - 20 }}
      />

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">ÖT</a>
        <ul className="nav-links">
          <li><a href="#about">Hakkımda</a></li>
          <li><a href="#projects">Projeler</a></li>
          <li><a href="#skills">Yetenekler</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef} id="home">
        <div className="hero-grid" />
        <div
          className="hero-glow"
          style={{ left: mousePos.x - 300, top: mousePos.y - 300 }}
        />

        <div className="hero-tag">Geliştirici & Robotik Mühendisi</div>

        <h1 className="hero-title">
          <div>ÖMER</div>
          <div className="line-2">T<span className="accent">UN</span>Ç</div>
        </h1>

        <p className="hero-desc">
          Robotik, mühendislik ve yazılım kesişiminde çalışan bir geliştirici. 
          Teknolojiyi gerçek dünya problemlerine çözüm üretmek için kullanıyorum.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">Projeleri Gör →</a>
          <a href="#contact" className="btn-secondary">İletişime Geç</a>
        </div>

        <div className="hero-stats">
          {[
            { num: "3+", label: "FIRST Program" },
            { num: "FRC", label: "Genel Kaptan" },
            { num: "🏆", label: "Ulusal Ödül" },
          ].map((s, i) => (
            <div key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <div className="scroll-text">Scroll</div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {Array(2).fill([
            "FRC Takım Kaptanı", "◆", "Python Developer", "◆",
            "3D Modelleme", "◆", "Robot Tasarımı", "◆",
            "FTC Mentor", "◆", "FLL Ulusal Ödülü", "◆",
            "JavaScript", "◆", "Game Jam", "◆",
            "Sistem Mühendisliği", "◆",
          ]).flat().map((item, i) => (
            <span
              key={i}
              className={`marquee-item ${item === "◆" ? "marquee-accent" : ""}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="section-header">
          <span className="section-num">— 01</span>
          <h2 className="section-title">Hakkımda</h2>
          <div className="section-line" />
        </div>

        <div style={{ maxWidth: 760 }}>
          <div style={{ marginBottom: 32 }}>
            <span className="badge">
              <span className="badge-dot" />FRC Kaptan 2025
            </span>
            <span className="badge" style={{
              background: "rgba(0,194,255,0.1)",
              border: "1px solid rgba(0,194,255,0.2)",
              color: "#00C2FF",
            }}>
              Ulusal Ödül Sahibi
            </span>
            <span className="badge" style={{
              background: "rgba(124,255,77,0.1)",
              border: "1px solid rgba(124,255,77,0.2)",
              color: "#7CFF4D",
            }}>
              Full-Stack Dev
            </span>
          </div>
          <p className="about-text">
            Robotik, mühendislik ve yazılım alanlarına ilgi duyan bir geliştiriciyim.
            Birçok <strong>ulusal ve uluslararası teknoloji yarışmasına</strong> aktif olarak katıldım.
            <br /><br />
            <span className="about-highlight">FIRST Robotics Competition</span>&apos;da bu yıl{" "}
            <strong>genel kaptan</strong> olarak görev yapıyorum. Daha önce FTC ve FLL
            takımlarında <strong>mentor</strong> olarak genç mühendislere rehberlik ettim.
            FLL&apos;de takımımızla <strong>ulusal düzeyde başarı</strong> elde ettik.
            <br /><br />
            Teknik olarak <strong>Python, HTML, CSS ve JavaScript</strong> ile projeler
            geliştiriyorum. Mekanik sistemler, robot tasarımı ve{" "}
            <strong>3D modelleme</strong> konularında da deneyimim var. Amacım;
            teknolojiyi gerçek dünyadaki problemlere çözüm üretmek için kullanmak. 🚀
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{ background: "var(--surface)", padding: "120px 0" }}
      >
        <div style={{ padding: "0 48px" }}>
          <div className="section-header">
            <span className="section-num">— 02</span>
            <h2 className="section-title">Projeler & Deneyim</h2>
            <div className="section-line" />
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-id" style={{ color: p.color }}>{p.id}</div>
              <div
                className="project-tag"
                style={{ background: `${p.color}15`, color: p.color }}
              >
                {p.tag}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="tech-stack">
                {p.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <span className="project-arrow" style={{ color: p.color }}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-header">
          <span className="section-num">— 03</span>
          <h2 className="section-title">Yetenekler</h2>
          <div className="section-line" />
        </div>

        <div className="skills-layout">
          <div>
            {skills.map((s) => (
              <div key={s.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: 2,
              color: "var(--accent-1)",
              textTransform: "uppercase",
              marginBottom: 24,
            }}>
              Öne Çıkan Başarılar
            </p>
            {[
              { icon: "🏆", title: "FLL Ulusal Ödülü", sub: "FIRST LEGO League — Ulusal Düzey" },
              { icon: "⚙️", title: "FRC Genel Kaptan", sub: "FIRST Robotics Competition 2025" },
              { icon: "🎮", title: "Game Jam Katılımcısı", sub: "Ulusal Oyun Geliştirme Yarışmaları" },
              { icon: "📐", title: "MEB Yarışmaları", sub: "Teknoloji & Yazılım Kategorileri" },
            ].map((a, i) => (
              <div key={i} style={{
                display: "flex",
                gap: 20,
                marginBottom: 20,
                padding: "20px 24px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}>
                <span style={{ fontSize: 24 }}>{a.icon}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{a.title}</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: 1,
                  }}>
                    {a.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="contact-big">
          <div>HAYDI</div>
          <div><span>İLETİŞİME</span></div>
          <div>GEÇELİM</div>
        </div>

        <div className="contact-links">
          <a href="mailto:omertunc@example.com" className="contact-link">✉ E-posta Gönder</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">⌥ GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">◈ LinkedIn</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-text">© 2025 Ömer Tunç — Tüm hakları saklıdır.</span>
        <span className="footer-text">Robotik · Mühendislik · Yazılım</span>
      </footer>
    </>
  );
}
