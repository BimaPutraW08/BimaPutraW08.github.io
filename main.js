const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = `
        top: ${e.y - 20}px;
        left: ${e.x - 20}px;
    `;
});
