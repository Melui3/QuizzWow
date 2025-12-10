export const quizzQuestions = [
    {
        id: 1,
        question: "Face à un boss, tu es plutôt du genre à :",
        answers: [
            { text: "Foncer tête baissée et meurs parce que t'as pull avant le tank", points: { Warrior: 2, DeathKnight: 1, Paladin: 1 } },
            { text: "Lancer des sorts au hasard et pense être le meilleur DPS", points: { Mage: 2, Warlock: 2, Evoker: 1 } },
            { text: "Soigner tout le monde et oublie de te soigner", points: { Priest: 2, Druid: 1, Monk: 1 } },
            { text: "Rester dans tous les aoe et te plains de ne pas avoir de heal", points: { Hunter: 2, Rogue: 1, Shaman: 1 } },
            { text: "Changer de forme toutes les 5 secondes et personne ne te retrouve en raid", points: { Druid: 2 } },
            { text: "Boire ma bière en plein combat et me croire invincible", points: { Monk: 2 } },
            { text: "Je souffle profond partout pour faire joli", points: { Evoker: 2 } }
        ]
    },
    {
        id: 2,
        question: "En groupe, tu es celui qui :",
        answers: [
            { text: "Prend toute l'aggro avec ses pets", points: { Warlock: 2, Shaman: 1, Hunter: 1 } },
            { text: "Se plains h24 de ne pas avoir de heal", points: { Hunter: 2, Rogue: 1, Warrior: 1 } },
            { text: "Se plains h24 de ne pas avoir de mana", points: { Druid: 2, Evoker: 1, Priest: 1 } },
            { text: "Prend toute la map mais oublie ses cds défensifs", points: { DeathKnight: 2, Paladin: 1, Warrior: 1 } },
            { text: "Fonce dans le tas en hurlant et meurs sans arrêt", points: { DemonHunter: 2, Warrior: 1, DeathKnight: 1 } },
            { text: "J'essaie de protéger tout le monde mais je finis étourdi", points: { Paladin: 2 } }
        ]
    },
    {
        id: 3,
        question: "Quand le groupe te demande de faire attention aux mécaniques, tu :",
        answers: [
            { text: "Ignore complètement les mécaniques et meurs bêtement", points: { Warrior: 2, Hunter: 1, DeathKnight: 1 } },
            { text: "Balance à qui veut l'entendre que t'as un bouclier anti-jeu", points: { DeathKnight: 3, Paladin: 2 } },
            { text: "Pleure d'avance parce tu sais que tu vas devoir carry le groupe", points: { Priest: 2, Druid: 1, Monk: 1 } },
            { text: "Prévois de toutes façon de prendre toute la salle", points: { Paladin: 2, DeathKnight: 2, DemonHunter: 1 } },
            { text: "Dis que tu connais tout par cœur mais finis par te faire avoir", points: { Mage: 2, Warlock: 1, Evoker: 1 } },
            { text: "Je saute partout en volant et me fais taper par tout le monde", points: { Evoker: 2 } }
        ]
    },
    {
        id: 4,
        question: "Quand le groupe wipe, tu :",
        answers: [
            { text: "Dis que c'est la faute du tank", points: { Warrior: 2, DeathKnight: 1, Paladin: 1 } },
            { text: "Dis que c'est la faute du healer", points: { Priest: 2, Druid: 1, Monk: 1 } },
            { text: "Dis que c'est la faute des DPS", points: { Hunter: 2, Rogue: 1, Mage: 1 } },
            { text: "Dis que c'est la faute des pets", points: { Warlock: 2, Shaman: 1, Hunter: 1 } },
            { text: "Dis que c'est la faute des mécaniques que personne n'a respecté", points: { Evoker: 2, Mage: 1, Druid: 1 } },
            { text: "Je tombe en buvant ma bière", points: { Monk: 2 } }
        ]
    },
    {
        id: 5,
        question: "Ton utilité en raid se résume à :",
        answers: [
            { text: "Supporter les conneries des autres", points: { Monk: 2, Priest: 1, Druid: 1 } },
            { text: "Taper fort et faire du bruit", points: { Warrior: 2, DemonHunter: 1, DeathKnight: 1 } },
            { text: "Invoquer des trucs", points: { Warlock: 2, Mage: 1 } },
            { text: "Prendre des coups à la place des autres", points: { Paladin: 2, DeathKnight: 1, Warrior: 1 } },
            { text: "Faire du kiting et se plaindre de ne pas avoir de heal", points: { Hunter: 2, Rogue: 1, Shaman: 1 } },
            { text: "Voler en dragon et me faire taper", points: { Evoker: 3 } },
            { text: "Changer de forme pour confondre l'ennemi", points: { Druid: 2 } }
        ]
    },
    {
        id: 6,
        question: "Tu meurs parce que :",
        answers: [
            { text: "J'ai souffle profond dans le vide", points: { Evoker: 3, DemonHunter: 1 } },
            { text: "J'ai foncé dans le tas sans réfléchir", points: { Warrior: 2, DeathKnight: 1 } },
            { text: "J'ai heal mon tank, j'ai heal les dps... Je me suis pas heal", points: { Priest: 2, Druid: 1 } },
            { text: "J'ai lancé tous mes sorts au hasard", points: { Mage: 2, Warlock: 1 } },
            { text: "J'ai bu ma bière en plein combat et j'ai glissé", points: { Monk: 2 } },
            { text: "Mon familier m’a trahi", points: { Warlock: 2 } },
            { text: "Je me suis transformé en chat au lieu de me soigner", points: { Druid: 2 } }
        ]
    },
    {
        id: 7,
        question: "Tu survis parce que :",
        answers: [
            { text: "J'ai spam mon soin perso", points: { DeathKnight: 3, Paladin: 2 } },
            { text: "J'ai soigné tout le monde comme un dieu", points: { Priest: 2, Druid: 1, Monk: 1 } },
            { text: "Aucune idée, mais je suis encore là", points: { Warrior: 2, Hunter: 1, Rogue: 1 } },
            { text: "Mon familier a pris les coups à ma place", points: { Warlock: 2, Hunter: 1 } },
            { text: "J'ai volé en dragon et évité tous les dégâts", points: { Evoker: 3 } },
            { text: "J'étais AFK", points: { Hunter: 2 } }
        ]
    },
    {
        id: 8,
        question: "Ton pire moment en raid, c'est :",
        answers: [
            { text: "Quand tu prends tous les adds tout seul", points: { Warrior: 2, Paladin: 1 } },
            { text: "Quand tu te fais CC par tous les mobs", points: { DemonHunter: 2, Rogue: 1 } },
            { text: "Quand ton sort de soin critique rate", points: { Priest: 2, Druid: 1, Monk: 1 } },
            { text: "Quand ton familier meurt à cause d’un bug", points: { Warlock: 2 } },
            { text: "Quand tu tombes parce que tu volais trop haut", points: { Evoker: 3 } },
            { text: "Quand je me transforme en arbre et personne ne me remarque", points: { Druid: 2 } }
        ]
    },
    {
        id: 9,
        question: "En plein combat, tu :",
        answers: [
            { text: "Tu balances des boules de feu partout et tu oublies les mécaniques", points: { Evoker: 2, Mage: 2 } },
            { text: "Tu joues le tank mais tu meurs en premier", points: { Warrior: 2, DeathKnight: 1 } },
            { text: "Tu essayes de soigner mais tu te fais agro", points: { Priest: 2, Druid: 1 } },
            { text: "Tu fuis en volant mais tu te prends un mur", points: { Evoker: 2, DemonHunter: 1 } },
            { text: "Tu joues safe et tu regardes les autres mourir", points: { Hunter: 2, Shaman: 1 } },
            { text: "Je bois ma bière et tombe dans le vide", points: { Monk: 2 } }
        ]
    },
    {
        id: 10,
        question: "Ton excuse quand tu meurs :",
        answers: [
            { text: "Le tank a pull avant moi", points: { Warrior: 2, Paladin: 1 } },
            { text: "Le healer m'a oublié", points: { Priest: 2, Druid: 1, Monk: 1 } },
            { text: "J'étais occupé à voler et regarder le paysage", points: { Evoker: 3 } },
            { text: "Mon familier m’a trahi", points: { Warlock: 2, Hunter: 1 } },
            { text: "J'ai glissé sur la bière", points: { Monk: 2 } },
            { text: "Je me suis transformé en forme d'arbre et personne n'a vu", points: { Druid: 2 } }
        ]
    },
    {
        id: 11,
        question: "Ton plan en raid qui échoue le plus souvent :",
        answers: [
            { text: "Tout encaisser comme un tank légendaire", points: { Warrior: 2, DeathKnight: 1 } },
            { text: "Soigner tout le monde et mourir après", points: { Priest: 2, Druid: 1 } },
            { text: "Taper tout en volant et crasher", points: { Evoker: 3 } },
            { text: "Faire le kiting parfait et échouer", points: { Hunter: 2, Rogue: 1 } },
            { text: "Invoquer un démon au mauvais moment", points: { Warlock: 2 } },
            { text: "Je bois ma bière et loupe tout mon plan", points: { Monk: 2 } }
        ]
    }
];
