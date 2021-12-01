let count = 0;

let block = document.querySelector(".game");


function eventListeners() {
    block.addEventListener("click", clickedBlock);
}

eventListeners();


function clickedBlock(e) {
    ++count;

    let X = "X";
    let O = "O";


    if (getMod(count) == 0) { // X

        e.target.innerHTML = X;

        console.log("id= " + e.target.id);

    } else { // O

        e.target.innerHTML = O;

        console.log("id= " + e.target.id);

    }
    checkCombinations();
}

function checkCombinations() {

    let control = [
        [0, 4, 8],
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];
    for (let i = 0; i < 8; i++) {
        let check = 0;

        if (document.getElementById(control[i][check]).innerHTML == "X" && document.getElementById(control[i][check + 1]).innerHTML == "X" && document.getElementById(control[i][check + 2]).innerHTML == "X") {
            alert("X wins");
            break;
        } else if (document.getElementById(control[i][check]).innerHTML == "O" && document.getElementById(control[i][check + 1]).innerHTML == "O" && document.getElementById(control[i][check + 2]).innerHTML == "O") {
            alert("O wins");
            break;
        }
    }
}

function getMod(count) {

    let result = count % 2;

    console.log(result);

    return result;
}