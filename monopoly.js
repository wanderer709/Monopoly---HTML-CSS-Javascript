/*jshint esversion: 6 */

// TOKENS

function Token(tokenClass, image) {
	this.tokenClass = tokenClass;
	this.image = image;
};

const boot = new Token('boot', 'images/token-boot.png');

const car = new Token('car', 'images/token-car.png');

const cannon = new Token('cannon', 'images/token-cannon.png');

const dog = new Token('dog', 'images/token-dog.png');

const hat = new Token('hat', 'images/token-hat.png');

const horseAndRider = new Token('horse-and-rider', 'images/token-horse-and-rider.png');

const iron = new Token('iron', 'images/token-iron.png');

const sackOfMoney = new Token('sack-of-money', 'images/token-sack-of-money.png');

const ship = new Token('ship', 'images/token-ship.png');

const thimble = new Token('thimble', 'images/token-thimble.png')

const wheelbarrow = new Token('wheelbarrow', 'images/token-wheelbarrow.png')

const noToken = new Token('no-token', '')

// COLORED PROPERTIES

function ColoredProperty(boardSpace, boardClass, boardSide, title, color, price, priceHouse, mortgage, rent) {
	this.boardSpace = boardSpace;
	this.boardClass = boardClass;
	this.boardSide = boardSide;
	this.title = title;
	this.color = color;
	this.price = price;
	this.priceHouse = priceHouse;
	this.mortgage = mortgage;
	this.rent = rent;
	this.type = 'coloredProperty';
	this.isMortgaged = false;
	this.isMonopoly = false;
	this.housesHotel = 0;
	this.owner = null;
	this.playerLanded = null;
	this.rent = rent;
	this.result = function () {
		landOn(this);
	};
	this.boardClickResult = function () {
		displayProperty(this, 'board-details', 'one');
	};
	this.playerClickResult = function () {
		if (this.isMortgaged) {
			displayMortgagedProperty(this);
		} else {
			displayProperty(this, 'player-details', 'three');
		}
	};
	this.trader1AssetClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-1-assets-details');
		} else {
			displayTradingProperty(this, 'trader-1-assets-details');
		}
	};
	this.trader2AssetClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-2-assets-details');
		} else {
			displayTradingProperty(this, 'trader-2-assets-details');
		}
	};
	this.trader1OfferingsClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-1-offerings-details');
		} else {
			displayTradingProperty(this, 'trader-1-offerings-details');
		}
	};
	this.trader2OfferingsClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-2-offerings-details');
		} else {
			displayTradingProperty(this, 'trader-2-offerings-details');
		}
	};
};

let mediterraneanAvenue = new ColoredProperty($('#mediterranean-ave'), 'mediterranean-ave', 'bottom', 'Mediterranean Avenue', 'purple', 60, 50, 30, [2, 10, 30, 90, 160, 250, 4]);

let balticAvenue = new ColoredProperty($('#baltic-ave'), 'baltic-ave', 'bottom', 'Baltic Avenue', 'purple', 60, 50, 30, [4, 20, 60, 180, 320, 450, 8]);

let orientalAvenue = new ColoredProperty($('#oriental-ave'), 'oriental-ave', 'bottom', 'Oriental Avenue', 'light-blue', 100, 50, 50, [6, 30, 90, 270, 400, 550, 12]);

let vermontAvenue = new ColoredProperty($('#vermont-ave'), 'vermont-ave', 'bottom', 'Vermont Avenue', 'light-blue', 100, 50, 50, [6, 30, 90, 270, 400, 550, 12]);

let connecticutAvenue = new ColoredProperty($('#connecticut-ave'), 'connecticut-ave', 'bottom', 'Connecticut Avenue', 'light-blue', 120, 50, 60, [8, 40, 100, 300, 450, 600, 16]);

let stCharlesPlace = new ColoredProperty($('#st-charles-place'), 'st-charles-place', 'left', 'St. Charles Place', 'magenta', 140, 100, 70, [10, 50, 150, 450, 625, 750, 20]);

let statesAvenue = new ColoredProperty($('#states-ave'), 'states-ave', 'left', 'States Avenue', 'magenta', 140, 100, 70, [10, 50, 150, 450, 625, 750, 20]);

let virginiaAvenue = new ColoredProperty($('#virginia-ave'), 'virginia-ave', 'left', 'Virginia Avenue', 'magenta', 160, 100, 80, [12, 60, 180, 500, 700, 900, 24]);

let stJamesPlace = new ColoredProperty($('#st-james-place'), 'st-james-place', 'left', 'St. James Place', 'orange', 180, 100, 90, [14, 70, 200, 550, 750, 950, 28]);

let tenneseeAvenue = new ColoredProperty($('#tennessee-ave'), 'tennessee-ave', 'left', 'Tennessee Avenue', 'orange', 180, 100, 90, [14, 70, 200, 550, 750, 950, 28]);

let newYorkAvenue = new ColoredProperty($('#new-york-ave'), 'new-york-ave', 'left', 'New York Avenue', 'orange', 200, 100, 100, [16, 80, 220, 600, 800, 1000, 32]);

let kentuckyAvenue = new ColoredProperty($('#kentucky-ave'), 'kentucky-ave', 'top', 'Kentucky Avenue', 'red', 220, 150, 110, [18, 90, 250, 700, 875, 1050, 36]);

let indianaAvenue = new ColoredProperty($('#indiana-ave'), 'indiana-ave', 'top', 'Indiana Avenue', 'red', 220, 150, 110, [18, 90, 250, 700, 875, 1050, 36]);

let illinoisAvenue = new ColoredProperty($('#illinois-ave'), 'illinois-ave', 'top', 'Illinois Avenue', 'red', 240, 150, 120, [20, 100, 300, 750, 925, 1100, 40]);

let atlanticAvenue = new ColoredProperty($('#atlantic-ave'), 'atlantic-ave', 'top', 'Atlantic Avenue', 'yellow', 260, 150, 130, [22, 110, 330, 800, 975, 1150, 44]);

let ventnorAvenue = new ColoredProperty($('#ventnor-ave'), 'ventnor-ave', 'top', 'Ventnor Avenue', 'yellow', 260, 150, 130, [22, 110, 330, 800, 975, 1150, 44]);

let marvinGardens = new ColoredProperty($('#marvin-gardens'), 'marvin-gardens', 'top', 'Marvin Gardens', 'yellow', 280, 150, 140, [24, 120, 360, 850, 1025, 1200, 48]);

let pacificAvenue = new ColoredProperty($('#pacific-ave'), 'pacific-ave', 'right', 'Pacific Avenue', 'green', 300, 200, 150, [26, 130, 390, 900, 1100, 1275, 52]);

let northCarolinaAvenue = new ColoredProperty($('#north-carolina-ave'), 'north-carolina-ave', 'right', 'North Carolina Avenue', 'green', 300, 200, 150, [26, 130, 300, 900, 1100, 1275, 52]);

let pennsylvaniaAvenue = new ColoredProperty($('#pennsylvania-ave'), 'pennsylvania-ave', 'right', 'Pennsylvania Avenue', 'green', 320, 200, 160, [28, 150, 450, 1000, 1200, 1400, 56]);

let parkPlace = new ColoredProperty($('#park-place'), 'park-place', 'right', 'Park Place', 'blue', 350, 200, 175, [35, 175, 500, 1100, 1300, 1500, 70]);

let boardwalk = new ColoredProperty($('#boardwalk'), 'boardwalk', 'right', 'Boardwalk', 'blue', 400, 200, 200, [50, 200, 600, 1400, 1700, 2000, 100]);

// RAILROADS

function Railroad(boardSpace, boardClass, title) {
	this.boardSpace = boardSpace;
	this.boardClass = boardClass;
	this.title = title;
	this.price = 200;
	this.mortgage = 100;
	this.isMortgaged = false;
	this.rent = [25, 50, 100, 200];
	this.type = 'railroad';
	this.owner = null;
	this.playerLanded = null;
	this.housesHotel = 0;
	this.result = function () {
		landOn(this);
	};
	this.boardClickResult = function () {
		displayRailroad(this, 'board-details', 'one');
	};
	this.playerClickResult = function () {
		if (this.isMortgaged) {
			displayMortgagedProperty(this);
		} else {
			displayRailroad(this, 'player-details', 'three');
		}
	};
	this.trader1AssetClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-1-assets-details');
		} else {
			displayTradingRailroad(this, 'trader-1-assets-details');
		}
	};
	this.trader2AssetClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-2-assets-details');
		} else {
			displayTradingRailroad(this, 'trader-2-assets-details');
		}
	};
	this.trader1OfferingsClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-1-offerings-details');
		} else {
			displayTradingRailroad(this, 'trader-1-offerings-details');
		}
	};
	this.trader2OfferingsClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-2-offerings-details');
		} else {
			displayTradingRailroad(this, 'trader-2-offerings-details');
		}
	};
};

let readingRailroad = new Railroad($('#reading-railroad'), 'reading-railroad', 'Reading Railroad');

let pennsylvaniaRailroad = new Railroad($('#pennsylvania-railroad'), 'pennsylvania-railroad', 'Pennsylvania Railroad');

let bORailroad = new Railroad($('#bo-railroad'), 'bo-railroad', 'B&O Railroad');

let shortLine = new Railroad($('#short-line'), 'short-line', 'Short Line');

// UTILITIES

function Utility(boardSpace, boardClass, utilityClass, title) {
	this.boardSpace = boardSpace;
	this.boardClass = boardClass;
	this.utilityClass = utilityClass;
	this.title = title;
	this.price = 150;
	this.mortgage = 75;
	this.type = 'utility';
	this.isMortgaged = false;
	this.owner = null;
	this.playerLanded = null;
	this.housesHotel = 0;
	this.result = function () {
		landOn(this);
	};
	this.boardClickResult = function () {
		displayUtility(this, 'board-details', 'one');
	};
	this.playerClickResult = function () {
		if (this.isMortgaged) {
			displayMortgagedProperty(this);
		} else {
			displayUtility(this, 'player-details', 'three');
		}
	};
	this.trader1AssetClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-1-assets-details');
		} else {
			displayTradingUtility(this, 'trader-1-assets-details');
		}
	};
	this.trader2AssetClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-2-assets-details');
		} else {
			displayTradingUtility(this, 'trader-2-assets-details');
		}
	};
	this.trader1OfferingsClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-1-offerings-details');
		} else {
			displayTradingUtility(this, 'trader-1-offerings-details');
		}
	};
	this.trader2OfferingsClickResult = function () {
		if (this.isMortgaged) {
			displayTradingMortgagedProperty(this, 'trader-2-offerings-details');
		} else {
			displayTradingUtility(this, 'trader-2-offerings-details');
		}
	};
};

let electricCompany = new Utility($('#electric-company'), 'electric-company', 'electric', 'Electric Company');

let waterWorks = new Utility($('#water-works'), 'water-works', 'water', 'Water Works');

// CORNER SPACES

let go = {
	boardSpace: $('#go'),
	boardClass: 'go',
	title: 'Go',
	type: 'go',
	playerLanded: null,
	result: function () {
		landOn(go);
	},
	boardClickResult: function () {
		return false;
	}
};

let jail = {
	boardSpace: $('#jail'),
	boardClass: 'jail',
	title: 'Jail',
	type: 'jail',
	playerLanded: null,
	playersInJail: [],
	result: function () {
		landOn(jail);
	},
	boardClickResult: function () {
		return false;
	}
};

let freeParking = {
	boardSpace: $('#free-parking'),
	boardClass: 'free-parking',
	title: 'Free Parking',
	type: 'freeParking',
	jackpot: {
		token: noToken,
		money: 0
	},
	playerLanded: null,
	result: function () {
		landOn(freeParking);
	},
	boardClickResult: function () {
		return false;
	}
};

let goToJail = {
	boardSpace: $('#go-to-jail'),
	boardClass: 'go-to-jail',
	title: 'Go To Jail',
	type: 'goToJail',
	playerLanded: null,
	result: function () {
		landOn(goToJail);
	},
	boardClickResult: function () {
		return false;
	}
};

// OTHER SPACES

function CardSpace(boardSpace, boardClass, title, type) {
	this.boardSpace = boardSpace;
	this.boardClass = boardClass;
	this.title = title;
	this.type = type;
	this.playerLanded = null;
	this.result = function () {
		landOn(this);
	};
	this.boardClickResult = function () {
		return false;
	};
};

let chance1 = new CardSpace($('#chance1'), 'chance1', 'Chance', 'chance');

let chance2 = new CardSpace($('#chance2'), 'chance2', 'Chance', 'chance');

let chance3 = new CardSpace($('#chance3'), 'chance3', 'Chance', 'chance');

let communityChest1 = new CardSpace($('#community-chest1'), 'community-chest1', 'Community Chest', 'communityChest');

let communityChest2 = new CardSpace($('#community-chest2'), 'community-chest2', 'Community Chest', 'communityChest');

let communityChest3 = new CardSpace($('#community-chest3'), 'community-chest3', 'Community Chest', 'communityChest');

let incomeTax = {
	boardSpace: $('#income-tax'),
	boardClass: 'income-tax',
	title: 'Income Tax',
	type: 'incomeTax',
	playerLanded: null,
	result: function () {
		landOn(incomeTax);
	},
	boardClickResult: function () {
		return false;
	}
};

let luxuryTax = {
	boardSpace: $('#luxury-tax'),
	boardClass: 'luxury-tax',
	title: 'Luxury Tax',
	type: 'luxuryTax',
	playerLanded: null,
	result: function () {
		landOn(luxuryTax);
	},
	boardClickResult: function () {
		return false;
	}
};

// CHANCE AND COMMUNITY CHEST DECK

