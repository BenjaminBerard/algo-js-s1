/*Exemple : 

class hero {
    constructor (name, attack, pv){
        this.name = name
        this.attack = attack
        this.pv = pv
    }
}

class monsters{
    constructor (pv, attack){
        this.pv = pv
        this.attack = attack
    }

    getLife(){
        console.log(this.pv)
    }
}

let Reinor = new hero ("Reinor", 120, 300)
let gnome = new monsters (10, 1200)

if (gnome.pv -= reinor.attack <= 0){
    console.log ("le gnome est mort")
}*/

class pokemon{
    constructor (name, attack, defense, hp){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }

getAttack(){
    return this.attack
}

getDefense(){
    return this.defense
}

getLife(){
    return this.hp - attackPokemon
}
}

let Muplodocus = new pokemon ("Muplodocus", 124, 132, 270) 
console.log (Muplodocus)

let Mammochon = new pokemon ("Mammochon", 108, 151, 310)
console.log (Mammochon)

let firstDamage = attackPokemon (Muplodocus.getAttack(), Mammochon)
let secondDamage = attackPokemon (Mammochon.getAttack(), Muplodocus)

function attackPokemon (firstPokemonAttack, secondPokemonDefense){
    return firstPokemonAttack -= secondPokemonDefense
}

while (Muplodocus.getLife() > 0 || Mammochon.getLife() > 0){
    attackPokemon
    console.log (secondPokemon.Hp)

    if (secondPokemon.hp < 0){
        break
    }
    else{
        continue
    }
}