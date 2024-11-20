
// Filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Contact form validation (if needed for a contact page)
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
    } else {
        alert("Message sent successfully!");
    }
});
