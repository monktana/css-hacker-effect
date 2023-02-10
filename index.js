const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector('h1').addEventListener('mouseover', (event) => {
  const element = event.target;
  let currentIteration = 0;

  const interval = setInterval(() => {
    element.innerText = element.innerText.split('').map((letter, index) => {
      if (index < currentIteration) {
        return element.dataset.value[index];
      }

      return LETTERS[Math.floor(Math.random() * LETTERS.length)]
    }).join('');

    if (currentIteration >= element.innerText.length) {
      clearInterval(interval);
    }

    currentIteration += 1 / 3;
  }, 30);
});