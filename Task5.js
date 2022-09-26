let x = prompt('Введите число')
let n = prompt('В какую степень возвести?')

const func = (x, n) => {
    result = Math.pow(x, n)
    console.log(result);
}

func(x, n);