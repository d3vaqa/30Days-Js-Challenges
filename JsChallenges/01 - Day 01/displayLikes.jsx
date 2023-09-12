function displayLikes(names){
    if(names.length === 0){
        return "No one likes this"
    }else if(names.length === 1){
        return `${names[0]} likes this.`
    }else if(names.length === 2){
        return `${names[0]} and ${names[1]} likes this.`
    }else{
        const count = names.length -2
        return `${names[0]}, ${names[1]} and ${count} others like this`
    }
}


console.log(displayLikes(["Aqa"]))
console.log(displayLikes(["Aqa", "Hiro"]))
console.log(displayLikes(["Aqa", "Hiro", "Dev", "Ali", "Hamid"]))