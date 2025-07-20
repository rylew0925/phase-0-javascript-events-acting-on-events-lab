const dodger = document.getElementById("dodger");

// ⬅️ Function to move dodger left by 1px if not at edge
function moveDodgerLeft() {
  const leftStr = dodger.style.left || "0px";                  // Fallback to "0px" if not set
  const left = parseInt(leftStr.replace("px", ""), 10);        // Convert "px" to number

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// ➡️ Function to move dodger right by 1px if within bounds
function moveDodgerRight() {
  const leftStr = dodger.style.left || "0px";                  // Fallback if unset
  const left = parseInt(leftStr.replace("px", ""), 10);

  const maxRight = 360;                                        // Boundary set by rubric test

  if (left < maxRight) {
    dodger.style.left = `${left + 1}px`;
  }
}

// ⌨️ Add keydown listener for left/right arrow keys
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});