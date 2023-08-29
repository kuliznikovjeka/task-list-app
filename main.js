// Функция, создающая и возвращающая кнопку
function createBtn(text, className) {
	let button = document.createElement('button');
	button.textContent = text;
	button.classList.add(className)
	return button
}
// Функция, создающая и возвращающая поле ввода
function createInput(placeholder, className, type) {
	let input = document.createElement('input');
	input.placeholder = placeholder;
	input.classList.add(className);
	input.type = type;
	return input
}
// Функция, создающая и возвращающая заголовок
function createTitle(className, text) {
	let title = document.createElement('h2');
	title.classList.add(className);
	title.textContent = text;
	return title
}
// Функция, создающая и возвращающая div
function createDiv(className, text) {
	let div = document.createElement('div');
	div.classList.add(className);
	div.textContent = text;
	return div
}
// Функция, добавляющая класс
function changeClass(item, className) {
	item.classList.add(className);
	return item
}
// Функция, создающая и вовзращающая задачу с кнопками
function createTask(title) {
	// Создание обертки задачи
	let itemTask = createDiv('item-task');

	// Создание заголовка
	let titleTask = createTitle('title-task', title,);


	// Создание кнопки "готово"
	let btnTask1 = createBtn('Готово', 'btn-green');
	// Изменение цвета фона + удаление 2х кнопок
	btnTask1.onclick = function () {
		changeClass(itemTask, 'item-task-green')
		changeClass(titleTask, 'title-task-white')
		changeClass(btnTask3, 'btn-dark-green')

		btnTask1.remove();
		btnTask2.remove();
	}

	// Создание кнопки "изменить"
	let btnTask2 = createBtn('Изменить', 'btn-gray');
	// Изменение текста, при нажатии на кнопку "изменить"
	btnTask2.onclick = function () {
		let newTask = prompt('Введите название новой задачи', titleTask.textContent)
		titleTask.textContent = newTask;
	}

	// Создание кнопки "удалить"
	let btnTask3 = createBtn('Удалить', 'btn-gray');
	// Удаление задачи, при нажатии на кнопку "удалить"
	btnTask3.onclick = function () {
		itemTask.remove();
	}

	taskWrapper.append(itemTask);
	itemTask.append(titleTask, btnTask1, btnTask2, btnTask3)
	return itemTask
}

// Создание обертки инпута с кнопкой
let topWrapper = createDiv('wrap-top');
// Создание обертки задач
let taskWrapper = createDiv('wrap-task')

// Создание поле ввода, куда вписываются задачи
let textInput = createInput('Введите задачу', 'input', 'text')

// Кнопка, создающая задачу
let btnCreateTask = createBtn('Создать задачу', 'main-btn');

// Создание задачи при клике на кнопку + очистка поля ввода
btnCreateTask.onclick = function () {
	let titleTask = textInput.value;
	createTask(titleTask)
	textInput.value = '';
}


document.body.append(topWrapper);
topWrapper.append(textInput, btnCreateTask);
document.body.append(taskWrapper);
