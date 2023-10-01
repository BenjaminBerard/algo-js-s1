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
    constructor (name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

        attackPokemon(pokemon){
            if (this.isLucky()){
                let damage = this.attack - pokemon.defense
                pokemon.hp -= damage
                console.log(this.name + " a attaqué " + pokemon.name + " pour " + damage + " dégat. Il lui reste " + pokemon.hp)
            } else {
                console.log(this.name + " a raté son attaque")
            }  
        }

        isLucky(){
            return Math.random() < this.luck
        }
}

let Muplodocus = new pokemon ("Muplodocus", 124, 96, 270, 0.7) 
let Mammochon = new pokemon ("Mammochon", 108, 102, 310, 0.76)

while (Muplodocus.hp > 0 && Mammochon.hp > 0){

    Muplodocus.attackPokemon(Mammochon)
    if (Mammochon.hp <= 0){
        console.log(Mammochon.name + " est mort")
        break
    }

    Mammochon.attackPokemon(Muplodocus)
    if (Muplodocus.hp <= 0){
        console.log(Muplodocus.name + " est mort")
        break
    }
}