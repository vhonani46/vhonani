/* ========================
   DARK MODE TOGGLE
======================== */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* ========================
   HERO BUTTON INTERACTION
======================== */
function sayHello() {
    // Opens default email client to hire you
    window.location.href = "mailto:mpfunivhonani46@gmail.com?subject=Hire%20Me&body=Hello%20Vhonani";
}

/* ========================
   CONTACT FORM USING EMAILJS
======================== */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            const msg = document.getElementById("message");
            msg.style.color = "green";
            msg.textContent = "Message sent successfully! ✅";
            document.getElementById('contactForm').reset();
        }, function(error) {
            const msg = document.getElementById("message");
            msg.style.color = "red";
            msg.textContent = "Oops... something went wrong. ❌";
            console.error('FAILED...', error);
        });
});

/* ========================
   DYNAMIC PROJECT DATA
======================== */
const projects = [
    {
        title: "Personal Website",
        image: "image1.jpg",
        description: "A responsive personal portfolio built with HTML, CSS, and JavaScript showcasing my skills and projects.",
        link: "#"
    },
    {
        title: "React App",
        image: "image2.jpg",
        description: "A dynamic React application demonstrating component-based architecture and state management.",
        link: "#"
    },
    {
        title: "JavaScript Calculator",
        image: "image4.jpg",
        description: "A simple calculator built using JavaScript that performs basic arithmetic operations.",
        link: "#"
    }
];

/* ========================
   LOAD PROJECT CARDS
======================== */
const container = document.getElementById("projectsContainer");

projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
    `;
    card.onclick = () => openModal(index); // Open modal on click
    container.appendChild(card);
});

/* ========================
   PROJECT MODAL FUNCTIONS
======================== */
const modal = document.getElementById("projectModal");

function openModal(index) {
    const project = projects[index];
    document.getElementById("modalImage").src = project.image;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.description;
    document.getElementById("modalLink").href = project.link;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal if user clicks outside modal content
modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});

/* ========================
   SCROLL REVEAL ANIMATION
======================== */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});
