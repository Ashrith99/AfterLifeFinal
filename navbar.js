var getHubergerIcon = document.getElementById("hamburger-menu");
var getHubergerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

getHubergerIcon.addEventListener("click", function () {
    console.log("hello");
    getMobileMenu.style.display = "flex";
    setTimeout(function () {
        getMobileMenu.style.transform = "translateX(0%)"; // Slide in the menu
    }, 50); // Add a small delay for better transition effect
});

getHubergerCrossIcon.addEventListener("click", function () {
    console.log("hello");
    getMobileMenu.style.transform = "translateX(-100%)"; // Slide out the menu
    setTimeout(function () {
        getMobileMenu.style.display = "none";
    }, 300); // Wait for the transition to end before hiding
});