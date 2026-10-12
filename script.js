/* ============================================================
   Personal Website — Ben He
   Interactive Scripts
   ============================================================ */

(function () {
  'use strict';

  // ─── Translations ──────────────────────────────────────
  const T = {
    de: {
      'meta-desc': 'Ben He — M.Sc. EEIT @ KIT. Spezialisiert auf KI, Robotik und intelligente Automatisierung. Erfahrung in Digital Twin, ROS 2, LLM-Agenten und Full-Stack-Entwicklung.',
      'nav-home': 'Zur Startseite',
      'nav-main': 'Hauptnavigation',
      'nav-about': 'Über mich',
      'nav-edu': 'Ausbildung',
      'nav-exp': 'Erfahrung',
      'nav-proj': 'Projekte',
      'nav-skills': 'Kompetenzen',
      'nav-contact': 'Kontakt',
      'lang-switch': 'Switch to English',
      'theme-switch': 'Design umschalten',
      'menu-open': 'Menü öffnen',
      'hero-greeting': 'Hallo, ich bin',
      'hero-subtitle': 'M.Sc. Electrical Engineering & Information Technology (EEIT) · KI · Robotik · Intelligente Automatisierung',
      'hero-cta': 'Kontakt',
      'scroll': 'Scroll',
      'about-title': 'Über mich',
      'about-text': 'Ingenieur am KIT mit Schwerpunkt auf <strong>KI, Robotik und intelligenter Automatisierung</strong>. Ich strebe eine Tätigkeit als <strong>AI Engineer</strong> oder <strong>Robotics Engineer</strong> an — mit Erfahrung in Digital-Twin-Systemen, ROS&nbsp;2, LLM-Agenten, Full-Stack-Entwicklung und eingebetteten Systemen.',
      'about-photo': 'Persönliche Vorstellung',
      'portrait-alt': 'Portrait von Ben He',
      'edu-title': 'Ausbildung',
      'edu-kit-degree': 'B.Sc. Elektrotechnik und Informationstechnik',
      'edu-kit-note': 'Abschluss: 09/2026',
      'edu-kit-msc-degree': 'M.Sc. Electrical Engineering & Information Technology (EEIT)',
      'edu-kit-msc-note': 'Schwerpunkt: KI, Robotik & intelligente Automatisierung',
      'edu-yz-degree': 'Informations- und Informatikwissenschaften',
      'edu-yz-note': 'Wechsel ans KIT',
      'exp-title': 'Universitäre Projekterfahrung',
      'exp-thesis-title': 'Bachelorarbeit: Design einer Digital-Twin-Infrastruktur für Robotik',
      'exp-thesis-1': 'Entwicklung einer Python-Toolchain (Submodel Generator) zur automatischen Extraktion von URDF-/YAML-Daten in sechs semantische AAS-Teilmodelle: <em>Struktur, Kinematik, Dynamik, Steuerung, Sicherheit, Visualisierung</em>.',
      'exp-thesis-2': 'Multi-Robot-Generator instanziiert vollautomatisch komplexe ROS-2-Simulationen aus AAS-Daten — ohne manuelle Konfiguration.',
      'exp-thesis-3': 'Validierung auf heterogenen Robotersystemen (Universal Robots & igus ReBeL): URDF → AAS → Simulation, Ende-zu-Ende.',
      'exp-thesis-4': 'Formalisierung der AAS-Spezifikation (v3.0) als XML-Schemata und Ableitung einer domänenspezifischen Sprache (DSL) für die semantische Robotmodellierung.',
      'exp-thesis-5': 'Ergebnis: Vollautomatisierter <em>Digital-Twin-Generator</em>, der aus einer einzigen URDF-Datei eine deploybare ROS-2-Simulation mit AAS-Integration erzeugt.',
      'exp-thesis-more': 'Projektdetails →',
      'exp-praktikum-title': 'Praktikum – Embedded Systems & Automotive Infotainment',
      'exp-praktikum-company': 'Dynavin – F&E-Abteilung (Karlsruhe)',
      'exp-praktikum-1': 'Analyse elektronischer Schaltungen für Fahrzeug-Nachrüstsysteme: 32-Bit-Mikrocontroller, CAN-Bus-Schnittstelle, Spannungsversorgung und Ein-/Ausgangsstufen.',
      'exp-praktikum-2': 'Hardware-Montage, systematische Fehlersuche und Reparatur von Steuergeräten in der Prüfwerkstatt; Funktionstests von Navigationssystemen.',
      'exp-praktikum-3': 'Unterstützung bei der Fahrzeugintegration von Nachrüstsystemen und Diagnose von CAN-Bus-Komponenten in Kundenfahrzeugen.',
      'exp-praktikum-more': 'Projektdetails →',
      'exp-buddhiherz-title': 'Buddhiherz — Cloud-Lagerverwaltungssystem',
      'exp-buddhiherz-company': 'Persönliches Full-Stack-Projekt · ausgeliefert 10/2026',
      'exp-buddhiherz-1': 'Cloud-basiertes Lagerverwaltungssystem mit dreistufiger Architektur: L1-Regelwerk → L2-KI-Assistent → L3-Datenkorrektur.',
      'exp-buddhiherz-2': 'Flask + SQLite Backend, deployiert auf VPS mit Docker, automatisierten Backups und fail2ban-Sicherheit.',
      'exp-buddhiherz-3': '54/54 Testfälle bestanden. Reduzierung der manuellen Bestandsaufnahme um ∼80%.',
      'exp-buddhiherz-more': 'Projektdetails →',
      'exp-eti-title': 'Werkstudent – Leistungselektronik & Hardware-Design',
      'exp-eti-1': 'Entwurf und Simulation eines Buck-Wandlers in MATLAB/Simulink; Erzielung einer Ausgangsspannungswelligkeit <5% unter variablen Lastbedingungen.',
      'exp-eti-2': 'Vollständige PCB-Schaltplanerstellung, Layout und elektrische Regelprüfung in Altium Designer.',
      'exp-eti-more': 'Projektdetails →',
      'exp-itiv-title': 'Werkstudent – Autonomes Fahren (Prototyping)',
      'exp-itiv-tag': 'Sensorfusion',
      'exp-itiv-1': 'Entwicklung eingebetteter C++-Software für einen autonomen Fahrzeugprototyp (Maßstab 1:10) mit Echtzeit-Hinderniserkennung und -vermeidung auf einem Dual-Core ARM MCU.',
      'exp-itiv-more': 'Projektdetails →',
      'proj-title': 'Projekte',

      'proj-bennu-title': 'Bennu — AI-Hausroboter',
      'proj-bennu-meta': 'Persönliches KI-Projekt · seit 09/2026 · Entwicklungszeitraum ~1 Jahr',
      'proj-bennu-desc': 'Die Vision: ein autonomer Hausroboter mit Umgebungswahrnehmung, Bewegung, langfristigem Gedächtnis und natürlicher Sprachinteraktion. Aktuell entsteht sein „Gehirn": ein selbst gehostetes Lebensassistenz-System mit Sprachassistent (Wake-Word → ASR → LLM-Agent → TTS), Kalender, Buchhaltung, Gesundheitsdaten und Smart-Home-Steuerung — alle Eingänge (Stimme, Web-Dashboard, Android-App, Sensoren) laufen auf eine Datenbank zusammen. Entwicklung seit dem 15.09.2026; der geschätzte Gesamtzeitraum beträgt rund ein Jahr.',
      'proj-bennu-more': 'Projektdetails →',
      'proj-fitlog-title': 'Full-Stack Gesundheits-App „Fitlog"',
      'proj-fitlog-meta': 'Persönliches KI-Projekt · 01/2025 – heute',
      'proj-fitlog-desc': 'Full-Stack-System mit Android-Client (MVVM) und serverseitiger KI-Pipeline zur automatisierten Kalorienschätzung von Lebensmitteln durch Bilderkennung. REST API + lokale/entfernte Datenbanksynchronisation (Room + Remote DB) mit offlinefähiger Architektur.',

      'skills-title': 'Kompetenzen',
      'skills-ai': '🤖 KI & LLM',
      'skills-prog': '💻 Programmierung',
      'skills-robo': '🦾 Robotik',
      'skills-mobile': '📱 Mobile & Web',
      'skills-tools': '🛠 Tools & DevOps',
      'skills-lang': '🌐 Sprachen',
      'lang-zh': 'Chinesisch (Muttersprache)',
      'lang-de': 'Deutsch (C1 / DSH-3)',
      'lang-en': 'Englisch (B2 / Fachkundig)',

      'contact-title': 'Kontakt',
      'contact-intro': 'Ich bin immer offen für neue Möglichkeiten und spannende Projekte. Sprechen Sie mich gerne an!',
      'contact-email': 'E-Mail',
      'contact-phone': 'Telefon',
      'contact-loc': 'Standort',
      'contact-loc-val': 'Karlsruhe, Deutschland',
      'footer-text': '© 2026 Ben He. Alle Rechte vorbehalten.',
      'back-top': 'Zurück nach oben',
    },
    en: {
      'meta-desc': 'Ben He — M.Sc. EEIT @ KIT. Specialized in AI, robotics and intelligent automation. Experience in digital twins, ROS 2, LLM agents and full-stack development.',
      'nav-home': 'Home',
      'nav-main': 'Main navigation',
      'nav-about': 'About',
      'nav-edu': 'Education',
      'nav-exp': 'Experience',
      'nav-proj': 'Projects',
      'nav-skills': 'Skills',
      'nav-contact': 'Contact',
      'lang-switch': 'Auf Deutsch wechseln',
      'theme-switch': 'Toggle theme',
      'menu-open': 'Open menu',
      'hero-greeting': "Hello, I'm",
      'hero-subtitle': 'M.Sc. Electrical Engineering & Information Technology (EEIT) · AI · Robotics · Intelligent Automation',
      'hero-cta': 'Contact',
      'scroll': 'Scroll',
      'about-title': 'About Me',
      'about-text': 'Engineer at KIT specializing in <strong>AI, robotics and intelligent automation</strong>. I am pursuing a career as an <strong>AI Engineer</strong> or <strong>Robotics Engineer</strong> — with experience in digital twin systems, ROS&nbsp;2, LLM agents, full-stack development and embedded systems.',
      'about-photo': 'Personal introduction',
      'portrait-alt': 'Portrait of Ben He',
      'edu-title': 'Education',
      'edu-kit-degree': 'B.Sc. Electrical Engineering and Information Technology',
      'edu-kit-note': 'Graduated: 09/2026',
      'edu-kit-msc-degree': 'M.Sc. Electrical Engineering & Information Technology (EEIT)',
      'edu-kit-msc-note': 'Focus: AI, Robotics & Intelligent Automation',
      'edu-yz-degree': 'Information and Computing Science',
      'edu-yz-note': 'Transferred to KIT',
      'exp-title': 'University Project Experience',
      'exp-thesis-title': "Bachelor's Thesis: Design of a Digital Twin Infrastructure for Robotics",
      'exp-thesis-1': 'Development of a Python toolchain (Submodel Generator) for automatic extraction of URDF/YAML data into six semantic AAS submodels: <em>Structure, Kinematics, Dynamics, Control, Safety, Visualization</em>.',
      'exp-thesis-2': 'Multi-robot generator that fully automatically instantiates complex ROS 2 simulation scenarios from AAS data — no manual configuration required.',
      'exp-thesis-3': 'Validation of cross-platform interoperability on heterogeneous robot systems (Universal Robots & igus ReBeL): URDF → AAS → Simulation, end-to-end.',
      'exp-thesis-4': 'Formalization of the AAS specification (v3.0) as XML schemas and derivation of a domain-specific language (DSL) for semantic robot modeling.',
      'exp-thesis-5': 'Result: Fully automated <em>Digital Twin Generator</em> that produces a deployable ROS 2 simulation with AAS integration from a single URDF file.',
      'exp-thesis-more': 'Project details →',
      'exp-praktikum-title': 'Internship – Embedded Systems & Automotive Infotainment',
      'exp-praktikum-company': 'Dynavin – R&D Department (Karlsruhe)',
      'exp-praktikum-1': 'Analysis of electronic circuits for vehicle aftermarket systems: 32-bit microcontroller, CAN-bus interface, power supply and input/output stages.',
      'exp-praktikum-2': 'Hardware assembly, systematic troubleshooting and repair of control units in the test workshop; functional testing of navigation systems.',
      'exp-praktikum-3': 'Support for vehicle integration of aftermarket systems and diagnosis of CAN-bus components in customer vehicles.',
      'exp-praktikum-more': 'Project details →',
      'exp-buddhiherz-title': 'Buddhiherz — Cloud Warehouse Management System',
      'exp-buddhiherz-company': 'Personal Full-Stack Project · delivered 10/2026',
      'exp-buddhiherz-1': 'Cloud-based warehouse management system with three-tier architecture: L1 rule engine → L2 AI assistant → L3 data correction.',
      'exp-buddhiherz-2': 'Flask + SQLite backend deployed on VPS with Docker, automated backups and fail2ban security.',
      'exp-buddhiherz-3': '54/54 tests passed. Reduced manual inventory counting by ∼80%.',
      'exp-buddhiherz-more': 'Project details →',
      'exp-eti-title': 'Research Assistant – Power Electronics & Hardware Design',
      'exp-eti-1': 'Design and simulation of a buck converter in MATLAB/Simulink; achieved output voltage ripple <5% under variable load conditions.',
      'exp-eti-2': 'Complete PCB schematic design, layout and electrical rule checking in Altium Designer.',
      'exp-eti-more': 'Project details →',
      'exp-itiv-title': 'Research Assistant – Autonomous Driving (Prototyping)',
      'exp-itiv-tag': 'Sensor Fusion',
      'exp-itiv-1': 'Development of embedded C++ software for a 1:10 scale autonomous vehicle prototype with real-time obstacle detection and avoidance on a dual-core ARM MCU.',
      'exp-itiv-more': 'Project details →',
      'proj-title': 'Projects',

      'proj-bennu-title': 'Bennu — AI Home Robot',
      'proj-bennu-meta': 'Personal AI project · since 09/2026 · ~1-year development cycle',
      'proj-bennu-desc': 'The vision: an autonomous home robot with environment perception, mobility, long-term memory and natural voice interaction. Its "brain" is currently taking shape: a self-hosted life-assistance system with a voice assistant (wake word → ASR → LLM agent → TTS), calendar, bookkeeping, health data and smart-home control — all inputs (voice, web dashboard, Android app, sensors) converge into a single database. Development started on 15.09.2026; the estimated total duration is about one year.',
      'proj-bennu-more': 'Project details →',
      'proj-fitlog-title': 'Full-Stack Health App "Fitlog"',
      'proj-fitlog-meta': 'Personal AI Project · 01/2025 – present',
      'proj-fitlog-desc': 'Full-stack system with Android client (MVVM) and server-side AI pipeline for automated calorie estimation from food images. REST API + local/remote database synchronization (Room + Remote DB) with offline-capable architecture.',

      'skills-title': 'Skills',
      'skills-ai': '🤖 AI & LLM',
      'skills-prog': '💻 Programming',
      'skills-robo': '🦾 Robotics',
      'skills-mobile': '📱 Mobile & Web',
      'skills-tools': '🛠 Tools & DevOps',
      'skills-lang': '🌐 Languages',
      'lang-zh': 'Chinese (Native)',
      'lang-de': 'German (C1 / DSH-3)',
      'lang-en': 'English (B2 / Proficient)',

      'contact-title': 'Contact',
      'contact-intro': "I'm always open to new opportunities and exciting projects. Feel free to reach out!",
      'contact-email': 'Email',
      'contact-phone': 'Phone',
      'contact-loc': 'Location',
      'contact-loc-val': 'Karlsruhe, Germany',
      'footer-text': '© 2026 Ben He. All rights reserved.',
      'back-top': 'Back to top',
    },
    zh: {
      'meta-desc': 'Ben He — KIT EEIT 硕士。专注人工智能、机器人和智能自动化。具备数字孪生、ROS 2、LLM Agent 和全栈开发经验。',
      'nav-home': '返回首页',
      'nav-main': '主导航',
      'nav-about': '关于我',
      'nav-edu': '教育背景',
      'nav-exp': '项目经验',
      'nav-proj': '个人项目',
      'nav-skills': '技能',
      'nav-contact': '联系方式',
      'lang-switch': 'Switch to German',
      'theme-switch': '切换主题',
      'menu-open': '打开菜单',
      'hero-greeting': '你好，我是',
      'hero-subtitle': '电气工程与信息技术硕士 (EEIT) · 人工智能 · 机器人 · 智能自动化',
      'hero-cta': '联系我',
      'scroll': '向下滚动',
      'about-title': '关于我',
      'about-text': 'KIT 工程师，专注于<strong>人工智能、机器人和智能自动化</strong>。致力于成为 <strong>AI 工程师</strong>或<strong>机器人工程师</strong>——具备数字孪生系统、ROS&nbsp;2、LLM Agent、全栈开发和嵌入式系统方面的经验。',
      'about-photo': '个人介绍',
      'portrait-alt': 'Ben He 肖像',
      'edu-title': '教育背景',
      'edu-kit-degree': 'B.Sc. 电气工程与信息技术',
      'edu-kit-note': '毕业时间：2026年9月',
      'edu-kit-msc-degree': '电气工程与信息技术硕士 (EEIT)',
      'edu-kit-msc-note': '方向：人工智能、机器人与智能自动化',
      'edu-yz-degree': '信息与计算科学',
      'edu-yz-note': '转学至 KIT',
      'exp-title': '大学项目经验',
      'exp-thesis-title': '本科毕业论文：面向机器人的数字孪生基础设施设计',
      'exp-thesis-1': '开发 Python 工具链（子模型生成器），自动从 URDF/YAML 数据中提取六个语义化 AAS 子模型：<em>结构、运动学、动力学、控制、安全、可视化</em>。',
      'exp-thesis-2': '多机器人生成器，从 AAS 数据全自动实例化复杂的 ROS 2 仿真场景——无需手动配置。',
      'exp-thesis-3': '在异构机器人系统（Universal Robots 和 igus ReBeL）上验证跨平台互操作性：URDF → AAS → 仿真，端到端闭环。',
      'exp-thesis-4': '将 AAS 规范（v3.0）形式化为 XML Schema，并推导出用于语义化机器人建模的领域特定语言（DSL）。',
      'exp-thesis-5': '成果：<em>数字孪生生成器</em>，可从单个 URDF 文件自动生成带 AAS 集成的可部署 ROS 2 仿真环境。',
      'exp-thesis-more': '项目详情 →',
      'exp-praktikum-title': '实习 – 嵌入式系统与车载信息娱乐',
      'exp-praktikum-company': 'Dynavin 公司 – 研发部（卡尔斯鲁厄）',
      'exp-praktikum-1': '分析车辆后装系统的电子电路：32 位微控制器、CAN 总线接口、电源与输入/输出级。',
      'exp-praktikum-2': '检测车间中的硬件组装、系统化排障与控制器维修；导航系统功能测试。',
      'exp-praktikum-3': '协助后装系统的整车集成，并在客户车辆中诊断 CAN 总线部件。',
      'exp-praktikum-more': '项目详情 →',
      'exp-buddhiherz-title': 'Buddhiherz — 云端仓库管理系统',
      'exp-buddhiherz-company': '个人全栈项目 · 2026 年 10 月已交付',
      'exp-buddhiherz-1': '云端仓库管理系统，三层架构：L1 规则引擎 → L2 AI 助手 → L3 数据修正。',
      'exp-buddhiherz-2': 'Flask + SQLite 后端，部署在 VPS 上，配备 Docker、自动备份和 fail2ban 安全防护。',
      'exp-buddhiherz-3': '通过 54/54 测试用例。人工盘点工时减少约 80%。',
      'exp-buddhiherz-more': '项目详情 →',
      'exp-eti-title': '学生助研 – 电力电子与硬件设计',
      'exp-eti-1': '在 MATLAB/Simulink 中设计并仿真 Buck 变换器；在可变负载条件下实现输出电压纹波 <5%。',
      'exp-eti-2': '在 Altium Designer 中完成完整的 PCB 原理图设计、布局和电气规则检查。',
      'exp-eti-more': '项目详情 →',
      'exp-itiv-title': '学生助研 – 自动驾驶（原型开发）',
      'exp-itiv-tag': '传感器融合',
      'exp-itiv-1': '为 1:10 比例自动驾驶原型车开发嵌入式 C++ 软件，在双核 ARM MCU 上实现实时障碍物检测与避障。',
      'exp-itiv-more': '项目详情 →',
      'proj-title': '个人项目',

      'proj-bennu-title': 'Bennu —— AI 智能机器人',
      'proj-bennu-meta': '个人 AI 项目 · 2026 年 9 月起 · 开发周期约 1 年',
      'proj-bennu-desc': '构想：一台具备环境感知、自主移动、长期记忆与自然语音交互能力的家庭智能机器人。目前正在打造它的「大脑」：自托管的生活助手系统——语音助手（唤醒词 → 语音识别 → LLM 智能体 → 语音合成）、日程、记账、健康数据与智能家居控制，所有入口（语音、网页看板、Android App、传感器）汇入同一份数据库。开发于 2026 年 9 月 15 日启动，预计总开发周期约一年。',
      'proj-bennu-more': '项目详情 →',
      'proj-fitlog-title': '全栈健康 App "Fitlog"',
      'proj-fitlog-meta': '个人 AI 项目 · 2025年1月至今',
      'proj-fitlog-desc': '全栈系统：Android 客户端 (MVVM) + 服务端 AI 管道，通过图像识别自动估算食物热量。REST API + 本地/远程数据库同步 (Room + Remote DB)，支持离线架构。',

      'skills-title': '技能',
      'skills-ai': '🤖 AI & LLM',
      'skills-prog': '💻 编程语言',
      'skills-robo': '🦾 机器人',
      'skills-mobile': '📱 移动端 & Web',
      'skills-tools': '🛠 工具 & DevOps',
      'skills-lang': '🌐 语言能力',
      'lang-zh': '中文（母语）',
      'lang-de': '德语 (C1 / DSH-3)',
      'lang-en': '英语 (B2 / 专业熟练)',

      'contact-title': '联系方式',
      'contact-intro': '我始终对新机会和有趣的项目持开放态度。欢迎联系我！',
      'contact-email': '邮箱',
      'contact-phone': '电话',
      'contact-loc': '所在地',
      'contact-loc-val': '德国 卡尔斯鲁厄',
      'footer-text': '© 2026 Ben He. 保留所有权利。',
      'back-top': '回到顶部',
    },
  };

  // Typewriter titles per language
  const typewriterTitles = {
    de: [
      'AI & Robotics Engineer',
      'Digital Twin & ROS 2',
      'KI-gestützte Automatisierung',
      'Embedded Systems & Full-Stack',
    ],
    en: [
      'AI & Robotics Engineer',
      'Digital Twin & ROS 2',
      'Intelligent Automation',
      'Embedded Systems & Full-Stack',
    ],
    zh: [
      'AI 与机器人工程师',
      '数字孪生 & ROS 2',
      '智能自动化系统',
      '嵌入式 & 全栈开发',
    ],
  };

  // Language cycle order
  const LANG_ORDER = ['de', 'en', 'zh'];
  const LANG_LABEL = { de: 'DE', en: 'EN', zh: '中' };

  // ─── DOM References ───────────────────────────────────────
  const DOM = {};
  function cacheDom() {
    DOM.navbar = document.getElementById('navbar');
    DOM.navLinks = document.getElementById('navLinks');
    DOM.navLinkItems = document.querySelectorAll('.nav-links a');
    DOM.hamburger = document.getElementById('hamburger');
    DOM.themeToggle = document.getElementById('themeToggle');
    DOM.langSwitcher = document.getElementById('langSwitcher');
    DOM.langOptions = document.querySelectorAll('.lang-option');
    DOM.scrollProgress = document.getElementById('scrollProgress');
    DOM.heroTitle = document.getElementById('heroTitle');
    DOM.heroParticles = document.getElementById('heroParticles');
    DOM.backToTop = document.querySelector('.back-to-top');
    DOM.projectCards = document.querySelectorAll('.project-card');
    DOM.revealElements = document.querySelectorAll('.reveal');
    DOM.revealStaggerContainers = document.querySelectorAll('.reveal-stagger');
  }

  // ─── i18n System ───────────────────────────────────────
  let currentLang = 'de';
  let typewriterTimer = null;

  function getLang() {
    const saved = localStorage.getItem('lang');
    if (saved === 'de' || saved === 'en' || saved === 'zh') return saved;
    const browserLang = (navigator.language || '').split('-')[0];
    if (browserLang === 'de') return 'de';
    if (browserLang === 'zh') return 'zh';
    return 'de'; // default DE
  }

  function nextLang(lang) {
    const idx = LANG_ORDER.indexOf(lang);
    return LANG_ORDER[(idx + 1) % LANG_ORDER.length];
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

    // Update lang switcher buttons
    if (DOM.langOptions) {
      DOM.langOptions.forEach((btn) => {
        const active = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-checked', active ? 'true' : 'false');
      });
    }

    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (T[lang][key]) {
        el.innerHTML = T[lang][key];
      }
    });

    // Update elements with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (T[lang][key]) {
        el.setAttribute('aria-label', T[lang][key]);
      }
    });

    // Update elements with data-i18n-alt
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (T[lang][key]) {
        el.setAttribute('alt', T[lang][key]);
      }
    });

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && T[lang]['meta-desc']) {
      metaDesc.setAttribute('content', T[lang]['meta-desc']);
    }

    // Restart typewriter
    if (DOM.heroTitle) {
      if (typewriterTimer) clearTimeout(typewriterTimer);
      typewriter(DOM.heroTitle, typewriterTitles[lang], {
        typeSpeed: 55,
        deleteSpeed: 30,
        pauseBetween: 2800,
        pauseAfterDelete: 350,
      });
    }
  }

  function initLangSwitcher() {
    if (!DOM.langOptions) return;
    DOM.langOptions.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang && lang !== currentLang) setLang(lang);
      });
    });
  }

  // ─── Theme Toggle ────────────────────────────────────────
  function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  // ─── Typewriter Effect ──────────────────────────────────
  function typewriter(element, texts, opts = {}) {
    const {
      typeSpeed = 60,
      deleteSpeed = 35,
      pauseBetween = 2500,
      pauseAfterDelete = 400,
    } = opts;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      element.appendChild(cursor);

      let delay = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        delay = pauseBetween;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = pauseAfterDelete;
      }

      typewriterTimer = setTimeout(tick, delay);
    }

    tick();
  }

  // ─── Hero Particles Canvas ───────────────────────────────
  function initParticles() {
    if (!DOM.heroParticles) return;

    const canvas = DOM.heroParticles;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;

    function resize() {
      const hero = canvas.parentElement;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    function createParticles() {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 60);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 1.8 + 0.4,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const color = isDark ? '148, 163, 184' : '100, 116, 139';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${color}, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
  }

  // ─── Scroll Progress Bar ─────────────────────────────────
  function initScrollProgress() {
    if (!DOM.scrollProgress) return;
    window.addEventListener(
      'scroll',
      () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        DOM.scrollProgress.style.width = `${Math.min(progress, 100)}%`;
      },
      { passive: true }
    );
  }

  // ─── Navbar Active Link ──────────────────────────────────
  function initActiveNavLink() {
    const sections = [];
    DOM.navLinkItems.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) sections.push({ link, section });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            DOM.navLinkItems.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s.section));
  }

  // ─── Scroll Reveal ──────────────────────────────────────
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    DOM.revealElements.forEach((el) => observer.observe(el));

    DOM.revealStaggerContainers.forEach((container) => {
      const children = container.children;
      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              Array.from(children).forEach((child, i) => {
                setTimeout(() => child.classList.add('visible'), i * 120);
              });
              staggerObserver.unobserve(container);
            }
          });
        },
        { threshold: 0.1 }
      );
      staggerObserver.observe(container);
    });
  }

  // ─── Mobile Navigation ───────────────────────────────────
  function initMobileNav() {
    if (!DOM.hamburger || !DOM.navLinks) return;

    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    function open() {
      DOM.navLinks.classList.add('open');
      DOM.hamburger.classList.add('active');
      overlay.classList.add('active');
      DOM.hamburger.setAttribute('aria-expanded', 'true');
      DOM.hamburger.setAttribute('aria-label', 'Menü schließen');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      DOM.navLinks.classList.remove('open');
      DOM.hamburger.classList.remove('active');
      overlay.classList.remove('active');
      DOM.hamburger.setAttribute('aria-expanded', 'false');
      DOM.hamburger.setAttribute('aria-label', 'Menü öffnen');
      document.body.style.overflow = '';
    }

    DOM.hamburger.addEventListener('click', () => {
      DOM.navLinks.classList.contains('open') ? close() : open();
    });

    overlay.addEventListener('click', close);

    DOM.navLinkItems.forEach((link) => {
      link.addEventListener('click', () => {
        if (DOM.navLinks.classList.contains('open')) close();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.navLinks.classList.contains('open')) close();
    });
  }

  // ─── Mouse Tracking for Project Card Glow ────────────────
  function initProjectCardGlow() {
    DOM.projectCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }

  // ─── Back to Top ─────────────────────────────────────────
  function initBackToTop() {
    if (!DOM.backToTop) return;
    DOM.backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Navbar Shadow on Scroll ─────────────────────────────
  function initNavbarShadow() {
    if (!DOM.navbar) return;
    window.addEventListener(
      'scroll',
      () => {
        DOM.navbar.style.boxShadow = window.scrollY > 10
          ? '0 1px 3px rgba(0,0,0,0.08)'
          : '';
      },
      { passive: true }
    );
  }

  // ─── Visitor Counter (privacy-friendly) ──────────────────
  const VISIT_LABELS = { de: 'Besuche: ', en: 'Visits: ', zh: '访问量: ' };
  function initVisitorCounter() {
    const storageKey = 'benhe_visits';
    const now = Date.now();

    let data;
    try {
      data = JSON.parse(localStorage.getItem(storageKey)) || { count: 0, firstVisit: now, lastVisit: 0 };
    } catch {
      data = { count: 0, firstVisit: now, lastVisit: 0 };
    }

    if (now - data.lastVisit > 30 * 60 * 1000) {
      data.count++;
    }
    data.lastVisit = now;
    localStorage.setItem(storageKey, JSON.stringify(data));

    const footer = document.querySelector('.footer-content');
    if (footer && data.count > 0) {
      const span = document.createElement('span');
      span.style.cssText = 'font-size:0.85rem;color:var(--color-text-muted);';
      span.textContent = (VISIT_LABELS[currentLang] || VISIT_LABELS.de) + data.count;
      span.id = 'visitorCount';
      const btt = footer.querySelector('.back-to-top');
      if (btt) {
        footer.insertBefore(span, btt);
      } else {
        footer.appendChild(span);
      }
    }
  }

  // ─── Init Everything ─────────────────────────────────────
  function init() {
    cacheDom();

    // Apply saved language first
    const lang = getLang();
    setLang(lang);

    initTheme();
    initScrollProgress();
    initNavbarShadow();
    initActiveNavLink();
    initMobileNav();
    initScrollReveal();
    initProjectCardGlow();
    initBackToTop();
    initParticles();
    initVisitorCounter();

    // Theme toggle
    if (DOM.themeToggle) {
      DOM.themeToggle.addEventListener('click', toggleTheme);
    }

    // Language switcher
    initLangSwitcher();

    // System theme auto-switch
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
