let values = [1,2,3,4,5,6,7,8,9,10];

let n = values.filter( value => (value % 2) === 0 );

console.log('New Array:', n);

let v = [0, ...n];

console.log('v=', v);