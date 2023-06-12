function checkResponse()
{
    var num = 0;

    while(!(num > 0 && num < 16))
    {
        num = Number(prompt("Enter a number commanded by The Angry Lion between 1-15: "));
        if(num > 0 && num < 16)
        {
            shape(num);
        } else {
            alert("Number is not in the range. Please enter a number between 1 - 15:");
        }
    }
}

function shape(num)
{

    switch (Number(num))
    {
        case 1:
            document.querySelector("#info");
            alert("Henagon");
            break;
        case 2:
            document.querySelector("#info");
            alert("Digon");
            break;
        case 3:
            document.querySelector("#info");
            alert("Trigon");
            break;
        case 4:
            document.querySelector("#info");
            alert("Tetragon");
            break
        case 5:
            document.querySelector("#info");
            alert("Pentagon");
            break;
        case 6:
            document.querySelector("#info");
            alert("Hexagon");
            break;
        case 7:
            document.querySelector("#info");
            alert("Heptagon");
            break;
        case 8:
            document.querySelector("#info");
            alert("Octagon");
            break;
        case 9:
            document.querySelector("#info");
            alert("Enneagon");
            break;
        case 10:
            document.querySelector("#info");
            alert("Decagon");
            break;
        case 11:
            document.querySelector("#info");
            alert("Hendecagon");
            break;
        case 12:
            document.querySelector("#info");
            alert("Dodecagon");
            break;
        case 13:
            document.querySelector("#info");
            alert("Triskaidecagon");
            break;
        case 14:
            document.querySelector("#info");
            alert("Tetrakaidecagon");
            break;
        case 15:
            document.querySelector("#info");
            alert("Pentakaidecagon");
            break;
    }
}