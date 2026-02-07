const $ = document;
const buttons = $.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    console.log(color);
    document.documentElement.style.setProperty("--theme-color", color);
  });
});
