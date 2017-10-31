const CELL_CLASS_NAME = 'cell';
const X_CLASS_NAME = 'x';
const O_CLASS_NAME = 'o';
const WIN_CLASS_NAME = 'win';

var cells = document.getElementsByClassName(CELL_CLASS_NAME);
var message_div = document.getElementById('message');
var restart_game_button = document.getElementById('restart_game_button');
var actualPlayer;
var isEnd;

restart_game_button.onclick = function() {
  restartGame();
};
for( var x = 0 ; x < cells.length ; x++ ){
    cells[x].onclick = function (event){
        var cell = event.target;
        if( cell.getAttribute('class') === CELL_CLASS_NAME && !isEnd ){
            cell.setAttribute('class',CELL_CLASS_NAME+' '+actualPlayer);

            if( isPlayerWin(actualPlayer) ){
                setMessage('Gracz '+actualPlayer+' wygrał!');
                isEnd = true;
                return;
            }else if( isDraw() ){
                setMessage('Remis!');
                isEnd = true;
                return;
            }

            swapActualPlayer();
        }
    }
}
restartGame();

function restartGame(){
    setActualPlayer(X_CLASS_NAME);
    restoreCells();
    isEnd = false;
}

function isPlayerWin(player){
    var correctClassName = CELL_CLASS_NAME+' '+player;
    if( cells[0].getAttribute('class') === correctClassName && cells[1].getAttribute('class') === correctClassName && cells[2].getAttribute('class') === correctClassName ){
        cells[0].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[1].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[2].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        return true;
    }else if( cells[3].getAttribute('class') === correctClassName && cells[4].getAttribute('class') === correctClassName && cells[5].getAttribute('class') === correctClassName ){
        cells[3].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[4].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[5].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        return true;
    }else if( cells[6].getAttribute('class') === correctClassName && cells[7].getAttribute('class') === correctClassName && cells[8].getAttribute('class') === correctClassName ){
        cells[6].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[7].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[8].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        return true;
    }else if( cells[0].getAttribute('class') === correctClassName && cells[3].getAttribute('class') === correctClassName && cells[6].getAttribute('class') === correctClassName ){
        cells[0].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[3].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[6].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        return true;
    }else if( cells[1].getAttribute('class') === correctClassName && cells[4].getAttribute('class') === correctClassName && cells[7].getAttribute('class') === correctClassName ){
        cells[1].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[4].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[7].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        return true;
    }else if( cells[2].getAttribute('class') === correctClassName && cells[5].getAttribute('class') === correctClassName && cells[8].getAttribute('class') === correctClassName ){
        cells[2].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[5].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[8].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        return true;
    }else if( cells[0].getAttribute('class') === correctClassName && cells[4].getAttribute('class') === correctClassName && cells[8].getAttribute('class') === correctClassName ){
        cells[0].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[4].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[8].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        return true;
    }else if( cells[2].getAttribute('class') === correctClassName && cells[4].getAttribute('class') === correctClassName && cells[6].getAttribute('class') === correctClassName ){
        cells[2].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[4].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        cells[6].setAttribute('class',correctClassName+' '+WIN_CLASS_NAME);
        return true;
    }
    return false;
}

function isDraw(){
    var isDraw = true;
    for( var x = 0 ; x < cells.length ; x++ ){
        if(cells[x].getAttribute('class') === CELL_CLASS_NAME){
            isDraw = false;
        }
    }
    return isDraw;
}

function restoreCells() {
    for( var x = 0 ; x < cells.length ; x++ ){
        cells[x].setAttribute('class',CELL_CLASS_NAME);
    }
}

function swapActualPlayer(){
    if( actualPlayer === X_CLASS_NAME ){
        setActualPlayer(O_CLASS_NAME);
    }else{
        setActualPlayer(X_CLASS_NAME);
    }
}

function setActualPlayer(player){
    actualPlayer = player;
    setMessage('Kolej gracza '+actualPlayer);
}

function setMessage(message) {
    message_div.innerHTML = message;
}