/*
Author:ING. DIEGO CASALLAS
Date:08/03/2024
Description:This class is responsible for managing the memory game developed in JavaScript, HTML, CSS
*/
class Game {
  //Constructor method responsible for initializing the attributes, 
  //receives three data, the game container and the difficulty level
  constructor(contGame, level, prog, chor, speed, maxMilliseconds, victId, jugarN) {
    this.progCont = document.getElementById(prog);
    this.contGame = document.getElementById(contGame); //Content game
    this.contvictId = document.getElementById(victId);
    this.jugarN = document.getElementById(jugarN);
    this.contCardGame;//Content class img 
    this.getServer = window.location.origin; //server path name
    this.folderPath = "/games_memory"; //name folder 
    this.serverPath = this.getServer + this.folderPath; //server path name
    this.uriJson = "https://api-rest-d3f89-default-rtdb.firebaseio.com/api/user"; // path data JSON
    this.pathImg = "/games_memory/assets/img/memory/"; // path data imgs 
    this.pathImgDafault = "/games_memory/assets/img/memory/img_default.jpg"; // path data img default 
    this.longBootstrap = 12 / level; // Changes Grid bootstrap - The level value is divided by 12 spaces on the grid
    this.newArrayGames = []; // New data matrix 
    this.arrayGamesCard = []; // New data matrix to create the cards
    this.getDataJson();
    this.num = level; // Attribute level 
    this.max = 19; // Attribute for maximum array length 
    this.min = 0;// Attribute for min array length 
    this.maxCard = (this.num * this.num) / 2; //Number of cards to be used
    this.selected = true; //boolean validate click object
    this.selectedCard = []; //array for add data selected 
    this.selectedCardText = []; //array for add data selected 
    this.selectedCardTitle = []; //array for add data selected 
    this.totalPointGame = 0; //accumulating Value Points game
    this.totalPoint = 0; //accumulating Value Points 
    this.contCardClass = "contCard";//This class container card
    this.objChronometer = new Chronometer(chor, speed, maxMilliseconds);
    this.attempts = 0;
    this.gameOver = false;
    setInterval(() => {
      if (!this.gameOver) {
        this.stopTime();
      }
    }, 1000);

  }

  //Method to read the JSON file, execute the setElements method sending an array of data
  getDataJson() {
    fetch(this.uriJson + ".json")
      .then(response => response.json())
      .then(data => {
        this.setElements(data);
        this.objChronometer.startChronometer();
      });
  }

  //Method for constructing the data array for the game cards
  getRandomArray(min, max, count) {
    let contentGame = [];
    let contentNum = [];
    if (min > max || count > max - min) {
      return false;
    }
    while (contentGame.length < count) {
      var num = Math.floor((Math.random() * (max - min)) + min);
      if (!contentNum.includes(num)) {
        contentGame.push(this.newArrayGames[num]);
        contentNum.push(num);
      }
    }
    this.arrayGamesCard = contentGame.concat(contentGame);
    return this.setShuffleArray(this.arrayGamesCard);
  }

  //This method are for changes array for array random, Receive an agreement, return another random array
  setShuffleArray(dataArrar) {
    return dataArrar.sort(() => Math.random() - 0.5);
  }

  //This method is to create the elements dynamically, Receive an agreement, create cards
  setElements(arraJson) {
    let cards = "";
    let cardsAux = "";
    let cont = 0;
    let row = this.num - 1;
    this.contGame.innerHTML = "";
    this.newArrayGames = arraJson;
    const getNewArray = this.getRandomArray(this.min, this.max, this.maxCard);

    for (let i = 0; i < getNewArray.length; i++) {

      this.totalPointGame += getNewArray[i].valor;
      console.log("Valor:", getNewArray[i].valor.length);
      cardsAux += '<div class="col-' + this.longBootstrap + ' pt-2 mx-auto ' + this.contCardClass + '"><div class="card" ><img data-value="' + getNewArray[i].valor + '" data-src="' + this.pathImg + getNewArray[i].img + '" src="' + this.pathImgDafault + '" class="card-img-top" alt="..."> <div class="card-body"><h5 class="card-title d-none">' + getNewArray[i].nombre + '</h5><p class="card-text d-none">' + getNewArray[i].valor + '</p></div></div></div>';
      cont++;
      if (row == cont - 1) {
        cards += '<div class="row">' + cardsAux + '</div>';
        cont = 0;
        cardsAux = "";
      }
    }
    this.contGame.innerHTML = cards;
    this.changeElementImg();
    // console.log(this.contGame.innerHTML);
  }

