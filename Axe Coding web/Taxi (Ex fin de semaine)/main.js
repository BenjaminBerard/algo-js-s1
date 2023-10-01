/*Exo Taxi : 

John essaie de rentrer chez lui en taxi.

Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.

Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux
rouges de chez lui.

À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
Deux possibilités de fin :

- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et
qu’il lui a fallu x changements de taxi pour y arriver

- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »

Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements
*/

class character {
    constructor (name, hp){
        this.name = name
        this.hp = hp
    }
    trajet (playlist){
        let nrbChangementsTaxi = 0
        let pastRedLight = 0

        while (pastRedLight < 30 && this.hp > 0){
            pastRedLight++
            let random = playlist[Math.floor(Math.random() * playlist.length)]
            console.log ("Patoche arrive au feu rouge n°" + pastRedLight)

            if (random == "Anissa de Wejdene"){
                this.hp -= 1
                nrbChangementsTaxi + 1
                console.log ("Patoche entend Anissa de Wejdene et change de taxi, il lui reste " + this.hp + " de sante mentale et " + (30 - pastRedLight) + " feux rouges a passer")
            } else{
                console.log ("Patoche ecoute " + random + " et passe au prochain feu, il lui reste " + this.hp + " de sante mentale et " + (30 - pastRedLight) + " feux rouges a passer")
            }

            if (this.hp == 0){
                console.log ("Patoche explose il est mort au feu n°" + pastRedLight)
                break
            }

            if (pastRedLight == 30){
                console.log("Patoche arrive chez lui, il lui reste " + this.hp + " de santé mentale")
                break
            }
        }
    }
    
}

let Patoche = new character ("Patoche" , 10)

let playlist = ["Anissa de Wejdene" , "OUIOUIOUI de Prince K" , "Cherie de Aya Nakamura" , "Laptop de Kalash" , "Elle a mal de Niska et Ninho"]

Patoche.trajet(playlist)