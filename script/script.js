const popup = document.getElementById("unavailablePopup");
const closePopup = document.getElementById("closePopup");

      // Open popup when a designated link is clicked
      document.querySelectorAll(".unavailable-link").forEach(link => {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          popup.classList.add("active");
          popup.setAttribute("aria-hidden", "false");
          closePopup.focus();
        });
      });

      // Close popup using the close button
      function hidePopup() {
        popup.classList.remove("active");
        popup.setAttribute("aria-hidden", "true");
      }

      closePopup.addEventListener("click", hidePopup);

      // Close when clicking outside the popup box
      popup.addEventListener("click", function(event) {
        if (event.target === popup) {
          hidePopup();
        }
      });

      // Close using the Escape key
      document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && popup.classList.contains("active")) {
          hidePopup();
        }
      });