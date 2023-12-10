const todasLasCartas = document.querySelector(".todasLasCartas");
let ongoingGame = false;
const mazo = [];

mazo[0] = new Image(100, 100);
mazo[0].src = "img1.png";

mazo[1] = new Image(100, 100);
mazo[1].src = "img2.png";

mazo[2] = new Image(100, 100);
mazo[2].src = "img3.png";

mazo[3] = new Image(100, 100);
mazo[3].src = "img4.png";

mazo[4] = new Image(100, 100);
mazo[4].src = "img5.png";

mazo[5] = new Image(100, 100);
mazo[5].src = "img6.png";

mazo[6] = new Image(100, 100);
mazo[6].src = "img1.png";

mazo[7] = new Image(100, 100);
mazo[7].src = "img2.png";

mazo[8] = new Image(100, 100);
mazo[8].src = "img3.png";

mazo[9] = new Image(100, 100);
mazo[9].src = "img4.png";

mazo[10] = new Image(100, 100);
mazo[10].src = "img5.png";

mazo[11] = new Image(100, 100);
mazo[11].src = "img6.png";

function startNewGame() {

  if (ongoingGame === false) {
    alert("Busca la pareja de cada fruta!");
    //pa meter las imágenes en cada carta :p
    generateRandomOrder(mazo);
    for (let i = 0; i < mazo.length; i++) {
      let carta = document.createElement("img");
      carta.src = mazo[i].src;
      carta.classList.add("reverso");
      todasLasCartas.children[i].appendChild(carta);
    }
    //pa generar el orden nuevo de las frutas 
    function generateRandomOrder(array) {
      for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        //algoritmo fisher-yates o algoritmo de knuth para generar randoms
        [array[i], array[j]] = [array[j], array[i]];
      }
      console.log(array);
      return array;
      
    }
    ongoingGame = true;
  }
}

function hideCards() {
  let reverso = this.querySelector('.reverso');
  reverso.style.display = reverso.style.display === 'none' ? 'block' : 'none';
}

