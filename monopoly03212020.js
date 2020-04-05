/*jshint esversion: 6 */

// COLORED PROPERTIES

let mediterraneanAvenue = {
  boardSpace: $("#mediterranean-ave"),
  title: "Mediterranean Avenue",
  type: "coloredProperty",
  color: "purple",
  price: 60,
  priceHouse: 50,
  mortgage: 30,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  inMonopoly: false,
  playerLanded: null,
  rent: [2, 10, 30, 90, 160, 250, 4],
  result: function() {
    landOn(mediterraneanAvenue);
  },
};

let balticAvenue = {
  boardSpace: $("#baltic-ave"),
  title: "Baltic Avenue",
  type: "coloredProperty",
  color: "purple",
  price: 60,
  priceHouse: 50,
  mortgage: 30,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  inMonopoly: false,
  playerLanded: null,
  rent: [4, 20, 60, 180, 320, 450, 8],
  result: function() {
    landOn(balticAvenue);
  },
};

let orientalAvenue = {
  boardSpace: $("#oriental-ave"),
  title: "Oriental Avenue",
  type: "coloredProperty",
  color: "light-blue",
  price: 100,
  priceHouse: 50,
  mortgage: 50,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [6, 30, 90, 270, 400, 550, 12],
  result: function() {
    landOn(orientalAvenue);
  },
};

let vermontAvenue = {
  boardSpace: $("#vermont-ave"),
  title: "Vermont Avenue",
  type: "coloredProperty",
  color: "light-blue",
  price: 100,
  priceHouse: 50,
  mortgage: 50,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [6, 30, 90, 270, 400, 550, 12],
  result: function() {
    landOn(vermontAvenue);
  },
};

let connecticutAvenue = {
  boardSpace: $("#connecticut-ave"),
  title: "Connecticut Avenue",
  type: "coloredProperty",
  color: "light-blue",
  price: 120,
  priceHouse: 50,
  mortgage: 60,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [8, 40, 100, 300, 450, 600, 16],
  result: function() {
    landOn(connecticutAvenue);
  },
};

let stCharlesPlace = {
  boardSpace: $("#st-charles-place"),
  title: "St. Charles Place",
  type: "coloredProperty",
  color: "magenta",
  price: 140,
  priceHouse: 100,
  mortgage: 70,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [10, 50, 150, 450, 625, 750, 20],
  result: function() {
    landOn(stCharlesPlace);
  },
};

let statesAvenue = {
  boardSpace: $("#states-ave"),
  title: "States Avenue",
  type: "coloredProperty",
  color: "magenta",
  price: 140,
  priceHouse: 100,
  mortgage: 70,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [10, 50, 150, 450, 625, 750, 20],
  result: function() {
    landOn(statesAvenue);
  },
};

let virginiaAvenue = {
  boardSpace: $("#virginia-ave"),
  title: "Virginia Avenue",
  type: "coloredProperty",
  color: "magenta",
  price: 160,
  priceHouse: 100,
  mortgage: 80,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [12, 60, 180, 500, 700, 900, 24],
  result: function() {
    landOn(virginiaAvenue);
  },
};

let stJamesPlace = {
  boardSpace: $("#st-james-place"),
  title: "St. James Place",
  type: "coloredProperty",
  color: "orange",
  price: 180,
  priceHouse: 100,
  mortgage: 90,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [14, 70, 200, 550, 750, 950, 28],
  result: function() {
    landOn(stJamesPlace);
  },
};

let tenneseeAvenue = {
  boardSpace: $("#tennessee-ave"),
  title: "Tennessee Avenue",
  type: "coloredProperty",
  color: "orange",
  price: 180,
  priceHouse: 100,
  mortgage: 90,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [14, 70, 200, 550, 750, 950, 28],
  result: function() {
    landOn(tenneseeAvenue);
  },
};

let newYorkAvenue = {
  boardSpace: $("#new-york-ave"),
  title: "New York Avenue",
  type: "coloredProperty",
  color: "orange",
  price: 200,
  priceHouse: 100,
  mortgage: 100,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [16, 80, 220, 600, 800, 1000, 32],
  result: function() {
    landOn(newYorkAvenue);
  },
};

let kentuckyAvenue = {
  boardSpace: $("#kentucky-ave"),
  title: "Kentucky Avenue",
  type: "coloredProperty",
  color: "red",
  price: 220,
  priceHouse: 150,
  mortgage: 110,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [18, 90, 250, 700, 875, 1050, 36],
  result: function() {
    landOn(kentuckyAvenue);
  },
};

let indianaAvenue = {
  boardSpace: $("#indiana-ave"),
  title: "Indiana Avenue",
  type: "coloredProperty",
  color: "red",
  price: 220,
  priceHouse: 150,
  mortgage: 110,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [18, 90, 250, 700, 875, 1050, 36],
  result: function() {
    landOn(indianaAvenue);
  },
};

let illinoisAvenue = {
  boardSpace: $("#illinois-ave"),
  title: "Illinois Avenue",
  type: "coloredProperty",
  color: "red",
  price: 240,
  priceHouse: 150,
  mortgage: 120,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [20, 100, 300, 750, 925, 1100, 40],
  result: function() {
    landOn(illinoisAvenue);
  },
};

let atlanticAvenue = {
  boardSpace: $("#atlantic-ave"),
  title: "Atlantic Avenue",
  type: "coloredProperty",
  color: "yellow",
  price: 260,
  priceHouse: 150,
  mortgage: 130,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [22, 110, 330, 800, 975, 1150, 44],
  result: function() {
    landOn(atlanticAvenue);
  },
};

let ventnorAvenue = {
  boardSpace: $("#ventnor-ave"),
  title: "Ventnor Avenue",
  type: "coloredProperty",
  color: "yellow",
  price: 260,
  priceHouse: 150,
  mortgage: 130,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [22, 110, 330, 800, 975, 1150, 44],
  result: function() {
    landOn(ventnorAvenue);
  },
};

let marvinGardins = {
  boardSpace: $("#marvin-gardens"),
  title: "Marvin Gardens",
  type: "coloredProperty",
  color: "yellow",
  price: 280,
  priceHouse: 150,
  mortgage: 140,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [24, 120, 360, 850, 1025, 1200, 48],
  result: function() {
    landOn(marvinGardins);
  },
};

let pacificAvenue = {
  boardSpace: $("#pacific-ave"),
  title: "Pacific Avenue",
  type: "coloredProperty",
  color: "green",
  price: 300,
  priceHouse: 200,
  mortgage: 150,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [26, 130, 390, 900, 1100, 1275, 52],
  result: function() {
    landOn(pacificAvenue);
  },
};

