// Your code goes here
const firstImg = document.querySelector("img[src = 'img/fun-bus.jpg']");
firstImg.addEventListener("mouseenter", () => {
  firstImg.style.transform = "scale(2.5)";
  firstImg.style.transition = "all 0.3s";
});

firstImg.addEventListener("mouseleave", () => {
  firstImg.style.transform = "scale(1.0)";
  firstImg.style.transition = "all 0.3s";
});

window.addEventListener("scroll", () => {
  if (window.scrollY <= 130) {
    alert("warning");
  }
});

if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
// img/adventure.jpg

const secondImg = document.querySelector("img[src = 'img/adventure.jpg']");
secondImg.addEventListener("dblclick", () => {
  secondImg.style.borderRadius = "10%";
});

const thirdImg = document.querySelector("img[src = 'img/fun.jpg']");
thirdImg.addEventListener("dblclick", () => {
  thirdImg.style.borderRadius = "35%";
});

const fourthImg = document.querySelector("img[src ='img/destination.jpg']");
fourthImg.addEventListener("dblclick", () => {
  fourthImg.style.borderRadius = "55%";
});

secondImg.addEventListener("mouseenter", () => {
  secondImg.style.transform = "scale(1.5)";
  secondImg.style.transition = "all 0.3s";
});

thirdImg.addEventListener("mouseenter", () => {
  thirdImg.style.transform = "scale(3.0)";
  thirdImg.style.transition = "all 0.3s";
});

secondImg.addEventListener("mouseleave", () => {
  secondImg.style.transform = "scale(1.0)";
  secondImg.style.transition = "all 0.3s";
});

thirdImg.addEventListener("mouseleave", () => {
  thirdImg.style.transform = "scale(1.0)";
  thirdImg.style.transition = "all 0.3s";
});

fourthImg.addEventListener("wheel", () => {
  fourthImg.style.transform = "scale(3.0)";
  fourthImg.style.transition = "all 0.5s";
});

fourthImg.addEventListener("mouseleave", () => {
  fourthImg.style.transform = "scale(1.0";
  fourthImg.style.transition = "all 0.3s";
});

firstImg.addEventListener("click", () => {
  firstImg.style.borderRadius = "50%";
});

window.addEventListener("keydown", () => {
  window.alert("you pressed a key!");
});

window.addEventListener("keyup", () => {
  window.alert("you released a key!");
});

window.addEventListener("drag", () => {
  window.alert("stop dragging me!");
});

window.addEventListener("dragend", () => {
  window.alert("whew!Thanks.");
});
