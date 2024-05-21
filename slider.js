let slideBtnleft = document.getElementById("slide-btn-left");
let slideBtnright = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".img-item");

console.log(imgItem);
let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

slideBtnleft.addEventListener("click", () => {
  // alert("left btn")
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }
  // startSlider = startSlider -100;
  imgItem.forEach((element) => {
    element.style.transform = ` translateX(${startSlider}%)`;
  });
});
slideBtnright.addEventListener("click", () => {
  //alert("right btn")

  if (startSlider >= -endSlider + 100) {
    startSlider = startSlider - 100;
  }
  // startSlider = startSlider -100;
  imgItem.forEach((element) => {
    element.style.transform = ` translateX(${startSlider}%)`;
  });
});
