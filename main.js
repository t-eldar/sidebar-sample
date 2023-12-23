const toggleMenu = () => {
  const element = document.querySelector(".nav-links");
  const icon = document.querySelector(".gg-menu-motion");

  console.log(element.style.visibility);
  if (
    element.style.visibility === "hidden" ||
    element.style.visibility === ""
  ) {
    element.style.visibility = "visible";
    icon.animate([{ transform: "rotate(0)" }, { transform: "rotate(90deg)" }], {
      duration: 300,
      fill: "forwards",
    });
  } else {
    element.style.visibility = "hidden";

    icon.animate([{ transform: "rotate(90deg)" }, { transform: "rotate(0)" }], {
      duration: 300,
      fill: "forwards",
    });
  }
};
