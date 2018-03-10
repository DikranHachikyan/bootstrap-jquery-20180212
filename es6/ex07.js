//1.
function* getNextValue(){
    let i = 1;

    while( true ){
        yield i++;
    }
} 

//2.
let generator = getNextValue();

console.log(generator.next());
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
generator.return();
console.log(generator.next());

generator = getNextValue();

console.log(generator.next());
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);