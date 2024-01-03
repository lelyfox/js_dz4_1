let userName = prompt('Введите свое имя');
let userYear = +prompt('Введите текущий год');
let userAge = +prompt('Введите свой год рождения');

function info(you, year, age){   
    let text = you + ', ваш возраст ' + (year - age);
    return text;
}  
console.log(info(userName, userYear, userAge));