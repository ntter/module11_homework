let n = prompt('Введите число', '')

function numAnalyze(n){
    if (n >= 1000 || n < 2){
        console.log('Данные неверны')
    }
    else{
        for (let i = 2; i < n; i++) {
            if (n%i===0 && n !==i){
                console.log('Это число НЕ простое');
                break;
            }
            else{
                console.log('Число простое');
            }
        }
    };
    
};
numAnalyze(n);