/*jshint esversion: 6 */

// COLORED PROPERTIES

let mediterraneanAvenue = {
  boardSpace: $("#mediterranean-ave"),
  boardClass: "mediterranean-ave",
  title: "Mediterranean Avenue",
  type: "coloredProperty",
  color: "purple",
  price: 60,
  priceHouse: 50,
  mortgage: 30,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [2, 10, 30, 90, 160, 250, 4],
  result: function() {
    landOn(mediterraneanAvenue);
  },
  boardClickResult: function() {
    displayProperty(mediterraneanAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (mediterraneanAvenue.isMortgaged) {
      displayMortgagedProperty(mediterraneanAvenue);
    }
    else {
      displayProperty(mediterraneanAvenue, "player-details", "three");
    }
  },
};

let balticAvenue = {
  boardSpace: $("#baltic-ave"),
  boardClass: "baltic-ave",
  boardIndex: 3,
  title: "Baltic Avenue",
  type: "coloredProperty",
  color: "purple",
  price: 60,
  priceHouse: 50,
  mortgage: 30,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [4, 20, 60, 180, 320, 450, 8],
  result: function() {
    landOn(balticAvenue);
  },
  boardClickResult: function() {
    displayProperty(balticAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (balticAvenue.isMortgaged) {
      displayMortgagedProperty(balticAvenue);
    }
    else {
      displayProperty(balticAvenue, "player-details", "three");
    }
  },
};

let orientalAvenue = {
  boardSpace: $("#oriental-ave"),
  boardClass: "oriental-ave",
  title: "Oriental Avenue",
  type: "coloredProperty",
  color: "light-blue",
  price: 100,
  priceHouse: 50,
  mortgage: 50,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [6, 30, 90, 270, 400, 550, 12],
  result: function() {
    landOn(orientalAvenue);
  },
  boardClickResult: function() {
    displayProperty(orientalAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (orientalAvenue.isMortgaged) {
      displayMortgagedProperty(orientalAvenue);
    }
    else {
      displayProperty(orientalAvenue, "player-details", "three");
    }
  },
};

let vermontAvenue = {
  boardSpace: $("#vermont-ave"),
  boardClass: "vermont-ave",
  title: "Vermont Avenue",
  type: "coloredProperty",
  color: "light-blue",
  price: 100,
  priceHouse: 50,
  mortgage: 50,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [6, 30, 90, 270, 400, 550, 12],
  result: function() {
    landOn(vermontAvenue);
  },
  boardClickResult: function() {
    displayProperty(vermontAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (vermontAvenue.isMortgaged) {
      displayMortgagedProperty(vermontAvenue);
    }
    else {
      displayProperty(vermontAvenue, "player-details", "three");
    }
  },
};

let connecticutAvenue = {
  boardSpace: $("#connecticut-ave"),
  boardClass: "connecticut-ave",
  title: "Connecticut Avenue",
  type: "coloredProperty",
  color: "light-blue",
  price: 120,
  priceHouse: 50,
  mortgage: 60,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [8, 40, 100, 300, 450, 600, 16],
  result: function() {
    landOn(connecticutAvenue);
  },
  boardClickResult: function() {
    displayProperty(connecticutAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (connecticutAvenue.isMortgaged) {
      displayMortgagedProperty(connecticutAvenue);
    }
    else {
      displayProperty(connecticutAvenue, "player-details", "three");
    }
  },
};

let stCharlesPlace = {
  boardSpace: $("#st-charles-place"),
  boardClass: "st-charles-place",
  title: "St. Charles Place",
  type: "coloredProperty",
  color: "magenta",
  price: 140,
  priceHouse: 100,
  mortgage: 70,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [10, 50, 150, 450, 625, 750, 20],
  result: function() {
    landOn(stCharlesPlace);
  },
  boardClickResult: function() {
    displayProperty(stCharlesPlace, "board-details", "one");
  },
  playerClickResult: function() {
    if (stCharlesPlace.isMortgaged) {
      displayMortgagedProperty(stCharlesPlace);
    }
    else {
      displayProperty(stCharlesPlace, "player-details", "three");
    }
  },
};

let statesAvenue = {
  boardSpace: $("#states-ave"),
  boardClass: "states-ave",
  title: "States Avenue",
  type: "coloredProperty",
  color: "magenta",
  price: 140,
  priceHouse: 100,
  mortgage: 70,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [10, 50, 150, 450, 625, 750, 20],
  result: function() {
    landOn(statesAvenue);
  },
  boardClickResult: function() {
    displayProperty(statesAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (statesAvenue.isMortgaged) {
      displayMortgagedProperty(statesAvenue);
    }
    else {
      displayProperty(statesAvenue, "player-details", "three");
    }
  },
};

let virginiaAvenue = {
  boardSpace: $("#virginia-ave"),
  boardClass: "virginia-ave",
  title: "Virginia Avenue",
  type: "coloredProperty",
  color: "magenta",
  price: 160,
  priceHouse: 100,
  mortgage: 80,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [12, 60, 180, 500, 700, 900, 24],
  result: function() {
    landOn(virginiaAvenue);
  },
  boardClickResult: function() {
    displayProperty(virginiaAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (virginiaAvenue.isMortgaged) {
      displayMortgagedProperty(virginiaAvenue);
    }
    else {
      displayProperty(virginiaAvenue, "player-details", "three");
    }
  },
};

let stJamesPlace = {
  boardSpace: $("#st-james-place"),
  boardClass: "st-james-place",
  title: "St. James Place",
  type: "coloredProperty",
  color: "orange",
  price: 180,
  priceHouse: 100,
  mortgage: 90,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [14, 70, 200, 550, 750, 950, 28],
  result: function() {
    landOn(stJamesPlace);
  },
  boardClickResult: function() {
    displayProperty(stJamesPlace, "board-details", "one");
  },
  playerClickResult: function() {
    if (stJamesPlace.isMortgaged) {
      displayMortgagedProperty(stJamesPlace);
    }
    else {
      displayProperty(stJamesPlace, "player-details", "three");
    }
  },
};

let tenneseeAvenue = {
  boardSpace: $("#tennessee-ave"),
  boardClass: "tennessee-ave",
  title: "Tennessee Avenue",
  type: "coloredProperty",
  color: "orange",
  price: 180,
  priceHouse: 100,
  mortgage: 90,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [14, 70, 200, 550, 750, 950, 28],
  result: function() {
    landOn(tenneseeAvenue);
  },
  boardClickResult: function() {
    displayProperty(tenneseeAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (tenneseeAvenue.isMortgaged) {
      displayMortgagedProperty(tenneseeAvenue);
    }
    else {
      displayProperty(tenneseeAvenue, "player-details", "three");
    }
  },
};

let newYorkAvenue = {
  boardSpace: $("#new-york-ave"),
  boardClass: "new-york-ave",
  title: "New York Avenue",
  type: "coloredProperty",
  color: "orange",
  price: 200,
  priceHouse: 100,
  mortgage: 100,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [16, 80, 220, 600, 800, 1000, 32],
  result: function() {
    landOn(newYorkAvenue);
  },
  boardClickResult: function() {
    displayProperty(newYorkAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (newYorkAvenue.isMortgaged) {
      displayMortgagedProperty(newYorkAvenue);
    }
    else {
      displayProperty(newYorkAvenue, "player-details", "three");
    }
  },
};

let kentuckyAvenue = {
  boardSpace: $("#kentucky-ave"),
  boardClass: "kentucky-ave",
  title: "Kentucky Avenue",
  type: "coloredProperty",
  color: "red",
  price: 220,
  priceHouse: 150,
  mortgage: 110,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [18, 90, 250, 700, 875, 1050, 36],
  result: function() {
    landOn(kentuckyAvenue);
  },
  boardClickResult: function() {
    displayProperty(kentuckyAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (kentuckyAvenue.isMortgaged) {
      displayMortgagedProperty(kentuckyAvenue);
    }
    else {
      displayProperty(kentuckyAvenue, "player-details", "three");
    }
  },
};

let indianaAvenue = {
  boardSpace: $("#indiana-ave"),
  boardClass: "indiana-ave",
  title: "Indiana Avenue",
  type: "coloredProperty",
  color: "red",
  price: 220,
  priceHouse: 150,
  mortgage: 110,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [18, 90, 250, 700, 875, 1050, 36],
  result: function() {
    landOn(indianaAvenue);
  },
  boardClickResult: function() {
    displayProperty(indianaAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (mediterraneanAvenue.isMortgaged) {
      displayMortgagedProperty(mediterraneanAvenue);
    }
    else {
      displayProperty(indianaAvenue, "player-details", "three");
    }
  },
};

let illinoisAvenue = {
  boardSpace: $("#illinois-ave"),
  boardClass: "illinois-ave",
  title: "Illinois Avenue",
  type: "coloredProperty",
  color: "red",
  price: 240,
  priceHouse: 150,
  mortgage: 120,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [20, 100, 300, 750, 925, 1100, 40],
  result: function() {
    landOn(illinoisAvenue);
  },
  boardClickResult: function() {
    displayProperty(illinoisAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (illinoisAvenue.isMortgaged) {
      displayMortgagedProperty(illinoisAvenue);
    }
    else {
      displayProperty(illinoisAvenue, "player-details", "three");
    }
  },
};

let atlanticAvenue = {
  boardSpace: $("#atlantic-ave"),
  boardClass: "atlantic-ave",
  title: "Atlantic Avenue",
  type: "coloredProperty",
  color: "yellow",
  price: 260,
  priceHouse: 150,
  mortgage: 130,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [22, 110, 330, 800, 975, 1150, 44],
  result: function() {
    landOn(atlanticAvenue);
  },
  boardClickResult: function() {
    displayProperty(atlanticAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (atlanticAvenue.isMortgaged) {
      displayMortgagedProperty(atlanticAvenue);
    }
    else {
      displayProperty(atlanticAvenue, "player-details", "three");
    }
  },
};

let ventnorAvenue = {
  boardSpace: $("#ventnor-ave"),
  boardClass: "ventnor-ave",
  title: "Ventnor Avenue",
  type: "coloredProperty",
  color: "yellow",
  price: 260,
  priceHouse: 150,
  mortgage: 130,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [22, 110, 330, 800, 975, 1150, 44],
  result: function() {
    landOn(ventnorAvenue);
  },
  boardClickResult: function() {
    displayProperty(ventnorAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (ventnorAvenue.isMortgaged) {
      displayMortgagedProperty(ventnorAvenue);
    }
    else {
      displayProperty(ventnorAvenue, "player-details", "three");
    }
  },
};

let marvinGardens = {
  boardSpace: $("#marvin-gardens"),
  boardClass: "marvin-gardens",
  title: "Marvin Gardens",
  type: "coloredProperty",
  color: "yellow",
  price: 280,
  priceHouse: 150,
  mortgage: 140,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [24, 120, 360, 850, 1025, 1200, 48],
  result: function() {
    landOn(marvinGardens);
  },
  boardClickResult: function() {
    displayProperty(marvinGardens, "board-details", "one");
  },
  playerClickResult: function() {
    if (marvinGardens.isMortgaged) {
      displayMortgagedProperty(marvinGardens);
    }
    else {
      displayProperty(marvinGardens, "player-details", "three");
    }
  },
};

let pacificAvenue = {
  boardSpace: $("#pacific-ave"),
  boardClass: "pacific-ave",
  title: "Pacific Avenue",
  type: "coloredProperty",
  color: "green",
  price: 300,
  priceHouse: 200,
  mortgage: 150,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [26, 130, 390, 900, 1100, 1275, 52],
  result: function() {
    landOn(pacificAvenue);
  },
  boardClickResult: function() {
    displayProperty(pacificAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (pacificAvenue.isMortgaged) {
      displayMortgagedProperty(pacificAvenue);
    }
    else {
      displayProperty(pacificAvenue, "player-details", "three");
    }
  },
};

let northCarolinaAvenue = {
  boardSpace: $("#north-carolina-ave"),
  boardClass: "north-carolina-ave",
  title: "North Carolina Avenue",
  type: "coloredProperty",
  color: "green",
  price: 300,
  priceHouse: 200,
  mortgage: 150,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [26, 130, 300, 900, 1100, 1275, 52],
  result: function() {
    landOn(northCarolinaAvenue);
  },
  boardClickResult: function() {
    displayProperty(northCarolinaAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (northCarolinaAvenue.isMortgaged) {
      displayMortgagedProperty(northCarolinaAvenue);
    }
    else {
      displayProperty(northCarolinaAvenue, "player-details", "three");
    }
  },
};

let pennsylvaniaAvenue = {
  boardSpace: $("#pennsylvania-ave"),
  boardClass: "pennsylvania-ave",
  title: "Pennsylvania Avenue",
  type: "coloredProperty",
  color: "green",
  price: 320,
  priceHouse: 200,
  mortgage: 160,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [28, 150, 450, 1000, 1200, 1400, 56],
  result: function() {
    landOn(pennsylvaniaAvenue);
  },
  boardClickResult: function() {
    displayProperty(pennsylvaniaAvenue, "board-details", "one");
  },
  playerClickResult: function() {
    if (pennsylvaniaAvenue.isMortgaged) {
      displayMortgagedProperty(pennsylvaniaAvenue);
    }
    else {
      displayProperty(pennsylvaniaAvenue, "player-details", "three");
    }
  },
};

let parkPlace = {
  boardSpace: $("#park-place"),
  boardClass: "park-place",
  title: "Park Place",
  type: "coloredProperty",
  color: "blue",
  price: 350,
  priceHouse: 200,
  mortgage: 175,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [35, 175, 500, 1100, 1300, 1500, 70],
  result: function() {
    landOn(parkPlace);
  },
  boardClickResult: function() {
    displayProperty(parkPlace, "board-details", "one");
  },
  playerClickResult: function() {
    if (parkPlace.isMortgaged) {
      displayMortgagedProperty(parkPlace);
    }
    else {
      displayProperty(parkPlace, "player-details", "three");
    }
  },
};

let boardwalk = {
  boardSpace: $("#boardwalk"),
  boardClass: "boardwalk",
  title: "Boardwalk",
  type: "coloredProperty",
  color: "blue",
  price: 400,
  priceHouse: 200,
  mortgage: 200,
  isMortgaged: false,
  isMonopoly: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [50, 200, 600, 1400, 1700, 2000, 100],
  result: function() {
    landOn(boardwalk);
  },
  boardClickResult: function() {
    displayProperty(boardwalk, "board-details", "one");
  },
  playerClickResult: function() {
    if (boardwalk.isMortgaged) {
      displayMortgagedProperty(boardwalk);
    }
    else {
      displayProperty(boardwalk, "player-details", "three");
    }
  },
};

// RAILROADS

let readingRailroad = {
  boardSpace: $("#reading-railroad"),
  boardClass: "reading-railroad",
  type: "railroad",
  title: "Reading Railroad",
  price: 200,
  mortgage: 100,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [25, 50, 100, 200],
  result: function() {
    landOn(readingRailroad);
  },
  boardClickResult: function() {
    displayRailroad(readingRailroad, "board-details", "one");
  },
  playerClickResult: function() {
    if (readingRailroad.isMortgaged) {
      displayMortgagedProperty(readingRailroad);
    }
    else {
      displayRailroad(readingRailroad, "player-details", "three");
    }
  },
};

let pennsylvaniaRailroad = {
  boardSpace: $("#pennsylvania-railroad"),
  boardClass: "pennsylvania-railroad",
  type: "railroad",
  title: "Pennsylvania Railroad",
  price: 200,
  mortgage: 100,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [25, 50, 100, 200],
  result: function() {
    landOn(pennsylvaniaRailroad);
  },
  boardClickResult: function() {
    displayRailroad(pennsylvaniaRailroad, "board-details", "one");
  },
  playerClickResult: function() {
    if (pennsylvaniaRailroad.isMortgaged) {
      displayMortgagedProperty(pennsylvaniaRailroad);
    }
    else {
      displayRailroad(pennsylvaniaRailroad, "player-details", "three");
    }
  },
};

let bORailroad = {
  boardSpace: $("#bo-railroad"),
  boardClass: "bo-railroad",
  type: "railroad",
  title: "B&O Railroad",
  price: 200,
  mortgage: 100,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [25, 50, 100, 200],
  result: function() {
    landOn(bORailroad);
  },
  boardClickResult: function() {
    displayRailroad(bORailroad, "board-details", "one");
  },
  playerClickResult: function() {
    if (bORailroad.isMortgaged) {
      displayMortgagedProperty(bORailroad);
    }
    else {
      displayRailroad(bORailroad, "player-details", "three");
    }
  },
};

let shortLine = {
  boardSpace: $("#short-line"),
  boardClass: "short-line",
  type: "railroad",
  title: "Short Line",
  price: 200,
  mortgage: 100,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  rent: [25, 50, 100, 200],
  result: function() {
    landOn(shortLine);
  },
  boardClickResult: function() {
    displayRailroad(shortLine, "board-details", "one");
  },
  playerClickResult: function() {
    if (shortLine.isMortgaged) {
      displayMortgagedProperty(shortLine);
    }
    else {
      displayRailroad(shortLine, "player-details", "three");
    }
  },
};

// UTILITIES

let electricCompany = {
  boardSpace: $("#electric-company"),
  boardClass: "electric-company",
  title: "Electric Company",
  type: "utility",
  price: 150,
  mortgage: 75,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  utilityClass: "electric",
  result: function() {
    landOn(electricCompany);
  },
  boardClickResult: function() {
    displayUtility(electricCompany, "board-details", "one");
  },
  playerClickResult: function() {
    if (electricCompany.isMortgaged) {
      displayMortgagedProperty(electricCompany);
    }
    else {
      displayUtility(electricCompany, "player-details", "three");
    }
  },
};

let waterWorks = {
  boardSpace: $("#water-works"),
  boardClass: "water-works",
  title: "Water Works",
  type: "utility",
  price: 150,
  mortgage: 75,
  isMortgaged: false,
  housesHotel: 0,
  owner: null,
  playerLanded: null,
  utilityClass: "water",
  result: function() {
    landOn(waterWorks);
  },
  boardClickResult: function() {
    displayUtility(waterWorks, "board-details", "one");
  },
  playerClickResult: function() {
    if (waterWorks.isMortgaged) {
      displayMortgagedProperty(waterWorks);
    }
    else {
      displayUtility(waterWorks, "player-details", "three");
    }
  },
};

// CORNER SPACES

let go = {
  boardSpace: $("#go"),
  boardClass: "go",
  title: "Go",
  type: "go",
  playerLanded: null,
  result: function() {
    landOn(go);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let jail = {
  boardSpace: $("#jail"),
  boardClass: "jail",
  title: "Jail",
  type: "jail",
  playerLanded: null,
  playersInJail: [],
  result: function() {
    landOn(jail);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let freeParking = {
  boardSpace: $("#free-parking"),
  boardClass: "free-parking",
  title: "Free Parking",
  type: "freeParking",
  jackpot: {
    money: 0,
  },
  playerLanded: null,
  result: function() {
    landOn(freeParking);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let goToJail = {
  boardSpace: $("#go-to-jail"),
  boardClass: "go-to-jail",
  title: "Go To Jail",
  type: "goToJail",
  playerLanded: null,
  result: function() {
    landOn(goToJail);
  },
  boardClickResult: function() {
    x = 4;
  },
};

// OTHER SPACES

let chance1 = {
  boardSpace: $("#chance1"),
  boardClass: "chance1",
  title: "Chance",
  type: "chance",
  playerLanded: null,
  result: function() {
    landOn(chance1);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let chance2 = {
  boardSpace: $("#chance2"),
  boardClass: "chance2",
  title: "Chance",
  type: "chance",
  playerLanded: null,
  result: function() {
    landOn(chance2);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let chance3 = {
  boardSpace: $("#chance3"),
  boardClass: "chance3",
  title: "Chance",
  type: "chance",
  playerLanded: null,
  result: function() {
    landOn(chance3);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let communityChest1 = {
  boardSpace: $("#community-chest1"),
  boardClass: "community-chest1",
  title: "Community Chest",
  type: "communityChest",
  playerLanded: null,
  result: function() {
    landOn(communityChest1);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let communityChest2 = {
  boardSpace: $("#community-chest2"),
  boardClass: "community-chest2",
  title: "Community Chest",
  type: "communityChest",
  playerLanded: null,
  result: function() {
    landOn(communityChest2);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let communityChest3 = {
  boardSpace: $("#community-chest3"),
  boardClass: "community-chest3",
  title: "Community Chest",
  type: "communityChest",
  playerLanded: null,
  result: function() {
    landOn(communityChest3);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let incomeTax = {
  boardSpace: $("#income-tax"),
  boardClass: "income-tax",
  title: "Income Tax",
  type: "incomeTax",
  playerLanded: null,
  result: function() {
    landOn(incomeTax);
  },
  boardClickResult: function() {
    x = 4;
  },
};

let luxuryTax = {
  boardSpace: $("#luxury-tax"),
  boardClass: "luxury-tax",
  title: "Luxury Tax",
  type: "luxuryTax",
  playerLanded: null,
  result: function() {
    landOn(luxuryTax);
  },
  boardClickResult: function() {
    x = 4;
  },
};

// CHANCE AND COMMUNITY CHEST DECK

 let chanceDeck = [
  advanceToGoChance = {
    text: "Advance to Go.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(advanceToGoChance), 1);
      chanceDeckDiscarded.push(advanceToGoChance);
      let player = gameStatus.currentPlayerTurn;
      let numberToAdvance = 40 - board.indexOf(player.onSpace);
      let toGo = {
        total: numberToAdvance,
      };
      moveToken(toGo, player);
    }
  },
  advanceToIllinoisAve = {
    text: "In your passionate search for Waldo, it crosses your mind that he may be hiding on Illinois Avenue. Dash to Illinois Avenue.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(advanceToIllinoisAve), 1);
      chanceDeckDiscarded.push(advanceToIllinoisAve);
      let player = gameStatus.currentPlayerTurn;
      let numberToAdvance;
      if (board.indexOf(player.onSpace) > 24) {
        numberToAdvance = 28;
      }
      else {
        numberToAdvance = 24 - board.indexOf(player.onSpace);
      }
      let toIllinoisAvenue = {
        total: numberToAdvance,
      };
      moveToken(toIllinoisAvenue, player);
    }
  },
  advanceToUtiliy = {
    text: "You decide that utilities deserve some relevance because reasons. Advance to the nearest Utility. If unowned, you may buy it from the bank. If owned, throw dice and pay owner 10 times the amount thrown.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(advanceToUtiliy), 1);
      chanceDeckDiscarded.push(advanceToUtiliy);
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
  },
  advanceToStCharles = {
    text: "You discover that you have mutant powers, so you enroll at the Xavier Institute. Advance to  the Xavier Institute, located on St. Charles Place. If you pass Go, collect $200.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(advanceToStCharles), 1);
      chanceDeckDiscarded.push(advanceToStCharles);
      let player = gameStatus.currentPlayerTurn;
      let numberToAdvance;
      if (board.indexOf(player.onSpace) > 30) {
        numberToAdvance = 15;
      }
      else if (board.indexOf(player.onSpace) > 20) {
        numberToAdvance = 29;
      }
      else {
        numberToAdvance = 4;
      }
      let toStCharlesPlace = {
        total: numberToAdvance,
      };
      moveToken(toStCharlesPlace, player);
    }
  },
  advanceToRailroad = {
    text: "You really, really like trains and train stations, so advance to the naerest railroad and pay the owner twice what he/she is entitled. If railroad is unowned, you may buy it from the bank.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(advanceToRailroad), 1);
      chanceDeckDiscarded.push(advanceToRailroad);
      let player = gameStatus.currentPlayerTurn;
      let numberToAdvance;
      if (player.onSpace === chance1) {
        numberToAdvance = 8;
      }
      else if (player.onSpace === chance2) {
        numberToAdvance = 3;
      }
      else {
        numberToAdvance = 9;
      }
      let toRailroad = {
        total: numberToAdvance,
      };
      multiplier = 2;
      moveToken(toRailroad, player);
    }
  },
  advanceToRailroadTwo = {
    text: "You really, really like trains and train stations, so advance to the naerest railroad and pay the owner twice what he/she is entitled. If railroad is unowned, you may buy it from the bank.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(advanceToRailroadTwo), 1);
      chanceDeckDiscarded.push(advanceToRailroadTwo);
      let player = gameStatus.currentPlayerTurn;
      let numberToAdvance;
      if (player.onSpace === chance1) {
        numberToAdvance = 8;
      }
      else if (player.onSpace === chance2) {
        numberToAdvance = 3;
      }
      else {
        numberToAdvance = 9;
      }
      let toRailroad = {
        total: numberToAdvance,
      };
      multiplier = 2;
      moveToken(toRailroad, player);
    }
  },
  alaskaPFD = {
    text: "Collect your Alaska Permanant Fund Dividend of $50.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(alaskaPFD), 1);
      chanceDeckDiscarded.push(alaskaPFD);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 50);
      endTurn();
    }
  },
  jailFreeChance = {
    text: 'The government has decided that your business ventures are "too big to fail" and is prepared to issue a pardon. You may use this pardon to get out of jail free. This card may be kept until needed or traded/sold.',
    buttonText: 'Okay',
    title: "?",
    isMortgaged: false,
    price: 0,
    cardClass: "jail-free-chance",
    owner: null,
    result: function() {
      let jailFreeIndex = chanceDeck.indexOf(jailFreeChance);
      chanceDeck.splice(jailFreeIndex, 1);
      let player = gameStatus.currentPlayerTurn;
      jailFreeChance.owner = player;
      player.properties.push(jailFreeChance);
      $(".three").empty();
      changePlayerColumn(player);
      endTurn();
    },
    playerClickResult: function() {
      $(".three > .player-details").addClass("chance");
      $(".three > .player-details").append($(".reference > .chance").html());
      $(".three > .player-details > .chance-text").append(jailFreeChance.text);
      $(".three > .player-details > .btn-chance-result").append("Click here to close.");
      $(".three > .player-details > .btn-chance-result").css("display", "inline");
      $(".three > .player-details > .btn-chance-result").removeClass("btn-chance-result");
      $(".three > .player-details").removeClass("hidden");
    }
  },
  goBackThree = {
    text: "Go back three spaces, stupid.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(goBackThree), 1);
      chanceDeckDiscarded.push(goBackThree);
      let player = gameStatus.currentPlayerTurn;
      let moveBackThree = {
        total: 3,
      };
      moveToken(moveBackThree, player, "backward");
    }
  },
    goToJailChance = {
      text: "What in the blazes is wrong with you?! While making a friendly vist to Alaska, you shove a moose out of a flightseeing aircraft. You are no doubt aware that this is illegal, so got to jail. Go directly to jail. Do not pass Go. Do not collect $200.",
      buttonText: "Okay, officer. BTW, was it okay for me to wake that bear to take a selfie with it?",
      result: function() {
        chanceDeck.splice(chanceDeck.indexOf(goToJailChance), 1);
        chanceDeckDiscarded.push(goToJailChance);
        let player = gameStatus.currentPlayerTurn;
        moveTokenDirectlyTo(jail, player);
        $("." + player.token.class).remove();
        $(player.onSpace.boardSpace).append("<img src=" + player.token.image + " alt='boot' class='token active'>");
        $(".active").addClass(`token ${player.token.class}`);
        $("." + player.token.class).css(player.inJailSpace);
        $(".active").removeClass("active");
        player.inJail = true;
        player.lastDiceResult.doubles = false;
        player.numberOfTurnsInJail = 0;
        $("#board-details").empty();
        $("#board-details").removeClass();
        $("#board-details").addClass("board-details hidden");
        endTurn();
      }
    },
    propertyRepair = {
      text: "Make general repairs on all your property: for each house, pay $25; for each hotel, pay $100.",
      buttonText: "Okay",
      result: function() {
        chanceDeck.splice(chanceDeck.indexOf(propertyRepair), 1);
        chanceDeckDiscarded.push(propertyRepair);
        let player = gameStatus.currentPlayerTurn;
        let coloredProperties = player.properties.filter(property => property.type === "coloredProperty");
        let moneyOwed = 0;
        for (let property of player.properties) {
          if (property.housesHotel === 5) {
            moneyOwed += 200;
          }
          else {
            moneyOwed += 25 * property.housesHotel;
          }
        }
        pay(player, freeParking.jackpot, moneyOwed);
        endTurn();
      }
    },
    poorTax = {
      text: "You are poor. You must pay a $15 Poor Tax because you are poor.",
      buttonText: "Okay",
      result: function() {
        chanceDeck.splice(chanceDeck.indexOf(poorTax), 1);
        chanceDeckDiscarded.push(poorTax);
        let player = gameStatus.currentPlayerTurn;
        pay(player, freeParking.jackpot, 15);
        // moneyChange(player, -15);
        endTurn();
      }
    },
    advanceToReading = {
      text: "Read a book on the Reading Railroad. Advance to Reading Railroad. If you pass Go, collect $200.",
      buttonText: "Okay",
      result: function() {
        chanceDeck.splice(chanceDeck.indexOf(advanceToReading), 1);
        chanceDeckDiscarded.push(advanceToReading);
        let player = gameStatus.currentPlayerTurn;
        let numberToAdvance;
        if (player.onSpace === chance1) {
          numberToAdvance = 38;
        }
        else if (player.onSpace === chance2) {
          numberToAdvance = 23;
        }
        else if (player.onSpace === chance3) {
          numberToAdvance = 9;
        }
        let toReadingRailroad = {
          total: numberToAdvance,
        };
        moveToken(toReadingRailroad, player);
      }
    },
    advanceToBoardwalk = {
      text: "Take a walk on the boardwalk. Advance token to Boardwalk.",
      buttonText: "Okay",
      result: function() {
        chanceDeck.splice(chanceDeck.indexOf(advanceToBoardwalk), 1);
        chanceDeckDiscarded.push(advanceToBoardwalk);
        let player = gameStatus.currentPlayerTurn;
        let numberToAdvance = 39 - board.indexOf(player.onSpace);
        let toBoardwalk = {
          total: numberToAdvance,
        };
        moveToken(toBoardwalk, player);
      },
    },
    payFiftyToAll = {
      text: "Pay each player $50.",
      buttonText: "Okay",
      result: function() {
        chanceDeck.splice(chanceDeck.indexOf(payFiftyToAll), 1);
        chanceDeckDiscarded.push(payFiftyToAll);
        let playerPaying = gameStatus.currentPlayerTurn;
        for (let player of activePlayers) {
          if (player !== playerPaying) {
            pay(playerPaying, player, 50);
          }
          endTurn();
        }
      }
    },
  walletFound = {
    text: "You find a lost wallet on the street with $150 cash. You chose not to search for its owner or turn it into the police, proving to the other players that you do not have a soul.",
    buttonText: "Okay",
    result: function() {
      chanceDeck.splice(chanceDeck.indexOf(walletFound), 1);
      chanceDeckDiscarded.push(walletFound);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 150);
      endTurn();
    }
  },
];

let chanceDeckDiscarded = [];

let communityChestDeck = [
  advanceToGoCommunityChest = {
    text: "The police catch you trying to open the chest! You make a run for it, but you don't lose them until you are back at Go. Advance to Go.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(advanceToGoCommunityChest), 1);
      communityChestDeckDiscarded.push(advanceToGoCommunityChest);
      let player = gameStatus.currentPlayerTurn;
      let numberToAdvance = 40 - board.indexOf(player.onSpace);
      let toGo = {
        total: numberToAdvance,
      };
      moveToken(toGo, player);
    }
  },
  bankError = {
    text: "Bank error in your favor. Collect $200 without a second thought.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(bankError), 1);
      communityChestDeckDiscarded.push(bankError);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 200);
      endTurn();
    }
  },
  doctorsFee = {
    text: "Doctor's fees. Pay $50.",
    buttonText: "$50? That's it?!",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(doctorsFee), 1);
      communityChestDeckDiscarded.push(doctorsFee);
      let player = gameStatus.currentPlayerTurn;
      pay(player, freeParking.jackpot, 50);
      // moneyChange(player, -50);
      endTurn();
    }
  },
  stockSale = {
    text: "From sale of stock you get $50.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(stockSale), 1);
      communityChestDeckDiscarded.push(stockSale);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 50);
      endTurn();
    }
  },
  jailFreeCommunityChest = {
    text: "Get out of Jail free.",
    buttonText: "Okay",
    title: "Community Chest",
    isMortgaged: false,
    price: 0,
    owner: null,
    cardClass: "jail-free-community-chest",
    result: function() {
      let player = gameStatus.currentPlayerTurn;
      jailFreeCommunityChest.owner = player;
      communityChestDeck.splice(communityChestDeck.indexOf(jailFreeCommunityChest), 1);
      $(".three").empty();
      changePlayerColumn(player);
      endTurn();
    },
    playerClickResult: function() {
      $(".three > .player-details").addClass("community-chest");
      $(".three > .player-details").append($(".reference > .community-chest").html());
      $(".three > .player-details > .community-chest-text").append(jailFreeCommunityChest.text);
      $(".three > .player-details > .btn-cc-result").append("Click here to close.");
      $(".three > .player-details > .btn-cc-result").css("display", "inline");
      $(".three > .player-details > .btn-cc-result").removeClass("btn-cc-result");
      $(".three > .player-details").removeClass("hidden");
    }
  },
  goToJailCommunityChest = {
    text: "The developer caught you writing a listing in a sentence but FAILING to use an OXFORD COMMA, so go to Jail. Go directly to jail. Do not pass Go. Do not collect $200.",
    buttonText: "But, but...it was all there fault!",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(goToJailCommunityChest), 1);
      communityChestDeckDiscarded.push(goToJailCommunityChest);
      let player = gameStatus.currentPlayerTurn;
      moveTokenDirectlyTo(jail, player);
      $("." + player.token.class).remove();
      $(player.onSpace.boardSpace).append("<img src=" + player.token.image + " alt='boot' class='token active'>");
      $(".active").addClass(`token ${player.token.class}`);
      $("." + player.token.class).css(player.inJailSpace);
      $(".active").removeClass("active");
      player.inJail = true;
      player.lastDiceResult.doubles = false;
      player.numberOfTurnsInJail = 0;
      $("#board-details").empty();
      $("#board-details").removeClass();
      $("#board-details").addClass("board-details hidden");
      endTurn();
    }
  },
  spiderSaved = {
    text: "You have broken into a burning building and come out having saved a helpless spider and her hatchlings! The rest of the players admiringly give you $50.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(spiderSaved), 1);
      communityChestDeckDiscarded.push(spiderSaved);
      let playerReceiving = gameStatus.currentPlayerTurn;
      for (let player of activePlayers) {
        if (player !== playerReceiving) {
          pay(player, playerReceiving, 50);
        }
      }
      endTurn();
    }
  },
  holidayCash = {
    text: "Your relatives send you cash for the holidays, because the poor souls haven't a clue what else to send. Collect $100.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(holidayCash), 1);
      communityChestDeckDiscarded.push(holidayCash);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 100);
      endTurn();
    }
  },
  incomeTaxRefund = {
    text: "Income Tax refund!...but you only get $20.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(incomeTaxRefund), 1);
      communityChestDeckDiscarded.push(incomeTaxRefund);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 20);
      endTurn();
    }
  },
  happyBirthday = {
    text: "Happy Birthday! Collect $10 from every player.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(happyBirthday), 1);
      communityChestDeckDiscarded.push(happyBirthday);
      let playerReceiving = gameStatus.currentPlayerTurn;
      for (let player of activePlayers) {
        if (player !== playerReceiving) {
          pay(player, playerReceiving, 10);
          // moneyChange(player, -10);
          // moneyChange(playerReceiving, 10);
        }
      }
      endTurn();
    }
  },
  lifeInsurance = {
    text: "Within the box you find your life insurance fund, and you decide to cash it prematurely for yourself. Collect $100.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(lifeInsurance), 1);
      communityChestDeckDiscarded.push(lifeInsurance);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 100);
      endTurn();
    }
  },
  healthInsurance = {
    text: "Pay your beloved health insurance premium of $50.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(healthInsurance), 1);
      communityChestDeckDiscarded.push(healthInsurance);
      let player = gameStatus.currentPlayerTurn;
      pay(player, freeParking.jackpot, 50);
      // moneyChange(player, -50);
      endTurn();
    }
  },
  schoolFee = {
    text: "Pay your tiny little school fee of $50.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(schoolFee), 1);
      communityChestDeckDiscarded.push(schoolFee);
      let player = gameStatus.currentPlayerTurn;
      pay(player, freeParking.jackpot, 50);
      // moneyChange(player, -50);
      endTurn();
    }
  },
  constultancyFee = {
    text: "Receive consultancy fee of $25.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(constultancyFee), 1);
      communityChestDeckDiscarded.push(constultancyFee);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 25);
      endTurn();
    }
  },
  streetRepairs = {
    text: "You tried (and failed) to kill a spider with a sledgehammer, and now you must pay street repairs. Pay $40 for each house and $115 for each hotel.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(streetRepairs), 1);
      communityChestDeckDiscarded.push(streetRepairs);
      let player = gameStatus.currentPlayerTurn;
      coleredProperties = player.properties.filter(property => property.type === "coloredProperty");
      let moneyOwed = 0;
      for (let property of coleredProperties) {
        if (property.housesHotel === 5) {
          moneyOwed += 275;
        }
        else {
          moneyOwed += 40 * property.housesHotel;
        }
      }
      pay(player, freeParking.jackpot, moneyOwed);
      // moneyChange(player, -moneyOwed);
      endTurn();
    }
  },
  beautyContest = {
    text: "You may have dashing charm and killer looks, but you still only win second prize in a beauty contest. Collect $10.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(beautyContest), 1);
      communityChestDeckDiscarded.push(beautyContest);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 10);
      endTurn();
    }
  },
  youInherit = {
    text: "At long last, your billionaire uncle has passed! However, you get hardly a passing mention in his bill, and only inherit $100. You cannont help but sulk into your pillow at this lousy inheritance.",
    buttonText: "Okay",
    result: function() {
      communityChestDeck.splice(communityChestDeck.indexOf(youInherit), 1);
      communityChestDeckDiscarded.push(youInherit);
      let player = gameStatus.currentPlayerTurn;
      moneyChange(player, 100);
      endTurn();
    }
  },
];

let communityChestDeckDiscarded = [];

// BOARD OBJECT ARRAYS

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
  marvinGardens,
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

const properties = board.filter(function(space) {
  return (space.type === "coloredProperty") || (space.type === "railroad") || (space.type === "utility");
});

const purple = properties.filter(function(property) {
  return property.color === "purple";
});

const lightBlue = properties.filter(function(property) {
  return property.color === "light-blue";
});

const magenta = properties.filter(function(property) {
  return property.color === "magenta";
});

const orange = properties.filter(function(property) {
  return property.color === "orange";
});

const red = properties.filter(function(property) {
  return property.color === "red";
});

const yellow = properties.filter(function(property) {
  return property.color === "yellow";
});

const green = properties.filter(function(property) {
  return property.color === "green";
});

const blue = properties.filter(function(property) {
  return property.color === "blue";
});

const colors = [purple, lightBlue, magenta, orange, red, yellow, green, blue];

const propertyCategories = [
  ["purple", 2],
  ["light-blue", 3],
  ["magenta", 3],
  ["orange", 3],
  ["red", 3],
  ["yellow", 3],
  ["green", 3],
  ["blue", 2],
  ["railroad", 4],
  ["utility", 2],
  ["electric", 0],
  ["water", 0],
  ["cards", 2],
];

const propertyCategoriesColor = propertyCategories.slice(0, 8);

const jailFreeCards = [
  jailFreeChance,
  jailFreeCommunityChest
];

const boardClassArray = board.map(function(space) {
  return space.boardClass;
});

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

const player1 = {
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
    for (let i = 0; i <= player1.properties.length - 1; i++) {
      if (player1.properties[i].type === "railroad") {
        count++;
      }
    }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player1.properties.length - 1; i++) {
      if (player1.properties[i].type === "utility") {
        count++;
      }
    }
    return count;
  },
  totalNetWorth: function() {
    let total = player1.money;
    for (let property of player1.properties) {
      total += property.price;
    }
    return total;
  },
  jailFreeCards: 0,
  playerNumber: 1,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