let northCarolinaAvenue = {
  boardSpace: $("#north-carolina-ave"),
  title: "North Carolina Avenue",
  type: "coloredProperty",
  color: "green",
  price: 300,
  priceHouse: 200,
  mortgage: 150,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [26, 130, 300, 900, 1100, 1275, 52],
  result: function() {
    landOn(northCarolinaAvenue);
  },
};

let pennsylvaniaAvenue = {
  boardSpace: $("#pennsylvania-ave"),
  title: "Pennsylvania Avenue",
  type: "coloredProperty",
  color: "green",
  price: 320,
  priceHouse: 200,
  mortgage: 160,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [28, 150, 450, 1000, 1200, 1400, 56],
  result: function() {
    landOn(pennsylvaniaAvenue);
  },
};

let parkPlace = {
  boardSpace: $("#park-place"),
  title: "Park Place",
  type: "coloredProperty",
  color: "blue",
  price: 350,
  priceHouse: 200,
  mortgage: 175,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [35, 175, 500, 1100, 1300, 1500, 70],
  result: function() {
    landOn(parkPlace);
  },
};

let boardwalk = {
  boardSpace: $("#boardwalk"),
  title: "Boardwalk",
  type: "coloredProperty",
  color: "blue",
  price: 400,
  priceHouse: 200,
  mortgage: 200,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [50, 200, 600, 1400, 1700, 2000, 100],
  result: function() {
    landOn(boardwalk);
  },
};

// RAILROADS

let readingRailroad = {
  boardSpace: $("#reading-railroad"),
  type: "railroad",
  title: "Reading Railroad",
  price: 200,
  mortgage: 100,
  isMortgaged: false,
  owner: null,
  playerLanded: null,
  rent: [25, 50, 100, 200],
  result: function() {
    landOn(readingRailroad);
  },
};

let pennsylvaniaRailroad = {
  boardSpace: $("#pennsylvania-railroad"),
  type: "railroad",
  title: "Pennsylvania Railroad",
  price: 200,
  mortgage: 100,
  isMortgaged: false,
  owner: null,
  playerLanded: null,
  rent: [25, 50, 100, 200],
  result: function() {
    landOn(pennsylvaniaRailroad);
  },
};

let bORailroad = {
  boardSpace: $("#bo-railroad"),
  type: "railroad",
  title: "B&O Railroad",
  price: 200,
  mortgage: 100,
  isMortgaged: false,
  owner: null,
  playerLanded: null,
  rent: [25, 50, 100, 200],
  result: function() {
    landOn(bORailroad);
  },
};

let shortLine = {
  boardSpace: $("#short-line"),
  type: "railroad",
  title: "Short Line Railroad",
  price: 200,
  mortgage: 100,
  isMortgaged: false,
  owner: null,
  playerLanded: null,
  rent: [25, 50, 100, 200],
  result: function() {
    landOn(shortLine);
  },
};

// UTILITIES

let electricCompany = {
  boardSpace: $("#electric-company"),
  title: "Electric Company",
  type: "utility",
  price: 150,
  mortgage: 75,
  isMortgaged: false,
  owner: null,
  playerLanded: null,
  utilityClass: "electric",
  result: function() {
    landOn(electricCompany);
  },
};

let waterWorks = {
  boardSpace: $("#water-works"),
  title: "Water Works",
  type: "utility",
  price: 150,
  mortgage: 75,
  isMortgaged: false,
  owner: null,
  playerLanded: null,
  utilityClass: "water",
  result: function() {
    landOn(waterWorks);
  },
};

// CORNER SPACES

let go = {
  boardSpace: $("#go"),
  title: "Go",
  type: "go",
  playerLanded: null,
  result: function() {
    landOn(go);
  },
};

let jail = {
  boardSpace: $("#jail"),
  title: "Jail",
  type: "jail",
  playerLanded: null,
  playersInJail: [],
  result: function() {
    landOn(jail);
  },
};

let freeParking = {
  boardSpace: $("#free-parking"),
  title: "Free Parking",
  type: "freeParking",
  jackpot: 0,
  playerLanded: null,
  result: function() {
    landOn(freeParking);
  },
};

let goToJail = {
  boardSpace: $("#go-to-jail"),
  title: "Go To Jail",
  type: "goToJail",
  playerLanded: null,
  result: function() {
    landOn(goToJail);
  },
};

// OTHER SPACES
let chance1 = {
  boardSpace: $("#chance1"),
  title: "Chance",
  type: "chance",
  playerLanded: null,
  result: function() {
    landOn(chance1);
  },
};

let chance2 = {
  boardSpace: $("#chance2"),
  title: "Chance",
  type: "chance",
  playerLanded: null,
  result: function() {
    landOn(chance2);
  },
};

let chance3 = {
  boardSpace: $("#chance3"),
  title: "Chance",
  type: "chance",
  playerLanded: null,
  result: function() {
    landOn(chance3);
  },
};

let communityChest1 = {
  boardSpace: $("#community-chest1"),
  title: "Community Chest",
  type: "communityChest",
  playerLanded: null,
  result: function() {
    landOn(communityChest1);
  },
};

let communityChest2 = {
  boardSpace: $("#community-chest2"),
  title: "Community Chest",
  type: "communityChest",
  playerLanded: null,
  result: function() {
    landOn(communityChest2);
  },
};

let communityChest3 = {
  boardSpace: $("#community-chest3"),
  title: "Community Chest",
  type: "communityChest",
  playerLanded: null,
  result: function() {
    landOn(communityChest3);
  },
};

let incomeTax = {
  boardSpace: $("#income-tax"),
  title: "Income Tax",
  playerLanded: null,
  result: function() {
    landOn(incomeTax);
  },
};

let luxuryTax = {
  boardSpace: $("#luxury-tax"),
  title: "Luxury Tax",
  playerLanded: null,
  result: function() {
    landOn(luxuryTax);
  },
};

