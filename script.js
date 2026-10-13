// =========================================================================
// COGNIZA OFFICIAL WEB PLATFORM SCRIPTS & AI ENGINE (v3.0 Standalone)
// 100% Client-Side In-Browser NLP - Zero External Server Failures
// =========================================================================

// Global Chatbot State & Control Handlers (Available immediately across all pages)
let isToggleLocked = false;

window.openCognizaAIChat = function() {
    const widget = document.getElementById('aiChatWidget');
    if (!widget) return;
    widget.style.display = 'flex';
    void widget.offsetWidth; // Force layout reflow
    widget.classList.add('active');
    widget.style.visibility = 'visible';
    widget.style.opacity = '1';
    widget.style.pointerEvents = 'auto';
    widget.style.transform = 'translateY(0) scale(1)';

    const msgs = document.getElementById('aiChatMessages');
    if (msgs && (!msgs.children || msgs.children.length === 0) && typeof window.initCognizaChatGreeting === 'function') {
        window.initCognizaChatGreeting();
    }
    const input = document.getElementById('aiChatInput');
    if (input) {
        setTimeout(() => { try { input.focus(); } catch (err) {} }, 100);
    }
    const bubble = document.getElementById('aiGreetingBubble');
    if (bubble) bubble.classList.add('hidden');
};

window.closeCognizaAIChat = function() {
    const widget = document.getElementById('aiChatWidget');
    if (!widget) return;
    widget.classList.remove('active');
    widget.style.opacity = '0';
    widget.style.visibility = 'hidden';
    widget.style.pointerEvents = 'none';
    widget.style.transform = 'translateY(20px) scale(0.95)';
    setTimeout(() => {
        if (!widget.classList.contains('active')) {
            widget.style.display = 'none';
        }
    }, 280);
};

window.toggleCognizaAIChat = function(e) {
    if (e) {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }
    // Prevent double invocation in the same event dispatch tick
    if (isToggleLocked) return;
    isToggleLocked = true;
    setTimeout(() => { isToggleLocked = false; }, 300);

    const widget = document.getElementById('aiChatWidget');
    if (!widget) return;

    const isActive = widget.classList.contains('active') || (widget.style.display === 'flex' && widget.style.opacity === '1');
    if (isActive) {
        window.closeCognizaAIChat();
    } else {
        window.openCognizaAIChat();
    }
};

