let numberOfButtons = document.querySelectorAll(".drum");
for (let button of numberOfButtons) {
  //   console.log(button);
  button.addEventListener("click", function () {
    console.log("Clicked");
    let audio = new Audio("/sounds/tom-1.mp3");
    audio.play();
    console.log(this);
    console.log(this.innerHTML);
  });
}