chanceDeck = [
  // {
  //   text: "Advance to Go.",
  //   buttonText: "Okay",
  //   result: function() {
  //     let player = gameStatus.currentPlayerTurn;
  //     let numberToAdvance = 40 - board.indexOf(player.onSpace);
  //     let toGo = {
  //       total: numberToAdvance,
  //     };
  //     moveToken(toGo, player);
  //   }
  // },
  // {
  //   text: "Advance to Illinois Avenue.",
  //   buttonText: "Okay",
  //   result: function() {
  //     let player = gameStatus.currentPlayerTurn;
  //     let numberToAdvance;
  //     if (board.indexOf(player.onSpace) > 24) {
  //       numberToAdvance = 28;
  //     }
  //     else {
  //       numberToAdvance = 24 - board.indexOf(player.onSpace);
  //     }
  //     let toIllinoisAvenue = {
  //       total: numberToAdvance,
  //     };
  //     moveToken(toIllinoisAvenue, player);
  //   }
  // },
  {
    text: "Advance to the nearest Utility.",
    buttonText: "Okay",
    result: function() {
      let player = gameStatus.currentPlayerTurn;
      let numberToAdvance;
      if (player.onSpace === chance1) {
        numberToAdvance = 5;
      }
      else if (player.onSpace === chance2) {
        numberToAdvance = 6;
      }
      else if (player.onSpace === chance3) {
        numberToAdvance = 16;
      }
      multiplier = 10;
      let toUtility = {
        total: numberToAdvance,
      };
      moveToken(toUtility, player);
    }
  }

];

// chanceDeck = [
//
//   {
//     text: "Advance to Illinois Avenue.",
//     buttonText: "Go",
//     cardResult: function() {
//       let player = gameStatus.currentPlayerTurn;
//       let numberToAdvance;
//       if (board.indexOf(player.onSpace) === 36) {
//         numberToAdvance = 27;
//       }
//       else {
//         numberToAdvance = board.indexOf(illinoisAvenue) - board.indexOf(player.onSpace);
//       }
//       let toIllinoisAvenue = {
//         total: numberToAdvance,
//       };
//       moveToken(toIllinoisAvenue, player);
//     }
// },
// ];

// BOARD

const board = [
  go,
  mediterraneanAvenue,
  communityChest1,
  balticAvenue,
  incomeTax,
  readingRailroad,
  orientalAvenue,
  chance1,
  vermontAvenue,
  connecticutAvenue,
  jail,
  stCharlesPlace,
  electricCompany,
  statesAvenue,
  virginiaAvenue,
  pennsylvaniaRailroad,
  stJamesPlace,
  communityChest2,
  tenneseeAvenue,
  newYorkAvenue,
  freeParking,
  kentuckyAvenue,
  chance2,
  indianaAvenue,
  illinoisAvenue,
  bORailroad,
  atlanticAvenue,
  ventnorAvenue,
  waterWorks,
  marvinGardins,
  goToJail,
  pacificAvenue,
  northCarolinaAvenue,
  communityChest3,
  pennsylvaniaAvenue,
  shortLine,
  chance3,
  parkPlace,
  luxuryTax,
  boardwalk
];

const colors = ["purple", "light-blue", "magenta", "orange", "red", "yellow", "green", "blue"];

// TOKENS

const boot = {
  class: "boot",
  image: "images/token-boot.png"
};

const car = {
  class: "car",
  image: "images/token-car.png"
};

const cannon = {
  class: "cannon",
  image: "images/token-cannon.png"
};

const dog = {
  class: "dog",
  image: "images/token-dog.png"
};

const hat = {
  class: "hat",
  image: "images/token-hat.png"
};

const horseAndRider = {
  class: "horse-and-rider",
  image: "images/token-horse-and-rider.png"
};

const iron = {
  class: "iron",
  image: "images/token-iron.png"
};

const sackOfMoney = {
  class: "sack-of-money",
  image: "images/token-sack-of-money.png"
};

const ship = {
  class: "ship",
  image: "images/token-ship.png"
};

const thimble = {
  class: "thimble",
  image: "images/token-thimble.png"
};

const wheelbarrow = {
  class: "wheelbarrow",
  image: "images/token-wheelbarrow.png"
};

// PLAYERS

let player1 = {
  name: "player1",
  inGame: false,
  money: 1500,
  token: boot,
  tokenSpace: {
    "bottom": "50%",
    "left": "5%"
  },
  inJailSpace: {
    "bottom": "60%",
    "left": "22.5%"
  },
  justVisitingSpace: {
    "bottom": "52.5%",
    "left": "0%"
  },
  onSpace: null,
  properties: [],
  monopolies: [],
  numberOfRailroads: function() {
    let count = 0;
    for (let i = 0; i <= player1.properties.length - 1; i++)
      if (player1.properties[i].type === "railroad") {
        count++;
      }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player1.properties.length - 1; i++)
      if (player1.properties[i].type === "utility") {
        count++;
      }
    return count;
  },
  jailFreeCards: 0,
  playerNumber: 1,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

let player2 = {
  name: "player2",
  inGame: false,
  money: 1500,
  token: wheelbarrow,
  tokenSpace: {
    "bottom": "5%",
    "left": "15%"
  },
  inJailSpace: {
    "bottom": "22.5%",
    "left": "32.5%"
  },
  justVisitingSpace: {
    "bottom": "7.5%",
    "left": "0%"
  },
  onSpace: null,

  properties: [],
  monopolies: [],
  numberOfRailroads: function() {
    let count = 0;
    for (let i = 0; i <= player2.properties.length - 1; i++)
      if (player2.properties[i].type === "railroad") {
        count++;
      }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player2.properties.length - 1; i++)
      if (player2.properties[i].type === "utility") {
        count++;
      }
    return count;
  },
  jailFreeCards: 0,
  playerNumber: 2,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

let player3 = {
  name: "player3",
  inGame: false,
  money: 1500,
  token: ship,
  tokenSpace: {
    "bottom": "27.5%",
    "right": "5%"
  },
  inJailSpace: {
    "bottom": "43.5%",
    "right": "0%"
  },
  justVisitingSpace: {
    "bottom": "0%",
    "right": "45%"
  },
  onSpace: null,
  properties: [],
  monopolies: [],
  numberOfRailroads: function() {
    let count = 0;
    for (let i = 0; i <= player3.properties.length - 1; i++)
      if (player3.properties[i].type === "railroad") {
        count++;
      }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player3.properties.length - 1; i++)
      if (player3.properties[i].type === "utility") {
        count++;
      }
    return count;
  },
  jailFreeCards: 0,
  playerNumber: 3,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

let player4 = {
  name: "player4",
  inGame: false,
  money: 1500,
  token: car,
  tokenSpace: {
    "bottom": "72.5%",
    "right": "15%"
  },
  inJailSpace: {
    "bottom": "80%",
    "right": "12.5%"
  },
  justVisitingSpace: {
    "bottom": "0%",
    "right": "0%"
  },
  onSpace: null,
  properties: [],
  monopolies: [],
  numberOfRailroads: function() {
    let count = 0;
    for (let i = 0; i <= player4.properties.length - 1; i++)
      if (player4.properties[i].type === "railroad") {
        count++;
      }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player4.properties.length - 1; i++)
      if (player4.properties[i].type === "utility") {
        count++;
      }
    return count;
  },
  jailFreeCards: 0,
  playerNumber: 4,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

