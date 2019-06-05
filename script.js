$(document).ready(function () {
    // Selects the random numbers needed for win and crystals values
    let start = Math.floor(Math.random() * 101 + 19)
    $('#start').text("Match this number! : " + start);

    let num1 = Math.floor(Math.random() * 11 + 1);
    let num2 = Math.floor(Math.random() * 11 + 1);
    let num3 = Math.floor(Math.random() * 11 + 1);
    let num4 = Math.floor(Math.random() * 11 + 1);
    let num5 = Math.floor(Math.random() * 11 + 1);
    let num6 = Math.floor(Math.random() * 11 + 1);

    //Variables used to keep track of wins, losses, and user's current value
    let userTotal = 0;
    let wins = 0;
    let losses = 0;

    // Creates the Win and Loss text
    $('#Wins').text("You have won " + wins + " times.");
    $('#Losses').text("You have lost " + losses + " times.");

    //Reset entire Game
    reset = () => {
      start = Math.floor(Math.random() * 101 + 19);
      $('#start').text("Match this number! : " + start);
      num1 = Math.floor(Math.random() * 11 + 1);
      num2 = Math.floor(Math.random() * 11 + 1);
      num3 = Math.floor(Math.random() * 11 + 1);
      num4 = Math.floor(Math.random() * 11 + 1);
      userTotal = 0;
      $('#final').text("Your Total is: " + userTotal);
    };

    //Function when a win is achieved
    winner = () => {
      alert("Congratulations!");
      wins++;
      $('#Wins').text("You have won " + wins + " times.");
      reset();
      $('#gif').html("<img src='assets/images/ironmansnap.gif'/>")
    }
    //Function for losses
    loser = () => {
      alert("Try again!");
      losses++;
      $('#Losses').text("You have lost " + losses + " times.");
      reset()
      $('#gif').html("<img src='assets/images/thanossnap.gif'/>")
    }
    //Individual buttons for every stone
    $('#blueStone').on('click', function () {
      userTotal = userTotal + num1;
      $('#final').text("Your Total is: " + userTotal);
      if (userTotal == start) {
        winner();
      } else if (userTotal > start) {
        loser();
      }
    });
    $('#purpleStone').on('click', function () {
      userTotal = userTotal + num2;
      $('#final').text("Your Total is: " + userTotal);
      if (userTotal == start) {
        winner();
      } else if (userTotal > start) {
        loser();
      }
    });
    $('#redStone').on('click', function () {
      userTotal = userTotal + num3;
      $('#final').text("Your Total is: " + userTotal);

      if (userTotal == start) {
        winner();
      } else if (userTotal > start) {
        loser();
      }
    });
    $('#yellowStone').on('click', function () {
      userTotal = userTotal + num4;
      $('#final').text("Your Total is: " + userTotal);

      if (userTotal == start) {
        winner();
      } else if (userTotal > start) {
        loser();
      }
    });
    $('#orangeStone').on('click', function () {
      userTotal = userTotal + num5;
      $('#final').text("Your Total is: " + userTotal);

      if (userTotal == start) {
        winner();
      } else if (userTotal > start) {
        loser();
      }
    });
    $('#greenStone').on('click', function () {
      userTotal = userTotal + num6;
      $('#final').text("Your Total is: " + userTotal);

      if (userTotal == start) {
        winner();
      } else if (userTotal > start) {
        loser();
      }
    });
  });