  //Método es para agregar un detector de eventos para la tarjeta contenedora, responda en el cambio de img
  changeElementImg() {
    this.contCardGame = document.querySelectorAll('.' + this.contCardClass);//Content card
    var pathDefault = this.getServer + this.pathImgDafault;
    for (let i = 0; i < this.contCardGame.length; i++) {
      const objImg = this.contCardGame[i].querySelector('img');
      const objTitle = this.contCardGame[i].querySelector('.card-title');
      const objText = this.contCardGame[i].querySelector('.card-text');
      this.contCardGame[i].addEventListener('click', () => {
        if (objImg.src == pathDefault) {
          objImg.src = objImg.dataset.src;
          objTitle.classList.remove('d-none');
          objText.classList.remove('d-none');
          this.setSelectCard(objImg, objText, objTitle);
        }
      });
    }
  }


  //Método para validar la parte de las tarjetas.
  setSelectCard(obj, objText, objTitle) {
    let selectedPoint = 0;

    if (this.selected) {
      this.selected = false;
      this.selectedCard[0] = obj;
      this.selectedCardTitle[0] = objText;
      this.selectedCardText[0] = objTitle;
    } else {
      this.selectedCard[1] = obj;
      this.selectedCardTitle[1] = objText;
      this.selectedCardText[1] = objTitle;
      this.selected = true;
    }
    if (this.selectedCard.length > 1) {
      if (this.selectedCard[0].dataset.src == this.selectedCard[1].dataset.src) {
        this.selectedCard[0].parentElement.removeEventListener('click', () => { });
        this.selectedCard[1].parentElement.removeEventListener('click', () => { });
        selectedPoint = this.selectedCard[0].dataset.value;
        this.selectedCard = [];
        this.totalPoint += parseInt(selectedPoint);
        this.setProgressData(((this.totalPoint) / (this.totalPointGame / 2)) * 100);
      } else {
        this.selectedCard[0].src = this.pathImgDafault;
        this.selectedCard[1].src = this.pathImgDafault;

        for (let i = 0; i < this.selectedCardText.length; i++) {
          this.selectedCardText[i].classList.add('d-none');
        }
        for (let i = 0; i < this.selectedCardTitle.length; i++) {
          this.selectedCardTitle[i].classList.add('d-none');
        }

        this.attempts++;
        this.selectedCard = [];
        this.numattempts();
      }
    }
  }

  //Método es para establecer datos de progreso 
  setProgressData(dataProgress) {
    this.progCont.innerText = parseInt(dataProgress) + "%";
    this.progCont.style.width = dataProgress + "%";
    this.setProgressVictory();
  }

  setProgressVictory() {
    let vict = '<p>Ganaste, tu puntaje final es:';
    let conVictory = this.contvictId.querySelector('.modal-body');

    setTimeout(() => {
      if (this.progCont.style.width == '100%') {
        this.contvictId.style.display = 'block';
        vict += this.totalPoint + '</p>';
        conVictory.innerHTML = vict;
      }
    }, 1000);
  }


  numattempts() {
    if (this.num == "2" && this.attempts == 3) {
      alert("Perdiste llegaste al limite de intentos");
      location.reload();
    } else if (this.num == "4" && this.attempts == 9) {
      alert("Perdiste llegaste al limite de intentos");
      location.reload();
    } else if (this.num == "6" && this.attempts == 12) {
      alert("Perdiste llegaste al limite de intentos");
      location.reload();
    }
  }

  stopTime() {
    if (this.num == "2" && this.objChronometer.minutes == "15") {
      alert("Perdiste llegaste al limite de tiempo");
      this.gameOver = true;
      location.reload();
    } else if (this.num == "4" && this.objChronometer.minutes == "30") {
      alert("Perdiste llegaste al limite de tiempo");
      this.gameOver = true;
      location.reload();
    } else if (this.num == "6" && this.objChronometer.minutes == "60") {
      alert("Perdiste llegaste al limite de tiempo");
      this.gameOver = true;
      location.reload();
    }
  }

}






