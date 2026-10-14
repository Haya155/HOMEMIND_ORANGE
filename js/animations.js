// On this site JavaScript is used ONLY for animation (no logic).

// 1) Cards fade up when they scroll into view
var cards = document.querySelectorAll(
    ".stat-card, .panel, .job-card, .site-card, .tech-card, .notif-item, .welcome-section, .quick-link-card, .device-card, .device-stat-card, .service-item, .service-card, .notification-card, .summary-item, .information-card, .action-card"
);

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

cards.forEach(function (card, index) {
    card.classList.add("reveal");
    card.style.transitionDelay = (index % 4) * 80 + "ms";
    card.style.animationDelay = (index % 4) * 80 + "ms";
    observer.observe(card);
});

// 2) Numbers count up (put data-count="128" on the element; the real number stays in the HTML)
document.querySelectorAll("[data-count]").forEach(function (el) {
    var target = Number(el.dataset.count);
    var decimals = Number(el.dataset.decimals || 0);
    var startTime = null;

    function step(time) {
        if (!startTime) { startTime = time; }
        var progress = Math.min((time - startTime) / 1000, 1);
        el.textContent = (target * progress).toLocaleString("en", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
        if (progress < 1) { requestAnimationFrame(step); }
    }
    requestAnimationFrame(step);
});
