function sum(a){
    return function(b){
        return a + b;
    }
}
let randomFunction = sum(1);
let result = randomFunction(2);
console.log(result);