let chanceDeck = [
	(advanceToGoChance = {
		text: 'Advance to Go like a good dog.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(advanceToGoChance), 1);
			chanceDeckDiscarded.push(advanceToGoChance);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance = 40 - board.indexOf(player.onSpace);
			let toGo = {
				total: numberToAdvance
			};
			moveToken(toGo, player);
			return true;
		}
	}),
	(advanceToIllinoisAve = {
		text: 'In your passionate search for Waldo, it crosses your mind that he may be hiding on Illinois Avenue. Dash to Illinois Avenue.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(advanceToIllinoisAve), 1);
			chanceDeckDiscarded.push(advanceToIllinoisAve);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance;
			if (board.indexOf(player.onSpace) > 24) {
				numberToAdvance = 28;
			} else {
				numberToAdvance = 24 - board.indexOf(player.onSpace);
			}
			let toIllinoisAvenue = {
				total: numberToAdvance
			};
			moveToken(toIllinoisAvenue, player);
			return true;
		}
	}),
	(advanceToUtiliy = {
		text: 'You decide that utilities deserve some relevance because reasons. Advance to the nearest Utility. If unowned, you may buy it from the bank. If owned, throw dice and pay owner 10 times the amount thrown.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(advanceToUtiliy), 1);
			chanceDeckDiscarded.push(advanceToUtiliy);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance;
			if (player.onSpace === chance1) {
				numberToAdvance = 5;
			} else if (player.onSpace === chance2) {
				numberToAdvance = 6;
			} else if (player.onSpace === chance3) {
				numberToAdvance = 16;
			}
			multiplier = 10;
			let toUtility = {
				total: numberToAdvance
			};
			moveToken(toUtility, player);
			return true;
		}
	}),
	(advanceToStCharles = {
		text: 'You discover that you have mutant powers, so you enroll at the Xavier Institute. Advance to  the Xavier Institute, located on St. Charles Place. If you pass Go, collect $200.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(advanceToStCharles), 1);
			chanceDeckDiscarded.push(advanceToStCharles);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance;
			if (board.indexOf(player.onSpace) > 30) {
				numberToAdvance = 15;
			} else if (board.indexOf(player.onSpace) > 20) {
				numberToAdvance = 29;
			} else {
				numberToAdvance = 4;
			}
			let toStCharlesPlace = {
				total: numberToAdvance
			};
			moveToken(toStCharlesPlace, player);
			return true;
		}
	}),
	(advanceToRailroad = {
		text: 'You really, really like trains and train stations, so advance to the nearest railroad and pay the owner twice what he/she is entitled. If railroad is unowned, you may buy it from the bank.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(advanceToRailroad), 1);
			chanceDeckDiscarded.push(advanceToRailroad);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance;
			if (player.onSpace === chance1) {
				numberToAdvance = 8;
			} else if (player.onSpace === chance2) {
				numberToAdvance = 3;
			} else {
				numberToAdvance = 9;
			}
			let toRailroad = {
				total: numberToAdvance
			};
			multiplier = 2;
			moveToken(toRailroad, player);
			return true;
		}
	}),
	(advanceToRailroadTwo = {
		text: 'You really, really like trains and train stations, so advance to the nearest railroad and pay the owner twice what he/she is entitled. If railroad is unowned, you may buy it from the bank.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(advanceToRailroadTwo), 1);
			chanceDeckDiscarded.push(advanceToRailroadTwo);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance;
			if (player.onSpace === chance1) {
				numberToAdvance = 8;
			} else if (player.onSpace === chance2) {
				numberToAdvance = 3;
			} else {
				numberToAdvance = 9;
			}
			let toRailroad = {
				total: numberToAdvance
			};
			multiplier = 2;
			moveToken(toRailroad, player);
			return true;
		}
	}),
	(alaskaPFD = {
		text: 'Collect your Alaska Permanant Fund Dividend of $50.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(alaskaPFD), 1);
			chanceDeckDiscarded.push(alaskaPFD);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 50);
			endTurn();
			return true;
		}
	}),
	(jailFreeChance = {
		text: 'The government has decided that your business ventures are "too big to fail" and is prepared to issue a pardon. You may use this pardon to get out of jail free. This card may be kept until needed or traded/sold.',
		buttonText: 'Okay',
		title: 'Chance',
		type: 'card',
		isMortgaged: false,
		price: 0,
		cardClass: 'jail-free-chance',
		owner: null,
		result: function () {
			let jailFreeIndex = chanceDeck.indexOf(jailFreeChance);
			chanceDeck.splice(jailFreeIndex, 1);
			let player = gameStatus.currentPlayerTurn;
			jailFreeChance.owner = player;
			player.properties.push(jailFreeChance);
			$('.three').empty();
			changePlayerColumn(player);
			endTurn();
			return true;
		},
		playerClickResult: function () {
			$('.three > .player-details').addClass('chance');
			$('.three > .player-details').append($('.reference > .chance').html());
			$('.three > .player-details > .chance-text').append(jailFreeChance.text);
			$('.three > .player-details > .btn-chance-result').append('Click here to close.');
			$('.three > .player-details > .btn-chance-result').addClass('closer');
			$('.three > .player-details > .btn-chance-result').css('display', 'inline');
			$('.three > .player-details > .btn-chance-result').removeClass('btn-chance-result');
			$('.three > .player-details').removeClass('hidden');
		},
		trader1AssetClickResult: function () {
			$('.trading-box .trader-1-assets-details').addClass('chance');
			$('.trading-box .trader-1-assets-details').append($('.reference > .chance').html());
			$('.trading-box .trader-1-assets-details > .chance-text').append(jailFreeChance.text);
			$('.trading-box .trader-1-assets-details > .btn-chance-result').append('Close');
			$('.trading-box .trader-1-assets-details > .btn-chance-result').addClass('btn-trade-closer');
			$('.trading-box .trader-1-assets-details > .btn-chance-result').css('display', 'inline');
			$('.trading-box .trader-1-assets-details > .btn-chance-result').removeClass('btn-chance-result');
			$('.three > .player-button-blocker').css('display', 'block');
			$('.trading-box .trader-1-assets-details > .btn-add').css('display', 'inline');
			$('.trading-box .trader-1-assets-details').removeClass('hidden');
		},
		trader2AssetClickResult: function () {
			$('.trading-box .trader-2-assets-details').addClass('chance');
			$('.trading-box .trader-2-assets-details').append($('.reference > .chance').html());
			$('.trading-box .trader-2-assets-details > .chance-text').append(jailFreeChance.text);
			$('.trading-box .trader-2-assets-details > .btn-chance-result').append('Close');
			$('.trading-box .trader-2-assets-details > .btn-chance-result').addClass('btn-trade-closer');
			$('.trading-box .trader-2-assets-details > .btn-chance-result').css('display', 'inline');
			$('.trading-box .trader-2-assets-details > .btn-chance-result').removeClass('btn-chance-result');
			$('.three > .player-button-blocker').css('display', 'block');
			$('.trading-box .trader-2-assets-details > .btn-add').css('display', 'inline');
			$('.trading-box .trader-2-assets-details').removeClass('hidden');
		},
		trader1OfferingsClickResult: function () {
			$('.trading-box .trader-1-offerings-details').addClass('chance');
			$('.trading-box .trader-1-offerings-details').append($('.reference > .chance').html());
			$('.trading-box .trader-1-offerings-details > .chance-text').append(jailFreeChance.text);
			$('.trading-box .trader-1-offerings-details > .btn-chance-result').append('Close');
			$('.trading-box .trader-1-offerings-details > .btn-chance-result').addClass('btn-trade-closer');
			$('.trading-box .trader-1-offerings-details > .btn-chance-result').css('display', 'inline');
			$('.trading-box .trader-1-offerings-details > .btn-chance-result').removeClass('btn-chance-result');
			$('.three > .player-button-blocker').css('display', 'block');
			$('.trading-box .trader-1-offerings-details > .btn-return').css('display', 'inline');
			$('.trading-box .trader-1-offerings-details').removeClass('hidden');
		},
		trader2OfferingsClickResult: function () {
			$('.trading-box .trader-2-offerings-details').addClass('chance');
			$('.trading-box .trader-2-offerings-details').append($('.reference > .chance').html());
			$('.trading-box .trader-2-offerings-details > .chance-text').append(jailFreeChance.text);
			$('.trading-box .trader-2-offerings-details > .btn-chance-result').append('Close');
			$('.trading-box .trader-2-offerings-details > .btn-chance-result').addClass('btn-trade-closer');
			$('.trading-box .trader-2-offerings-details > .btn-chance-result').css('display', 'inline');
			$('.trading-box .trader-2-offerings-details > .btn-chance-result').removeClass('btn-chance-result');
			$('.three > .player-button-blocker').css('display', 'block');
			$('.trading-box .trader-2-offerings-details > .btn-return').css('display', 'inline');
			$('.trading-box .trader-2-offerings-details').removeClass('hidden');
		}
	}),
	(goBackThree = {
		text: "Your fortune cookie says: 'Go back three spaces, but always look ahead.'",
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(goBackThree), 1);
			chanceDeckDiscarded.push(goBackThree);
			let player = gameStatus.currentPlayerTurn;
			let moveBackThree = {
				total: 3
			};
			moveToken(moveBackThree, player, 'backward');
			return true;
		}
	}),
	(goToJailChance = {
		text: 'What in the blazes is wrong with you?! While making a friendly vist to Alaska, you shove a moose out of a flightseeing aircraft. You are no doubt aware that this is illegal, so go to jail. Go directly to jail. Do not pass Go. Do not collect $200.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(goToJailChance), 1);
			chanceDeckDiscarded.push(goToJailChance);
			let player = gameStatus.currentPlayerTurn;
			moveTokenDirectlyTo(jail, player);
			$('.' + player.token.tokenClass).remove();
			$(player.onSpace.boardSpace).append('<img src=' + player.token.image + " alt='boot' class='token active'>");
			$('.active').addClass(`token ${player.token.tokenClass}`);
			$('.' + player.token.tokenClass).css(player.inJailSpace);
			$('.active').removeClass('active');
			player.inJail = true;
			player.lastDiceResult.doubles = false;
			player.numberOfTurnsInJail = 0;
			$('#board-details').empty();
			$('#board-details').removeClass();
			$('#board-details').addClass('board-details hidden');
			endTurn();
			return true;
		}
	}),
	(propertyRepair = {
		text: 'Because you put so much effort into keeping spiders off of your property, termites and mosquitoes have successfully invaded it, so you must now make general repairs and tenant compensation: for each house, pay $25; for each hotel, pay $100.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(propertyRepair), 1);
			chanceDeckDiscarded.push(propertyRepair);
			let player = gameStatus.currentPlayerTurn;
			// let coloredProperties = player.properties.filter((property) => property.type === 'coloredProperty');
			let moneyOwed = 0;
			for (let property of player.properties) {
				if (property.housesHotel === 5) {
					moneyOwed += 200;
				} else {
					moneyOwed += 25 * property.housesHotel;
				}
			}
			let moneyCheck = pay(player, freeParking.jackpot, moneyOwed);
			if (moneyCheck) {
				endTurn();
				return true;
			}
		}
	}),
	(poorTax = {
		text: 'You are poor. You must pay a $15 Poor Tax because you are poor.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(poorTax), 1);
			chanceDeckDiscarded.push(poorTax);
			let player = gameStatus.currentPlayerTurn;
			let moneyCheck = pay(player, freeParking.jackpot, 15);
			if (moneyCheck) {
				endTurn();
				return true;
			} else {
				return false;
			}
		}
	}),
	(advanceToReading = {
		text: 'Read a book on the Reading Railroad. Advance to Reading Railroad. If you pass Go, collect $200.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(advanceToReading), 1);
			chanceDeckDiscarded.push(advanceToReading);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance;
			if (player.onSpace === chance1) {
				numberToAdvance = 38;
			} else if (player.onSpace === chance2) {
				numberToAdvance = 23;
			} else if (player.onSpace === chance3) {
				numberToAdvance = 9;
			}
			let toReadingRailroad = {
				total: numberToAdvance
			};
			moveToken(toReadingRailroad, player);
			return true;
		}
	}),
	(advanceToBoardwalk = {
		text: 'Take a walk under the boardwalk. Advance token to Boardwalk.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(advanceToBoardwalk), 1);
			chanceDeckDiscarded.push(advanceToBoardwalk);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance = 39 - board.indexOf(player.onSpace);
			let toBoardwalk = {
				total: numberToAdvance
			};
			moveToken(toBoardwalk, player);
			return true;
		}
	}),
	(payFiftyToAll = {
		text: 'The other players find that you have been fracking underneath their property. Pay each of them $50 as a settlement.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(payFiftyToAll), 1);
			chanceDeckDiscarded.push(payFiftyToAll);
			let playerPaying = gameStatus.currentPlayerTurn;
			let moneyCheck = pay(playerPaying, freeParking.jackpot, 50 * (activePlayers.length - 1));
			if (moneyCheck) {
				for (let player of activePlayers) {
					if (player !== playerPaying) {
						pay(freeParking.jackpot, player, 50);
					}
				}
				endTurn();
				return true;
			} else {
				return false;
			}
		}
	}),
	(walletFound = {
		text: 'You find a lost wallet on the street with $150 cash. You chose not to search for its owner or turn it in to the police, proving to the other players that you do not have a soul.',
		buttonText: 'Okay',
		result: function () {
			chanceDeck.splice(chanceDeck.indexOf(walletFound), 1);
			chanceDeckDiscarded.push(walletFound);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 150);
			endTurn();
			return true;
		}
	})
];

let chanceDeckDiscarded = [];

let communityChestDeck = [
	(advanceToGoCommunityChest = {
		text: "The police catch you trying to open the chest! You make a run for it, but you don't lose them until you are back at Go. Advance to Go.",
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(advanceToGoCommunityChest), 1);
			communityChestDeckDiscarded.push(advanceToGoCommunityChest);
			let player = gameStatus.currentPlayerTurn;
			let numberToAdvance = 40 - board.indexOf(player.onSpace);
			let toGo = {
				total: numberToAdvance
			};
			moveToken(toGo, player);
			return true;
		}
	}),
	(bankError = {
		text: 'Bank error in your favor. Collect $200 without a second thought.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(bankError), 1);
			communityChestDeckDiscarded.push(bankError);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 200);
			endTurn();
			return true;
		}
	}),
	(doctorsFee = {
		text: "Doctor's fees. Pay $50.",
		buttonText: "$50? That's it?!",
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(doctorsFee), 1);
			communityChestDeckDiscarded.push(doctorsFee);
			let player = gameStatus.currentPlayerTurn;
			let moneyCheck = pay(player, freeParking.jackpot, 50);
			if (moneyCheck) {
				endTurn();
				return true;
			} else {
				return false;
			}
		}
	}),
	(stockSale = {
		text: 'Collect $50 because you can.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(stockSale), 1);
			communityChestDeckDiscarded.push(stockSale);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 50);
			endTurn();
			return true;
		}
	}),
	(jailFreeCommunityChest = {
		text: 'Your connections with the local police allow you to get out of Jail free. This card may be kept until needed or sold.',
		buttonText: 'Okay',
		title: 'Community Chest',
		type: 'card',
		isMortgaged: false,
		price: 0,
		owner: null,
		cardClass: 'jail-free-community-chest',
		result: function () {
			let player = gameStatus.currentPlayerTurn;
			jailFreeCommunityChest.owner = player;
			communityChestDeck.splice(communityChestDeck.indexOf(jailFreeCommunityChest), 1);
			$('.three').empty();
			changePlayerColumn(player);
			endTurn();
			return true;
		},
		playerClickResult: function () {
			$('.three > .player-details').addClass('community-chest');
			$('.three > .player-details').append($('.reference > .community-chest').html());
			$('.three > .player-details > .community-chest-text').append(jailFreeCommunityChest.text);
			$('.three > .player-details > .btn-cc-result').append('Click here to close.');
			$('.three > .player-details > .btn-cc-result').addClass('closer');
			$('.three > .player-details > .btn-cc-result').css('display', 'inline');
			$('.three > .player-details > .btn-cc-result').removeClass('btn-cc-result');
			$('.three > .player-details').removeClass('hidden');
		},
		trader1AssetClickResult: function () {
			$('.trading-box .trader-1-assets-details').addClass('community-chest');
			$('.trading-box .trader-1-assets-details').append($('.reference > .community-chest').html());
			$('.trading-box .trader-1-assets-details > .community-chest-text').append(jailFreeCommunityChest.text);
			$('.trading-box .trader-1-assets-details > .btn-cc-result').append('Close');
			$('.trading-box .trader-1-assets-details > .btn-cc-result').addClass('btn-trade-closer');
			$('.trading-box .trader-1-assets-details > .btn-cc-result').css('display', 'inline');
			$('.trading-box .trader-1-assets-details > .btn-cc-result').removeClass('btn-cc-result');
			$('.three > .player-button-blocker').css('display', 'block');
			$('.trading-box .trader-1-assets-details > .btn-add').css('display', 'inline');
			$('.trading-box .trader-1-assets-details').removeClass('hidden');
		},
		trader2AssetClickResult: function () {
			$('.trading-box .trader-2-assets-details').addClass('community-chest');
			$('.trading-box .trader-2-assets-details').append($('.reference > .community-chest').html());
			$('.trading-box .trader-2-assets-details > .community-chest-text').append(jailFreeCommunityChest.text);
			$('.trading-box .trader-2-assets-details > .btn-cc-result').append('Close');
			$('.trading-box .trader-2-assets-details > .btn-cc-result').addClass('btn-trade-closer');
			$('.trading-box .trader-2-assets-details > .btn-cc-result').css('display', 'inline');
			$('.trading-box .trader-2-assets-details > .btn-cc-result').removeClass('btn-cc-result');
			$('.three > .player-button-blocker').css('display', 'block');
			$('.trading-box .trader-2-assets-details > .btn-add').css('display', 'inline');
			$('.trading-box .trader-2-assets-details').removeClass('hidden');
		},
		trader1OfferingsClickResult: function () {
			$('.trading-box .trader-1-offerings-details').addClass('community-chest');
			$('.trading-box .trader-1-offerings-details').append($('.reference > .community-chest').html());
			$('.trading-box .trader-1-offerings-details > .community-chest-text').append(jailFreeCommunityChest.text);
			$('.trading-box .trader-1-offerings-details > .btn-cc-result').append('Close');
			$('.trading-box .trader-1-offerings-details > .btn-cc-result').addClass('btn-trade-closer');
			$('.trading-box .trader-1-offerings-details > .btn-cc-result').css('display', 'inline');
			$('.trading-box .trader-1-offerings-details > .btn-cc-result').removeClass('btn-cc-result');
			$('.three > .player-button-blocker').css('display', 'block');
			$('.trading-box .trader-1-offerings-details > .btn-return').css('display', 'inline');
			$('.trading-box .trader-1-offerings-details').removeClass('hidden');
		},
		trader2OfferingsClickResult: function () {
			$('.trading-box .trader-2-offerings-details').addClass('community-chest');
			$('.trading-box .trader-2-offerings-details').append($('.reference > .community-chest').html());
			$('.trading-box .trader-2-offerings-details > .community-chest-text').append(jailFreeCommunityChest.text);
			$('.trading-box .trader-2-offerings-details > .btn-cc-result').append('Close');
			$('.trading-box .trader-2-offerings-details > .btn-cc-result').addClass('btn-trade-closer');
			$('.trading-box .trader-2-offerings-details > .btn-cc-result').css('display', 'inline');
			$('.trading-box .trader-2-offerings-details > .btn-cc-result').removeClass('btn-cc-result');
			$('.three > .player-button-blocker').css('display', 'block');
			$('.trading-box .trader-2-offerings-details > .btn-return').css('display', 'inline');
			$('.trading-box .trader-2-offerings-details').removeClass('hidden');
		}
	}),
	(goToJailCommunityChest = {
		text: 'The developer caught you FAILING to use an OXFORD COMMA before the last of a series of at least three items in a sentence, and as a deacon for the Goddess of Grammar, he demands that you go to Jail. Go directly to jail. Do not pass Go. Do not collect $200.',
		buttonText: 'But, but...it was all there fault!',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(goToJailCommunityChest), 1);
			communityChestDeckDiscarded.push(goToJailCommunityChest);
			let player = gameStatus.currentPlayerTurn;
			moveTokenDirectlyTo(jail, player);
			$('.' + player.token.tokenClass).remove();
			$(player.onSpace.boardSpace).append('<img src=' + player.token.image + " alt='boot' class='token active'>");
			$('.active').addClass(`token ${player.token.tokenClass}`);
			$('.' + player.token.tokenClass).css(player.inJailSpace);
			$('.active').removeClass('active');
			player.inJail = true;
			player.lastDiceResult.doubles = false;
			player.numberOfTurnsInJail = 0;
			$('#board-details').empty();
			$('#board-details').removeClass();
			$('#board-details').addClass('board-details hidden');
			endTurn();
			return true;
		}
	}),
	(spiderSaved = {
		text: 'You have broken into a burning building and come out having saved a helpless spider and her hatchlings! The rest of the players admiringly give you $50.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(spiderSaved), 1);
			communityChestDeckDiscarded.push(spiderSaved);
			let playerReceiving = gameStatus.currentPlayerTurn;
			if (yetToPay.length === 0) {
				yetToPay = activePlayers.slice();
				let index = yetToPay.indexOf(playerReceiving);
				yetToPay.splice(index, 1);
			}
			let moneyCheck;
			let yetToPayCopy = yetToPay.slice();
			for (let player of yetToPayCopy) {
				let PayerIndex = yetToPay.indexOf(player);
				moneyCheck = pay(player, playerReceiving, 50);
				if (moneyCheck) {
					yetToPay.splice(PayerIndex, 1);
				} else {
					return false;
				}
			}
			if (yetToPay.length === 0) {
				endTurn();
				return true;
			}
		}
	}),
	(holidayCash = {
		text: "Your relatives send you cash for the holidays, because the poor souls haven't a clue what else to send. Collect $100.",
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(holidayCash), 1);
			communityChestDeckDiscarded.push(holidayCash);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 100);
			endTurn();
			return true;
		}
	}),
	(incomeTaxRefund = {
		text: 'Income Tax refund!...but you only get $20.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(incomeTaxRefund), 1);
			communityChestDeckDiscarded.push(incomeTaxRefund);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 20);
			endTurn();
			return true;
		}
	}),
	(happyBirthday = {
		text: 'Happy Birthday! The rest of the players give you $10 to make it harder for you to demand extravagant gifts from them.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(happyBirthday), 1);
			communityChestDeckDiscarded.push(happyBirthday);
			let playerReceiving = gameStatus.currentPlayerTurn;
			if (yetToPay.length === 0) {
				yetToPay = activePlayers.slice();
				let index = yetToPay.indexOf(playerReceiving);
				yetToPay.splice(index, 1);
			}
			let moneyCheck;
			let yetToPayCopy = yetToPay.slice();
			for (let player of yetToPayCopy) {
				let PayerIndex = yetToPay.indexOf(player);
				moneyCheck = pay(player, playerReceiving, 10);
				if (moneyCheck) {
					yetToPay.splice(PayerIndex, 1);
				} else {
					return false;
				}
			}
			if (yetToPay.length === 0) {
				endTurn();
				return true;
			}
		}
	}),
	(bulgingChest = {
		text: 'The chest is locked tight, but it so full that you see a $100 bill poking through the cracks. You decide to take the $100 to help the community keep its chest together.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(bulgingChest), 1);
			communityChestDeckDiscarded.push(bulgingChest);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 100);
			endTurn();
			return true;
		}
	}),
	(healthInsurance = {
		text: 'Pay your beloved health insurance premium of $50.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(healthInsurance), 1);
			communityChestDeckDiscarded.push(healthInsurance);
			let player = gameStatus.currentPlayerTurn;
			let moneyCheck = pay(player, freeParking.jackpot, 50);
			if (moneyCheck) {
				endTurn();
				return true;
			} else {
				return false;
			}
		}
	}),
	(schoolFee = {
		text: 'Pay your student loan repayment bill of $50.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(schoolFee), 1);
			communityChestDeckDiscarded.push(schoolFee);
			let player = gameStatus.currentPlayerTurn;
			let moneyCheck = pay(player, freeParking.jackpot, 50);
			if (moneyCheck) {
				endTurn();
				return true;
			} else {
				return false;
			}
		}
	}),
	(scandalMoney = {
		text: 'You make up a scandal and receive $25 for the fake-scandal-derived merchandise you immediately proceed to sell.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(scandalMoney), 1);
			communityChestDeckDiscarded.push(scandalMoney);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 25);
			endTurn();
			return true;
		}
	}),
	(streetRepairs = {
		text: 'You tried (and failed) to kill a spider with a sledgehammer, and now you must pay street repairs. Pay $40 for each house and $115 for each hotel.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(streetRepairs), 1);
			communityChestDeckDiscarded.push(streetRepairs);
			let player = gameStatus.currentPlayerTurn;
			// coleredProperties = player.properties.filter((property) => property.type === 'coloredProperty');
			let moneyOwed = 0;
			for (let property of player.properties) {
				if (property.housesHotel === 5) {
					moneyOwed += 275;
				} else {
					moneyOwed += 40 * property.housesHotel;
				}
			}
			let moneyCheck = pay(player, freeParking.jackpot, moneyOwed);
			if (moneyCheck) {
				endTurn();
				return true;
			}
		}
	}),
	(beautyContest = {
		text: 'You may have dashing charm and killer looks, but you still only win second prize in a beauty contest. Collect $10.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(beautyContest), 1);
			communityChestDeckDiscarded.push(beautyContest);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 10);
			endTurn();
			return true;
		}
	}),
	(youInherit = {
		text: 'At long last, your billionaire uncle has passed! However, you get hardly a passing mention in his will, and only inherit $100. You cannont help but sob uncontrollably into your pillow at this lousy inheritance.',
		buttonText: 'Okay',
		result: function () {
			communityChestDeck.splice(communityChestDeck.indexOf(youInherit), 1);
			communityChestDeckDiscarded.push(youInherit);
			let player = gameStatus.currentPlayerTurn;
			moneyChange(player, 100);
			endTurn();
			return true;
		}
	})
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

