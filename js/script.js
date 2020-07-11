/* Задания на урок:





3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// document.addEventListener('DOMContainerLoaded', () => {


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    // 1) Удалить все рекламные блоки со страницы (правая часть сайта)

    // document.getElementsByClassName("promo__adv")[0].remove();
    // let dd  = document.querySelectorAll('.promo__adv')[0].remove();

    let imgRm = document.querySelectorAll('promo__adv img'),
        promo = document.querySelector('.promo__bg'),
        comedia = promo.querySelector('.promo__genre'),
        promoList = document.querySelector('.promo__interactive-list'),
        promoDelete = promoList.querySelectorAll('.delete'),
        menu = document.querySelector('.promo__menu'),
        check = document.querySelector('.yes').previousElementSibling,
        form = document.querySelector('form.add');
        // btnAdd = document.querySelector('.yes').nextElementSibling;

    //  console.log(btnAdd);
    

    imgRm.forEach(el => {
        el.remove();
    });



    // console.log(imgRm);

    // 2) Изменить жанр фильма, поменять "комедия" на "драма"

    comedia.textContent = 'драма';
    // comedia.innerHTML = '<h1>драма</h1>';


    // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img

    promo.style.backgroundImage = "url('img/bg.jpg')";
    //  style = "img/bg.jpg";

    // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
    // Отсортировать их по алфавиту

    WriteMovie();

    function WriteMovie() {
        promoList.innerHTML = "";

        movieDB.movies.sort();

        movieDB.movies.forEach((item, i) => {
            promoList.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${item}
                <div class="delete"></div>
            </li>
            `;
        });
    }

    // 1,2
    let AddFilm = (e => {
        e.preventDefault();
        let inputFilm = document.querySelector('.adding__input').value;

        if (inputFilm === "") {
            alert('Error!!! Enter correct name of film');
            return;
        }

        if (inputFilm.length > 21) inputFilm = inputFilm.slice(0, 21) + '...';

        movieDB.movies.push(inputFilm);
        WriteMovie();

        if (check.checked) console.log("Add favorite film");

        e.target.reset();

        console.log(movieDB.movies);
    });

    form.addEventListener('submit', AddFilm);
    
 
    // let del = document.querySelectorAll('.delete');
    
    


    
        document.querySelectorAll('.delete').forEach( (btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                // movieDB.movies.sort();   
                WriteMovie();
                // console.log(movieDB.movies);
            });
        });
    




