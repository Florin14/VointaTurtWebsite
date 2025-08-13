import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import background4 from "../assets/background4.jpg";
import background5 from "../assets/background5.jpg";
import background6 from "../assets/background6.jpg";
import background7 from "../assets/background7.jpg";
import vointaTurt from "../assets/teams/vointaTurt.png";
import stiintaBeltiug from "../assets/teams/stiintaBeltiug.png";
import oasulNegrestiOas from "../assets/teams/oasulNegrestiOas.png";
import recoltaDorolt from "../assets/teams/recoltaDorolt.png";
import sportulBotiz from "../assets/teams/sportulBotiz.png";
import talnaOrasuNou from "../assets/teams/talnaOrasuNou.png";
import turulMicula from "../assets/teams/turulMicula.png";
import unireaPaulesti from "../assets/teams/unireaPaulesti.png";
import ZimbruGrigoreFlorin from "../assets/players/ZimbruGrigoreFlorin.png";
import noImagePlayer from "../assets/players/23.png";

export const seasonPageCategory = {
  CLASAMENT: 0,
  REZULTATE: 1,
  MECIURI: 2,
};

export const translatedDate = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
];

export const translatedDays = [
  {
    short: "Dum",
    long: "Duminică",
  },
  {
    short: "Luni",
    long: "Luni",
  },
  {
    short: "Mar",
    long: "Marți",
  },
  {
    short: "Mie",
    long: "Miercuri",
  },
  {
    short: "Joi",
    long: "Joi",
  },
  {
    short: "Vin",
    long: "Vineri",
  },
  {
    short: "Sâm",
    long: "Sâmbătă",
  },
];

export const players = [
  {
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin,
  },
  {
    firstName: "Ionuț Beniamin",
    lastName: "Ignat",
    number: 11,
    varsta: 21,
    position: "Fundaș",
    image: noImagePlayer,
  },
  {
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin,
  },
  {
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin,
  },
  {
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin,
  },
  {
    firstName: "Florin",
    lastName: "Zimbru",
    number: 14,
    varsta: 20,
    position: "Fundaș",
    image: ZimbruGrigoreFlorin,
  },
];

export const teams = [
  {
    id: 1,
    name: "Voința Turț",
    logo: vointaTurt,
    matchesPlayed: 14,
    wins: 2,
    draws: 0,
    loses: 12,
    goalsScored: 19,
    goalsConceded: 52,
    goals: -33,
    points: 6,
  },
  {
    id: 2,
    name: "Recolta Dorolț",
    logo: recoltaDorolt,
    matchesPlayed: 14,
    wins: 11,
    draws: 1,
    loses: 2,
    goalsScored: 37,
    goalsConceded: 14,
    goals: 23,
    points: 34,
  },
  {
    id: 3,
    name: "CS Oașul 1969",
    logo: oasulNegrestiOas,
    matchesPlayed: 14,
    wins: 12,
    draws: 0,
    loses: 2,
    goalsScored: 59,
    goalsConceded: 8,
    goals: 51,
    points: 36,
  },
  {
    id: 4,
    name: "Talna Orașu Nou",
    logo: talnaOrasuNou,
    matchesPlayed: 14,
    wins: 10,
    draws: 2,
    loses: 2,
    goalsScored: 46,
    goalsConceded: 15,
    goals: 31,
    points: 32,
  },
  {
    id: 5,
    name: "Sportul Botiz",
    logo: sportulBotiz,
    matchesPlayed: 14,
    wins: 7,
    draws: 2,
    loses: 5,
    goalsScored: 34,
    goalsConceded: 31,
    goals: 3,
    points: 23,
  },
  {
    id: 6,
    name: "Știința Beltiug",
    logo: stiintaBeltiug,
    matchesPlayed: 14,
    wins: 7,
    draws: 0,
    loses: 7,
    goalsScored: 33,
    goalsConceded: 31,
    goals: 2,
    points: 21,
  },
  {
    id: 7,
    name: "Turul Micula",
    logo: turulMicula,
    matchesPlayed: 14,
    wins: 3,
    draws: 1,
    loses: 10,
    goalsScored: 18,
    goalsConceded: 48,
    goals: -30,
    points: 10,
  },
  {
    id: 8,
    name: "Unirea Păulești",
    logo: unireaPaulesti,
    matchesPlayed: 14,
    wins: 1,
    draws: 0,
    loses: 13,
    goalsScored: 9,
    goalsConceded: 56,
    goals: -47,
    points: 3,
  },
];

