// Cogniza Web Application Scripts
// Fully modular & safe for static GitHub Pages and live hosts

(function() {
    'use strict';

    const courses = [
        "AI (Generative & Agentic)",
        "Agentic AI",
        "Android App Development",
        "Artificial Intelligence (AI)",
        "AI & Machine Learning (AI/ML)",
        "AI for Economics",
        "Augmented Reality (AR) & Virtual Reality (VR)",
        "AutoCAD 2D & 3D Drafting",
        "AutoCAD for Civil Engineering",
        "AWS Cloud Solutions",
        "ACCA F4 Business Law",
        "Aspen HYSYS Process Simulation",
        "Aspen Plus Chemical Simulation",
        "Basic Graphic Design",
        "Bioinformatics & Genomics",
        "Biostatistics & Clinical Analytics",
        "Blockchain Technology & Web3",
        "Business Analysis (BABOK)",
        "Business Analytics",
        "Car Design & Automotive Styling",
        "CATIA 3D CAD & Surfacing",
        "CCNA 200-301 Networking",
        "Chemical Engineering",
        "Clinical Data Management (CDM)",
        "Clinical SAS (SDTM & ADaM)",
        "Clinical Trials & Research",
        "Cloud Computing",
        "Computer Organization & Architecture",
        "Construction Planning & Primavera P6",
        "Cybersecurity & Ethical Hacking",
        "Data Analytics",
        "Data Engineering & PySpark",
        "Data Science",
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "Deep Learning & Neural Networks",
        "DevOps Engineering",
        "Digital Marketing & Growth",
        "Docker & Containerization",
        ".NET Development",
        "Drone Engineering & Technology",
        "Drone Mechanics & Dynamics",
        "DSA with Python",
        "Embedded Systems & ARM",
        "Energy & Renewable Power Engineering",
        "Corporate Finance",
        "Front-End Web Development",
        "Full Stack Web Development",
        "Generative AI & LLMs",
        "Genetic Engineering & CRISPR",
        "Graphic Designing",
        "Human Resources (HR) Management",
        "Hybrid & Electric Vehicle (EV) Technology",
        "IC Engine & Powertrain Design",
        "Industrial Automation, PLC & SCADA",
        "Industrial Robotics & Automation",
        "Internet of Things (IoT)",
        "Investment Banking",
        "Java Full Stack Development",
        "Machine Learning (ML)",
        "Manual & API Testing",
        "Medical Coding (ICD-10/CPT)",
        "Medical Sciences & Administration",
        "Metaverse & Spatial Computing",
        "Microbiology",
        "Microsoft Azure Cloud",
        "Microsoft Excel & Financial Modeling",
        "Molecular Biology",
        "Nanotechnology & Nanosciences",
        "Operations & Supply Chain Management",
        "Petroleum Engineering",
        "Pharmacovigilance (ICSR/MedDRA)",
        "Placement Preparation & Aptitude",
        "Power BI & Business Intelligence",
        "Product Management & PRDs",
        "Product & Project Management",
        "Programming in Java",
        "Programming in Python",
        "Psychology & Behavioral Science",
        "Python Full Stack Development",
        "Quantum Computing",
        "Revit & BIM Architecture",
        "Robotics Engineering",
        "Sales & Marketing Strategies",
        "Salesforce Administration",
        "SAP ERP Fundamentals",
        "SAP FICO",
        "SAP GRC ARM",
        "SAP MM (Materials Management)",
        "SAP Security",
        "SAP SuccessFactors Employee Central",
        "SAP UI5, Fiori & OData",
        "SAS Programming",
        "SCLD (Sequential Circuit & Logic Design)",
        "Selenium Automation Testing",
        "ServiceNow Administration",
        "Signals & Systems and DSP",
        "Startup & Entrepreneurship",
        "Stock Market & Equity Trading",
        "Structural Analysis & STAAD.Pro",
        "Supply Chain Management",
        "UI/UX Design",
        "VLSI Design",
        "Web Development",
        "Web3 & Smart Contracts"
    ];

    // ==========================================
    // 1. HERO TYPING EFFECT & MODAL DROPDOWN
    // ==========================================
    function initHeroAndDropdown() {
        try {
            const courseSelect = document.getElementById("courseSelect");
            if (courseSelect && courseSelect.children.length <= 1) {
                courses.forEach(course => {
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
                    const currentCourse = courses[courseIndex];
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
                        courseIndex = (courseIndex + 1) % courses.length;
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

    // ==========================================
    // 6. COGNIZA AI CHATBOT ENGINE & KNOWLEDGE BASE
    // ==========================================
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

            const KNOWLEDGE_BASE = [
                {
                    triggers: ['program', 'course', 'courses', 'domain', 'domains', 'specialization', 'specializations', 'subjects', 'syllabus', 'what do you teach', 'curriculum', 'study', 'tracks', 'classes'],
                    reply: `<p><strong>Cogniza offers 100+ specialized programs across 7 core domains</strong> with industry-designed curriculums, live capstones, and 1-on-1 mentorship:</p>
                    <ul>
                        <li><strong>💻 CSE / IT:</strong> AI &amp; ML, GenAI, Full Stack, Python, Java, Data Engineering, Cyber Security, Cloud, SAP (FICO/MM/GRC/Security), DevOps.</li>
                        <li><strong>⚡ ECE / EEE:</strong> Embedded Systems, VLSI Design, Signals &amp; Systems, SCLD Logic Design, Industrial Automation.</li>
                        <li><strong>⚙️ Mechanical Engineering:</strong> AutoCAD, CATIA 3D, Car Design, Drone Engineering &amp; Mechanics, EV Technology, Robotics.</li>
                        <li><strong>🏗️ Civil Engineering:</strong> Construction Planning (Primavera), Structural Analysis (STAAD.Pro), Revit BIM, AutoCAD Civil.</li>
                        <li><strong>🧪 Chemical / Process / Energy:</strong> Aspen HYSYS, Aspen Plus, Petroleum Refining, Process Safety, Renewable Energy.</li>
                        <li><strong>🧬 Medical / Pharma / Life Sciences:</strong> Clinical SAS (SDTM/ADaM), Clinical Data Mgmt, Pharmacovigilance, Medical Coding, Genetics.</li>
                        <li><strong>📈 Management &amp; Business:</strong> ACCA F4 Law, Business Analytics, Finance, Digital Marketing, Power BI, Product Management.</li>
                    </ul>
                    <p>Explore all domain curriculums and roadmaps directly:</p>`,
                    links: [
                        { text: '🎓 Explore All Specialization Hubs', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' }
                    ],
                    chips: ['CSE / IT Programs', 'ECE / EEE', 'Mechanical', 'Medical & Pharma', 'Management', 'Offer Plans']
                },
                {
                    triggers: ['cse', 'it', 'python', 'java', 'web', 'full stack', 'frontend', 'backend', 'devops', 'cloud', 'aws', 'azure', 'cyber', 'security', 'data science', 'ai', 'machine learning', 'sap', 'software', 'coding'],
                    reply: `<p><strong>💻 CSE / IT Specialization Tracks:</strong></p>
                    <p>We provide over 50+ cutting-edge IT career tracks including Full Stack Development (MERN/Java/Python), DevOps, AWS &amp; Azure Cloud Computing, Cybersecurity &amp; Ethical Hacking, Data Engineering, and enterprise SAP solutions.</p>`,
                    links: [
                        { text: '🚀 View All CSE / IT Programs', url: 'projects.html' },
                        { text: '📝 Register for IT Track', url: 'register.html' }
                    ],
                    chips: ['Artificial Intelligence', 'Full Stack Development', 'Cyber Security', 'DevOps', 'Offer Plans']
                },
                {
                    triggers: ['ece', 'eee', 'embedded', 'vlsi', 'iot', 'robotics', 'signal', 'circuit', 'microcontroller', 'arduino', 'fpga', 'verilog'],
                    reply: `<p><strong>⚡ ECE / EEE &amp; Embedded Hardware Tracks:</strong></p>
                    <p>Hands-on core hardware engineering programs covering VLSI Design &amp; Verilog, Embedded Systems with STM32 ARM Cortex, IoT Sensors &amp; Cloud Protocols, Signals &amp; Systems, and SCLD Logic Design.</p>`,
                    links: [
                        { text: '⚡ Explore ECE / EEE Programs', url: 'projects.html' },
                        { text: '📝 Register for Hardware Track', url: 'register.html' }
                    ],
                    chips: ['VLSI Design', 'Embedded Systems', 'IoT Track', 'Contact Mentor']
                },
                {
                    triggers: ['mechanical', 'autocad', 'catia', 'car design', 'automobile', 'ev', 'electric vehicle', 'drone', 'uav', 'robotics', 'ic engine'],
                    reply: `<p><strong>⚙️ Mechanical &amp; Automotive Engineering Tracks:</strong></p>
                    <p>Master industry-standard CAD, simulation, and hardware styling with AutoCAD 2D/3D, CATIA Surfacing, EV Powertrain &amp; Battery Thermal Management, Drone Flight Dynamics, and Industrial Robotics.</p>`,
                    links: [
                        { text: '⚙️ Explore Mechanical Tracks', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' }
                    ],
                    chips: ['AutoCAD', 'EV Technology', 'Car Design', 'Robotics']
                },
                {
                    triggers: ['civil', 'construction', 'staad', 'primavera', 'revit', 'bim', 'building', 'structure', 'structural'],
                    reply: `<p><strong>🏗️ Civil Engineering &amp; Infrastructure Tracks:</strong></p>
                    <p>Comprehensive training in Construction Planning &amp; Primavera P6, Structural Analysis with STAAD.Pro, Revit BIM 3D Modeling, and AutoCAD Civil drafting standards.</p>`,
                    links: [
                        { text: '🏗️ Explore Civil Programs', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' }
                    ],
                    chips: ['Revit BIM', 'STAAD.Pro', 'Construction Planning', 'How to Register']
                },
                {
                    triggers: ['chemical', 'petroleum', 'process', 'aspen', 'hysys', 'refining', 'oil', 'gas', 'energy', 'solar', 'renewable'],
                    reply: `<p><strong>🧪 Chemical, Process &amp; Energy Tracks:</strong></p>
                    <p>Master industrial process modeling with Aspen HYSYS, Aspen Plus, Petroleum Refinery Distillation Simulation, Plant Safety &amp; HAZOP, and Green Energy Transition.</p>`,
                    links: [
                        { text: '🧪 Explore Chemical & Energy Programs', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' }
                    ],
                    chips: ['Aspen HYSYS', 'Petroleum Engineering', 'Process Simulation', 'Offer Plans']
                },
                {
                    triggers: ['medical', 'pharma', 'clinical', 'sas', 'cdisc', 'pharmacovigilance', 'safety', 'coding', 'icd', 'biology', 'genetics', 'microbiology', 'biostatistics', 'cdm'],
                    reply: `<p><strong>🧬 Medical, Pharma &amp; Life Sciences Tracks:</strong></p>
                    <p>Fast-track your healthcare career with Clinical SAS (SDTM &amp; ADaM mapping), Pharmacovigilance (ICSR/MedDRA/Argus), Clinical Data Management, Medical Coding (ICD-10/CPT), and Bioinformatics.</p>`,
                    links: [
                        { text: '🧬 Explore Medical & Pharma Programs', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' }
                    ],
                    chips: ['Clinical SAS', 'Pharmacovigilance', 'Medical Coding', 'Clinical Research']
                },
                {
                    triggers: ['management', 'business', 'mba', 'finance', 'marketing', 'hr', 'human resources', 'investment banking', 'analytics', 'power bi', 'acca', 'supply chain', 'stock'],
                    reply: `<p><strong>📈 Management &amp; Business Tracks:</strong></p>
                    <p>Career-transforming business curricula including Investment Banking DCF Valuations, Business Analytics with Power BI &amp; SQL, Corporate Finance, Digital Marketing Growth, SAP FICO, and Product Management.</p>`,
                    links: [
                        { text: '📈 Explore Management Programs', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' }
                    ],
                    chips: ['Investment Banking', 'Business Analytics', 'Digital Marketing', 'SAP FICO']
                },
                {
                    triggers: ['internship', 'project', 'live project', 'training', 'stipend', 'duration', 'certificate', 'experience', 'hands-on'],
                    reply: `<p><strong>💼 Cogniza Project Internship Highlights:</strong></p>
                    <ul>
                        <li><strong>Real-World Capstones:</strong> Work on production-grade projects that solve actual industry challenges.</li>
                        <li><strong>1-on-1 Senior Mentorship:</strong> Direct guidance from professionals at Google, IBM, Capgemini, and leading AI startups.</li>
                        <li><strong>Verified Credentials:</strong> ISO 9001:2015 &amp; MSME recognized government-certified completion letter.</li>
                        <li><strong>Flexible Formats:</strong> Self-paced online, mentor-led hybrid, or offline immersion batches.</li>
                    </ul>`,
                    links: [
                        { text: '🎓 Explore All Programs', url: 'index.html#programs' },
                        { text: '📝 Apply for Internship', url: 'register.html' }
                    ],
                    chips: ['Top Programs', 'Offer Plans', 'How to Register', 'Contact Us']
                },
                {
                    triggers: ['offer', 'offers', 'price', 'pricing', 'fee', 'fees', 'cost', 'discount', 'pack', 'packs', 'tech pro', 'flexi', 'career pro'],
                    reply: `<p><strong>💰 Our Value-Packed Offer Plans:</strong></p>
                    <ul>
                        <li><strong>Tech Pro Pack (&#8377;20,000 for IT / &#8377;15,000 for Non-IT):</strong> Core specialization, live capstone project, and verified certification.</li>
                        <li><strong>Flexi Pro Pack:</strong> Dual-domain flexibility with custom scheduling and extended mentor access.</li>
                        <li><strong>Career Pro Pack:</strong> Complete end-to-end career suite with 3 live capstones, mock interviews, resume portfolio building, and placement assurance support.</li>
                    </ul>`,
                    links: [
                        { text: '🏷️ View Detailed Offer Plans', url: 'index.html#offers' },
                        { text: '📝 Register Now', url: 'register.html' }
                    ],
                    chips: ['Tech Pro Pack', 'Career Pro Pack', 'How to Register', 'Talk to Counselor']
                },
                {
                    triggers: ['register', 'apply', 'enroll', 'join', 'admission', 'sign up', 'how to register'],
                    reply: `<p><strong>📝 Easy 3-Step Registration:</strong></p>
                    <ol>
                        <li>Choose your preferred program domain (CSE/IT, ECE, Mechanical, Civil, Chemical, Medical/Pharma, or Management).</li>
                        <li>Select your batch schedule and enrollment pack.</li>
                        <li>Submit your basic profile details on our secure portal. Our counselor will contact you within 24 hours to confirm your seat!</li>
                    </ol>`,
                    links: [
                        { text: '👉 Open Online Registration Form', url: 'register.html' }
                    ],
                    chips: ['Top Programs', 'Offer Plans', 'Contact Support']
                },
                {
                    triggers: ['contact', 'call', 'phone', 'email', 'address', 'location', 'whatsapp', 'support', 'help', 'counselor', 'advisor'],
                    reply: `<p><strong>📞 Get in Touch with Cogniza:</strong></p>
                    <ul>
                        <li><strong>📱 Phone / WhatsApp:</strong> +91 8884456745</li>
                        <li><strong>✉️ Email:</strong> support@cogniza.in</li>
                        <li><strong>🏢 Location:</strong> Bengaluru, Karnataka, India</li>
                    </ul>
                    <p>Our academic counselors are available Mon–Sat from 9:00 AM to 7:00 PM IST.</p>`,
                    links: [
                        { text: '💬 WhatsApp Us Directly', url: 'https://wa.me/918884456745' },
                        { text: '📬 Open Contact Page', url: 'index.html#contact' }
                    ],
                    chips: ['Top Programs', 'How to Register', 'Visit Website']
                },
                {
                    triggers: ['ambassador', 'campus ambassador', 'college rep', 'student ambassador'],
                    reply: `<p><strong>🌟 Become a Cogniza Campus Ambassador!</strong></p>
                    <p>Represent Cogniza in your college, lead tech workshops, earn performance stipends, and receive leadership recommendations for top MNC hiring drives.</p>`,
                    links: [
                        { text: '🚀 Apply for Campus Ambassador', url: 'ambassador.html' }
                    ],
                    chips: ['Top Programs', 'How to Register', 'Contact Us']
                },
                {
                    triggers: ['blog', 'event', 'events', 'highlights', 'updates', 'happening', 'stories', 'news', 'gallery', 'photos', 'celebration', 'onam', 'award', 'awards', 'rewards', 'reward', 'happy moments', 'recognition'],
                    reply: `<p><strong>📰 Cogniza Highlights &amp; Events Hub:</strong></p>
                    <p>Explore what's happening at Cogniza! Discover our latest team stories, employee recognition, and celebrations:</p>
                    <ul>
                        <li><strong>Welcome to the Cogniza Team:</strong> Meet our new mentors &amp; leadership.</li>
                        <li><strong>Onam Celebration 2026:</strong> Grand floral Pookkalam &amp; festive team harmony.</li>
                        <li><strong>Rewards, Awards &amp; Happy Moments:</strong> Celebrating star mentors, student champions, and team milestones.</li>
                        <li><strong>Visual Photo Gallery:</strong> Moments of workshops, culture, and achievements.</li>
                    </ul>`,
                    links: [
                        { text: '✨ Visit Blog & Events', url: 'blog-events.html' },
                        { text: '🏆 Read Rewards & Awards', url: 'rewards-and-awards.html' },
                        { text: '🌸 Read Onam Story', url: 'onam-celebration-2026.html' }
                    ],
                    chips: ['Top Programs', 'Offer Plans', 'Contact Us']
                },
                {
                    triggers: ['about', 'who are you', 'what is cogniza', 'founder', 'company', 'mission', 'vision'],
                    reply: `<p><strong>✨ About Cogniza:</strong></p>
                    <p>Cogniza is a premier EdTech platform committed to <em>"Beyond Learning. Beyond Limits."</em></p>
                    <p>We bridge the gap between academia and corporate careers by delivering project-centric internships, mentorship from alumni of top tech giants (Google, Meta, Infosys, Wipro, and AI unicorns), and verified credentials.</p>`,
                    links: [
                        { text: '📖 Read About Us', url: 'about.html' },
                        { text: '🎓 Explore Programs', url: 'projects.html' }
                    ],
                    chips: ['Top Programs', 'Internship Benefits', 'Contact Us']
                },
                {
                    triggers: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'good morning', 'good afternoon', 'good evening'],
                    reply: `<p>Hello there! 👋 Welcome to <strong>Cogniza</strong>. I'm your AI career assistant!</p>
                    <p>I can help you explore 100+ programs across 7 domains, learn about our project internships, view offer plans, or help you register. What would you like to explore today?</p>`,
                    chips: ['🎓 Top Programs', '💼 Internship Info', '💰 Offers & Pricing', '📝 How to Register', '📞 Contact Us', '📰 Blog & Events']
                },
                {
                    triggers: ['thank', 'thanks', 'thank you', 'awesome', 'great', 'cool', 'good job', 'bye', 'ok'],
                    reply: `<p>You're very welcome! 😊 Feel free to ask anything else, or click below to start your journey with Cogniza.</p>`,
                    links: [
                        { text: '📝 Register Now', url: 'register.html' },
                        { text: '📞 Talk to a Mentor', url: 'https://wa.me/918884456745' }
                    ],
                    chips: ['Top Programs', 'Offer Plans', 'Contact Us']
                }
            ];

            function getLocalAIResponse(query) {
                const cleanQuery = query.toLowerCase().trim();
                
                for (const item of KNOWLEDGE_BASE) {
                    for (const trigger of item.triggers) {
                        if (cleanQuery.includes(trigger)) {
                            return item;
                        }
                    }
                }

                return {
                    reply: `<p>Thank you for asking about <strong>${escapeHtml(query)}</strong> at Cogniza!</p>
                    <p>Cogniza provides over 100+ industry-recognized internship programs across IT, Non-IT, Engineering, Healthcare, and Management with live capstones and mentor support.</p>
                    <p>Would you like to explore our programs, check our offer plans, or talk with an admissions advisor?</p>`,
                    links: [
                        { text: '🎓 View Programs', url: 'projects.html' },
                        { text: '📝 Register Online', url: 'register.html' },
                        { text: '📞 Contact Support', url: 'index.html#contact' }
                    ],
                    chips: ['🎓 Top Programs', '💰 Offer Plans', '📝 How to Register', '📞 Contact Us']
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
                    chips: ['🎓 Top Programs', '💼 Internship Info', '💰 Offers & Pricing', '📝 How to Register', '📞 Contact Us', '📰 Blog & Events']
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
                    linksWrap.style.marginTop = '8px';
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
                avatarDiv.innerHTML = '<i class="far fa-user"></i>';

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
                const localAnswer = getLocalAIResponse(query);

                setTimeout(() => {
                    if (typingEl && typingEl.parentNode) {
                        typingEl.remove();
                    }
                    renderAIMessage(localAnswer);
                }, 350);
            }

            // Expose globally as safe fallback
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

            // Greeting close
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
                    this.style.height = Math.min(this.scrollHeight - 10, 100) + 'px';
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

            // Prevent clicks inside chat widget from bubbling to document
            aiChatWidget.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            // Close when clicked outside
            document.addEventListener('click', (e) => {
                if (aiChatWidget.classList.contains('active') && !aiChatWidget.contains(e.target) && !aiBtn.contains(e.target)) {
                    aiChatWidget.classList.remove('active');
                }
            });

            // Initialize greeting
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
