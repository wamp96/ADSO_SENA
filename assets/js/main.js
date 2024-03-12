//Varible con el objeto objClass
var objClass;

//id de del container HTML asigando en una variable contid
const contId="containerGame";

//creacion de objeto enviando los datos del id de HTML y el valor para la seleccion de nivel 
function setLevel(value){

    objClass=new Game(contId,value);

}