(function() {
    'use strict';

    // 107+ Comprehensive Specialization Catalog
    const ALL_COURSES = [
        "AI (Generative & Agentic)", "Agentic AI", "Android App Development", 
        "Artificial Intelligence (AI)", "AI & Machine Learning (AI/ML)", "AI for Economics", 
        "Augmented Reality (AR) & Virtual Reality (VR)", "AutoCAD 2D & 3D Drafting", 
        "AutoCAD for Civil Engineering", "AWS Cloud Solutions", "ACCA F4 Business Law", 
        "Aspen HYSYS Process Simulation", "Aspen Plus Chemical Simulation", "Basic Graphic Design", 
        "Bioinformatics & Genomics", "Biostatistics & Clinical Analytics", "Blockchain Technology & Web3", 
        "Business Analysis (BABOK)", "Business Analytics", "Car Design & Automotive Styling", 
        "CATIA 3D CAD & Surfacing", "CCNA 200-301 Networking", "Chemical Engineering", 
        "Clinical Data Management (CDM)", "Clinical SAS (SDTM & ADaM)", "Clinical Trials & Research", 
        "Cloud Computing", "Computer Organization & Architecture", "Construction Planning & Primavera P6", 
        "Cybersecurity & Ethical Hacking", "Data Analytics", "Data Engineering & PySpark", 
        "Data Science", "Data Structures & Algorithms (DSA)", "Database Management Systems (DBMS)", 
        "Deep Learning & Neural Networks", "DevOps Engineering", "Digital Marketing & Growth", 
        "Docker & Containerization", ".NET Development", "Drone Engineering & Technology", 
        "Drone Mechanics & Dynamics", "DSA with Python", "Embedded Systems & ARM", 
        "Energy & Renewable Power Engineering", "Corporate Finance", "Front-End Web Development", 
        "Full Stack Web Development", "Generative AI & LLMs", "Genetic Engineering & CRISPR", 
        "Graphic Designing", "Human Resources (HR) Management", "Hybrid & Electric Vehicle (EV) Technology", 
        "IC Engine & Powertrain Design", "Industrial Automation, PLC & SCADA", "Industrial Robotics & Automation", 
        "Internet of Things (IoT)", "Investment Banking", "Java Full Stack Development", 
        "Machine Learning (ML)", "Manual & API Testing", "Medical Coding (ICD-10/CPT)", 
        "Medical Sciences & Administration", "Metaverse & Spatial Computing", "Microbiology", 
        "Microsoft Azure Cloud", "Microsoft Excel & Financial Modeling", "Molecular Biology", 
        "Nanotechnology & Nanosciences", "Operations & Supply Chain Management", "Petroleum Engineering", 
        "Pharmacovigilance (ICSR/MedDRA)", "Placement Preparation & Aptitude", "Power BI & Business Intelligence", 
        "Product Management & PRDs", "Product & Project Management", "Programming in Java", 
        "Programming in Python", "Psychology & Behavioral Science", "Python Full Stack Development", 
        "Quantum Computing", "Revit & BIM Architecture", "Robotics Engineering", 
        "Sales & Marketing Strategies", "Salesforce Administration", "SAP ERP Fundamentals", 
        "SAP FICO", "SAP GRC ARM", "SAP MM (Materials Management)", "SAP Security", 
        "SAP SuccessFactors Employee Central", "SAP UI5, Fiori & OData", "SAS Programming", 
        "SCLD (Sequential Circuit & Logic Design)", "Selenium Automation Testing", "ServiceNow Administration", 
        "Signals & Systems and DSP", "Startup & Entrepreneurship", "Stock Market & Equity Trading", 
        "Structural Analysis & STAAD.Pro", "Supply Chain Management", "UI/UX Design", 
        "VLSI Design", "Web Development", "Web3 & Smart Contracts"
    ];

    // ==========================================
    // 1. HERO TYPING EFFECT & ENQUIRY SELECT
    // ==========================================
    function initHeroAndDropdown() {
        try {
            const courseSelect = document.getElementById("courseSelect");
            if (courseSelect && courseSelect.children.length <= 1) {
                ALL_COURSES.forEach(course => {
                    const option = document.createElement("option");
                    option.value = course;
                    option.textContent = course;
                    courseSelect.appendChild(option);
                });
            }

            const typingElement = document.getElementById("typing-text");
            if (typingElement) {
                let courseIndex = 0;
                let charIndex = 0;
                let isDeleting = false;

                function typeEffect() {
                    const currentCourse = ALL_COURSES[courseIndex];
                    if (!currentCourse) return;
                    
                    if (isDeleting) {
                        typingElement.textContent = currentCourse.substring(0, charIndex - 1);
                        charIndex--;
                    } else {
                        typingElement.textContent = currentCourse.substring(0, charIndex + 1);
                        charIndex++;
                    }

                    let typeSpeed = isDeleting ? 40 : 80;

                    if (!isDeleting && charIndex === currentCourse.length) {
                        typeSpeed = 2000;
                        isDeleting = true;
                    } else if (isDeleting && charIndex === 0) {
                        isDeleting = false;
                        courseIndex = (courseIndex + 1) % ALL_COURSES.length;
                        typeSpeed = 500;
                    }

                    setTimeout(typeEffect, typeSpeed);
                }

                typeEffect();
            }
        } catch (e) {
            console.error("Error in initHeroAndDropdown:", e);
        }
    }

    // ==========================================
    // 2. EXPANDING CARDS LOGIC
    // ==========================================
    function initExpandingCards() {
        try {
            const expandCards = document.querySelectorAll(".expand-card");
            if (expandCards.length > 0) {
                let activeIndex = 0;
                let autoPlayInterval;

                const startAutoPlay = () => {
                    autoPlayInterval = setInterval(() => {
                        expandCards.forEach(c => c.classList.remove("active"));
                        activeIndex = (activeIndex + 1) % expandCards.length;
                        expandCards[activeIndex].classList.add("active");
                    }, 3000);
                };

                const stopAutoPlay = () => {
                    clearInterval(autoPlayInterval);
                };

                expandCards.forEach((card, index) => {
                    card.addEventListener("mouseenter", () => {
                        stopAutoPlay();
                        expandCards.forEach(c => c.classList.remove("active"));
                        card.classList.add("active");
                        activeIndex = index;
                    });
                    card.addEventListener("mouseleave", () => {
                        startAutoPlay();
                    });
                    card.addEventListener("click", () => {
                        stopAutoPlay();
                        expandCards.forEach(c => c.classList.remove("active"));
                        card.classList.add("active");
                        activeIndex = index;
                    });
                });
                
                startAutoPlay();
            }
        } catch (e) {
            console.error("Error in initExpandingCards:", e);
        }
    }

    // ==========================================
    // 3. STATS COUNTER ANIMATION
    // ==========================================
    function initStatsCounter() {
        try {
            const statNumbers = document.querySelectorAll('.stat-number');
            const statsSection = document.querySelector('.stats-section');

            if (statNumbers.length > 0 && statsSection && 'IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            if (!entry.target.classList.contains('animating')) {
                                entry.target.classList.add('animating');
                                statNumbers.forEach(stat => {
                                    const target = +(stat.getAttribute('data-target') || 0);
                                    if (!target) return;
                                    const duration = 2000;
                                    const increment = target / (duration / 16);
                                    
                                    let current = 0;
                                    const updateCounter = () => {
                                        if (!entry.target.classList.contains('animating')) return;
                                        current += increment;
                                        if (current < target) {
                                            stat.textContent = Math.ceil(current).toLocaleString() + '+';
                                            requestAnimationFrame(updateCounter);
                                        } else {
                                            stat.textContent = target.toLocaleString() + '+';
                                        }
                                    };
                                    updateCounter();
                                });
                            }
                        } else {
                            entry.target.classList.remove('animating');
                            statNumbers.forEach(stat => {
                                stat.textContent = '0';
                            });
                        }
                    });
                }, { threshold: 0.1 });
                
                observer.observe(statsSection);
            }
        } catch (e) {
            console.error("Error in initStatsCounter:", e);
        }
    }

    // ==========================================
    // 4. ACTIVE NAVIGATION & SCROLL SPY
    // ==========================================
    function initNavigation() {
        try {
            const navLinks = document.querySelectorAll(".nav-links a");
            const currentPath = window.location.pathname.split("/").pop() || 'index.html';

            navLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (!href) return;
                if (href === currentPath) {
                    link.classList.add("active");
                } else if (href === 'blog-events.html' && (
                    currentPath.includes('celebration') || 
                    currentPath.includes('initiative') || 
                    currentPath.includes('milestone') || 
                    currentPath.includes('summit') || 
                    currentPath.includes('team') || 
                    currentPath.includes('immersion') ||
                    currentPath.includes('event')
                )) {
                    link.classList.add("active");
                }
            });

            const sections = document.querySelectorAll("section[id], main[id]");
            if (sections.length > 0 && navLinks.length > 0 && 'IntersectionObserver' in window) {
                const spyObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const id = entry.target.getAttribute("id");
                            if (currentPath === 'index.html' || currentPath === '') {
                                navLinks.forEach(link => {
                                    const href = link.getAttribute("href");
                                    if (href === "#" + id || href === "index.html#" + id) {
                                        navLinks.forEach(l => {
                                            const lHref = l.getAttribute("href");
                                            if (lHref && lHref.includes("#")) {
                                                l.classList.remove("active");
                                            }
                                        });
                                        link.classList.add("active");
                                    }
                                });
                            }
                        }
                    });
                }, {
                    rootMargin: "-10% 0px -70% 0px"
                });

                sections.forEach(section => spyObserver.observe(section));
            }
        } catch (e) {
            console.error("Error in initNavigation:", e);
        }
    }

    // ==========================================
    // 5. ENQUIRY MODAL LOGIC
    // ==========================================
    function initEnquiryModal() {
        try {
            const enquiryModal = document.getElementById('enquiryModal');
            const closeEnquiryBtn = document.getElementById('closeModal');
            const typingElement = document.getElementById("typing-text");

            if (enquiryModal && closeEnquiryBtn && typingElement) {
                setTimeout(() => {
                    enquiryModal.classList.add('show');
                }, 1000);

                closeEnquiryBtn.addEventListener('click', () => {
                    enquiryModal.classList.remove('show');
                });

                enquiryModal.addEventListener('click', (e) => {
                    if (e.target === enquiryModal) {
                        enquiryModal.classList.remove('show');
                    }
                });
            }
        } catch (e) {
            console.error("Error in initEnquiryModal:", e);
        }
    }

    // =========================================================================
    // 6. INTELLIGENT CONVERSATIONAL COGNIZA AI ENGINE (Realistic & Contextual)
    // =========================================================================
    function initAIChatbot() {
        try {
            const aiBtn = document.getElementById('aiBtn');
            const aiChatWidget = document.getElementById('aiChatWidget');
            const aiCloseBtn = document.getElementById('aiCloseBtn');
            const aiChatInput = document.getElementById('aiChatInput');
            const aiSendBtn = document.getElementById('aiSendBtn');
            const aiChatMessages = document.getElementById('aiChatMessages');
            const aiGreetingBubble = document.getElementById('aiGreetingBubble');
            const closeGreetingBtn = document.getElementById('closeGreetingBtn');

            if (!aiBtn || !aiChatWidget) {
                return;
            }

            // Conversation Memory State
            const chatState = {
                activeCourse: null,
                activeDomain: null,
                lastIntent: null,
                turnsCount: 0
            };

            // Comprehensive Knowledge Catalog with Deep Course Metadata
            const SPECIALIZATIONS = [
                {
                    name: "Full Stack Web Development",
                    aliases: ["full stack", "fullstack", "web dev", "web development", "mern", "react", "node", "frontend", "backend", "javascript", "web devlopment", "mern stack"],
                    domain: "CSE / IT",
                    url: "full-stack-web-development.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 to 8 weeks hands-on intensive training (or 3 months extended with placement prep)",
                    summary: "Production full-stack engineering covering React 18, Node.js, Express, MongoDB, PostgreSQL, REST APIs, Microservices, and state management.",
                    project: "Enterprise Multi-Tenant SaaS E-Commerce Platform with role-based auth, Razorpay/Stripe integration, and live WebSocket notifications.",
                    careers: ["Full Stack Developer", "Frontend React Engineer", "Backend Node.js Architect"],
                    chips: ["Full Stack Syllabus", "Course Fee", "Enroll in Full Stack", "Placement Support"]
                },
                {
                    name: "Python Programming & Full Stack",
                    aliases: ["python", "python programming", "django", "fastapi", "dsa with python", "python full stack", "pythn"],
                    domain: "CSE / IT",
                    url: "programming-in-python.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "4 to 6 weeks core track (or 8 weeks full stack with Django/FastAPI)",
                    summary: "Foundational Python syntax, Object-Oriented Design, Data Structures, Django & FastAPI backend architectures, automated testing, and PostgreSQL integration.",
                    project: "High-Performance RESTful Microservice with automated JWT security, Redis caching, and Docker container deployment.",
                    careers: ["Python Backend Developer", "Software Engineer", "Automation Engineer"],
                    chips: ["Python Curriculum", "Course Fees", "Register for Python", "Talk to Mentor"]
                },
                {
                    name: "Java Full Stack Development",
                    aliases: ["java", "java programming", "spring boot", "hibernate", "java full stack", "microservices"],
                    domain: "CSE / IT",
                    url: "java-full-stack-development.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 to 8 weeks live bootcamp (with comprehensive Spring Boot project)",
                    summary: "Core Java, Enterprise Java, Spring Boot microservices, Hibernate ORM, JPA, Maven, Angular/React integration, and secure REST APIs.",
                    project: "Fintech Banking Transaction Ledger featuring distributed microservices, message queues, and bank-grade security protocols.",
                    careers: ["Java Enterprise Developer", "Spring Boot Backend Specialist", "Application Architect"],
                    chips: ["Java Syllabus", "Batch Timings", "Course Fee", "Enroll Now"]
                },
                {
                    name: "Artificial Intelligence & Machine Learning (AI/ML)",
                    aliases: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "neural networks", "scikit learn", "tensorflow"],
                    domain: "CSE / IT",
                    url: "artificial-intelligence-ai-machine-learning-ml.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 to 8 weeks hands-on intensive curriculum",
                    summary: "End-to-end predictive modeling, regression, supervised & unsupervised machine learning, deep neural networks, computer vision, and NLP model training.",
                    project: "Autonomous Predictive Analytics Pipeline deployed as a live cloud API with real-time model inference and accuracy telemetry.",
                    careers: ["AI Engineer", "Machine Learning Specialist", "Algorithm Developer"],
                    chips: ["AI/ML Modules", "Course Fee", "Prerequisites for AI", "Enroll in AI/ML"]
                },
                {
                    name: "Generative AI & Agentic AI",
                    aliases: ["genai", "generative ai", "agentic", "agentic ai", "llm", "large language models", "rag", "langchain", "llamaindex", "prompt engineering", "gen ai"],
                    domain: "CSE / IT",
                    url: "ai-generative-agentic.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 weeks state-of-the-art masterclass",
                    summary: "LLM fine-tuning, RAG (Retrieval-Augmented Generation), LangChain, autonomous multi-agent task execution, prompt engineering, and vector databases (Pinecone/Chroma).",
                    project: "Autonomous Multi-Agent Enterprise Research Assistant using LangGraph, Vector Embeddings, and autonomous tool calling.",
                    careers: ["Generative AI Engineer", "LLM Application Architect", "Agentic Systems Lead"],
                    chips: ["GenAI Roadmap", "Course Fees", "Projects Included", "Register Online"]
                },
                {
                    name: "Data Science",
                    aliases: ["data science", "data scientist", "exploratory data analysis", "pandas", "numpy", "statistics for data science", "ds"],
                    domain: "CSE / IT",
                    url: "data-science.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 to 8 weeks comprehensive project track",
                    summary: "Transform raw structured and unstructured data into strategic business intelligence using Python, Pandas, statistical modeling, feature engineering, and predictive ML.",
                    project: "Customer Churn & Lifetime Value Prediction System with dynamic interactive executive dashboard.",
                    careers: ["Data Scientist", "Predictive Analytics Lead", "Data Science Associate"],
                    chips: ["Data Science Syllabus", "Course Fee", "Placement Support", "Enroll Now"]
                },
                {
                    name: "Data Analytics & Power BI",
                    aliases: ["data analytics", "data analyst", "power bi", "business intelligence", "sql", "tableau", "bi dashboard", "analytics"],
                    domain: "CSE / IT & Management",
                    url: "data-analytics.html",
                    pack: "Tech Pro Pack (₹9,999) / Career Pro Pack (₹7,999)",
                    duration: "4 to 6 weeks practical analytics track",
                    summary: "Advanced SQL querying, Power BI interactive DAX dashboards, business metrics modeling, automated ETL pipelines, and executive reporting in Tableau.",
                    project: "Executive E-Commerce Operations Dashboard tracking KPIs, revenue attribution, inventory turnover, and cohort retention.",
                    careers: ["Data Analyst", "BI Developer", "Reporting Specialist"],
                    chips: ["Data Analytics Modules", "Power BI Training", "Fees & Bundles", "Apply Now"]
                },
                {
                    name: "Cloud Computing & DevOps (AWS & Azure)",
                    aliases: ["cloud", "cloud computing", "aws", "azure", "devops", "docker", "kubernetes", "ci cd", "terraform"],
                    domain: "CSE / IT",
                    url: "cloud-computing.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 to 8 weeks hands-on cloud deployment track",
                    summary: "Design scalable cloud infrastructure on AWS and Azure. Automate deployments with Docker containerization, Kubernetes orchestration, and GitHub Actions CI/CD pipelines.",
                    project: "High-Availability Microservices Infrastructure with auto-scaling, load balancing, and automated zero-downtime deployment.",
                    careers: ["Cloud Solutions Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)"],
                    chips: ["Cloud Roadmap", "AWS vs Azure", "DevOps Fee", "Register Online"]
                },
                {
                    name: "Cyber Security & Ethical Hacking",
                    aliases: ["cyber security", "cybersecurity", "ethical hacking", "penetration testing", "network security", "soc", "kali linux"],
                    domain: "CSE / IT",
                    url: "cyber-security-ethical-hacking.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 weeks practical security lab track",
                    summary: "Vulnerability assessment, network penetration testing, web application security (OWASP Top 10), cryptographic protocols, and SOC incident analysis.",
                    project: "Enterprise Vulnerability Assessment and Penetration Testing (VAPT) Audit with comprehensive mitigation blueprint.",
                    careers: ["Cybersecurity Analyst", "Ethical Hacker", "Information Security Consultant"],
                    chips: ["Cybersecurity Syllabus", "Lab Environment", "Course Fee", "Enroll Now"]
                },
                {
                    name: "VLSI Design & Semiconductor",
                    aliases: ["vlsi", "vlsi design", "verilog", "semiconductor", "chip design", "fpga", "rtl", "sta", "systemverilog"],
                    domain: "ECE / EEE",
                    url: "vlsi-design.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 to 8 weeks hands-on RTL & synthesis track",
                    summary: "RTL design using Verilog HDL, digital logic synthesis, Static Timing Analysis (STA), ASIC design flows, simulation testbenches, and FPGA implementation.",
                    project: "Pipelined 32-bit RISC Processor core modeled in Verilog with RTL verification and timing constraint sign-off.",
                    careers: ["VLSI Design Engineer", "RTL Verification Engineer", "ASIC Synthesis Specialist"],
                    chips: ["VLSI Curriculum", "Course Fees", "Semiconductor Scope", "Talk to Mentor"]
                },
                {
                    name: "Embedded Systems & IoT",
                    aliases: ["embedded", "embedded systems", "iot", "internet of things", "arm", "stm32", "microcontroller", "arduino", "raspberry pi"],
                    domain: "ECE / EEE",
                    url: "embedded-systems.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 weeks firmware & telemetry bootcamp",
                    summary: "C/Embedded C programming, STM32 ARM Cortex-M firmware development, peripheral drivers (UART, SPI, I2C), RTOS fundamentals, and IoT MQTT cloud telemetry.",
                    project: "Industrial Smart Edge Telemetry Node streaming sensor diagnostics to AWS IoT Core over MQTT.",
                    careers: ["Embedded Firmware Engineer", "IoT Solutions Developer", "Hardware Firmware Architect"],
                    chips: ["Embedded Syllabus", "Hardware Kits", "Course Fee", "Enroll Online"]
                },
                {
                    name: "AutoCAD & CATIA 3D Design",
                    aliases: ["autocad", "catia", "cad", "3d modeling", "surface design", "drafting", "car design", "mechanical design"],
                    domain: "Mechanical",
                    url: "autocad.html",
                    pack: "Career Pro Pack (₹7,999)",
                    duration: "4 to 6 weeks industrial design track",
                    summary: "Industry 2D engineering drafting, 3D parametric solid modeling, advanced Generative Shape Design (GSD) surfacing, GD&T tolerancing, and assembly modeling.",
                    project: "Complete Automotive BIW (Body In White) Sheet Metal Assembly with GD&T manufacturing drawings.",
                    careers: ["CAD Design Engineer", "Mechanical Product Modeler", "Automotive Styling Specialist"],
                    chips: ["Mechanical CAD Syllabus", "Course Fees", "Career Pro Pack", "Register Now"]
                },
                {
                    name: "Electric Vehicle (EV) Technology",
                    aliases: ["ev", "electric vehicle", "hybrid ev", "bms", "battery management", "ev powertrain", "motor design"],
                    domain: "Mechanical & EEE",
                    url: "hybrid-electric-vehicle-technology.html",
                    pack: "Career Pro Pack (₹7,999)",
                    duration: "6 weeks EV engineering track",
                    summary: "EV powertrain architecture, battery chemistry and thermal modeling, Battery Management System (BMS) simulation, inverter motor control, and regenerative braking.",
                    project: "MATLAB/Simulink EV Powertrain and Lithium-Ion BMS Thermal Simulation under WLTP drive cycles.",
                    careers: ["EV Powertrain Engineer", "BMS Calibration Engineer", "Automotive Systems Engineer"],
                    chips: ["EV Tech Syllabus", "Course Fees", "Non-IT Pack", "Enroll Now"]
                },
                {
                    name: "Revit BIM & Construction Planning",
                    aliases: ["revit", "bim", "civil", "construction planning", "primavera", "staad pro", "structural analysis", "civil engineering"],
                    domain: "Civil",
                    url: "revit-bim.html",
                    pack: "Career Pro Pack (₹7,999)",
                    duration: "6 weeks architectural & planning track",
                    summary: "BIM 3D architectural modeling, structural coordination, MEP clash detection, Primavera P6 project scheduling, critical path analysis, and STAAD.Pro structural loading.",
                    project: "Multi-Storey Commercial Complex BIM Model with 4D schedule simulation in Primavera P6.",
                    careers: ["BIM Coordinator", "Planning Engineer", "Structural Design Analyst"],
                    chips: ["Civil & BIM Details", "Course Fees", "Placement Support", "Enroll Now"]
                },
                {
                    name: "Clinical SAS & Biostatistics",
                    aliases: ["clinical sas", "sas", "biostatistics", "sdtm", "adam", "tfl", "clinical trials", "cdisc"],
                    domain: "Medical / Pharma",
                    url: "clinical-sas.html",
                    pack: "Career Pro Pack (₹7,999)",
                    duration: "6 to 8 weeks pharmaceutical analytics track",
                    summary: "CDISC standards implementation, SDTM mapping, ADaM analysis dataset creation, Tables, Figures, and Listings (TFLs) generation, and clinical trial reporting.",
                    project: "Phase III Oncology Clinical Trial Data Transformation adhering to CDISC SDTM IG 3.3 standards.",
                    careers: ["Clinical SAS Programmer", "Statistical Programmer", "Clinical Data Analyst"],
                    chips: ["Clinical SAS Syllabus", "Pharma Scope", "Course Fees", "Talk to Mentor"]
                },
                {
                    name: "Pharmacovigilance & Clinical Data Management",
                    aliases: ["pharmacovigilance", "pv", "cdm", "clinical data management", "icsr", "meddra", "drug safety", "argus"],
                    domain: "Medical / Pharma",
                    url: "pharmacovigilance.html",
                    pack: "Career Pro Pack (₹7,999)",
                    duration: "4 to 6 weeks drug safety track",
                    summary: "Adverse event reporting, ICSR processing, MedDRA coding, case narrative writing, signal detection, eCRF design, and clinical data validation.",
                    project: "Comprehensive Post-Marketing Drug Safety Case Evaluation and Periodic Safety Update Report (PSUR).",
                    careers: ["Drug Safety Associate", "Clinical Data Manager", "Pharmacovigilance Officer"],
                    chips: ["PV & CDM Details", "Career Opportunities", "Course Fees", "Enroll Online"]
                },
                {
                    name: "Medical Coding (ICD-10 / CPT)",
                    aliases: ["medical coding", "icd 10", "cpt", "hcpcs", "medical billing", "healthcare administration"],
                    domain: "Medical / Pharma",
                    url: "medical-coding.html",
                    pack: "Career Pro Pack (₹7,999)",
                    duration: "4 to 6 weeks certified coding track",
                    summary: "ICD-10-CM diagnosis coding, CPT procedural coding, HCPCS modifiers, human anatomy & pathophysiology, and medical claim auditing.",
                    project: "Complex Inpatient Multi-Specialty Medical Chart Coding & Audit Review.",
                    careers: ["Certified Medical Coder", "Health Information Specialist", "Claims Auditor"],
                    chips: ["Medical Coding Modules", "Course Fees", "Placement Support", "Apply Now"]
                },
                {
                    name: "Investment Banking & Financial Modeling",
                    aliases: ["investment banking", "financial modeling", "finance", "dcf", "valuation", "m&a", "equity research", "corporate finance"],
                    domain: "Management & Finance",
                    url: "investment-banking.html",
                    pack: "Career Pro Pack (₹7,999)",
                    duration: "6 weeks financial modeling bootcamp",
                    summary: "Discounted Cash Flow (DCF) modeling, Comparable Company Analysis (CCA), leveraged buyouts (LBO), pitchbook preparation, and M&A valuation.",
                    project: "Comprehensive 3-Statement Dynamic Valuation Model and M&A pitch deck for a listed tech company.",
                    careers: ["Investment Banking Analyst", "Equity Research Associate", "Financial Modeling Consultant"],
                    chips: ["Finance Syllabus", "Course Fees", "Career Scope", "Register Online"]
                },
                {
                    name: "SAP ERP (FICO, MM, Security & GRC)",
                    aliases: ["sap", "sap fico", "sap mm", "sap grc", "sap security", "sap erp", "fiori", "s/4hana"],
                    domain: "Management / IT",
                    url: "sap-fico.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "6 to 8 weeks enterprise configuration track",
                    summary: "SAP S/4HANA enterprise configuration: General Ledger, Accounts Payable/Receivable, Asset Accounting, Materials Management (Procurement/Inventory), and GRC Access Control.",
                    project: "End-to-End Enterprise SAP S/4HANA Business Blueprint Configuration for a multinational enterprise.",
                    careers: ["SAP Functional Consultant", "SAP FICO Analyst", "SAP MM Specialist"],
                    chips: ["SAP Modules", "Course Fees", "S/4HANA Server Access", "Talk to Mentor"]
                },
                {
                    name: "UI/UX Design & Figma",
                    aliases: ["ui ux", "ui/ux", "ux design", "ui design", "figma", "wireframing", "prototyping", "user research"],
                    domain: "Design & IT",
                    url: "uiux-design.html",
                    pack: "Tech Pro Pack (₹9,999)",
                    duration: "4 to 6 weeks design portfolio track",
                    summary: "Design thinking, user journey mapping, information architecture, wireframing, high-fidelity Figma components, design systems, and usability testing.",
                    project: "Complete Mobile & Web Design System and interactive prototype for an on-demand logistics service.",
                    careers: ["UI/UX Designer", "Product Designer", "User Experience Researcher"],
                    chips: ["UI/UX Curriculum", "Design Portfolio", "Course Fee", "Enroll Now"]
                }
            ];

            // Intent Definitions with Weighted Keyword Matching
            const INTENTS = {
                FEE: {
                    weight: 12,
                    keywords: ["fee", "fees", "cost", "costs", "price", "pricing", "charge", "charges", "pay", "payment", "emi", "installment", "installments", "rupees", "rs", "inr", "how much", "kitna", "amount", "budget", "affordable", "discount", "offer pack", "rate"]
                },
                DURATION: {
                    weight: 10,
                    keywords: ["duration", "durations", "how long", "how many months", "how many weeks", "how many days", "how much time", "length of course", "time period", "completion time", "kitne din", "kitna time"]
                },
                TIMINGS: {
                    weight: 9,
                    keywords: ["timing", "timings", "schedule", "schedules", "batch", "batches", "weekend", "weekday", "evening", "morning", "class time", "flexible", "miss a class", "missed class", "recording", "recordings", "live session", "time slot"]
                },
                PLACEMENT: {
                    weight: 11,
                    keywords: ["placement", "placements", "job", "jobs", "hiring", "hire", "package", "salary", "ctc", "lpa", "interview", "interviews", "career", "careers", "recruiter", "recruiters", "company", "companies", "offer letter", "assistance", "guarantee", "mock interview", "campus placement"]
                },
                CERTIFICATION: {
                    weight: 10,
                    keywords: ["certificate", "certificates", "certification", "certifications", "iso", "msme", "valid", "recognized", "accredited", "credential", "completion certificate", "lor", "letter of recommendation", "govt recognized"]
                },
                COLLEGE_SUBMISSION: {
                    weight: 11,
                    keywords: ["college", "university", "submission", "college submission", "internship report", "internship letter", "noc", "credits", "semester marks", "curriculum requirement", "professor", "academic credit", "hod"]
                },
                BEGINNER: {
                    weight: 10,
                    keywords: ["beginner", "beginners", "prerequisite", "prerequisites", "no coding", "scratch", "fresher", "freshers", "eligible", "eligibility", "qualification", "background", "non-it", "non it", "switch to it", "can i learn", "can i join", "zero knowledge", "from scratch", "non tech", "without coding", "mechanical student join", "civil student join", "bcom"]
                },
                MODE_LOCATION: {
                    weight: 9,
                    keywords: ["online", "offline", "classroom", "in person", "center", "hybrid", "remote", "zoom", "where classes happen", "attend from home", "location", "address", "where are you", "office", "bangalore", "bengaluru", "hsr layout", "near nift", "walk in"]
                },
                PROJECTS: {
                    weight: 9,
                    keywords: ["project", "projects", "capstone", "hands-on", "hands on", "practical", "real world", "industry project", "portfolio", "live project", "github", "mini project", "major project", "practical work"]
                },
                MENTORS: {
                    weight: 8,
                    keywords: ["mentor", "mentors", "trainer", "trainers", "teacher", "teachers", "faculty", "instructor", "instructors", "who teaches", "who will teach", "expert", "experience of mentors", "teaching staff"]
                },
                OFFER_PACKS: {
                    weight: 8,
                    keywords: ["tech pro", "flexi pro", "career pro", "elite pack", "pack", "packs", "bundle", "bundles", "which pack", "plans", "packages"]
                },
                ENROLLMENT: {
                    weight: 9,
                    keywords: ["how to enroll", "how to register", "how to apply", "registration process", "admission", "sign up", "procedure", "step to join", "apply now", "how can i join", "how do i join"]
                },
                RECOMMEND: {
                    weight: 8,
                    keywords: ["which course is best", "which course to choose", "recommend", "confused", "best course", "highest paying", "future scope", "suggest me", "which domain", "what should i learn", "best for future", "help me choose"]
                },
                CONTACT: {
                    weight: 9,
                    keywords: ["contact", "call", "phone", "number", "whatsapp", "talk to human", "human counselor", "speak to mentor", "advisor", "email", "support", "reach out", "talk to counselor"]
                },
                ALL_COURSES: {
                    weight: 6,
                    keywords: ["all courses", "course list", "catalog", "what do you teach", "domains", "specializations", "list of courses", "what are the courses", "what programs"]
                },
                IDENTITY: {
                    weight: 10,
                    keywords: ["who are you", "what is your name", "are you ai", "are you a bot", "who built you", "who made you", "are you human", "what do you do"]
                },
                GREETING: {
                    weight: 5,
                    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "namaste", "greetings"]
                },
                GRATITUDE: {
                    weight: 7,
                    keywords: ["thank", "thanks", "thank you", "awesome", "great", "super", "perfect", "helpful", "got it", "ok thank you", "bye", "goodbye"]
                }
            };

            // Detect Course Entity from User Query
            function extractCourseEntity(query) {
                const lower = query.toLowerCase();
                for (const course of SPECIALIZATIONS) {
                    for (const alias of course.aliases) {
                        if (lower.includes(alias)) {
                            return course;
                        }
                    }
                }
                // Check if any title from ALL_COURSES matches
                if (typeof ALL_COURSES !== 'undefined') {
                    for (const rawName of ALL_COURSES) {
                        if (lower.includes(rawName.toLowerCase())) {
                            return {
                                name: rawName,
                                domain: "Specialization Track",
                                url: "projects.html",
                                pack: "Tech Pro Pack / Career Pro Pack",
                                duration: "4 to 8 weeks hands-on training",
                                summary: `Comprehensive curriculum covering modern toolkits, real-world case studies, and production capstone deployments.`,
                                project: `Production-ready capstone project verified with ISO 9001:2015 and MSME credentials.`,
                                careers: [`Junior Specialist`, `Project Associate`, `Industry Engineer`],
                                chips: [`View Syllabus`, `Course Fee`, `How to Register`, `Talk to Mentor`]
                            };
                        }
                    }
                }
                return null;
            }

            // Detect Intent Score
            function detectPrimaryIntent(query) {
                const lower = query.toLowerCase();
                let highestScore = 0;
                let matchedIntent = null;

                for (const [intentKey, config] of Object.entries(INTENTS)) {
                    let score = 0;
                    for (const kw of config.keywords) {
                        if (lower === kw) {
                            score += config.weight * 2; // Exact full match
                        } else if (lower.includes(kw)) {
                            score += config.weight;
                        }
                    }
                    if (score > highestScore) {
                        highestScore = score;
                        matchedIntent = intentKey;
                    }
                }

                return matchedIntent;
            }

            function escapeHtml(str) {
                return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
            }

            // ==========================================
            // Master Conversational Response Generator
            // ==========================================
            function getCognizaAIResponse(rawQuery) {
                const query = rawQuery.trim();
                const detectedCourse = extractCourseEntity(query);
                
                // Update conversation memory state
                if (detectedCourse) {
                    chatState.activeCourse = detectedCourse;
                    chatState.activeDomain = detectedCourse.domain;
                }
                const currentCourse = detectedCourse || chatState.activeCourse;
                
                const intent = detectPrimaryIntent(query);
                chatState.lastIntent = intent;
                chatState.turnsCount++;

                // ----------------------------------------------------
                // 1. SPECIFIC COURSE INQUIRY (with or without fee/duration)
                // ----------------------------------------------------
                if (detectedCourse && (!intent || intent === 'ALL_COURSES' || intent === 'GREETING')) {
                    return {
                        reply: `<p><strong>🎓 ${escapeHtml(detectedCourse.name)} (${escapeHtml(detectedCourse.domain)})</strong></p>
                        <p>${escapeHtml(detectedCourse.summary)}</p>
                        <ul>
                            <li><strong>⏱️ Program Duration:</strong> ${escapeHtml(detectedCourse.duration)}</li>
                            <li><strong>🛠️ Live Capstone Project:</strong> ${escapeHtml(detectedCourse.project)}</li>
                            <li><strong>💼 Career Pathways:</strong> ${escapeHtml(detectedCourse.careers.join(', '))}</li>
                            <li><strong>📦 Recommended Pack:</strong> ${escapeHtml(detectedCourse.pack)}</li>
                        </ul>
                        <p>All sessions are mentor-led with real-time code reviews, lifetime lecture recordings, and an <strong>ISO/MSME verified credential</strong>.</p>`,
                        links: [
                            { text: `📖 View ${detectedCourse.name} Page`, url: detectedCourse.url },
                            { text: '📝 Register for This Track', url: 'register.html' }
                        ],
                        chips: detectedCourse.chips || ['Course Fees', 'Batch Timings', 'Placement Support', 'Talk to Mentor']
                    };
                }

                // ----------------------------------------------------
                // 2. FEE & PRICING INQUIRIES
                // ----------------------------------------------------
                if (intent === 'FEE') {
                    if (currentCourse) {
                        return {
                            reply: `<p><strong>💰 Fee &amp; Investment for ${escapeHtml(currentCourse.name)}:</strong></p>
                            <p>You can enroll through our value-packed <strong>Elite Packs</strong> or single specialization track:</p>
                            <ul>
                                <li><strong>🌟 Tech Pro Pack (&#8377;9,999):</strong> Best choice for IT tracks! Choose ${escapeHtml(currentCourse.name)} <em>plus any 2 other IT domains</em> of your choice.</li>
                                <li><strong>🎯 Career Pro Pack (&#8377;7,999):</strong> Best for core &amp; non-IT engineering tracks (AutoCAD, EV, Civil, Medical/Pharma, Management) — choose any 3 domains.</li>
                                <li><strong>🔄 Flexi Pro Pack (&#8377;8,999):</strong> Choose any 3 domains mixing IT and Non-IT tracks.</li>
                                <li><strong>🏢 In-Person Offline Batch:</strong> &#8377;15,000+ with intensive classroom labs at our Bengaluru center.</li>
                            </ul>
                            <p><strong>What is Included:</strong> Live mentor sessions, real production capstone, lifetime LMS recording access, resume review, and ISO/MSME verified certificate.</p>
                            <p><em>*Convenient 2-part installment / EMI options are available upon request during enrollment.</em></p>`,
                            links: [
                                { text: `👉 View ${currentCourse.name}`, url: currentCourse.url },
                                { text: '🏷️ View All Offer Plans', url: 'index.html#offers' },
                                { text: '📝 Apply for Enrollment', url: 'register.html' }
                            ],
                            chips: ['Tech Pro Pack (₹9,999)', 'Career Pro Pack (₹7,999)', 'Installment Options', 'Register Online']
                        };
                    }

                    return {
                        reply: `<p><strong>💰 Cogniza Elite Learning Bundles &amp; Pricing Structure:</strong></p>
                        <p>We provide industry-leading value with transparent pricing and zero hidden fees:</p>
                        <ul>
                            <li><strong>🌟 TECH PRO PACK — &#8377;9,999:</strong>
                                <br>• Choose <strong>any 3 IT Domains</strong> (e.g., Python, Full Stack, AI/ML, Cloud DevOps).
                                <br>• Live mentor sessions, 3 capstone projects, resume overhaul, and mock interviews.
                            </li>
                            <li><strong>🚀 CAREER PRO PACK — &#8377;7,999:</strong>
                                <br>• Choose <strong>any 3 Non-IT / Core Domains</strong> (CAD, EV, Civil BIM, Clinical SAS, Finance).
                                <br>• Complete career roadmap, placement assistance, and internship credentials.
                            </li>
                            <li><strong>🔄 FLEXI PRO PACK — &#8377;8,999:</strong>
                                <br>• Mix &amp; match any 3 domains across IT and Non-IT.
                            </li>
                            <li><strong>🏢 OFFLINE PROGRAMS — &#8377;15,000+:</strong>
                                <br>• In-person classroom training with 4 lab sessions/week at our Bengaluru center.
                            </li>
                        </ul>
                        <p><em>💡 Installment and EMI options are supported so finance is never a barrier to your learning!</em></p>`,
                        links: [
                            { text: '🏷️ Compare Elite Packs', url: 'index.html#offers' },
                            { text: '📝 Enroll Online Now', url: 'register.html' }
                        ],
                        chips: ['Tech Pro Pack (₹9,999)', 'Career Pro Pack (₹7,999)', 'Payment in Installments', 'Talk to Counselor']
                    };
                }

                // ----------------------------------------------------
                // 3. DURATION & SCHEDULE INQUIRIES
                // ----------------------------------------------------
                if (intent === 'DURATION') {
                    const courseNotice = currentCourse ? ` for <strong>${escapeHtml(currentCourse.name)}</strong>` : '';
                    return {
                        reply: `<p><strong>⏱️ Program Duration &amp; Timeline${courseNotice}:</strong></p>
                        <ul>
                            <li><strong>Core Specialization Tracks:</strong> Typically span <strong>4 to 8 weeks</strong> of intensive, hands-on project work.</li>
                            <li><strong>Comprehensive Elite Packs:</strong> Spread across <strong>3 to 6 months</strong> covering 3 full specialization domains and production deployments.</li>
                            <li><strong>Weekly Commitment:</strong> Approximately <strong>6 to 10 hours per week</strong>, designed specifically so college students and working professionals can balance their schedules without burnout.</li>
                        </ul>
                        <p>All tracks are self-paced capable with <strong>lifetime LMS access</strong> to class recordings, notes, and mentor discussion boards.</p>`,
                        links: [
                            { text: '🚀 View All Programs', url: 'projects.html' },
                            { text: '📝 Apply for Next Batch', url: 'register.html' }
                        ],
                        chips: ['Batch Timings', 'Weekend Batches', 'Course Fees', 'Register Now']
                    };
                }

                // ----------------------------------------------------
                // 4. TIMINGS & BATCH SCHEDULES
                // ----------------------------------------------------
                if (intent === 'TIMINGS') {
                    return {
                        reply: `<p><strong>🕒 Flexible Batch Schedules &amp; Missed Class Policy:</strong></p>
                        <ul>
                            <li><strong>🌙 Weekday Evening Batches:</strong> 7:00 PM – 9:00 PM IST (perfect after college classes or office work).</li>
                            <li><strong>☀️ Dedicated Weekend Batches:</strong> Saturday &amp; Sunday (flexible morning/afternoon slots).</li>
                            <li><strong>📹 What if I miss a live class?</strong> Every live lecture is recorded in full HD and uploaded to your student portal within 2 hours with lifetime access.</li>
                            <li><strong>💬 1-on-1 Doubt Sessions:</strong> Live mentor office hours every week for direct code debugging and conceptual clarity.</li>
                        </ul>`,
                        links: [
                            { text: '📝 Join Upcoming Batch', url: 'register.html' },
                            { text: '💬 Inquire on WhatsApp', url: 'https://wa.me/918884456745' }
                        ],
                        chips: ['Weekend Batches', 'Weekday Evenings', 'Course Fees', 'Talk to Mentor']
                    };
                }

                // ----------------------------------------------------
                // 5. PLACEMENT & CAREER ASSISTANCE
                // ----------------------------------------------------
                if (intent === 'PLACEMENT') {
                    return {
                        reply: `<p><strong>💼 Career Transformation &amp; Placement Support:</strong></p>
                        <p>At Cogniza, placement readiness is integrated right into your training from Day 1:</p>
                        <ul>
                            <li><strong>🤝 150+ Hiring Partners:</strong> Our dedicated placement network connects learners with leading tech firms, core engineering leaders, and health analytics companies.</li>
                            <li><strong>📄 ATS-Proof Resume &amp; LinkedIn:</strong> Professional 1-on-1 resume rebuilding, portfolio structuring, and LinkedIn algorithm optimization.</li>
                            <li><strong>🎯 Rigorous Mock Interviews:</strong> Technical coding rounds, domain system design, and behavioral HR interview simulations with personalized mentor feedback.</li>
                            <li><strong>💰 Salary Packages:</strong> Freshers typically secure offers between <strong>3.6 LPA to 8.5 LPA</strong>, while lateral professionals secure up to <strong>12+ LPA</strong>.</li>
                        </ul>`,
                        links: [
                            { text: '🚀 Career Pro Pack Details', url: 'career-pro-pack.html' },
                            { text: '📝 Apply for Placement Program', url: 'register.html' }
                        ],
                        chips: ['Career Pro Pack', 'Mock Interviews', 'Course Fees', 'Speak to Counselor']
                    };
                }

                // ----------------------------------------------------
                // 6. BEGINNER / PREREQUISITES / NON-IT SWITCH
                // ----------------------------------------------------
                if (intent === 'BEGINNER') {
                    const courseText = currentCourse ? ` such as <strong>${escapeHtml(currentCourse.name)}</strong>` : '';
                    return {
                        reply: `<p><strong>🌱 Absolutely! Beginners &amp; Non-IT Learners are 100% Welcome:</strong></p>
                        <p>No prior coding experience or advanced math background is required for our foundational tracks${courseText}:</p>
                        <ul>
                            <li><strong>Ground-Zero Pedagogy:</strong> Every curriculum starts with basic syntax, visual logic, and problem-solving before advancing to complex frameworks.</li>
                            <li><strong>Non-IT to IT Success:</strong> Over 45% of our placed alumni transitioned from Mechanical, Civil, Commerce (B.Com/BBA), and Science backgrounds into software engineering and data analytics.</li>
                            <li><strong>Laptop Requirements:</strong> Any standard laptop with 8GB RAM is completely sufficient. Heavy computing, GPUs, and datasets are provided via cloud environments.</li>
                        </ul>
                        <p>Your mentor guides you step-by-step so you never feel overwhelmed!</p>`,
                        links: [
                            { text: '🎓 Explore Beginner Tracks', url: 'projects.html' },
                            { text: '💬 Chat with Career Mentor', url: 'https://wa.me/918884456745' }
                        ],
                        chips: ['Non-IT to IT Tracks', 'Course Fees', 'How to Enroll', 'Talk to Mentor']
                    };
                }

                // ----------------------------------------------------
                // 7. CERTIFICATION & CREDENTIALS
                // ----------------------------------------------------
                if (intent === 'CERTIFICATION' || intent === 'COLLEGE_SUBMISSION') {
                    return {
                        reply: `<p><strong>📜 Government Recognized &amp; College-Approved Certifications:</strong></p>
                        <p>Yes, your credentials are <strong>100% valid and officially recognized</strong> across India and internationally:</p>
                        <ul>
                            <li><strong>🏛️ ISO 9001:2015 &amp; MSME Certified:</strong> Official government and quality-standard accreditation.</li>
                            <li><strong>🎓 University &amp; College Submission:</strong> We provide your formal <strong>Internship Offer Letter, Project Completion Certificate, and Detailed Evaluation Report</strong> accepted by academic faculties for semester credits and internal marks.</li>
                            <li><strong>🔍 Online Verifiable ID:</strong> Every certificate includes a unique verification credential ID and QR code for recruiters and college professors to authenticate instantly.</li>
                        </ul>`,
                        links: [
                            { text: '🎓 View Program Details', url: 'projects.html' },
                            { text: '📝 Register Online', url: 'register.html' }
                        ],
                        chips: ['College Internship Report', 'Course Fees', 'How to Register', 'WhatsApp Support']
                    };
                }

                // ----------------------------------------------------
                // 8. ONLINE VS OFFLINE & CENTER LOCATION
                // ----------------------------------------------------
                if (intent === 'MODE_LOCATION') {
                    return {
                        reply: `<p><strong>🌐 Training Modes &amp; Bengaluru Campus Location:</strong></p>
                        <p>We provide both interactive online and immersive offline training options:</p>
                        <ul>
                            <li><strong>💻 Live Interactive Online:</strong> Real-time mentor instruction, interactive screen sharing, instant doubt clearing, and lifetime access to HD class recordings from anywhere globally.</li>
                            <li><strong>🏢 In-Person Offline Training (Bengaluru):</strong> Classroom lectures, dedicated project lab workstations, and face-to-face mentorship.</li>
                        </ul>
                        <p><strong>📍 Bengaluru Center Address:</strong><br>
                        <em>2734, 2nd Floor, 16th Cross, 27th Main Road, Near NIFT College, HSR Layout, Sector 1, Bangalore - 560102.</em></p>
                        <p>Walk-in hours: Monday to Saturday, 9:00 AM – 7:00 PM IST.</p>`,
                        links: [
                            { text: '📍 View Offline Programs', url: 'offline-programs.html' },
                            { text: '💬 WhatsApp Center Desk', url: 'https://wa.me/918884456745' }
                        ],
                        chips: ['Offline Batch Fees', 'Live Online Batches', 'Book Campus Visit', 'Register Now']
                    };
                }

                // ----------------------------------------------------
                // 9. PROJECTS & CAPSTONE EXPERIENCE
                // ----------------------------------------------------
                if (intent === 'PROJECTS') {
                    const projectDetails = currentCourse 
                        ? `<p>In <strong>${escapeHtml(currentCourse.name)}</strong>, you will build: <em>${escapeHtml(currentCourse.project)}</em></p>`
                        : `<p>Every Cogniza track mandates 1 to 3 end-to-end production capstones addressing authentic enterprise use-cases.</p>`;
                    return {
                        reply: `<p><strong>🛠️ Industry Production Capstones &amp; GitHub Portfolios:</strong></p>
                        ${projectDetails}
                        <ul>
                            <li><strong>No Toy Tutorials:</strong> Work on production codebases, real APIs, relational/vector databases, and cloud deployments.</li>
                            <li><strong>GitHub Portfolio:</strong> Your project is pushed to your personal GitHub with professional architecture diagrams and README documentation that recruiters look for.</li>
                            <li><strong>Code Reviews:</strong> Senior engineers review your Pull Requests, optimize your algorithms, and mentor you on industry best practices.</li>
                        </ul>`,
                        links: [
                            { text: '🚀 View All Capstone Programs', url: 'projects.html' },
                            { text: '📝 Enroll to Build Projects', url: 'register.html' }
                        ],
                        chips: ['Full Stack Projects', 'AI Capstones', 'Course Fees', 'Talk to Mentor']
                    };
                }

                // ----------------------------------------------------
                // 10. MENTORS & TRAINERS
                // ----------------------------------------------------
                if (intent === 'MENTORS') {
                    return {
                        reply: `<p><strong>👨‍🏫 Industry Expert Mentors &amp; Faculty:</strong></p>
                        <ul>
                            <li><strong>Top-Tier Backgrounds:</strong> Our mentors are senior software engineers, data scientists, and core specialists currently working at top firms and tech innovators.</li>
                            <li><strong>5+ Years Experience:</strong> Each mentor brings practical production expertise, not just theoretical textbook concepts.</li>
                            <li><strong>Direct Accessibility:</strong> You are directly connected to your mentor via student channels for code reviews, doubt solving, and career guidance.</li>
                        </ul>`,
                        links: [
                            { text: '👥 About Cogniza Culture', url: 'about.html' },
                            { text: '💬 Connect with a Mentor', url: 'https://wa.me/918884456745' }
                        ],
                        chips: ['All Courses', 'Batch Timings', 'Pricing & Fees', 'Register Online']
                    };
                }

                // ----------------------------------------------------
                // 11. HOW TO ENROLL / ADMISSION STEPS
                // ----------------------------------------------------
                if (intent === 'ENROLLMENT') {
                    return {
                        reply: `<p><strong>📝 Simple 3-Step Enrollment Process:</strong></p>
                        <ol>
                            <li><strong>Submit Application:</strong> Fill out the simple online registration form with your name, phone number, and preferred specialization track.</li>
                            <li><strong>Counselor Consultation:</strong> An academic advisor will reach out via call/WhatsApp within 24 hours to confirm batch timings, prerequisites, and fee options.</li>
                            <li><strong>Onboarding &amp; LMS Access:</strong> Complete enrollment, receive instant access to LMS portal, lecture resources, and student community!</li>
                        </ol>`,
                        links: [
                            { text: '👉 Open Online Registration Form', url: 'register.html' },
                            { text: '💬 Quick Enrollment on WhatsApp', url: 'https://wa.me/918884456745' }
                        ],
                        chips: ['Fill Registration Form', 'Course Fees', 'Batch Timings', 'Speak to Counselor']
                    };
                }

                // ----------------------------------------------------
                // 12. COURSE RECOMMENDATIONS / WHICH TO CHOOSE
                // ----------------------------------------------------
                if (intent === 'RECOMMEND') {
                    return {
                        reply: `<p><strong>🎯 Personalized Career Recommendations (Top Trends in 2026):</strong></p>
                        <ul>
                            <li><strong>For High-Salary IT Roles:</strong> <em>Full Stack Web Dev (MERN)</em>, <em>Generative AI &amp; Agentic AI</em>, or <em>Cloud DevOps</em>.</li>
                            <li><strong>For Analytical &amp; Math-Minded:</strong> <em>Data Science &amp; Machine Learning</em> or <em>Business Analytics (Power BI/SQL)</em>.</li>
                            <li><strong>For Electronics &amp; Hardware:</strong> <em>VLSI &amp; Chip Design</em> or <em>Embedded Systems &amp; IoT</em>.</li>
                            <li><strong>For Mechanical / Automobile:</strong> <em>Electric Vehicle (EV) Technology</em>, <em>CATIA 3D Surfacing</em>, or <em>Drone Dynamics</em>.</li>
                            <li><strong>For Life Sciences &amp; Pharma:</strong> <em>Clinical SAS (SDTM/ADaM)</em> or <em>Pharmacovigilance (ICSR)</em>.</li>
                        </ul>
                        <p>Tell me your college branch or target goal, and I'll recommend the exact right roadmap for you!</p>`,
                        links: [
                            { text: '🚀 Explore All 107+ Programs', url: 'projects.html' },
                            { text: '💬 Speak with Career Counselor', url: 'https://wa.me/918884456745' }
                        ],
                        chips: ['CSE / IT Tracks', 'ECE & VLSI Tracks', 'Mechanical & EV', 'Clinical SAS', 'Course Fees']
                    };
                }

                // ----------------------------------------------------
                // 13. HUMAN CONTACT & SUPPORT
                // ----------------------------------------------------
                if (intent === 'CONTACT') {
                    return {
                        reply: `<p><strong>📞 Contact Cogniza Admissions &amp; Support:</strong></p>
                        <ul>
                            <li><strong>📱 Direct Call / WhatsApp:</strong> +91 8884456745</li>
                            <li><strong>✉️ Official Email:</strong> operations@cogniza.in / support@cogniza.in</li>
                            <li><strong>🏢 Center Address:</strong> 2734, 2nd Floor, 16th Cross, 27th Main Road, Near NIFT College, HSR Layout, Sector 1, Bangalore - 560102.</li>
                            <li><strong>⏰ Operating Hours:</strong> Monday to Saturday, 9:00 AM – 7:00 PM IST.</li>
                        </ul>`,
                        links: [
                            { text: '💬 Chat on WhatsApp Now', url: 'https://wa.me/918884456745' },
                            { text: '📬 Visit Contact Page', url: 'index.html#contact' }
                        ],
                        chips: ['All Courses', 'How to Register', 'Pricing & Fees']
                    };
                }

                // ----------------------------------------------------
                // 14. BOT IDENTITY
                // ----------------------------------------------------
                if (intent === 'IDENTITY') {
                    return {
                        reply: `<p>Hello! 🤖 I am <strong>Cogniza AI</strong>, your 24/7 intelligent career advisor.</p>
                        <p>I am trained on Cogniza's complete ecosystem — covering <strong>107+ industry specializations</strong>, Elite bundles (Tech Pro, Flexi Pro, Career Pro), curriculum roadmaps, fee structures, batch schedules, and placement assistance.</p>
                        <p>How can I assist your career progression today?</p>`,
                        chips: ['🎓 All Courses', '💰 Course Fees', '💼 Placement Details', '📝 How to Enroll']
                    };
                }

                // ----------------------------------------------------
                // 15. GREETING & SMALL TALK
                // ----------------------------------------------------
                if (intent === 'GREETING') {
                    return {
                        reply: `<p>Hello! 👋 Welcome to <strong>Cogniza</strong>. I'm your AI career assistant!</p>
                        <p>Whether you want to explore cutting-edge engineering programs, check course fees, review batch timings, or connect with a mentor, I'm here to guide you. What would you like to explore?</p>`,
                        chips: ['🎓 All Courses (107+)', '💰 Pricing & Fees', '💼 Placement Support', '📝 How to Register', '📞 Talk to Mentor']
                    };
                }

                if (intent === 'GRATITUDE') {
                    return {
                        reply: `<p>You're very welcome! 😊 We are excited to support your career growth. Click below anytime to take the next step:</p>`,
                        links: [
                            { text: '📝 Register Online', url: 'register.html' },
                            { text: '💬 WhatsApp a Mentor', url: 'https://wa.me/918884456745' }
                        ],
                        chips: ['All Courses', 'Offer Plans', 'Batch Timings', 'Contact Support']
                    };
                }

                // ----------------------------------------------------
                // 16. ALL COURSES / CATALOG OVERVIEW
                // ----------------------------------------------------
                if (intent === 'ALL_COURSES') {
                    return {
                        reply: `<p><strong>🎓 Cogniza 107+ Industry Specialization Programs:</strong></p>
                        <p>Organized across 7 core engineering &amp; management domains:</p>
                        <ul>
                            <li><strong>💻 CSE / IT (53 tracks):</strong> AI/ML, Generative AI, Full Stack (MERN), Python, Java, Cloud (AWS/Azure), Cyber Security, DevOps, SAP.</li>
                            <li><strong>⚡ ECE / EEE (5 tracks):</strong> VLSI Design, Embedded Systems &amp; ARM, IoT, Signals &amp; DSP, SCLD Logic Design.</li>
                            <li><strong>⚙️ Mechanical (9 tracks):</strong> AutoCAD 2D/3D, CATIA, Automotive Styling, EV Powertrain, Drone Dynamics, Robotics.</li>
                            <li><strong>🏗️ Civil (4 tracks):</strong> Revit BIM, Construction Planning (Primavera P6), STAAD.Pro Structural, AutoCAD Civil.</li>
                            <li><strong>🧪 Chemical (6 tracks):</strong> Aspen HYSYS, Aspen Plus Simulation, Petroleum Refining, Renewable Power.</li>
                            <li><strong>🧬 Medical &amp; Pharma (12 tracks):</strong> Clinical SAS (SDTM/ADaM), Pharmacovigilance, Medical Coding, Bioinformatics.</li>
                            <li><strong>📈 Management (18 tracks):</strong> Investment Banking, Business Analytics, Corporate Finance, HR, Digital Marketing.</li>
                        </ul>`,
                        links: [
                            { text: '🚀 Explore All 107+ Programs', url: 'projects.html' },
                            { text: '📝 Register Online', url: 'register.html' }
                        ],
                        chips: ['💻 CSE / IT', '⚡ ECE & VLSI', '⚙️ Mechanical & EV', '🧬 Pharma & SAS', '💰 Pricing & Fees']
                    };
                }

                // ----------------------------------------------------
                // 17. SMART DYNAMIC FALLBACK (Empathetic & Guiding)
                // ----------------------------------------------------
                return {
                    reply: `<p>Thank you for asking about <strong>"${escapeHtml(query)}"</strong>!</p>
                    <p>To help guide you directly, here are our most popular options across Cogniza's 107+ programs:</p>
                    <ul>
                        <li><strong>Specialization Tracks:</strong> Comprehensive live programs in Full Stack, AI/ML, Cloud, VLSI, EV, Clinical SAS, and Finance.</li>
                        <li><strong>Affordable Bundles:</strong> Tech Pro Pack (&#8377;9,999) for 3 IT domains and Career Pro Pack (&#8377;7,999) for 3 Non-IT domains.</li>
                        <li><strong>Placement &amp; Credentials:</strong> ISO 9001:2015 &amp; MSME certified certificates plus dedicated resume review and mock interviews.</li>
                    </ul>
                    <p>Select what you'd like to check next:</p>`,
                    links: [
                        { text: '🎓 Browse All 107+ Programs', url: 'projects.html' },
                        { text: '🏷️ View Pricing & Offer Plans', url: 'index.html#offers' },
                        { text: '💬 Chat with Mentor on WhatsApp', url: 'https://wa.me/918884456745' }
                    ],
                    chips: ['🎓 All Courses', '💰 Pricing & Fees', '⏱️ Program Duration', '💼 Placement Details', '📞 Talk to Human']
                };
            }

            function initChatGreeting() {
                if (!aiChatMessages) return;
                aiChatMessages.innerHTML = '';

                const welcomeItem = {
                    reply: `<p>Hello! 👋 I'm your <strong>Cogniza AI Career Advisor</strong>.</p>
                    <p>How can I help shape your career today? Ask me about our 107+ specializations, course fees, batch schedules, placement assistance, or certifications:</p>`,
                    chips: ['🎓 All Courses (107+)', '💰 Pricing & Offers', '⏱️ Course Duration', '💼 Placement Support', '📞 Talk to Mentor']
                };

                renderAIMessage(welcomeItem);
            }

            function renderAIMessage(responseObj) {
                if (!aiChatMessages) return null;
                const msgDiv = document.createElement('div');
                msgDiv.className = 'ai-message ai';

                const avatarDiv = document.createElement('div');
                avatarDiv.className = 'msg-avatar';
                avatarDiv.innerHTML = '<i class="fas fa-comment-dots"></i>';

                const bubbleDiv = document.createElement('div');
                bubbleDiv.className = 'msg-bubble';
                bubbleDiv.innerHTML = responseObj.reply || '';

                if (responseObj.links && responseObj.links.length > 0) {
                    const linksWrap = document.createElement('div');
                    linksWrap.style.marginTop = '10px';
                    linksWrap.style.display = 'flex';
                    linksWrap.style.flexWrap = 'wrap';
                    linksWrap.style.gap = '6px';

                    responseObj.links.forEach(l => {
                        const linkTag = document.createElement('a');
                        linkTag.href = l.url;
                        linkTag.className = 'chat-link';
                        linkTag.innerHTML = `${l.text} <i class="fas fa-arrow-right" style="font-size: 0.75rem;"></i>`;
                        linksWrap.appendChild(linkTag);
                    });
                    bubbleDiv.appendChild(linksWrap);
                }

                if (responseObj.chips && responseObj.chips.length > 0) {
                    const chipsWrap = document.createElement('div');
                    chipsWrap.className = 'ai-quick-chips';
                    responseObj.chips.forEach(chipText => {
                        const chipBtn = document.createElement('button');
                        chipBtn.className = 'ai-chip';
                        chipBtn.type = 'button';
                        chipBtn.textContent = chipText;
                        chipBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            sendUserQuery(chipText);
                        });
                        chipsWrap.appendChild(chipBtn);
                    });
                    bubbleDiv.appendChild(chipsWrap);
                }

                msgDiv.appendChild(avatarDiv);
                msgDiv.appendChild(bubbleDiv);
                aiChatMessages.appendChild(msgDiv);
                aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
                return msgDiv;
            }

            function renderUserMessage(text) {
                if (!aiChatMessages) return;
                const msgDiv = document.createElement('div');
                msgDiv.className = 'ai-message user';

                const avatarDiv = document.createElement('div');
                avatarDiv.className = 'msg-avatar';
                avatarDiv.innerHTML = '<i class="fas fa-user"></i>';

                const bubbleDiv = document.createElement('div');
                bubbleDiv.className = 'msg-bubble';
                bubbleDiv.textContent = text;

                msgDiv.appendChild(avatarDiv);
                msgDiv.appendChild(bubbleDiv);
                aiChatMessages.appendChild(msgDiv);
                aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
            }

            function showTypingIndicator() {
                if (!aiChatMessages) return null;
                const msgDiv = document.createElement('div');
                msgDiv.className = 'ai-message ai typing-indicator';

                const avatarDiv = document.createElement('div');
                avatarDiv.className = 'msg-avatar';
                avatarDiv.innerHTML = '<i class="fas fa-comment-dots"></i>';

                const bubbleDiv = document.createElement('div');
                bubbleDiv.className = 'msg-bubble';
                bubbleDiv.innerHTML = `
                    <div class="ai-typing-dots">
                        <span></span><span></span><span></span>
                    </div>
                `;

                msgDiv.appendChild(avatarDiv);
                msgDiv.appendChild(bubbleDiv);
                aiChatMessages.appendChild(msgDiv);
                aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
                return msgDiv;
            }

            function sendUserQuery(text) {
                if (!text || !text.trim()) return;
                const query = text.trim();

                renderUserMessage(query);

                if (aiChatInput) {
                    aiChatInput.value = '';
                    aiChatInput.style.height = '20px';
                }

                const typingEl = showTypingIndicator();
                const localAnswer = getCognizaAIResponse(query);

                // Natural conversational typing delay (260ms - 380ms)
                setTimeout(() => {
                    if (typingEl && typingEl.parentNode) {
                        typingEl.remove();
                    }
                    renderAIMessage(localAnswer);
                }, 300);
            }

            // Expose greeting initializer globally
            window.initCognizaChatGreeting = initChatGreeting;

            // Direct click handlers on button (clean single binding, replaces inline onclick)
            if (aiBtn) {
                aiBtn.onclick = function(e) {
                    window.toggleCognizaAIChat(e);
                    return false;
                };
            }

            // Close button handler
            if (aiCloseBtn) {
                aiCloseBtn.onclick = function(e) {
                    if (e) {
                        if (typeof e.preventDefault === 'function') e.preventDefault();
                        if (typeof e.stopPropagation === 'function') e.stopPropagation();
                    }
                    window.closeCognizaAIChat();
                    return false;
                };
            }

            // Greeting bubble close
            if (closeGreetingBtn && aiGreetingBubble) {
                closeGreetingBtn.onclick = function(e) {
                    if (e) {
                        if (typeof e.preventDefault === 'function') e.preventDefault();
                        if (typeof e.stopPropagation === 'function') e.stopPropagation();
                    }
                    aiGreetingBubble.classList.add('hidden');
                    return false;
                };
            }

            // Input handlers
            if (aiChatInput) {
                aiChatInput.addEventListener('input', function() {
                    this.style.height = '20px';
                    this.style.height = Math.min(this.scrollHeight - 10, 90) + 'px';
                });

                aiChatInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        const val = aiChatInput.value;
                        if (val && val.trim()) {
                            sendUserQuery(val);
                        }
                    }
                });
            }

            if (aiSendBtn) {
                aiSendBtn.onclick = function(e) {
                    if (e) e.preventDefault();
                    if (aiChatInput) {
                        const val = aiChatInput.value;
                        if (val && val.trim()) {
                            sendUserQuery(val);
                        }
                    }
                    return false;
                };
            }

            // Prevent clicks inside chat widget from closing it
            aiChatWidget.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            // Close when clicking outside
            document.addEventListener('click', (e) => {
                const widget = document.getElementById('aiChatWidget');
                const btn = document.getElementById('aiBtn');
                if (!widget || !btn) return;
                const isCurrentlyActive = widget.classList.contains('active') || widget.style.display === 'flex';
                if (isCurrentlyActive) {
                    if (widget.contains(e.target) || btn.contains(e.target) || e.target === btn) {
                        return;
                    }
                    window.closeCognizaAIChat();
                }
            });

            // Initialize greeting on load
            initChatGreeting();

        } catch (e) {
            console.error("Error in initAIChatbot:", e);
        }
    }

    // ==========================================
    // 7. TESTIMONIALS CAROUSEL & NAVIGATION
    // ==========================================
    function initTestimonials() {
        try {
            const testiCards = document.querySelectorAll('.testi-card');
            const testiDotsContainer = document.getElementById('testi-dots');
            const testiPrevBtn = document.getElementById('testi-prev');
            const testiNextBtn = document.getElementById('testi-next');
            const testiRangeText = document.getElementById('testi-range-text');
            const testiSection = document.getElementById('testimonials');

            if (testiCards.length > 0) {
                let currentPage = 0;
                let autoPlayTimer = null;
                let isPaused = false;

                function getCardsPerPage() {
                    if (window.innerWidth <= 600) return 1;
                    if (window.innerWidth <= 900) return 2;
                    return 3;
                }

                function renderDots(totalPages) {
                    if (!testiDotsContainer) return;
                    testiDotsContainer.innerHTML = '';
                    for (let i = 0; i < totalPages; i++) {
                        const dot = document.createElement('button');
                        dot.className = `testi-dot ${i === currentPage ? 'active' : ''}`;
                        dot.setAttribute('aria-label', `Go to testimonial page ${i + 1}`);
                        dot.addEventListener('click', () => {
                            currentPage = i;
                            showPage(currentPage);
                            resetTimer();
                        });
                        testiDotsContainer.appendChild(dot);
                    }
                }

                function showPage(pageIndex) {
                    const cardsPerPage = getCardsPerPage();
                    const totalCards = testiCards.length;
                    const totalPages = Math.ceil(totalCards / cardsPerPage);

                    if (pageIndex >= totalPages) pageIndex = 0;
                    if (pageIndex < 0) pageIndex = totalPages - 1;
                    currentPage = pageIndex;

                    const startIndex = currentPage * cardsPerPage;
                    const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

                    testiCards.forEach((card, index) => {
                        if (index >= startIndex && index < endIndex) {
                            card.style.display = 'flex';
                            card.style.animation = 'fadeIn 0.4s ease forwards';
                        } else {
                            card.style.display = 'none';
                        }
                    });

                    if (testiRangeText) {
                        testiRangeText.textContent = `${startIndex + 1} - ${endIndex}`;
                    }

                    if (testiDotsContainer) {
                        const dots = testiDotsContainer.querySelectorAll('.testi-dot');
                        if (dots.length !== totalPages) {
                            renderDots(totalPages);
                        } else {
                            dots.forEach((dot, idx) => {
                                dot.classList.toggle('active', idx === currentPage);
                            });
                        }
                    }
                }

                function nextPage() {
                    const cardsPerPage = getCardsPerPage();
                    const totalPages = Math.ceil(testiCards.length / cardsPerPage);
                    currentPage = (currentPage + 1) % totalPages;
                    showPage(currentPage);
                }

                function prevPage() {
                    const cardsPerPage = getCardsPerPage();
                    const totalPages = Math.ceil(testiCards.length / cardsPerPage);
                    currentPage = (currentPage - 1 + totalPages) % totalPages;
                    showPage(currentPage);
                }

                function startTimer() {
                    if (autoPlayTimer) clearInterval(autoPlayTimer);
                    autoPlayTimer = setInterval(() => {
                        if (!isPaused) {
                            nextPage();
                        }
                    }, 5500);
                }

                function resetTimer() {
                    startTimer();
                }

                if (testiNextBtn) {
                    testiNextBtn.addEventListener('click', () => {
                        nextPage();
                        resetTimer();
                    });
                }

                if (testiPrevBtn) {
                    testiPrevBtn.addEventListener('click', () => {
                        prevPage();
                        resetTimer();
                    });
                }

                if (testiSection) {
                    testiSection.addEventListener('mouseenter', () => { isPaused = true; });
                    testiSection.addEventListener('mouseleave', () => { isPaused = false; });
                    
                    let touchStartX = 0;
                    let touchEndX = 0;
                    testiSection.addEventListener('touchstart', (e) => {
                        touchStartX = e.changedTouches[0].screenX;
                    }, { passive: true });

                    testiSection.addEventListener('touchend', (e) => {
                        touchEndX = e.changedTouches[0].screenX;
                        const diff = touchStartX - touchEndX;
                        if (Math.abs(diff) > 50) {
                            if (diff > 0) {
                                nextPage();
                            } else {
                                prevPage();
                            }
                            resetTimer();
                        }
                    }, { passive: true });
                }

                let resizeTimeout;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        const totalPages = Math.ceil(testiCards.length / getCardsPerPage());
                        renderDots(totalPages);
                        showPage(currentPage);
                    }, 200);
                });

                const initialPages = Math.ceil(testiCards.length / getCardsPerPage());
                renderDots(initialPages);
                showPage(0);
                startTimer();
            }
        } catch (e) {
            console.error("Error in initTestimonials:", e);
        }
    }

    // ==========================================
    // 8. MOBILE MENU TOGGLE
    // ==========================================
    function initMobileMenu() {
        try {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const topBar = document.querySelector('.top-bar');
            
            if (mobileMenuBtn && topBar) {
                mobileMenuBtn.addEventListener('click', () => {
                    topBar.classList.toggle('menu-open');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        if (topBar.classList.contains('menu-open')) {
                            icon.classList.remove('fa-bars');
                            icon.classList.add('fa-times');
                        } else {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                });
            }
        } catch (e) {
            console.error("Error in initMobileMenu:", e);
        }
    }

    // ==========================================
    // MASTER INITIALIZATION
    // ==========================================
    function initApp() {
        initHeroAndDropdown();
        initExpandingCards();
        initStatsCounter();
        initNavigation();
        initEnquiryModal();
        initAIChatbot();
        initTestimonials();
        initMobileMenu();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initApp);
    } else {
        initApp();
    }

})();
