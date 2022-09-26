let arr = [5, 12, 'hello', NaN, 34, '55', 28, 11, 192, 68, 13, 12]

function countNumbers(){
    let notNumbers = 0;
    let evenNumbers = 0;
    let oddNumbers = 0;
    for(i of arr){
        if ((typeof i !=='number') || i == String || i == null || isNaN(i)){
            notNumbers++;
        }
        else if (i%2 === 0){
            evenNumbers++;
        }
        else if (i%2 !== 0){
            oddNumbers++;
        }
    }
    console.log('There are '+ evenNumbers + ' even Numbers and '+ oddNumbers +' odd Numbers');
}

countNumbers();