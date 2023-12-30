const progressBar = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActiveIndex = 1;

nextBtn.addEventListener("click", () => {
  currentActiveIndex++;

  if (currentActiveIndex > circles.length) {
    currentActiveIndex = circles.length;
  }
  updateFunction();
});

prevBtn.addEventListener("click", () => {
  currentActiveIndex--;

  if (currentActiveIndex < 1) {
    currentActiveIndex = 1;
  }
  updateFunction();
});

function updateFunction() {
  circles.forEach((c, i) => {
    if (i < currentActiveIndex) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });

  const activeCircle = document.querySelectorAll(".active");
  progressBar.style.width =
    ((activeCircle.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActiveIndex === 1) {
    prevBtn.disabled = true;
  } else if (currentActiveIndex === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
