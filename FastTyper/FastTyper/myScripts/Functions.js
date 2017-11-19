var Characters = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ö', 'ü', 'ó', 'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ő', 'ú', 'a', 's', 'd', 'f',
    'g', 'h', 'j', 'k', 'l', 'é', 'á', 'ű', 'y', 'x', 'c', 'v', 'b', 'n', 'm', 'Ö', 'Ü', 'Ó', 'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ő',
    'Ú', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'É', 'Á', 'Ű', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', ]; //78 character

var Start_time = 0;
var CorrectWords = 0;
var WrongWords = 0;

function SelectCharacter() {
    var rnd = Math.floor(Math.random() * Characters.length);
    document.getElementById("RandomChar").innerHTML = Characters[rnd];
}

function Keyboard(keyboardStyle) {
    var insertkeyboard = "<table><tr>";

    if (keyboardStyle === 1) {
        for (var i = 0; i < 44; i++) {
            if (i === 12 || i === 24 ||i === 36) {
                insertkeyboard += "<td class='Buttons' id ='btn" + i + "'>" + Characters[i] + "</td></tr></table><table><tr>";
            }
            else {
                insertkeyboard += "<td class='Buttons' id ='btn" + i + "'>" + Characters[i] + "</td>";
            }           
        }
        insertkeyboard += "</tr></table>";
    }
    else {//Shift is down
        for (var i = 0; i < 10; i++) {
            insertkeyboard += "<td class='Buttons' id ='btn" + i + "'>" + Characters[i] + "</td>";
        }
        for (var i = 44; i < Characters.length; i++) {
            if (i === 46 ||i === 58 || i === 70) {
                insertkeyboard += "<td class='Buttons' id ='btn" + i + "'>" + Characters[i] + "</td></tr></table><table><tr>";
            }
            else {
                insertkeyboard += "<td class='Buttons' id ='btn" + i + "'>" + Characters[i] + "</td>";
            }
        }
        insertkeyboard += "</tr></table>";
    }
    document.getElementById("Keyboard").innerHTML = insertkeyboard;
}

function isShiftDown(event) {
    if (event.shiftKey) {
        Keyboard(2);
    }
}

function Timer() {
    var min = Math.floor(Start_time / 60);
    var sec = Start_time - (60 * min);

    document.getElementById("Timer").innerHTML = min + " : " + sec;

    Start_time += 1;
}