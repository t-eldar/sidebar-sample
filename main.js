const navLinks = document.querySelector(".nav-links");
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
    return;
  }

  navLinks.style.display = "none";
});

const toggleMenu = () => {
  const element = document.querySelector(".nav-links");
  const icon = document.querySelector(".gg-menu-motion");

  if (!element.checkVisibility()) {
    element.style.display = "flex";
    icon.animate([{ transform: "rotate(0)" }, { transform: "rotate(90deg)" }], {
      duration: 300,
      fill: "forwards",
    });
  } else {
    element.style.display = "none";

    icon.animate([{ transform: "rotate(90deg)" }, { transform: "rotate(0)" }], {
      duration: 300,
      fill: "forwards",
    });
  }
};