let player5 = {
  name: "player5",
  inGame: false,
  money: 1500,
  token: thimble,
  tokenSpace: {
    "bottom": "72.5%",
    "left": "15%"
  },
  inJailSpace: {
    "bottom": "80%",
    "left": "32.5%"
  },
  justVisitingSpace: {
    "bottom": "75%",
    "left": "0%"
  },
  onSpace: null,
  properties: [],
  monopolies: [],
  numberOfRailroads: function() {
    let count = 0;
    for (let i = 0; i <= player5.properties.length - 1; i++)
      if (player5.properties[i].type === "railroad") {
        count++;
      }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player5.properties.length - 1; i++)
      if (player5.properties[i].type === "utility") {
        count++;
      }
    return count;
  },
  jailFreeCards: 0,
  playerNumber: 5,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

let player6 = {
  name: "player6",
  inGame: false,
  money: 1500,
  token: iron,
  tokenSpace: {
    "bottom": "27.5%",
    "left": "5%"
  },
  inJailSpace: {
    "bottom": "42.5%",
    "left": "22.5%"
  },
  justVisitingSpace: {
    "bottom": "25%",
    "left": "0%"
  },
  onSpace: null,
  properties: [],
  monopolies: [],
  numberOfRailroads: function() {
    let count = 0;
    for (let i = 0; i <= player6.properties.length - 1; i++)
      if (player6.properties[i].type === "railroad") {
        count++;
      }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player6.properties.length - 1; i++)
      if (player6.properties[i].type === "utility") {
        count++;
      }
    return count;
  },
  jailFreeCards: 0,
  playerNumber: 6,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

let player7 = {
  name: "player7",
  inGame: false,
  money: 1500,
  token: horseAndRider,
  tokenSpace: {
    "bottom": "5%",
    "right": "15%"
  },
  inJailSpace: {
    "bottom": "22.5%",
    "right": "12.5%"
  },
  justVisitingSpace: {
    "bottom": "0%",
    "right": "25%"
  },
  onSpace: null,
  properties: [],
  monopolies: [],
  numberOfRailroads: function() {
    let count = 0;
    for (let i = 0; i <= player7.properties.length - 1; i++)
      if (player7.properties[i].type === "railroad") {
        count++;
      }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player7.properties.length - 1; i++)
      if (player7.properties[i].type === "utility") {
        count++;
      }
    return count;
  },
  jailFreeCards: 0,
  playerNumber: 7,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

let player8 = {
  name: "player8",
  inGame: false,
  money: 1500,
  token: cannon,
  tokenSpace: {
    "bottom": "50%",
    "right": "5%"
  },
  inJailSpace: {
    "bottom": "65%",
    "right": "0%"
  },
  justVisitingSpace: {
    "bottom": "0%",
    "right": "65%"
  },
  onSpace: null,
  properties: [],
  monopolies: [],
  numberOfRailroads: function() {
    let count = 0;
    for (let i = 0; i <= player8.properties.length - 1; i++)
      if (player8.properties[i].type === "railroad") {
        count++;
      }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player8.properties.length - 1; i++)
      if (player8.properties[i].type === "utility") {
        count++;
      }
    return count;
  },
  jailFreeCards: 0,
  playerNumber: 8,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

// GAME STATUS

let gameStatus = {
  currentPlayerTurn: player1,
  freeParkingJackpotOn: false,
  passGoDouble: false,
  landOnGoDouble: false,
};

let numberOfPlayers = null;
let activePlayers = [player1, player2, player3, player4, player5, player6, player7, player8];
let multiplier;

// function railroadCount(player) {
//   let count = 0;
//   console.log(player.properties);
//   for (let i = 0; i <= player.properties.length - 1; i++)
//     if (player.properties[i].type === "railroad") {
//       count++;
//     }
//   console.log(count);
//   return count;
// }
//
// function utilityCount(player) {
//   let count = 0;
//   for (let i = 0; i <= properties.length - 1; i++)
//     if (properties[i].type === "utility") {
//       count++;
//     }
//   return count;
// }

// CORE FUNCTIONS AND CORRESPONDING EVENTS

function rollDice() {
  let player = gameStatus.currentPlayerTurn;
  let diceBaseImage = "images/dicex.png";
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  let result = {
    dice1: dice1,
    dice1Image: diceBaseImage.replace("x", String(dice1)),
    dice2: dice2,
    dice2Image: diceBaseImage.replace("x", String(dice2)),
    total: dice1 + dice2,
    doubles: dice1 === dice2,
  };
  if (result.doubles) {
    player.numberOfDoubles++;
  }
  // console.log(result);
  return result;
}

$(".roll").click(function() {
  $(".roll").css("display", "none");
  let diceResult = rollDice();
  $('.dice1').attr("src", diceResult.dice1Image);
  $('.dice2').attr("src", diceResult.dice2Image);
  let player = gameStatus.currentPlayerTurn;
  player.lastDiceResult = diceResult;
  if (player.numberOfDoubles === 3) {
    displayGoToJailDoubles();
  }
  else {
    moveToken(diceResult, player);
  }
});

function moneyChange(player, money) {
  player.money += money;
  $("." + player.playerOrder + " > p:last-child").html("$" + player.money);
}

// SETUP FUNCTIONS AND EVENTS
// FIRST WINDOW

$("#set-number").click(function() {
  numberOfPlayers = Number($("#number-of-players").val());
  for (i = 1; i <= 8 - numberOfPlayers; i++) {
    activePlayers.pop();
  }
  $(".number-of-players").css("display", "none");
  $(".names-tokens").css("display", "block");
  $(".number-of-players-eh").prepend(numberOfPlayers);
});

// SECOND WINDOW, FOR NAMES AND TOKENS

let onPlayer = 1;

$("#tokens").click(function() {
  $(".token-selected").attr("src", "images/token-" + $("#tokens").val() + ".png");
  $(".token-selected").attr("alt", $("#tokens :selected").text());
  $("#set-name-token").removeClass("hidden");
});

const tokensMatch = [
  ["boot", "cannon", "car", "dog", "hat", "horse-and-rider", "iron", "sack-of-money", "ship", "thimble", "wheelbarrow"],
  [boot, cannon, car, dog, hat, horseAndRider, iron, sackOfMoney, ship, thimble, wheelbarrow]
];

