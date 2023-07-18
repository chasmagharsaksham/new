const slides = document.querySelectorAll(".slide");

var counter = 0;

function goPrev() {
  counter--;
  slideImage();
}
function goNext() {
  counter++;
  slideImage();
}
function slideNext() {
  const intervalId = setInterval(() => {
    counter++;

    if (counter === 3) {
      counter = 0;
    }
    slideImage();
  }, 3000);
}

slideNext();

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

let btn = document.querySelector(".categories");
btn.addEventListener("click", click);

let links = document.querySelector(".dropdown-content");
function click() {
  if (links.style.display === "none") {
    links.style.display = "block";
  } else {
    links.style.display = "none";
  }
}
