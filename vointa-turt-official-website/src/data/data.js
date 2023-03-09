import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import background4 from "../assets/background4.jpg";
import vointaTurt from "../assets/teams/vointaTurt.png"
import stiintaBeltiug from "../assets/teams/stiintaBeltiug.png"
import oasulNegrestiOas from "../assets/teams/oasulNegrestiOas.png"
import recoltaDorolt from "../assets/teams/recoltaDorolt.png"
import sportulBotiz from "../assets/teams/sportulBotiz.png"
import talnaOrasuNou from "../assets/teams/talnaOrasuNou.png"
import turulMicula from "../assets/teams/turulMicula.png"
import unireaPaulesti from "../assets/teams/unireaPaulesti.png"
import ZimbruGrigoreFlorin from "../assets/players/ZimbruGrigoreFlorin.png"
import noImagePlayer from "../assets/players/23.png"

export const seasonPageCategory = {
    CLASAMENT: 0, 
    REZULTATE: 1,
    MECIURI: 2
}

export const translatedDate = [
    'Ianuarie',
    'Februarie',
    'Martie',
    'Aprilie',
    'Mai',
    'Iunie',
    'Iulie',
    'August',
    'Septembrie',
    'Octombrie',
    'Noiembrie',
    'Decembrie'
]

export const translatedDays = [
    {
        short: 'Dum',
        long: 'Duminică'
    },
    {
        short: 'Luni',
        long: 'Luni'
    },
     {
        short: 'Mar',
        long: 'Marți'
    },
    {
        short: 'Mie',
        long: 'Miercuri'
    },
    {
        short: 'Joi',
        long: 'Joi'
    },  
    {
        short: 'Vin',
        long: 'Vineri'
    },
    {
        short: 'Sâm',
        long: 'Sâmbătă'
    },
]

export const players = [
{
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin
},
{
    firstName: "Ionuț Beniamin",
    lastName: "Ignat",
    number: 11,
    varsta: 21,
    position: "Fundaș",
    image: noImagePlayer
},
{
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin
},
{
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin
},
{
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin
},
{
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin
},
]

export const teams = [
{
    id: 1,
    name: 'Voința Turț',
    logo: vointaTurt,
    matchesPlayed: 10,
    wins: 1,
    draws: 0,
    loses: 9,
    goalsScored: 13,
    goalsConceded: 43,
    goals: -30,
    points: 3,
},
{
    id: 2,
    name: 'Recolta Dorolț',
    logo: recoltaDorolt,
    matchesPlayed: 10,
    wins: 8,
    draws: 1,
    loses: 1,
    goalsScored: 30,
    goalsConceded: 8,
    goals: 22,
    points: 25,
},
{
    id: 3,
    name: 'CS Oașul 1969',
    logo: oasulNegrestiOas,
    matchesPlayed: 10,
    wins: 8,
    draws: 0,
    loses: 2,
    goalsScored: 44,
    goalsConceded: 6,
    goals: 38,
    points: 24,
},
{
    id: 4,
    name: 'Talna Orașu Nou',
    logo: talnaOrasuNou,
    matchesPlayed: 10,
    wins: 7,
    draws: 1,
    loses: 2,
    goalsScored: 33,
    goalsConceded: 12,
    goals: 21,
    points: 22,
},
{
    id: 5,
    name: 'Sportul Botiz',
    logo: sportulBotiz,
    matchesPlayed: 10,
    wins: 6,
    draws: 1,
    loses: 3,
    goalsScored: 27,
    goalsConceded: 22,
    goals: 5,
    points: 19,
},
{
    id: 6,
    name: 'Știința Beltiug',
    logo: stiintaBeltiug,
    matchesPlayed: 9,
    wins: 4,
    draws: 0,
    loses: 5,
    goalsScored: 17,
    goalsConceded: 19,
    goals: -2,
    points: 12,
},
{
    id: 7,
    name: 'Turul Micula',
    logo: turulMicula,
    matchesPlayed: 9,
    wins: 2,
    draws: 1,
    loses: 6,
    goalsScored: 13,
    goalsConceded: 32,
    goals: -19,
    points: 7,
},
{
    id: 8,
    name: 'Unirea Păulești',
    logo: unireaPaulesti,
    matchesPlayed: 10,
    wins: 1,
    draws: 0,
    loses: 9,
    goalsScored: 9,
    goalsConceded: 44,
    goals: -35,
    points: 3,
}
]

