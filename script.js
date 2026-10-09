// Interactions can be added here
document.addEventListener("DOMContentLoaded", () => {
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

    const typingElement = document.getElementById("typing-text");

    const courseSelect = document.getElementById("courseSelect");
    if (courseSelect) {
        courses.forEach(course => {
            const option = document.createElement("option");
            option.value = course;
            option.textContent = course;
            courseSelect.appendChild(option);
        });
    }

    if (typingElement) {
        let courseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentCourse = courses[courseIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentCourse.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentCourse.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 80; // Deleting is faster

            if (!isDeleting && charIndex === currentCourse.length) {
                typeSpeed = 2000; // Pause at the end of the word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                courseIndex = (courseIndex + 1) % courses.length;
                typeSpeed = 500; // Pause before typing the next word
            }

            setTimeout(typeEffect, typeSpeed);
        }

        typeEffect();
    }

    // Expanding Cards Logic
    const expandCards = document.querySelectorAll(".expand-card");
    if (expandCards.length > 0) {
        let activeIndex = 0;
        let autoPlayInterval;

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                expandCards.forEach(c => c.classList.remove("active"));
                activeIndex = (activeIndex + 1) % expandCards.length;
                expandCards[activeIndex].classList.add("active");
            }, 3000); // Change every 3 seconds
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
            // For mobile clicks
            card.addEventListener("click", () => {
                stopAutoPlay();
                expandCards.forEach(c => c.classList.remove("active"));
                card.classList.add("active");
                activeIndex = index;
            });
        });
        
        startAutoPlay();
    }

    // Success Stats Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!entry.target.classList.contains('animating')) {
                        entry.target.classList.add('animating');
                        statNumbers.forEach(stat => {
                            const target = +stat.getAttribute('data-target');
                            const duration = 2000; // 2 seconds
                            const increment = target / (duration / 16); // 60fps
                            
                            let current = 0;
                            const updateCounter = () => {
                                if (!entry.target.classList.contains('animating')) return; // Cancel if scrolled away
                                
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
                    // Reset numbers to 0 when scrolled out of view
                    entry.target.classList.remove('animating');
                    statNumbers.forEach(stat => {
                        stat.textContent = '0';
                    });
                }
            });
        }, { threshold: 0.1 });
        
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }
    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll("section[id], main[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';

    // 1. Highlight static pages on load (e.g. about.html, careers.html, blog-events.html)
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
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

    // 2. Scroll Spy for Homepage sections
    if (sections.length > 0 && navLinks.length > 0) {
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    
                    // Only run scroll spy on the homepage
                    if (currentPath === 'index.html' || currentPath === '') {
                        navLinks.forEach(link => {
                            const href = link.getAttribute("href");
                            // If this link points to the intersecting section
                            if (href === "#" + id || href === "index.html#" + id) {
                                // Remove active class from all anchor links first
                                navLinks.forEach(l => {
                                    if (l.getAttribute("href").includes("#")) {
                                        l.classList.remove("active");
                                    }
                                });
                                // Add active class to current section link
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

    // Modal Logic
    const enquiryModal = document.getElementById('enquiryModal');
    const closeEnquiryBtn = document.getElementById('closeModal');

    // Only show the popup on the home page (where typingElement exists)
    if (enquiryModal && closeEnquiryBtn && typingElement) {
        // Show modal after a brief delay
        setTimeout(() => {
            enquiryModal.classList.add('show');
        }, 1000);

        // Close modal
        closeEnquiryBtn.addEventListener('click', () => {
            enquiryModal.classList.remove('show');
        });

        // Close if clicked outside
        enquiryModal.addEventListener('click', (e) => {
            if (e.target === enquiryModal) {
                enquiryModal.classList.remove('show');
            }
        });
    }
    
    // ==========================================
    // COGNIZA AI CHATBOT ENGINE & KNOWLEDGE BASE
    // ==========================================
    const aiBtn = document.getElementById('aiBtn');
    const aiChatWidget = document.getElementById('aiChatWidget');
    const aiCloseBtn = document.getElementById('aiCloseBtn');
    const aiChatInput = document.getElementById('aiChatInput');
    const aiSendBtn = document.getElementById('aiSendBtn');
    const aiChatMessages = document.getElementById('aiChatMessages');
    const aiGreetingBubble = document.getElementById('aiGreetingBubble');
    const closeGreetingBtn = document.getElementById('closeGreetingBtn');

    // Greeting bubble logic
    if (closeGreetingBtn && aiGreetingBubble) {
        closeGreetingBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            aiGreetingBubble.classList.add('hidden');
        });
    }

    // Knowledge Base matching rules
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
            triggers: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'generative ai', 'genai', 'deep learning', 'nlp', 'prompt engineering'],
            reply: `<p><strong>🤖 AI & Machine Learning Programs at Cogniza:</strong></p>
            <p>Master Python, Neural Networks, PyTorch, TensorFlow, Computer Vision, and modern Generative AI with real-world production projects.</p>
            <ul>
                <li>Hands-on model training & evaluation</li>
                <li>Generative AI & Agentic Workflows</li>
                <li>1-on-1 Code reviews by Senior AI Engineers</li>
                <li>Verified certificate with verifiable QR credentials</li>
            </ul>`,
            links: [
                { text: 'View AI & ML Program', url: 'artificial-intelligence-ai-machine-learning-ml.html' },
                { text: 'View Python DSA', url: 'dsa-with-python.html' }
            ],
            chips: ['How to Register', 'Internship Benefits', 'Offer Plans']
        },
        {
            triggers: ['web dev', 'web development', 'full stack', 'frontend', 'backend', 'html', 'css', 'javascript', 'react', 'node'],
            reply: `<p><strong>🌐 Web Development & Full-Stack Mastery:</strong></p>
            <p>Learn to build modern, responsive web apps from scratch with HTML5, CSS3, JavaScript, React, Node.js, Express, and MongoDB/SQL.</p>
            <ul>
                <li>Live frontend UI/UX architecture</li>
                <li>REST APIs & backend database design</li>
                <li>Deploying on Cloud (AWS/Vercel)</li>
                <li>GitHub portfolio with 3+ live projects</li>
            </ul>`,
            links: [
                { text: 'Full Stack Web Dev', url: 'full-stack-web-development.html' },
                { text: 'Web Development', url: 'web-development.html' }
            ],
            chips: ['Top Programs', 'Offer Plans', 'Register Now']
        },
        {
            triggers: ['data science', 'data analytics', 'data analysis', 'sql', 'power bi', 'tableau', 'pandas', 'excel'],
            reply: `<p><strong>📈 Data Science & Analytics Programs:</strong></p>
            <p>Turn raw data into strategic business insights using Python, SQL, Power BI, Tableau, Pandas, and Advanced Statistics.</p>
            <ul>
                <li>Interactive data dashboarding with Power BI</li>
                <li>Predictive analytics & machine learning models</li>
                <li>Real-world industry case studies</li>
            </ul>`,
            links: [
                { text: 'Data Science Program', url: 'data-science.html' },
                { text: 'Data Analytics Program', url: 'data-analytics.html' }
            ],
            chips: ['Business Analytics', 'Offer Plans', 'Register Now']
        },
        {
            triggers: ['clinical', 'sas', 'clinical sas', 'clinical data', 'cdm', 'pharmacovigilance', 'pharma', 'medical coding', 'healthcare', 'biology'],
            reply: `<p><strong>💊 Healthcare & Clinical Data Specializations:</strong></p>
            <p>Cogniza is a recognized leader in life sciences upskilling, preparing pharmacy, biotechnology, and science graduates for top CROs and pharma multinationals.</p>
            <ul>
                <li><strong>Clinical SAS:</strong> SDTM, ADAM datasets & TLF reporting</li>
                <li><strong>Clinical Data Management (CDM):</strong> CRF design & EDC workflows</li>
                <li><strong>Pharmacovigilance:</strong> ICSR processing & Argus safety</li>
                <li><strong>Medical Coding:</strong> ICD-10, CPT & HCPCS guidelines</li>
            </ul>`,
            links: [
                { text: 'Clinical SAS Program', url: 'clinical-sas.html' },
                { text: 'Pharmacovigilance', url: 'pharmacovigilance.html' },
                { text: 'Clinical Data Mgmt', url: 'clinical-data-management.html' }
            ],
            chips: ['How to Register', 'Contact Mentors', 'Offer Plans']
        },
        {
            triggers: ['ui', 'ux', 'uiux', 'ui/ux', 'design', 'graphic', 'figma', 'photoshop', 'illustrator'],
            reply: `<p><strong>🎨 UI/UX & Graphic Design Programs:</strong></p>
            <p>Master human-centered digital product design, wireframing, interactive prototyping in Figma, visual design systems, and brand identity.</p>
            <ul>
                <li>User research, personas & user journeys</li>
                <li>Figma interactive micro-interactions</li>
                <li>Complete Behance & Dribbble portfolio creation</li>
            </ul>`,
            links: [
                { text: 'UI/UX Design Program', url: 'uiux-design.html' },
                { text: 'Graphic Design', url: 'graphic-designing.html' }
            ],
            chips: ['Top Programs', 'How to Register', 'Internship Benefits']
        },
        {
            triggers: ['internship', 'intern', 'training', 'stipend', 'experience', 'benefit', 'benefits', 'project', 'live project', 'mentor', 'certificate', 'lor'],
            reply: `<p><strong>🚀 Cogniza Internship Program Highlights:</strong></p>
            <ul>
                <li><strong>Real-World Capstone Projects:</strong> Work on production-grade briefs simulating actual company environments.</li>
                <li><strong>1-on-1 Industry Mentorship:</strong> Direct guidance from developers and domain leads.</li>
                <li><strong>ISO Certified Credentials:</strong> Verifiable course completion certificate recognized by companies nationwide.</li>
                <li><strong>Letter of Recommendation (LOR):</strong> Awarded to top-performing interns.</li>
                <li><strong>Flexible Scheduling:</strong> Online self-paced and weekend live cohorts suitable for college students.</li>
            </ul>`,
            links: [
                { text: '📝 Apply for Internship', url: 'register.html' },
                { text: '💼 View Projects', url: 'projects.html' }
            ],
            chips: ['Offer Plans', 'How to Register', 'Contact Us']
        },
        {
            triggers: ['price', 'pricing', 'fee', 'fees', 'cost', 'offer', 'offers', 'discount', 'pack', 'tech pro', 'career pro', 'plan', 'plans', 'offline', 'offline program', 'offline pricing'],
            reply: `<p><strong>💎 Special Offer Plans &amp; Offline Programs:</strong></p>
            <p>Cogniza provides curated upskilling packs and intensive offline programs:</p>
            <ul>
                <li><strong>Cogniza TechPro Offline (IT):</strong> &#8377;20,000 &mdash; In-person training, 4 sessions/week, mentor support, offline internship &amp; placement assistance.</li>
                <li><strong>Cogniza CareerPro Offline (Non-IT):</strong> &#8377;15,000 &mdash; Intensive offline corporate training, live projects &amp; 100% placement assistance.</li>
                <li><strong>Tech Pro Pack:</strong> Technical bundle + cloud lab credits + verified dual certificates.</li>
                <li><strong>Flexi Pro Pack:</strong> Flexible cohort-based track with 1:1 mentorship.</li>
            </ul>`,
            links: [
                { text: '📍 Explore Offline Programs', url: 'offline-programs.html' },
                { text: '🏷️ View Offer Plans', url: 'index.html#offers' },
                { text: 'Tech Pro Pack', url: 'tech-pro-pack.html' }
            ],
            chips: ['Offline Programs', 'How to Register', 'Top Programs', 'Contact Us']
        },
        {
            triggers: ['register', 'apply', 'admission', 'enroll', 'join', 'how to join', 'how to register', 'sign up', 'form', 'link'],
            reply: `<p><strong>📝 Easy 3-Step Registration:</strong></p>
            <ol>
                <li>Click the <strong>Register</strong> button or open our registration portal.</li>
                <li>Choose your desired domain track (e.g. AI, Web Dev, Clinical SAS, UI/UX).</li>
                <li>Fill in your student details and our admissions mentor will connect with your onboarding pass and schedule!</li>
            </ol>`,
            links: [
                { text: '👉 Open Registration Form', url: 'register.html' }
            ],
            chips: ['Top Programs', 'Offer Plans', 'Contact Support']
        },
        {
            triggers: ['contact', 'phone', 'call', 'email', 'address', 'location', 'where are you', 'bangalore', 'office', 'number', 'whatsapp', 'support', 'help'],
            reply: `<p><strong>📞 Contact & Office Information:</strong></p>
            <ul>
                <li><strong>📱 Phone / WhatsApp:</strong> +91 8884456745</li>
                <li><strong>✉️ Email:</strong> operations@cogniza.in</li>
                <li><strong>📍 Address:</strong> 2734, 2nd Floor, 16th Cross, 27th Main Road, Near NIFT College, HSR Layout, Sector 1, Bangalore - 560102.</li>
                <li><strong>⏰ Support Hours:</strong> Monday – Saturday (9:30 AM – 6:30 PM IST)</li>
            </ul>`,
            links: [
                { text: '💬 WhatsApp Us', url: 'https://wa.me/918884456745' },
                { text: '📩 Send Enquiry', url: 'index.html#contact' }
            ],
            chips: ['How to Register', 'Top Programs', 'Highlights & Events']
        },
        {
            triggers: ['ambassador', 'campus ambassador', 'college lead', 'representative'],
            reply: `<p><strong>🌟 Become a Cogniza Campus Ambassador:</strong></p>
            <p>Lead the tech revolution in your university! As an ambassador, you'll organize workshops, represent Cogniza, and earn attractive stipends and leadership credentials.</p>
            <ul>
                <li>Monthly performance stipends & rewards</li>
                <li>Direct leadership certificate & CEO commendation</li>
                <li>Free access to premium Cogniza upskilling tracks</li>
            </ul>`,
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
                <li><strong>Moments That Matter:</strong> Visual photo gallery of celebrations, workshops, and team culture.</li>
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
            <p>We bridge the gap between academia and corporate careers by delivering project-centric internships, mentorship from top tech giants (Google, Meta, Infosys, Wipro alumni), and verified credentials.</p>`,
            links: [
                { text: '📖 Read About Us', url: 'about.html' },
                { text: '🎓 Explore Programs', url: 'index.html#programs' }
            ],
            chips: ['Top Programs', 'Internship Benefits', 'Contact Us']
        },
        {
            triggers: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'good morning', 'good afternoon', 'good evening'],
            reply: `<p>Hello there! 👋 Welcome to <strong>Cogniza</strong>. I'm your AI career assistant!</p>
            <p>I can help you explore 50+ programs, learn about our project internships, view offer plans, or help you register. What would you like to explore today?</p>`,
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
        
        // Exact / keyword match
        for (const item of KNOWLEDGE_BASE) {
            for (const trigger of item.triggers) {
                if (cleanQuery.includes(trigger)) {
                    return item;
                }
            }
        }

        // Generic intelligent fallback
        return {
            reply: `<p>Thank you for asking about <strong>${escapeHtml(query)}</strong> at Cogniza!</p>
            <p>Cogniza provides over 50+ industry-recognized internship programs across IT, Non-IT, Management, and Healthcare with live capstone projects and mentor support.</p>
            <p>Would you like to explore our programs, check our offer plans, or talk with an admissions advisor?</p>`,
            links: [
                { text: '🎓 View Programs', url: 'index.html#programs' },
                { text: '📝 Register Online', url: 'register.html' },
                { text: '📞 Contact Support', url: 'index.html#contact' }
            ],
            chips: ['🎓 Top Programs', '💰 Offer Plans', '📝 How to Register', '📞 Contact Us']
        };
    }

    function escapeHtml(str) {
        return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
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
        const msgDiv = document.createElement('div');
        msgDiv.className = 'ai-message ai';

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'msg-avatar';
        avatarDiv.innerHTML = '<i class="fas fa-comment-dots"></i>';

        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'msg-bubble';
        bubbleDiv.innerHTML = responseObj.reply;

        // Render Action Links if present
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

        // Render Quick Chips if present
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

    async function sendUserQuery(text) {
        if (!text || !text.trim()) return;
        const query = text.trim();

        // Render user message
        renderUserMessage(query);

        if (aiChatInput) {
            aiChatInput.value = '';
            aiChatInput.style.height = '20px';
        }

        // Show typing indicator
        const typingEl = showTypingIndicator();

        // Check local intelligent knowledge engine
        const localAnswer = getLocalAIResponse(query);

        // Small realistic response delay (450ms) for smooth UX
        setTimeout(() => {
            if (typingEl && typingEl.parentNode) {
                typingEl.remove();
            }
            renderAIMessage(localAnswer);
        }, 450);
    }

    // Toggle Chat Widget
    if (aiBtn && aiChatWidget) {
        aiBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (aiGreetingBubble) aiGreetingBubble.classList.add('hidden');
            const isActive = aiChatWidget.classList.toggle('active');
            if (isActive) {
                if (!aiChatMessages.children.length) {
                    initChatGreeting();
                }
                if (aiChatInput) aiChatInput.focus();
            }
        });
    }

    if (aiCloseBtn && aiChatWidget) {
        aiCloseBtn.addEventListener('click', () => {
            aiChatWidget.classList.remove('active');
        });
    }

    // Auto-resize textarea & Enter key support
    if (aiChatInput) {
        aiChatInput.addEventListener('input', function() {
            this.style.height = '20px';
            this.style.height = Math.min(this.scrollHeight - 10, 100) + 'px';
        });

        aiChatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendUserQuery(aiChatInput.value);
            }
        });
    }

    if (aiSendBtn) {
        aiSendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sendUserQuery(aiChatInput.value);
        });
    }

    // Initialize greeting on load
    initChatGreeting();
    
    // Testimonials Interactive Carousel Logic
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

            // Bounds check
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

            // Update range text
            if (testiRangeText) {
                testiRangeText.textContent = `${startIndex + 1} - ${endIndex}`;
            }

            // Update dots
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

        // Event listeners
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
            
            // Touch Swipe Support for mobile
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
                        nextPage(); // swipe left -> next
                    } else {
                        prevPage(); // swipe right -> prev
                    }
                    resetTimer();
                }
            }, { passive: true });
        }

        // Window resize debounce
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const totalPages = Math.ceil(testiCards.length / getCardsPerPage());
                renderDots(totalPages);
                showPage(currentPage);
            }, 200);
        });

        // Initialize
        const initialPages = Math.ceil(testiCards.length / getCardsPerPage());
        renderDots(initialPages);
        showPage(0);
        startTimer();
    }
    // Mobile Menu Toggle Logic
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
});
