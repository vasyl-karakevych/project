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

    const   movieList = document.querySelector('.promo__interactive-list'),
            form = document.querySelector('.add'),
            inputMovie = form.querySelector('.adding__input');


    function WriteMovieList(films){
        movieList.innerHTML = "";

        films.sort();
        
        films.forEach((arr, i) => {
            movieList.innerHTML += `
                        <li class="promo__interactive-item">${i+1} ${arr}
                            <div class="delete"></div>
                        </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                WriteMovieList(movieDB.movies);
                console.log(films);
            });
        });
    }

    function AddMovie(event){
        event.preventDefault();

        if (!inputMovie.value) {
            alert('Input correct name of movie');
        } else {
        movieDB.movies.push(inputMovie.value);
        WriteMovieList(movieDB.movies);
        }
        form.reset();
    }

  
    
    
    form.addEventListener('submit', AddMovie);
    
    
   

    WriteMovieList(movieDB.movies);