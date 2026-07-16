const pages = [
  "images/page1.png",
  "images/page2.png",
  "images/page3.png",
  "images/page4.png",
  "images/page5.png",
  "images/page6.png"
];

let current = 0;

const img = document.getElementById("comicImage");
const page = document.getElementById("pageNumber");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function render() {
  img.src = pages[current];
  page.textContent = `${current + 1} / ${pages.length}`;

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === pages.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (current < pages.length - 1) {
    current++;
    render();
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    render();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});

let startX = 0;

img.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

img.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff < -50) nextBtn.click();
  if (diff > 50) prevBtn.click();
});

render();
