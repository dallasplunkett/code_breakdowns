// click
window.addEventListener("click", function(event) {
  obj.jump = true;
}, false);

// player
var obj = {
  jump: false,
  jumpForce: -10,
  gravity: 1,
  y: 0,
  vy: 0,
};

// game loop
function test() {
  window.requestAnimationFrame(test);

  // jump
  if (obj.jump) {
    obj.vy += obj.jumpForce;
    obj.jump = false;
  }

  // gravity
  obj.vy += obj.gravity;

  // move
  obj.y += obj.vy;

  // ground
  if (obj.y > 50) {
    obj.y = 50;
    obj.vy = 0;
  }

  // display
  console.log(obj.y, obj.vy);
}
