const ballElement = document.getElementById('ball');

// Ball physics object
const ball = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  vx: 0,
  vy: 0,
  radius: 30,
  mass: 1
};

// Physics constants
const gravity = 0.5;
const damping = 0.98;
const bounce = 0.75;

// Drag and drop
let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

// Update ball position on screen
function updateBallPosition() {
  ballElement.style.left = (ball.x - ball.radius) + 'px';
  ballElement.style.top = (ball.y - ball.radius) + 'px';
}

// Mouse events
document.addEventListener('mousedown', (e) => {
  const distToBall = Math.hypot(e.clientX - ball.x, e.clientY - ball.y);
  
  if (distToBall < ball.radius) {
    isDragging = true;
    dragOffsetX = e.clientX - ball.x;
    dragOffsetY = e.clientY - ball.y;
    ball.vx = 0;
    ball.vy = 0;
    ballElement.classList.add('dragging');
  }
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    ball.x = e.clientX - dragOffsetX;
    ball.y = e.clientY - dragOffsetY;
    updateBallPosition();
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  ballElement.classList.remove('dragging');
});

// Touch events for mobile
document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  const distToBall = Math.hypot(touch.clientX - ball.x, touch.clientY - ball.y);
  
  if (distToBall < ball.radius) {
    isDragging = true;
    dragOffsetX = touch.clientX - ball.x;
    dragOffsetY = touch.clientY - ball.y;
    ball.vx = 0;
    ball.vy = 0;
    ballElement.classList.add('dragging');
  }
});

document.addEventListener('touchmove', (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    ball.x = touch.clientX - dragOffsetX;
    ball.y = touch.clientY - dragOffsetY;
    updateBallPosition();
  }
});

document.addEventListener('touchend', () => {
  isDragging = false;
  ballElement.classList.remove('dragging');
});

// Physics update
function update() {
  if (isDragging) return;
  
  // Apply gravity
  ball.vy += gravity;
  
  // Apply damping
  ball.vx *= damping;
  ball.vy *= damping;
  
  // Update position
  ball.x += ball.vx;
  ball.y += ball.vy;
  
  // Bounce off walls (left and right)
  if (ball.x - ball.radius <= 0) {
    ball.x = ball.radius;
    ball.vx *= -bounce;
  } else if (ball.x + ball.radius >= window.innerWidth) {
    ball.x = window.innerWidth - ball.radius;
    ball.vx *= -bounce;
  }
  
  // Bounce off floor (bottom)
  if (ball.y + ball.radius >= window.innerHeight) {
    ball.y = window.innerHeight - ball.radius;
    ball.vy *= -bounce;
  }
  
  // Bounce off ceiling (top)
  if (ball.y - ball.radius <= 0) {
    ball.y = ball.radius;
    ball.vy *= -bounce;
  }
  
  updateBallPosition();
}

// Handle window resize
window.addEventListener('resize', () => {
  // Recalculate bounds if needed
});

// Animation loop
function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

// Initialize
updateBallPosition();
gameLoop();
