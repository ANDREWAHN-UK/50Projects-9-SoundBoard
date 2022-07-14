
//create an array to hold the sounds
const sounds = ['applause', 'birds-singing', 'crowd-booing','gasp','victory','wrong-buzzer'];

//loop through the array, and for each sound create a button, add a btn as a child, set the btn to be the sounds


sounds.forEach(
    sound => {
        const btn = document.createElement('button')
        btn.classList.add('btn')

        btn.innerText = sound

        document.getElementById('buttons').appendChild(btn)
    }
)