const properties = board.filter(function (space) {
	return space.type === 'coloredProperty' || space.type === 'railroad' || space.type === 'utility';
});

const purple = properties.filter(function (property) {
	return property.color === 'purple';
});

const lightBlue = properties.filter(function (property) {
	return property.color === 'light-blue';
});

const magenta = properties.filter(function (property) {
	return property.color === 'magenta';
});

const orange = properties.filter(function (property) {
	return property.color === 'orange';
});

const red = properties.filter(function (property) {
	return property.color === 'red';
});

const yellow = properties.filter(function (property) {
	return property.color === 'yellow';
});

const green = properties.filter(function (property) {
	return property.color === 'green';
});

const blue = properties.filter(function (property) {
	return property.color === 'blue';
});

const colors = [
	purple,
	lightBlue,
	magenta,
	orange,
	red,
	yellow,
	green,
	blue
];

const propertyCategories = [
	['purple', 2],
	['light-blue', 3],
	['magenta', 3],
	['orange', 3],
	['red', 3],
	['yellow', 3],
	['green', 3],
	['blue', 2],
	['railroad', 4],
	['utility', 2],
	['electric', 0],
	['water', 0],
	['cards', 2]
];

const propertyCategoriesColor = propertyCategories.slice(0, 8);

const jailFreeCards = [
	jailFreeChance,
	jailFreeCommunityChest
];

const boardClassArray = board.map(function (space) {
	return space.boardClass;
});

// PLAYERS

function Player(playerNumber, token, tokenSpace, inJailSpace, justVisitingSpace) {
	this.playerNumber = playerNumber;
	this.tokenSpace = tokenSpace;
	this.inJailSpace = inJailSpace;
	this.justVisitingSpace = justVisitingSpace;
	this.token = token;
	this.inGame = false;
	this.money = 1500;
	this.traderMoney = 1500;
	this.moneyTrading = 0;
	this.onspace = null;
	this.properties = [];
	this.propertiesTrading = [];
	this.inDebtTo = null;
	this.name = null;
	this.playerOrder = null;
	this.numberOfRailroads = function () {
		let count = 0;
		for (let i = 0; i <= this.properties.length - 1; i++) {
			if (this.properties[i].type === 'railroad') {
				count++;
			}
		}
		return count;
	};
	this.numberOfUtilities = function () {
		let count = 0;
		for (let i = 0; i <= this.properties.length - 1; i++) {
			if (this.properties[i].type === 'utility') {
				count++;
			}
		}
		return count;
	};
	this.totalNetWorth = function () {
		let total = this.money;
		for (let property of this.properties) {
			total += property.price;
		}
		return total;
	};
	this.jailFreeCards = 0;
	this.lastDiceResult = null;
	this.numberOfDoubles = 0;
	this.inJail = false;
	this.numberOfTurnsInJail = 0;
}

const player1 = new Player(1, boot, { bottom: '50%', left: '5%' }, { bottom: '60%', left: '22.5%' }, { bottom: '52.5%', left: '0%' });

const player2 = new Player(2, wheelbarrow, { bottom: '5%', left: '15%' }, { bottom: '5%', left: '15%' }, { bottom: '7.5%', left: '0%' });

const player3 = new Player(3, ship, { bottom: '27.5%', right: '5%' }, { bottom: '43.5%', right: '0%' }, { bottom: '0%', right: '45%' });

const player4 = new Player(4, car, { bottom: '72.5%', right: '15%' }, { bottom: '80%', right: '12.5%' }, { bottom: '0%', right: '0%' });

const player5 = new Player(5, thimble, { bottom: '72.5%', left: '15%' }, { bottom: '80%', left: '32.5%' }, { bottom: '75%', left: '0%' });

const player6 = new Player(6, iron, { bottom: '27.5%', left: '5%' }, { bottom: '42.5%', left: '22.5%' }, { bottom: '25%', left: '0%' });

const player7 = new Player(7, horseAndRider, { bottom: '5%', right: '15%' }, { bottom: '22.5%', right: '12.5%' }, { bottom: '0%', right: '25%' });

const player8 = new Player(8, cannon, { bottom: '50%', right: '5%' }, { bottom: '65%', right: '0%' }, { bottom: '0%', right: '65%' });

// GAME STATUS

const gameStatus = {
	currentPlayerTurn: player1,
	freeParkingJackpotOn: false,
	passGoDouble: false,
	landOnGoDouble: false
};

// INITIAL VARIABLES

let numberOfPlayers = null;
let activePlayers = [
	player1,
	player2,
	player3,
	player4,
	player5,
	player6,
	player7,
	player8
];
let initialPlayers = [];
let activePlayersOrdered = [];
let multiplier = 1;
let railroadMultiplier = 1;
let onPlayer = 1;
let cardDrawn;
let firstThroughEighth = [
	'first',
	'second',
	'third',
	'fourth',
	'fifth',
	'sixth',
	'seventh',
	'eighth'
];
let yetToPay = [];
let trader1 = null;
let trader2 = null;

// AUCTION VARIABLES
let biddingPlayer = null;
let leadingBidder = null;
let numberOfPasses = 0;
let leadingBid = 0;
let playerBid = null;
let bidStatus = '&nbsp;';
let auctioneerAnnouncement = '&nbsp;';
let propertySold = null;

$(document).on('click', '.one > .auction > .btn-bid', function () {
	playerBid = Number($('.one > .auction > .player-bid').val());
	if (Number.isInteger(playerBid) && playerBid > leadingBid) {
		leadingBid = playerBid;
		leadingBidder = biddingPlayer;
		let leadingBidderIndex = activePlayers.indexOf(leadingBidder);
		if (leadingBidderIndex === activePlayers.length - 1) {
			biddingPlayer = activePlayers[0];
		} else {
			biddingPlayer = activePlayers[leadingBidderIndex + 1];
		}
		auctioneerAnnouncement = '&nbsp;';
		$('.one > .auction > .leading-bid').html('Leading Bid: <strong>$' + leadingBid + '</strong>');
		$('.one > .auction > .leading-bidder').html('Leading Bidder: <strong>' + leadingBidder.name + '</strong>');
		$('.one > .auction > .leading-bidder-token').attr('src', leadingBidder.token.image);
		$('.one > .auction > .leading-bidder-token').attr('alt', leadingBidder.token.tokenClass);
		$('.one > .auction > .auctioneer-announcement').html(auctioneerAnnouncement);
		$('.one > .auction > .bidding-player').html('<strong>' + biddingPlayer.name + '</strong>');
		$('.one > .auction > .bidding-player-token').attr('src', biddingPlayer.token.image);
		$('.one > .auction > .bidding-player-token').attr('alt', biddingPlayer.token.tokenClass);
		$('.one > .auction > .auctioneer').html("What's you're bid? $");
		$('.one > .auction > .bid-status').html('&nbsp;');
		$('.one > .auction > .player-bid').val('');
		numberOfPasses = 0;
	} else if (!Number.isInteger(playerBid)) {
		bidStatus = '<strong>Your bid must be a whole number!</strong>';
		$('.one > .auction > .bid-status').html(bidStatus);
	} else if (playerBid <= leadingBid) {
		bidStatus = '<strong>Your bid must be greater than the leading bid!</strong>';
		$('.one > .auction > .bid-status').html(bidStatus);
	}
});

$(document).on('click', '.one > .auction > .btn-no-bid', function () {
	let biddingPlayerIndex = activePlayers.indexOf(biddingPlayer);
	if (numberOfPasses !== 3 * (activePlayers.length - 1) - 1) {
		if (biddingPlayerIndex === activePlayers.length - 1) {
			biddingPlayer = activePlayers[0];
		} else {
			biddingPlayer = activePlayers[biddingPlayerIndex + 1];
		}
		if (biddingPlayer === leadingBidder) {
			biddingPlayerIndex = activePlayers.indexOf(biddingPlayer);
			if (biddingPlayerIndex === activePlayers.length - 1) {
				biddingPlayer = activePlayers[0];
			} else {
				biddingPlayer = activePlayers[biddingPlayerIndex + 1];
			}
		}
		$('.one > .auction > .bidding-player').html('<strong>' + biddingPlayer.name + '</strong>');
		$('.one > .auction > .bidding-player-token').attr('src', biddingPlayer.token.image);
		$('.one > .auction > .bidding-player-token').attr('alt', biddingPlayer.token.tokenClass);
		$('.one > .auction > .auctioneer').html("What's you're bid?");
		$('.one > .auction > .bid-status').html('&nbsp;');
		numberOfPasses++;
		if (numberOfPasses === activePlayers.length - 1) {
			auctioneerAnnouncement = 'Going once...';
		} else if (numberOfPasses === 2 * (activePlayers.length - 1)) {
			auctioneerAnnouncement = 'GOING TWICE...';
		}
		$('.one > .auction > .auctioneer-announcement').html(auctioneerAnnouncement);
	} else {
		if (leadingBidder === null) {
			let property;
			for (propertyCheck of properties) {
				if (
					$('.one > .auction > .auction-property > .auction-property-deed').attr('title') ===
					propertyCheck.title
				) {
					property = propertyCheck;
					break;
				}
			}
			auctioneerAnnouncement =
				'None of you bought it? Sorry ' + property.title + ', nobody wants to be your friend.';
			$('.one > .auction > .auctioneer-announcement').html(auctioneerAnnouncement);
			$(
				'.one > .auction > .bidding-player,' +
				'.one > .auction > .bidding-player-token,' +
				'.one > .auction > .auctioneer,' +
				'.one > .auction > .player-bid,' +
				'.one > .auction > .btn-bid,' +
				'.one > .auction > .btn-no-bid'
			).addClass('hidden');
			$('.one > .auction > .bid-status').css('display', 'none');
			$('.one > .auction > .closer').css('display', 'inline');
			biddingPlayer = null;
			leadingBidder = null;
			numberOfPasses = 0;
			leadingBid = 0;
			playerBid = null;
			bidStatus = '&nbsp;';
			auctioneerAnnouncement = '&nbsp;';
			endTurn();
		} else {
			auctioneerAnnouncement =
				'SOLD to <strong>' + leadingBidder.name + '</strong> for <strong>$' + leadingBid + '!!</strong>!!';
			$('.one > .auction > .auctioneer-announcement').html(auctioneerAnnouncement);
			$(
				'.one > .auction > .bidding-player,' +
				'.one > .auction > .bidding-player-token,' +
				'.one > .auction > .auctioneer,' +
				'.one > .auction > .player-bid,' +
				'.one > .auction > .btn-bid,' +
				'.one > .auction > .btn-no-bid'
			).addClass('hidden');
			$('.one > .auction > .bid-status').css('display', 'none');
			for (property of properties) {
				if (
					$('.one > .auction > .auction-property > .auction-property-deed').attr('title') === property.title
				) {
					propertySold = property;
					break;
				}
			}
			$('.one > .auction > .btn-auction-buy').html('Buy ' + propertySold.title + ' - $' + leadingBid);
			$('.one > .auction > .btn-auction-buy').css('display', 'inline');
		}
	}
});

const tokensMatch = [
	[
		'boot',
		'cannon',
		'car',
		'dog',
		'hat',
		'horse-and-rider',
		'iron',
		'sack-of-money',
		'ship',
		'thimble',
		'wheelbarrow'
	],
	[
		boot,
		cannon,
		car,
		dog,
		hat,
		horseAndRider,
		iron,
		sackOfMoney,
		ship,
		thimble,
		wheelbarrow
	]
];

// FUNCTIONS

function rollDice() {
	let player = gameStatus.currentPlayerTurn;
	let diceBaseImage = 'images/dicex.png';
	let dice1 = Math.ceil(Math.random() * 6);
	let dice2 = Math.ceil(Math.random() * 6);
	let diceResult = {
		dice1: dice1,
		dice1Image: diceBaseImage.replace('x', String(dice1)),
		dice2: dice2,
		dice2Image: diceBaseImage.replace('x', String(dice2)),
		total: dice1 + dice2,
		doubles: dice1 === dice2
	};
	return diceResult;
}

