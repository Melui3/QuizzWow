export const quizzQuestions = [
    {
        id: 1,
        question: "Face à un boss, tu es plutôt du genre à :",
        answers: [
            { text: "Foncer tête baissée et meurs parce que t'as pull avant le tank", points: { Guerrier: 2, "Chevalier de la mort": 2 } },
            { text: "Lancer des sorts au hasard et pense être le meilleur DPS", points: { Mage: 2, Démoniste: 2, Evocateur: 1 } },
            { text: "Soigner tout le monde et oublie de te soigner", points: { Prêtre: 2, Druide: 1, Moine: 1 } },
            { text: "Rester dans tous les aoe et te plains de ne pas avoir de heal", points: { Chasseur: 2, Voleur: 1, Chaman: 1 } },
            { text: "Changer de forme toutes les 5 secondes et personne ne te retrouve en raid", points: { Druide: 2 } },
            { text: "Boire ma bière en plein combat et me croire invincible", points: { Moine: 2 } },
            { text: "Je vole en dragon et me prends un mur", points: { Evocateur: 2 } }
        ]
    },
    {
        id: 2,
        question: "En groupe, tu es celui qui :",
        answers: [
            { text: "Prend toute l'aggro avec ses pets", points: { Démoniste: 2, Chaman: 1, Chasseur: 1 } },
            { text: "Se plains h24 de ne pas avoir de heal", points: { Chasseur: 2, Voleur: 1, Guerrier: 1 } },
            { text: "Se plains h24 de ne pas avoir de mana", points: { Druide: 2, Evocateur: 1, Prêtre: 1 } },
            { text: "Prend toute la map mais oublie ses cds défensifs", points: { "Chevalier de la mort": 2, Paladin: 1, Guerrier: 1 } },
            { text: "Fonce dans le tas en hurlant et meurs sans arrêt", points: { "Chasseur de démons": 2, Guerrier: 1, "Chevalier de la mort": 1 } },
            { text: "J'essaie de protéger tout le monde mais je finis étourdi", points: { Paladin: 2 } }
        ]
    },
    {
        id: 3,
        question: "Quand le groupe te demande de faire attention aux mécaniques, tu :",
        answers: [
            { text: "Ignore complètement les mécaniques et meurs bêtement", points: { Guerrier: 2, Chasseur: 1, "Chevalier de la mort": 1 } },
            { text: "Balance à qui veut l'entendre que t'as un bouclier anti-jeu", points: { "Chevalier de la mort": 2, Paladin: 1 } },
            { text: "Pleure d'avance parce tu sais que tu vas devoir carry le groupe", points: { Prêtre: 2, Druide: 1, Moine: 1 } },
            { text: "Prévois de toutes façon de prendre toute la salle", points: { Paladin: 2, "Chevalier de la mort": 1, "Chasseur de démons": 1 } },
            { text: "Dis que tu connais tout par cœur mais finis par te faire avoir", points: { Mage: 2, Démoniste: 1, Evocateur: 1 } },
            { text: "Je saute partout en volant et me fais taper par tout le monde", points: { Evocateur: 2 } }
        ]
    },
    {
        id: 4,
        question: "Quand le groupe wipe, tu :",
        answers: [
            { text: "Dis que c'est la faute du tank", points: { Guerrier: 2, "Chevalier de la mort": 1, Paladin: 1 } },
            { text: "Dis que c'est la faute du healer", points: { Prêtre: 2, Druide: 1, Moine: 1 } },
            { text: "Dis que c'est la faute des DPS", points: { Chasseur: 2, Voleur: 1, Mage: 1 } },
            { text: "Dis que c'est la faute des pets", points: { Démoniste: 2, Chaman: 1, Chasseur: 1 } },
            { text: "Dis que c'est la faute des mécaniques que personne n'a respecté", points: { Evocateur: 2, Mage: 1, Druide: 1 } },
            { text: "Je tombe en buvant ma bière", points: { Moine: 2 } }
        ]
    },
    {
        id: 5,
        question: "Ton utilité en raid se résume à :",
        answers: [
            { text: "Supporter les conneries des autres", points: { Moine: 2, Prêtre: 1, Druide: 1 } },
            { text: "Taper fort et faire du bruit", points: { Guerrier: 2, "Chasseur de démons": 1, "Chevalier de la mort": 1 } },
            { text: "Invoquer des trucs", points: { Démoniste: 2, Mage: 1 } },
            { text: "Prendre des coups à la place des autres", points: { Paladin: 2, "Chevalier de la mort": 1, Guerrier: 1 } },
            { text: "Faire du kiting et se plaindre de ne pas avoir de heal", points: { Chasseur: 2, Voleur: 1, Chaman: 1 } },
            { text: "Voler en dragon et me faire taper", points: { Evocateur: 3 } },
            { text: "Changer de forme pour confondre l'ennemi", points: { Druide: 2 } }
        ]
    },
    {
        id: 6,
        question: "Tu meurs parce que :",
        answers: [
            { text: "J'étais en train de voler et je suis tombé sur un boss", points: { Evocateur: 3, "Chasseur de démons": 1 } },
            { text: "J'ai foncé dans le tas sans réfléchir", points: { Guerrier: 2, Chasseur: 1 } },
            { text: "J'ai essayé de soigner tout le monde et j'ai oublié de me soigner", points: { Prêtre: 2, Druide: 1 } },
            { text: "J'ai lancé tous mes sorts au hasard", points: { Mage: 2, Démoniste: 1 } },
            { text: "J'ai bu ma bière en plein combat et j'ai glissé", points: { Moine: 2 } },
            { text: "Mon familier m’a trahi", points: { Démoniste: 2 } },
            { text: "Je me suis transformé en ours au mauvais moment", points: { Druide: 2 } }
        ]
    },
    {
        id: 7,
        question: "Ton pire moment en raid, c'est :",
        answers: [
            { text: "Quand tu prends tous les adds tout seul", points: { Guerrier: 2, Paladin: 1 } },
            { text: "Quand tu te fais CC par tous les mobs", points: { "Chasseur de démons": 2, Voleur: 1 } },
            { text: "Quand ton sort de soin critique rate", points: { Prêtre: 2, Druide: 1, Moine: 1 } },
            { text: "Quand ton familier meurt à cause d’un bug", points: { Démoniste: 2 } },
            { text: "Quand tu tombes parce que tu volais trop haut", points: { Evocateur: 3 } },
            { text: "Quand je me transforme en arbre et personne ne me remarque", points: { Druide: 2 } }
        ]
    },
    {
        id: 8,
        question: "En plein combat, tu :",
        answers: [
            { text: "Tu balances des boules de feu partout et tu oublies les mécaniques", points: { Evocateur: 2, Mage: 2 } },
            { text: "Tu joues le tank mais tu meurs en premier", points: { Guerrier: 2, "Chevalier de la mort": 1 } },
            { text: "Tu essayes de soigner mais tu te fais agro", points: { Prêtre: 2, Druide: 1 } },
            { text: "Tu fuis en volant mais tu te prends un mur", points: { Evocateur: 2, "Chasseur de démons": 1 } },
            { text: "Tu joues safe et tu regardes les autres mourir", points: { Chasseur: 2, Chaman: 1 } },
            { text: "Je bois ma bière et tombe dans le vide", points: { Moine: 2 } }
        ]
    },
    {
        id: 9,
        question: "Ton excuse quand tu meurs :",
        answers: [
            { text: "Le tank a pull avant moi", points: { Guerrier: 2, Paladin: 1 } },
            { text: "Le healer m'a oublié", points: { Prêtre: 2, Druide: 1, Moine: 1 } },
            { text: "J'étais occupé à voler et regarder le paysage", points: { Evocateur: 3 } },
            { text: "Mon familier m’a trahi", points: { Démoniste: 2, Chasseur: 1 } },
            { text: "J'ai glissé sur la bière", points: { Moine: 2 } },
            { text: "Je me suis transformé en forme d'arbre et personne n'a vu", points: { Druide: 2 } }
        ]
    },
    {
        id: 10,
        question: "Ton plan en raid qui échoue le plus souvent :",
        answers: [
            { text: "Tout encaisser comme un tank légendaire", points: { Guerrier: 2, "Chevalier de la mort": 1 } },
            { text: "Soigner tout le monde et mourir après", points: { Prêtre: 2, Druide: 1 } },
            { text: "Taper tout en volant et crasher", points: { Evocateur: 3 } },
            { text: "Faire le kiting parfait et échouer", points: { Chasseur: 2, Voleur: 1 } },
            { text: "Invoquer un démon au mauvais moment", points: { Démoniste: 2 } },
            { text: "Je bois ma bière et loupe tout mon plan", points: { Moine: 2 } }
        ]
    }
];