const player2 = {
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
    for (let i = 0; i <= player2.properties.length - 1; i++) {
      if (player2.properties[i].type === "railroad") {
        count++;
      }
    }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player2.properties.length - 1; i++) {
      if (player2.properties[i].type === "utility") {
        count++;
      }
    }
    return count;
  },
  totalNetWorth: function() {
    let total = player2.money;
    for (let property of player2.properties) {
      total += property.price;
    }
    return total;
  },
  jailFreeCards: 0,
  playerNumber: 2,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

const player3 = {
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
    for (let i = 0; i <= player3.properties.length - 1; i++) {
      if (player3.properties[i].type === "railroad") {
        count++;
      }
    }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player3.properties.length - 1; i++) {
      if (player3.properties[i].type === "utility") {
        count++;
      }
    }
    return count;
  },
  totalNetWorth: function() {
    let total = player3.money;
    for (let property of player3.properties) {
      total += property.price;
    }
    return total;
  },
  jailFreeCards: 0,
  playerNumber: 3,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

const player4 = {
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
    for (let i = 0; i <= player4.properties.length - 1; i++) {
      if (player4.properties[i].type === "railroad") {
        count++;
      }
    }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player4.properties.length - 1; i++) {
      if (player4.properties[i].type === "utility") {
        count++;
      }
    }
    return count;
  },
  totalNetWorth: function() {
    let total = player4.money;
    for (let property of player4.properties) {
      total += property.price;
    }
    return total;
  },
  jailFreeCards: 0,
  playerNumber: 4,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

