/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector("#homework-container");

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
  let div = document.createElement("div");
  div.className = "draggable-div";
  div.style.backgroundColor = getRandomClr();
  div.style.left = getRndInteger(0, document.body.clientWidth);
  div.style.top = getRndInteger(0, window.innerHeight);
  div.style.width = getRndInteger(1, document.body.clientWidth);
  div.style.height = getRndInteger(1, window.innerHeight);
  function getRandomClr() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(-6)
    );
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min + "px";
  }
  return div;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {}

let addDivButton = homeworkContainer.querySelector("#addDiv");

addDivButton.addEventListener("click", function() {
  // создать новый div
  let div = createDiv();

  // добавить на страницу
  homeworkContainer.appendChild(div);
  // назначить обработчики событий мыши для реализации d&d
  addListeners(div);
  // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
  // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export { createDiv };
