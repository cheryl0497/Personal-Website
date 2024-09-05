// experience section
const experiences = [
    {
        position: 'Senior Analyst, Full Stack Developer',
        company_name: 'TIAA',
        period: '02/2024 – Current',
        roles: [
            `Leading and participating in the design, development and
            implementation of complex software solutions.`,
            `Mentoring junior team members and conducting code reviews
            to ensure adherence to coding standards.`,
            `Collaborated with business analysts to understand their requirements, 
            propose user-friendly solutions, and design APIs.`,
            `•	Developed code to migrate documents and note templates to a new shared drive, 
            ensuring smooth server decommissioning and data transfer.`
        ]
    },
    {
        position: 'Analyst, Full Stack Developer',
        company_name: 'TIAA',
        period: '05/2022 – 02/2024',
        roles: [
            `Designed, developed and integrated software solutions based on
            business requirements and objectives.`,
            `Worked closely with business users and business analysts to
            understand functionality and propose creative solutions to meet
            business needs.`,
            `Completed software development lifecycle from requirement
            analysis to test planning, test case development, and test execution.`,
            `Troubleshot incidents reported by end-users to schedule system
            changes and identify permanent solutions.`,
            `Collaborated with Business, Design, Back-End, and QA Teams to deliver solutions.`,
            `Communicated and explained business requirements to team
            members to understand and implement functional demands.`,
            `Mentored 3 new employees to achieve high performance of the team and meet all business goals.`,
        ]
    },
    {
        position: 'Trainee, Software Developer',
        company_name: 'TIAA',
        period: '05/2021 - 04/2022',
        roles: [
            `Revised, modularized and updated old code bases to modern
            development standards, reducing operating costs, and improving
            functionality.`,
            `Corrected, modified, and upgraded software to improve
            performance. Authored code fixes and enhancements for inclusion
            in future code releases and patches.`,
            `Supported SDLC issues in test and production environments.`,
            `Documented software development methodologies in technical
            manuals to be used by IT personnel in future projects.`
        ]
    },
];


// portfolio section
const projects = [
    {
        title: 'Movie Ticket Booking',
        image: 'proj_1.jpg',
        desc: 'A movie ticket booking system that simplifies the process of booking tickets for movies and shows.',
        stack: 'Angular 10, Spring boot',
        gitLink: 'https://github.com/cheryl0497/Urban-Ticket-Angular',
        liveLink: ''
    },
    {
        title: 'Personal Website',
        image: 'proj_4.png',
        desc: 'An elegant portfolio to contain content of a personal nature rather than content pertaining to a company, organization or institution',
        stack: 'HTML, CSS, JS',
        gitLink: 'https://github.com/manalidarji/manalidarji.github.io',
        liveLink: 'https://cheryl0497.github.io/Personal-Website/'
    },
    {
        title: 'Kaun Banega Crorepati?',
        image: 'proj_5.png',
        desc: "This project is a JAVA Console App, programmed using core JAVA & Object-Oriented Programming(OOP), inspired from famous TV show: 'Kaun Banega Crorepati'",
        stack: 'Core JAVA',
        gitLink: 'https://github.com/cheryl0497/JavaQuizGame',
        liveLink: ''
    },
    {
        title: 'Cafe Menu Card',
        image: 'proj_3.png',
        desc: "This project showcases a menu page created using JavaScript. The page is designed to provide a simple, interactive way to display menu items dynamically.",
        stack: 'HTML, CSS, JS',
        gitLink: 'https://github.com/cheryl0497/Cafe-Menu/tree/main?',
        liveLink: 'https://cheryl0497.github.io/Cafe-Menu/'
    }
    ];

// create single experience HTML element
const createSingleExperience  = exp => {       
    // create roles li tags
    let rolesLi = '';
    exp.roles.forEach( role => {
        rolesLi += `<li>${role}</li>`;
    })

    return `
    <div class="single">
        <p class="sub-heading"><strong>${exp.position}</strong> | ${exp.company_name}</p>
        <p><em>${exp.period}</em></p>
        <ul class="roles">${rolesLi}</ul>
    </div>`;
}

// create single project HTML element
const createSingleProject = project => {
    // conditional live link generation
    const liveLink = (project.liveLink) ? 
    `<a class="live-link" href="${project.liveLink}" target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.3,13.35a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41l2.12-2.12a2,2,0,0,0,0-2.83L17.3,5.28a2.06,2.06,0,0,0-2.83,0L12.35,7.4A1,1,0,0,1,10.94,6l2.12-2.12a4.1,4.1,0,0,1,5.66,0l1.41,1.41a4,4,0,0,1,0,5.66L18,13.06A1,1,0,0,1,17.3,13.35Z"/><path d="M8.11,21.3a4,4,0,0,1-2.83-1.17L3.87,18.72a4,4,0,0,1,0-5.66L6,10.94A1,1,0,0,1,7.4,12.35L5.28,14.47a2,2,0,0,0,0,2.83L6.7,18.72a2.06,2.06,0,0,0,2.83,0l2.12-2.12A1,1,0,1,1,13.06,18l-2.12,2.12A4,4,0,0,1,8.11,21.3Z"/><path d="M8.82,16.18a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l6.37-6.36a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L9.52,15.89A1,1,0,0,1,8.82,16.18Z"/></svg>
    </a>` : '';

    return `
    <div class="project-wrap"> 
        <div class="project-content-overlay">
            <div class="project-links-wrap">
                ${liveLink}
                <a class="git-link" href="${project.gitLink}" target="_blank">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                </a>
            </div>
            <h4 class="project-title-overlay">${project.title}</h4>   
        </div>
        <div class="project-img-wrap">
            <img class="img-resp" src="./assets/images/projects/${project.image}" alt="Project"/>
        </div>
        <div class="project-content">
            <h6 class="project-title">${project.title}</h6>
            <p class="project-desc">${project.desc}</p>
            <p class="project-stack"><strong>Tech: </strong>${project.stack}</p>
        </div>        
    </div>
    `;
}

// populate experience section
const allExpNode = document.getElementById('all-exp-wrap');
experiences.forEach(experience => {
    allExpNode.innerHTML += createSingleExperience(experience);
})

// populate portfolio section
const allProjectsNode = document.getElementById('all-projects-wrap');
projects.forEach(project => {
    allProjectsNode.innerHTML += createSingleProject(project);
})

// get current year for footer
const yearElem = document.getElementById('current-year');
yearElem.innerHTML = new Date().getFullYear();

// typing effect for hero section
async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split('');
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      document.getElementById(eleRef).innerHTML += letters[i];
      i++;
    }
    return;
}    
function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}
typeSentence('I am a Full Stack Developer.', 'about-title', 180);

// menu links
let mobMenu = document.getElementById('mob-header-menu');
document.getElementById('hamburger').addEventListener('click', function(e){
    e.preventDefault;
    mobMenu.classList.add('active');
})
document.getElementById('close-mob-menu').addEventListener('click', function(e){
    e.preventDefault;
    mobMenu.classList.remove('active');
})
const header = document.getElementById('header');
const links = document.querySelectorAll('.nav li a');
for (const link of links) {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop - header.offsetHeight;        
        scroll({
          top: offsetTop,
          behavior: 'smooth'
        });
        mobMenu.classList.remove('active');
    });
}