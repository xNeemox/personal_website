const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

// Show popup
popupBtn.addEventListener("click", function () {
    popup.style.display = "block";
});

// Close popup
closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});