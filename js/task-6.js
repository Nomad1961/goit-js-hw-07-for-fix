function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  // Сброс размеров ящиков обратно на 30x30 пикселей
  const defaultBoxSize = 30;
  const defaultBoxMargin = 5;
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    box.style.width = `${defaultBoxSize}px`;
    box.style.height = `${defaultBoxSize}px`;
    box.style.margin = `${defaultBoxMargin}px`;
  });
}
