const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const startHacking = (element) => {
  let currentIteration = 0;

  const interval = setInterval(() => {
    element.innerText = element.dataset.value.split('').map((letter, index) => {
      if (index < currentIteration) {
        return element.dataset.value[index];
      }

      return LETTERS[Math.floor(Math.random() * LETTERS.length)]
    }).join('');

    if (currentIteration >= element.dataset.value.length) {
      clearInterval(interval);
      element.innerText = element.dataset.value;
    }

    currentIteration += 1 / 3;
  }, 30);
};

document.querySelectorAll('.container').forEach(element => {
  element.addEventListener('mouseover', (event) => {
    const child = event.target;
    [...child.parentElement.getElementsByClassName('hacky-text')].forEach(startHacking);
  })
});