const player5 = {
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
    for (let i = 0; i <= player5.properties.length - 1; i++) {
      if (player5.properties[i].type === "railroad") {
        count++;
      }
    }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player5.properties.length - 1; i++) {
      if (player5.properties[i].type === "utility") {
        count++;
      }
    }
    return count;
  },
  totalNetWorth: function() {
    let total = player5.money;
    for (let property of player5.properties) {
      total += property.price;
    }
    return total;
  },
  jailFreeCards: 0,
  playerNumber: 5,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

const player6 = {
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
    for (let i = 0; i <= player6.properties.length - 1; i++) {
      if (player6.properties[i].type === "railroad") {
        count++;
      }
    }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player6.properties.length - 1; i++) {
      if (player6.properties[i].type === "utility") {
        count++;
      }
    }
    return count;
  },
  totalNetWorth: function() {
    let total = player6.money;
    for (let property of player6.properties) {
      total += property.price;
    }
    return total;
  },
  jailFreeCards: 0,
  playerNumber: 6,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

const player7 = {
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
    for (let i = 0; i <= player7.properties.length - 1; i++) {
      if (player7.properties[i].type === "railroad") {
        count++;
      }
    }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player7.properties.length - 1; i++) {
      if (player7.properties[i].type === "utility") {
        count++;
      }
    }
    return count;
  },
  totalNetWorth: function() {
    let total = player7.money;
    for (let property of player7.properties) {
      total += property.price;
    }
    return total;
  },
  jailFreeCards: 0,
  playerNumber: 7,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

