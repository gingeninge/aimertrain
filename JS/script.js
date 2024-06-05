
///the use of query selector allowed me to take the classes and ids made in html and manipulate them
const blocks = document.querySelectorAll('.block');
const mark = document.querySelector('.hitmarker');
const mark2 = document.querySelector('.hitmarker2');
const red = document.querySelector('.redmarker');
const red2 = document.querySelector('.redmarker2');
const red3 = document.querySelector('.redmarker3');
const purple = document.querySelector('.purple');
const score = document.querySelector('#value');
//variable for audio button noise
let clicksound = document.querySelector('#buttongreen');
//stops the button noise from looping once clicked
document.getElementById('buttongreen').loop = false;
//other variables used
let result = 0;
let clickgreen;
let clickgreen2;
let clickred;
let clickred2;
let clickred3;
let clickpurple;
//generates the first green into the grid and removes it to make the green blocks jump around in the grid
function randblock() {
//Title: JavaScript Array forEach()
//Author: w3Schools.com
//Date: N/A
//Source: w3Schools
//Availability: https://www.w3schools.com/jsref/jsref_foreach.asp
// foreach method used to remove the block
  blocks.forEach(block => {
    //classlist used to remove the block from the scene
    block.classList.remove('hitmarker')
  })
  //math random to randomise position and floor to round down
  let randspawn = blocks[Math.floor(Math.random() * 76)];
  //classlist used to add block to scene
  randspawn.classList.add('hitmarker');
  clickgreen = randspawn.id;
}


//generates the second green into the grid and removes it to make the green blocks jump around in the grid
function randblock1() {
     // foreach method used to remove the block
    blocks.forEach(block => {
        //classlist used to remove the block from the scene
        block.classList.remove('hitmarker2')
    })
    //math random to randomise position and floor to round down
    let randspawn = blocks[Math.floor(Math.random() * 76)]
    //classlist used to add block to scene
    randspawn.classList.add('hitmarker2')
    clickgreen2 = randspawn.id;
}

//function that lets player gain points and lose the game aswell as interact with blocks
  function mouse()
  {
//Title: Learn JavaScript by Building 7 Games - Full Course
//Author: freecodecamp.org
//Date: 28 feb 2022
//Source: youtube
//Availability: https://www.youtube.com/watch?v=ec8vSKJuZTk&t=5077s
    blocks.forEach(block => {
       //event system mousedown for interaction
        block.addEventListener('mousedown', () => {
          if (block.id == clickgreen) {
            //plays click sound
            clicksound.play();
            //increments points
            result++
            //adds value to text
            score.textContent = result
            clickgreen = null
            
          }
          
        })
      })
   blocks.forEach(block => {
         //event system mousedown for interaction
        block.addEventListener('mousedown', () => {
          if (block.id == clickgreen2) {
             //plays click sound
            clicksound.play();
            //increments points
            result++
            //adds value to text
            score.textContent = result
            clickgreen2 = null
            
          }
         
        })
      })
   blocks.forEach(block => {
        //event system mousedown for interaction
        block.addEventListener('mousedown', () => {
          if (block.id == clickpurple) {
             //plays click sound
            clicksound.play();
            //increments points +5
            result += 5;
            //adds value to text
            score.textContent = result
            clickpurple = null
            
          }
          
        })
      })
   blocks.forEach(block => {
         //event system mousedown for interaction
        block.addEventListener('mousedown', () => {
          if (block.id == clickred) {
            //reloads web page
            window.location.reload();          
            clickred = null
          }
        })
      })
   blocks.forEach(block => {
         //event system mousedown for interaction
        block.addEventListener('mousedown', () => {
          if (block.id == clickred2) {
            //reloads web page
            window.location.reload();         
            clickred2 = null
          }
        })
      })
   blocks.forEach(block => {
         //event system mousedown for interaction
        block.addEventListener('mousedown', () => {
          if (block.id == clickred3) {
            //reloads web page
            window.location.reload();
            clickred3 = null
          }
        })
      })
      
  }
//generates the first red block into the grid and removes it to make the red blocks jump around in the grid
  function randred() {
     // foreach method used to remove the block
   blocks.forEach(block => {
        //classlist used to remove the block from the scene
        block.classList.remove('redmarker')
    })
     //math random to randomise position and floor to round down
    let randspawn = blocks[Math.floor(Math.random() * 76)];
    //classlist used to add block to scene
    randspawn.classList.add('redmarker');
    clickred = randspawn.id;
}
//generates the second red block into the grid and removes it to make the red blocks jump around in the grid
function randred2() {
     // foreach method used to remove the block
    blocks.forEach(block => {
        //classlist used to remove the block from the scene
        block.classList.remove('redmarker2')
    })
    //math random to randomise position and floor to round down
    let randspawn = blocks[Math.floor(Math.random() * 76)]
    //classlist used to add block to scene
    randspawn.classList.add('redmarker2')
    clickred2 = randspawn.id;
}
//generates the third red block into the grid and removes it to make the red blocks jump around in the grid
function randred3() {
     // foreach method used to remove the block
    blocks.forEach(block => {
        //classlist used to remove the block from the scene
        block.classList.remove('redmarker3')
    })
    //math random to randomise position and floor to round down
    let randspawn = blocks[Math.floor(Math.random() * 76)]
    //classlist used to add block to scene
    randspawn.classList.add('redmarker3')
    clickred3 = randspawn.id;
}
//generates a purple block into the grid and removes it to make the block jump around in the grid
function purplerand() {
     // foreach method used to remove the block
    blocks.forEach(block => {
        //classlist used to remove the block from the scene
        block.classList.remove('purple')
    })
    //math random to randomise position and floor to round down
    let randspawn = blocks[Math.floor(Math.random() * 76)]
    //classlist used to add block to scene
    randspawn.classList.add('purple')
    clickpurple = randspawn.id
}
//method used to set the interval speed at which they spawn of each block
function moveblocks()
{
    let green = null;
    green = setInterval(randblock, 700)
    let green2 = null;
    green2 = setInterval(randblock1, 700)
    let red = null;
    red = setInterval(randred, 700)
    let red2 = null;
    red2 = setInterval(randred2, 700)
    let red3 = null;
    red3 = setInterval(randred3, 700)
    let purple = null;
    //purple has a higher speed to make it more challenging to click it as it is a more valuable block
    purple = setInterval(purplerand, 500)
}
//method to start using button
function start()
{
    
    //calls all methods to play game
   purplerand();
   randblock1();
   randblock();
   mouse();
   randred();
   randred2();
   randred3();
   moveblocks();
   //finds background music 
   let audio = document.querySelector('#backgroundmusic');
   //plays audio on start function
   audio.play();
   //stops music from looping
   document.getElementById('backgroundmusic').loop = false;
   //backgroundcol();
    
}