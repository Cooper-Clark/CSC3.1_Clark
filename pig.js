function resetPig()
{
    // We're playing pig boys
    console.log("piggy");

    //delcare variables
    var usertotal = 0;
    var dieresult = 0;

    var bozo1total = 0;
    var bozo2result = 0;
    var gameresult = "undecided";

    // decide who is going first
}

function rollDie()
{
    // roll boy
    return Math.floor(Math.random()*6)+1;
    console.log("I rolled");
}

function bozoTurn()
{
    // this runs the game for the AI players
}

function rollPig()
{
    var result = rollDie();
    if (result != 1)
    {
    document.getElementById("dieresult").innerHTML = result;
    document.getElementById("gameresult").innerHTML += result;
    }
    else
    {
    document.getElementById("gameresult").innerHTML = "You lost!";
    }
    // This represents the player rolling
}

function endPig()
{
    // This represents the player rolling
}