const player8 = {
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
    for (let i = 0; i <= player8.properties.length - 1; i++) {
      if (player8.properties[i].type === "railroad") {
        count++;
      }
    }
    return count;
  },
  numberOfUtilities: function() {
    let count = 0;
    for (let i = 0; i <= player8.properties.length - 1; i++) {
      if (player8.properties[i].type === "utility") {
        count++;
      }
    }
    return count;
  },
  totalNetWorth: function() {
    let total = player8.money;
    for (let property of player8.properties) {
      total += property.price;
    }
    return total;
  },
  jailFreeCards: 0,
  playerNumber: 8,
  lastDiceResult: null,
  numberOfDoubles: 0,
  inJail: false,
  numberOfTurnsInJail: 0,
};

// GAME STATUS

const gameStatus = {
  currentPlayerTurn: player1,
  freeParkingJackpotOn: false,
  passGoDouble: false,
  landOnGoDouble: false,
};

// INITIAL VARIABLES

let numberOfPlayers = null;
let activePlayers = [player1, player2, player3, player4, player5, player6, player7, player8];
let activePlayersOrdered = [];
let multiplier = 1;
let onPlayer = 1;
let cardDrawn;
const firstThroughEighth = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

const tokensMatch = [
  ["boot", "cannon", "car", "dog", "hat", "horse-and-rider", "iron", "sack-of-money", "ship", "thimble", "wheelbarrow"],
  [boot, cannon, car, dog, hat, horseAndRider, iron, sackOfMoney, ship, thimble, wheelbarrow]
];