$("#set-name-token").click(function() {
  $(".player-list").append("<li class='player-listing'><strong>" + $("#name").val() + "</strong>   " + "<img class='active'></li>");
  $(".active").addClass("token-small");
  $(".active").attr("src", "images/token-" + $("#tokens").val() + ".png");
  $(".active").attr("alt", $("#tokens :selected").text());
  $(".active").removeClass("active");
  $("#set-name-token").addClass("hidden");
  for (let i = 0; i <= numberOfPlayers - 1; i++) {
    if (onPlayer === activePlayers[i].playerNumber) {
      let player = activePlayers[i];
      player.name = $("#name").val();
      let indexMatch = tokensMatch[0].indexOf($("#tokens").val());
      player.token = tokensMatch[1][indexMatch];
      $("#tokens > #" + player.token.class).remove();
    }
  }
  $("#name").val("");
  $(".token-selected").attr("src", "");
  $(".token-selected").attr("alt", "");
  onPlayer++;
  if (onPlayer > numberOfPlayers) {
    $(".name-token-select").css("display", "none");
    $(".next-names-tokens").css("display", "inline");
  }
});

$(".reset-names-tokens").click(function() {
  onPlayer = 1;
  activePlayers = [player1, player2, player3, player4, player5, player6, player7, player8];
  $(".player-list").empty();
  $(".names-tokens").css("display", "none");
  $(".name-token-select").css("display", "inline");
  $(".next-names-tokens").css("display", "none");
  $(".number-of-players").css("display", "block");
  $(".number-of-players-eh").replaceWith("<h2 class='number-of-players-eh'> players, eh? Let's move on to names and tokens.</h2>");
  $("#tokens").html('<option id="boot" value="boot">Boot</option>' +
    '<option id="cannon" value="cannon">Cannon</option>' +
    '<option id="car" value="car">Car</option>' +
    '<option id="dog" value="dog">Dog</option>' +
    '<option id="hat" value="hat">Hat</option>' +
    '<option id="horse-and-rider" value="horse-and-rider">Horse and Rider</option>' +
    '<option id="iron" value="iron">Iron</option>' +
    '<option id="sack-of-money" value="sack-of-money">Sack of Money</option>' +
    '<option id="ship" value="ship">Ship</option>' +
    '<option id="thimble" value="thimble">Thimble</option>' +
    '<option id="wheelbarrow" value="wheelbarrow">Wheelbarrow</option>');
});

$(".next-names-tokens").click(function() {
  $(".names-tokens").css("display", "none");
  $(".turn-order").css("display", "block");
  onPlayer = 1;
});

// THIRD WINDOW, FOR DECIDING TURN ORDER...

// $(".player-name").html(player1.name);

// ...FOR DICE ROLL

$("#dice-roll").click(function() {
  $(".turn-order-decider").css("display", "none");
  $(".dice-roll").css("display", "inline");
});

$("#roll-turn-order").click(function() {
  let diceResult = rollDice();
  $('.dice1-turn-order').attr("src", diceResult.dice1Image);
  $('.dice2-turn-order').attr("src", diceResult.dice2Image);
  for (let i = 0; i <= numberOfPlayers - 1; i++) {
    if (onPlayer === activePlayers[i].playerNumber) {
      let player = activePlayers[i];
      player.diceResultTurnOrder = diceResult.total;
      $(".player-list-dice-results").append(
        "<li class='player-listing'><strong>" + player.name + "</strong> " +
        "<img class='token-small' src=" + player.token.image + ">" +
        "<img class='dice-small' src=" + diceResult.dice1Image + ">&nbsp" +
        "<img class='dice-small' src=" + diceResult.dice2Image + "></li>"
      );
    }
  }

  onPlayer++;
  if (onPlayer > numberOfPlayers) {
    activePlayers.sort(function(a, b) {
      if (b.diceResultTurnOrder - a.diceResultTurnOrder === 0) {
        if (Math.round(Math.random()) === 0) {
          return -1;
        }
        return 1;
      }
      return b.diceResultTurnOrder - a.diceResultTurnOrder;
    });
    $(".next-turn-order").css("display", "inline");
  }
});

// ...FOR AUTO-RANDOM

let activePlayersOrdered = [];

$("#auto-random").click(function() {
  $(".turn-order-decider").css("display", "none");
  $(".auto-random").css("display", "block");
  for (let i = 0; i <= numberOfPlayers - 1; i++) {
    let randomIndex = Math.floor(Math.random() * activePlayers.length);
    let randomPlayer = activePlayers[randomIndex];
    activePlayersOrdered.push(randomPlayer);
    activePlayers.splice(randomIndex, 1);
  }

  activePlayers = activePlayersOrdered;
  $(".next-turn-order").css("display", "inline");
});

// ...FOR PLAYER DECIDE

$("#player-decide").click(function() {
  $(".turn-order-decider").css("display", "none");
  $(".player-decide").css("display", "block");
  for (player of activePlayers) {
    $(".players-to-choose > ul").append("<li onmouseover = 'colorChangeDarkerBlue(this)' onmouseout = 'colorBack(this)' onclick = 'moveToChosen(this)'>" +
      "<strong>" + player.name + "</strong>" +
      "<img class='token-small'" +
      "src=" + player.token.image + " alt=" + player.token.class + "></li>");
  }
  onPlayer = 1;
  activePlayersOrdered = [];
});

function colorChangeDarkerBlue(item) {
  item.style.backgroundColor = "#8ac6d1";
}

function colorBack(item) {
  item.style.backgroundColor = "initial";
}

function moveToChosen(playerChoice) {
  $(playerChoice).remove();
  $(".chosen-order > ul").append(playerChoice);
  for (player of activePlayers) {
    if ($(playerChoice).html().includes(player.token.class)) {
      activePlayersOrdered.push(player);
      onPlayer++;
    }
  }
  if (onPlayer > numberOfPlayers) {
    activePlayers = activePlayersOrdered;
    $(".next-turn-order").css("display", "inline");
  }
}

// ...FOR RESET AND NEXT

$(".reset-turn-order").click(function() {
  $(".dice-roll").css("display", "none");
  $(".auto-random").css("display", "none");
  $(".player-decide").css("display", "none");
  $(".turn-order-decider").css("display", "initial");
  $(".player-list-dice-results").empty();
  $(".players-to-choose > ul").empty();
  $(".chosen-order").empty();
  $(".finalized-player-list").empty();
  onPlayer = 1;
  activePlayers = [player1, player2, player3, player4, player5, player6, player7, player8].splice(0, numberOfPlayers);
  activePlayersOrdered = [];
});

