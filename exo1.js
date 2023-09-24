"use strict"

console.log("Je m'appelle Zoubida, j'ai 19 ans et je reve de rentrer chez moi")
console.log("C'est parti :")
console.log("  ")

let santéZoubida=10              // variable de la santé mentale de Zoubida, qui varie selon le choixRadio
let feuxrouge=30                 // variable du nombre de feu rouge
let changementTaxi=0             // variable du nombre de changement de taxi effectué par Zoubida pour atteindre sa maison
let musique=["Wejdene - Anissa", "Bupropion - Lève la tête", "Batboy - Hier", "Juice WRLD - Wishing Well", "Laylow - Millions Flowerz"]
//            index 0                 index 1                 index 2          index 3                       index 4
for(let i=0;i<30;i++){           // i++ = i+1, c'est la boucle.
    let choixRadio = musique[Math.floor(Math.random()*5)]      // permet de randomizer la radio qui diffuse la musique grace a la variable choixRadio
    if (choixRadio==musique[0]) {                              // ("Wejdene - Anissa") est le son index 0
        santéZoubida--           // -- = -1 donc prend 1 dégat de santé mentale
        changementTaxi++         // ++ = +1 donc il décide de changer de taxi
        console.log("💢 Changez cette musique, je deteste " + choixRadio + "!! Plus que " + santéZoubida + " points de vie et il reste " + feuxrouge + " feux rouges.");
        if (santéZoubida==0){    // si la santé est égale à zéro
            console.log("💣");
            console.log("explosion... 💥 repose en paix")
            break
        }
    }

    feuxrouge=feuxrouge-1       // le compteur de feux rouge diminue
    if (feuxrouge!=0 && choixRadio!=musique[0]){     // si feu rouge est différent ou égal à 0, ET que la musique à la radio n'est pas anissa de wejdene, alors j'écris la phrase de fin de trajet.
        console.log("🚕 La musique est " + choixRadio + " et la route indique encore " + feuxrouge + " feux rouges avant d'arriver à la maison");
    } else if (changementTaxi>= 5 && feuxrouge==0) { // si le changement de taxi est superieur ou égal à 5 et que Zoubida est arrivé, alors spécifié une phrase à son périple !
        console.log("YOUPI !!! 🎉 Zoubida est arrivé au bout de " + changementTaxi + " changement de taxi. Sa santé mentale est de " + santéZoubida + " et n'est pas passer loin de la catastrophe.");
    } else if (changementTaxi < 5 && feuxrouge==0) { // sinon, seulement préciser son arrivé.
        console.log("🏠 Zoubida est arrivé au bout de " + changementTaxi + " changement de taxi.");
    }
}
