const changeColorBtn = document.getElementById('change-color-btn');
const changeTextBtn = document.getElementById('change-text-bt');
const boxes = document.querySelectorAll('.box');

changeColorBtn.addEventListener('click', () => {
  boxes.forEach((box) => {
    if (box.style.backgroundColor === 'lightgray' || box.style.backgroundColor === '') {
      box.style.backgroundColor = 'lightblue';
    } else {
      box.style.backgroundColor = 'lightgray';
    }
  });
});


function changeBoxText() {
  boxes.forEach((box, index) => {
    box.innerText = `Caja ${index + 1}` +  box.style.backgroundColor;
  });
}

changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);