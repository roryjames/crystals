$(document).ready(function() {

    var randomNum, ruby, sapphire, citrine, emerald;

    function findNum() {
        randomNum = Math.floor(Math.random() * 90 + 10);
        ruby = Math.floor(Math.random() * 10);
        topaz = Math.floor(Math.random() * 10);
        citrine = Math.floor(Math.random() * 10);
        emerald = Math.floor(Math.random() * 10);
        console.log(ruby, topaz, citrine, emerald);
    };

    var counter = 0;
    var wins = 0;
    var loss = 0;

    findNum();

    $('#number').text(randomNum);

    $('li#ruby').on('click', function() {
        counter += ruby;

        matchNum();
        $('#score').text(counter);
    });
    $('li#topaz').on('click', function() {
        counter += topaz;

        matchNum();
        $('#score').text(counter);
    });
    $('li#citrine').on('click', function() {
        counter += citrine;

        matchNum();
        $('#score').text(counter);
    });
    $('li#emerald').on('click', function() {
        counter += emerald;

        matchNum();
        $('#score').text(counter);
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

});