function moneyChange(player, money) {
	player.money += money;
	player.traderMoney += money;
	$('.' + player.playerOrder + ' > p:last-child').html('$' + player.money);
	if ($('.three > .player-heading > .token-small').attr('alt') === player.token.tokenClass) {
		$('.three > .player-heading > .player-cash').empty();
		$('.three > .player-heading > .player-cash').append('$' + player.money);
	}
	if ($('.trader-1-assets > .player-heading > .token-small').attr('alt') === player.token.tokenClass) {
		$('.trader-1-assets > .player-heading > .player-cash').empty();
		$('.trader-1-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
	} else if ($('.trader-2-assets > .player-heading > .token-small').attr('alt') === player.token.tokenClass) {
		$('.trader-2-assets > .player-heading > .player-cash').empty();
		$('.trader-2-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
	}
}

function colorChangePlusHighlight(string) {
	$('.' + string).css('background-color', '#8ac6d1');
	$('.two > .' + string).css('background-color', '#8ac6d1');
	for (let player of initialPlayers) {
		if (player.playerOrder === string) {
			$('.' + player.token.tokenClass).css('box-shadow', '0 0 0.25rem 0.25rem #f6d743');
			player.properties.forEach(function (property) {
				if (property.boardClass) {
					$('.one > .' + property.boardClass).css('box-shadow', '0 0 0.25rem 0.25rem #f6d743');
				}
			});
		}
	}
}

function colorChangePlayerDecide(object) {
	object.style.backgroundColor = '#8ac6d1';
}

function colorBack(string) {
	$('.' + string).css('background-color', 'initial');
	for (let player of initialPlayers) {
		if (player.playerOrder === string) {
			$('.' + player.token.tokenClass).css('box-shadow', 'none');
			player.properties.forEach(function (property) {
				if (property.boardClass) {
					$('.one > .' + property.boardClass).css('box-shadow', 'none');
				}
			});
		}
	}
}

function colorBackPlayerDecide(object) {
	object.style.backgroundColor = 'initial';
}

function moveToChosen(playerChoice) {
	$(playerChoice).remove();
	$('.chosen-order > ul').append(playerChoice);

	for (let player of activePlayers) {
		if ($(playerChoice).html().includes(player.token.tokenClass)) {
			activePlayersOrdered.push(player);
			onPlayer++;
		}
	}

	if (onPlayer > numberOfPlayers) {
		activePlayers = activePlayersOrdered.slice();
		initialPlayers = activePlayersOrdered.slice();
		$('.next-turn-order').css('display', 'inline');
	}
}

// MOVING TOKENS AND SPACE LANDING

function moveToken(diceResult, player, direction = 'forward') {
	$('.page-button-blocker').removeClass('hidden');
	let arr = [];
	for (let i = 1; i <= diceResult.total; i++) {
		arr.push(i);
	}
	arr.forEach(function (num) {
		setTimeout(function () {
			$('.' + player.token.tokenClass).remove();
			if (board.indexOf(player.onSpace) === 39) {
				player.onSpace = go;
				moneyChange(player, 200);
				if ($('.three > .player-name').html() === player.name) {
					$('.three').empty();
					changePlayerColumn(player);
				}
			} else {
				if (direction === 'backward') {
					player.onSpace = board[board.indexOf(player.onSpace) - 1];
				} else {
					player.onSpace = board[board.indexOf(player.onSpace) + 1];
				}
			}
			$(player.onSpace.boardSpace).append(
				'<img src=' + player.token.image + ' alt=' + player.token.tokenClass + " class='token active'>"
			);
			$('.active').addClass(`token ${player.token.tokenClass}`);
			$('.' + player.token.tokenClass).css(player.tokenSpace);
			$('.active').removeClass('active');
			if (num === arr.length) {
				$('.page-button-blocker').addClass('hidden');
				player.onSpace.playerLanded = player;
				player.onSpace.result();
			}
		}, 250 * num);
		// 333 * num
	});
}

function moveTokenDirectlyTo(space, player) {
	$('.' + player.token.tokenClass).remove();
	player.onSpace = space;
	$(player.onSpace.boardSpace).append('<img src=' + player.token.image + " alt='boot' class='token active'>");
	$('.active').addClass(`token ${player.token.tokenClass}`);
	$('.' + player.token.tokenClass).css(player.tokenSpace);
	$('.active').removeClass('active');
}

function landOn(space) {
	if (space.type === 'coloredProperty') {
		displayProperty(space, 'board-details', 'one');
		$('.board-button-blocker').css('display', 'block');
		if (space.owner === null) {
			$('.board-details > .btn-buy').css('display', 'inline');
			$('.board-details > .btn-auction').css('display', 'inline');
			$('.board-details > .btn-decline').css('display', 'inline');
			buy(space);
		} else if (space.owner !== space.playerLanded && !space.isMortgaged) {
			let moneyOwed = space.rent[space.housesHotel];
			if (space.isMonopoly && space.housesHotel === 0) {
				moneyOwed = space.rent[6];
			}
			$('.board-details > .btn-rent').css('display', 'inline');
			rent(moneyOwed);
		} else {
			$('.board-details > .closer').css('display', 'inline');
			endTurn();
		}
	} else if (space.type === 'railroad') {
		displayRailroad(space, 'board-details', 'one');
		$('.board-button-blocker').css('display', 'block');
		if (space.owner === null) {
			buy(space);
		} else if (space.owner !== space.playerLanded && !space.isMortgaged) {
			let moneyOwed = space.rent[space.owner.numberOfRailroads() - 1] * multiplier;
			rent(moneyOwed);
		} else {
			$('.board-details > .closer').css('display', 'inline');
			endTurn();
		}
	} else if (space.type === 'utility') {
		let player = gameStatus.currentPlayerTurn;
		if (space.owner === null) {
			displayUtility(space, 'board-details', 'one');
			$('.board-button-blocker').css('display', 'block');
			buy(space);
		} else if (space.owner !== space.playerLanded && !space.isMortgaged) {
			if (multiplier === 1) {
				displayUtility(space, 'board-details', 'one');
				$('.board-button-blocker').css('display', 'block');
				player.utilityDice = player.lastDiceResult;
				if (space.owner.numberOfUtilities() === 1) {
					multiplier = 4;
				} else if (space.owner.numberOfUtilities() === 2) {
					multiplier = 10;
				}
				let moneyOwed = player.utilityDice.total * multiplier;
				rent(moneyOwed);
			} else {
				$('.roll-for-utility-card').css('display', 'inline');
			}
		} else {
			displayUtility(space, 'board-details', 'one');
			$('.board-button-blocker').css('display', 'block');
			$('.board-details > .closer').css('display', 'inline');
			endTurn();
		}
	} else if (space.type === 'go') {
		displayGo();
		$('.board-button-blocker').css('display', 'block');
		endTurn();
	} else if (space.type === 'jail') {
		let player = gameStatus.currentPlayerTurn;
		$('.' + player.token.tokenClass).remove();
		$(player.onSpace.boardSpace).append('<img src=' + player.token.image + " alt='boot' class='token active'>");
		$('.active').addClass(`token ${player.token.tokenClass}`);
		$('.' + player.token.tokenClass).css(player.justVisitingSpace);
		$('.active').removeClass('active');
		endTurn();
	} else if (space.type === 'freeParking') {
		let player = gameStatus.currentPlayerTurn;
		displayFreeParking();
		$('.board-button-blocker').css('display', 'block');
		if (gameStatus.freeParkingJackpotOn) {
			moneyChange(player, freeParking.jackpot.money);
			freeParking.jackpot.money = 0;
		}
		endTurn();
	} else if (space.type === 'goToJail') {
		$('.board-details').empty();
		displayGoToJail();
		$('.player-button-blocker').css('display', 'block');
		$('.board-button-blocker').css('display', 'block');
	} else if (space.type === 'chance') {
		$('.board-details').empty();
		displayChance();
		$('.player-button-blocker').css('display', 'block');
		$('.board-button-blocker').css('display', 'block');
	} else if (space.type === 'communityChest') {
		$('.board-details').empty();
		displayCommunityChest();
		$('.player-button-blocker').css('display', 'block');
		$('.board-button-blocker').css('display', 'block');
	} else if (space.type === 'incomeTax') {
		$('.board-details').empty();
		displayIncomeTax();
		$('.board-button-blocker').css('display', 'block');
	} else if (space.type === 'luxuryTax') {
		$('.board-details').empty();
		displayLuxuryTax();
		$('.board-button-blocker').css('display', 'block');
	} else {
		endTurn();
	}
}

// ENDING THE TURN

function endTurn() {
	$('.trade').css('display', 'inline');
	if (gameStatus.currentPlayerTurn.inJail) {
		$('.roll').css('display', 'none');
		$('.end-turn').css('display', 'inline');
	} else if (!gameStatus.currentPlayerTurn.lastDiceResult.doubles) {
		$('.roll').css('display', 'none');
		$('.end-turn').css('display', 'inline');
	} else {
		$('.roll').css('display', 'inline');
		$('.end-turn').css('display', 'none');
	}
}

// DISPLAYING SPACES

function displayProperty(property, location, column) {
	$('.' + location).empty();
	$('.' + column + '> .' + location).append($('.reference > .titledeed').html());
	$('.' + column + '> .' + location + ' > .property-name').append(property.title);
	$('.' + column + '> .' + location + ' > .price').append('PRICE $' + property.price);
	$('.' + column + '> .' + location + ' > .base-rent').append('RENT $' + property.rent[0]);
	$('.' + column + '> .' + location + ' > .prop-details > .rents > tbody > .rent-1-house > .right').append(
		'$' + property.rent[1]
	);
	$('.' + column + '> .' + location + ' > .prop-details > .rents > tbody > .rent-2-house > .right').append(
		'$' + property.rent[2]
	);
	$('.' + column + '> .' + location + ' > .prop-details > .rents > tbody > .rent-3-house > .right').append(
		'$' + property.rent[3]
	);
	$('.' + column + '> .' + location + ' > .prop-details > .rents > tbody > .rent-4-house > .right').append(
		'$' + property.rent[4]
	);

	for (let i = 1; i <= property.housesHotel; i++) {
		$('.' + column + '> .' + location + ' > .prop-details > .rents > tbody > .rent-' + i + '-house > .left').append(
			"&nbsp;&nbsp;&nbsp; <img src='images/house.png' alt='house' class='house-hotel-property'>"
		);
	}

	$('.' + column + '> .' + location + ' > .prop-details > .rents > tbody > .rent-hotel > .rent-hotel').append(
		'$' + property.rent[5]
	);

	if (property.housesHotel === 5) {
		$('.' + column + '> .' + location + ' > .prop-details > .rents > tbody > .rent-hotel > .hotel-pic').append(
			"&nbsp;&nbsp; <img src='images/hotel.png' alt='house' class='house-hotel-property'> &nbsp;&nbsp;"
		);
	}

	$('.' + column + '> .' + location + ' > .prop-details > .mortgage-value').append(
		'Mortgage Value $' + property.mortgage
	);
	$('.' + column + '> .' + location + ' > .prop-details > .house-price').append(
		'Houses cost $' + property.priceHouse + ' each.'
	);
	$('.' + column + '> .' + location + ' > .prop-details > .hotel-price').append(
		'Hotels, $' + property.priceHouse + ' plus 4 houses'
	);

	for (let color of propertyCategories) {
		$('.' + column + '> .' + location).removeClass(color[0]);
	}

	$('.' + column + '> .' + location).addClass('titledeed ' + property.color);
	$('.' + column + '> .' + location + '> .btn-buy').append('Buy' + property.title + ' - $' + property.price);
	let moneyOwed = property.rent[property.housesHotel];
	if (property.isMonopoly && property.housesHotel === 0) {
		moneyOwed = property.rent[6];
	}
	$('.' + column + '> .' + location + ' > .btn-rent').append('Rent - $' + moneyOwed);
	$('.' + column + '> .' + location + ' > .closer').css('display', 'none');
	$('.' + column + '> .' + location).removeClass('hidden');
}

function displayTradingProperty(property, div) {
	$('.trading-box .' + div).empty();
	$('.trading-box .' + div).append($('.reference > .titledeed').html());
	$('.trading-box .' + div + ' > .property-name').append(property.title);
	$('.trading-box .' + div + ' > .price').append('PRICE $' + property.price);
	$('.trading-box .' + div + ' > .base-rent').append('RENT $' + property.rent[0]);
	$('.trading-box .' + div + ' > .prop-details > .rents > tbody > .rent-1-house > .right').append(
		'$' + property.rent[1]
	);
	$('.trading-box .' + div + ' > .prop-details > .rents > tbody > .rent-2-house > .right').append(
		'$' + property.rent[2]
	);
	$('.trading-box .' + div + ' > .prop-details > .rents > tbody > .rent-3-house > .right').append(
		'$' + property.rent[3]
	);
	$('.trading-box .' + div + ' > .prop-details > .rents > tbody > .rent-4-house > .right').append(
		'$' + property.rent[4]
	);

	for (let i = 1; i <= property.housesHotel; i++) {
		$('.trading-box .' + div + ' > .prop-details > .rents > tbody > .rent-' + i + '-house > .left').append(
			"&nbsp;&nbsp;&nbsp; <img src='images/house.png' alt='house' class='house-hotel-property'>"
		);
	}

	$('.trading-box .' + div + ' > .prop-details > .rents > tbody > .rent-hotel > .rent-hotel').append(
		'$' + property.rent[5]
	);

	if (property.housesHotel === 5) {
		$('.trading-box .' + div + ' > .prop-details > .rents > tbody > .rent-hotel > .hotel-pic').append(
			"&nbsp;&nbsp; <img src='images/hotel.png' alt='house' class='house-hotel-property'> &nbsp;&nbsp;"
		);
	}

	$('.trading-box .' + div + ' > .prop-details > .mortgage-value').append('Mortgage Value $' + property.mortgage);
	$('.trading-box .' + div + ' > .prop-details > .house-price').append(
		'Houses cost $' + property.priceHouse + ' each.'
	);
	$('.trading-box .' + div + ' > .prop-details > .hotel-price').append(
		'Hotels, $' + property.priceHouse + ' plus 4 houses'
	);

	for (let color of propertyCategories) {
		$('.trading-box .' + div).removeClass(color[0]);
	}

	$('.trading-box .' + div).addClass('titledeed ' + property.color);
	if ((div === 'trader-1-assets-details' || div === 'trader-2-assets-details') && property.housesHotel === 0) {
		$('.trading-box .' + div + ' > .btn-add').css('display', 'inline');
	} else if (div === 'trader-1-offerings-details' || div === 'trader-2-offerings-details') {
		$('.trading-box .' + div + ' > .btn-return').css('display', 'inline');
	}
	$('.trading-box .' + div + ' > .btn-trade-closer').css('display', 'inline');
	$('.three > .player-button-blocker').css('display', 'block');
	$('.trading-box .trading-button-blocker').css('display', 'block');
	$('.trading-box .' + div).removeClass('hidden');
}

function displayRailroad(property, location, column) {
	$('.' + location).empty();
	$('.' + column + '> .' + location).append($('.reference > .railroad').html());
	$('.' + column + '> .' + location + ' > .property-name').append(property.title);
	for (let color of propertyCategories) {
		$('.' + column + '> .' + location).removeClass(color[0]);
	}
	$('.' + column + '> .' + location).addClass('titledeed railroad');
	$('.' + column + '> .' + location + '> .btn-buy').append('Buy' + property.title + ' - $' + property.price);
	if (property.owner !== null) {
		let moneyOwed = property.rent[property.owner.numberOfRailroads() - 1] * railroadMultiplier;
		$('.' + column + '> .' + location + '> .btn-rent').append('Rent $' + moneyOwed);
	}
	$('.' + column + '> .' + location + '> .closer').css('display', 'none');
	$('.' + column + '> .' + location).removeClass('hidden');
}

function displayTradingRailroad(property, div) {
	$('.trading-box .' + div).empty();
	$('.trading-box .' + div).append($('.reference > .railroad').html());
	$('.trading-box .' + div + ' > .property-name').append(property.title);
	for (let color of propertyCategories) {
		$('.trading-box .' + div).removeClass(color[0]);
	}
	$('.trading-box .' + div).addClass('titledeed railroad');
	if (div === 'trader-1-assets-details' || div === 'trader-2-assets-details') {
		$('.trading-box .' + div + ' > .btn-add').css('display', 'inline');
	} else if (div === 'trader-1-offerings-details' || div === 'trader-2-offerings-details') {
		$('.trading-box .' + div + ' > .btn-return').css('display', 'inline');
	}
	$('.trading-box .' + div + ' > .btn-trade-closer').css('display', 'inline');
	$('.three > .player-button-blocker').css('display', 'block');
	$('.trading-box .trading-button-blocker').css('display', 'block');
	$('.trading-box .' + div).removeClass('hidden');
}

function displayUtility(property, location, column) {
	$('.' + location).empty();
	$('.' + column + '> .' + location).append($('.reference > .utility').html());
	$('.' + column + '> .' + location + ' > .property-name').append(property.title);
	for (let color of propertyCategories) {
		$('.' + column + '> .' + location).removeClass(color[0]);
	}
	$('.' + column + '> .' + location).addClass('titledeed ' + property.utilityClass);
	$('.' + column + '> .' + location + '> .btn-buy').append('Buy' + property.title + ' - $' + property.price);
	if (property.owner !== null) {
		let displayMultiplier = multiplier;
		if (displayMultiplier === 1) {
			if (property.owner.numberOfUtilities() === 1) {
				displayMultiplier = 4;
			} else if (property.owner.numberOfUtilities() === 2) {
				displayMultiplier = 10;
			}
		}
		let moneyOwed = gameStatus.currentPlayerTurn.lastDiceResult.total * displayMultiplier;
		$('.' + column + '> .' + location + '> .btn-rent').append('Rent $' + moneyOwed);
	}
	$('.' + column + '> .' + location + '> .closer').css('display', 'none');
	$('.' + column + '> .' + location).removeClass('hidden');
}

function displayTradingUtility(property, div) {
	$('.trading-box .' + div).empty();
	$('.trading-box .' + div).append($('.reference > .utility').html());
	$('.trading-box .' + div + ' > .property-name').append(property.title);
	for (let color of propertyCategories) {
		$('.trading-box .' + div).removeClass(color[0]);
	}
	$('.trading-box .' + div).addClass('titledeed ' + property.utilityClass);
	if (div === 'trader-1-assets-details' || div === 'trader-2-assets-details') {
		$('.trading-box .' + div + ' > .btn-add').css('display', 'inline');
	} else if (div === 'trader-1-offerings-details' || div === 'trader-2-offerings-details') {
		$('.trading-box .' + div + ' > .btn-return').css('display', 'inline');
	}
	$('.trading-box .' + div + ' > .btn-trade-closer').css('display', 'inline');
	$('.three > .player-button-blocker').css('display', 'block');
	$('.trading-box .trading-button-blocker').css('display', 'block');
	$('.trading-box .' + div).removeClass('hidden');
}

function displayMortgagedProperty(property) {
	$('.three > .player-details').empty();
	$('.three > .player-details').addClass('mortgaged');
	$('.three > .player-details').append($('.reference > .mortgaged').html());
	$('.three > .player-details > .property-name').append(property.title);
	$('.three > .player-details > .mortgage-value').append('for $' + property.mortgage);
	let moneyOwed = Math.round(1.1 * property.mortgage);
	$('.three > .player-details > .btn-lift-mortgage').append('Lift mortgage - $' + moneyOwed);
	$('.three > .player-details > .closer').css('display', 'inline');
	if (property.owner.money >= moneyOwed) {
		$('.three > .player-details > .btn-lift-mortgage').css('display', 'inline');
	}
	$('.three > .player-details').removeClass('hidden');
}

function displayTradingMortgagedProperty(property, div) {
	$('.trading-box .' + div).empty();
	$('.trading-box .' + div).addClass('mortgaged');
	$('.trading-box .' + div).append($('.reference > .mortgaged').html());
	$('.trading-box .' + div + ' > .property-name').append(property.title);
	$('.trading-box .' + div + ' > .mortgage-value').append('for $' + property.mortgage);
	if ((div === 'trader-1-assets-details' || div === 'trader-2-assets-details') && property.housesHotel === 0) {
		$('.trading-box .' + div + ' > .btn-add').css('display', 'inline');
	} else if (div === 'trader-1-offerings-details' || div === 'trader-2-offerings-details') {
		$('.trading-box .' + div + ' > .btn-return').css('display', 'inline');
	}
	$('.trading-box .' + div + ' > .btn-trade-closer').css('display', 'inline');
	$('.three > .player-button-blocker').css('display', 'block');
	$('.trading-box .trading-button-blocker').css('display', 'block');
	$('.trading-box .' + div).removeClass('hidden');
}

function displayGo() {
	$('.one > .board-details').empty();
	$('.one > .board-details').addClass('go-board');
	$('.one > .board-details').append($('.reference > .go-board').html());
	$('.one > .board-details > .closer').css('display', 'inline');
	$('.one > .board-details').removeClass('hidden');
}

function displayFreeParking() {
	$('.one > .board-details').addClass('free-parking-board');
	$('.one > .board-details').append($('.reference > .free-parking-board').html());
	$('.one > .board-details > .closer').css('display', 'inline');
	$('.one > .board-details').removeClass('hidden');
}

function displayGoToJail() {
	$('.one > .board-details').addClass('go-to-jail-board');
	$('.one > .board-details').append($('.reference > .go-to-jail-board').html());
	$('.one > .board-details > .go-to-jail-btn').css('display', 'inline');
	$('.one > .board-details').removeClass('hidden');
}

function displayGoToJailDoubles() {
	$('.one > .board-details').addClass('go-to-jail-doubles');
	$('.one > .board-details').append($('.reference > .go-to-jail-doubles').html());
	$('.one > .board-details > .go-to-jail-btn').css('display', 'inline');
	$('.one > .board-details').removeClass('hidden');
}

function displayChance() {
	$('.one > .board-details').addClass('chance-land');
	$('.one > .board-details').append($('.reference > .chance-land').html());
	$('.one > .board-details > .take-a-chance').css('display', 'inline');
	$('.one > .board-details').removeClass('hidden');
}

function displayCommunityChest() {
	$('.one > .board-details').addClass('cc-land');
	$('.one > .board-details').append($('.reference > .cc-land').html());
	$('.one > .board-details > .open-chest').css('display', 'inline');
	$('.one > .board-details').removeClass('hidden');
}

function displayIncomeTax() {
	$('.two, .three').addClass('hidden');
	$('.one > .board-details').empty();
	$('.one > .board-details').addClass('income-tax-board');
	$('.one > .board-details').append($('.reference > .income-tax-board').html());
	$('.one > .board-details > button').css('display', 'inline');
	$('.one > .board-details').removeClass('hidden');
}

function displayLuxuryTax() {
	$('.one > .board-details').empty();
	$('.one > .board-details').addClass('luxury-tax-board');
	$('.one > .board-details').append($('.reference > .luxury-tax-board').html());
	$('.one > .board-details > button').css('display', 'inline');
	$('.one > .board-details').removeClass('hidden');
}

function displayAuctionBox() {
	biddingPlayer = gameStatus.currentPlayerTurn;
	let property = biddingPlayer.onSpace;
	$('#board-details').empty();
	$('#board-details').removeClass();
	$('#board-details').addClass('board-details auction');
	$('.one > .auction').append($('.reference > .auction').html());
	let propertyType;
	if (property.type === 'coloredProperty') {
		propertyType = property.color;
	} else if (property.type === 'railroad') {
		propertyType = property.type;
	} else if (property.type === 'utility') {
		propertyType = property.utilityClass;
	}
	$('.one > .auction > .auction-property > .auction-property-deed').attr(
		'src',
		'images/titledeed-' + propertyType + '.png'
	);
	$('.one > .auction > .auction-property > .auction-property-deed').attr('alt', property.title);
	$('.one > .auction > .auction-property > .auction-property-deed').attr('title', property.title);
	$('.one > .auction > .auction-property > .auction-property-title').append(
		'<strong>' + property.title + '</strong> up for grabs!'
	);
	$('.one > .auction > .auction-property > .auction-property-price').append(
		'Base Price: <strong>$' + property.price + '</strong>'
	);
	$('.one > .auction > .bidding-player').append('<strong>' + biddingPlayer.name + '</strong>');
	$('.one > .auction > .bidding-player-token').attr('src', biddingPlayer.token.image);
	$('.one > .auction > .bidding-player-token').attr('alt', biddingPlayer.token.tokenClass);

	$('.exit-auction').css('display', 'inline');
}

$('.exit-auction').click(function () {
	$('#board-details').empty();
	$('#board-details').removeClass();
	$('#board-details').addClass('board-details hidden');
	$('.exit-auction').css('display', 'none');
	$('.board-button-blocker').css('display', 'block');
	$('.player-button-blocker').css('display', 'block');
	endTurn();
});

function displayTradingBox() {
	$('.trading-box').append($('.reference > .trading-box-reference').html());
	$('.trading-box').removeClass('hidden');
}

$('.trade').click(function () {
	window.scrollTo(0, 650);
	displayTradingBox();
	$('.one > button').addClass('hidden');
});

$(document).on('click', '.traders-decider', function () {
	for (player of activePlayers) {
		if ($('.trading-box > .propose-a-deal > .trader-1-name').val() === player.name) {
			trader1 = player;
			break;
		}
	}
	for (player of activePlayers) {
		if ($('.trading-box > .propose-a-deal > .trader-2-name').val() === player.name) {
			trader2 = player;
			break;
		}
	}
	let traders = [
		0,
		trader1,
		trader2
	];
	if (trader1 === null || trader2 === null) {
		$('.trading-box > .propose-a-deal > .invalid-traders').removeClass('hidden');
		$('.trading-box > .propose-a-deal > .cannot-trade-with-yourself').addClass('hidden');
		trader1 = null;
		trader2 = null;
		return false;
	}
	if (trader1 === trader2) {
		$('.trading-box > .propose-a-deal > .invalid-traders').addClass('hidden');
		$('.trading-box > .propose-a-deal > .cannot-trade-with-yourself').removeClass('hidden');
		trader1 = null;
		trader2 = null;
		return false;
	}
	for (let i = 1; i <= 2; i++) {
		$('.trading-box > .trader-' + i + '-assets').append($('.reference > .column-three-reference').html());
		$('.trading-box > .trader-' + i + '-assets > .player-heading > .player-name').append(traders[i].name);
		$('.trading-box > .trader-' + i + '-assets > .player-heading > .token-small').attr(
			'src',
			traders[i].token.image
		);
		$('.trading-box > .trader-' + i + '-assets > .player-heading > .token-small').attr(
			'alt',
			traders[i].token.tokenClass
		);
		$('.trading-box > .trader-' + i + '-assets > .player-heading > .player-cash').append(
			'$' + traders[i].traderMoney
		);
		$('.trading-box > .trader-' + i + '-assets > .player-heading > .btn-add-cash').addClass(
			'btn-add-cash-trader-' + i
		);
		$('.trading-box > .trader-' + i + '-assets > .player-heading > .btn-add-cash').css('display', 'inline');
		$('.trading-box > .trader-' + i + '-assets > .player-heading > .amount').css('display', 'inline');
		$('.trading-box > .trader-' + i + '-offerings > .trader-' + i + '-offerings-label').append(
			traders[i].name + ' gives:'
		);
		for (let color of propertyCategories) {
			for (let j = 1; j <= color[1]; j++) {
				for (let property of traders[i].properties) {
					if (
						property.title ===
						$(
							'.trading-box > .trader-' +
							i +
							'-assets > .color-' +
							color[0] +
							' > tbody > tr > .td' +
							j +
							' > .number-' +
							j
						).attr('title')
					) {
						$(
							'.trading-box > .trader-' +
							i +
							'-assets > .color-' +
							color[0] +
							' > tbody > tr > .td' +
							j +
							' > .number-' +
							j
						).removeClass('hidden');
					}
				}
			}
		}
		for (let card of jailFreeCards) {
			if (card.owner === traders[i]) {
				$(
					'.trading-box > .trader-' +
					i +
					'-assets > .color-cards > tbody > tr > .td' +
					jailFreeCards.indexOf(card) +
					' > .chance-cc-small'
				).removeClass('hidden');
			}
		}
	}
	$('.trading-box > .propose-a-deal').css('display', 'none');
	$('.trading-box > .trader-1-assets').css('display', 'block');
	$('.trading-box > .trader-1-offerings').css('display', 'block');
	$('.trading-box > .trader-2-assets').css('display', 'block');
	$('.trading-box > .trader-2-offerings').css('display', 'block');
	$('.trading-box > .trading-buttons > .btn-propose-deal').css('display', 'inline');
	$('.trading-box .dealer').html(trader1.name + ':');
});

// BUYING AND PAYING RENT

function buyHouseNumberCheck(property) {
	let player = property.owner;
	let colorGroup = player.properties.filter(function (thisProperty) {
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
	let colorGroup = player.properties.filter(function (thisProperty) {
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
	$('.roll').css('display', 'none');
	$('.end-turn').css('display', 'none');
	$('.board-details > .btn-buy').empty();
	$('.board-details > .btn-buy').append('Buy ' + property.title + ' - $' + property.price);
	$('.board-details > .btn-buy').css('display', 'inline');
	$('.board-details > .btn-auction').css('display', 'inline');
	$('.board-details > .btn-decline').css('display', 'inline');
}

function giveProperty(property, player) {
	player.properties.push(property);
	property.owner = player;
	checkForMonopoly(player);
	$('.three').empty();
	changePlayerColumn(player);
}

function rent(money) {
	$('.roll').css('display', 'none');
	$('.end-turn').css('display', 'none');
	$('.board-details > .btn-rent').empty();
	$('.board-details > .btn-rent').append('Rent - $' + money);
	$('.board-details > .btn-rent').css('display', 'inline');
}

function checkForMonopoly(player) {
	for (let color of propertyCategoriesColor) {
		let playerPropertiesColor = player.properties.filter(function (nextProperty) {
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
	let moneyCheck = moneyCheckFunction(fromPlayer, money);
	if (moneyCheck) {
		moneyChange(fromPlayer, -money);
		moneyChange(toPlayer, money);
		fromPlayer.inDebtTo = null;
	} else {
		fromPlayer.inDebtTo = toPlayer;
	}
	return moneyCheck;
}

function moneyCheckFunction(player, moneyOwed) {
	if (player.money < moneyOwed) {
		changePlayerColumn(player);
		$('.three').css('background-color', 'FireBrick');
		setTimeout(function () {
			$('.three').css('background-color', '#cae8e0');
		}, 333);
		$('.three > .btn-bankrupt').css('display', 'inline');
		return false;
	} else {
		return true;
	}
}

function bankrupt(playerPaying, playerReceiving) {
	playerPaying.properties.forEach(function (property) {
		if (property.type !== 'card') {
			if (property.type === 'coloredProperty') {
				moneyChange(playerPaying, 0.5 * property.housesHotel * property.priceHouse);
				property.housesHotel = 0;
			}
			if (!property.isMortgaged) {
				if (playerReceiving !== freeParking.jackpot) {
					property.isMortgaged = true;
					moneyChange(playerPaying, property.mortgage);
				}
			}
		}
	});
	let propertiesToTransfer = playerPaying.properties.slice();
	playerPaying.properties = [];
	propertiesToTransfer.forEach(function (property) {
		if (playerReceiving !== freeParking.jackpot) {
			$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner').addClass('hidden');
			$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').empty();
			$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').append(
				'<img src=' +
				`${playerReceiving.token.image}` +
				' alt=' +
				`${playerReceiving.token.tokenClass}` +
				" class='token-tiny'>"
			);
			$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged').removeClass('hidden');
			$(
				'.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here'
			).empty();
			$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here').append(
				'<img src=' +
				`${playerReceiving.token.image}` +
				' alt=' +
				`${playerReceiving.token.tokenClass}` +
				" class='token-tiny'>"
			);
			property.owner = playerReceiving;
			playerReceiving.properties.push(property);
			checkForMonopoly(playerReceiving);
		} else {
			$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner').addClass('hidden');
			$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').empty();
			$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged').addClass('hidden');
			$(
				'.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here'
			).empty();
			property.owner = null;
		}
		$('.one > .' + property.boardClass + ' > .house').empty();
		$('.one > .' + property.boardClass + ' > .house').removeClass('hidden');
		$('.one > .' + property.boardClass + ' > .hotel').empty();
		$('.one > .' + property.boardClass + ' > .hotel').addClass('hidden');
	});
	$('.three > .btn-bankrupt').css('display', 'none');
	pay(playerPaying, playerReceiving, playerPaying.money);
	let activePlayersChangingTo = [];
	for (player of activePlayers) {
		if (player !== playerPaying) {
			activePlayersChangingTo.push(player);
		}
	}
	let playerPayingIndex = activePlayers.indexOf(playerPaying);
	let playerTurnIndex = activePlayers.indexOf(gameStatus.currentPlayerTurn);
	activePlayers.splice(playerPayingIndex, 1);
	changePlayerColumn(playerPaying);
	if (activePlayers.length === 1) {
		$('.winner').html('<strong>' + activePlayers[0].name + '</strong> is the Lord of the Board!');
		$('.winner').removeClass('hidden');
	}
	$('.' + playerPaying.token.tokenClass).css('display', 'none');
	$('.two > .' + playerPaying.playerOrder + ' > .player-name-cash').css('text-decoration', 'line-through');
	$('.two > .' + playerPaying.playerOrder + ' > .player-name-cash').css('background-color', 'FireBrick');
	$('.two > .' + playerPaying.playerOrder + ' > .token-small').css('background-color', 'FireBrick');
	if (yetToPay.includes(playerPaying)) {
		let yetToPayIndex = yetToPay.indexOf(playerPaying);
		yetToPay.splice(yetToPayIndex, 1);
	}
	if (yetToPay.length === 0) {
		let nextPlayer;
		let nextPlayerIndex;
		if (activePlayers.includes(gameStatus.currentPlayerTurn)) {
			nextPlayerIndex = activePlayers.indexOf(gameStatus.currentPlayerTurn) + 1;
			if (nextPlayerIndex === activePlayers.length) {
				nextPlayer = activePlayers[0];
			} else {
				nextPlayer = activePlayers[nextPlayerIndex];
			}
		} else {
			if (playerTurnIndex >= activePlayers.length) {
				nextPlayer = activePlayers[0];
			} else {
				nextPlayer = activePlayers[playerTurnIndex];
			}
		}
		gameStatus.currentPlayerTurn = nextPlayer;
		$('#board-details').empty();
		$('#board-details').removeClass();
		$('#board-details').addClass('board-details hidden');
		$('.board-button-blocker').css('display', 'none');
		for (player of initialPlayers) {
			$('.two > .' + player.playerOrder + ' > .token-small').css('box-shadow', 'none');
		}
		$('.two > .' + nextPlayer.playerOrder + ' > .token-small').css('box-shadow', '0 0 0.25rem 0.25rem #f6d743');
		$('.roll').css('display', 'none');
		$('.continue').css('display', 'inline');
	}
}

// OTHER FUNCTIONS

function freeParkingJackpotCheck(money) {
	if (gameStatus.freeParkingJackpotOn) {
		changeMoney(money, freeParking.jackpot);
	}
}

function changePlayerColumn(player) {
	$('.three').empty();
	if (activePlayers.includes(player)) {
		$('.three').css('background-color', '#cae8e0');
		$('.three').append($('.reference > .column-three-reference').html());
		$('.three > .player-heading > .player-name').append(player.name);
		$('.three > .player-heading > .vertical-middle').attr('src', player.token.image);
		$('.three > .player-heading > .vertical-middle').attr('alt', player.token.tokenClass);
		$('.three > .player-heading > .player-cash').empty();
		$('.three > .player-heading > .player-cash').append('$' + player.money);
		for (let color of propertyCategories) {
			for (let i = 1; i <= color[1]; i++) {
				for (let property of player.properties) {
					if (
						property.title ===
						$('.three > .color-' + color[0] + ' > tbody > tr > .td' + i + ' > .number-' + i).attr('title')
					) {
						$('.three > .color-' + color[0] + ' > tbody > tr > .td' + i + ' > .number-' + i).removeClass(
							'hidden'
						);
					}
				}
			}
		}
		for (let card of jailFreeCards) {
			if (card.owner === player) {
				$(
					'.three > .color-cards > tbody > tr > .td' + jailFreeCards.indexOf(card) + ' > .chance-cc-small'
				).removeClass('hidden');
			}
		}
	} else {
		$('.three').append($('.reference > .column-three-bankrupt').html());
		$('.three > h1').append(player.name + ' has declared bankruptcy.');
		$('.three').css('background-color', 'FireBrick');
	}
	if ($('.trading-box').html().includes('close')) {
		$('.three > .player-button-blocker').css('display', 'block');
	}
}

// BUTTON CLICK EVENTS

// FIRST STRTING BOX: SELECTING THE NUMBER OF PLAYERS

$('#set-number').click(function () {
	numberOfPlayers = Number($('#number-of-players').val());
	for (i = 1; i <= 8 - numberOfPlayers; i++) {
		activePlayers.pop();
		initialPlayers.pop();
	}
	$('.number-of-players').css('display', 'none');
	$('.names-tokens').css('display', 'block');
	$('.number-of-players-eh').prepend(numberOfPlayers);
});

// SECOND STARTING BOX: SETTING NAMES AND TOKENS

$('#tokens').click(function () {
	$('.token-selected').attr('src', 'images/token-' + $('#tokens').val() + '.png');
	$('.token-selected').attr('alt', $('#tokens :selected').text());
	$('#set-name-token').removeClass('hidden');
});

$('#set-name-token').click(function () {
	for (otherPlayer of activePlayers) {
		if ($('#name').val() === otherPlayer.name) {
			$('.name-is-taken').removeClass('hidden');
			return false;
		}
	}
	$('.player-list').append(
		"<li class='player-listing'><strong>" + $('#name').val() + '</strong>   ' + "<img class='active'></li>"
	);
	$('.active').addClass('token-small');
	$('.active').attr('src', 'images/token-' + $('#tokens').val() + '.png');
	$('.active').attr('alt', $('#tokens :selected').text());
	$('.active').removeClass('active');
	$('#set-name-token').addClass('hidden');
	for (let i = 0; i <= numberOfPlayers - 1; i++) {
		if (onPlayer === activePlayers[i].playerNumber) {
			let player = activePlayers[i];
			player.name = $('#name').val();
			let indexMatch = tokensMatch[0].indexOf($('#tokens').val());
			player.token = tokensMatch[1][indexMatch];
			$('#tokens > #' + player.token.tokenClass).remove();
		}
	}
	$('.name-is-taken').addClass('hidden');
	$('#name').val('');
	$('.token-selected').attr('src', '');
	$('.token-selected').attr('alt', '');
	onPlayer++;
	if (onPlayer > numberOfPlayers) {
		$('.name-token-select').css('display', 'none');
		$('.next-names-tokens').css('display', 'inline');
	}
});

$('.reset-names-tokens').click(function () {
	onPlayer = 1;
	activePlayers = [
		player1,
		player2,
		player3,
		player4,
		player5,
		player6,
		player7,
		player8
	];
	initialPlayers = [
		player1,
		player2,
		player3,
		player4,
		player5,
		player6,
		player7,
		player8
	];
	for (player of activePlayers) {
		player.name = null;
	}
	$('.player-list').empty();
	$('.names-tokens').css('display', 'none');
	$('.name-token-select').css('display', 'inline');
	$('.next-names-tokens').css('display', 'none');
	$('.number-of-players').css('display', 'block');
	$('.number-of-players-eh').replaceWith(
		"<h2 class='number-of-players-eh'> players, eh? Let's move on to names and tokens.</h2>"
	);
	$('#tokens').html(
		'<option id="boot" value="boot">Boot</option>' +
		'<option id="cannon" value="cannon">Cannon</option>' +
		'<option id="car" value="car">Car</option>' +
		'<option id="dog" value="dog">Dog</option>' +
		'<option id="hat" value="hat">Hat</option>' +
		'<option id="horse-and-rider" value="horse-and-rider">Horse and Rider</option>' +
		'<option id="iron" value="iron">Iron</option>' +
		'<option id="sack-of-money" value="sack-of-money">Sack of Money</option>' +
		'<option id="ship" value="ship">Ship</option>' +
		'<option id="thimble" value="thimble">Thimble</option>' +
		'<option id="wheelbarrow" value="wheelbarrow">Wheelbarrow</option>'
	);
});

$('.next-names-tokens').click(function () {
	$('.names-tokens').css('display', 'none');
	$('.turn-order').css('display', 'block');
	onPlayer = 1;
});

// THIRD STARTING BOX: SETTING THE TURN ORDER...

// ...BY DICE ROLL

$('#dice-roll').click(function () {
	$('.turn-order-decider').css('display', 'none');
	$('.dice-roll').css('display', 'inline');
});

$('#roll-turn-order').click(function () {
	let diceResult = rollDice();
	$('.dice1-turn-order').attr('src', diceResult.dice1Image);
	$('.dice2-turn-order').attr('src', diceResult.dice2Image);

	for (let i = 0; i <= numberOfPlayers - 1; i++) {
		if (onPlayer === activePlayers[i].playerNumber) {
			let player = activePlayers[i];
			player.diceResultTurnOrder = diceResult.total;
			$('.player-list-dice-results').append(
				"<li class='player-listing'><strong>" +
				player.name +
				'</strong> ' +
				"<img class='token-small' src=" +
				player.token.image +
				'>' +
				"<img class='dice-small' src=" +
				diceResult.dice1Image +
				'>&nbsp' +
				"<img class='dice-small' src=" +
				diceResult.dice2Image +
				'></li>'
			);
		}
	}

	onPlayer++;
	if (onPlayer > numberOfPlayers) {
		activePlayers.sort(function (a, b) {
			if (b.diceResultTurnOrder - a.diceResultTurnOrder === 0) {
				if (Math.round(Math.random()) === 0) {
					return -1;
				}
				return 1;
			}
			return b.diceResultTurnOrder - a.diceResultTurnOrder;
		});
		initialPlayers = activePlayers.slice();
		$('.next-turn-order').css('display', 'inline');
	}
});

// ...BY RANDOM ORDER

$('#auto-random').click(function () {
	$('.turn-order-decider').css('display', 'none');
	$('.auto-random').css('display', 'block');

	for (let i = 0; i <= numberOfPlayers - 1; i++) {
		let randomIndex = Math.floor(Math.random() * activePlayers.length);
		let randomPlayer = activePlayers[randomIndex];
		activePlayersOrdered.push(randomPlayer);
		activePlayers.splice(randomIndex, 1);
	}

	activePlayers = activePlayersOrdered.slice();
	initialPlayers = activePlayers.slice();
	$('.next-turn-order').css('display', 'inline');
});

// ...BY PLAYER DECISION

$('#player-decide').click(function () {
	$('.turn-order-decider').css('display', 'none');
	$('.player-decide').css('display', 'block');

	for (let player of activePlayers) {
		$('.players-to-choose > ul').append(
			"<li onmouseover = 'colorChangePlayerDecide(this)' onmouseout = 'colorBackPlayerDecide(this)' onclick = 'moveToChosen(this)'>" +
			'<strong>' +
			player.name +
			'</strong>' +
			"<img class='token-small'" +
			'src=' +
			player.token.image +
			' alt=' +
			player.token.tokenClass +
			'></li>'
		);
	}

	onPlayer = 1;
	activePlayersOrdered = [];
});

// ...FOR RESET AND NEXT BOX

$('.reset-turn-order').click(function () {
	$('.dice-roll').css('display', 'none');
	$('.auto-random').css('display', 'none');
	$('.player-decide').css('display', 'none');
	$('.turn-order-decider').css('display', 'initial');
	$('.player-list-dice-results').empty();
	$('.players-to-choose > ul').empty();
	$('.chosen-order').empty();
	$('.finalized-player-list').empty();
	onPlayer = 1;
	activePlayers = [
		player1,
		player2,
		player3,
		player4,
		player5,
		player6,
		player7,
		player8
	].splice(0, numberOfPlayers);
	initialPlayers = activePlayers.slice();
	activePlayersOrdered = [];
});

$('.next-turn-order').click(function () {
	$('.turn-order').css('display', 'none');
	$('.finalize').css('display', 'block');
	$('.complete').append(
		'<strong>Here are all of the chosen players and their tokens, with turn order from top to bottom.</strong>'
	);

	for (let player of activePlayers) {
		$('.finalized-player-list').append(
			"<li class='player-listing finalize-listing'><strong>" +
			player.name +
			"</strong> <img class='token-small' src=" +
			player.token.image +
			'></li>'
		);
	}
});

// FOURTH BOX: FINALIZING SETUP

$('.play-game').click(function () {
	$('.game-start').css('display', 'none');
	$('.column').css('display', 'block');

	for (let player of activePlayers) {
		$('#go').append('<img src=' + player.token.image + ' alt=' + player.token.tokenClass + " class='token active'>");
		$('.active').addClass(`token ${player.token.tokenClass}`);
		$('.' + player.token.tokenClass).css(player.tokenSpace);
		player.onSpace = go;
		$('.active').removeClass('active');
		player.playerOrder = firstThroughEighth[activePlayers.indexOf(player)];
		$('.' + player.playerOrder).css('display', 'block');
		if (player.name.length > 7) {
			$('.' + player.playerOrder + ' > p:first-child').css("font-size", "1rem")
		};
		$('.' + player.playerOrder + ' > p:first-child').html(player.name);
		$('.' + player.playerOrder + ' > img').attr('src', player.token.image);
		$('.' + player.playerOrder + ' > p:last-child').html('$' + player.money);
	}

	firstThroughEighth.forEach(function (div) {
		$(document).on('click', '.' + div, function () {
			$('.three').empty();
			let playerIndex = firstThroughEighth.indexOf(div);
			let player = initialPlayers[playerIndex];
			changePlayerColumn(player);
		});
	});

	// let activePlayersBeforeBankruptcy = activePlayers.slice();
	gameStatus.currentPlayerTurn = activePlayers[0];
	$('.two > .' + gameStatus.currentPlayerTurn.playerOrder + ' > .token-small').css(
		'box-shadow',
		'0 0 0.25rem 0.25rem #f6d743'
	);
});

// TO RESET STARTUP

$('.start-over').click(function () {
	location.reload();
});

// FOR THE MAIN GAME

$('.roll').click(function () {
	$('.roll').css('display', 'none');
	$('.trade').css('display', 'none');
	let diceResult = rollDice();
	$('.dice1').attr('src', diceResult.dice1Image);
	$('.dice2').attr('src', diceResult.dice2Image);
	let player = gameStatus.currentPlayerTurn;
	player.lastDiceResult = diceResult;
	if (diceResult.doubles) {
		player.numberOfDoubles++;
	}
	if (player.numberOfDoubles === 3) {
		displayGoToJailDoubles();
	} else {
		moveToken(diceResult, player);
	}
});

$('.end-turn').click(function () {
	$('.one > button').css('display', 'none');
	$('.trade').css('display', 'inline');
	multiplier = 1;
	railroadMultiplier = 1;
	let player = gameStatus.currentPlayerTurn;
	player.numberOfDoubles = 0;
	if (player.inJail) {
		player.numberOfTurnsInJail++;
	}
	let nextPlayer;
	if (activePlayers.indexOf(player) === activePlayers.length - 1) {
		nextPlayer = activePlayers[0];
	} else {
		nextPlayer = activePlayers[activePlayers.indexOf(gameStatus.currentPlayerTurn) + 1];
	}
	let previousPlayer = player;
	if (nextPlayer.inJail) {
		$('.roll-riot').css('display', 'inline');
		$('.bribe').css('display', 'inline');
		for (let card of jailFreeCards) {
			if (card.owner === nextPlayer) {
				$('.use-' + card.cardClass).css('display', 'inline');
			}
		}
	} else {
		$('.roll').css('display', 'inline');
	}
	$('.two > .' + player.playerOrder + ' > .token-small').css('box-shadow', 'none');
	$('.two > .' + nextPlayer.playerOrder + ' > .token-small').css('box-shadow', '0 0 0.25rem 0.25rem #f6d743');
	gameStatus.currentPlayerTurn = nextPlayer;
});

$('.continue').click(function () {
	let nextPlayer = gameStatus.currentPlayerTurn;
	$('.one > button').css('display', 'none');
	$('.trade').css('display', 'inline');
	multiplier = 1;
	railroadMultiplier = 1;
	if (nextPlayer.inJail) {
		$('.roll-riot').css('display', 'inline');
		$('.bribe').css('display', 'inline');
		for (let card of jailFreeCards) {
			if (card.owner === nextPlayer) {
				$('.use-' + card.cardClass).css('display', 'inline');
			}
		}
	} else {
		$('.roll').css('display', 'inline');
	}
});

// PLAYER IN JAIL

$('.roll-riot').click(function () {
	$('.roll-riot').css('display', 'none');
	$('.bribe').css('display', 'none');
	let diceResult = rollDice();
	$('.dice1').attr('src', diceResult.dice1Image);
	$('.dice2').attr('src', diceResult.dice2Image);
	let player = gameStatus.currentPlayerTurn;
	player.lastDiceResult = diceResult;
	if (diceResult.doubles) {
		player.numberOfDoubles++;
		player.inJail = false;
		moveToken(diceResult, player);
	} else if (player.numberOfTurnsInJail === 3) {
		$('.bribe').css('display', 'inline');
	} else {
		endTurn();
	}
});

$('.bribe').click(function () {
	$('.roll-riot').css('display', 'none');
	$('.bribe').css('display', 'none');
	let player = gameStatus.currentPlayerTurn;
	let moneyCheck = pay(player, freeParking.jackpot, 50);
	if (moneyCheck) {
		player.inJail = false;
		$('.' + player.token.tokenClass).css(player.justVisitingSpace);
		endTurn();
	}
});

$(document).on('click', '.go-to-jail-btn', function () {
	let player = gameStatus.currentPlayerTurn;
	moveTokenDirectlyTo(jail, player);
	$('.' + player.token.tokenClass).remove();
	$(player.onSpace.boardSpace).append('<img src=' + player.token.image + " alt='boot' class='token active'>");
	$('.active').addClass(`token ${player.token.tokenClass}`);
	$('.' + player.token.tokenClass).css(player.inJailSpace);
	$('.active').removeClass('active');
	player.inJail = true;
	player.lastDiceResult.doubles = false;
	player.numberOfTurnsInJail = 0;
	$('#board-details').empty();
	$('#board-details').removeClass();
	$('#board-details').addClass('board-details hidden');
	$('.board-button-blocker').css('display', 'none');
	$('.player-button-blocker').css('display', 'none');
	endTurn();
});

$(document).on('click', '.use-jail-free-chance', function () {
	jailFreeChance.owner = null;
	chanceDeckDiscarded.push(jailFreeChance);
	$('.roll-riot').css('display', 'none');
	$('.bribe').css('display', 'none');
	let player = gameStatus.currentPlayerTurn;
	let cardIndex = player.properties.indexOf(jailFreeChance);
	player.properties.splice(cardIndex, 1);
	player.inJail = false;
	$('.' + player.token.tokenClass).css(player.justVisitingSpace);
	$('.use-jail-free-chance').css('display', 'none');
	$('.use-jail-free-community-chest').css('display', 'none');
	endTurn();
});

$(document).on('click', '.use-jail-free-community-chest', function () {
	jailFreeCommunityChest.owner = null;
	communityChestDeckDiscarded.push(jailFreeCommunityChest);
	$('.roll-riot').css('display', 'none');
	$('.bribe').css('display', 'none');
	let player = gameStatus.currentPlayerTurn;
	let cardIndex = player.properties.indexOf(jailFreeCommunityChest);
	player.properties.splice(cardIndex, 1);
	player.inJail = false;
	$('.' + player.token.tokenClass).css(player.justVisitingSpace);
	$('.use-jail-free-chance').css('display', 'none');
	$('.use-jail-free-community-chest').css('display', 'none');
	endTurn();
});

$(document).on('click', '.board-details > .take-a-chance', function () {
	if (chanceDeck.length === 0) {
		chanceDeck = chanceDeckDiscarded.slice(0);
		chanceDeckDiscarded.splice(0, chanceDeckDiscarded.length);
	}
	cardIndex = Math.floor(Math.random() * chanceDeck.length);
	cardDrawn = chanceDeck[cardIndex];
	$('.one > .board-details').removeClass('chance-land');
	$('.one > .board-details').empty();
	$('.one > .board-details').addClass('chance');
	$('.one > .board-details').append($('.reference > .chance').html());
	$('.one > .board-details > .chance-text').append(cardDrawn.text);
	$('.one > .board-details > .btn-chance-result').append(cardDrawn.buttonText);
	$('.one > .board-details > .btn-chance-result').css('display', 'inline');
});

$(document).on('click', '.board-details > .btn-chance-result', function () {
	$('.player-button-blocker').css('display', 'none');
	let cardResultExecuted = cardDrawn.result();
	if (cardResultExecuted) {
		$('#board-details').empty();
		$('#board-details').removeClass();
		$('#board-details').addClass('board-details hidden');
		$('.board-button-blocker').css('display', 'none');
	}
});

$(document).on('click', '.board-details > .open-chest', function () {
	if (communityChestDeck.length === 0) {
		communityChestDeck = communityChestDeckDiscarded.slice(0);
		communityChestDeckDiscarded.splice(0, communityChestDeckDiscarded.length);
	}
	cardIndex = Math.floor(Math.random() * communityChestDeck.length);
	cardDrawn = communityChestDeck[cardIndex];
	$('.one > .board-details').removeClass('cc-land');
	$('.one > .board-details').empty();
	$('.one > .board-details').addClass('community-chest');
	$('.one > .board-details').append($('.reference > .community-chest').html());
	$('.one > .board-details > .community-chest-text').append(cardDrawn.text);
	$('.one > .board-details > .btn-cc-result').append(cardDrawn.buttonText);
	$('.one > .board-details > .btn-cc-result').css('display', 'inline');
});

$(document).on('click', '.board-details > .btn-cc-result', function () {
	$('.player-button-blocker').css('display', 'none');
	let cardResultExecuted = cardDrawn.result();
	if (cardResultExecuted) {
		$('#board-details').empty();
		$('#board-details').removeClass();
		$('#board-details').addClass('board-details hidden');
		$('.board-button-blocker').css('display', 'none');
	}
});

$(document).on('click', '.board-details > .pay-10-percent', function () {
	$('.two, .three').removeClass('hidden');
	$('.board-details > .pay-200').css('display', 'none');
	let player = gameStatus.currentPlayerTurn;
	let moneyOwed = Math.round(0.1 * player.totalNetWorth());
	let moneyCheck = pay(player, freeParking.jackpot, moneyOwed);
	if (moneyCheck) {
		$('#board-details').empty();
		$('#board-details').removeClass();
		$('#board-details').addClass('board-details hidden');
		$('.board-button-blocker').css('display', 'none');
		$('.player-button-blocker').css('display', 'none');
		endTurn();
	}
});

$(document).on('click', '.board-details > .pay-200', function () {
	$('.two, .three').removeClass('hidden');
	$('.board-details > .pay-10-percent').css('display', 'none');
	let player = gameStatus.currentPlayerTurn;
	let moneyCheck = pay(player, freeParking.jackpot, 200);
	if (moneyCheck) {
		$('#board-details').empty();
		$('#board-details').removeClass();
		$('#board-details').addClass('board-details hidden');
		$('.board-button-blocker').css('display', 'none');
		$('.player-button-blocker').css('display', 'none');
		endTurn();
	}
});

$(document).on('click', '.board-details > .pay-luxury', function () {
	let player = gameStatus.currentPlayerTurn;
	let moneyCheck = pay(player, freeParking.jackpot, 75);
	if (moneyCheck) {
		$('#board-details').empty();
		$('#board-details').removeClass();
		$('#board-details').addClass('board-details hidden');
		$('.board-button-blocker').css('display', 'none');
		$('.player-button-blocker').css('display', 'none');
		endTurn();
	}
});

$(document).on('click', '.board-details > .closer', function () {
	$('#board-details').empty();
	$('#board-details').removeClass();
	$('#board-details').addClass('board-details hidden');
	$('.board-button-blocker').css('display', 'none');
	$('.player-button-blocker').css('display', 'none');
});

$(document).on('click', '.player-details > .closer', function () {
	$('#player-details').empty();
	$('#player-details').removeClass();
	$('#player-details').addClass('player-details hidden');
});

$(document).on('click', '.btn-trade-closer', function () {
	$('.trading-box .btn-trade-closer').parent().removeClass();
	$('.trading-box .btn-trade-closer').parent().empty();
	$('#trader-1-assets-details').addClass('trader-1-assets-details hidden');
	$('#trader-1-offerings-details').addClass('trader-1-offerings-details hidden');
	$('#trader-2-assets-details').addClass('trader-2-assets-details hidden');
	$('#trader-2-offerings-details').addClass('trader-2-offerings-details hidden');
	$('.three > .player-button-blocker').css('display', 'none');
	$('.trading-box .trading-button-blocker').css('display', 'none');
});

$(document).on('click', '.btn-mortgage', function () {
	let property;
	for (let propertyCheck of properties) {
		if (propertyCheck.title === $('.player-details > .property-name').html()) {
			property = propertyCheck;
		}
	}
	let player = property.owner;
	property.isMortgaged = true;
	$('.' + property.boardClass + '-owner').addClass('hidden');
	$('.' + property.boardClass + '-mortgaged').removeClass('hidden');
	moneyChange(player, property.mortgage);
	$('#player-details').empty();
	$('#player-details').removeClass();
	$('#player-details').addClass('player-details');
	displayMortgagedProperty(property);
});

$(document).on('click', '.btn-lift-mortgage', function () {
	let property;
	for (let propertyCheck of properties) {
		if (propertyCheck.title === $('.player-details > .property-name').html()) {
			property = propertyCheck;
		}
	}
	let player = property.owner;
	let moneyOwed = Math.round(1.1 * property.mortgage);
	let moneyCheck = pay(player, freeParking.jackpot, moneyOwed);
	if (moneyCheck) {
		$('#player-details').empty();
		$('#player-details').removeClass();
		$('#player-details').addClass('player-details');
		property.isMortgaged = false;
		$('.' + property.boardClass + '-mortgaged').addClass('hidden');
		$('.' + property.boardClass + '-owner').removeClass('hidden');
		if (property.type === 'coloredProperty') {
			displayProperty(property, 'player-details', 'three');
		} else if (property.type === 'railroad') {
			displayRailroad(property, 'player-details', 'three');
		} else if (property.type === 'utility') {
			displayUtility(property, 'player-details', 'three');
		}
		$('.three > .player-details > .player-cash').empty();
		$('.three > .player-details > .player-cash').append('$' + player.money);
		$('.player-details > button').css('display', 'none');
		$('.player-details > .closer').css('display', 'inline');
		$('.player-details > .btn-mortgage').append('Mortgage - $' + property.mortgage);
		$('.player-details > .btn-mortgage').css('display', 'inline');
		$('.player-details > .btn-buy-house').append('Buy house - $' + property.priceHouse);
		$('.player-details > .btn-buy-hotel').append('Buy hotel - $' + property.priceHouse);
		$('.player-details > .btn-sell-house').append('Sell house - $' + 0.5 * property.priceHouse);
		$('.player-details > .btn-sell-hotel').append('Sell hotel - $' + 0.5 * property.priceHouse);
		if (player.money >= property.priceHouse && property.isMonopoly) {
			$('.player-details > .btn-buy-house').css('display', 'inline');
		}
	}
});

$(document).on('click', '.btn-add', function () {
	for (let property of properties) {
		if (property.title === $('.trading-box .trader-1-assets-details > .property-name').html()) {
			$('.trading-box .trader-1-offerings').append(
				$('.trading-box .' + property.boardClass + '-player').parent().html()
			);
			$('.trading-box > .trader-1-assets .' + property.boardClass + '-player').addClass('hidden');
			$('.trading-box .btn-trade-closer').parent().removeClass();
			$('.trading-box .btn-trade-closer').parent().empty();
			$('#trader-1-assets-details').addClass('trader-1-assets-details hidden');
			$('.three > .player-button-blocker').css('display', 'none');
			$('.trading-box .trading-button-blocker').css('display', 'none');
			$('.trading-box .trader-1-offerings > .' + property.boardClass + '-player').css('border-color', 'black');
			trader1.propertiesTrading.push(property);
		} else if (property.title === $('.trading-box .trader-2-assets-details > .property-name').html()) {
			$('.trading-box .trader-2-offerings').append(
				$('.trading-box .' + property.boardClass + '-player').parent().html()
			);
			$('.trading-box > .trader-2-assets .' + property.boardClass + '-player').addClass('hidden');
			$('.trading-box .btn-trade-closer').parent().removeClass();
			$('.trading-box .btn-trade-closer').parent().empty();
			$('#trader-2-assets-details').addClass('trader-2-assets-details hidden');
			$('.three > .player-button-blocker').css('display', 'none');
			$('.trading-box .trading-button-blocker').css('display', 'none');
			$('.trading-box .trader-2-offerings > .' + property.boardClass + '-player').css('border-color', 'black');
			$('.trading-box .trader-2-offerings > .' + property.boardClass + '-player').removeClass('hidden');
			trader2.propertiesTrading.push(property);
		}
	}

	for (let card of jailFreeCards) {
		if (card.title === $('.trading-box .trader-1-assets-details > .card-heading').html()) {
			$('.trading-box .trader-1-offerings').append($('.trading-box .' + card.cardClass).parent().html());
			$('.trading-box > .trader-1-assets .' + card.cardClass).addClass('hidden');
			$('.trading-box .btn-trade-closer').parent().removeClass();
			$('.trading-box .btn-trade-closer').parent().empty();
			$('#trader-1-assets-details').addClass('trader-1-assets-details hidden');
			$('.three > .player-button-blocker').css('display', 'none');
			$('.trading-box .trading-button-blocker').css('display', 'none');
			trader1.propertiesTrading.push(card);
		} else if (card.title === $('.trading-box .trader-2-assets-details > .card-heading').html()) {
			$('.trading-box .trader-2-offerings').append($('.trading-box .' + card.cardClass).parent().html());
			$('.trading-box > .trader-2-assets .' + card.cardClass).addClass('hidden');
			$('.trading-box .btn-trade-closer').parent().removeClass();
			$('.trading-box .btn-trade-closer').parent().empty();
			$('#trader-2-assets-details').addClass('trader-2-assets-details hidden');
			$('.three > .player-button-blocker').css('display', 'none');
			$('.trading-box .trading-button-blocker').css('display', 'none');
			$('.trading-box .trader-2-offerings > .' + card.cardClass).removeClass('hidden');
			trader2.propertiesTrading.push(card);
		}
	}
});

$(document).on('click', '.btn-return', function () {
	for (let property of properties) {
		if (property.title === $('.trading-box .trader-1-offerings-details > .property-name').html()) {
			$('.trading-box > .trader-1-assets .' + property.boardClass + '-player').removeClass('hidden');
			$('.trading-box .trader-1-offerings > img').remove('.' + property.boardClass + '-player');
			$('.trading-box .btn-trade-closer').parent().removeClass();
			$('.trading-box .btn-trade-closer').parent().empty();
			$('#trader-1-offerings-details').addClass('trader-1-offerings-details hidden');
			$('.three > .player-button-blocker').css('display', 'none');
			$('.trading-box .trading-button-blocker').css('display', 'none');
			let index = trader1.propertiesTrading.indexOf(property);
			trader1.propertiesTrading.splice(index, 1);
		} else if (property.title === $('.trading-box .trader-2-offerings-details > .property-name').html()) {
			$('.trading-box > .trader-2-assets .' + property.boardClass + '-player').removeClass('hidden');
			$('.trading-box .trader-2-offerings > img').remove('.' + property.boardClass + '-player');
			$('.trading-box .btn-trade-closer').parent().removeClass();
			$('.trading-box .btn-trade-closer').parent().empty();
			$('#trader-2-offerings-details').addClass('trader-2-offerings-details hidden');
			$('.three > .player-button-blocker').css('display', 'none');
			$('.trading-box .trading-button-blocker').css('display', 'none');
			let index = trader2.propertiesTrading.indexOf(property);
			trader2.propertiesTrading.splice(index, 1);
		}
	}

	for (let card of jailFreeCards) {
		if (card.title === $('.trading-box .trader-1-offerings-details > .card-heading').html()) {
			$('.trading-box > .trader-1-assets .' + card.cardClass).removeClass('hidden');
			$('.trading-box .trader-1-offerings > img').remove('.' + card.cardClass);
			$('.trading-box .btn-trade-closer').parent().removeClass();
			$('.trading-box .btn-trade-closer').parent().empty();
			$('#trader-1-offerings-details').addClass('trader-1-offerings-details hidden');
			$('.three > .player-button-blocker').css('display', 'none');
			$('.trading-box .trading-button-blocker').css('display', 'none');
			let index = trader1.propertiesTrading.indexOf(card);
			trader1.propertiesTrading.splice(index, 1);
		} else if (card.title === $('.trading-box .trader-2-offerings-details > .card-heading').html()) {
			$('.trading-box > .trader-2-assets .' + card.cardClass).removeClass('hidden');
			$('.trading-box .trader-2-offerings > img').remove('.' + card.cardClass);
			$('.trading-box .btn-trade-closer').parent().removeClass();
			$('.trading-box .btn-trade-closer').parent().empty();
			$('#trader-2-offerings-details').addClass('trader-2-offerings-details hidden');
			$('.three > .player-button-blocker').css('display', 'none');
			$('.trading-box .trading-button-blocker').css('display', 'none');
			let index = trader2.propertiesTrading.indexOf(card);
			trader2.propertiesTrading.splice(index, 1);
		}
	}
});

$(document).on('click', '.btn-add-cash-trader-1', function () {
	let cashToAdd = Number($('.trading-box > .trader-1-assets .amount').val());
	if (Number.isInteger(cashToAdd) && cashToAdd <= trader1.traderMoney && cashToAdd > 0) {
		trader1.traderMoney -= cashToAdd;
		$('.trading-box > .trader-1-offerings > .cash-offered').append('Cash: $' + cashToAdd);
		$('.trading-box > .trader-1-assets .btn-add-cash-trader-1').addClass('hidden');
		$('.trading-box > .trader-1-assets .amount').addClass('hidden');
		$('.trading-box > .trader-1-offerings > .trader-1-cash-offered').css('display', 'block');
		$('.trading-box > .trader-1-offerings > .btn-cash-return-trader-1').css('display', 'block');
		$('.trading-box > .trader-1-assets .player-cash').empty();
		$('.trading-box > .trader-1-assets .player-cash').append('$' + trader1.traderMoney);
		$('.trading-box > .trader-1-assets .whole-number').addClass('hidden');
		trader1.moneyTrading = cashToAdd;
	} else if (!Number.isInteger(cashToAdd) || cashToAdd < 0) {
		$('.trading-box > .trader-1-assets .whole-number').removeClass('hidden');
	} else if (cashToAdd > trader1.traderMoney) {
		$('.trading-box > .trader-1-assets .whole-number').addClass('hidden');
		$('.trading-box > .trader-1-assets .player-cash').css('color', 'red');
		setTimeout(function () {
			$('.trading-box > .trader-1-assets .player-cash').css('color', 'white');
		}, 400);
	}
});

$(document).on('click', '.btn-add-cash-trader-2', function () {
	let cashToAdd = Number($('.trading-box > .trader-2-assets .amount').val());
	if (Number.isInteger(cashToAdd) && cashToAdd <= trader2.traderMoney && cashToAdd > 0) {
		trader2.traderMoney -= cashToAdd;
		$('.trading-box > .trader-2-offerings > .cash-offered').append('Cash: $' + cashToAdd);
		$('.trading-box > .trader-2-assets .btn-add-cash-trader-2').addClass('hidden');
		$('.trading-box > .trader-2-assets .amount').addClass('hidden');
		$('.trading-box > .trader-2-offerings > .trader-2-cash-offered').css('display', 'block');
		$('.trading-box > .trader-2-offerings > .btn-cash-return-trader-2').css('display', 'block');
		$('.trading-box > .trader-2-assets .player-cash').empty();
		$('.trading-box > .trader-2-assets .player-cash').append('$' + trader2.traderMoney);
		$('.trading-box > .trader-2-assets .whole-number').addClass('hidden');
		trader2.moneyTrading = cashToAdd;
	} else if (!Number.isInteger(cashToAdd) || cashToAdd < 0) {
		$('.trading-box > .trader-2-assets .whole-number').removeClass('hidden');
	} else if (cashToAdd > trader2.traderMoney) {
		$('.trading-box > .trader-2-assets .whole-number').addClass('hidden');
		$('.trading-box > .trader-2-assets .player-cash').css('color', 'red');
		setTimeout(function () {
			$('.trading-box > .trader-2-assets .player-cash').css('color', 'white');
		}, 400);
	}
});

$(document).on('click', '.btn-cash-return-trader-1', function () {
	let cashToReturn = Number($('.trading-box > .trader-1-offerings .cash-offered').html().slice(7));
	trader1.traderMoney += cashToReturn;
	$('.trading-box > .trader-1-offerings .cash-offered').empty();
	$('.trading-box > .trader-1-assets .player-cash').empty();
	$('.trading-box > .trader-1-assets .player-cash').append('$' + trader1.traderMoney);
	$('.trading-box > .trader-1-offerings > .trader-1-cash-offered').css('display', 'none');
	$('.trading-box > .trader-1-offerings > .btn-cash-return-trader-1').css('display', 'none');
	$('.trading-box > .trader-1-assets .btn-add-cash-trader-1').removeClass('hidden');
	$('.trading-box > .trader-1-assets .amount').removeClass('hidden');
	trader1.moneyTrading = 0;
});

$(document).on('click', '.btn-cash-return-trader-2', function () {
	let cashToReturn = Number($('.trading-box > .trader-2-offerings .cash-offered').html().slice(7));
	trader2.traderMoney += cashToReturn;
	$('.trading-box > .trader-2-offerings .cash-offered').empty();
	$('.trading-box > .trader-2-assets .player-cash').empty();
	$('.trading-box > .trader-2-assets .player-cash').append('$' + trader2.traderMoney);
	$('.trading-box > .trader-2-offerings > .trader-2-cash-offered').css('display', 'none');
	$('.trading-box > .trader-2-offerings > .btn-cash-return-trader-2').css('display', 'none');
	$('.trading-box > .trader-2-assets .btn-add-cash-trader-2').removeClass('hidden');
	$('.trading-box > .trader-2-assets .amount').removeClass('hidden');
	trader2.moneyTrading = 0;
});

$(document).on('click', '.btn-propose-deal', function () {
	if ($('.trading-box .dealer').html() === trader1.name + ':') {
		$('.trading-box .dealer').html(trader2.name + ':');
	} else {
		$('.trading-box .dealer').html(trader1.name);
	}
	$('.trading-box .btn-propose-deal').css('display', 'none');
	$('.trading-box .btn-accept').css('display', 'inline');
	$('.trading-box .btn-counterpropose').css('display', 'inline');
	$('.trading-box .trading-button-blocker').css('display', 'block');
});

$(document).on('click', '.btn-counterpropose', function () {
	$('.trading-box .btn-propose-deal').css('display', 'inline');
	$('.trading-box .btn-accept').css('display', 'none');
	$('.trading-box .btn-counterpropose').css('display', 'none');
	$('.trading-box .trading-button-blocker').css('display', 'none');
});

$(document).on('click', '.btn-accept', function () {
	for (property of trader1.propertiesTrading) {
		$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').empty();
		$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').append(
			'<img src=' + `${trader2.token.image}` + ' alt=' + `${trader2.token.tokenClass}` + " class='token-tiny'>"
		);
		$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here').empty();
		$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here').append(
			'<img src=' + `${trader2.token.image}` + ' alt=' + `${trader2.token.tokenClass}` + " class='token-tiny'>"
		);
		let index = trader1.properties.indexOf(property);
		trader1.properties.splice(index, 1);
		trader2.properties.push(property);
		property.owner = trader2;
	}

	for (property of trader2.propertiesTrading) {
		$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').empty();
		$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').append(
			'<img src=' + `${trader1.token.image}` + ' alt=' + `${trader1.token.tokenClass}` + " class='token-tiny'>"
		);
		$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here').empty();
		$('.one > .' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here').append(
			'<img src=' + `${trader1.token.image}` + ' alt=' + `${trader1.token.tokenClass}` + " class='token-tiny'>"
		);
		let index = trader2.properties.indexOf(property);
		trader2.properties.splice(index, 1);
		trader1.properties.push(property);
		property.owner = trader1;
	}
	trader1.propertiesTrading = [];
	trader2.propertiesTrading = [];

	pay(trader2, trader1, trader2.moneyTrading);
	pay(trader1, trader2, trader1.moneyTrading);
	trader1.moneyTrading = 0;
	player2.moneyTrading = 0;
	checkForMonopoly(trader1);
	checkForMonopoly(trader2);
	changePlayerColumn(trader1);
	$('.trading-box').empty();
	$('.trading-box').addClass('hidden');
	$('.player-button-blocker').css('display', 'none');
	$('.one > button').removeClass('hidden');
	trader1.traderMoney = trader1.money;
	trader2.traderMoney = trader2.money;
	trader1 = null;
	trader2 = null;
});

$(document).on('click', '.btn-terminate', function () {
	$('.trading-box').empty();
	$('.trading-box').addClass('hidden');
	$('.player-button-blocker').css('display', 'none');
	$('.one > button').removeClass('hidden');
	trader1.traderMoney = trader1.money;
	trader2.traderMoney = trader2.money;
	trader1 = null;
	trader2 = null;
});

for (let property of properties) {
	$(document).on('click', '.' + property.boardClass, function () {
		$('.board-details').empty();
		property.boardClickResult();
		$('.board-details > button').css('display', 'none');
		$('.board-details > .closer').css('display', 'inline');
	});
}

for (let property of properties) {
	$(document).on('click', '.three .' + property.boardClass + '-player', function () {
		$('.player-details').empty();
		property.playerClickResult();
		$('.player-details > button').css('display', 'none');
		$('.player-details > .closer').css('display', 'inline');
		$('.player-details > .btn-mortgage').append('Mortgage - $' + property.mortgage);
		if (property.housesHotel === 0) {
			$('.player-details > .btn-mortgage').css('display', 'inline');
			if (property.owner.money >= Math.round(1.1 * property.mortgage)) {
				$('.player-details > .btn-lift-mortgage').css('display', 'inline');
			}
		}
		$('.player-details > .btn-buy-house').append('Buy house - $' + property.priceHouse);
		$('.player-details > .btn-buy-hotel').append('Buy hotel - $' + property.priceHouse);
		$('.player-details > .btn-sell-house').append('Sell house - $' + 0.5 * property.priceHouse);
		$('.player-details > .btn-sell-hotel').append('Sell hotel - $' + 0.5 * property.priceHouse);
		if (
			property.isMonopoly &&
			!property.isMortgaged &&
			property.owner.money >= property.priceHouse &&
			buyHouseNumberCheck(property)
		) {
			if (property.housesHotel < 4) {
				$('.player-details > .btn-buy-house').css('display', 'inline');
			} else if (property.housesHotel === 4) {
				$('.player-details > .btn-buy-hotel').css('display', 'inline');
			}
		}
		if (property.housesHotel > 0 && property.housesHotel < 5 && sellHouseNumberCheck(property)) {
			$('.player-details > .btn-sell-house').css('display', 'inline');
		} else if (property.housesHotel === 5) {
			$('.player-details > .btn-sell-hotel').css('display', 'inline');
		}
	});

	$(document).on('click', '.trading-box > .trader-1-assets .' + property.boardClass + '-player', function () {
		$('.trading-box .trader-1-assets-details').empty();
		property.trader1AssetClickResult();
	});

	$(document).on('click', '.trading-box > .trader-2-assets .' + property.boardClass + '-player', function () {
		$('.trading-box .trader-2-assets-details').empty();
		property.trader2AssetClickResult();
	});

	$(document).on('click', '.trading-box > .trader-1-offerings .' + property.boardClass + '-player', function () {
		$('.trading-box .trader-1-offerings-details').empty();
		property.trader1OfferingsClickResult();
	});

	$(document).on('click', '.trading-box > .trader-2-offerings .' + property.boardClass + '-player', function () {
		$('.trading-box .trader-2-offerings-details').empty();
		property.trader2OfferingsClickResult();
	});
}

for (let card of jailFreeCards) {
	$(document).on('click', '.three .' + card.cardClass, function () {
		$('.player-details').empty();
		card.playerClickResult();
	});

	$(document).on('click', '.trading-box > .trader-1-assets .' + card.cardClass, function () {
		$('.trading-box .trader-1-assets-details').empty();
		card.trader1AssetClickResult();
		$('.three > .player-button-blocker').css('display', 'block');
		$('.trading-box .trading-button-blocker').css('display', 'block');
	});

	$(document).on('click', '.trading-box > .trader-2-assets .' + card.cardClass, function () {
		$('.trading-box .trader-2-assets-details').empty();
		card.trader2AssetClickResult();
		$('.three > .player-button-blocker').css('display', 'block');
		$('.trading-box .trading-button-blocker').css('display', 'block');
	});

	$(document).on('click', '.trading-box > .trader-1-offerings .' + card.cardClass, function () {
		$('.trading-box .trader-1-offerings-details').empty();
		card.trader1OfferingsClickResult();
		$('.three > .player-button-blocker').css('display', 'block');
		$('.trading-box .trading-button-blocker').css('display', 'block');
	});

	$(document).on('click', '.trading-box > .trader-2-offerings .' + card.cardClass, function () {
		$('.trading-box .trader-2-offerings-details').empty();
		card.trader2OfferingsClickResult();
		$('.three > .player-button-blocker').css('display', 'block');
		$('.trading-box .trading-button-blocker').css('display', 'block');
	});
}

$(document).on('click', '.btn-buy-house', function () {
	let property;
	for (let propertyCheck of properties) {
		if (propertyCheck.title === $('.player-details > .property-name').html()) {
			property = propertyCheck;
		}
	}
	let player = property.owner;
	let moneyCheck = pay(player, freeParking.jackpot, property.priceHouse);
	if (moneyCheck) {
		property.housesHotel++;
		$('.' + property.boardClass + ' > .house-' + property.boardSide + '-' + property.housesHotel).append(
			"<img src='images/house.png' alt='house' class='house-hotel-board'>"
		);
		if (player.money < property.priceHouse || !buyHouseNumberCheck(property)) {
			$('.player-details > .btn-buy-house').css('display', 'none');
		}
		if (property.housesHotel > 0) {
			$('.player-details > .btn-sell-house').css('display', 'inline');
			$('.player-details > .btn-mortgage').css('display', 'none');
		}
		if (property.housesHotel === 4 && player.money >= property.priceHouse && buyHouseNumberCheck(property)) {
			$('.player-details > .btn-buy-house').css('display', 'none');
			$('.player-details > .btn-buy-hotel').css('display', 'inline');
		}
		$('.three > .player-heading > .player-cash').empty();
		$('.three > .player-heading > .player-cash').append('$' + player.money);
		if (trader1 === player1) {
			$('.trader-box > trader-1-assets > .player-heading > .player-cash').empty();
			$('.trader-box > trader-1-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
		}
		if (trader2 === player1) {
			$('.trader-box > trader-2-assets > .player-heading > .player-cash').empty();
			$('.trader-box > trader-2-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
		}
		updateDetails(property);
	}
});

function updateDetails(property) {
	$('.three' > '.player-details').empty();
	property.playerClickResult();
	$('.player-details > button').css('display', 'none');
	$('.player-details > .closer').css('display', 'inline');
	$('.player-details > .btn-mortgage').append('Mortgage - $' + property.mortgage);
	if (property.housesHotel === 0) {
		$('.player-details > .btn-mortgage').css('display', 'inline');
		if (property.owner.money >= Math.round(1.1 * property.mortgage)) {
			$('.player-details > .btn-lift-mortgage').css('display', 'inline');
		}
	}
	$('.player-details > .btn-buy-house').append('Buy house - $' + property.priceHouse);
	$('.player-details > .btn-buy-hotel').append('Buy hotel - $' + property.priceHouse);
	$('.player-details > .btn-sell-house').append('Sell house - $' + 0.5 * property.priceHouse);
	$('.player-details > .btn-sell-hotel').append('Sell hotel - $' + 0.5 * property.priceHouse);
	if (
		property.isMonopoly &&
		!property.isMortgaged &&
		property.owner.money >= property.priceHouse &&
		buyHouseNumberCheck(property)
	) {
		if (property.housesHotel < 4) {
			$('.player-details > .btn-buy-house').css('display', 'inline');
		} else if (property.housesHotel === 4) {
			$('.player-details > .btn-buy-hotel').css('display', 'inline');
		}
	}
	if (property.housesHotel > 0 && property.housesHotel < 5 && sellHouseNumberCheck(property)) {
		$('.player-details > .btn-sell-house').css('display', 'inline');
	} else if (property.housesHotel === 5) {
		$('.player-details > .btn-sell-hotel').css('display', 'inline');
	}
	if (property.title === $('.board-details > .property-name').html()) {
		$('.board-details').empty();
		property.boardClickResult(property, 'board-details', 'one');
		$('.board-details > button').css('display', 'none');
		$('.board-details > .closer').css('display', 'inline');
	}
}

$(document).on('click', '.btn-buy-hotel', function () {
	let property;
	for (let propertyCheck of properties) {
		if (propertyCheck.title === $('.player-details > .property-name').html()) {
			property = propertyCheck;
		}
	}
	let player = property.owner;
	let moneyCheck = pay(player, freeParking.jackpot, property.priceHouse);
	if (moneyCheck) {
		property.housesHotel++;
		$('.' + property.boardClass + ' > .hotel-' + property.boardSide).append(
			"<img src='images/hotel.png' alt='hotel' class='house-hotel-board'>"
		);
		$('.' + property.boardClass + ' > .house').addClass('hidden');
		$('.' + property.boardClass + ' > .hotel').removeClass('hidden');
		$('.player-details > .btn-buy-hotel').css('display', 'none');
		$('.player-details > .btn-sell-house').css('display', 'none');
		$('.player-details > .btn-sell-hotel').css('display', 'inline');
		$('.three > .player-heading > .player-cash').empty();
		$('.three > .player-heading > .player-cash').append('$' + player.money);
		if (trader1 === player1) {
			$('.trader-box > trader-1-assets > .player-heading > .player-cash').empty();
			$('.trader-box > trader-1-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
		}
		if (trader2 === player1) {
			$('.trader-box > trader-2-assets > .player-heading > .player-cash').empty();
			$('.trader-box > trader-2-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
		}
		updateDetails(property);
	}
});

$(document).on('click', '.btn-sell-hotel', function () {
	let property;
	for (let propertyCheck of properties) {
		if (propertyCheck.title === $('.player-details > .property-name').html()) {
			property = propertyCheck;
		}
	}
	let player = property.owner;
	moneyChange(player, 0.5 * property.priceHouse);
	$('.' + property.boardClass + ' > .hotel').addClass('hidden');
	$('.' + property.boardClass + ' > .hotel-' + property.boardSide).empty();
	property.housesHotel--;
	$('.' + property.boardClass + ' > .house').removeClass('hidden');
	$('.player-details > .btn-sell-hotel').css('display', 'none');
	$('.player-details > .btn-buy-hotel').css('display', 'inline');
	if (sellHouseNumberCheck(property)) {
		$('.player-details > .btn-sell-house').css('display', 'inline');
	}
	$('.three > .player-heading > .player-cash').empty();
	$('.three > .player-heading > .player-cash').append('$' + player.money);
	if (trader1 === player1) {
		$('.trader-box > trader-1-assets > .player-heading > .player-cash').empty();
		$('.trader-box > trader-1-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
	}
	if (trader2 === player1) {
		$('.trader-box > trader-2-assets > .player-heading > .player-cash').empty();
		$('.trader-box > trader-2-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
	}
	updateDetails(property);
});

$(document).on('click', '.btn-sell-house', function () {
	let property;
	for (let propertyCheck of properties) {
		if (propertyCheck.title === $('.player-details > .property-name').html()) {
			property = propertyCheck;
		}
	}
	let player = property.owner;
	moneyChange(player, 0.5 * property.priceHouse);
	$('.' + property.boardClass + ' > .house-' + property.boardSide + '-' + property.housesHotel).empty();
	property.housesHotel--;
	if (property.housesHotel === 0) {
		$('.player-details > .btn-sell-house').css('display', 'none');
		$('.player-details > .btn-mortgage').css('display', 'inline');
	}
	if (player.money >= property.priceHouse) {
		$('.player-details > .btn-buy-house').css('display', 'inline');
	}
	if (!sellHouseNumberCheck(property)) {
		$('.player-details > .btn-sell-house').css('display', 'none');
	}
	$('.player-details > .btn-buy-hotel').css('display', 'none');
	$('.three > .player-heading > .player-cash').empty();
	$('.three > .player-heading > .player-cash').append('$' + player.money);
	if (trader1 === player1) {
		$('.trader-box > trader-1-assets > .player-heading > .player-cash').empty();
		$('.trader-box > trader-1-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
	}
	if (trader2 === player1) {
		$('.trader-box > trader-2-assets > .player-heading > .player-cash').empty();
		$('.trader-box > trader-2-assets > .player-heading > .player-cash').append('$' + player.traderMoney);
	}
	updateDetails(property);
});

$(document).on('click', '.btn-buy', function () {
	let player = gameStatus.currentPlayerTurn;
	let property = player.onSpace;
	let moneyCheck = pay(player, freeParking.jackpot, property.price);
	if (moneyCheck) {
		player.properties.push(property);
		property.owner = player;
		checkForMonopoly(player);
		$('.board-details > .btn-buy').css('display', 'none');
		$('.board-details > .btn-auction').css('display', 'none');
		$('.board-details > .btn-decline').css('display', 'none');
		$('.board-details > .closer').css('display', 'inline');
		$('.btn-buy').empty();
		$('.three').empty();
		$('.' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').append(
			'<img src=' + `${player.token.image}` + ' alt=' + `${player.token.tokenClass}` + " class='token-tiny'>"
		);
		$('.' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here').append(
			'<img src=' + `${player.token.image}` + ' alt=' + `${player.token.tokenClass}` + " class='token-tiny'>"
		);
		$('.' + property.boardClass + ' > .' + property.boardClass + '-owner').removeClass('hidden');
		changePlayerColumn(player);
		updateDetails(property);
		endTurn();
	}
});

$(document).on('click', '.btn-auction-buy', function () {
	let moneyCheck = pay(leadingBidder, freeParking.jackpot, leadingBid);
	if (moneyCheck) {
		leadingBidder.properties.push(property);
		property.owner = leadingBidder;
		checkForMonopoly(leadingBidder);
		$('.board-details > .btn-buy').css('display', 'none');
		$('.board-details > .btn-auction').css('display', 'none');
		$('.board-details > .btn-decline').css('display', 'none');
		$('.board-details > .closer').css('display', 'inline');
		$('.board-details > .btn-auction-buy').css('display', 'none');
		$('.three').empty();
		$('.' + property.boardClass + ' > .' + property.boardClass + '-owner > .token-goes-here').append(
			'<img src=' +
			`${leadingBidder.token.image}` +
			' alt=' +
			`${leadingBidder.token.tokenClass}` +
			" class='token-tiny'>"
		);
		$('.' + property.boardClass + ' > .' + property.boardClass + '-mortgaged > .token-goes-here').append(
			'<img src=' +
			`${leadingBidder.token.image}` +
			' alt=' +
			`${leadingBidder.token.tokenClass}` +
			" class='token-tiny'>"
		);
		$('.' + property.boardClass + ' > .' + property.boardClass + '-owner').removeClass('hidden');
		changePlayerColumn(leadingBidder);
		updateDetails(property);
		biddingPlayer = null;
		leadingBidder = null;
		numberOfPasses = 0;
		leadingBid = 0;
		playerBid = null;
		bidStatus = '&nbsp;';
		auctioneerAnnouncement = '&nbsp;';
		propertySold = null;
		endTurn();
	}
});

$(document).on('click', '.btn-auction', function () {
	displayAuctionBox();
});

$(document).on('click', '.btn-decline', function () {
	let player = gameStatus.currentPlayerTurn;
	$('.btn-buy').css('display', 'none');
	$('.btn-auction').css('display', 'none');
	$('.btn-decline').css('display', 'none');
	$('.board-details > .closer').css('display', 'inline');
	$('.btn-buy').empty();
	endTurn();
});

$('.roll-for-utility-card').click(function () {
	$('.roll').css('display', 'none');
	$('.roll-for-utility-card').css('display', 'none');
	let diceResult = rollDice();
	$('.dice1').attr('src', diceResult.dice1Image);
	$('.dice2').attr('src', diceResult.dice2Image);
	let player = gameStatus.currentPlayerTurn;
	player.utilityDice = diceResult;
	let moneyOwed = diceResult.total * 10;
	displayUtility(player.onSpace, 'board-details', 'one');
	rent(moneyOwed);
});

$(document).on('click', '.btn-rent', function () {
	let playerPaying = gameStatus.currentPlayerTurn;
	let property = playerPaying.onSpace;
	let playerReceiving = property.owner;
	let moneyOwed;
	if (property.type === 'coloredProperty') {
		moneyOwed = property.rent[property.housesHotel];
		if (property.isMonopoly && property.housesHotel === 0) {
			moneyOwed = property.rent[6];
		}
	} else if (property.type === 'railroad') {
		moneyOwed = property.rent[property.owner.numberOfRailroads() - 1] * multiplier;
	} else if (property.type === 'utility') {
		if (multiplier === 1) {
			if (property.owner.numberOfUtilities() === 1) {
				multiplier = 4;
			} else if (property.owner.numberOfUtilities() === 2) {
				multiplier = 10;
			}
		}
		moneyOwed = playerPaying.utilityDice.total * multiplier;
	}
	multiplier = 1;
	let moneyCheck = pay(playerPaying, playerReceiving, moneyOwed);
	if (moneyCheck) {
		if ($('.three > .player-heading > .token-small').attr('alt') === playerReceiving.token.tokenClass) {
			$('.three > .player-heading > .player-cash').empty();
			$('.three > .player-heading > .player-cash').append('$' + playerReceiving.money);
		} else if ($('.three > .player-heading > .token-small').attr('alt') === playerPaying.token.tokenClass) {
			$('.three > .player-heading > .player-cash').empty();
			$('.three > .player-heading > .player-cash').append('$' + playerPaying.money);
		}
		$('.board-details > .btn-rent').css('display', 'none');
		$('.board-details > .closer').css('display', 'inline');
		endTurn();
	}
});

$(document).on('click', '.btn-bankrupt', function () {
	let playerPaying;
	for (let player of activePlayers) {
		if ($('.three > .player-heading > .token-small').attr('alt') === player.token.tokenClass) {
			playerPaying = player;
		}
	}
	playerReceiving = playerPaying.inDebtTo;
	biddingPlayer = null;
	leadingBidder = null;
	numberOfPasses = 0;
	leadingBid = 0;
	playerBid = null;
	bidStatus = '&nbsp;';
	auctioneerAnnouncement = '&nbsp;';
	propertySold = null;
	bankrupt(playerPaying, playerReceiving);
});

// // TEST LOGIC

// activePlayers = [player4, player2, player3, player1, player6, player5];
// initialPlayers = [player4, player2, player3, player1, player6, player5];

// // // TESTING BANKRUPTCY

// // initialPlayers = [player1, player2];
// // activePlayers = [player1, player2];
// // let activePlayersBeforeBankruptcy = activePlayers.slice();
// // player1.money = 10;
// // player1.properties = [parkPlace, boardwalk, illinoisAvenue, indianaAvenue, pennsylvaniaRailroad, waterWorks, jailFreeCommunityChest];
// // parkPlace.housesHotel = 4;
// // boardwalk.housesHotel = 5;
// // indianaAvenue.isMortgaged = true;
// // player1.properties.forEach(function(property) {
// //   property.owner = player1;
// //   if (property.type !== "card" && property !== indianaAvenue) {
// //     $(".one > ." + property.boardClass + " > ." + property.boardClass + "-owner").removeClass("hidden");
// //     $(".one > ." + property.boardClass + " > ." + property.boardClass + "-owner > .token-goes-here").append("<img src='images/token-" + player1.token.tokenClass + ".png' alt=" + player1.token.tokenClass + " class='token-tiny'>");
// //   }
// // });

// // $(".one > .indiana-ave > .indiana-ave-mortgaged").removeClass("hidden");
// // $(".one > .indiana-ave > .indiana-ave-mortgaged > .token-goes-here").append("<img src='images/token-" + player1.token.tokenClass + ".png' alt=" + player1.token.tokenClass + " class='token-tiny'>");
// // for (let i = 1; i <= 4; i++) {
// //   $(".one > .park-place > .house-right-" + i).append("<img src='images/house.png' alt='house' class='house-hotel-board'>");
// //   $(".one > .park-place > .house-right-" + i).addClass("hidden");
// // }
// // $(".one > .park-place > .hotel-right").append("<img src='images/hotel.png' alt='hotel' class='house-hotel-board'>");
// // $(".one > .park-place > .hotel-right").removeClass("hidden");
// // for (let i = 1; i <= 4; i++) {
// //   $(".one > .boardwalk > .house-right-" + i).append("<img src='images/house.png' alt='house' class='house-hotel-board'>");
// // }

// // player2.properties = [orientalAvenue, vermontAvenue, connecticutAvenue];
// // player2.properties.forEach(function(property) {
// //   property.owner = player2;
// //   property.housesHotel = 4;
// //   for (let i = 1; i <= 4; i++) {
// //     $(".one > ." + property.boardClass + " .house-bottom-" + i).append("<img src='images/house.png' alt='house' class='house-hotel-board'>");
// //   }
// //   $(".one > ." + property.boardClass + " > ." + property.boardClass + "-owner").removeClass("hidden");
// //   $(".one > ." + property.boardClass + " > ." + property.boardClass + "-owner > .token-goes-here").append("<img src='images/token-" + player2.token.tokenClass + ".png' alt=" + player2.token.tokenClass + " class='token-tiny'>");
// // });

// // //

// firstThroughEighth = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];


// for (let player of activePlayers) {
// 	player.name = `${player.playerNumber}`
// 	$("#go").append("<img src=" + player.token.image + " alt=" + player.token.tokenClass + " class='token active'>");
// 	$(".active").addClass(`token ${player.token.tokenClass}`);
// 	$("." + player.token.tokenClass).css(player.tokenSpace);
// 	player.onSpace = go;
// 	$(".active").removeClass("active");
// 	player.playerOrder = firstThroughEighth[activePlayers.indexOf(player)];
// 	$("." + player.playerOrder).css("display", "block");
// 	$("." + player.playerOrder + " > p:first-child").html(player.name);
// 	$("." + player.playerOrder + " > img").attr("src", player.token.image);
// 	$("." + player.playerOrder + " > p:last-child").html("$" + player.money);
// }

// firstThroughEighth.forEach(function (div) {
// 	$(document).on("click", "." + div, function () {
// 		$(".three").empty();
// 		let playerIndex = firstThroughEighth.indexOf(div);
// 		let player = initialPlayers[playerIndex];
// 		changePlayerColumn(player);
// 	});
// });

// gameStatus.currentPlayerTurn = activePlayers[5];
// $(".two > ." + gameStatus.currentPlayerTurn.playerOrder + " > .token-small").css("box-shadow", "0 0 0.25rem 0.25rem #f6d743");

// $(".display-test-board").click(function () {
// 	displayProperty(balticAvenue, "board-details", "one");
// 	$(".board-details > .closer").css("display", "inline");
// });

// $(".display-test-player").click(function () {
// 	displayProperty(kentuckyAvenue, "player-details", "three");
// 	$(".player-details > .closer").css("display", "inline");
// });

// let names = activePlayers.map(function (player) {
// 	return player.name;
// });

// // $(".one > .go").hover(function() {
// //   $(".one > .go").css("background-color", "#8ac6d1");
// // }, function() {
// //   $(".one > .go").css("background-color", "initial");
// // });
