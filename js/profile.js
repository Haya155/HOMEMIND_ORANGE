const profileElements = document.querySelectorAll(
    ".profile-overview, .profile-card, .account-note"
);

profileElements.forEach(function (element, index) {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";

    setTimeout(function () {

        element.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        element.style.opacity = "1";
        element.style.transform = "translateY(0)";

    }, index * 150);

});