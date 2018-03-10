
let msg = 'Hello Js'; // Глобална променлива

function show(){
    let value = 1; //Локална променлива

    if ( value === 1 ){
        let b = 100; //Локална за блока {}
        console.log('1. b=', b);
    }
    
    console.log('2. b=', b); //Грешка
    console.log('value=', value);
    console.log('msg=', msg);
}

show();