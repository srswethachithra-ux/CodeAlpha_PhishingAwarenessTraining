/* ==========================================
   AOS Animation
========================================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ==========================================
   DARK MODE TOGGLE
========================================== */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

/* ==========================================
   QUIZ FUNCTION
========================================== */

const submitQuiz = document.getElementById("submitQuiz");
const quizResult = document.getElementById("quizResult");

submitQuiz.addEventListener("click", () => {

    let score = 0;

    const answers = document.querySelectorAll("input[value='correct']:checked");

    score = answers.length;

    let message = "";

    if (score === 5) {

        message = "🏆 Excellent! You are highly aware of phishing attacks.";

    } else if (score >= 4) {

        message = "🎉 Great Job! Your cyber security awareness is very good.";

    } else if (score >= 3) {

        message = "👍 Good! But you should learn more about phishing attacks.";

    } else if (score >= 2) {

        message = "⚠️ Fair! Improve your cyber security awareness.";

    } else {

        message = "❌ You need more awareness training. Please review the lessons.";

    }

    quizResult.innerHTML = `
        <h2>Your Score: ${score}/5</h2>
        <p>${message}</p>
    `;

    quizResult.scrollIntoView({
        behavior: "smooth"
    });

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ==========================================
   SMOOTH SCROLL FOR NAVIGATION
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", () => {

    console.log("Phishing Awareness Website Loaded Successfully!");

});