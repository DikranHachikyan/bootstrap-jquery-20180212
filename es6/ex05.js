
function createUser( user, plan = 'developer' ){
    if( typeof user !== 'string' || user.trim().length === 0){
        throw Error('undefined or empty user');
    }
    

    console.log(`Create user: ${user} plan: ${plan}`);
}

createUser('John', 'free');
createUser('Anna');
