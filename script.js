/* ============================================================
   Personal Website — Ben He
   Interactive Scripts
   ============================================================ */

(function () {
  'use strict';

  // ─── Translations ──────────────────────────────────────
  const T = {
    de: {
      'about-tag-msc': 'KIT · M.Sc. EEIT (laufend)',
      'meta-desc': 'Ben He — M.Sc.-Student EEIT am KIT. Robotik-Software und angewandte LLM-Systeme: ROS 2, Digital Twins, LLM-Anwendungen und Embedded Systems. Offen für Werkstudentenstellen, Praktika und Abschlussarbeiten.',
      'nav-home': 'Zur Startseite',
      'nav-main': 'Hauptnavigation',
      'nav-about': 'Über mich',
      'nav-edu': 'Ausbildung',
      'nav-exp': 'Erfahrung',
      'nav-proj': 'Projekte',
      'nav-skills': 'Kompetenzen',
      'nav-contact': 'Kontakt',
      'lang-switch': 'Sprache wählen',
      'theme-switch': 'Design umschalten',
      'menu-open': 'Menü öffnen',
      'menu-close': 'Menü schließen',
      'hero-greeting': 'Hallo, ich bin',
      'hero-title': 'Robotik-Software & angewandte LLM-Systeme',
      'hero-subtitle': 'M.Sc.-Student Elektrotechnik und Informationstechnik am KIT · Offen für Werkstudentenstellen, Praktika und Abschlussarbeiten',
      'hero-proof-1': 'Ausgeliefertes Lagerverwaltungssystem mit LLM-Dokumentenextraktion',
      'hero-proof-2': 'ROS-2-/AAS-Toolchain für Multi-Robot-Digital-Twins (Bachelorarbeit)',
      'hero-proof-3': 'Buck-Wandler mit digitaler STM32-Regelung: von der Simulation bis zur Platine',
      'hero-cv': 'Lebenslauf (PDF)',
      'hero-cta': 'Kontakt',
      'scroll': 'Scrollen',
      'about-title': 'Über mich',
      'about-text': 'M.Sc.-Student der Elektrotechnik und Informationstechnik am KIT mit Schwerpunkt auf <strong>Robotik-Software und angewandten LLM-Systemen</strong>. Mein Hintergrund reicht von Mikrocontrollern und CAN-Bus über ROS&nbsp;2 und Digital Twins bis zu LLM-Anwendungen im praktischen Einsatz. Ich suche eine <strong>Werkstudentenstelle, ein Praktikum oder eine Abschlussarbeit</strong> in diesem Bereich.',
      'about-photo': 'Persönliche Vorstellung',
      'portrait-alt': 'Portrait von Ben He',
      'edu-title': 'Ausbildung',
      'edu-kit-name': 'Karlsruher Institut für Technologie (KIT)',
      'edu-yz-name': 'Yangtze-Universität',
      'edu-kit-degree': 'B.Sc. Elektrotechnik und Informationstechnik',
      'edu-kit-note': 'Abschluss: 06/2026 · Bachelorarbeit: Note 2,3',
      'edu-kit-msc-degree': 'M.Sc. Elektrotechnik und Informationstechnik (EEIT)',
      'edu-kit-msc-note': 'Schwerpunkt: KI, Robotik & intelligente Automatisierung',
      'edu-kit-msc-date': '10/2026 – heute',
      'edu-prep-name': 'Studienvorbereitung in Deutschland',
      'edu-prep-degree': 'telc Deutsch C1 Hochschule (04/2021)',
      'edu-yz-degree': 'Information and Computing Science',
      'edu-yz-note': 'Wechsel ans KIT',
      'exp-title': 'Berufserfahrung',
      'uni-title': 'Universitäre Projekterfahrung',
      'exp-thesis-title': 'Bachelorarbeit: Entwurf und Implementierung eines AAS-Submodells für industrielle Robotersysteme',
      'exp-thesis-company': 'Institut für Regelungs- und Steuerungssysteme (IRS), KIT · Note 2,3',
      'exp-thesis-1': 'Python-Toolchain (Submodel Generator), die URDF-/YAML-Daten automatisch in sechs semantische AAS-Teilmodelle überführt: <em>Struktur, Kinematik, Dynamik, Steuerung, Sicherheit, Visualisierung</em> — für 12 UR-Modelle und den igus ReBeL.',
      'exp-thesis-2': 'Multi-Robot-Generator erzeugt aus einer Konfigurationsdatei (Typ, Position, Gelenkgrenzen) und den AAS-Daten automatisch ROS-2-Simulationsszenarien.',
      'exp-thesis-3': 'Ende-zu-Ende-Validierung in der Simulation: Universal Robots (UR3/UR5) über den Standard-Generator, igus ReBeL über eine erweiterte Pipeline.',
      'exp-thesis-4': 'Ergebnis: <em>Digital-Twin-Generator</em>, der aus URDF-Beschreibungen und einer Konfigurationsdatei eine ROS-2-Simulation mit AAS-Integration erzeugt.',
      'exp-thesis-more': 'Projektdetails →',
      'exp-praktikum-title': 'Praktikant F&E – Embedded Systems',
      'exp-praktikum-company': 'Dynavin GmbH (Karlsruhe)',
      'exp-praktikum-1': 'Analyse elektronischer Schaltungen für Fahrzeug-Nachrüstsysteme: 32-Bit-Mikrocontroller, CAN-Bus-Schnittstelle, Spannungsversorgung und Ein-/Ausgangsstufen.',
      'exp-praktikum-2': 'Hardware-Montage, systematische Fehlersuche und Reparatur von Steuergeräten in der Prüfwerkstatt; Funktionstests von Navigationssystemen.',
      'exp-praktikum-3': 'Unterstützung bei der Fahrzeugintegration von Nachrüstsystemen und Diagnose von CAN-Bus-Komponenten in Kundenfahrzeugen.',
      'exp-praktikum-more': 'Projektdetails →',
      'exp-buddhiherz-title': 'Entwickler Lagerverwaltungssystem (WMS)',
      'exp-buddhiherz-company': 'Buddhiherz / König Winna GmbH (Ettlingen)',
      'exp-buddhiherz-1': 'Dreistufige Dokumentenextraktion: Offline-Regeln (≈0,02 s, keine API-Kosten), danach LLM-Text- und Bildextraktion mit Fallback-Modell; Problemfälle landen in einem manuellen Korrektur-Workflow.',
      'exp-buddhiherz-2': 'Auslieferung mit Flask, SQLite, Waitress, systemd und nginx auf einem Linux-VPS; Anbindung der GLS-API für Versandlabels sowie PDF-Erzeugung für Rechnungen und Lieferscheine.',
      'exp-buddhiherz-3': 'Ersetzt den manuellen Excel- und Papierprozess im Lager; rollenbasierter Login (Mitarbeitende per E-Mail + PIN), tägliche Backups und 100+ automatisierte Regressionstests.',
      'exp-buddhiherz-more': 'Projektdetails →',
      'exp-eti-title': 'Hardware-Design & Leistungselektronik',
      'exp-eti-company': 'Elektrotechnisches Institut (ETI), KIT',
      'exp-eti-1': 'Buck-Wandler von der Auslegung bis zur Inbetriebnahme: 40 V Eingang, 1–36 V Ausgang, bis 50 W; Simulation in MATLAB/Simulink (Simscape), Auslegungsziel für den Ausgangsrippel ≤ 0,5 % von U<sub>E</sub>.',
      'exp-eti-2': 'Mehrlagiges PCB in Altium Designer (Schaltplan, Layout, DRC), manuelle Bestückung und systematische Inbetriebnahme.',
      'exp-eti-3': 'Kaskadierte PI-Regelung (Strom und Spannung) mit Stateflow-Fehlerabschaltung auf einem STM32; C++-Code per Embedded Coder generiert.',
      'exp-eti-more': 'Projektdetails →',
      'exp-itiv-title': 'Embedded-Modellfahrzeug: Distanzmessung & Lenkung',
      'exp-itiv-company': 'Institut für Technik der Informationsverarbeitung (ITIV), KIT',
      'exp-itiv-1': 'Teamprojekt im Praktikum Informationstechnik I: eigene C++-Module für Ultraschall-Distanzmessung (HC-SR04, Timer-Capture) mit mehrstufiger LED-Warnung und für die Joystick-Lenkung (ADC, Differenzialantrieb) auf einem Tiva-C-Mikrocontroller (TM4C123).',
      'exp-itiv-more': 'Projektdetails →',
      'proj-title': 'Projekte',
      'proj-fitlog-title': 'Full-Stack Gesundheits-App „Fitlog"',
      'proj-fitlog-meta': 'Persönliches KI-Projekt · 01/2025 – 06/2026',
      'proj-fitlog-desc': 'Android-App (Kotlin/Java, MVVM) mit Room-Datenbank, REST-API und offlinefähiger Synchronisation. Kalorienschätzung aus Essensfotos über ein multimodales LLM; die Ergebnisse werden vor dem Speichern manuell geprüft.',
      'proj-fitlog-note': 'Repository privat · Einblick auf Anfrage',

      'skills-title': 'Kompetenzen',
      'skills-ai': 'KI & LLM',
      'skills-prog': 'Programmierung',
      'skills-robo': 'Robotik',
      'skills-mobile': 'Mobile & Web',
      'skills-hw': 'Hardware',
      'skills-tools': 'Tools & DevOps',
      'skills-lang': 'Sprachen',
      'skill-llm': 'LLM-Anwendungen',
      'skill-mm': 'Multimodale LLMs',
      'lang-zh': 'Chinesisch (Muttersprache)',
      'lang-de': 'Deutsch (C1, telc C1 Hochschule)',
      'lang-en': 'Englisch (B2 / Gute Kenntnisse)',

      'contact-title': 'Kontakt',
      'contact-intro': 'Für Werkstudentenstellen, Praktika und Abschlussarbeiten erreichen Sie mich am besten per E-Mail.',
      'contact-email': 'E-Mail',
      'contact-cv': 'Lebenslauf',
      'contact-cv-val': 'PDF herunterladen',
      'contact-loc': 'Standort',
      'contact-loc-val': 'Karlsruhe, Deutschland',
      'footer-text': '© 2026 Ben He. Alle Rechte vorbehalten.',
      'back-top': 'Zurück nach oben',
    },
    en: {
      'about-tag-msc': 'KIT · M.Sc. EEIT (in progress)',
      'meta-desc': 'Ben He — M.Sc. student in EEIT at KIT. Robotics software and applied LLM systems: ROS 2, digital twins, LLM applications and embedded systems. Open to working-student roles, internships and thesis projects.',
      'nav-home': 'Home',
      'nav-main': 'Main navigation',
      'nav-about': 'About',
      'nav-edu': 'Education',
      'nav-exp': 'Experience',
      'nav-proj': 'Projects',
      'nav-skills': 'Skills',
      'nav-contact': 'Contact',
      'lang-switch': 'Choose language',
      'theme-switch': 'Toggle theme',
      'menu-open': 'Open menu',
      'menu-close': 'Close menu',
      'hero-greeting': "Hello, I'm",
      'hero-title': 'Robotics Software & Applied LLM Systems',
      'hero-subtitle': 'M.Sc. student in Electrical Engineering & Information Technology at KIT · Open to working-student roles, internships and thesis projects',
      'hero-proof-1': 'Delivered warehouse management system with LLM document extraction',
      'hero-proof-2': 'ROS 2 / AAS toolchain for multi-robot digital twins (bachelor\'s thesis)',
      'hero-proof-3': 'Buck converter with digital STM32 control: from simulation to PCB',
      'hero-cv': 'CV (PDF)',
      'hero-cta': 'Contact',
      'scroll': 'Scroll',
      'about-title': 'About Me',
      'about-text': 'M.Sc. student in Electrical Engineering & Information Technology at KIT, focused on <strong>robotics software and applied LLM systems</strong>. My background spans microcontrollers and CAN bus, ROS&nbsp;2 and digital twins, and LLM applications in practical use. I am looking for a <strong>working-student role, internship or thesis project</strong> in this area.',
      'about-photo': 'Personal introduction',
      'portrait-alt': 'Portrait of Ben He',
      'edu-title': 'Education',
      'edu-kit-name': 'Karlsruhe Institute of Technology (KIT)',
      'edu-yz-name': 'Yangtze University',
      'edu-kit-degree': 'B.Sc. Electrical Engineering and Information Technology',
      'edu-kit-note': 'Graduated: 06/2026 · Thesis grade: 2.3 (German scale)',
      'edu-kit-msc-degree': 'M.Sc. Electrical Engineering & Information Technology (EEIT)',
      'edu-kit-msc-note': 'Focus: AI, Robotics & Intelligent Automation',
      'edu-kit-msc-date': '10/2026 – present',
      'edu-prep-name': 'Study Preparation in Germany',
      'edu-prep-degree': 'telc Deutsch C1 Hochschule (04/2021)',
      'edu-yz-degree': 'Information and Computing Science',
      'edu-yz-note': 'Transferred to KIT',
      'exp-title': 'Professional Experience',
      'uni-title': 'University Project Experience',
      'exp-thesis-title': 'Bachelor\'s Thesis: Design and Implementation of an AAS Submodel for Industrial Robotic Systems',
      'exp-thesis-company': 'Institute of Control Systems (IRS), KIT · Grade 2.3',
      'exp-thesis-1': 'Python toolchain (Submodel Generator) that automatically converts URDF/YAML data into six semantic AAS submodels: <em>Structure, Kinematics, Dynamics, Control, Safety, Visualization</em> — for 12 UR models and the igus ReBeL.',
      'exp-thesis-2': 'Multi-robot generator that automatically builds ROS 2 simulation scenes from a configuration file (type, position, joint limits) and the AAS data.',
      'exp-thesis-3': 'End-to-end validation in simulation: Universal Robots (UR3/UR5) via the standard generator, igus ReBeL via an extended pipeline.',
      'exp-thesis-4': 'Result: a <em>digital twin generator</em> that produces a ROS 2 simulation with AAS integration from URDF descriptions and a configuration file.',
      'exp-thesis-more': 'Project details →',
      'exp-praktikum-title': 'R&D Intern – Embedded Systems',
      'exp-praktikum-company': 'Dynavin GmbH (Karlsruhe)',
      'exp-praktikum-1': 'Analysis of electronic circuits for vehicle aftermarket systems: 32-bit microcontroller, CAN-bus interface, power supply and input/output stages.',
      'exp-praktikum-2': 'Hardware assembly, systematic troubleshooting and repair of control units in the test workshop; functional testing of navigation systems.',
      'exp-praktikum-3': 'Support for vehicle integration of aftermarket systems and diagnosis of CAN-bus components in customer vehicles.',
      'exp-praktikum-more': 'Project details →',
      'exp-buddhiherz-title': 'Warehouse Management System Developer',
      'exp-buddhiherz-company': 'Buddhiherz / König Winna GmbH (Ettlingen)',
      'exp-buddhiherz-1': 'Three-stage document extraction: offline rules (≈0.02 s, no API cost), then LLM text and image extraction with a fallback model; edge cases go to a manual correction workflow.',
      'exp-buddhiherz-2': 'Delivered with Flask, SQLite, Waitress, systemd and nginx on a Linux VPS; integrated the GLS API for shipping labels and built PDF generation for invoices and delivery notes.',
      'exp-buddhiherz-3': 'Replaces the manual Excel and paper process in the warehouse; role-based login (staff via email + PIN), daily backups and 100+ automated regression tests.',
      'exp-buddhiherz-more': 'Project details →',
      'exp-eti-title': 'Hardware Design & Power Electronics',
      'exp-eti-company': 'Institute of Electrical Engineering (ETI), KIT',
      'exp-eti-1': 'Buck converter from design to commissioning: 40 V input, 1–36 V output, up to 50 W; simulated in MATLAB/Simulink (Simscape), design target for output ripple ≤ 0.5 % of V<sub>in</sub>.',
      'exp-eti-2': 'Multi-layer PCB in Altium Designer (schematic, layout, DRC), hand assembly and systematic commissioning.',
      'exp-eti-3': 'Cascaded PI control (current and voltage) with Stateflow fault shutdown on an STM32; C++ code generated with Embedded Coder.',
      'exp-eti-more': 'Project details →',
      'exp-itiv-title': 'Embedded Model Car: Distance Sensing & Steering',
      'exp-itiv-company': 'Institute for Information Processing Technology (ITIV), KIT',
      'exp-itiv-1': 'Team project in the Information Technology I lab: my own C++ modules for ultrasonic distance sensing (HC-SR04, timer capture) with multi-level LED warning and for joystick steering (ADC, differential drive) on a Tiva C microcontroller (TM4C123).',
      'exp-itiv-more': 'Project details →',
      'proj-title': 'Projects',
      'proj-fitlog-title': 'Full-Stack Health App "Fitlog"',
      'proj-fitlog-meta': 'Personal AI Project · 01/2025 – 06/2026',
      'proj-fitlog-desc': 'Android app (Kotlin/Java, MVVM) with a Room database, REST API and offline-capable sync. Estimates calories from food photos via a multimodal LLM; results are reviewed by the user before saving.',
      'proj-fitlog-note': 'Private repository · access on request',

      'skills-title': 'Skills',
      'skills-ai': 'AI & LLM',
      'skills-prog': 'Programming',
      'skills-robo': 'Robotics',
      'skills-mobile': 'Mobile & Web',
      'skills-hw': 'Hardware',
      'skills-tools': 'Tools & DevOps',
      'skills-lang': 'Languages',
      'skill-llm': 'LLM applications',
      'skill-mm': 'Multimodal LLMs',
      'lang-zh': 'Chinese (Native)',
      'lang-de': 'German (C1, telc C1 Hochschule)',
      'lang-en': 'English (B2 / Upper-Intermediate)',

      'contact-title': 'Contact',
      'contact-intro': 'For working-student roles, internships and thesis projects, email is the best way to reach me.',
      'contact-email': 'Email',
      'contact-cv': 'CV',
      'contact-cv-val': 'Download PDF',
      'contact-loc': 'Location',
      'contact-loc-val': 'Karlsruhe, Germany',
      'footer-text': '© 2026 Ben He. All rights reserved.',
      'back-top': 'Back to top',
    },
    zh: {
      'about-tag-msc': 'KIT · M.Sc. EEIT 在读',
      'meta-desc': 'Ben He — KIT 电气工程与信息技术硕士在读。机器人软件和 LLM 应用系统：ROS 2、数字孪生、LLM 应用和嵌入式系统。寻找 Werkstudent、实习和毕业论文机会。',
      'nav-home': '返回首页',
      'nav-main': '主导航',
      'nav-about': '关于我',
      'nav-edu': '教育背景',
      'nav-exp': '经验',
      'nav-proj': '项目',
      'nav-skills': '技能',
      'nav-contact': '联系方式',
      'lang-switch': '选择语言',
      'theme-switch': '切换主题',
      'menu-open': '打开菜单',
      'menu-close': '关闭菜单',
      'hero-greeting': '你好，我是',
      'hero-title': '机器人软件与 LLM 应用系统',
      'hero-subtitle': 'KIT 电气工程与信息技术硕士在读 · 寻找 Werkstudent、实习和毕业论文机会',
      'hero-proof-1': '已交付的仓库管理系统，含 LLM 单据提取',
      'hero-proof-2': 'ROS 2 / AAS 多机器人数字孪生工具链（本科论文）',
      'hero-proof-3': 'STM32 数字控制的 Buck 变换器：从仿真到 PCB',
      'hero-cv': '简历 PDF（英文）',
      'hero-cta': '联系我',
      'scroll': '向下滚动',
      'about-title': '关于我',
      'about-text': 'KIT 电气工程与信息技术硕士在读，专注<strong>机器人软件和 LLM 应用系统</strong>。经验覆盖微控制器和 CAN 总线、ROS&nbsp;2 和数字孪生，以及实际运行的 LLM 应用。正在寻找这一方向的 <strong>Werkstudent、实习或毕业论文</strong>机会。',
      'about-photo': '个人介绍',
      'portrait-alt': 'Ben He 肖像',
      'edu-title': '教育背景',
      'edu-kit-name': '卡尔斯鲁厄理工学院 (KIT)',
      'edu-yz-name': '长江大学',
      'edu-kit-degree': 'B.Sc. 电气工程与信息技术',
      'edu-kit-note': '毕业时间：2026 年 6 月 · 毕业论文成绩 2.3（德国评分）',
      'edu-kit-msc-degree': '电气工程与信息技术硕士 (EEIT)',
      'edu-kit-msc-note': '方向：人工智能、机器人与智能自动化',
      'edu-kit-msc-date': '10/2026 – 至今',
      'edu-prep-name': '赴德学习准备',
      'edu-prep-degree': 'telc Deutsch C1 Hochschule（2021 年 4 月）',
      'edu-yz-degree': '信息与计算科学',
      'edu-yz-note': '转学至 KIT',
      'exp-title': '职业经历',
      'uni-title': '大学项目经验',
      'exp-thesis-title': '本科毕业论文：工业机器人系统 AAS 子模型的设计与实现',
      'exp-thesis-company': '控制与调节系统研究所（IRS），KIT · 成绩 2.3',
      'exp-thesis-1': '开发 Python 工具链（子模型生成器），把 URDF/YAML 数据自动转换为六个语义化 AAS 子模型：<em>结构、运动学、动力学、控制、安全、可视化</em>，覆盖 12 款 UR 机器人和 igus ReBeL。',
      'exp-thesis-2': '多机器人生成器：读取配置文件（机器人类型、位置、关节限位）和 AAS 数据，自动生成 ROS 2 仿真场景。',
      'exp-thesis-3': '在仿真中完成端到端验证：Universal Robots（UR3/UR5）走标准生成器，igus ReBeL 走扩展流水线。',
      'exp-thesis-4': '成果：<em>数字孪生生成器</em>，根据 URDF 描述和配置文件生成带 AAS 集成的 ROS 2 仿真。',
      'exp-thesis-more': '项目详情 →',
      'exp-praktikum-title': '研发实习 – 嵌入式系统',
      'exp-praktikum-company': 'Dynavin GmbH（卡尔斯鲁厄）',
      'exp-praktikum-1': '分析车辆后装系统的电子电路：32 位微控制器、CAN 总线接口、电源与输入/输出级。',
      'exp-praktikum-2': '检测车间中的硬件组装、系统化排障与控制器维修；导航系统功能测试。',
      'exp-praktikum-3': '协助后装系统的整车集成，并在客户车辆中诊断 CAN 总线部件。',
      'exp-praktikum-more': '项目详情 →',
      'exp-buddhiherz-title': '仓库管理系统开发',
      'exp-buddhiherz-company': 'Buddhiherz / König Winna GmbH (Ettlingen)',
      'exp-buddhiherz-1': '三级单据提取流水线：先走离线规则（约 0.02 秒，零 API 成本），再走 LLM 文本和图像提取并带回退模型，疑难件进入人工修正流程。',
      'exp-buddhiherz-2': '基于 Flask、SQLite、Waitress、systemd 和 nginx 部署在 Linux VPS 上；对接 GLS API 生成运单，并实现发票和送货单 PDF 生成。',
      'exp-buddhiherz-3': '取代仓库原有的 Excel 和纸质流程；按角色登录（员工用邮箱和 PIN）、每日自动备份、100+ 自动化回归测试。',
      'exp-buddhiherz-more': '项目详情 →',
      'exp-eti-title': '硬件设计与电力电子',
      'exp-eti-company': '电气工程研究所（ETI），KIT',
      'exp-eti-1': 'Buck 变换器从设计到调试完整实现：40 V 输入、1–36 V 输出、最大 50 W；在 MATLAB/Simulink（Simscape）中仿真，输出纹波设计指标 ≤ 0.5% U<sub>E</sub>。',
      'exp-eti-2': '在 Altium Designer 中完成多层 PCB（原理图、布局、DRC），手工装配并按流程调试。',
      'exp-eti-3': '在 STM32 上实现电流/电压级联 PI 控制和 Stateflow 故障保护；C++ 代码由 Embedded Coder 生成。',
      'exp-eti-more': '项目详情 →',
      'exp-itiv-title': '嵌入式模型车：测距与转向驱动',
      'exp-itiv-company': '信息技术处理研究所（ITIV），KIT',
      'exp-itiv-1': '信息技术 I 实验课团队项目：独立实现 C++ 模块，包括超声波测距（HC-SR04，定时器捕获）及多级 LED 预警、摇杆转向（ADC，差速驱动），运行于 Tiva C 微控制器（TM4C123）。',
      'exp-itiv-more': '项目详情 →',
      'proj-title': '项目',
      'proj-fitlog-title': '全栈健康 App "Fitlog"',
      'proj-fitlog-meta': '个人 AI 项目 · 2025年1月 – 2026年6月',
      'proj-fitlog-desc': 'Android App（Kotlin/Java，MVVM），使用 Room 数据库、REST API 和离线同步。通过多模态 LLM 从食物照片估算热量，用户确认后才保存。',
      'proj-fitlog-note': '代码仓库未公开，可按需提供',

      'skills-title': '技能',
      'skills-ai': '人工智能 & LLM',
      'skills-prog': '编程',
      'skills-robo': '机器人',
      'skills-mobile': '移动端 & Web',
      'skills-hw': '硬件',
      'skills-tools': '工具 & DevOps',
      'skills-lang': '语言',
      'skill-llm': 'LLM 应用',
      'skill-mm': '多模态 LLM',
      'lang-zh': '中文（母语）',
      'lang-de': '德语（C1，telc C1 Hochschule）',
      'lang-en': '英语（B2 / 中高级）',

      'contact-title': '联系方式',
      'contact-intro': 'Werkstudent、实习和毕业论文机会，欢迎发邮件联系。',
      'contact-email': '邮箱',
      'contact-cv': '简历',
      'contact-cv-val': '下载 PDF（英文）',
      'contact-loc': '所在地',
      'contact-loc-val': '德国 卡尔斯鲁厄',
      'footer-text': '© 2026 Ben He. 保留所有权利。',
      'back-top': '回到顶部',
    },
  };

  // CV download per language (no Chinese CV exists)
  const CV_FILES = {
    de: 'cv/Ben_He_Lebenslauf.pdf',
    en: 'cv/Ben_He_CV.pdf',
    zh: 'cv/Ben_He_CV.pdf',
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
    DOM.heroParticles = document.getElementById('heroParticles');
    DOM.backToTop = document.querySelector('.back-to-top');
    DOM.projectCards = document.querySelectorAll('.project-card');
    DOM.revealElements = document.querySelectorAll('.reveal');
    DOM.revealStaggerContainers = document.querySelectorAll('.reveal-stagger');
  }

  // ─── i18n System ───────────────────────────────────────
  let currentLang = 'de';

  function getLang() {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'de' || fromUrl === 'en' || fromUrl === 'zh') return fromUrl;
    const saved = localStorage.getItem('lang');
    if (saved === 'de' || saved === 'en' || saved === 'zh') return saved;
    const browserLang = (navigator.language || '').split('-')[0];
    if (browserLang === 'de') return 'de';
    if (browserLang === 'en') return 'en';
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

    // Point CV links at the file for this language
    document.querySelectorAll('[data-cv-link]').forEach((el) => {
      el.setAttribute('href', CV_FILES[lang]);
    });
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
      DOM.hamburger.setAttribute('aria-label', T[currentLang]['menu-close']);
      document.body.style.overflow = 'hidden';
    }

    function close() {
      DOM.navLinks.classList.remove('open');
      DOM.hamburger.classList.remove('active');
      overlay.classList.remove('active');
      DOM.hamburger.setAttribute('aria-expanded', 'false');
      DOM.hamburger.setAttribute('aria-label', T[currentLang]['menu-open']);
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
