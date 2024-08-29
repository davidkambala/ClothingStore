document.querySelectorAll('.carousel-container').forEach((carousel) => {
    const slide = carousel.querySelector('.carousel-slide');
    const prevButton = carousel.querySelector('.prev-button');
    const nextButton = carousel.querySelector('.next-button');
    let currentIndex = 0; // Maintain individual index for each carousel

    // Add event listeners to navigation buttons
    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));

    // Function to move the slide
    function moveSlide(direction) {
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
});