// FOODOO
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

// FUNCTIONS

function rollDice() {
  let player = gameStatus.currentPlayerTurn;
  let diceBaseImage = "images/dicex.png";
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  let diceResult = {
    dice1: dice1,
    dice1Image: diceBaseImage.replace("x", String(dice1)),
    dice2: dice2,
    dice2Image: diceBaseImage.replace("x", String(dice2)),
    total: dice1 + dice2,
    doubles: dice1 === dice2,
  };
  return diceResult;
}

function moneyChange(player, money) {
  player.money += money;
  $("." + player.playerOrder + " > p:last-child").html("$" + player.money);
}

function colorChangeDarkerBlue(item) {
  item.style.backgroundColor = "#8ac6d1";
}

function colorBack(item) {
  item.style.backgroundColor = "initial";
}

function moveToChosen(playerChoice) {
  $(playerChoice).remove();
  $(".chosen-order > ul").append(playerChoice);

  for (let player of activePlayers) {
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

// MOVING TOKENS AND SPACE LANDING

function moveToken(diceResult, player, direction="forward") {
  $(".page-button-blocker").removeClass("hidden");
  let arr = [];
  for (let i = 1; i <= diceResult.total; i++) {
    arr.push(i);
  }
  arr.forEach(function(num) {
    setTimeout(function() {
      $("." + player.token.class).remove();
      if (board.indexOf(player.onSpace) === 39) {
        player.onSpace = go;
        moneyChange(player, 200);
        if ($(".three > .player-name").html() === player.name) {
          $(".three").empty();
          changePlayerColumn(player);
        }
      }
      else {
        if (direction === "backward") {
          player.onSpace = board[board.indexOf(player.onSpace) - 1];
        }
        else {
          player.onSpace = board[board.indexOf(player.onSpace) + 1];
        }
      }
      $(player.onSpace.boardSpace).append("<img src=" + player.token.image + " alt=" + player.token.class + " class='token active'>");
      $(".active").addClass(`token ${player.token.class}`);
      $("." + player.token.class).css(player.tokenSpace);
      $(".active").removeClass("active");
      if (num === arr.length) {
        $(".page-button-blocker").addClass("hidden");
        player.onSpace.playerLanded = player;
        player.onSpace.result();
      }
    }, 333 * num);
  });
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
    $(".board-button-blocker").css("display", "block");
    if (space.owner === null) {
      $(".board-details > .btn-buy").css("display", "inline");
      $(".board-details > .btn-auction").css("display", "inline");
      buy(space);
    }
    else if (space.owner !== space.playerLanded && !space.isMortgaged) {
      let moneyOwed = space.rent[space.housesHotel];
      if ((space.isMonopoly) && (space.housesHotel === 0)) {
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
    $(".board-button-blocker").css("display", "block");
    if (space.owner === null) {
      buy(space);
    }
    else if (space.owner !== space.playerLanded && !space.isMortgaged) {
      let moneyOwed = space.rent[space.owner.numberOfRailroads() - 1] * multiplier;
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
      $(".board-button-blocker").css("display", "block");
      buy(space);
    }
    else if (space.owner !== space.playerLanded && !space.isMortgaged) {
      if (multiplier === 1) {
        displayUtility(space, "board-details", "one");
        $(".board-button-blocker").css("display", "block");
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
    else {
      displayUtility(space, "board-details", "one");
      $(".board-button-blocker").css("display", "block");
      $(".closer").css("display", "inline");
      endTurn();
    }
  }
  else if (space.type === "go") {
    displayGo();
    $(".board-button-blocker").css("display", "block");
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
    $(".board-button-blocker").css("display", "block");
    if (gameStatus.freeParkingJackpotOn) {
      moneyChange(player, freeParking.jackpot.money);
      freeParking.jackpot.money = 0;
    }
    endTurn();
  }
  else if (space.type === "goToJail") {
    $(".board-details").empty();
    displayGoToJail();
    $(".board-button-blocker").css("display", "block");
  }
  else if (space.type === "chance") {
    $(".board-details").empty();
    displayChance();
    $(".board-button-blocker").css("display", "block");
  }
  else if (space.type === "communityChest") {
    $(".board-details").empty();
    displayCommunityChest();
    $(".board-button-blocker").css("display", "block");
  }
  else if (space.type === "incomeTax") {
    $(".board-details").empty();
    displayIncomeTax();
    $(".board-button-blocker").css("display", "block");
  }
  else if (space.type === "luxuryTax") {
    $(".board-details").empty();
    displayLuxuryTax();
    $(".board-button-blocker").css("display", "block");
  }
  else {
    console.log("not a valid space");
    console.log(space);
    endTurn();
  }
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

// DISPLAYING SPACES

function displayProperty(property, location, column) {
  $("." + location).empty();
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

  for (let color of propertyCategories) {
    $("." + column + "> ." + location).removeClass(color[0]);
  }

  $("." + column + "> ." + location).addClass("titledeed " + property.color);
  $("." + column + "> ." + location + "> .btn-buy").append("Buy" + property.title + " - $" + property.price);
  let moneyOwed = property.rent[property.housesHotel];
  if ((property.isMonopoly) && (property.housesHotel === 0)) {
    moneyOwed = property.rent[6];
  }
  $("." + column + "> ." + location + " > .btn-rent").append("Rent - $" + moneyOwed);
  $("." + column + "> ." + location + " > .closer").css("display", "none");
  $("." + column + "> ." + location).removeClass("hidden");
}

function displayRailroad(property, location, column) {
  $("." + location).empty();
  $("." + column + "> ." + location).append($(".reference > .railroad").html());
  $("." + column + "> ." + location + " > .property-name").append(property.title);
  for (let color of propertyCategories) {
    $("." + column + "> ." + location).removeClass(color[0]);
  }
  $("." + column + "> ." + location).addClass("titledeed railroad");
  $("." + column + "> ." + location + "> .btn-buy").append("Buy" + property.title + " - $" + property.price);
  if (property.owner !== null) {
    let moneyOwed = property.rent[property.owner.numberOfRailroads() - 1] * multiplier;
    $("." + column + "> ." + location + "> .btn-rent").append("Rent $" + moneyOwed);
  }
  $("." + column + "> ." + location + "> .closer").css("display", "none");
  $("." + column + "> ." + location).removeClass("hidden");
}

function displayUtility(property, location, column) {
  $("." + location).empty();
  $("." + column + "> ." + location).append($(".reference > .utility").html());
  $("." + column + "> ." + location + " > .property-name").append(property.title);
  for (let color of propertyCategories) {
    $("." + column + "> ." + location).removeClass(color[0]);
  }
  $("." + column + "> ." + location).addClass("titledeed " + property.utilityClass);
  $("." + column + "> ." + location + "> .btn-buy").append("Buy" + property.title + " - $" + property.price);
  if (property.owner !== null) {
    if (multiplier === 1) {
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

function displayMortgagedProperty(property) {
  $(".three > .player-details").empty();
  $(".three > .player-details").addClass("mortgaged");
  $(".three > .player-details").append($(".reference > .mortgaged").html());
  $(".three > .player-details > .property-name").append(property.title);
  $(".three > .player-details > .mortgage-value").append("for $" + property.mortgage);
  let moneyOwed = Math.round(1.1 * property.mortgage);
  $(".three > .player-details > .btn-lift-mortgage").append("Lift mortgage - $" + moneyOwed);
  $(".three > .player-details > .closer").css("display", "inline");
  if (property.owner.money >= moneyOwed) {
    $(".three > .player-details > .btn-lift-mortgage").css("display", "inline");
  }
  $(".three > .player-details").removeClass("hidden");
}

function displayGo() {
  $(".one > .board-details").empty();
  $(".one > .board-details").addClass("go-board");
  $(".one > .board-details").append($(".reference > .go-board").html());
  $(".one > .board-details > .closer").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
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

function displayChance() {
  $(".one > .board-details").addClass("chance-land");
  $(".one > .board-details").append($(".reference > .chance-land").html());
  $(".one > .board-details > .take-a-chance").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

function displayCommunityChest() {
  $(".one > .board-details").addClass("cc-land");
  $(".one > .board-details").append($(".reference > .cc-land").html());
  $(".one > .board-details > .open-chest").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

function displayIncomeTax() {
  $(".one > .board-details").empty();
  $(".one > .board-details").addClass("income-tax-board");
  $(".one > .board-details").append($(".reference > .income-tax-board").html());
  $(".one > .board-details > button").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

function displayLuxuryTax() {
  $(".one > .board-details").empty();
  $(".one > .board-details").addClass("luxury-tax-board");
  $(".one > .board-details").append($(".reference > .luxury-tax-board").html());
  $(".one > .board-details > button").css("display", "inline");
  $(".one > .board-details").removeClass("hidden");
}

// BUYING AND PAYING RENT

function buyHouseNumberCheck(property) {
  let player = property.owner;
  let colorGroup = player.properties.filter(function(thisProperty) {
    return thisProperty.color === property.color;
  });
  for (let thisProperty of colorGroup) {
    if (property.housesHotel > thisProperty.housesHotel) {
      return false;
    }
  }
  return true;
}

function sellHouseNumberCheck(property) {
  let player = property.owner;
  let colorGroup = player.properties.filter(function(thisProperty) {
    return thisProperty.color === property.color;
  });
  for (let thisProperty of colorGroup) {
    if (property.housesHotel < thisProperty.housesHotel) {
      return false;
    }
  }
  return true;
}

function buy(property) {
  $(".roll").css("display", "none");
  $(".end-turn").css("display", "none");
  $(".board-details > .btn-buy").empty();
  $(".board-details > .btn-buy").append("Buy " + property.title + " - $" + property.price);
  $(".board-details > .btn-buy").css("display", "inline");
  $(".board-details > .btn-auction").css("display", "inline");
}

function giveProperty(property, player) {
  player.properties.push(property);
  property.owner = player;
  checkForMonoply(player);
  $(".three").empty();
  changePlayerColumn(player);
}

function rent(money) {
  $(".roll").css("display", "none");
  $(".end-turn").css("display", "none");
  $(".board-details > .btn-rent").empty();
  $(".board-details > .btn-rent").append("Rent - $" + money);
  $(".board-details > .btn-rent").css("display", "inline");
}

function checkForMonoply(player) {
  for (let color of propertyCategoriesColor) {
    let playerPropertiesColor = player.properties.filter(function(nextProperty) {
      return nextProperty.color === color[0];
    });
    if (playerPropertiesColor.length === color[1] && playerPropertiesColor.length > 0) {
      for (let playerProperty of playerPropertiesColor) {
        playerProperty.isMonopoly = true;
      }
    }
  }
}

function pay(fromPlayer, toPlayer, money) {
  moneyChange(fromPlayer, -money);
  moneyChange(toPlayer, money);
  for (let player of activePlayers) {
    if ($(".three > .player-name").html() === player.name) {
      $(".three").empty();
      changePlayerColumn(player);
      break;
    }
  }

}
// OTHER FUNCTIONS

function freeParkingJackpotCheck(money) {
  if (gameStatus.freeParkingJackpotOn) {
    changeMoney(money, freeParking.jackpot);
  }
}

function changePlayerColumn(player) {
  $(".three").append($(".reference > .column-three-reference").html());
  $(".three > .player-heading > .player-name").append(player.name);
  $(".three > .player-heading > .vertical-middle").attr("src", player.token.image);
  $(".three > .player-heading > .vertical-middle").attr("alt", player.token.class);
  $(".three > .player-heading > .player-cash").append("$" + player.money);
  for (let color of propertyCategories) {
    for (let i = 1; i <= color[1]; i++) {
      for (let property of player.properties) {
        if (property.title === $(".three > .color-" + color[0] + " > tbody > tr > .td" + i +  " > .number-" + i).attr("title")) {
          $(".three > .color-" + color[0] + " > tbody > tr > .td" + i +  " > .number-" + i).removeClass("hidden");
        }
      }
    }
  }
}

// BUTTON CLICK EVENTS

// FIRST STRTING WINDOW: SELECTING THE NUMBER OF PLAYERS

$("#set-number").click(function() {
  numberOfPlayers = Number($("#number-of-players").val());
  for (i = 1; i <= 8 - numberOfPlayers; i++) {
    activePlayers.pop();
  }
  $(".number-of-players").css("display", "none");
  $(".names-tokens").css("display", "block");
  $(".number-of-players-eh").prepend(numberOfPlayers);
});

// SECOND STARTING WINDOW: SETTING NAMES AND TOKENS

$("#tokens").click(function() {
  $(".token-selected").attr("src", "images/token-" + $("#tokens").val() + ".png");
  $(".token-selected").attr("alt", $("#tokens :selected").text());
  $("#set-name-token").removeClass("hidden");
});

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

// THIRD STARTING WINDOW: SETTING THE TURN ORDER...

// ...BY DICE ROLL

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

// ...BY RANDOM ORDER

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

// ...BY PLAYER DECISION

$("#player-decide").click(function() {
  $(".turn-order-decider").css("display", "none");
  $(".player-decide").css("display", "block");

  for (let player of activePlayers) {
    $(".players-to-choose > ul").append("<li onmouseover = 'colorChangeDarkerBlue(this)' onmouseout = 'colorBack(this)' onclick = 'moveToChosen(this)'>" +
      "<strong>" + player.name + "</strong>" +
      "<img class='token-small'" +
      "src=" + player.token.image + " alt=" + player.token.class + "></li>");
  }

  onPlayer = 1;
  activePlayersOrdered = [];
});

// ...FOR RESET AND NEXT BOX

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

  for (let player of activePlayers) {
    $(".finalized-player-list").append("<li class='player-listing finalize-listing'><strong>" + player.name + "</strong> <img class='token-small' src=" + player.token.image + "></li>");
  }
});

// FOURTH BOX: FINALIZING SETUP

$(".play-game").click(function() {
  $(".game-start").css("display", "none");
  $(".column").css("display", "block");

  for (let player of activePlayers) {
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

  firstThroughEighth.forEach(function(div) {
    $(document).on("click", "." + div, function() {
      $(".three").empty();
      let playerIndex = firstThroughEighth.indexOf(div);
      let player = activePlayers[playerIndex];
      changePlayerColumn(player);
    });
  });

  // for (let div of firstThroughEighth) {
  //   $(document).on("click", "." + div, function() {
  //     $(".three").empty();
  //   });
  // }

  gameStatus.currentPlayerTurn = activePlayers[0];
});

// TO RESET STARTUP

$(".start-over").click(function() {
  location.reload();
});

// FOR THE MAIN GAME

$(".roll").click(function() {
  $(".roll").css("display", "none");
  let diceResult = rollDice();
  $('.dice1').attr("src", diceResult.dice1Image);
  $('.dice2').attr("src", diceResult.dice2Image);
  let player = gameStatus.currentPlayerTurn;
  player.lastDiceResult = diceResult;
  if (diceResult.doubles) {
    player.numberOfDoubles++;
  }
  if (player.numberOfDoubles === 3) {
    displayGoToJailDoubles();
  }
  else {
    moveToken(diceResult, player);
  }
});

$(".end-turn").click(function() {
  $(".one > button").css("display", "none");
  multiplier = 1;
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
    for (let card of jailFreeCards) {
      if (card.owner === nextPlayer) {
        $(".use-" + card.cardClass).css("display", "inline");
      }
    }
  }
  else {
    $(".roll").css("display", "inline");
  }
});

// PLAYER IN JAIL

$(".roll-riot").click(function() {
  $(".roll-riot").css("display", "none");
  $(".bribe").css("display", "none");
  let diceResult = rollDice();
  $('.dice1').attr("src", diceResult.dice1Image);
  $('.dice2').attr("src", diceResult.dice2Image);
  let player = gameStatus.currentPlayerTurn;
  player.lastDiceResult = diceResult;
  if (diceResult.doubles) {
    player.numberOfDoubles++;
    player.inJail = false;
    moveToken(diceResult, player);
  }
  else if (player.numberOfTurnsInJail === 3) {
    $(".bribe").css("display", "inline");
  }
  else {
    endTurn();
  }
});

$(".bribe").click(function() {
  $(".roll-riot").css("display", "none");
  $(".bribe").css("display", "none");
  let player = gameStatus.currentPlayerTurn;
  pay(player, freeParking.jackpot, 50);
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
  player.numberOfTurnsInJail = 0;
  $("#board-details").empty();
  $("#board-details").removeClass();
  $("#board-details").addClass("board-details hidden");
  $(".board-button-blocker").css("display", "none");
  endTurn();
});

$(document).on("click", ".use-jail-free-chance", function() {
  jailFreeChance.owner = null;
  chanceDeckDiscarded.push(jailFreeChance);
  $(".roll-riot").css("display", "none");
  $(".bribe").css("display", "none");
  let player = gameStatus.currentPlayerTurn;
  player.inJail = false;
  $("." + player.token.class).css(player.justVisitingSpace);
  $(".use-jail-free-chance").css("display", "none");
  $(".use-jail-free-community-chest").css("display", "none");
  endTurn();
});

$(document).on("click", ".use-jail-free-community-chest", function() {
  jailFreeCommunityChest.owner = null;
  communityChestDeckDiscarded.push(jailFreeCommunityChest);
  $(".roll-riot").css("display", "none");
  $(".bribe").css("display", "none");
  let player = gameStatus.currentPlayerTurn;
  player.inJail = false;
  $("." + player.token.class).css(player.justVisitingSpace);
  $(".use-jail-free-chance").css("display", "none");
  $(".use-jail-free-community-chest").css("display", "none");
  endTurn();
});

$(document).on("click", ".board-details > .take-a-chance", function() {
  if (chanceDeck.length === 0) {
    chanceDeck = chanceDeckDiscarded.slice(0);
    chanceDeckDiscarded.splice(0, chanceDeckDiscarded.length);
  }
  cardIndex = Math.floor(Math.random() * chanceDeck.length);
  cardDrawn = chanceDeck[cardIndex];
  $(".one > .board-details").removeClass("chance-land");
  $(".one > .board-details").empty();
  $(".one > .board-details").addClass("chance");
  $(".one > .board-details").append($(".reference > .chance").html());
  $(".one > .board-details > .chance-text").append(cardDrawn.text);
  $(".one > .board-details > .btn-chance-result").append(cardDrawn.buttonText);
  $(".one > .board-details > .btn-chance-result").css("display", "inline");
});

$(document).on("click", ".board-details > .btn-chance-result", function() {
  cardDrawn.result();
});

$(document).on("click", ".board-details > .open-chest", function() {
  if (communityChestDeck.length === 0) {
    communityChestDeck = communityChestDeckDiscarded.slice(0);
    communityChestDeckDiscarded.splice(0, communityChestDeckDiscarded.length);
  }
  $(".one > .board-details > .cc-land-img").attr("src", "images/chest-open.png");
  $(".one > .board-details > .open-chest").empty();
  $(".one > .board-details > .open-chest").append("Look in the chest, stupid.");
  $(".one > .board-details > button").removeClass("open-chest");
  $(".one > .board-details > button").addClass("look-in-chest");
});

$(document).on("click", ".board-details > .pay-10-percent", function() {
  let player = gameStatus.currentPlayerTurn;
  let moneyOwed = Math.round(0.1 * player.totalNetWorth());
  pay(player, freeParking.jackpot, moneyOwed);
  endTurn();
});

$(document).on("click", ".board-details > .pay-200", function() {
  let player = gameStatus.currentPlayerTurn;
  pay(player, freeParking.jackpot, 200);
  endTurn();
});

$(document).on("click", ".board-details > .pay-luxury", function() {
  let player = gameStatus.currentPlayerTurn;
  pay(player, freeParking.jackpot, 75);
  endTurn();
});

$(document).on("click", ".board-details > .look-in-chest", function() {
  cardIndex = Math.floor(Math.random() * communityChestDeck.length);
  cardDrawn = communityChestDeck[cardIndex];
  console.log(cardDrawn);
  $(".one > .board-details").removeClass("cc-land");
  $(".one > .board-details").empty();
  $(".one > .board-details").addClass("community-chest");
  $(".one > .board-details").append($(".reference > .community-chest").html());
  $(".one > .board-details > .community-chest-text").append(cardDrawn.text);
  $(".one > .board-details > .btn-cc-result").append(cardDrawn.buttonText);
  $(".one > .board-details > .btn-cc-result").css("display", "inline");
});

$(document).on('click', ".board-details > .btn-cc-result", function() {
  cardDrawn.result();
});

$(document).on('click', ".board-details > .closer", function() {
  $("#board-details").empty();
  $("#board-details").removeClass();
  $("#board-details").addClass("board-details hidden");
  $(".board-button-blocker").css("display", "none");
});

$(document).on("click", ".player-details > .closer", function() {
  $("#player-details").empty();
  $("#player-details").removeClass();
  $("#player-details").addClass("player-details hidden");
});

$(document).on("click", ".btn-mortgage", function() {
  let property;
  for (let propertyCheck of properties) {
    if (propertyCheck.title === $(".player-details > .property-name").html()) {
      property = propertyCheck;
    }
  }
  let player = property.owner;
  property.isMortgaged = true;
  moneyChange(player, property.mortgage);
  $("#player-details").empty();
  $("#player-details").removeClass();
  $("#player-details").addClass("player-details");
  displayMortgagedProperty(property);
});

$(document).on("click", ".btn-lift-mortgage", function() {
  let property;
  for (let propertyCheck of properties) {
    if (propertyCheck.title === $(".player-details > .property-name").html()) {
      property = propertyCheck;
    }
  }
  let player = property.owner;
  let moneyOwed = Math.round(1.1 * property.mortgage);
  pay(player, freeParking.jackpot, moneyOwed);
  $("#player-details").empty();
  $("#player-details").removeClass();
  $("#player-details").addClass("player-details");
  property.isMortgaged = false;
  if (property.type === "coloredProperty") {
    displayProperty(property, "player-details", "three");
  }
  else if (property.type === "railroad") {
    displayRailroad(property, "player-details", "three");
  }
  else if (property.type === "utility") {
    displayUtility(property, "player-detils", "three");
  }
  $(".player-details > button").css("display", "none");
  $(".player-details > .closer").css("display", "inline");
  $(".player-details > .btn-mortgage").append("Mortgage - $" + property.mortgage);
  $(".player-details > .btn-mortgage").css("display", "inline");
  $(".player-details > .btn-buy-house").append("Buy house - $" + property.priceHouse);
  $(".player-details > .btn-buy-hotel").append("Buy hotel - $" + property.priceHouse);
  $(".player-details > .btn-sell-house").append("Sell house - $" + 0.5 * property.priceHouse);
  $(".player-details > .btn-sell-hotel").append("Sell hotel - $" + 0.5 * property.priceHouse);
  if (player.money >= property.priceHouse) {
    $(".player-details > .btn-buy-house").css("display", "inline");
  }
});

for (let property of properties) {
  $(document).on("click", "." + property.boardClass, function() {
    $(".board-details").empty();
    property.boardClickResult();
    $(".board-details > button").css("display", "none");
    $(".board-details > .closer").css("display", "inline");
  });
}

for (let property of properties) {
  $(document).on("click", "." + property.boardClass + "-player", function() {
    $(".player-details").empty();
    property.playerClickResult();
    $(".player-details > button").css("display", "none");
    $(".player-details > .closer").css("display", "inline");
    $(".player-details > .btn-mortgage").append("Mortgage - $" + property.mortgage);
    if (property.housesHotel === 0) {
      $(".player-details > .btn-mortgage").css("display", "inline");
      if (property.owner.money >= Math.round(1.1 * property.mortgage)) {
        $(".player-details > .btn-lift-mortgage").css("display", "inline");
      }
    }
    $(".player-details > .btn-buy-house").append("Buy house - $" + property.priceHouse);
    $(".player-details > .btn-buy-hotel").append("Buy hotel - $" + property.priceHouse);
    $(".player-details > .btn-sell-house").append("Sell house - $" + 0.5 * property.priceHouse);
    $(".player-details > .btn-sell-hotel").append("Sell hotel - $" + 0.5 * property.priceHouse);
    if ((property.isMonopoly) && (!property.isMortgaged) && (property.owner.money >= property.priceHouse) && (buyHouseNumberCheck(property))) {
      if (property.housesHotel < 4) {
        $(".player-details > .btn-buy-house").css("display", "inline");
      }
      else if (property.housesHotel === 4) {
        $(".player-details > .btn-buy-hotel").css("display", "inline");
      }
    }
    if ((property.housesHotel > 0) && (property.housesHotel < 5) && (sellHouseNumberCheck(property))) {
      $(".player-details > .btn-sell-house").css("display", "inline");
    }
    else if (property.housesHotel === 5) {
      $(".player-details > .btn-sell-hotel").css("display", "inline");
    }
  });
}

for (let card of jailFreeCards) {
  $(document).on("click", "." + card.cardClass, function() {
    $(".player-details").empty();
    card.playerClickResult();
  });
}

$(document).on("click", ".btn-buy-house", function() {
  let property;
  for (let propertyCheck of properties) {
    if (propertyCheck.title === $(".player-details > .property-name").html()) {
      property = propertyCheck;
    }
  }
  let player = property.owner;
  pay(player, freeParking.jackpot, property.priceHouse);
  property.housesHotel++;
  if (player.money < property.priceHouse || !buyHouseNumberCheck(property)) {
    $(".player-details > .btn-buy-house").css("display", "none");
  }
  if (property.housesHotel > 0) {
    $(".player-details > .btn-sell-house").css("display", "inline");
    $(".player-details > .btn-mortgage").css("display", "none");
  }
  if ((property.housesHotel === 4) && (player.money >= property.priceHouse) && (buyHouseNumberCheck(property))) {
    $(".player-details > .btn-buy-house").css("display", "none");
    $(".player-details > .btn-buy-hotel").css("display", "inline");
  }
});

$(document).on("click", ".btn-buy-hotel", function() {
  let property;
  for (let propertyCheck of properties) {
    if (propertyCheck.title === $(".player-details > .property-name").html()) {
      property = propertyCheck;
    }
  }
  let player = property.owner;
  pay(player, freeParking.jackpot, property.priceHouse);
  property.housesHotel++;
  $(".player-details > .btn-buy-hotel").css("display", "none");
  $(".player-details > .btn-sell-house").css("display", "none");
  $(".player-details > .btn-sell-hotel").css("display", "inline");
});

$(document).on("click", ".btn-sell-hotel", function() {
  let property;
  for (let propertyCheck of properties) {
    if (propertyCheck.title === $(".player-details > .property-name").html()) {
      property = propertyCheck;
    }
  }
  let player = property.owner;
  moneyChange(player, 0.5 * property.priceHouse);
  property.housesHotel--;
  $(".player-details > .btn-sell-hotel").css("display", "none");
  $(".player-details > .btn-buy-hotel").css("display", "inline");
  if (sellHouseNumberCheck(property)) {
    $(".player-details > .btn-sell-house").css("display", "inline");
  }
});

$(document).on("click", ".btn-sell-house", function() {
  let property;
  for (let propertyCheck of properties) {
    if (propertyCheck.title === $(".player-details > .property-name").html()) {
      property = propertyCheck;
    }
  }
  let player = property.owner;
  moneyChange(player, 0.5 * property.priceHouse);
  property.housesHotel--;
  if (property.housesHotel === 0) {
    $(".player-details > .btn-sell-house").css("display", "none");
    $(".player-details > .btn-mortgage").css("display", "inline");
  }
  if (player.money >= property.priceHouse) {
    $(".player-details > .btn-buy-house").css("display", "inline");
  }
  if (!sellHouseNumberCheck(property)) {
    $(".player-details > .btn-sell-house").css("display", "none");
  }
  $(".player-details > .btn-buy-hotel").css("display", "none");
});

$(document).on("click", ".btn-buy", function() {
  let player = gameStatus.currentPlayerTurn;
  let property = player.onSpace;
  pay(player, freeParking.jackpot, property.price);
  player.properties.push(property);
  property.owner = player;
  checkForMonoply(player);
  $(".btn-buy").css("display", "none");
  $(".btn-auction").css("display", "none");
  $(".closer").css("display", "inline");
  $(".btn-buy").empty();
  $(".three").empty();
  changePlayerColumn(player);
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

$(document).on("click", ".btn-rent", function() {
  let playerPaying = gameStatus.currentPlayerTurn;
  let property = playerPaying.onSpace;
  let playerReceiving = property.owner;
  let moneyOwed;
  if (property.type === "coloredProperty") {
    moneyOwed = property.rent[property.housesHotel];
    if ((property.isMonopoly) && (property.housesHotel === 0)) {
      moneyOwed = property.rent[6];
    }
  }
  else if (property.type === "railroad") {
    moneyOwed = property.rent[property.owner.numberOfRailroads() - 1] * multiplier;
  }
  else if (property.type === "utility") {
    if (multiplier === 1) {
      if (space.owner.numberOfUtilities() === 1) {
        multiplier = 4;
      }
      else if (space.owner.numberOfUtilities() === 2) {
        multiplier = 10;
      }
    }
    moneyOwed = playerPaying.utilityDice.total * multiplier;
  }
  multiplier = 1;
  pay(playerPaying, playerReceiving, moneyOwed);
  $(".board-details > .btn-rent").css("display", "none");
  $(".board-details > .closer").css("display", "inline");
  endTurn();
});

// // TEST LOGIC
//
// activePlayers = [player4, player2, player3, player1, player6, player5];
//
// firstThroughEighth = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];
//
// for (let player of activePlayers) {
//   $("#go").append("<img src=" + player.token.image + " alt=" + player.token.class + " class='token active'>");
//   $(".active").addClass(`token ${player.token.class}`);
//   $("." + player.token.class).css(player.tokenSpace);
//   player.onSpace = go;
//   $(".active").removeClass("active");
//   player.playerOrder = firstThroughEighth[activePlayers.indexOf(player)];
//   $("." + player.playerOrder).css("display", "block");
//   $("." + player.playerOrder + " > p:first-child").html(player.name);
//   $("." + player.playerOrder + " > img").attr("src", player.token.image);
//   $("." + player.playerOrder + " > p:last-child").html("$" + player.money);
// }
//
// firstThroughEighth.forEach(function(div) {
//   $(document).on("click", "." + div, function() {
//     $(".three").empty();
//     let playerIndex = firstThroughEighth.indexOf(div);
//     let player = activePlayers[playerIndex];
//     changePlayerColumn(player);
//   });
// });
//
// gameStatus.currentPlayerTurn = activePlayers[0];
//
// $(".display-test-board").click(function() {
//   displayProperty(balticAvenue, "board-details", "one");
//   $(".board-details > .closer").css("display", "inline");
// });
//
// $(".display-test-player").click(function() {
//   displayProperty(kentuckyAvenue, "player-details", "three");
//   $(".player-details > .closer").css("display", "inline");
// });
