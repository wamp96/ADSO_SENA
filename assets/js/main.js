var objClass;
const contId="containerGame";
const progress="progressbarId";
const victId = "modalVictory";
const chronometer="chronometerId";
const jugarN = "boton-jugar"
const speed=100;
const maxMilliseconds=2000;

function setLevel(value){

    objClass=new Game(contId,value,progress,chronometer,speed,maxMilliseconds,victId,jugarN);  
    
    
}



