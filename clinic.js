let currentIndex = 0;
const carousel = document.getElementById("carousel");
const totalImages = carousel.children.length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
}, 4000);
