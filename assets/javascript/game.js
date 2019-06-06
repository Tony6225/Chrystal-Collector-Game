//Crystal Collector
$(document).ready(() => {

    //Random Number Target
    let randNumber = Math.floor(Math.random() * ((150 - 25) + 1) + 25);
    $('#randNum').html(randNumber);

    //Random Crystal Number
    let red = Math.floor(Math.random() * 15) + 1;
    let blue = Math.floor(Math.random() * 15) + 1;
    let yellow = Math.floor(Math.random() * 15) + 1;
    let green = Math.floor(Math.random() * 15) + 1;

    let wins = 0;
    let losses = 0;

    let totScore = 0;
    $('#totScore').text(totScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }

    $('#red').click(() => {
        totScore = totScore + red
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#blue').click(() => {
        totScore = totScore + blue;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#yellow').click(() => {
        totScore = totScore + yellow;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#green').click(() => {
        totScore = totScore + green;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    //Reset
    function reset() {
        totScore = 0;
        $('#totScore').text(totScore);
    }

    function resetTwo() {
        randNumber = Math.floor(Math.random() * ((150 - 25) + 1) + 25);
        $('#randNum').html(randNumber);
        red = Math.floor(Math.random() * 15) + 1;
        blue = Math.floor(Math.random() * 15) + 1;
        yellow = Math.floor(Math.random() * 15) + 1;
        green = Math.floor(Math.random() * 15) + 1;
    }

});