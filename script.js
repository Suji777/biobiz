// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select all items with a 'data-page' attribute
    const navLinks = document.querySelectorAll("[data-page]");

    // Add click event listener to each link
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            // Prevent default behavior of <a> tags
            event.preventDefault();

            // Get the page to navigate to from the 'data-page' attribute
            const targetPage = this.getAttribute("data-page");

            // Redirect to the target page
            window.location.href = targetPage;
        });
    });
});
