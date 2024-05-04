

document.querySelectorAll(".mb-1").forEach(function (element) {
    element.addEventListener("mousemove", function () {
      this.style.setProperty("--secondary-color", "#E6F5FA");
    });
  });