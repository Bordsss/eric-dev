document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved user preference (default to light if none found)
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.checked = false;
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
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
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
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
    
    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
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

    // Load More Projects Functionality
    const projects = [
        {
            title: "Kiddie Recom",
            description: "A locally hosted web app that let the children read story on it and at the same time can interact with the story it self. they can click the word then the website plays the pre recorded voice on how to pronouns it and view its meaning at the same time.",
            image: "./images/kiddie.png",
            technologies: ["HTML", "JavaScript", "Bootstrap", "Css"],
            // liveLink: "#",
            // codeLink: "#"
        },
        {
            title: "USeP Vehicle Scheduling System",
            description: "An web base Vehicle scheduling and dispatch system for University of Southeastern Philippines. where the users can request a vehicle to use  during an outside campus event. and schedule ahead of so that the other users can view the schedule of the vehicle using the calendar display.",
            image: "./images/uvds.png",
            technologies: ["JavaScript", "HTML", "PHP", "CSS"],
            // liveLink: "#",
            // codeLink: "#"
        },
        {
            title: "M-Access",
            description: " an IOT controller Application. this app is develop to prevent motorcycle from being stolen. it controls the ignition and power of the motorcycle ON/OFF using the finger print sensor of the phone through the app itself. With the help of the help of a micro controller that is installed on the motorcycle.",
            image: "./images/m-access.png",
            technologies: ["JAVA", "Firebase", "ARDUINO"],
            // liveLink: "#",
            // codeLink: "#"
        },
         {
            title: "Drivehub",
            description: "Rent a car Booking system",
            image: "./images/DriveHub.png",
            technologies: ["JavaScript", "HTML", "PHP", "MongoDB", "CSS"],
            // liveLink: "#",
            // codeLink: "#"
        },
        {
            title: "AVRS",
            description: "Audio Visual Reservation Scheduling ",
            image: "./images/avrs.jpg",
            technologies: ["HTML5", "CSS3", "JavaScript", "CSS"],
            // liveLink: "#",
            // codeLink: "#"
        },
        // {
        //     title: "Recipe Finder",
        //     description: "Search and save your favorite recipes with nutritional information",
        //     image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        //     technologies: ["JavaScript", "Edamam API", "Local Storage"],
        //     liveLink: "#",
        //     codeLink: "#"
        // }
    ];

    let visibleProjects = 5; // Initial number of projects to show
    const projectsGrid = document.querySelector('.projects-grid');
    const loadMoreBtn = document.getElementById('loadMore');

    function renderProjects(limit) {
        projectsGrid.innerHTML = ''; // Clear existing projects
        
        projects.slice(0, limit).forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-used">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        // <div class="project-links">
        //                 <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        //                 <a href="${project.codeLink}" target="_blank"><i class="fab fa-github"></i> Code</a>
        //             </div>
        // Hide "Load More" button if all projects are visible
        if (limit >= projects.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    // Load More button event listener
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            visibleProjects += 3; // Show 3 more projects
            renderProjects(visibleProjects);
            
            // Smooth scroll to bottom of new projects
            setTimeout(() => {
                projectsGrid.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'end' 
                });
            }, 100);
        });
    }

    // Initial render
    renderProjects(visibleProjects);
});