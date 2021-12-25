// Создать div
const div = document.createElement("div");
// Добавить к нему класс wrapper
div.classList.add("wrapper");
// Поместить его внутрь тэга body

const body = document.body;
body.appendChild(div);
// Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";

// Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement("beforebegin", header);
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `
  <ul>
    <li>Один</li>
    <li>Два</li>
    <li>Три</li>
  </ul>
`;
// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;

// =====================================================
// Создать изображение
const img = document.createElement("img");
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = "https://picsum.photos/240";
// 2. Добавить атрибут width со значением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add("super");
// 4. Добавить совйство alt со значением "Super Man"
img.alt = "Super Man";
// Поместить изображение внутрь элемента с классом wrapper
div.append(img);
// Используя HTML строку, создать DIV с Классом 'pDiv' + с 2-мя параграфами
const elemHTML = `
<div class='pDiv'>
  <p>Параграф</p>
  <p>Параграф</p>
</div>`;
// Поместить этот DIV до элемента <ul></ul>
const ulList = div.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHTML);
// Добавить для 2-го параграфа класс text

// Удалить 1-й параграф

// Создать функцию generateAutoCard,
// Которая принимает 3 аргумента: brand, color, year

// Функция должна возвращить разметку HTML:
// <div class="autoCard">
//  <h2>BRAND YEAR</h2>
//  <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом cars

// Создать 4 карточки авто, используя функцию generateAutoCard
const carsList = [
	{ brand: "Tesla", year: 2015, color: "red" },
	{ brand: "Lexus", year: 2016, color: "silver" },
	{ brand: "Nissan", year: 2012, color: "black" },
];
