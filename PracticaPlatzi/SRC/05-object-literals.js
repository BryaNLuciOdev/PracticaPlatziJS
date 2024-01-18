// enahced object literals

function newUser(user, age, country, uid){
    return {
        user,
        age,
        country,
        id: uid
    }
}

console.log(newUser("gndx", 34, "MX", 1));