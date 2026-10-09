// =========================================================================
// COGNIZA OFFICIAL WEB PLATFORM SCRIPTS & AI ENGINE (v3.0 Standalone)
// 100% Client-Side In-Browser NLP - Zero External Server Failures
// =========================================================================

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
    // 6. BRAND NEW COGNIZA AI CHATBOT (Standalone In-Browser Engine)
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

            // --- Knowledge Rules & Natural Language Response Matrix ---
            const KNOWLEDGE_BASE = [
                {
                    triggers: ['course', 'courses', 'program', 'programs', 'domain', 'domains', 'specialization', 'specializations', 'tracks', 'syllabus', 'curriculum', 'what do you teach', 'study', 'subjects'],
                    reply: `<p><strong>🎓 Cogniza Specialization Programs &amp; Domains:</strong></p>
                    <p>We offer <strong>107+ industry-designed programs</strong> organized across 7 core engineering &amp; management domains:</p>
                    <ul>
                        <li><strong>💻 CSE / IT (53 tracks):</strong> AI/ML, Full Stack, Python, Java, Cloud (AWS/Azure), Cyber Security, DevOps, SAP (FICO/MM/GRC).</li>
                        <li><strong>⚡ ECE / EEE (5 tracks):</strong> VLSI Design, Embedded Systems, IoT, Signals &amp; Systems, SCLD Logic Design.</li>
                        <li><strong>⚙️ Mechanical (9 tracks):</strong> AutoCAD, CATIA 3D, Car Design, Drone Mechanics, EV Powertrain, Robotics.</li>
                        <li><strong>🏗️ Civil (4 tracks):</strong> Construction Planning (Primavera), STAAD.Pro Structural, Revit BIM Architecture, AutoCAD Civil.</li>
                        <li><strong>🧪 Chemical &amp; Energy (6 tracks):</strong> Aspen HYSYS, Aspen Plus, Petroleum Refining, Process Safety, Renewable Energy.</li>
                        <li><strong>🧬 Medical &amp; Pharma (12 tracks):</strong> Clinical SAS (SDTM/ADaM), Pharmacovigilance, Clinical Data Mgmt, Medical Coding, Bioinformatics.</li>
                        <li><strong>📈 Management (18 tracks):</strong> ACCA F4 Law, Investment Banking, Business Analytics (Power BI), HR, Digital Marketing, Corporate Finance.</li>
                    </ul>`,
                    links: [
                        { text: '🚀 Explore All 107+ Programs', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' }
                    ],
                    chips: ['💻 CSE / IT', '⚡ ECE & VLSI', '⚙️ Mechanical & EV', '🧬 Pharma & SAS', '📈 Management', '💰 Pricing & Fees']
                },
                {
                    triggers: ['fee', 'fees', 'cost', 'price', 'pricing', 'offer', 'offers', 'pack', 'packs', 'plan', 'plans', 'discount', 'tech pro', 'flexi', 'career pro'],
                    reply: `<p><strong>💰 Value-Packed Offer Plans &amp; Pricing:</strong></p>
                    <ul>
                        <li><strong>🌟 Tech Pro Pack:</strong>
                            <br>• <strong>IT Tracks:</strong> &#8377;20,000
                            <br>• <strong>Non-IT / Core Tracks:</strong> &#8377;15,000
                            <br><em>Includes 1 core specialization, live project capstone, mentor support &amp; ISO/MSME verified credential.</em>
                        </li>
                        <li><strong>🔄 Flexi Pro Pack:</strong> Dual-domain flexibility with custom batch schedules.</li>
                        <li><strong>🚀 Career Pro Pack:</strong> Full career suite with 3 production capstones, placement assurance, resume optimization &amp; mock interviews.</li>
                    </ul>`,
                    links: [
                        { text: '🏷️ View Detailed Offer Plans', url: 'index.html#offers' },
                        { text: '📝 Apply for Enrollment', url: 'register.html' }
                    ],
                    chips: ['Tech Pro Pack', 'Career Pro Pack', 'How to Register', 'Talk to Counselor']
                },
                {
                    triggers: ['python', 'java', 'web development', 'full stack', 'frontend', 'backend', 'react', 'node', 'javascript', 'mern', 'software engineering'],
                    reply: `<p><strong>💻 Full Stack &amp; Software Development:</strong></p>
                    <p>Our software tracks cover modern full-stack architectures (React, Node.js, Express, MongoDB/PostgreSQL, Java Spring Boot, and Python Django/FastAPI). Students build multi-tenant SaaS applications, microservices, and secure APIs.</p>`,
                    links: [
                        { text: '🌐 View Full Stack Web Dev', url: 'full-stack-web-development.html' },
                        { text: '🐍 View Python Program', url: 'programming-in-python.html' },
                        { text: '☕ View Java Program', url: 'programming-in-java.html' }
                    ],
                    chips: ['Full Stack Development', 'Python Programming', 'DevOps', 'Offer Plans']
                },
                {
                    triggers: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'genai', 'generative ai', 'llm', 'agentic', 'data science', 'data analytics'],
                    reply: `<p><strong>🤖 Artificial Intelligence &amp; Data Science:</strong></p>
                    <p>Master machine learning algorithms, deep neural networks, computer vision, NLP, and agentic GenAI architectures (LangChain, LlamaIndex, vector databases). Build end-to-end predictive and generative AI pipelines deployed on cloud.</p>`,
                    links: [
                        { text: '🧠 View AI & ML Program', url: 'artificial-intelligence-ai-machine-learning-ml.html' },
                        { text: '📊 View Data Science Track', url: 'data-science.html' },
                        { text: '⚡ View GenAI & Agentic AI', url: 'ai-generative-agentic.html' }
                    ],
                    chips: ['AI & Machine Learning', 'Data Science', 'Generative AI', 'Register Now']
                },
                {
                    triggers: ['vlsi', 'embedded', 'iot', 'hardware', 'semiconductor', 'chip', 'verilog', 'fpga', 'arm', 'cortex', 'robotics'],
                    reply: `<p><strong>⚡ ECE, VLSI &amp; Embedded Systems:</strong></p>
                    <p>Hands-on core semiconductor and embedded design tracks covering Verilog HDL, RTL synthesis, static timing analysis (STA), STM32 ARM Cortex firmware, SPI/I2C protocols, and IoT edge hardware integration.</p>`,
                    links: [
                        { text: '🔬 View VLSI Design', url: 'vlsi-design.html' },
                        { text: '🔌 View Embedded Systems', url: 'embedded-systems.html' },
                        { text: '📡 View Internet of Things', url: 'internet-of-things-iot.html' }
                    ],
                    chips: ['VLSI Design', 'Embedded Systems', 'Robotics', 'Offer Plans']
                },
                {
                    triggers: ['autocad', 'catia', 'ev', 'electric vehicle', 'car design', 'mechanical', 'drone', 'uav', 'automobile'],
                    reply: `<p><strong>⚙️ Mechanical, CAD &amp; Electric Vehicle Tracks:</strong></p>
                    <p>Master industrial 2D/3D modeling, surface design, and EV powertrain architectures with AutoCAD, CATIA, EV battery management simulation (BMS), and Drone aerodynamics.</p>`,
                    links: [
                        { text: '📐 View AutoCAD Program', url: 'autocad.html' },
                        { text: '🔋 View EV Technology', url: 'hybrid-electric-vehicle-technology.html' },
                        { text: '🏎️ View Car Design', url: 'car-design.html' }
                    ],
                    chips: ['AutoCAD', 'EV Technology', 'Car Design', 'How to Register']
                },
                {
                    triggers: ['civil', 'staad', 'primavera', 'revit', 'bim', 'structural', 'construction'],
                    reply: `<p><strong>🏗️ Civil Engineering &amp; BIM:</strong></p>
                    <p>Specialized training in Primavera P6 construction management, STAAD.Pro structural analysis, and Revit 3D/4D BIM architectural workflows.</p>`,
                    links: [
                        { text: '🏢 View Revit & BIM', url: 'revit-bim.html' },
                        { text: '🏗️ View Construction Planning', url: 'construction-planning.html' },
                        { text: '📐 View AutoCAD Civil', url: 'autocad-civil-engineering.html' }
                    ],
                    chips: ['Revit BIM', 'Construction Planning', 'All Programs']
                },
                {
                    triggers: ['clinical sas', 'sas', 'pharmacovigilance', 'medical coding', 'cdm', 'clinical research', 'clinical trials', 'pharma', 'biology', 'microbiology'],
                    reply: `<p><strong>🧬 Medical, Pharma &amp; Life Sciences:</strong></p>
                    <p>Accelerate your clinical research career with Clinical SAS (SDTM &amp; ADaM mapping), ICSR Pharmacovigilance safety reporting, ICD-10 medical coding, and Clinical Data Management.</p>`,
                    links: [
                        { text: '💊 View Clinical SAS Track', url: 'clinical-sas.html' },
                        { text: '🛡️ View Pharmacovigilance', url: 'pharmacovigilance.html' },
                        { text: '🏥 View Medical Coding', url: 'medical-coding.html' }
                    ],
                    chips: ['Clinical SAS', 'Pharmacovigilance', 'Medical Coding', 'Register Online']
                },
                {
                    triggers: ['investment banking', 'finance', 'sap fico', 'sap mm', 'sap', 'power bi', 'business analytics', 'marketing', 'digital marketing', 'hr', 'human resources'],
                    reply: `<p><strong>📈 Management, Finance &amp; Enterprise ERP:</strong></p>
                    <p>Master corporate valuation financial models (DCF, M&amp;A), Power BI dashboards, SAP S/4HANA (FICO, MM, Security, GRC), digital marketing ROI, and talent analytics.</p>`,
                    links: [
                        { text: '📊 View Business Analytics', url: 'business-analytics.html' },
                        { text: '💼 View Investment Banking', url: 'investment-banking.html' },
                        { text: '🏢 View SAP FICO', url: 'sap-fico.html' }
                    ],
                    chips: ['Investment Banking', 'Business Analytics', 'SAP FICO', 'Offer Plans']
                },
                {
                    triggers: ['internship', 'project', 'live project', 'training', 'certificate', 'certification', 'stipend', 'duration', 'letter'],
                    reply: `<p><strong>💼 Cogniza Project Internship Experience:</strong></p>
                    <ul>
                        <li><strong>Real Production Capstones:</strong> Build authentic portfolios solving actual business challenges.</li>
                        <li><strong>1-on-1 Mentor Guidance:</strong> Direct mentoring from engineers and leads at top firms.</li>
                        <li><strong>Government-Recognized Credentials:</strong> ISO 9001:2015 &amp; MSME certified verified completion certificate.</li>
                        <li><strong>Placement &amp; Interview Prep:</strong> Resume reviews, mock interviews, and career advisory.</li>
                    </ul>`,
                    links: [
                        { text: '🎓 Explore All Programs', url: 'projects.html' },
                        { text: '📝 Apply for Internship', url: 'register.html' }
                    ],
                    chips: ['All Courses', 'Offer Plans', 'How to Enroll', 'Contact Mentor']
                },
                {
                    triggers: ['register', 'apply', 'enroll', 'admission', 'sign up', 'how to register', 'joining', 'join'],
                    reply: `<p><strong>📝 How to Enroll at Cogniza:</strong></p>
                    <ol>
                        <li>Choose your target domain and specialization track.</li>
                        <li>Select your preferred pack (Tech Pro, Flexi Pro, or Career Pro).</li>
                        <li>Complete the online application form with your college &amp; contact info.</li>
                    </ol>
                    <p>Our academic counselor will reach out within 24 hours to schedule your onboarding!</p>`,
                    links: [
                        { text: '👉 Open Online Registration Form', url: 'register.html' }
                    ],
                    chips: ['All Courses', 'Offer Plans', 'Contact Support']
                },
                {
                    triggers: ['contact', 'phone', 'call', 'whatsapp', 'email', 'support', 'help', 'address', 'location', 'counselor', 'advisor', 'talk to human'],
                    reply: `<p><strong>📞 Contact Cogniza Admissions &amp; Support:</strong></p>
                    <ul>
                        <li><strong>📱 WhatsApp / Direct Call:</strong> +91 8884456745</li>
                        <li><strong>✉️ Email:</strong> support@cogniza.in</li>
                        <li><strong>🏢 Location:</strong> Bengaluru, Karnataka, India</li>
                    </ul>
                    <p>Our team is available Monday to Saturday, 9:00 AM – 7:00 PM IST.</p>`,
                    links: [
                        { text: '💬 Chat on WhatsApp Now', url: 'https://wa.me/918884456745' },
                        { text: '📬 Visit Contact Page', url: 'index.html#contact' }
                    ],
                    chips: ['All Courses', 'How to Register', 'Pricing & Fees']
                },
                {
                    triggers: ['ambassador', 'campus ambassador', 'student rep', 'college ambassador'],
                    reply: `<p><strong>🌟 Cogniza Campus Ambassador Program:</strong></p>
                    <p>Lead tech communities in your college, organize workshops, earn performance stipends, and gain exclusive internship recommendations.</p>`,
                    links: [
                        { text: '🚀 Apply for Campus Ambassador', url: 'ambassador.html' }
                    ],
                    chips: ['All Courses', 'How to Register', 'Contact Us']
                },
                {
                    triggers: ['blog', 'event', 'events', 'celebration', 'onam', 'awards', 'rewards', 'news', 'highlights', 'updates', 'photos', 'gallery'],
                    reply: `<p><strong>📰 Cogniza Community &amp; Event Highlights:</strong></p>
                    <ul>
                        <li><strong>Welcome to Cogniza:</strong> Welcoming our new mentors and technical leadership.</li>
                        <li><strong>Onam Celebration:</strong> Traditional Pookkalam &amp; festive celebrations.</li>
                        <li><strong>Rewards &amp; Awards:</strong> Recognizing star performers, educators, and student achievers.</li>
                    </ul>`,
                    links: [
                        { text: '✨ Visit Blog & Events', url: 'blog-events.html' },
                        { text: '🏆 Read Rewards & Awards', url: 'rewards-and-awards.html' },
                        { text: '🌸 Read Onam Story', url: 'onam-celebration-2026.html' }
                    ],
                    chips: ['All Courses', 'Offer Plans', 'Contact Us']
                },
                {
                    triggers: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'morning', 'afternoon', 'evening', '.', 'help'],
                    reply: `<p>Hello there! 👋 Welcome to <strong>Cogniza</strong>. I'm your AI career advisor!</p>
                    <p>I can help you explore 107+ specialization programs, check offer plans &amp; pricing, guide your enrollment, or connect you with a mentor. What would you like to explore today?</p>`,
                    chips: ['🎓 All Courses (107+)', '💰 Pricing & Offers', '💼 Internship Info', '📝 How to Enroll', '📞 Talk to Mentor', '📰 Blog & Events']
                },
                {
                    triggers: ['thank', 'thanks', 'thank you', 'awesome', 'great', 'cool', 'perfect', 'ok', 'okay', 'bye'],
                    reply: `<p>You're very welcome! 😊 We are excited to support your career growth. Click below anytime to take the next step:</p>`,
                    links: [
                        { text: '📝 Register Online', url: 'register.html' },
                        { text: '💬 WhatsApp a Mentor', url: 'https://wa.me/918884456745' }
                    ],
                    chips: ['All Courses', 'Offer Plans', 'Contact Us']
                }
            ];

            // NLP Matching Engine
            function getCognizaAIResponse(query) {
                const cleanQuery = query.toLowerCase().trim();

                // 1. Direct Trigger Matching
                for (const item of KNOWLEDGE_BASE) {
                    for (const trigger of item.triggers) {
                        if (cleanQuery === trigger || cleanQuery.includes(trigger)) {
                            return item;
                        }
                    }
                }

                // 2. Fuzzy Course Matching across 107+ courses
                const matchedCourse = ALL_COURSES.find(c => cleanQuery.includes(c.toLowerCase()) || c.toLowerCase().includes(cleanQuery));
                if (matchedCourse) {
                    return {
                        reply: `<p><strong>🎓 Specialization Found: ${escapeHtml(matchedCourse)}</strong></p>
                        <p>This program features a 4-phase hands-on trajectory: syntax &amp; foundations, core toolkits &amp; lab environments, advanced industry protocols, and production capstone deployments with ISO/MSME verified certification.</p>`,
                        links: [
                            { text: '📖 View Program Details', url: 'projects.html' },
                            { text: '📝 Register for This Track', url: 'register.html' }
                        ],
                        chips: ['All Courses', '💰 Course Fees & Offers', '📝 How to Enroll', '📞 Talk to Mentor']
                    };
                }

                // 3. Fallback Smart Guidance
                return {
                    reply: `<p>Thank you for asking about <strong>${escapeHtml(query)}</strong>!</p>
                    <p>Cogniza provides over <strong>107+ specialized tracks</strong> across CSE/IT, ECE, Mechanical, Civil, Chemical, Pharma, and Management with live capstone projects and mentor support.</p>
                    <p>Select an option below to find exactly what you need:</p>`,
                    links: [
                        { text: '🎓 Explore All 107+ Programs', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' },
                        { text: '💬 Chat on WhatsApp', url: 'https://wa.me/918884456745' }
                    ],
                    chips: ['🎓 All Courses', '💰 Pricing & Fees', '📝 How to Enroll', '📞 Contact Support']
                };
            }

            function escapeHtml(str) {
                return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
            }

            function initChatGreeting() {
                if (!aiChatMessages) return;
                aiChatMessages.innerHTML = '';

                const welcomeItem = {
                    reply: `<p>Hello! 👋 I'm your <strong>Cogniza AI Assistant</strong>.</p>
                    <p>How can I help shape your career today? Select a topic below or type any question:</p>`,
                    chips: ['🎓 All Courses (107+)', '💰 Pricing & Offers', '💼 Internship Info', '📝 How to Enroll', '📞 Talk to Mentor', '📰 Blog & Events']
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

                // Quick and natural typing response delay (280ms)
                setTimeout(() => {
                    if (typingEl && typingEl.parentNode) {
                        typingEl.remove();
                    }
                    renderAIMessage(localAnswer);
                }, 280);
            }

            // Expose globally
            window.toggleCognizaAIChat = function() {
                if (!aiChatWidget) return;
                const isCurrentlyActive = aiChatWidget.classList.contains('active');
                if (isCurrentlyActive) {
                    aiChatWidget.classList.remove('active');
                } else {
                    aiChatWidget.classList.add('active');
                    if (aiChatMessages && !aiChatMessages.children.length) {
                        initChatGreeting();
                    }
                    setTimeout(() => {
                        if (aiChatInput) aiChatInput.focus();
                    }, 100);
                }
            };

            // Toggle click listener
            aiBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (aiGreetingBubble) aiGreetingBubble.classList.add('hidden');
                window.toggleCognizaAIChat();
            });

            // Close button handler
            if (aiCloseBtn) {
                aiCloseBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    aiChatWidget.classList.remove('active');
                });
            }

            // Greeting bubble close
            if (closeGreetingBtn && aiGreetingBubble) {
                closeGreetingBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    aiGreetingBubble.classList.add('hidden');
                });
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
                aiSendBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (aiChatInput) {
                        const val = aiChatInput.value;
                        if (val && val.trim()) {
                            sendUserQuery(val);
                        }
                    }
                });
            }

            // Prevent clicks inside chat widget from closing it
            aiChatWidget.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            // Close when clicking outside
            document.addEventListener('click', (e) => {
                if (aiChatWidget.classList.contains('active') && !aiChatWidget.contains(e.target) && !aiBtn.contains(e.target)) {
                    aiChatWidget.classList.remove('active');
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
