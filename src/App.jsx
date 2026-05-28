const profile = {
  name: "Eshwar Subash A",
  fullName: "Eshwar Subash Alicom",
  role: "Software Engineer Intern @ St. Jude ALSAC | AI Builder | CS Undergraduate",
  location: "Memphis, TN",
  email: "eshwaralicom@gmail.com",
  linkedin: "https://www.linkedin.com/in/eshwar-subash-a-1b250a347",
  github: "https://github.com/Esh-war-123",
};

const stats = [
  ["1st", "place winner at St. Jude BioHackathon"],
  ["AI + SWE", "primary professional focus"],
  ["2nd Youngest", "President for ISA-CBU"],
  ["Software + AI", "builder mindset"],
];

const experiences = [
  {
    id: "100006",
    partition: "ai-health",
    name: "biohackathon_winner",
    state: "COMPLETED",
    time: "2025",
    nodes: "5",
    company: "St. Jude BioHackathon",
    bullets: [
      "Won 1st place with an AI-powered cancer variant prioritization solution.",
      "Built an AI agent system to reduce research timelines from months to days.",
      "Focused on secure LLM integration with data while preventing leaks and maintaining performance.",
    ],
  },
  {
    id: "100005",
    partition: "software",
    name: "software_engineer_intern",
    state: "RUNNING",
    time: "Current",
    nodes: "4",
    company: "St. Jude ALSAC",
    bullets: [
      "Software engineering internship in a mission-driven healthcare and fundraising technology environment.",
      "Focused on practical software solutions, AI, data-driven tools, and cybersecurity-aware engineering.",
    ],
  },
  {
    id: "100004",
    partition: "ai-it",
    name: "st_jude_alsac_it_extern",
    state: "COMPLETED",
    time: "2025",
    nodes: "2",
    company: "St. Jude Children’s Research Hospital - ALSAC",
    bullets: [
      "Developed a full AI-based chatbot concept to improve internal communication and IT support.",
      "Gained exposure to healthcare IT workflows, teamwork, and professional problem-solving.",
    ],
  },
  {
    id: "100003",
    partition: "cyber",
    name: "cyber_security_intern",
    state: "COMPLETED",
    time: "2025",
    nodes: "3",
    company: "ProTech Services Group, Inc.",
    bullets: [
      "Conducted authorized penetration testing against client networks.",
      "Analyzed security events using tools such as Splunk and Microsoft Sentinel.",
      "Built a stronger security mindset for safer software and AI systems.",
    ],
  },
];

const skills = [
  ["AI Engineering", 92],
  ["Python", 90],
  ["Software Development", 88],
  ["React", 82],
  ["JavaScript", 80],
  ["Java", 78],
  ["Flask", 76],
  ["Machine Learning", 84],
  ["Data Visualization", 78],
  ["SQL", 80],
  ["Cybersecurity Mindset", 76],
  ["Cloud Tools", 72],
];

const projects = [
  {
    status: "WINNER",
    name: "ai_cancer_variant_prioritization",
    desc: "1st place St. Jude BioHackathon project: an AI-powered agent system that speeds up cancer variant prioritization from months to days.",
    stack: "AI LLMs Python Flask Healthcare Genomics",
  },
  {
    status: "ACTIVE",
    name: "ai_internal_support_chatbot",
    desc: "AI chatbot concept designed to improve internal communication, IT support efficiency, and knowledge access.",
    stack: "AI Chatbot Data IT-Support Healthcare",
  },
  {
    status: "ACTIVE",
    name: "phishing_url_analysis",
    desc: "Machine learning system that classifies URLs as phishing or legitimate using feature-based analysis.",
    stack: "Python ML Cybersecurity URL-Features",
  },
  {
    status: "ACTIVE",
    name: "activitybot_maze_navigator",
    desc: "Autonomous robot that navigates mazes using IR sensors, ultrasonic sensors, and wheel encoders.",
    stack: "Robotics Sensors Control-Logic",
  },
];

function Bar({ value }) {
  return (
    <div className="bar">
      <div className="barFill" style={{ width: `${value}%` }}></div>
    </div>
  );
}

