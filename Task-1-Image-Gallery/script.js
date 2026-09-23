// Gallery image list
const images = [
    "images/nature.jpg",
    "images/beach.jpg",
    "images/mountain.jpg",
    "images/forest.jpg",
    "images/city.jpg",
    "images/sunset.jpg",
    "images/flowers.jpg",
    "images/wildlife.jpg"
];

let currentIndex = 0;

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.querySelector(".close");
const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Gallery images
const galleryItems = document.querySelectorAll(".gallery-item");

// Open lightbox
function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex];
    lightbox.style.display = "flex";
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Show next image
function showNextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex];
}

// Show previous image
function showPreviousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex];
}

// Add click event to gallery images
galleryItems.forEach((item, index) => {
    item.addEventListener("click", function () {
        openLightbox(index);
    });
});

// Close button
closeButton.addEventListener("click", closeLightbox);

// Next button
nextButton.addEventListener("click", showNextImage);

// Previous button
previousButton.addEventListener("click", showPreviousImage);

// Close when clicking outside the image
lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard controls
document.addEventListener("keydown", function (event) {

    if (lightbox.style.display !== "flex") {
        return;
    }

    if (event.key === "ArrowRight") {
        showNextImage();
    }

    if (event.key === "ArrowLeft") {
        showPreviousImage();
    }

    if (event.key === "Escape") {
        closeLightbox();
    }
});

// Category filter
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        this.classList.add("active");

        const selectedCategory = this.getAttribute("data-filter");

        galleryItems.forEach(item => {

            const itemCategory = item.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === itemCategory
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});
