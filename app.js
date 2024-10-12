const canvas = document.getElementById('creature-canvas');
const ctx = canvas.getContext('2d');

let isMoving = false;
let creatureX = canvas.width / 2;
let creatureY = canvas.height / 2;
let targetX = creatureX;
let targetY = creatureY;
const speed = 2; // Speed of the creature's movement

// Draw the creature (simple circle in this example)
function drawCreature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath();
    ctx.arc(creatureX, creatureY, 20, 0, Math.PI * 2); // Draw a circle
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

// Update the creature's position to follow the cursor
function update() {
    if (isMoving) {
        const dx = targetX - creatureX;
        const dy = targetY - creatureY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > speed) {
            creatureX += dx / distance * speed;
            creatureY += dy / distance * speed;
        } else {
            creatureX = targetX;
            creatureY = targetY;
        }
        drawCreature();
    }
    requestAnimationFrame(update); // Keep updating
}

// Handle double-click to start/stop movement
canvas.addEventListener('dblclick', () => {
    isMoving = !isMoving; // Toggle movement state
    if (isMoving) {
        // Reset target to current position if starting
        targetX = creatureX;
        targetY = creatureY;
    }
});

// Update target position on mouse move if moving
canvas.addEventListener('mousemove', (event) => {
    if (isMoving) {
        const rect = canvas.getBoundingClientRect();
        targetX = event.clientX - rect.left;
        targetY = event.clientY - rect.top;
    }
});

// Initial drawing
drawCreature();
update();
