/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adBloсks = document.querySelectorAll('.promo__adv img'),
	  promoBg = document.querySelector('.promo__bg'),
	  genre = promoBg.querySelector('.promo__genre'),
	  promoLists = document.querySelector('.promo__interactive-list'),
	  promoItemList = promoLists.querySelectorAll('.promo__interactive-item');


//1
adBloсks.forEach( item => {
	item.remove();
});

//2
genre.textContent = 'Драма';

//3
promoBg.style.background = 'url("../img/bg.jpg") center top/cover no-repeat';

//4,5
movieDB.movies.sort();
promoItemList.forEach(item => item.remove());
movieDB.movies.forEach((item, i) => {
	const li = document.createElement('li');
	li.classList.add('promo__interactive-item');
	li.textContent =`${i+1}. ${item}`;
	const div = document.createElement('div');
	div.classList.add('delete');
	li.append(div);
	promoLists.append(li);
});



