
const todasLasCartas = document.querySelector('.todasLasCartas');

const mazo = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
  "image6.png",
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
  "image6.png"
];
const par2 = [

];

    function startNewGame(){
        generateRandomOrder(mazo);

        for(let i=0; i < mazo.length; i++){
        let carta = document.createElement('carta');
        carta.innerHTML = mazo[i];
        todasLasCartas.appendChild(carta);
}
    }

    function generateRandomOrder(array) {
      for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        // Array Destructuring Assignment. Good to swap values on arraylists without cloning them w an auxiliary variable.
        [array[i], array[j]] = [array[j], array[i]];
        
      }
      console.log(array);
      return array;
      
    }




