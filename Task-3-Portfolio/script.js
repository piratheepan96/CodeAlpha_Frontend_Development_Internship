
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  // Show or hide the Back to Top button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Scroll to top smoothly
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  console.log("Portfolio website loaded successfully!");
});