$(".next-turn-order").click(function() {
  $(".turn-order").css("display", "none");
  $(".finalize").css("display", "block");
  $(".complete").append("<strong>Here are all of the chosen players and their tokens, with turn order from top to bottom.</strong>");

  for (player of activePlayers) {
    $(".finalized-player-list").append("<li class='player-listing finalize-listing'><strong>" + player.name + "</strong> <img class='token-small' src=" + player.token.image + "></li>");
  }
});

// FOURTH WINDOW, FOR FINALIZING SETUP

$(".play-game").click(function() {
  $(".game-start").css("display", "none");
  $(".column").css("display", "block");

  firstThroughEighth = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

  for (player of activePlayers) {
    $("#go").append("<img src=" + player.token.image + " alt=" + player.token.class + " class='token active'>");
    $(".active").addClass(`token ${player.token.class}`);
    $("." + player.token.class).css(player.tokenSpace);
    player.onSpace = go;
    $(".active").removeClass("active");
    player.playerOrder = firstThroughEighth[activePlayers.indexOf(player)];
    $("." + player.playerOrder).css("display", "block");
    $("." + player.playerOrder + " > p:first-child").html(player.name);
    $("." + player.playerOrder + " > img").attr("src", player.token.image);
    $("." + player.playerOrder + " > p:last-child").html("$" + player.money);
  }

  gameStatus.currentPlayerTurn = activePlayers[0];
});

$(".start-over").click(function() {
  location.reload();
});


// MOVING TOKENS AND SPACE LANDING

function moveToken(diceResult, player) {
  // $(".roll").attr("display", "none");
  let arr = [];
  for (let i = 1; i <= diceResult.total; i++) {
    arr.push(i);
    console.log(arr);
  }
  arr.forEach(function(num) {
    setTimeout(function() {
      console.log(num);
      $("." + player.token.class).remove();

      if (board.indexOf(player.onSpace) === 39) {
        player.onSpace = go;
        moneyChange(player, 200);
      }
      else {
        player.onSpace = board[board.indexOf(player.onSpace) + 1];
      }

      $(player.onSpace.boardSpace).append("<img src=" + player.token.image + " alt='boot' class='token active'>");
      $(".active").addClass(`token ${player.token.class}`);
      $("." + player.token.class).css(player.tokenSpace);
      $(".active").removeClass("active");
      if (num === arr.length) {
        player.onSpace.playerLanded = player;
        // $("button").css("display", "none");
        player.onSpace.result();
      }
    }, 333 * num);
  });
  console.log("Iteration complete.");
}

function moveTokenDirectlyTo(space, player) {
  $("." + player.token.class).remove();
  player.onSpace = space;
  $(player.onSpace.boardSpace).append("<img src=" + player.token.image + " alt='boot' class='token active'>");
  $(".active").addClass(`token ${player.token.class}`);
  $("." + player.token.class).css(player.tokenSpace);
  $(".active").removeClass("active");
}

function landOn(space) {
  if (space.type === "coloredProperty") {
    displayProperty(space, "board-details", "one");
    if (space.owner === null) {
      $(".board-details > .btn-buy").css("display", "inline");
      $(".board-details > .btn-auction").css("display", "inline");
      buy(space);
    }
    else if (space.owner !== space.playerLanded) {
      let moneyOwed = space.rent[space.housesHotel];
      if ((space.inMonopoly) && (space.housesHotel === 0)) {
        moneyOwed = space.rent[6];
      }
      $(".board-details > .btn-rent").css("display", "inline");
      rent(moneyOwed);
    }
    else {
      $(".closer").css("display", "inline");
      endTurn();
    }
  }
  else if (space.type === "railroad") {
    displayRailroad(space, "board-details", "one");
    if (space.owner === null) {
      buy(space);
    }
    else if (space.owner !== space.playerLanded) {
      let moneyOwed = space.rent[space.owner.numberOfRailroads() - 1];
      rent(moneyOwed);
    }
    else {
      $(".closer").css("display", "inline");
      endTurn();
    }
  }
  else if (space.type === "utility") {
    let player = gameStatus.currentPlayerTurn;
    if (space.owner === null) {
      displayUtility(space, "board-details", "one");
      buy(space);
    }
    else if (space.owner !== space.playerLanded) {
      // let multiplier;
      // displayUtility(space, "board-details", "one");
      if (multiplier === undefined) {
        displayUtility(space, "board-details", "one");
        player.utilityDice = player.lastDiceResult;
        if (space.owner.numberOfUtilities() === 1) {
          multiplier = 4;
        }
        else if (space.owner.numberOfUtilities() === 2) {
          multiplier = 10;
        }
        let moneyOwed = player.utilityDice.total * multiplier;
        rent(moneyOwed);
      }
      else {
        $(".roll-for-utility-card").css("display", "inline");
      }
    }
    else if (space.owner === space.playerLanded) {
      displayUtility(space, "board-details", "one");
      $(".closer").css("display", "inline");
      endTurn();
    }
  }
  else if (space.type === "go") {
    displayGo();
    endTurn();
  }
  else if (space.type === "jail") {
    let player = gameStatus.currentPlayerTurn;
    $("." + player.token.class).remove();
    $(player.onSpace.boardSpace).append("<img src=" + player.token.image + " alt='boot' class='token active'>");
    $(".active").addClass(`token ${player.token.class}`);
    $("." + player.token.class).css(player.justVisitingSpace);
    $(".active").removeClass("active");
    endTurn();
  }
  else if (space.type === "freeParking") {
    let player = gameStatus.currentPlayerTurn;
    displayFreeParking();
    moneyChange(player, freeParking.jackpot);
    freeParking.jackpot = 0;
    endTurn();
  }
  else if (space.type === "goToJail") {
    let player = gameStatus.currentPlayerTurn;
    displayGoToJail();
  }
  else if (space.type === "chance") {
    let player = gameStatus.currentPlayerTurn;
    displayChance();
  }
  else {endTurn();}
}

// ENDING THE TURN

function endTurn() {
  if (gameStatus.currentPlayerTurn.inJail) {
    $(".roll").css("display", "none");
    $(".end-turn").css("display", "inline");
  }
  else if (!gameStatus.currentPlayerTurn.lastDiceResult.doubles) {
    $(".roll").css("display", "none");
    $(".end-turn").css("display", "inline");
  }
  else {
    $(".roll").css("display", "inline");
    $(".end-turn").css("display", "none");
  }
}

