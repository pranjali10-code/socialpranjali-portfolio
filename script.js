// MOBILE HAMBURGER MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
}


// PRETTY LITTLE CURSOR

if (window.matchMedia("(pointer: fine)").matches) {

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    cursor.innerHTML = "💗";
    document.body.appendChild(cursor);

    const decorations = ["♡", "✦", "୨୧", "✧", "⋆", "💗"];
    let lastSparkle = 0;

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        if (Date.now() - lastSparkle > 65) {

            const sparkle = document.createElement("span");
            sparkle.className = "cursor-sparkle";

            sparkle.innerHTML = decorations[
                Math.floor(Math.random() * decorations.length)
            ];

            sparkle.style.left = e.clientX + "px";
            sparkle.style.top = e.clientY + "px";

            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 1000);

            lastSparkle = Date.now();
        }
    });

    document.addEventListener("click", (e) => {

        for (let i = 0; i < 6; i++) {

            const sparkle = document.createElement("span");
            sparkle.className = "cursor-sparkle";
            sparkle.innerHTML = decorations[
                Math.floor(Math.random() * decorations.length)
            ];

            sparkle.style.left = (e.clientX + Math.random() * 50 - 25) + "px";
            sparkle.style.top = (e.clientY + Math.random() * 50 - 25) + "px";

            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 1000);
        }
    });

    document.querySelectorAll("a, button").forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add("hovering");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("hovering");
        });
    });
}
// SMOOTH SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll("section, footer");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach((element) => {
    element.classList.add("scroll-reveal");
    revealObserver.observe(element);
});
// STAGGERED ANIMATIONS

const animatedCards = document.querySelectorAll(
    ".receipt-card, .reel-card, .performance-card, .toolkit-item"
);

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const cards = [...entry.target.parentElement.children];

            const index = cards.indexOf(entry.target);

            setTimeout(() => {
                entry.target.classList.add("visible");
            }, index * 130);

            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

animatedCards.forEach((card) => {
    card.classList.add("stagger-item");
    cardObserver.observe(card);
});