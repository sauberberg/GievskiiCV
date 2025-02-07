document.addEventListener("DOMContentLoaded", function () {
    // Smooth fade-in effect for sections
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
        }, index * 500);
    });

    // Rotating text effect in header
    const words = [" GEN-AI", " SAP S4/HANA",];
    let i = 0;
    setInterval(() => {
        document.getElementById("changing-text").textContent = words[i];
        i = (i + 1) % words.length;
    }, 2000);
});
