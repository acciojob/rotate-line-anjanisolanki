// script.js
document.addEventListener("DOMContentLoaded", () => {
    const line = document.getElementById('line');
    let currentAngle = 0;

    setInterval(() => {
        currentAngle += 2;
        // Ensure you use backticks for the template literal
        line.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg)`;
    }, 20);
});