// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
let likeBtn =  document.querySelectorAll(".like-glyph")

likeBtn.forEach((addBtn)=> {
  addBtn.addEventListener("click", ()=> {
    mimicServerCall();

    if (addBtn){
    addBtn.classList.add("activated-heart") 
      addBtn.textContent = FULL_HEART
    } else{
        addBtn.textContent = EMPTY_HEART
    }


  })
})

document.addEventListener("DOMContentLoaded", (e)=> {
  e.preventDefault();
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300)
  }).then((data)=> {
    console.log(data)
    modal.classList.add("hidden")
}).catch((err)=> {
  console.log(err)
});
}