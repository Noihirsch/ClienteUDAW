
const todasLasCartas = document.querySelector('.todasLasCartas');

const mazo = [];
cardIsFlipped= false;

mazo[0] = new Image(100,100);
mazo[0].src = 'img1.png';

mazo[1] = new Image(100,100);
mazo[1].src = 'img2.png';

mazo[2] = new Image(100,100);
mazo[2].src = 'img3.png';

mazo[3] = new Image(100,100);
mazo[3].src = 'img4.png';

mazo[4] = new Image(100,100);
mazo[4].src = 'img5.png';

mazo[5] = new Image(100,100);
mazo[5].src = 'img6.png';


function startNewGame() {
  generateRandomOrder(mazo);
  for (let i = 0; i < mazo.length; i++) {
      let carta = document.createElement('img');
      carta.setAttribute("src", mazo[i]); 
      carta.classList.add('reverso')
      todasLasCartas.children[i].appendChild(carta);
  }
}


    function generateRandomOrder(array) {
      for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        
      }
      console.log(array);
      return array;
      
    }

startNewGame();


