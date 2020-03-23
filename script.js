let counter = 0;
const leftButton = document.querySelector("button:nth-of-type(1)");
const rightButton = document.querySelector("button:nth-of-type(2)");

const spanCounter = document.querySelector("span.counter");


leftButton.addEventListener("click", function () {
  counter += 1;
  spanCounter.textContent = counter;
})

rightButton.addEventListener("click", function () {
  counter -= 1;
  spanCounter.textContent = counter;
})
