var Characters = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ö', 'ü', 'ó', 'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ő', 'ú', 'a', 's', 'd', 'f', 'g',
    'h', 'j', 'k', 'l', 'é', 'á', 'ű', 'y', 'x', 'c', 'v', 'b', 'n', 'm', 'Ö', 'Ü', 'Ó', 'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ő', 'Ú',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'É', 'Á', 'Ű', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', ]; //77 character

var Start_time = 55;

function SelectCharacter() {
    var rnd = Math.floor(Math.random() * Characters.length);
    document.getElementById("RandomChar").innerHTML = Characters[rnd];
}

function Keyboard() {
    var insertkeyboard = "";

    if(1 == 1){
        for (var i = 9; i < 43; i++) {
            insertkeyboard += "<div>" + Characters[i] + "</div>";
        }
    }
    document.getElementById("Keyboard").innerHTML = insertkeyboard;
}

function Timer() {
    var min = Math.floor(Start_time / 60);
    var sec = Start_time - (60 * min);

    document.getElementById("Timer").innerHTML = min + " : " + sec;

    Start_time += 1;
}