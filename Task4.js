let a = +prompt('Веедите число с которого начать отсчет', '')
let b = +prompt('Введите конечное число', '')

function numbersList(a, b) {
    
    result = setInterval(() => {
        if (a <= b){
            console.log(a)
            a++;
        }
    }, 1000);
};

numbersList(a, b);