// Your code goes here
const firstImg = document.querySelector("img[src = 'img/fun-bus.jpg']");
firstImg.addEventListener("mouseenter", () => {
  firstImg.style.transform = "scale(5.0)";
  firstImg.style.transition = "all 0.3s";
});

firstImg.addEventListener("mouseleave", () => {
  firstImg.style.transform = "scale(1.0)";
  firstImg.style.transition = "all 0.3s";
});
