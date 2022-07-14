
//create an array to hold the sounds
const sounds = ['applause', 'birds-singing', 'crowd-booing','gasp','victory','wrong-buzzer']

//loop through the array, and for each sound create a button, add a btn as a child, set the btn to be the sounds


/*sounds.forEach(
    sound => {
        const btn = document.createElement('button')
        btn.classList.add('btn')

        btn.innerText = sound

        document.getElementById('buttons').appendChild(btn)
    }
)*/

/*abandoning this project, as the buttons do not work and I cannot figure out how to resolve the error.
JS says Uncaught TypeError: Cannot read property 'value' of null reading appendChild -
 meaning it cannot add the btn child elements, which we just created with the const btn, line 10, to the buttons html div in index.html
 It thinks the btn children do not exist, even though they were just created ...*/

 /*using the official code below, from Brad Travery's github, also throws the same error*/

 sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}