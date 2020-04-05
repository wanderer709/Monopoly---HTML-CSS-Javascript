<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="UTF-8">
  <title>Monopoly!</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="game-start number-of-players">
    <br>
    <h2>Welcome to Monopoly! How many will be playing?</h2>
    <br><br>
    <form class="">
      <label>Number of players (2-8):</label>
      <input type="number" name="quantity" value="2" min="2" max="8" id="number-of-players">
    </form>
    <br><br>
    <button id="set-number">Okay</button>
  </div>

  <div class="game-start names-tokens">
    <br>
    <h2 class="number-of-players-eh"> players, eh? Let's move on to names and tokens.</h2>
    <div class="name-token-select">
      <br><br><br>
      <form class="">
        <label>Name:</label>
        <input type="text" value="" id="name">
        <br><br>
        <label>Token:</label>
        <select id="tokens">
          <option id="boot" value="boot">Boot</option>
          <option id="cannon" value="cannon">Cannon</option>
          <option id="car" value="car">Car</option>
          <option id="dog" value="dog">Dog</option>
          <option id="hat" value="hat">Hat</option>
          <option id="horse-and-rider" value="horse-and-rider">Horse and Rider</option>
          <option id="iron" value="iron">Iron</option>
          <option id="sack-of-money" value="sack-of-money">Sack of Money</option>
          <option id="ship" value="ship">Ship</option>
          <option id="thimble" value="thimble">Thimble</option>
          <option id="wheelbarrow" value="wheelbarrow">Wheelbarrow</option>
        </select>
      </form>
      <img src="" alt="" class="token-selected">
      <br>
      <button class="hidden" id="set-name-token">Okay</button>
    </div>
    <div class="name-token-list">
      <ul class="player-list">
      </ul>
    </div>
    <div class="buttons">
      <br>
      <button class="reset-names-tokens">Reset</button>
      <button class="next-names-tokens">Next</button>
    </div>
  </div>

  <div class="game-start turn-order">
    <br>
    <h2>Names and tokens set! Now for turn order.</h2>
    <div class="turn-order-decider">
      <p>How should the turn order be decided?</p>
      <button class="turn-order-decider" id="dice-roll">By dice roll</button>
      <button class="turn-order-decider" id="auto-random">Automatically (random-order)</button>
      <button class="turn-order-decider" id="player-decide">Players decide</button>
    </div>
    <div class="dice-roll">
      <div class="rolling-div">
        <br>
        <p>Each player will roll the dice. The turn order will be from the highest roll to the lowest, with random ordering in the case of ties.</p>
        <br>
        <h3 class="player-name"></h3>
        <br>
        <img src="images/dice1.png" alt="dice" class="dice1-turn-order">
        <img src="images/dice1.png" alt="dice" class="dice2-turn-order">
        <br>
        <button id="roll-turn-order">Roll Dice</button>
      </div>
      <div class="results-div">
        <ul class="player-list-dice-results">
        </ul>
      </div>
    </div>
    <div class="auto-random">
      <ul class="random-list">
      </ul>
      <h4>The turn order will be determined randomly.</h4>
    </div>
    <div class="player-decide">
      <p>Choose which player in the left column should go first, then the next, and so forth. The turn order you decide will be shown top-down on the right column.</p>
      <div class="players-to-choose">
        <ul>
        </ul>
      </div>
      <div class="chosen-order">
        <ul>
        </ul>
      </div>

    </div>
    <div class="buttons">
      <br>
      <button class="reset-turn-order">Reset</button>
      <button class="next-turn-order">Next</button>
    </div>

  </div>


  <div class="game-start finalize">
    <br>
    <h2 class="complete"></h2>
    <br>
    <ul class="finalized-player-list">
    </ul>
    <p><strong>Do these names, tokens, and turn order look good?</strong></p>
    <button class="play-game">Yes, let's play the game and destroy some friendships!</button>
    <button class="start-over">Start over</button>
  </div>

  <div class="column one">

    <div class="go" title="GO - collect $200 salary as you pass, stupid.">
      <div class="corner-space" id="go"></div>
    </div>
    <div class="mediterranean-ave" title="Mediterranean Avenue - Price $60">
      <div class="bottom-space" id="mediterranean-ave"></div>
    </div>
    <div class="community-chest1" title="Community Chest">
      <div class="bottom-space" id="community-chest1"></div>
    </div>
    <div class="baltic-ave" title="Baltic Avenue - Price $60">
      <div class="bottom-space" id="baltic-ave"></div>
    </div>
    <div class="income-tax" title="Income Tax - Pay 10% or $200">
      <div class="bottom-space" id="income-tax"></div>
    </div>
    <div class="reading-railroad" title="Reading Railroad - Price $200">
      <div class="bottom-space" id="reading-railroad"></div>
    </div>
    <div class="oriental-ave" title="Oriental Avenue - Price $100">
      <div class="bottom-space" id="oriental-ave"></div>
    </div>
    <div class="chance1" title="Chance">
      <div class="bottom-space" id="chance1"></div>
    </div>
    <div class="vermont-ave" title="Vermont Avenue - Price $100">
      <div class="bottom-space" id="vermont-ave"></div>
    </div>
    <div class="connecticut-ave" title="Connecticut Avenue - Price $120">
      <div class="bottom-space" id="connecticut-ave"></div>
    </div>
    <div class="jail" title="This is jail, stupid.">
      <div class="corner-space" id="jail"></div>
    </div>
    <div class="st-charles-place" title="St. Charles Place - Price $140">
      <div class="left-space" id="st-charles-place"></div>
    </div>
    <div class="electric-company" title="Electric Company - Price $150">
      <div class="left-space" id="electric-company"></div>
    </div>
    <div class="states-ave" title="States Avenue - Price $140">
      <div class="left-space" id="states-ave"></div>
    </div>
    <div class="virginia-ave" title="Virginia Avenue - Price $160">
      <div class="left-space" id="virginia-ave"></div>
    </div>
    <div class="pennsylvania-railroad" title="Pennsylvania Railroad - Price $200">
      <div class="left-space" id="pennsylvania-railroad"></div>
    </div>
    <div class="st-james-place" title="St. James Place - Price $180">
      <div class="left-space" id="st-james-place"></div>
    </div>
    <div class="community-chest2" title="Community Chest">
      <div class="left-space" id="community-chest2"></div>
    </div>
    <div class="tennessee-ave" title="Tennessee Avenue - Price $180">
      <div class="left-space" id="tennessee-ave"></div>
    </div>
    <div class="new-york-ave" title="New York Avenue - Price $200">
      <div class="left-space" id="new-york-ave"></div>
    </div>
    <div class="free-parking" title="Free Parking, stupid">
      <div class="corner-space" id="free-parking"></div>
    </div>
    <div class="kentucky-ave" title="Kentucy Avenue - Price $220">
      <div class="top-space" id="kentucky-ave"></div>
    </div>
    <div class="chance2" title="Chance">
      <div class="top-space" id="chance2"></div>
    </div>
    <div class="indiana-ave" title="Indiana Avenue - Price $220">
      <div class="top-space" id="indiana-ave"></div>
    </div>
    <div class="illinois-ave" title="Illinois Avenue - Price $240">
      <div class="top-space" id="illinois-ave"></div>
    </div>
    <div class="bo-railroad" title="B&0 Railroad - Price $200">
      <div class="top-space" id="bo-railroad"></div>
    </div>
    <div class="atlantic-ave" title="Atlantic Avenue - Price $260">
      <div class="top-space" id="atlantic-ave"></div>
    </div>
    <div class="ventnor-ave" title="Ventnor Avenue - Price $260">
      <div class="top-space" id="ventnor-ave"></div>
    </div>
    <div class="water-works" title="Water Works - Price $150">
      <div class="top-space" id="water-works"></div>
    </div>
    <div class="marvin-gardens" title="Marvin Gardens - Price $280">
      <div class="top-space" id="marvin-gardens"></div>
    </div>
    <div class="go-to-jail" title="Go To Jail, stupid.">
      <div class="corner-space" id="go-to-jail"></div>
    </div>
    <div class="pacific-ave" title="Pacific Avenue - Price $300">
      <div class="right-space" id="pacific-ave"></div>
    </div>
    <div class="north-carolina-ave" title="North Carolina Avenue - Price $300">
      <div class="right-space" id="north-carolina-ave"></div>
    </div>
    <div class="community-chest3" title="Community Chest">
      <div class="right-space" id="community-chest3"></div>
    </div>
    <div class="pennsylvania-ave" title="Pennsylvania Avenue - Price $320">
      <div class="right-space" id="pennsylvania-ave"></div>
    </div>
    <div class="short-line" title="Short Line - Price $200">
      <div class="right-space" id="short-line"></div>
    </div>
    <div class="chance3" title="Chance">
      <div class="right-space" id="chance3"></div>
    </div>
    <div class="park-place" title="Park Place - Price $350">
      <div class="right-space" id="park-place"></div>
    </div>
    <div class="luxury-tax" title="Luxury Tax">
      <div class="right-space" id="luxury-tax"></div>
    </div>
    <div class="boardwalk" title="Boardwalk - Price $400">
      <div class="right-space" id="boardwalk"></div>
    </div>

    <img src="images/dice1.png" alt="dice" class="dice1">
    <img src="images/dice1.png" alt="dice" class="dice2">
    <br>
    <!-- <button class="btn-buy"></button>
    <button class="btn-rent"></button>
    <button class="btn-auction">Auction</button> -->
    <button class="roll">Roll Dice</button>
    <button class="roll-riot">Attempt to instigate a prison riot (Attempt to roll doubles)</button>
    <button class="roll-for-utility-card">Roll Dice</button>
    <button class="bribe">Bribe $50</button>
    <button class="end-turn">End Turn</button>

    <div class="board-button-blocker"></div>

    <div id="board-details" class="board-details hidden"></div>
  </div>

  <div class="column two">

    <div class="player-summary first">
      <p class="player-name-cash"></p>
      <img class="vertical-middle token-small" src="" alt="">
      <p class="player-name-cash right"></p>
    </div>
    <div class="player-summary second">
      <p class="player-name-cash"></p>
      <img class="vertical-middle token-small" src="" alt="">
      <p class="player-name-cash right"></p>
    </div>
    <div class="player-summary third">
      <p class="player-name-cash"></p>
      <img class="vertical-middle token-small" src="" alt="">
      <p class="player-name-cash right"></p>
    </div>
    <div class="player-summary fourth">
      <p class="player-name-cash"></p>
      <img class="vertical-middle token-small" src="" alt="">
      <p class="player-name-cash right"></p>
    </div>
    <div class="player-summary fifth">
      <p class="player-name-cash"></p>
      <img class="vertical-middle token-small" src="" alt="">
      <p class="player-name-cash right"></p>
    </div>
    <div class="player-summary sixth">
      <p class="player-name-cash"></p>
      <img class="vertical-middle token-small" src="" alt="">
      <p class="player-name-cash right"></p>
    </div>
    <div class="player-summary seventh">
      <p class="player-name-cash"></p>
      <img class="vertical-middle token-small" src="" alt="">
      <p class="player-name-cash right"></p>
    </div>
    <div class="player-summary eighth">
      <p class="player-name-cash"></p>
      <img class="vertical-middle token-small" src="" alt="">
      <p class="player-name-cash right"></p>
    </div>
  </div>

  <div class="column three">
    <div class="player-heading">
      <!-- <table>
        <tr>
          <td class="player-name">CP</td>
          <td><img class="vertical-middle token-small" src="images/token-boot.png" alt=""></td>
        </tr>
        <tr>
          <td class="cash-label">Cash on hand:</td>
          <td class="player-cash">$1500</td>
        </tr>
      </table> -->
      <p class="player-name">CP</p>
      <img class="vertical-middle token-small" src="images/token-boot.png" alt="">
      <br><br>
      <p class="cash-label">Cash on hand:</p>
      <p class="player-cash">$1500</p>
    </div>
    <hr class="c3-hr">
    <h2 class="properties-label">Properties:</h2>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-purple.png" alt="purple" class="titledeed-small" title="Mediterranean Avenue"></td>
        <td><img src="images/titledeed-purple.png" alt="purple" class="titledeed-small" title="Baltic Avenue"></td>
      </tr>
    </table>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-light-blue.png" alt="light-blue" class="titledeed-small" title="Oriental Avenue"></td>
        <td><img src="images/titledeed-light-blue.png" alt="light-blue" class="titledeed-small" title="Vermont Avenue"></td>
        <td><img src="images/titledeed-light-blue.png" alt="light-blue" class="titledeed-small" title="Connecticut Avenue"></td>
      </tr>
    </table>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-magenta.png" alt="magenta" class="titledeed-small" title="St. Charles Place"></td>
        <td><img src="images/titledeed-magenta.png" alt="magenta" class="titledeed-small" title="State Avenue"></td>
        <td><img src="images/titledeed-magenta.png" alt="magenta" class="titledeed-small" title="Virginia Avenue"></td>
      </tr>
    </table>
    <br>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-orange.png" alt="orange" class="titledeed-small" title="St. James Place"></td>
        <td><img src="images/titledeed-orange.png" alt="orange" class="titledeed-small" title="Tennessee Avenue"></td>
        <td><img src="images/titledeed-orange.png" alt="orange" class="titledeed-small" title="New York Avenue"></td>
      </tr>
    </table>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-red.png" alt="red" class="titledeed-small" title="Kentucky Avenue"></td>
        <td><img src="images/titledeed-red.png" alt="red" class="titledeed-small" title="Indiana Avenue"></td>
        <td><img src="images/titledeed-red.png" alt="red" class="titledeed-small" title="Illinois Avenue"></td>
      </tr>
    </table>
    <br>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-yellow.png" alt="yellow" class="titledeed-small" title="Atlantic Avenue"></td>
        <td><img src="images/titledeed-yellow.png" alt="yellow" class="titledeed-small" title="Ventnor Avenue"></td>
        <td><img src="images/titledeed-yellow.png" alt="yellow" class="titledeed-small" title="Marvin Gardens"></td>
      </tr>
    </table>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-green.png" alt="green" class="titledeed-small" title="Pacific Avenue"></td>
        <td><img src="images/titledeed-green.png" alt="green" class="titledeed-small" title="North Carolina Avenue"></td>
        <td><img src="images/titledeed-green.png" alt="green" class="titledeed-small" title="Pennsylvania Avenue"></td>
      </tr>
    </table>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-blue.png" alt="blue" class="titledeed-small" title="Park Place"></td>
        <td><img src="images/titledeed-blue.png" alt="blue" class="titledeed-small" title="Boardwalk"></td>
      </tr>
    </table>
    <br>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-railroad.png" alt="railroad" class="titledeed-small" title="Reading Railroad"></td>
        <td><img src="images/titledeed-railroad.png" alt="railroad" class="titledeed-small" title="Pennsylvania Railroad"></td>
        <td><img src="images/titledeed-railroad.png" alt="railroad" class="titledeed-small" title="B&O Railroad"></td>
        <td><img src="images/titledeed-railroad.png" alt="railroad" class="titledeed-small" title="Short Line"></td>
      </tr>
    </table>
    <table class="properties">
      <tr>
        <td><img src="images/titledeed-electric.png" alt="electric" class="titledeed-small" title="Electric Company"></td>
        <td><img src="images/titledeed-water.png" alt="water" class="titledeed-small" title="Water Works"></td>
      </tr>
    </table>
    <br>
    <table>
      <tr>
        <td><strong>Get-out-of-jail-free Cards</strong></td>
        <td><img src="images/chance.png" alt="chance" class="chance-cc-small" title="?"></td>
        <td><img src="images/community-chest.png" alt="chance" class="chance-cc-small" title="Community Chest"></td>
      </tr>
    </table>
    <br>
    <div class="player-details hidden">
    </div>
  </div>

  <div class="reference">
    <div class="titledeed">
      <h4 class=property-heading>Title Deed</h4>
      <br>
      <h3 class=property-name></h3>
      <br>
      <p class="price"></p>
      <p class="base-rent"></p>
      <div class="prop-details">
        <table class="rents wide">
          <tr class="rent-1-house">
            <td class="left">With 1 House</td>
            <td class="right"></td>
          </tr>
          <tr class="rent-2-house">
            <td class="left">With 2 Houses</td>
            <td class="right"></td>
          </tr>
          <tr class="rent-3-house">
            <td class="left">With 3 Houses</td>
            <td class="right"></td>
          </tr>
          <tr class="rent-4-house">
            <td class="left">With 4 Houses</td>
            <td class="right"></td>
          </tr>
        </table>
        <table class="rents">
          <tr class="rent-hotel">
            <td>With Hotel</td>
            <td class="rent-hotel"></td>
          </tr>
        </table>
        <br>
        <p class="mortgage-value"></p>
        <p class="house-price"></p>
        <p class="hotel-price"></p>
      </div>
      <p class="prop-footer">If a player owns ALL of the lots on a given color group, the rent is <em>doubled</em> on unimproved lots within that group.</p>
      <button class="closer">Click here to close.</button>
      <button class="btn-buy"></button>
      <button class="btn-rent"></button>
      <button class="btn-auction">Auction</button>
      <!-- <button class='rent hidden'></button> -->
    </div>

    <div class="railroad">
      <br><br><br><br><br><br><br>
      <hr>
      <h2 class="property-name"></h2>
      <hr>
      <p>PRICE $200</p>
      <table class="wide">
        <tr>
          <td class="left">Rent</td>
          <td class="right">$25</td>
        </tr>
        <tr>
          <td class="left">If 2 R.R's are owned</td>
          <td class="right">$50</td>
        </tr>
        <tr>
          <td class="left">If 3 R.R's are owned</td>
          <td class="right">$100</td>
        </tr>
        <tr>
          <td class="left">If 4 R.R's are owned</td>
          <td class="right">$200</td>
        </tr>
        <br>
        <table class="wide">
          <tr>
            <td class="left">Mortgage Value</td>
            <td class="right">$100</td>
          </tr>
        </table>
      <button class="closer">Click here to close.</button>
      <button class="btn-buy"></button>
      <button class="btn-rent"></button>
      <button class="btn-auction">Auction</button>
    </div>

    <div class="utility">
      <br><br><br><br><br><br>
      <hr>
      <h2 class="property-name"></h2>
      <hr>
      <p>PRICE $150</p>
      <br>
      <div class="utility-rent">
        <p>If one "Utility" is owned, rent is 4 times the amount shown on the dice.</p>
        <p>If both "Utilities" are owned, rent is 10 times the amount shown on the dice.</p>
      </div>
      <table class="wide">
        <tr>
          <td class="left">Mortgage Value</td>
          <td class="right">$75</td>
        </tr>
      </table>
      <button class="closer">Click here to close.</button>
      <button class="btn-buy"></button>
      <button class="btn-rent"></button>
      <button class="btn-auction">Auction</button>
    </div>

    <div class="board-details go-board">
      <p>Back here already? Well, here's $200 that has been sentenced to be burnt at the stake.</p>
      <img src="images/go.png" alt="GO" class="go-img">
      <br>
      <button class="closer">Click here to close.</button>
    </div>

    <div class="board-details go-to-jail-board">
      <p><strong>The developer caught you squishing this adorable, benevolent, and defenseless spider!</strong></p>
      <img src="images/go-to-jail.png" alt="Adorable, benevolent, defenseless...shame." class="go-to-jail-img">
      <p><strong>Go to jail! Now!</strong></p>
      <button class="go-to-jail-btn">Go to jail, where the ratio of legs to multicellular organisms is greater than two.</button>
    </div>

    <div class="board-details go-to-jail-doubles">
      <p><strong>Congratulations! The probablilty of rolling doubles three times in one turn is 216 to 1, but you have beaten the odds!</strong></p>
      <br>
      <p><strong>Go directly to jail to collect your prize!</strong></p>
      <br>
      <button class="go-to-jail-btn">Prize?! What do I win?! Take me directly to jail now! Gimme, gimme, gimme!</button>
    </div>

    <div class="board-details free-parking-board">
      <p>Welcome to Free Parking. Now evaluate this integral.</p>
      <img src="images/integral.png" alt="Evaluate this integral." class="integral">
      <br>
      <img src="images/free-parking.png" alt="Free Parking" class="free-parking-img">
      <br>
      <button class="closer">Click here to close.</button>
    </div>

    <div class="board-details chance-land">
      <img src="images/chance-land.png" alt="?" class="chance-land-img">
      <br>
      <br>
      <br>
      <button class="take-a-chance">Take a chance, stupid.</button>
    </div>

    <div class="board-details cc-land">
      <img src="images/chest-closed.png" alt="Community Chest" class=cc-land-img>
      <br>
      <p>Rob the community blind! Open their chest now!</p>
      <button class="open-chest">Open the chest, stupid.</button>
    </div>

    <div class="board-details chance">
      <h4 class=card-heading>Chance</h4>
      <br>
      <p class="chance-text"></p>
      <br>
      <button class="btn-chance-result closer"></button>
    </div>

    <div class="board-details community-chest">
      <h4 class=card-heading>Comunnity Chest</h4>
      <br>
      <p class="community-chest-text"></p>
      <br>
      <button class="btn-cc-result closer"></button>
    </div>

    <div class="board-details income-tax-board">
      <img src="images/income-tax.png" alt="Income Tax" class="income-tax-img">
      <p>They're on to you! <strong>Pay a 10% or $200 Income Tax</strong> and cover your tracks now!</p>
      <br>
      <button class="pay-10-percent closer">Pay 10%.</button>
      <button class="pay-200 closer">Pay $200.</button>
    </div>

    <div class="board-details luxury-tax-board">
      <img src="images/luxury-tax.png" alt="Luxury Tax" class="luxury-tax-img">
      <p>You have so much money and shiny things, so you must now pay a <strong>$75 Luxury Tax.</strong> You poor thing.</p>
      <button class="pay-luxury closer">Pay $75 Luxury Tax.</button>
    </div>

    <div class="column-three-reference">
      <div class="player-heading">
        <h2 class="player-name"></h2>
        <img src="" alt="" class="vertical-middle token-small">
        <p> &nbsp;&nbsp;&nbsp;&nbsp;</p>
        <h2 class="cash-label">Cash on hand:</h2>
        <h2 class="player-cash"></h2>
      </div>
      <hr class="c3-hr">
      <h2 class="properties-label">Properties:</h2>
      <table class="properties color-purple">
        <tr>
          <td class="td1"><img src="images/titledeed-purple.png" alt="purple" class="titledeed-small number-1 hidden mediterranean-ave-player" title="Mediterranean Avenue"></td>
          <td class="td2"><img src="images/titledeed-purple.png" alt="purple" class="titledeed-small number-2 hidden baltic-ave-player" title="Baltic Avenue"></td>
        </tr>
      </table>
      <table class="properties color-light-blue">
        <tr>
          <td class="td1"><img src="images/titledeed-light-blue.png" alt="light-blue" class="titledeed-small number-1 hidden oriental-ave-player" title="Oriental Avenue"></td>
          <td class="td2"><img src="images/titledeed-light-blue.png" alt="light-blue" class="titledeed-small number-2 hidden vermont-ave-player" title="Vermont Avenue"></td>
          <td class="td3"><img src="images/titledeed-light-blue.png" alt="light-blue" class="titledeed-small number-3 hidden connecticut-ave-player" title="Connecticut Avenue"></td>
        </tr>
      </table>
      <table class="properties color-magenta">
        <tr>
          <td class="td1"><img src="images/titledeed-magenta.png" alt="magenta" class="titledeed-small number-1 hidden st-charles-place-player" title="St. Charles Place"></td>
          <td class="td2"><img src="images/titledeed-magenta.png" alt="magenta" class="titledeed-small number-2 hidden states-ave-player" title="State Avenue"></td>
          <td class="td3"><img src="images/titledeed-magenta.png" alt="magenta" class="titledeed-small number-3 hidden virginia-ave-player" title="Virginia Avenue"></td>
        </tr>
      </table>
      <br>
      <table class="properties color-orange">
        <tr>
          <td class="td1"><img src="images/titledeed-orange.png" alt="orange" class="titledeed-small number-1 hidden st-james-place-player" title="St. James Place"></td>
          <td class="td2"><img src="images/titledeed-orange.png" alt="orange" class="titledeed-small number-2 hidden tennessee-ave-player" title="Tennessee Avenue"></td>
          <td class="td3"><img src="images/titledeed-orange.png" alt="orange" class="titledeed-small number-3 hidden new-york-ave-player" title="New York Avenue"></td>
        </tr>
      </table>
      <table class="properties color-red">
        <tr>
          <td class="td1"><img src="images/titledeed-red.png" alt="red" class="titledeed-small number-1 hidden kentucky-ave-player" title="Kentucky Avenue"></td>
          <td class="td2"><img src="images/titledeed-red.png" alt="red" class="titledeed-small number-2 hidden indiana-ave-player" title="Indiana Avenue"></td>
          <td class="td3"><img src="images/titledeed-red.png" alt="red" class="titledeed-small number-3 hidden illinois-ave-player" title="Illinois Avenue"></td>
        </tr>
      </table>
      <br>
      <table class="properties color-yellow">
        <tr>
          <td class="td1"><img src="images/titledeed-yellow.png" alt="yellow" class="titledeed-small number-1 hidden atlantic-ave-player" title="Atlantic Avenue"></td>
          <td class="td2"><img src="images/titledeed-yellow.png" alt="yellow" class="titledeed-small number-2 hidden ventnor-ave-player" title="Ventnor Avenue"></td>
          <td class="td3"><img src="images/titledeed-yellow.png" alt="yellow" class="titledeed-small number-3 hidden marvin-gardens-player" title="Marvin Gardens"></td>
        </tr>
      </table>
      <table class="properties color-green">
        <tr>
          <td class="td1"><img src="images/titledeed-green.png" alt="green" class="titledeed-small number-1 hidden pacific-ave-player" title="Pacific Avenue"></td>
          <td class="td2"><img src="images/titledeed-green.png" alt="green" class="titledeed-small number-2 hidden north-carolina-ave-player" title="North Carolina Avenue"></td>
          <td class="td3"><img src="images/titledeed-green.png" alt="green" class="titledeed-small number-3 hidden pennsylvania-ave-player" title="Pennsylvania Avenue"></td>
        </tr>
      </table>
      <table class="properties color-blue">
        <tr>
          <td class="td1"><img src="images/titledeed-blue.png" alt="blue" class="titledeed-small number-1 hidden park-place-player" title="Park Place"></td>
          <td class="td2"><img src="images/titledeed-blue.png" alt="blue" class="titledeed-small number-2 hidden boardwalk-player" title="Boardwalk"></td>
        </tr>
      </table>
      <br>
      <table class="properties color-railroad">
        <tr>
          <td class="td1"><img src="images/titledeed-railroad.png" alt="railroad" class="titledeed-small number-1 hidden reading-railroad-player" title="Reading Railroad"></td>
          <td class="td2"><img src="images/titledeed-railroad.png" alt="railroad" class="titledeed-small number-2 hidden pennsylvania-railroad-player" title="Pennsylvania Railroad"></td>
          <td class="td3"><img src="images/titledeed-railroad.png" alt="railroad" class="titledeed-small number-3 hidden bo-railroad-player" title="B&O Railroad"></td>
          <td class="td4"><img src="images/titledeed-railroad.png" alt="railroad" class="titledeed-small number-4 hidden short-line-player" title="Short Line"></td>
        </tr>
      </table>
      <table class="properties color-utility">
        <tr>
          <td class="td1"><img src="images/titledeed-electric.png" alt="electric" class="titledeed-small number-1 hidden electric-company-player" title="Electric Company"></td>
          <td class="td2"><img src="images/titledeed-water.png" alt="water" class="titledeed-small number-2 hidden water-works-player" title="Water Works"></td>
        </tr>
      </table>
      <br>
      <table class="color-cards">
        <tr>
          <td><strong>Get-out-of-jail-free Cards:</strong></td>
          <td class="td1"><img src="images/chance.png" alt="chance" class="chance-cc-small number-1 hidden chance-player" title="?"></td>
          <td class="td2"><img src="images/community-chest.png" alt="community-chest" class="chance-cc-small number-2 hidden community-chest-player" title="Community Chest"></td>
        </tr>
      </table>
      <br>
      <div class="player-details hidden" id="player-details">
      </div>
    </div>
  </div>

  <div class="empty">
    <p>Alpha testing starts here.</p>
  </div>

  <div class="buttons-test">
    <button class="display-test-board">Display Baltic Avenue (Board Details)</button>
    <button class="display-test-player">Display Kentucky Avenue (Player Details)</button>
    <button class="display-chance">Display Sample Chance</button>
  </div>

  <div class="player-details mortgage test">
    <br><br><br><br><br>
    <h1 class="property-name">Property Name</h1>
    <br><br><br>
    <h2>Mortgaged</h2>
    <h2>for $2500</h2>
    <br><br>
    <div class="closer">
      <button class="closer">Click here to close.</button>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="monopoly.js"></script>
</body>

</html>
