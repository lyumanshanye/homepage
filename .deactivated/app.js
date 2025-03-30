const img = document.querySelectorAll(".hoverZoomLink");
const win = document.querySelector(".window");
const fullImg = document.querySelector(".full-img");

img.forEach((imgs) => {
  imgs.addEventListener("click", () => {
    const val = imgs.getAttribute("data-value");
    win.classList.add("open");
    fullImg.src = `assets/projects/\${val}.png`;
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("window")) {
    win.classList.remove("open");
  }
});
