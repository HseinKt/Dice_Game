//here I will be displayed the winner
const start = document.getElementById('start');
console.log(start.innerHTML)

const img1 = document.getElementById("image1")
const img2 = document.getElementById("image2")

const images = [
    "dices/dice1.png",
    "dices/dice2.png",
    "dices/dice3.png",
    "dices/dice4.png",
    "dices/dice5.png",
    "dices/dice6.png"
]

function toggleImage() {
    const random_Nbr1 = Math.floor((Math.random() * 6) )
    const random_Nbr2 = Math.floor((Math.random() * 6) )

    img1.setAttribute("src",images[random_Nbr1])
    img2.setAttribute("src",images[random_Nbr2])

    if (images[random_Nbr1] > images[random_Nbr2]) {
        start.innerHTML = "Player 1 WIN"
        start.style.color = "red"
    }
    else if (images[random_Nbr1] < images[random_Nbr2]) {
        start.innerHTML = "Player 2 WIN"
        start.style.color = "red"
    }
    else {
        start.innerHTML = "Tied"
        start.style.color = "green"
        start.style.fontSize = "50px"
    }
}

toggleImage()




    
    