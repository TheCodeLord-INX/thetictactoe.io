let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let baari = document.querySelector(".baari-jeet");

let turn0 = true;


// 2D Array
let winCombos = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box was clicked");
        if (turn0) {
            baari.innerText = "Player O's turn";
            box.innerText = 'X';
            turn0 = false;
        } else {
            baari.innerText = "Player X's turn";
            box.innerText = 'O';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


function checkWinner() {
    for (let combo of winCombos) {
        let v1 = boxes[combo[0]].innerText;
        let v2 = boxes[combo[1]].innerText;
        let v3 = boxes[combo[2]].innerText;

        if (v1 != '' && v2 != '' && v3 != '') {
            if (v1 == v2 && v2 == v3) {
                baari.innerText = `Player ${v1} won!`;
            } else { };
        }
        else { };
    }
}

resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
        turn0 = true;
        baari.innerText = "Player X's turn";
    });
});