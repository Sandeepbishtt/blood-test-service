// script.js

// Select all necessary elements
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const carouselContainer = document.querySelector(".carousel-container");

// Track the active index
let activeIndex = 0;

// Function to show the slide based on the active index
function showSlide(index) {
  // Loop the activeIndex around when it exceeds the bounds
  if (index < 0) {
    activeIndex = slides.length - 1; // Go to the last slide if index is negative
  } else if (index >= slides.length) {
    activeIndex = 0; // Go to the first slide if index exceeds the length
  } else {
    activeIndex = index; // Otherwise, use the given index
  }

  // Remove 'active' class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add 'active' class to the selected slide and dot
  slides[activeIndex].classList.add("active");
  dots[activeIndex].classList.add("active");

  // Use transform to slide the carousel container to the active slide
  carouselContainer.style.transform = `translateX(-${activeIndex * 105}%)`;
}

// Handle dot click functionality
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index); // Show the clicked slide
  });
});

// Auto-play function to automatically switch slides every 3 seconds
function autoPlay() {
  activeIndex++; // Increment the activeIndex

  // If activeIndex exceeds the number of slides, loop back to the first slide
  if (activeIndex >= slides.length) {
    activeIndex = 0; // Reset back to the first slide after the last one
  }

  showSlide(activeIndex); // Show the next slide
}

// Start auto-play
setInterval(autoPlay, 4000); // Change slide every 4 seconds

// Initial setup: display the first slide
showSlide(activeIndex);
