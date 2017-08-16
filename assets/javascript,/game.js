$(document).ready(function() {

    var randomNum, ruby, sapphire, citrine, emerald;
    var counter = 0;
    var wins = 0;
    var loss = 0;

    function findNum() {
        randomNum = Math.floor(Math.random() * 90 + 10);
        ruby = Math.floor(Math.random() * 10) + 1;
        topaz = Math.floor(Math.random() * 10) + 1;
        citrine = Math.floor(Math.random() * 10) + 1;
        emerald = Math.floor(Math.random() * 10) + 1;
        $('#score').text('')
        $('#number').text(randomNum);
    };

    $('#win').text(wins);
    $('#loss').text(loss);
    findNum();

    $('#ruby').on('click', function() {
        counter += ruby;
        $('#score').text(counter);
        matchNum();

    });
    $('#topaz').on('click', function() {
        counter += topaz;
        $('#score').text(counter);
        matchNum();

    });
    $('#citrine').on('click', function() {
        counter += citrine;
        $('#score').text(counter);
        matchNum();

    });
    $('#emerald').on('click', function() {
        counter += emerald;
        $('#score').text(counter);
        matchNum();

    });

    function matchNum() {
        if (counter === randomNum) {
            wins += 1;
            $('#win').text(wins);
            alert('You won! \nFinal Score: ' + counter);
            reset();
        } else if (counter > randomNum) {
            loss += 1;
            $('#loss').text(loss);
            alert('You Lose! \nFinal Score: ' + counter);
            reset();
        }
    };

    function reset() {
        counter = 0;
        findNum();
    }

    $('#startOver').on('click', function() {
        reset();
    })

});