function SectionHeader({ command, title, subtitle }) {
  return (
    <div className="sectionHeader">
      <div className="terminalLine">
        <span className="prompt">eshwar@portfolio:~$</span> {command}
      </div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [activePage, setActivePage] = useState("overview");

  const navItems = [
    ["overview", "⌂", "Overview"],
    ["experience", "▣", "Experience"],
    ["skills", "▰", "Skills"],
    ["projects", "◆", "Projects"],
    ["education", "◉", "Education"],
    ["contact", "✉", "Contact"],
  ];
  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #05070d;
          color: #dbeafe;
          font-family: "SF Mono", "Cascadia Code", "Menlo", "Monaco", monospace;
        }
        a { color: inherit; text-decoration: none; }
        button {
          font-family: inherit;
        }

        .app {
          min-height: 100vh;
          background:
            linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px),
            radial-gradient(circle at top left, rgba(34,211,238,0.18), transparent 32rem),
            radial-gradient(circle at top right, rgba(34,197,94,0.12), transparent 34rem),
            #05070d;
          background-size: 36px 36px, 36px 36px, auto, auto;
          overflow-x: hidden;
        }

        .leftStars {
          position: fixed;
          left: 0;
          top: 90px;
          bottom: 0;
          width: 240px;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .fallingStar {
          position: absolute;
          width: 130px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #e0f2fe, #67e8f9);
          transform: rotate(125deg);
          opacity: 0;
          filter: drop-shadow(0 0 12px rgba(103,232,249,0.8));
          animation: meteor 10s linear infinite;
        }

        .fallingStar.s1 { top: 120px; left: 20px; animation-delay: 0s; }
        .fallingStar.s2 { top: 340px; left: 70px; width: 100px; animation-delay: 3.2s; }
        .fallingStar.s3 { top: 560px; left: 35px; width: 120px; animation-delay: 6.1s; }

        .starDot {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 99px;
          background: #e0f2fe;
          box-shadow: 0 0 10px rgba(224,242,254,0.9);
          animation: twinkle 4.8s ease-in-out infinite;
        }

        .starDot.d1 { left: 42px; top: 150px; }
        .starDot.d2 { left: 160px; top: 250px; animation-delay: 1.4s; }
        .starDot.d3 { left: 80px; top: 470px; animation-delay: 2.2s; }
        .starDot.d4 { left: 190px; top: 650px; animation-delay: 3s; }

        .atomField {
          position: fixed;
          left: 48px;
          bottom: 130px;
          width: 130px;
          height: 130px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.9;
        }

        .atomCore {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 18px;
          height: 18px;
          margin-left: -9px;
          margin-top: -9px;
          border-radius: 999px;
          background: radial-gradient(circle, #e0f2fe 0%, #67e8f9 55%, #0f172a 100%);
          box-shadow: 0 0 18px rgba(103,232,249,0.8);
        }

        .atomOrbit {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(103,232,249,0.22);
          border-radius: 999px;
        }

        .atomOrbit.o1 { animation: atomSpin1 9s linear infinite; }
        .atomOrbit.o2 { animation: atomSpin2 11s linear infinite; }
        .atomOrbit.o3 { animation: atomSpin3 13s linear infinite; }

        .atomElectron {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 12px rgba(34,197,94,0.9);
          top: 50%;
          left: 50%;
          margin-left: -5px;
          margin-top: -5px;
          transform: translateX(65px);
        }

        .spaceSide {
          position: fixed;
          right: 0;
          top: 90px;
          bottom: 0;
          width: 250px;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .planet {
          position: absolute;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 30%, #e0f2fe, #67e8f9 32%, #0e7490 70%, #020617 100%);
          box-shadow: 0 0 45px rgba(34,211,238,0.35);
          animation: planetFloat 9s ease-in-out infinite;
        }

        .planet.big { width: 118px; height: 118px; right: 42px; top: 95px; }
        .planet.small { width: 46px; height: 46px; right: 160px; top: 330px; opacity: 0.85; animation-delay: 1.8s; }

        .orbit {
          position: absolute;
          width: 170px;
          height: 170px;
          right: 15px;
          top: 68px;
          border: 1px solid rgba(103,232,249,0.18);
          border-radius: 999px;
          transform: rotate(-24deg);
          animation: orbitSpin 16s linear infinite;
        }

        .orbit::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #22c55e;
          top: 18px;
          left: 32px;
          box-shadow: 0 0 16px rgba(34,197,94,0.9);
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(148,163,184,0.18);
          background: rgba(5,7,13,0.86);
          backdrop-filter: blur(16px);
        }

        .topbarInner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 20px 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .statusDot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 18px #22c55e;
        }

        .brand strong {
          display: block;
          color: #f8fafc;
          font-size: 18px;
          letter-spacing: 0.04em;
        }

        .brand span {
          display: block;
          color: #94a3b8;
          font-size: 13px;
          margin-top: 5px;
        }

        .nav {
          display: flex;
          gap: 14px;
          color: #94a3b8;
          font-size: 15px;
          align-items: center;
        }

        .brandButton {
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          text-align: left;
          padding: 0;
        }

        .navButton {
          border: 1px solid rgba(148,163,184,0.12);
          background: rgba(15,23,42,0.35);
          color: #94a3b8;
          padding: 12px 16px;
          border-radius: 14px;
          cursor: pointer;
          transition: 0.22s ease;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 14px;
          letter-spacing: 0.03em;
        }

        .navIcon {
          color: #67e8f9;
          font-size: 16px;
          line-height: 1;
        }

        .navButton:hover {
          color: #e0f2fe;
          background: rgba(34,211,238,0.1);
          border-color: rgba(34,211,238,0.26);
          transform: translateY(-2px);
        }

        .navButton.active {
          color: #67e8f9;
          border-color: rgba(34,211,238,0.38);
          background: rgba(34,211,238,0.13);
          box-shadow: 0 0 22px rgba(34,211,238,0.12);
        }

        .navButton.active .navIcon {
          color: #22c55e;
          text-shadow: 0 0 12px rgba(34,197,94,0.8);
        }

        .pageView {
          animation: pageFade 0.45s ease;
        }

        @keyframes pageFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .shell {
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px 22px 80px;
          position: relative;
          z-index: 5;
          min-height: calc(100vh - 72px);
        }

        .terminal {
          border: 1px solid rgba(148,163,184,0.2);
          background: rgba(2,6,23,0.8);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 24px 90px rgba(0,0,0,0.5);
        }

        .overviewFx {
          position: relative;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(34,211,238,0.08),
            0 0 55px rgba(34,211,238,0.08);
        }

        .overviewFx::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, transparent 0%, rgba(103,232,249,0.08) 45%, transparent 65%),
            radial-gradient(circle at 12% 18%, rgba(34,197,94,0.12), transparent 24rem);
          transform: translateX(-100%);
          animation: overviewSweep 7s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        .overviewFx > * {
          position: relative;
          z-index: 1;
        }

        .overviewFx .hero h1 {
          text-shadow: 0 0 34px rgba(103,232,249,0.08);
        }

        .overviewFx .badge {
          transition: 0.25s ease;
        }

        .overviewFx .badge:hover {
          transform: translateY(-3px);
          border-color: rgba(103,232,249,0.38);
          box-shadow: 0 0 18px rgba(34,211,238,0.12);
        }

        .overviewFx .btn {
          position: relative;
          overflow: hidden;
        }

        .overviewFx .btn::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 45px;
          left: -60px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: skewX(-18deg);
          animation: buttonShine 4s linear infinite;
        }

        .overviewFx .systemCard {
          transition: 0.25s ease;
        }

        .overviewFx .systemCard:hover {
          transform: translateY(-5px);
          border-color: rgba(103,232,249,0.28);
          box-shadow: 0 0 30px rgba(34,211,238,0.12);
        }

        .overviewFx .stat {
          transition: 0.25s ease;
        }

        .overviewFx .stat:hover {
          transform: translateY(-5px) scale(1.015);
          border-color: rgba(103,232,249,0.28);
          box-shadow: 0 0 26px rgba(34,211,238,0.12);
          background: rgba(15,23,42,0.86);
        }

        .overviewFx .stat strong {
          animation: overviewNumberPulse 2.8s ease-in-out infinite;
        }

        @keyframes overviewSweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes buttonShine {
          0% {
            left: -60px;
          }
          45%, 100% {
            left: 140%;
          }
        }

        @keyframes overviewNumberPulse {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.18);
          }
        }

        .terminalTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          border-bottom: 1px solid rgba(148,163,184,0.18);
          background: rgba(15,23,42,0.9);
        }

        .dots { display: flex; gap: 8px; }
        .dot { width: 12px; height: 12px; border-radius: 999px; }
        .red { background: #fb7185; }
        .yellow { background: #facc15; }
        .green { background: #22c55e; }
        .windowTitle { color: #94a3b8; font-size: 12px; }

        .hero {
          display: grid;
          grid-template-columns: 1.22fr 0.78fr;
          gap: 52px;
          padding: 72px 64px 56px;
          align-items: center;
        }

        .prompt { color: #22c55e; font-weight: 800; }
        .cmd { color: #67e8f9; }

        .hero h1 {
          margin: 42px 0 0;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          color: #f8fafc;
          font-size: clamp(48px, 7vw, 92px);
          letter-spacing: -0.06em;
          line-height: 0.92;
        }

        .heroRole {
          margin-top: 18px;
          color: #67e8f9;
          font-size: 22px;
          line-height: 1.5;
          letter-spacing: 0.04em;
        }

        .hero p {
          color: #cbd5e1;
          line-height: 1.9;
          font-size: 18px;
          max-width: 840px;
          margin-top: 28px;
        }

        .highlight { color: #67e8f9; }

        .badgeRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .badge {
          border: 1px solid rgba(34,211,238,0.24);
          color: #a5f3fc;
          background: rgba(34,211,238,0.08);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
        }

        .badge.gold {
          border-color: rgba(250,204,21,0.3);
          color: #fde68a;
          background: rgba(250,204,21,0.09);
        }

        .quickActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .btn {
          display: inline-flex;
          border: 1px solid rgba(34,211,238,0.3);
          background: rgba(34,211,238,0.08);
          color: #e0f2fe;
          border-radius: 12px;
          padding: 12px 14px;
          font-weight: 800;
          font-size: 13px;
          transition: 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          background: rgba(34,211,238,0.16);
          color: white;
        }

        .systemCard {
          border: 1px solid rgba(148,163,184,0.16);
          background: rgba(15,23,42,0.75);
          border-radius: 18px;
          padding: 20px;
        }

        .systemCard h3 {
          margin: 0 0 14px;
          color: #f8fafc;
          font-size: 18px;
        }

        .identityLine {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 12px;
          padding: 9px 0;
          border-bottom: 1px dashed rgba(148,163,184,0.14);
          font-size: 13px;
        }

        .identityLine span:first-child { color: #94a3b8; }
        .identityLine span:last-child { color: #e2e8f0; }

        .miniGraph {
          margin-top: 18px;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid rgba(34,211,238,0.18);
          background:
            linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px),
            rgba(2,6,23,0.55);
          background-size: 22px 22px;
        }

        .miniGraphTop {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          color: #94a3b8;
          font-size: 12px;
        }

        .sharpGraph {
          width: 100%;
          height: 120px;
          display: block;
        }

        .graphLine {
          fill: none;
          stroke: #67e8f9;
          stroke-width: 3;
          stroke-linejoin: miter;
          stroke-linecap: square;
          stroke-dasharray: 520;
          stroke-dashoffset: 520;
          animation: drawGraph 3.2s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(34,211,238,0.55));
        }

        .graphArea {
          fill: rgba(34,211,238,0.08);
          animation: pulseArea 3.2s ease-in-out infinite;
        }

        .graphPoint {
          fill: #22c55e;
          stroke: #020617;
          stroke-width: 2;
          animation: pointPulse 1.8s ease-in-out infinite;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          padding: 0 34px 34px;
        }

        .stat {
          border: 1px solid rgba(34,211,238,0.18);
          background: rgba(15,23,42,0.68);
          border-radius: 18px;
          padding: 18px;
        }

        .stat strong {
          display: block;
          color: #67e8f9;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 32px;
        }

        .stat span {
          display: block;
          color: #94a3b8;
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.5;
        }

        section { padding-top: 70px; }

        .sectionHeader { margin-bottom: 22px; }
        .terminalLine { color: #cbd5e1; font-size: 14px; margin-bottom: 12px; }

        .sectionHeader h2 {
          margin: 0;
          color: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(30px, 4vw, 52px);
          letter-spacing: -0.04em;
        }

        .sectionHeader p {
          color: #94a3b8;
          line-height: 1.8;
          max-width: 820px;
          margin: 18px auto 0;
          text-align: center;
          font-size: 18px;
        }

        .panel {
          border: 1px solid rgba(148,163,184,0.18);
          background: rgba(2,6,23,0.75);
          border-radius: 22px;
          overflow: hidden;
        }

        .experienceFx {
          position: relative;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(34,211,238,0.08),
            0 0 45px rgba(34,211,238,0.08);
        }

        .experienceFx::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, transparent 0%, rgba(103,232,249,0.08) 45%, transparent 65%),
            radial-gradient(circle at 20% 10%, rgba(34,197,94,0.12), transparent 22rem);
          transform: translateX(-100%);
          animation: experienceSweep 7s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        .experienceFx > * {
          position: relative;
          z-index: 1;
        }

        .experienceFx .table tbody tr {
          transition: 0.25s ease;
        }

        .experienceFx .table tbody tr:hover {
          background: rgba(34,211,238,0.08);
          transform: scale(1.006);
        }

        .experienceFx .table tbody tr:hover td {
          color: #e0f2fe;
        }

        .experienceFx .state {
          animation: statusPulse 2.4s ease-in-out infinite;
        }

        .experienceFx .jobLog {
          border: 1px solid rgba(34,211,238,0.08);
          border-radius: 16px;
          padding: 16px;
          background: rgba(15,23,42,0.34);
          transition: 0.25s ease;
        }

        .experienceFx .jobLog:hover {
          transform: translateY(-5px);
          border-color: rgba(103,232,249,0.26);
          background: rgba(15,23,42,0.62);
          box-shadow: 0 0 28px rgba(34,211,238,0.1);
        }

        .experienceFx .jobLog h3 {
          transition: 0.25s ease;
        }

        .experienceFx .jobLog:hover h3 {
          color: #67e8f9;
        }

        .experienceFx .jobLog li {
          transition: 0.2s ease;
        }

        .experienceFx .jobLog li:hover {
          color: #e0f2fe;
          transform: translateX(5px);
        }

        @keyframes experienceSweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes statusPulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(34,197,94,0);
          }
          50% {
            box-shadow: 0 0 18px rgba(34,197,94,0.24);
          }
        }

        .panelHeader {
          border-bottom: 1px solid rgba(148,163,184,0.16);
          padding: 14px 16px;
          color: #67e8f9;
          background: rgba(15,23,42,0.65);
          font-size: 13px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .table th {
          text-align: left;
          color: #94a3b8;
          font-weight: 800;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(148,163,184,0.13);
        }

        .table td {
          padding: 14px 16px;
          border-bottom: 1px solid rgba(148,163,184,0.08);
          color: #cbd5e1;
        }

        .state {
          display: inline-flex;
          padding: 5px 9px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 900;
          border: 1px solid rgba(34,197,94,0.28);
          background: rgba(34,197,94,0.1);
          color: #86efac;
        }

        .state.completed {
          border-color: rgba(96,165,250,0.28);
          background: rgba(96,165,250,0.1);
          color: #93c5fd;
        }

        .logBlock {
          padding: 18px;
          border-top: 1px solid rgba(148,163,184,0.14);
        }

        .jobLog { margin-bottom: 22px; }
        .jobLog:last-child { margin-bottom: 0; }
        .jobLog h3 { color: #f8fafc; margin: 0 0 6px; font-size: 16px; }
        .jobLog p { margin: 0 0 10px; color: #94a3b8; font-size: 13px; }
        .jobLog ul { margin: 0; padding-left: 20px; color: #cbd5e1; line-height: 1.65; font-size: 13px; }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .serviceCard,
        .terminalCard,
        .networkCard {
          border: 1px solid rgba(148,163,184,0.16);
          background: rgba(15,23,42,0.65);
          border-radius: 20px;
          padding: 20px;
        }

        .pageFx {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
        }

        .pageFx::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, transparent 0%, rgba(103,232,249,0.07) 45%, transparent 65%),
            radial-gradient(circle at 15% 10%, rgba(34,197,94,0.1), transparent 22rem);
          transform: translateX(-100%);
          animation: pageSweep 7s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        .pageFx > * {
          position: relative;
          z-index: 1;
        }

        .projectFx .serviceCard,
        .educationFx .terminalCard,
        .contactFx .networkCard {
          transition: 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .projectFx .serviceCard::after,
        .educationFx .terminalCard::after,
        .contactFx .networkCard::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 55px;
          left: -70px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: skewX(-18deg);
          animation: cardShine 5s linear infinite;
        }

        .projectFx .serviceCard:hover,
        .educationFx .terminalCard:hover,
        .contactFx .networkCard:hover {
          transform: translateY(-6px) scale(1.01);
          border-color: rgba(103,232,249,0.3);
          background: rgba(15,23,42,0.82);
          box-shadow: 0 0 30px rgba(34,211,238,0.12);
        }

        .projectFx .serviceCard:hover h3,
        .educationFx .terminalCard:hover h3,
        .contactFx .networkCard:hover h3 {
          color: #67e8f9;
        }

        .projectFx .chip {
          transition: 0.22s ease;
        }

        .projectFx .chip:hover {
          transform: translateY(-2px);
          border-color: rgba(103,232,249,0.34);
          background: rgba(34,211,238,0.14);
        }

        .projectFx .serviceStatus {
          animation: statusPulse 2.4s ease-in-out infinite;
        }

        .educationFx .terminalCard {
          min-height: 170px;
        }

        .educationFx .terminalCard p,
        .contactFx .networkCard p {
          transition: 0.22s ease;
        }

        .educationFx .terminalCard:hover p,
        .contactFx .networkCard:hover p {
          color: #e0f2fe;
        }

        .contactFx .networkCard small {
          animation: networkBlink 2.6s ease-in-out infinite;
        }

        @keyframes pageSweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes cardShine {
          0% {
            left: -70px;
          }
          45%, 100% {
            left: 130%;
          }
        }

        @keyframes networkBlink {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 12px rgba(34,197,94,0.8);
          }
        }

        .serviceTop {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          margin-bottom: 18px;
        }

        .serviceStatus {
          color: #86efac;
          font-weight: 900;
          font-size: 12px;
        }

        .serviceStatus.winner { color: #fde68a; }
        .serviceCard h3, .terminalCard h3, .networkCard h3 { color: #f8fafc; margin: 0 0 12px; font-size: 18px; }
        .serviceCard p, .terminalCard p, .networkCard p { color: #cbd5e1; line-height: 1.65; font-size: 13px; }

        .stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .chip {
          padding: 6px 9px;
          border-radius: 9px;
          background: rgba(34,211,238,0.08);
          border: 1px solid rgba(34,211,238,0.16);
          color: #a5f3fc;
          font-size: 11px;
        }

        .skillsPanel {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 22px;
          overflow: hidden;
          background:
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .skillsPanel::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 35%,
            rgba(103,232,249,0.07) 50%,
            transparent 65%,
            transparent 100%
          );
          transform: translateX(-100%);
          animation: skillsSweep 6s linear infinite;
          pointer-events: none;
        }

        .skillsPanel::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(103,232,249,0.9), transparent);
          box-shadow: 0 0 14px rgba(103,232,249,0.45);
          animation: skillsScan 4.8s linear infinite;
          pointer-events: none;
        }

        .skillRow {
          position: relative;
          display: grid;
          grid-template-columns: 190px 1fr 56px;
          align-items: center;
          gap: 12px;
          color: #cbd5e1;
          font-size: 13px;
          padding: 10px 12px;
          border-radius: 14px;
          background: rgba(15,23,42,0.34);
          border: 1px solid rgba(34,211,238,0.06);
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }

        .skillRow:hover {
          transform: translateY(-4px);
          background: rgba(15,23,42,0.62);
          border-color: rgba(103,232,249,0.24);
          box-shadow: 0 0 22px rgba(34,211,238,0.12);
        }

        .bar {
          position: relative;
          height: 14px;
          border: 1px solid rgba(34,211,238,0.22);
          background: rgba(15,23,42,0.96);
          border-radius: 999px;
          overflow: hidden;
          box-shadow: inset 0 0 14px rgba(34,211,238,0.08);
        }

        .barFill {
          position: relative;
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #67e8f9);
          border-radius: 999px;
          box-shadow: 0 0 12px rgba(103,232,249,0.22);
          animation: barPulse 2.8s ease-in-out infinite;
        }

        .barFill::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 60px;
          right: -60px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.35),
            transparent
          );
          transform: skewX(-18deg);
          animation: barShine 2.6s linear infinite;
        }

        .skillPercent {
          color: #e0f2fe;
          font-weight: 700;
          text-align: right;
          animation: percentPulse 2.2s ease-in-out infinite;
        }

        @keyframes skillsSweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes skillsScan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(330px);
            opacity: 0;
          }
        }

        @keyframes barShine {
          0% {
            right: -60px;
          }
          100% {
            right: 100%;
          }
        }

        @keyframes barPulse {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.12);
          }
        }

        @keyframes percentPulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        .eduGrid,
        .contactGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .contactGrid {
          grid-template-columns: repeat(3, 1fr);
        }

        .networkCard small {
          color: #86efac;
          font-weight: 900;
        }

        .footer {
          color: #64748b;
          padding: 50px 0 10px;
          text-align: center;
          font-size: 12px;
        }

        .cursor {
          display: inline-block;
          width: 9px;
          height: 18px;
          margin-left: 4px;
          background: #67e8f9;
          vertical-align: middle;
          animation: blink 1s infinite;
        }

        @keyframes meteor {
          0% { opacity: 0; transform: translate(0,0) rotate(125deg) scale(0.92); }
          8% { opacity: 0.85; }
          28% { opacity: 1; }
          46% { opacity: 0; transform: translate(150px,220px) rotate(125deg) scale(1); }
          100% { opacity: 0; transform: translate(150px,220px) rotate(125deg) scale(1); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }

        @keyframes atomSpin1 {
          from { transform: rotate(18deg) scale(1,0.48); }
          to { transform: rotate(378deg) scale(1,0.48); }
        }

        @keyframes atomSpin2 {
          from { transform: rotate(78deg) scale(1,0.48); }
          to { transform: rotate(-282deg) scale(1,0.48); }
        }

        @keyframes atomSpin3 {
          from { transform: rotate(138deg) scale(1,0.48); }
          to { transform: rotate(498deg) scale(1,0.48); }
        }

        @keyframes planetFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(28px); }
        }

        @keyframes orbitSpin {
          to { transform: rotate(336deg); }
        }

        @keyframes drawGraph {
          0% { stroke-dashoffset: 520; opacity: 0.45; }
          45% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -520; opacity: 0.65; }
        }

        @keyframes pulseArea {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.75; }
        }

        @keyframes pointPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.45); opacity: 1; }
        }

        @keyframes blink {
          0%, 45% { opacity: 1; }
          46%, 100% { opacity: 0; }
        }

        @media (max-width: 950px) {
          .hero,
          .stats,
          .grid,
          .skillsPanel,
          .eduGrid,
          .contactGrid {
            grid-template-columns: 1fr;
          }

          .nav {
            display: none;
          }

          .hero {
            padding: 44px 26px;
          }

          .stats {
            padding: 0 24px 24px;
          }

          .table {
            min-width: 760px;
          }

          .panel {
            overflow-x: auto;
          }

          .skillRow {
            grid-template-columns: 1fr;
          }

          .spaceSide,
          .leftStars,
          .atomField {
            display: none;
          }

          .nav {
            display: flex;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="leftStars">
        <div className="fallingStar s1"></div>
        <div className="fallingStar s2"></div>
        <div className="fallingStar s3"></div>
        <div className="starDot d1"></div>
        <div className="starDot d2"></div>
        <div className="starDot d3"></div>
        <div className="starDot d4"></div>
      </div>

      <div className="atomField">
        <div className="atomCore"></div>
        <div className="atomOrbit o1"><div className="atomElectron"></div></div>
        <div className="atomOrbit o2"><div className="atomElectron"></div></div>
        <div className="atomOrbit o3"><div className="atomElectron"></div></div>
      </div>

      <div className="spaceSide">
        <div className="orbit"></div>
        <div className="planet big"></div>
        <div className="planet small"></div>
      </div>

      <header className="topbar">
        <div className="topbarInner">
          <button className="brand brandButton" onClick={() => setActivePage("overview")}>
            <span className="statusDot"></span>
            <span>
              <strong>Eshwar Subash</strong>
            </span>
          </button>

          <nav className="nav">
            {navItems.map(([key, icon, label]) => (
              <button
                key={key}
                className={activePage === key ? "navButton active" : "navButton"}
                onClick={() => setActivePage(key)}
              >
                <span className="navIcon">{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="shell">
        {activePage === "overview" && (
        <div className="terminal pageView overviewFx">
          <div className="terminalTop">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="windowTitle">Eshwar AI + Software Portfolio Dashboard</div>
            <div></div>
          </div>

          <div className="hero">
            <div>
              <h1>{profile.name}</h1>
              <div className="heroRole">Software Engineer Intern @ St. Jude ALSAC</div>

              <p>
                {profile.role}. I build <span className="highlight">AI-powered software</span> and practical digital tools for healthcare,
                data, automation, and secure systems. My work combines software development, artificial intelligence,
                and a cybersecurity-aware engineering mindset.
              </p>

              <div className="badgeRow">
                <span className="badge gold">St. Jude BioHackathon 1st Place</span>
                <span className="badge">Software Engineering</span>
                <span className="badge">AI Systems</span>
                <span className="badge">Healthcare Innovation</span>
                <span className="badge">Full-Stack Development</span>
                <span className="badge">Cybersecurity-Aware Engineering</span>
              </div>

              <div className="quickActions">
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">linkedin --open</a>
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">github --open</a>
                <a className="btn" href={`mailto:${profile.email}`}>mail --send</a>
              </div>
            </div>

            <div className="systemCard">
              <h3>System Identity</h3>
              <div className="identityLine">
                <span>name</span>
                <span>{profile.fullName}</span>
              </div>
              <div className="identityLine">
                <span>current</span>
                <span>Software Engineer Intern @ St. Jude ALSAC</span>
              </div>
              <div className="identityLine">
                <span>award</span>
                <span>St. Jude BioHackathon 1st Place</span>
              </div>
              <div className="identityLine">
                <span>focus</span>
                <span>AI + Software Development + Healthcare Tech</span>
              </div>
              <div className="identityLine">
                <span>security</span>
                <span>cybersecurity-aware builder</span>
              </div>
              <div className="identityLine">
                <span>location</span>
                <span>{profile.location}</span>
              </div>

              <div className="miniGraph">
                <div className="miniGraphTop">
                  <span>AI/SWE activity graph</span>
                  <span>live trend</span>
                </div>
                <svg className="sharpGraph" viewBox="0 0 360 120" preserveAspectRatio="none">
                  <path className="graphArea" d="M0 92 L55 74 L115 82 L176 42 L238 58 L300 24 L360 36 L360 120 L0 120 Z" />
                  <path className="graphLine" d="M0 92 L55 74 L115 82 L176 42 L238 58 L300 24 L360 36" />
                  <circle className="graphPoint" cx="0" cy="92" r="4" />
                  <circle className="graphPoint" cx="55" cy="74" r="4" />
                  <circle className="graphPoint" cx="115" cy="82" r="4" />
                  <circle className="graphPoint" cx="176" cy="42" r="4" />
                  <circle className="graphPoint" cx="238" cy="58" r="4" />
                  <circle className="graphPoint" cx="300" cy="24" r="4" />
                  <circle className="graphPoint" cx="360" cy="36" r="4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="stats">
            {stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        )}

        {activePage === "experience" && (
        <section className="pageView">
          <SectionHeader
            command="squeue -u eshwar --focus ai_software_healthcare"
            title="Experience"
            subtitle="Software engineering, AI healthcare innovation, IT externships, cybersecurity experience, and leadership shown like active jobs in a terminal dashboard."
          />

          <div className="panel experienceFx">
            <div className="panelHeader">squeue --format="%.8i %.12P %.30j %.10T %.15M %.6D"</div>

            <table className="table">
              <thead>
                <tr>
                  <th>JOBID</th>
                  <th>PARTITION</th>
                  <th>NAME</th>
                  <th>STATE</th>
                  <th>TIME</th>
                  <th>NODES</th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.partition}</td>
                    <td>{job.name}</td>
                    <td>
                      <span className={job.state === "RUNNING" ? "state" : "state completed"}>{job.state}</span>
                    </td>
                    <td>{job.time}</td>
                    <td>{job.nodes}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="logBlock">
              {experiences.map((job) => (
                <div className="jobLog" key={`${job.id}-log`}>
                  <div className="terminalLine">
                    <span className="prompt">$</span> cat output-{job.id}.log
                  </div>
                  <h3>{job.company}</h3>
                  <p>{job.name}</p>
                  <ul>
                    {job.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        )}

        {activePage === "skills" && (
        <section className="pageView">
          <SectionHeader
            command="module avail ai software cyber data"
            title="Skills & Technologies"
            subtitle="A terminal-style skill monitor focused on AI, software development, data, cloud, and cybersecurity-aware engineering."
          />

          <div className="panel">
            <div className="panelHeader">ESH-SMI 2026.05 | AI + Software Skill Utilization Monitor</div>

            <div className="skillsPanel">
              {skills.map(([skill, level]) => (
                <div className="skillRow" key={skill}>
                  <span>{skill}</span>
                  <Bar value={level} />
                  <span className="skillPercent">{level}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        )}

        {activePage === "projects" && (
        <section className="pageView pageFx projectFx">
          <SectionHeader
            command="systemctl list-units --type=service --focus ai"
            title="Running AI & Software Services"
            subtitle="Featured projects presented as active software services, with the St. Jude BioHackathon win highlighted first."
          />

          <div className="grid">
            {projects.map((project) => (
              <div className="serviceCard" key={project.name}>
                <div className="serviceTop">
                  <span className={project.status === "WINNER" ? "serviceStatus winner" : "serviceStatus"}>
                    {project.status}
                  </span>
                  <span className={project.status === "WINNER" ? "badge gold" : "badge"}>service</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="stack">
                  {project.stack.split(" ").map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        )}

        {activePage === "education" && (
        <section className="pageView pageFx educationFx">
          <SectionHeader
            command="journalctl -u education leadership awards --no-pager"
            title="Education & Leadership"
            subtitle="Academic background, student leadership, and recognition presented in a clean system-style view."
          />

          <div className="eduGrid">
            <div className="terminalCard">
              <h3>Christian Brothers University</h3>
              <p>
                Bachelor of Science in Computer Science with interests in software engineering, AI,
                cybersecurity, data visualization, cloud computing, and network security.
              </p>
            </div>

            <div className="terminalCard">
              <h3>St. Jude BioHackathon 1st Place Winner</h3>
              <p>
                Built an AI-powered agent system that speeds up cancer variant prioritization and connects
                AI with healthcare research impact.
              </p>
            </div>

            <div className="terminalCard">
              <h3>President & Senator - ISA-CBU</h3>
              <p>
                Represent student voices, lead campus initiatives, and strengthen cultural and campus engagement
                at Christian Brothers University.
              </p>
            </div>

            <div className="terminalCard">
              <h3>Robotics & IT</h3>
              <p>
                Hands-on work involving robotics, IT troubleshooting, sensors, control logic, and autonomous systems.
              </p>
            </div>
          </div>
        </section>

        )}

        {activePage === "contact" && (
        <section className="pageView pageFx contactFx">
          <SectionHeader
            command="ifconfig && ping -c 1 eshwar"
            title="Network Interfaces"
            subtitle="Contact links and professional channels."
          />

          <div className="contactGrid">
            <a className="networkCard" href={`mailto:${profile.email}`}>
              <small>eth0: email UP</small>
              <h3>{profile.email}</h3>
              <p>Primary contact interface for software engineering, AI, healthcare tech, and collaboration opportunities.</p>
            </a>

            <a className="networkCard" href={profile.github} target="_blank" rel="noreferrer">
              <small>eth1: github UP</small>
              <h3>github.com/Esh-war-123</h3>
              <p>Project repositories, code, AI experiments, and software development work.</p>
            </a>

            <a className="networkCard" href={profile.linkedin} target="_blank" rel="noreferrer">
              <small>eth2: linkedin UP</small>
              <h3>linkedin.com/in/eshwar-subash-a</h3>
              <p>Professional profile, experience, achievements, and career updates.</p>
            </a>
          </div>
        </section>

        )}

        <div className="footer">
          <span className="prompt">eshwar@portfolio:~$</span> ai software healthcare dashboard loaded<span className="cursor"></span>
        </div>
      </main>
    </div>
  );
}
