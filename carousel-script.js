const carousel = document.querySelector(".carousel");

const deragging = (e) => {
  carousel.scrollLeft = e.pageX;
};

carousel.addEventListener("mousemove", dragging);
