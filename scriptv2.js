<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the management page
    const isManagementPage = window.location.pathname.includes('manage.html');

    // Initialize default data if not present in localStorage
    if (!localStorage.getItem('portfolioData')) {
        const defaultData = {
            hero: {
                name: 'Eric John',
                subtitle: 'IT Specialist & Web Developer',
                description: 'Building digital solutions that solve real-world problems'
            },
            about: {
                bio1: "I'm an IT professional with 5+ years of experience specializing in web development and system administration. My passion lies in creating efficient, scalable web applications while ensuring robust infrastructure support.",
                bio2: "I hold certifications in AWS Solutions Architecture and CompTIA Security+, and I'm constantly expanding my skill set through continuous learning and hands-on projects.",
                bio3: "When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring new technologies in the ever-evolving IT landscape.",
                resumeLink: '#'
            },
            skills: {
                frontend: [
                    { name: 'HTML5', icon: 'fab fa-html5' },
                    { name: 'CSS3', icon: 'fab fa-css3-alt' },
                    { name: 'JavaScript', icon: 'fab fa-js' },
                    { name: 'React', icon: 'fab fa-react' },
                    { name: 'Vue.js', icon: 'fab fa-vuejs' }
                ],
                backend: [
                    { name: 'Node.js', icon: 'fab fa-node-js' },
                    { name: 'Python', icon: 'fab fa-python' },
                    { name: 'SQL', icon: 'fas fa-database' },
                    { name: 'REST APIs', icon: 'fas fa-server' }
                ],
                
                other: [
                    { name: 'Git', icon: 'fab fa-git-alt' },
                    { name: 'Networking', icon: 'fas fa-network-wired' },
                    { name: 'Cybersecurity', icon: 'fas fa-shield-alt' },
                    { name: 'AWS', icon: 'fas fa-cloud' }
                ]
            },
            projects: [
                {
                    title: "E-commerce Platform",
                    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    tech: ["React", "Node.js", "MongoDB"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Business Analytics Dashboard",
                    description: "Interactive data visualization dashboard for business metrics",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
                    tech: ["JavaScript", "D3.js", "Python"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Task Management System",
                    description: "Collaborative task management application with real-time updates",
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Portfolio Website",
                    description: "Responsive portfolio website built with HTML, CSS and JavaScript",
                    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
                    tech: ["HTML5", "CSS3", "JavaScript"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Weather Application",
                    description: "Real-time weather forecasting app with location detection",
                    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
                    tech: ["React", "API Integration", "Geolocation"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Recipe Finder",
                    description: "Search and save your favorite recipes with nutritional information",
                    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
                    tech: ["JavaScript", "Edamam API", "Local Storage"],
                    links: { github: "#", live: "#" }
                }
            ],
            contact: {
                email: 'ericjohnbatino0821@gmail.com',
                phone: '(+63) 9565795382',
                location: 'Tagum City, PH',
                github: '#',
                linkedin: '#',
                twitter: '#',
                codepen: '#'
            }
        };
        localStorage.setItem('portfolioData', JSON.stringify(defaultData));
    }

    // Dark Mode Toggle
    const toggleCheckbox = document.getElementById('darkModeToggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleCheckbox.checked = true;
    } else {
        body.classList.remove('dark-mode');
        toggleCheckbox.checked = false;
    }

    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    if (!isManagementPage) {
        // Portfolio Page Functionality
        const portfolioData = JSON.parse(localStorage.getItem('portfolioData'));

        // Update Hero Section
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.querySelector('h1').innerHTML = `Hi, I'm <span>${portfolioData.hero.name}</span>`;
            heroContent.querySelector('h2').textContent = portfolioData.hero.subtitle;
            heroContent.querySelector('p').textContent = portfolioData.hero.description;
        }

        // Update About Section
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            aboutContent.querySelectorAll('p')[0].textContent = portfolioData.about.bio1;
            aboutContent.querySelectorAll('p')[1].textContent = portfolioData.about.bio2;
            aboutContent.querySelectorAll('p')[2].textContent = portfolioData.about.bio3;
            aboutContent.querySelector('.btn').href = portfolioData.about.resumeLink;
        }

        // Update Skills Section
        const skillsContainer = document.querySelector('.skills-container');
        if (skillsContainer) {
            const categories = ['frontend', 'backend', 'other'];
            categories.forEach(category => {
                const skillItems = document.querySelector(`#${category}Skills .skill-items`) || document.createElement('div');
                skillItems.classList.add('skill-items');
                skillItems.innerHTML = portfolioData.skills[category].map(skill => `
                    <div class="skill-item">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('');
                const categoryDiv = skillsContainer.querySelector(`.skill-category:nth-child(${categories.indexOf(category) + 1}) .skill-items`);
                if (categoryDiv) categoryDiv.innerHTML = skillItems.innerHTML;
            });
        }

        // Update Projects Section
        const projectsGrid = document.querySelector('.projects-grid');
        let visibleProjects = 3;

        function loadProjects() {
            projectsGrid.innerHTML = '';
            portfolioData.projects.slice(0, visibleProjects).forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tech-used">
                            ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.links.github}" target="_blank"><i class="fab fa-github"></i> Code</a>
                            <a href="${project.links.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(projectCard);
            });
        }

        if (projectsGrid) {
            loadProjects();
            const loadMoreBtn = document.getElementById('loadMore');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', () => {
                    visibleProjects += 3;
                    loadProjects();
                    if (visibleProjects >= portfolioData.projects.length) {
                        loadMoreBtn.style.display = 'none';
                    }
                    setTimeout(() => {
                        projectsGrid.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }, 100);
                });
            }
        }

        // Update Contact Section
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            contactInfo.querySelectorAll('.info-item span')[0].textContent = portfolioData.contact.email;
            contactInfo.querySelectorAll('.info-item span')[1].textContent = portfolioData.contact.phone;
            contactInfo.querySelectorAll('.info-item span')[2].textContent = portfolioData.contact.location;
            const socialLinks = contactInfo.querySelectorAll('.social-links a');
            socialLinks[0].href = portfolioData.contact.github;
            socialLinks[1].href = portfolioData.contact.linkedin;
            socialLinks[2].href = portfolioData.contact.twitter;
            socialLinks[3].href = portfolioData.contact.codepen;
        }

        // Contact Form Submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData);
                console.log('Form submitted:', data);
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });
        }
    } else {
        // Management Page Functionality
        const portfolioData = JSON.parse(localStorage.getItem('portfolioData'));

        // Populate Hero Form
        const heroForm = document.getElementById('heroForm');
        if (heroForm) {
            document.getElementById('heroName').value = portfolioData.hero.name;
            document.getElementById('heroSubtitle').value = portfolioData.hero.subtitle;
            document.getElementById('heroDescription').value = portfolioData.hero.description;
            heroForm.addEventListener('submit', (e) => {
                e.preventDefault();
                portfolioData.hero = {
                    name: document.getElementById('heroName').value,
                    subtitle: document.getElementById('heroSubtitle').value,
                    description: document.getElementById('heroDescription').value
                };
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                alert('Hero section updated!');
            });
        }

        // Populate About Form
        const aboutForm = document.getElementById('aboutForm');
        if (aboutForm) {
            document.getElementById('aboutBio1').value = portfolioData.about.bio1;
            document.getElementById('aboutBio2').value = portfolioData.about.bio2;
            document.getElementById('aboutBio3').value = portfolioData.about.bio3;
            document.getElementById('resumeLink').value = portfolioData.about.resumeLink;
            aboutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                portfolioData.about = {
                    bio1: document.getElementById('aboutBio1').value,
                    bio2: document.getElementById('aboutBio2').value,
                    bio3: document.getElementById('aboutBio3').value,
                    resumeLink: document.getElementById('resumeLink').value
                };
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                alert('About section updated!');
            });
        }

        // Populate Skills Form
        const skillsForm = document.getElementById('skillsForm');
        if (skillsForm) {
            function populateSkills(category) {
                const skillList = document.getElementById(`${category}Skills`);
                skillList.innerHTML = portfolioData.skills[category].map((skill, index) => `
                    <div class="skill-entry">
                        <span>${skill.name} (${skill.icon})</span>
                        <button type="button" class="btn btn-outline btn-small" onclick="removeSkill('${category}', ${index})">Remove</button>
                    </div>
                `).join('');
            }

            ['frontend', 'backend', 'other'].forEach(category => populateSkills(category));

            window.addSkill = function(category) {
                const input = document.getElementById(`new${category.charAt(0).toUpperCase() + category.slice(1)}Skill`);
                const skillName = input.value.trim();
                if (skillName) {
                    portfolioData.skills[category].push({ name: skillName, icon: 'fas fa-code' });
                    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                    populateSkills(category);
                    input.value = '';
                }
            };

            window.removeSkill = function(category, index) {
                portfolioData.skills[category].splice(index, 1);
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                populateSkills(category);
            };

            skillsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                alert('Skills updated!');
            });
        }

        // Populate Projects Form
        const projectForm = document.getElementById('projectForm');
        const projectList = document.getElementById('projectList');
        if (projectForm && projectList) {
            function populateProjects() {
                projectList.innerHTML = portfolioData.projects.map((project, index) => `
                    <div class="project-entry">
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                        <button type="button" class="btn btn-outline btn-small" onclick="editProject(${index})">Edit</button>
                        <button type="button" class="btn btn-outline btn-small" onclick="removeProject(${index})">Remove</button>
                    </div>
                `).join('');
            }

            populateProjects();

            projectForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const project = {
                    title: document.getElementById('projectTitle').value,
                    description: document.getElementById('projectDescription').value,
                    image: document.getElementById('projectImage').value || 'https://via.placeholder.com/300',
                    tech: document.getElementById('projectTech').value.split(',').map(t => t.trim()),
                    links: {
                        github: document.getElementById('projectGithub').value,
                        live: document.getElementById('projectLive').value
                    }
                };
                portfolioData.projects.push(project);
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                populateProjects();
                projectForm.reset();
                alert('Project added!');
            });

            window.editProject = function(index) {
                const project = portfolioData.projects[index];
                document.getElementById('projectTitle').value = project.title;
                document.getElementById('projectDescription').value = project.description;
                document.getElementById('projectImage').value = project.image;
                document.getElementById('projectTech').value = project.tech.join(', ');
                document.getElementById('projectGithub').value = project.links.github;
                document.getElementById('projectLive').value = project.links.live;
                portfolioData.projects.splice(index, 1);
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                populateProjects();
            };

            window.removeProject = function(index) {
                portfolioData.projects.splice(index, 1);
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                populateProjects();
            };
        }

        // Populate Contact Form
        const contactInfoForm = document.getElementById('contactInfoForm');
        if (contactInfoForm) {
            document.getElementById('contactEmail').value = portfolioData.contact.email;
            document.getElementById('contactPhone').value = portfolioData.contact.phone;
            document.getElementById('contactLocation').value = portfolioData.contact.location;
            document.getElementById('contactGithub').value = portfolioData.contact.github;
            document.getElementById('contactLinkedin').value = portfolioData.contact.linkedin;
            document.getElementById('contactTwitter').value = portfolioData.contact.twitter;
            document.getElementById('contactCodepen').value = portfolioData.contact.codepen;
            contactInfoForm.addEventListener('submit', (e) => {
                e.preventDefault();
                portfolioData.contact = {
                    email: document.getElementById('contactEmail').value,
                    phone: document.getElementById('contactPhone').value,
                    location: document.getElementById('contactLocation').value,
                    github: document.getElementById('contactGithub').value,
                    linkedin: document.getElementById('contactLinkedin').value,
                    twitter: document.getElementById('contactTwitter').value,
                    codepen: document.getElementById('contactCodepen').value
                };
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                alert('Contact info updated!');
            });
        }
    }
=======
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the management page
    const isManagementPage = window.location.pathname.includes('manage.html');

    // Initialize default data if not present in localStorage
    if (!localStorage.getItem('portfolioData')) {
        const defaultData = {
            hero: {
                name: 'Eric John',
                subtitle: 'IT Specialist & Web Developer',
                description: 'Building digital solutions that solve real-world problems'
            },
            about: {
                bio1: "I'm an IT professional with 5+ years of experience specializing in web development and system administration. My passion lies in creating efficient, scalable web applications while ensuring robust infrastructure support.",
                bio2: "I hold certifications in AWS Solutions Architecture and CompTIA Security+, and I'm constantly expanding my skill set through continuous learning and hands-on projects.",
                bio3: "When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring new technologies in the ever-evolving IT landscape.",
                resumeLink: '#'
            },
            skills: {
                frontend: [
                    { name: 'HTML5', icon: 'fab fa-html5' },
                    { name: 'CSS3', icon: 'fab fa-css3-alt' },
                    { name: 'JavaScript', icon: 'fab fa-js' },
                    { name: 'React', icon: 'fab fa-react' },
                    { name: 'Vue.js', icon: 'fab fa-vuejs' }
                ],
                backend: [
                    { name: 'Node.js', icon: 'fab fa-node-js' },
                    { name: 'Python', icon: 'fab fa-python' },
                    { name: 'SQL', icon: 'fas fa-database' },
                    { name: 'REST APIs', icon: 'fas fa-server' }
                ],
                
                other: [
                    { name: 'Git', icon: 'fab fa-git-alt' },
                    { name: 'Networking', icon: 'fas fa-network-wired' },
                    { name: 'Cybersecurity', icon: 'fas fa-shield-alt' },
                    { name: 'AWS', icon: 'fas fa-cloud' }
                ]
            },
            projects: [
                {
                    title: "E-commerce Platform",
                    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    tech: ["React", "Node.js", "MongoDB"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Business Analytics Dashboard",
                    description: "Interactive data visualization dashboard for business metrics",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
                    tech: ["JavaScript", "D3.js", "Python"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Task Management System",
                    description: "Collaborative task management application with real-time updates",
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Portfolio Website",
                    description: "Responsive portfolio website built with HTML, CSS and JavaScript",
                    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
                    tech: ["HTML5", "CSS3", "JavaScript"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Weather Application",
                    description: "Real-time weather forecasting app with location detection",
                    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
                    tech: ["React", "API Integration", "Geolocation"],
                    links: { github: "#", live: "#" }
                },
                {
                    title: "Recipe Finder",
                    description: "Search and save your favorite recipes with nutritional information",
                    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
                    tech: ["JavaScript", "Edamam API", "Local Storage"],
                    links: { github: "#", live: "#" }
                }
            ],
            contact: {
                email: 'ericjohnbatino0821@gmail.com',
                phone: '(+63) 9565795382',
                location: 'Tagum City, PH',
                github: '#',
                linkedin: '#',
                twitter: '#',
                codepen: '#'
            }
        };
        localStorage.setItem('portfolioData', JSON.stringify(defaultData));
    }

    // Dark Mode Toggle
    const toggleCheckbox = document.getElementById('darkModeToggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleCheckbox.checked = true;
    } else {
        body.classList.remove('dark-mode');
        toggleCheckbox.checked = false;
    }

    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    if (!isManagementPage) {
        // Portfolio Page Functionality
        const portfolioData = JSON.parse(localStorage.getItem('portfolioData'));

        // Update Hero Section
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.querySelector('h1').innerHTML = `Hi, I'm <span>${portfolioData.hero.name}</span>`;
            heroContent.querySelector('h2').textContent = portfolioData.hero.subtitle;
            heroContent.querySelector('p').textContent = portfolioData.hero.description;
        }

        // Update About Section
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            aboutContent.querySelectorAll('p')[0].textContent = portfolioData.about.bio1;
            aboutContent.querySelectorAll('p')[1].textContent = portfolioData.about.bio2;
            aboutContent.querySelectorAll('p')[2].textContent = portfolioData.about.bio3;
            aboutContent.querySelector('.btn').href = portfolioData.about.resumeLink;
        }

        // Update Skills Section
        const skillsContainer = document.querySelector('.skills-container');
        if (skillsContainer) {
            const categories = ['frontend', 'backend', 'other'];
            categories.forEach(category => {
                const skillItems = document.querySelector(`#${category}Skills .skill-items`) || document.createElement('div');
                skillItems.classList.add('skill-items');
                skillItems.innerHTML = portfolioData.skills[category].map(skill => `
                    <div class="skill-item">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('');
                const categoryDiv = skillsContainer.querySelector(`.skill-category:nth-child(${categories.indexOf(category) + 1}) .skill-items`);
                if (categoryDiv) categoryDiv.innerHTML = skillItems.innerHTML;
            });
        }

        // Update Projects Section
        const projectsGrid = document.querySelector('.projects-grid');
        let visibleProjects = 3;

        function loadProjects() {
            projectsGrid.innerHTML = '';
            portfolioData.projects.slice(0, visibleProjects).forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tech-used">
                            ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.links.github}" target="_blank"><i class="fab fa-github"></i> Code</a>
                            <a href="${project.links.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(projectCard);
            });
        }

        if (projectsGrid) {
            loadProjects();
            const loadMoreBtn = document.getElementById('loadMore');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', () => {
                    visibleProjects += 3;
                    loadProjects();
                    if (visibleProjects >= portfolioData.projects.length) {
                        loadMoreBtn.style.display = 'none';
                    }
                    setTimeout(() => {
                        projectsGrid.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }, 100);
                });
            }
        }

        // Update Contact Section
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            contactInfo.querySelectorAll('.info-item span')[0].textContent = portfolioData.contact.email;
            contactInfo.querySelectorAll('.info-item span')[1].textContent = portfolioData.contact.phone;
            contactInfo.querySelectorAll('.info-item span')[2].textContent = portfolioData.contact.location;
            const socialLinks = contactInfo.querySelectorAll('.social-links a');
            socialLinks[0].href = portfolioData.contact.github;
            socialLinks[1].href = portfolioData.contact.linkedin;
            socialLinks[2].href = portfolioData.contact.twitter;
            socialLinks[3].href = portfolioData.contact.codepen;
        }

        // Contact Form Submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData);
                console.log('Form submitted:', data);
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });
        }
    } else {
        // Management Page Functionality
        const portfolioData = JSON.parse(localStorage.getItem('portfolioData'));

        // Populate Hero Form
        const heroForm = document.getElementById('heroForm');
        if (heroForm) {
            document.getElementById('heroName').value = portfolioData.hero.name;
            document.getElementById('heroSubtitle').value = portfolioData.hero.subtitle;
            document.getElementById('heroDescription').value = portfolioData.hero.description;
            heroForm.addEventListener('submit', (e) => {
                e.preventDefault();
                portfolioData.hero = {
                    name: document.getElementById('heroName').value,
                    subtitle: document.getElementById('heroSubtitle').value,
                    description: document.getElementById('heroDescription').value
                };
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                alert('Hero section updated!');
            });
        }

        // Populate About Form
        const aboutForm = document.getElementById('aboutForm');
        if (aboutForm) {
            document.getElementById('aboutBio1').value = portfolioData.about.bio1;
            document.getElementById('aboutBio2').value = portfolioData.about.bio2;
            document.getElementById('aboutBio3').value = portfolioData.about.bio3;
            document.getElementById('resumeLink').value = portfolioData.about.resumeLink;
            aboutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                portfolioData.about = {
                    bio1: document.getElementById('aboutBio1').value,
                    bio2: document.getElementById('aboutBio2').value,
                    bio3: document.getElementById('aboutBio3').value,
                    resumeLink: document.getElementById('resumeLink').value
                };
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                alert('About section updated!');
            });
        }

        // Populate Skills Form
        const skillsForm = document.getElementById('skillsForm');
        if (skillsForm) {
            function populateSkills(category) {
                const skillList = document.getElementById(`${category}Skills`);
                skillList.innerHTML = portfolioData.skills[category].map((skill, index) => `
                    <div class="skill-entry">
                        <span>${skill.name} (${skill.icon})</span>
                        <button type="button" class="btn btn-outline btn-small" onclick="removeSkill('${category}', ${index})">Remove</button>
                    </div>
                `).join('');
            }

            ['frontend', 'backend', 'other'].forEach(category => populateSkills(category));

            window.addSkill = function(category) {
                const input = document.getElementById(`new${category.charAt(0).toUpperCase() + category.slice(1)}Skill`);
                const skillName = input.value.trim();
                if (skillName) {
                    portfolioData.skills[category].push({ name: skillName, icon: 'fas fa-code' });
                    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                    populateSkills(category);
                    input.value = '';
                }
            };

            window.removeSkill = function(category, index) {
                portfolioData.skills[category].splice(index, 1);
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                populateSkills(category);
            };

            skillsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                alert('Skills updated!');
            });
        }

        // Populate Projects Form
        const projectForm = document.getElementById('projectForm');
        const projectList = document.getElementById('projectList');
        if (projectForm && projectList) {
            function populateProjects() {
                projectList.innerHTML = portfolioData.projects.map((project, index) => `
                    <div class="project-entry">
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                        <button type="button" class="btn btn-outline btn-small" onclick="editProject(${index})">Edit</button>
                        <button type="button" class="btn btn-outline btn-small" onclick="removeProject(${index})">Remove</button>
                    </div>
                `).join('');
            }

            populateProjects();

            projectForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const project = {
                    title: document.getElementById('projectTitle').value,
                    description: document.getElementById('projectDescription').value,
                    image: document.getElementById('projectImage').value || 'https://via.placeholder.com/300',
                    tech: document.getElementById('projectTech').value.split(',').map(t => t.trim()),
                    links: {
                        github: document.getElementById('projectGithub').value,
                        live: document.getElementById('projectLive').value
                    }
                };
                portfolioData.projects.push(project);
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                populateProjects();
                projectForm.reset();
                alert('Project added!');
            });

            window.editProject = function(index) {
                const project = portfolioData.projects[index];
                document.getElementById('projectTitle').value = project.title;
                document.getElementById('projectDescription').value = project.description;
                document.getElementById('projectImage').value = project.image;
                document.getElementById('projectTech').value = project.tech.join(', ');
                document.getElementById('projectGithub').value = project.links.github;
                document.getElementById('projectLive').value = project.links.live;
                portfolioData.projects.splice(index, 1);
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                populateProjects();
            };

            window.removeProject = function(index) {
                portfolioData.projects.splice(index, 1);
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                populateProjects();
            };
        }

        // Populate Contact Form
        const contactInfoForm = document.getElementById('contactInfoForm');
        if (contactInfoForm) {
            document.getElementById('contactEmail').value = portfolioData.contact.email;
            document.getElementById('contactPhone').value = portfolioData.contact.phone;
            document.getElementById('contactLocation').value = portfolioData.contact.location;
            document.getElementById('contactGithub').value = portfolioData.contact.github;
            document.getElementById('contactLinkedin').value = portfolioData.contact.linkedin;
            document.getElementById('contactTwitter').value = portfolioData.contact.twitter;
            document.getElementById('contactCodepen').value = portfolioData.contact.codepen;
            contactInfoForm.addEventListener('submit', (e) => {
                e.preventDefault();
                portfolioData.contact = {
                    email: document.getElementById('contactEmail').value,
                    phone: document.getElementById('contactPhone').value,
                    location: document.getElementById('contactLocation').value,
                    github: document.getElementById('contactGithub').value,
                    linkedin: document.getElementById('contactLinkedin').value,
                    twitter: document.getElementById('contactTwitter').value,
                    codepen: document.getElementById('contactCodepen').value
                };
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                alert('Contact info updated!');
            });
        }
    }
>>>>>>> bae7d29bfd2bc22381f8221381e34fff454a04d5
});