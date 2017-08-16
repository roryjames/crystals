$(document).ready(function() {

    var randomNum, ruby, sapphire, citrine, emerald;

    function findNum() {
        randomNum = Math.floor(Math.random() * 90 + 10);
        ruby = Math.floor(Math.random() * 10) + 1;
        topaz = Math.floor(Math.random() * 10) + 1;
        citrine = Math.floor(Math.random() * 10) + 1;
        emerald = Math.floor(Math.random() * 10) + 1;
        $('#number').text(randomNum);
    };

    var counter = 0;
    var wins = 0;
    var loss = 0;

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
            alert('You won!');
            reset();
        } else if (counter > randomNum) {
            loss = 0;
            $('#loss').text(loss);
            alert('You Lose!');
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