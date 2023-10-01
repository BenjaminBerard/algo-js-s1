/*Exo 2 : Le tueur en série

Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
Une équipe de choc est présente pour le neutraliser.

- Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.

- Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…),
une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)

- Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une
caractéristique prise de celles disponibles (toujours aléatoire).

Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :

Le tueur attaque un des survivants :
- soit le survivant meurt
- soit le survivant esquive et inflige 10 points de dégâts
- soit le survivant inflige 15 points de dégâts mais meurt

Les morts seront affichés à la fin

Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
Les survivants ont gagné mais RIP à X, X, X…)*/

class survivor{
    constructor (name, hp, characteristics, dyingProbability, damageProbability, dyingAndDamageProbability){
        this.name = name
        this.hp = hp
        this.characteristics = characteristics
        this.dyingProbability = dyingProbability
        this.damageProbability = damageProbability
        this.dyingAndDamageProbability = dyingAndDamageProbability
    }
    
} 

class killer{
    constructor (name, hp){
        this.name = name
        this.hp = hp
    }
    
    attack(team){
        let random = team[Math.floor(Math.random() * team.length)]
        let action = Math.random()

        if (action < random.dyingProbability){
            team.splice(random, 1)
            deadCharacters.push (random.name)
            console.log (random.name + " est mort tue par Jason")
        }   
            
        if (action < random.damageProbability){
            jason.hp = this.hp - 10
            console.log (random.name + " esquive l'attaque du tueur et l'attaque, il reste à Jason " + jason.hp + " hp")
        }   
            
        if (action < random.dyingAndDamageProbability){
            jason.hp = this.hp - 15
            team.splice(random, 1)
            console.log (team)
            deadCharacters.push(random.name)
            console.log(random.name + " se sacrifie et inflige 15 degats a Jason, il reste au tueur " + jason.hp + " hp") 
        } 

        if (jason.hp <= 0){
            console.log("Jason est mort les survivants ont gagnés mais RIP " + deadCharacters.name + " qui sont mort pour la bonne cause")
        }

        if (team.length == 0){
            console.log ("Tous les survivants sont mort, Jason a gagne")
        }
    }
}

let names = ["Nathan" , "Anais", "Anastacia", "Maria", "Woury", "Rayan", "Chloe", "Mayeul", "Timothee", "Deborah", "Lola", "Mirialys", "Mickael", "Lidija", "Sila", "Garance", "Maelle", "Gabriel"]
let characteristics = ["nerd", "blonde", "sportif", "idiot", "vieux", "intello", "beau gosse", "ecolo", "alcoolique", "emo", "anglais", "petit", "enfant"]

function getrandom(max){
    return Math.floor(Math.random() * max)
}

let firstSurvivor = new survivor (names[getrandom(18)], 50, characteristics[getrandom(13)], 0.3, 0.5, 0.2)
let secondSurvivor = new survivor (names[getrandom(18)], 65, characteristics[getrandom(13)], 0.35, 0.4, 0.25)
let thirdSurvivor = new survivor (names[getrandom(18)], 40, characteristics[getrandom(13)], 0.2, 0.6, 0.2)
let fourthSurvivor = new survivor (names[getrandom(18)], 80, characteristics[getrandom(13)], 0.1, 0.35, 0.55)
let fifthSurvivor = new survivor (names[getrandom(18)], 30, characteristics[getrandom(13)], 0.15, 0.7, 0.15)

let jason = new killer ("Jason", 100)

let team = [firstSurvivor, secondSurvivor, thirdSurvivor, fourthSurvivor, fifthSurvivor]

let deadCharacters = []

while (jason.hp > 0 || team.length > 0){
    jason.attack(team)
}

/* Je ne suis pas arrivé à faire fonctionner mon programme jusqu'au bout
il semblerait qu'il y est un problème avec ma boucle while ou if puisque lorsqu'on démarre le programme les conditions du while 
ne sont pas respectées

De plus, je n'ai pas réussis à enlever le character tué par Jason de la liste, donc parfois il meurt mais continue de se battre*/