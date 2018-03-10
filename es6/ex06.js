
function foo(a = 1, b, c = 2 ){
    console.log(`a=${a} b=${b} c=${c}`);
}

foo(11, 22, 33);
foo(11, 22);
//foo(11);// b = undefined 