$(".end-turn").click(function() {
  $("button").css("display", "none");
  multiplier = undefined;
  let player = gameStatus.currentPlayerTurn;
  player.numberOfDoubles = 0;
  if (player.inJail) {
    player.numberOfTurnsInJail++;
  }
  if (activePlayers.indexOf(player) === activePlayers.length - 1) {
    gameStatus.currentPlayerTurn = activePlayers[0];
  }
  else {
    gameStatus.currentPlayerTurn = activePlayers[activePlayers.indexOf(gameStatus.currentPlayerTurn) + 1];
  }
  let nextPlayer = gameStatus.currentPlayerTurn;
  if (nextPlayer.inJail) {
    $(".roll-riot").css("display", "inline");
    $(".bribe").css("display", "inline");
  }
  else {
    $(".roll").css("display", "inline");
  }
});

// IF THE PLAYER IS IN JAIL

$(".roll-riot").click(function() {
  $(".roll-riot").css("display", "none");
  $(".bribe").css("display", "none");
  let diceResult = rollDice();
  $('.dice1').attr("src", diceResult.dice1Image);
  $('.dice2').attr("src", diceResult.dice2Image);
  let player = gameStatus.currentPlayerTurn;
  player.lastDiceResult = diceResult;
  if (diceResult.doubles) {
    player.inJail = false;
    moveToken(diceResult, player);
  }
  else {
    if (player.numberOfTurnsInJail === 3) {
      $(".bribe").css("display", "inline");
    }
    else {
      endTurn();
    }
  }
});

$(".bribe").click(function() {
  $(".roll-riot").css("display", "none");
  $(".bribe").css("display", "none");
  let player = gameStatus.currentPlayerTurn;
  moneyChange(player, -50);
  player.inJail = false;
  $("." + player.token.class).css(player.justVisitingSpace);
  endTurn();
});

$(document).on("click", ".go-to-jail-btn", function() {
  let player = gameStatus.currentPlayerTurn;
  moveTokenDirectlyTo(jail, player);
  $("." + player.token.class).remove();
  $(player.onSpace.boardSpace).append("<img src=" + player.token.image + " alt='boot' class='token active'>");
  $(".active").addClass(`token ${player.token.class}`);
  $("." + player.token.class).css(player.inJailSpace);
  $(".active").removeClass("active");
  player.inJail = true;
  player.lastDiceResult.doubles = false;
  $("#board-details").empty();
  $("#board-details").removeClass();
  $("#board-details").addClass("board-details hidden");
  endTurn();
});

// DISPLAYING SPACES

function displayProperty(property, location, column) {
  $("." + column + "> ." + location).append($(".reference > .titledeed").html());
  $("." + column + "> ." + location + " > .property-name").append(property.title);
  $("." + column + "> ." + location + " > .price").append("PRICE $" + property.price);
  $("." + column + "> ." + location + " > .base-rent").append("RENT $" + property.rent[0]);
  $("." + column + "> ." + location + " > .prop-details > .rents > tbody > .rent-1-house > .right").append("$" + property.rent[1]);
  $("." + column + "> ." + location + " > .prop-details > .rents > tbody > .rent-2-house > .right").append("$" + property.rent[2]);
  $("." + column + "> ." + location + " > .prop-details > .rents > tbody > .rent-3-house > .right").append("$" + property.rent[3]);
  $("." + column + "> ." + location + " > .prop-details > .rents > tbody > .rent-4-house > .right").append("$" + property.rent[4]);
  $("." + column + "> ." + location + " > .prop-details > .rents > tbody > .rent-hotel > .rent-hotel").append("$" + property.rent[5]);
  $("." + column + "> ." + location + " > .prop-details > .mortgage-value").append("Mortgage Value $" + property.mortgage);
  $("." + column + "> ." + location + " > .prop-details > .house-price").append("Houses cost $" + property.priceHouse + " each.");
  $("." + column + "> ." + location + " > .prop-details > .hotel-price").append("Hotels, $" + property.priceHouse + " plus 4 houses");
  for (color of colors) {
    $("." + column + "> ." + location).removeClass(color);
  }
  $("." + column + "> ." + location).addClass("titledeed " + property.color);
  $("." + column + "> ." + location + "> .btn-buy").append("Buy" + property.title + " - $" + property.price);
  let moneyOwed = property.rent[property.housesHotel];
  if ((property.inMonopoly) && (property.housesHotel === 0)) {
    moneyOwed = property.rent[6];
  }
  $("." + column + "> ." + location + "> .btn-rent").append("Rent - $" + moneyOwed);
  $("." + column + "> ." + location + "> .closer").css("display", "none");
  $("." + column + "> ." + location).removeClass("hidden");
}

function displayRailroad(property, location, column) {
  $("." + column + "> ." + location).append($(".reference > .railroad").html());
  $("." + column + "> ." + location + " > .property-name").append(property.title);
  $("." + column + "> ." + location).addClass("titledeed railroad");
  $("." + column + "> ." + location + "> .btn-buy").append("Buy" + property.title + " - $" + property.price);
  if (property.owner !== null) {
    let moneyOwed = property.rent[property.owner.numberOfRailroads() - 1];
    $("." + column + "> ." + location + "> .btn-rent").append("Rent $" + moneyOwed);
  }
  $("." + column + "> ." + location + "> .closer").css("display", "none");
  $("." + column + "> ." + location).removeClass("hidden");
}

function displayUtility(property, location, column) {
  $("." + column + "> ." + location).append($(".reference > .utility").html());
  $("." + column + "> ." + location + " > .property-name").append(property.title);
  $("." + column + "> ." + location).addClass("titledeed " + property.utilityClass);
  $("." + column + "> ." + location + "> .btn-buy").append("Buy" + property.title + " - $" + property.price);
  if (property.owner !== null) {
    if (multiplier === undefined) {
      if (property.owner.numberOfUtilities() === 1) {
        multiplier = 4;
      }
      else if (property.owner.numberOfUtilities() === 2) {
        multiplier = 10;
      }
    }
    let moneyOwed = gameStatus.currentPlayerTurn.lastDiceResult.total * multiplier;
    $("." + column + "> ." + location + "> .btn-rent").append("Rent $" + moneyOwed);
  }
  $("." + column + "> ." + location + "> .closer").css("display", "none");
  $("." + column + "> ." + location).removeClass("hidden");
}