export const results2022_2023 = [
  {
    stage: 14,
    homeTeamId: teams[0]?.id,
    awayTeamId: teams[4]?.id,
    result: "2 - 4",
    date: "14 April 2023",
  },
  {
    stage: 13,
    homeTeamId: teams[7]?.id,
    awayTeamId: teams[0]?.id,
    result: "0 - 3",
    date: "8 April 2023",
  },
  {
    stage: 12,
    homeTeamId: teams[0]?.id,
    awayTeamId: teams[1]?.id,
    result: "0 - 1",
    date: "2 April 2023",
  },
  {
    stage: 11,
    homeTeamId: teams[5]?.id,
    awayTeamId: teams[0]?.id,
    result: "4 - 1",
    date: "25 March 2023",
  },
  {
    stage: 10,
    homeTeamId: teams[0]?.id,
    awayTeamId: teams[3]?.id,
    result: "2 - 3",
    date: "6 November 2022",
  },
  {
    stage: 9,
    homeTeamId: teams[6]?.id,
    awayTeamId: teams[0]?.id,
    result: "5 - 4",
    date: "30 October 2022",
  },
  {
    stage: 8,
    homeTeamId: teams[0]?.id,
    awayTeamId: teams[2]?.id,
    result: "0 - 7",
    date: "23 October 2022",
  },
  {
    stage: 7,
    homeTeamId: teams[4]?.id,
    awayTeamId: teams[0]?.id,
    result: "5 - 0",
    date: "16 October 2022",
  },
  {
    stage: 6,
    homeTeamId: teams[0]?.id,
    awayTeamId: teams[7]?.id,
    result: "1 - 4",
    date: "9 October 2022",
  },
  {
    stage: 5,
    homeTeamId: teams[1]?.id,
    awayTeamId: teams[0]?.id,
    result: "3 - 1",
    date: "1 October 2022",
  },
  {
    stage: 4,
    homeTeamId: teams[0]?.id,
    awayTeamId: teams[5]?.id,
    result: "0 - 3",
    date: "25 September 2022",
  },
  {
    stage: 3,
    homeTeamId: teams[3]?.id,
    awayTeamId: teams[0]?.id,
    result: "4 - 1",
    date: "18 September 2022",
  },
  {
    stage: 2,
    homeTeamId: teams[0]?.id,
    awayTeamId: teams[6]?.id,
    result: "4 - 1",
    date: "11 September 2022",
  },
  {
    stage: 1,
    homeTeamId: teams[2]?.id,
    awayTeamId: teams[0]?.id,
    result: "8 - 0",
    date: "3 September 2022",
  },
];

export const matches2022_2023 = [
//   {
//     stage: 10,
//     homeTeamId: teams[0]?.id,
//     awayTeamId: teams[3]?.id,
//     result: "",
//     date: "6 November 2022",
//   },
];

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
    column: "span 4",
    row: "span 4",
    content: {
      imageSrc: background1,
      date: "18/02/2023 17:20:00",
      type: "DELEGĂRI",
      message: "Weekend 5/6 noiembrie 2022",
    },
  },
  {
    id: 2,
    column: "span 3",
    row: "span 4",
    content: {
      imageSrc: background4,
      date: "18/02/2023 17:20:00",
      type: "DELEGĂRI",
      message: "Weekend 5/6 noiembrie 2022",
    },
  },
  {
    id: 3,
    column: "span 3",
    row: "span 4",
    content: {
      imageSrc: background3,
      date: "18/02/2023 17:20:00",
      type: "DELEGĂRI",
      message: "Weekend 5/6 noiembrie 2022",
    },
  },
  {
    id: 4,
    column: "span 3",
    row: "span 4",
    content: {
      imageSrc: background1,
      date: "18/02/2023 17:20:00",
      type: "REZULTATE",
      message: "VICTORIE | Voința Turț 3-2 Turul Micula",
    },
  },
  {
    id: 5,
    column: "span 4",
    row: "span 4",
    content: {
      imageSrc: background2,
      date: "18/02/2023 17:20:00",
      type: "DELEGĂRI",
      message: "Weekend 5/6 noiembrie 2022",
    },
  },
  {
    id: 6,
    column: "span 3",
    row: "span 4",
    content: {
      imageSrc: background3,
      date: "18/02/2023 17:20:00",
      type: "DELEGĂRI",
      message: "Weekend 5/6 noiembrie 2022",
    },
  },
];




export const slidesData = [
  {
    id: "001",
    img: background5,
    title: "Finde Premium Products",
    cta: "SHOP NOW",
  },
  {
    id: "002",
    img: background7,
    title: "Get all the Accessories you need",
    cta: "SHOP NOW",
  },
  {
    id: "003",
    img: background2,
    title: "Wide  range of colors",
    cta: "SHOP NOW",
  },
];