export const results = [
{
    stage: 10,
    homeTeam: teams[0],
    awayTeam: teams[3],
    result: '2 - 3',
    date: '6 November 2022'
},
{
    stage: 9,
    homeTeam: teams[6],
    awayTeam: teams[0],
    result: '5 - 4',
    date: '30 October 2022'
},
{
    stage: 8,
    homeTeam: teams[0],
    awayTeam: teams[2],
    result: '0 - 7',
    date: '23 October 2022'
},
{
    stage: 7,
    homeTeam: teams[4],
    awayTeam: teams[0],
    result: '5 - 0',
    date: '16 October 2022'
},
{
    stage: 6,
    homeTeam: teams[0],
    awayTeam: teams[7],
    result: '1 - 4',
    date: '9 October 2022'
},
{
    stage: 5,
    homeTeam: teams[1],
    awayTeam: teams[0],
    result: '3 - 1',
    date: '1 October 2022'
},
{
    stage: 4,
    homeTeam: teams[0],
    awayTeam: teams[5],
    result: '0 - 3',
    date: '25 September 2022'
},
{
    stage: 3,
    homeTeam: teams[3],
    awayTeam: teams[0],
    result: '4 - 1',
    date: '18 September 2022'
},
{
    stage: 2,
    homeTeam: teams[0],
    awayTeam: teams[6],
    result: '4 - 1',
    date: '11 September 2022'
},
{
    stage: 1,
    homeTeam: teams[2],
    awayTeam: teams[0],
    result: '8 - 0',
    date: '3 September 2022'
},
]

export const matches = [
{
    stage: 10,
    homeTeam: teams[0],
    awayTeam: teams[3],
    result: '',
    date: '6 November 2022'
},
] 

export const landingPageGallery = [
{
    id: 1,
    img: background1,
    title: "background1",
    content: `ÎNGRÂNGERE(Finala județeană)| Olimpia Satu Mare 2 - 0 Voința Turț`,
},
{
    id: 2,
    img: background2,
    title: "background2",
    content: "VICTORIE(Cupa României)| Recolta Dorolț(II) 1 - 6 Voința Turț",
},
{
    id: 3,
    img: background3,
    title: "background3",
    content: "ÎNGRÂNGERE| Victoria Apa 3 - 0 Voința Turț",
},
{
    id: 4,
    img: background4,
    title: "background4",
    content: "VICTORIE| CSM Satu Mare(II) 0 - 9 Voința Turț",
},
];

export const newsLandingPage = [
{   
    id: 1,
    column: 'span 4',
    row: 'span 4',
    content: {
        imageSrc: background1,
        date: '18/02/2023 17:20:00',
        type: 'DELEGĂRI',
        message: 'Weekend 5/6 noiembrie 2022'
    }
},
{
    id: 2,
    column: 'span 3',
    row: 'span 4',
    content: {
        imageSrc: background4,
        date: '18/02/2023 17:20:00',
        type: 'DELEGĂRI',
        message: 'Weekend 5/6 noiembrie 2022'
    }
},
{
    id: 3,
    column: 'span 3',
    row: 'span 4',
    content: {
        imageSrc: background3,
        date: '18/02/2023 17:20:00',
        type: 'DELEGĂRI',
        message: 'Weekend 5/6 noiembrie 2022'
    }
},
{
    id: 4,
    column: 'span 3',
    row: 'span 4',
    content: {
        imageSrc: background1,
        date: '18/02/2023 17:20:00',
        type: 'REZULTATE',
        message: 'VICTORIE | Voința Turț 3-2 Turul Micula'
    }
},
{
    id: 5,
    column: 'span 4',
    row: 'span 4',
    content: {
        imageSrc: background2,
        date: '18/02/2023 17:20:00',
        type: 'DELEGĂRI',
        message: 'Weekend 5/6 noiembrie 2022'
    }
},
{
    id: 6,
    column: 'span 3',
    row: 'span 4',
    content: {
        imageSrc: background3,
        date: '18/02/2023 17:20:00',
        type: 'DELEĂRI',
        message: 'Weekend 5/6 noiembrie 2022'
    }
},
]
