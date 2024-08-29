let currentIndex = 0; // Current slide index

// Function to move the slide
function moveSlide(direction) {
    const slide = document.querySelector('.carousel-slide');
    const totalSlides = slide.children.length;

    // Update the index based on direction
    currentIndex += direction;

    // Wrap around if at the end or beginning
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Move the carousel by setting transform
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}
