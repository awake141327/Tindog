import {dogs} from '/data.js'
import {Dog} from '/Dog.js'

let currentDogIndex = 0

document.getElementById('like-btn').addEventListener('click', changeLikeStatus)
document.getElementById('dislike-btn').addEventListener('click', changeDislikeStatus)

function changeLikeStatus() {
    currentDog.hasBeenSwiped = true
    currentDog.hasBeenLiked = true
    changeCurrentDog()
}

function changeDislikeStatus() {
    currentDog.hasBeenSwiped = true
    currentDog.hasBeenLiked = false
    changeCurrentDog()
}

function changeCurrentDog() {
        currentDogIndex += 1
        if (currentDog.hasBeenLiked === true) {
            document.getElementById('container').innerHTML = currentDog.getLikeHtml()
        }
        else if (currentDog.hasBeenLiked === false) {
            document.getElementById('container').innerHTML = currentDog.getDislikeHtml()
        }
        currentDog = new Dog(dogs[currentDogIndex])
        if (currentDogIndex < dogs.length) {
            setTimeout(function() {
                render()
            },2000)
        }
    else {
        setTimeout(() => document.body.innerHTML = `
        <div class="out-of-dogs">
            <p class="out-of-dogs-text">There are no more dogs in your area. 🐶</p>
        </div>
            `, 1000)
    }
}

function render() {
    document.getElementById('container').innerHTML = currentDog.getDogHtml()
}

let currentDog = new Dog(dogs[currentDogIndex])
render()