function displayGo() {
  $(".one > .board-details").addClass("go-board");
  $(".one > .board-details").append($(".reference > .go-board").html());
  $(".one > .board-details > .closer").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

function displayJustVisiting() {

}

function displayFreeParking() {
  $(".one > .board-details").addClass("free-parking-board");
  $(".one > .board-details").append($(".reference > .free-parking-board").html());
  $(".one > .board-details > .closer").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

function displayGoToJail() {
  $(".one > .board-details").addClass("go-to-jail-board");
  $(".one > .board-details").append($(".reference > .go-to-jail-board").html());
  $(".one > .board-details > .go-to-jail-btn").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

function displayGoToJailDoubles() {
  $(".one > .board-details").addClass("go-to-jail-doubles");
  $(".one > .board-details").append($(".reference > .go-to-jail-doubles").html());
  $(".one > .board-details > .go-to-jail-btn").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

let cardDrawn;

function displayChance() {
  cardDrawn = chanceDeck[Math.floor(Math.random() * chanceDeck.length)];
  console.log(cardDrawn);
  $(".one > .board-details").addClass("chance");
  $(".one > .board-details").append($(".reference > .chance").html());
  $(".one > .board-details > .chance-text").append(cardDrawn.text);
  $(".one > .board-details > .btn-card-result").append(cardDrawn.buttonText);
  $(".one > .board-details > .btn-card-result").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

$(document).on('click', ".board-details > .btn-card-result", function() {
  cardDrawn.result();
});

$(document).on('click', ".board-details > .closer", function() {
  $("#board-details").empty();
  $("#board-details").removeClass();
  $("#board-details").addClass("board-details hidden");
});

$(document).on("click", ".player-details > .closer", function() {
  $("#player-details").empty();
  $("#player-details").removeClass();
  $("#player-details").addClass("board-details hidden");
});

// BUYING AND PAYING RENT

function buy(property) {
  $(".roll").css("display", "none");
  $(".end-turn").css("display", "none");
  $(".btn-buy").empty();
  $(".btn-buy").append("Buy " + property.title + " - $" + property.price);
  $(".btn-buy").css("display", "inline");
  $(".btn-auction").css("display", "inline");
}

$(document).on("click", ".btn-buy", function() {
  let player = gameStatus.currentPlayerTurn;
  let property = player.onSpace;
  moneyChange(player, -property.price);
  player.properties.push(property);
  property.owner = player;
  $(".btn-buy").css("display", "none");
  $(".btn-auction").css("display", "none");
  $(".closer").css("display", "inline");
  $(".btn-buy").empty();
  endTurn();
});

$(document).on("click", ".btn-auction", function() {
  let player = gameStatus.currentPlayerTurn;
  $(".btn-buy").css("display", "none");
  $(".btn-auction").css("display", "none");
  $(".closer").css("display", "inline");
  $(".btn-buy").empty();
  endTurn();
});

// function setRent(property) {
//   if (property.type === "coloredProperty") {
//     property.rent = property.rentArray[property.housesHotel];
//     if ((property.inMonopoly) && (property.housesHotel === 0)) {
//       property.rent = property.rentArray[2];
//     }
//   }
//   else if (property.type === "railroad") {
//     property.rent = property.rentArray[property.owner.numberOfRailroads() - 1];
//   }
//   else if (property.type === "utility") {
//     let multiplier;
//     if (playerReceiving.numberOfUtilities() === 1) {multiplier = 4;}
//     else {multiplier = 10;}
//     property.rent = playerPaying.lastDiceResult.total*multiplier;
//   }
// }

$(".roll-for-utility-card").click(function() {
  $(".roll").css("display", "none");
  $(".roll-for-utility-card").css("display", "none");
  let diceResult = rollDice();
  $('.dice1').attr("src", diceResult.dice1Image);
  $('.dice2').attr("src", diceResult.dice2Image);
  let player = gameStatus.currentPlayerTurn;
  player.utilityDice = diceResult;
  let moneyOwed = diceResult.total * 10;
  displayUtility(player.onSpace, "board-details", "one");
  rent(moneyOwed);
});

function rent(money) {
  $(".roll").css("display", "none");
  $(".end-turn").css("display", "none");
  $(".btn-rent").empty();
  $(".btn-rent").append("Rent - $" + money);
  $(".btn-rent").css("display", "inline");
}

$(document).on("click", ".btn-rent", function() {
  let playerPaying = gameStatus.currentPlayerTurn;
  let property = playerPaying.onSpace;
  let playerReceiving = property.owner;
  let moneyOwed;
  if (property.type === "coloredProperty") {
    moneyOwed = property.rent[property.housesHotel];
    if ((property.inMonopoly) && (property.housesHotel === 0)) {
      moneyOwed = property.rent[6];
    }
  }
  else if (property.type === "railroad") {
    moneyOwed = property.rent[property.owner.numberOfRailroads() - 1];
  }
  else if (property.type === "utility") {
    if (multiplier === undefined) {
      if (space.owner.numberOfUtilities() === 1) {
        multiplier = 4;
      }
      else if (space.owner.numberOfUtilities() === 2) {
        multiplier = 10;
      }
    }
    moneyOwed = playerPaying.utilityDice.total * multiplier;
  }
  multiplier = undefined;
  moneyChange(playerPaying, -moneyOwed);
  moneyChange(playerReceiving, moneyOwed);
  $(".btn-rent").css("display", "none");
  $(".board-details > .closer").css("display", "inline");
  endTurn();
});

// OTHER FUNCTIONS

function freeParkingJackpotCheck(money) {
  if (gameStatus.freeParkingJackpotOn) {
    changeMoney(money, freeParking.jackpot);
  }
}

// TEST LOGIC

activePlayers = [player4, player2, player3, player1, player6, player5, player7, player8];

firstThroughEighth = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

for (player of activePlayers) {
  $("#go").append("<img src=" + player.token.image + " alt=" + player.token.class + " class='token active'>");
  $(".active").addClass(`token ${player.token.class}`);
  $("." + player.token.class).css(player.tokenSpace);
  player.onSpace = go;
  $(".active").removeClass("active");
  player.playerOrder = firstThroughEighth[activePlayers.indexOf(player)];
  $("." + player.playerOrder).css("display", "block");
  $("." + player.playerOrder + " > p:first-child").html(player.name);
  $("." + player.playerOrder + " > img").attr("src", player.token.image);
  $("." + player.playerOrder + " > p:last-child").html("$" + player.money);
}

gameStatus.currentPlayerTurn = activePlayers[0];

// let propertyTest = pacificAvenue;

$(".display-test-board").click(function() {
  displayProperty(balticAvenue, "board-details", "one");
  $(".board-details > .closer").css("display", "inline");
});

$(".display-test-player").click(function() {
  displayProperty(kentuckyAvenue, "player-details", "three");
  $(".player-details > .closer").css("display", "inline");
});
