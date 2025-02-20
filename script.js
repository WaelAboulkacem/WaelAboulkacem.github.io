document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    function checkScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.style.transform = "scale(1.05)";
                section.style.transition = "transform 0.5s ease-in-out";
            } else {
                section.style.transform = "scale(1)";
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
