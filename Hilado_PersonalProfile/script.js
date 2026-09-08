const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const contacts = document.getElementById("contacts");
const clickMe = document.getElementById("click-me");

const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
if (home) {
    home.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}


if (about) {
    about.addEventListener("click", function() {
        window.location.href = "about-me.html";
    });
}

if (skills) {
    skills.addEventListener("click", function() {
        alert("Sorry! Skills are currently being developed.");
    });
}


if (contacts) {
    contacts.addEventListener("click", function() {
        window.location.href = "contact.html";
    });
}


if (clickMe) {
    clickMe.addEventListener("click", function() {
        window.location.href = "more-about-me.html";
    });
}


if (popupBtn && popup) {
    popupBtn.addEventListener("click", function() {
        popup.style.display = "block";
    });
}

if (closeBtn && popup) {
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
}