//your JS code here. If required.
// 1. Select the line element
const line = document.getElementById('line');

// 2. Initialize the rotation angle
let currentAngle = 0;

// 3. Set an interval to run every 20 milliseconds
setInterval(() => {
    // Increment the angle by 2 degrees
    currentAngle += 2;

    // 4. Apply the rotation via CSS transform
    // Note: We include translate(-50%, -50%) to keep it centered 
    // while it rotates.
    line.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg)`;
}, 20);