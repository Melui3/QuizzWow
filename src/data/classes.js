import warriorImg from '../assets/ClassIcon_warrior.webp';
import rogueImg from '../assets/ClassIcon_rogue.webp';
import hunterImg from '../assets/ClassIcon_hunter.webp';
import mageImg from '../assets/ClassIcon_mage.webp';
import warlockImg from '../assets/ClassIcon_warlock.webp';
import priestImg from '../assets/ClassIcon_priest.webp';
import shamanImg from '../assets/ClassIcon_shaman.webp';
import druidImg from '../assets/ClassIcon_druid.webp';
import demonhunterImg from '../assets/ClassIcon_demon_hunter.webp';
import monkImg from '../assets/ClassIcon_monk.webp';
import deathKnightImg from '../assets/ClassIcon_deathknight.webp';
import paladinImg from '../assets/ClassIcon_paladin.webp';
import evokerImg from '../assets/ClassIcon_evoker.webp';

export const classes = [
    {
        id: 1,
        key: 'Warrior',
        name: 'Guerrier',
        image: warriorImg,
        color: '#C79C6E',
        description: "Le mec qui ne comprend pas les strats, mais comprend qu'il faut taper fort."
    },
    {
        id: 2,
        key: 'Rogue',
        name: 'Voleur',
        image: rogueImg,
        color: '#FFF569',
        description: "Le mec qui prend 90% de ses PV à chaque combat, limite c'est lui le tank"
    },
    {
        id: 3,
        key: 'Hunter',
        name: 'Chasseur',
        image: hunterImg,
        color: '#ABD473',
        description: "Le seul mec qui peut taper en bougeant, mais qui reste dans toutes les aoe du jeu."
    },
    {
        id: 4,
        key: 'Mage',
        name: 'Mage',
        image: mageImg,
        color: '#69CCF0',
        description: "Le mec qu'on prend pour de la bouffe gratos."
    },
    {
        id: 5,
        key: 'Warlock',
        name: 'Démoniste',
        image: warlockImg,
        color: '#9482C9',
        description: "Le mec qui aggro la moitié de la map avec ses démons, qui cc pas, mais comme il ne meurt pas, ce n'est pas sa faute!."
    },
    {
        id: 6,
        key: 'Priest',
        name: 'Prêtre',
        image: priestImg,
        color: '#FFFFFF',
        description: "Le mec qui soigne tout le monde, mais qui oublie de se soigner lui-même."
    },
    {
        id: 7,
        key: 'Shaman',
        name: 'Chaman',
        image: shamanImg,
        color: '#0070DE',
        description: "Le mec qui invoque son elem de terre à chaque combat et qui fait chier tout le monde."
    },
    {
        id: 8,
        key: 'Druid',
        name: 'Druide',
        image: druidImg,
        color: '#FF7D0A',
        description: "Le mec qui change de forme toutes les 5 secondes et qu'on ne retrouve jamais en raid."
    },
    {
        id: 9,
        key: 'DemonHunter',
        name: 'Chasseur de démons',
        image: demonhunterImg,
        color: '#A330C9',
        description: "Le mec qui fonce dans le tas en hurlant et qui se plaint après de ne pas comprendre pourquoi il meurt."
    },
    {
        id: 10,
        key: 'Monk',
        name: 'Moine',
        image: monkImg,
        color: '#00FF96',
        description: "Le mec qui boit de la bière en plein combat et qui pense que ça le rend plus fort."
    },
    {
        id: 11,
        key: 'DeathKnight',
        name: 'Chevalier de la mort',
        image: deathKnightImg,
        color: '#C41F3B',
        description: "Le mec qui contre absolument tout le jeu avec son bouclier anti-jeu, et qui soigne plus que le healer"
    },
    {
        id: 12,
        key: 'Paladin',
        name: 'Paladin',
        image: paladinImg,
        color: '#F58CBA',
        description: "Le mec qui pense que parce qu'il a une aura de protection, il n'a pas besoin de faire attention."
    },
    {
        id: 13,
        key: 'Evoker',
        name: 'Evocateur',
        image: evokerImg,
        color: '#33937F',
        description: "Le mec qui crache des boules de feu et qui vole partout, mais qui oublie de regarder où il va."
    }
];

export function getClassByKey(key) {
    return classes.find(c => c.key === key);
}
