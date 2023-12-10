const fruits = ["🍇", "🍇", "🍈", "🍈", "🍉", "🍉", "🍊", "🍊", "🍋", "🍋", "🍎", "🍎"];
let newFruitOrder = shuffleFruits([...fruits]);

startGame(newFruitOrder);

function shuffleFruits(array) {
    let i = array.length;
    while (i !== 0) {
        const j = Math.floor(Math.random() * i);
        i--;
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame(array) {
    let score = 0;
    const scoreElement = document.querySelector('.score');

    function updateScore() {
        scoreElement.innerHTML = 'Puntuación: ' + score;
        if (score === 6) {
            alert('¡Has ganado! ¡Felicidades!');
        }
    }

    for (let i = 0; i < array.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = array[i];
        document.querySelector('.game').appendChild(card);
        
        card.onclick = function () {
            this.classList.add('turned');
            setTimeout(function () {
                const turnedCards = document.querySelectorAll('.turned');
                if (turnedCards.length === 2) {
                    const carta1 = turnedCards[0];
                    const carta2 = turnedCards[1];

                    if (carta1.innerHTML === carta2.innerHTML) {
                        carta1.classList.add('match');
                        carta1.classList.remove('turned');
                        carta2.classList.add('match');
                        carta2.classList.remove('turned');
                        alert('Pareja encontrada!');    
                        score++;
                        updateScore();
                    } else {
                        turnedCards.forEach(card => {
                            card.classList.remove('turned');
                        });
                    }
                }
            }, 600);
        };

        
    }
}
