import dogsData from './data.js'
import Dog from './Dog.js'

const cardEl = document.getElementById('card')
const likeBtnEl = document.getElementById('like-button')
const dislikeBtnEL = document.getElementById('dislike-button')
let iswaiting = false
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

const endEelement = `<div class = "end-text">
                        There are no more dogs in your area.
                    </div>`

////////////////////////////////////
//Renders the Html of Dog Element//
//////////////////////////////////

function render(){
    cardEl.innerHTML = currentDog.getDogHtml()
}
render()

///////////////////////////////////////////////////
//Creates a new Dog Class and render its content//
/////////////////////////////////////////////////

function getNewDog(){
    currentDogIndex += 1
    if(dogsData[currentDogIndex]){
        currentDog = new Dog(dogsData[currentDogIndex])
        render()
        iswaiting = false
    }else{
        cardEl.innerHTML = endEelement
    }
    
}

///////////////////////////////////////////////////////
//Functions to handle like and dislike functionality//
/////////////////////////////////////////////////////

function liked(){
    if(dogsData[currentDogIndex] && iswaiting === false){
        currentDog.setMatchStatus(true)
        render()
        iswaiting = true
        setTimeout(()=>{
            getNewDog()
            
        },1000)
    }
    
}

function diskliked(){
    if(dogsData[currentDogIndex] && iswaiting === false){
        currentDog.setMatchStatus(false)
        render()
        iswaiting = true
        setTimeout(()=>{
            getNewDog()
        },1000)
    }   
}

///////////////////////////////////////////
//Targeting the respective html elements//
/////////////////////////////////////////

likeBtnEl.addEventListener('click', function(){
     liked() 
})
dislikeBtnEL.addEventListener('click', function(){
    diskliked()
})

////////////////////////////////////
//Resets the app to initial stage//
//////////////////////////////////

document.getElementById('logo').addEventListener('click', ()=>{
    currentDogIndex = 0
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
    iswaiting = false
})
    


