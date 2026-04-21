let title = document.querySelector('.title');
let boxs = [];

let turn = 'x';

function end(num1, num2, num3){
    title.innerHTML = `${boxs[num1]} winner`;
    document.getElementById('item'+num1).style.backgroundColor = "#000";
    document.getElementById('item'+num2).style.backgroundColor = "#000";
    document.getElementById('item'+num3).style.backgroundColor = "#000";

    setInterval(function() {title.innerHTML += '.'}, 1000);
    setTimeout(() => {
        location.reload()
    }, 4000);
}
function winner() {
    for(let i = 1; i < 10; i++){
        boxs[i] = document.getElementById('item'+ i).innerHTML;
    }
    if(boxs[1] == boxs[2] && boxs[2] == boxs[3] && boxs[1] != ''){
        end(1,2,3);
    }
    else if(boxs[4] == boxs[5] && boxs[5] == boxs[6] && boxs[4] != ''){
        end(4,5,6);
    }
    else if(boxs[7] == boxs[8] && boxs[8] == boxs[9] && boxs[7] != ''){
        end(7,8,9);
    }
    else if(boxs[1] == boxs[4] && boxs[4] == boxs[7] && boxs[4] != ''){
        end(1,4,7);
    }
    else if(boxs[2] == boxs[5] && boxs[5] == boxs[8] && boxs[5] != ''){
        end(2,5,8);
    }
    else if(boxs[3] == boxs[6] && boxs[6] == boxs[9] && boxs[6] != ''){
        end(3,6,9);
    }
    else if(boxs[1] == boxs[5] && boxs[5] == boxs[9] && boxs[5] != ''){
        end(1,5,9);
    }
    else if(boxs[3] == boxs[5] && boxs[5] == boxs[7] && boxs[5] != ''){
        end(3,5,7);
    }
}


function game(id) {
    let element = document.getElementById(id);

    if(turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if(turn === 'o' && element.innerHTML == '')  {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
}