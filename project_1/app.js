const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Remove "active" class from all panels
    panels.forEach((otherPanel) => {
      if (otherPanel !== panel) {
        otherPanel.classList.remove("active");
      }
    });

    // Toggle "active" class for the clicked panel
    panel.classList.toggle("active");
  });
});
