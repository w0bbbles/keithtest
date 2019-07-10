console.log("hello zelda test")

//define each ingredient box
//set up event listeners for 3 ingredients
//asign fucntion when it is clicked
//function is to add 1/3 ingredients into the pot (repeatable)
//pot to display each ingredient added (max 3)
//after 3rd ingredients clicked, overlay recipe combination created
//set up global array for recipies

//FURTHER??
//update heart meter
var recipeArr = [];
var solution = [{
    apple: 1,
    durian: 1,
    meat: 1,
    imgSrc:"images/recipe/ads.jpg"
}, {
    apple: 3,
    durian: 0,
    meat: 0,
    imgSrc:"images/recipe/aaa.jpg"
}, {
    apple: 2,
    durian: 1,
    meat: 0,
    imgSrc:"images/recipe/aad.png"
}, {
    apple: 2,
    durian: 0,
    meat: 1,
    imgSrc:"images/recipe/aam.jpg"
}, {
    apple: 0,
    durian: 3,
    meat: 0,
    imgSrc:"images/recipe/ddd.jpg"
}, {
    apple: 1,
    durian: 2,
    meat: 0,
    imgSrc:"images/recipe/dda.jpg"
}, {
    apple: 0,
    durian: 2,
    meat: 1,
    imgSrc:"images/recipe/gg.gif"
}, {
    apple: 0,
    durian: 0,
    meat: 3,
    imgSrc:"images/recipe/mmm.jpg"
}, {
    apple: 1,
    durian: 0,
    meat: 2,
    imgSrc:"images/recipe/mma.jpg"
}, {
    apple: 0,
    durian: 1,
    meat: 2,
    imgSrc:"images/recipe/gg.gif"
}];
var appleCount = 0
var durianCount = 0
var meatCount = 0
var counter = 1;



var checkRecipe = function() {
    for (var i = 0; i < recipeArr.length; i++) {
        if (recipeArr[i] === "apple") {
            appleCount++
        } else if (recipeArr[i] === "durian") {
            durianCount++
        } else if (recipeArr[i] === "meat") {
            meatCount++
        }
    }
    console.log("Apple count: ", appleCount)
    console.log("Durian count: ", durianCount)
    console.log("Meat count: ", meatCount)

    var foundSolution = false;
    for (var j = 0; j < solution.length; j++) {
        if (solution[j].apple === appleCount && solution[j].durian === durianCount && solution[j].meat === meatCount) {
            foundSolution = true;
            break;
        }
    }

    if (foundSolution === true) {
        console.log("yey!cause found solution === true")
    } else {
        console.log("boo! cause found solution === false")
    }

//ANIMATE FOOD TO POT
// function toPot() {
//   var go = document.getElementById("animate");
//   var position = 0;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (position == 350) {
//       clearInterval(id);
//     } else {
//       position++;
//       go.style.top = position + 'px';
//       go.style.left = position + 'px';
//     }
//   }
// }

    // Get the modal
    var modal = document.getElementById("popupmodal");
    modal.style.display = "block";
    var putImage = document.querySelector(".anyImage");

    for (var i = 0; i < solution.length; i++){
        if (solution[i].apple === appleCount && solution[i].durian === durianCount && solution[i].meat === meatCount){
            putImage.src = solution[i].imgSrc;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

};
//if click happens, ingredients appear in 1 div each
function clickHappened(event) {
    // foodarea is selected and fills empty foodarea with any ingredients clicked on
    document.getElementById("foodarea" + counter).setAttribute("src", event.target.src);
    // clickHappened will push id into empty array
    recipeArr.push(event.target.id);
    console.log("Got ingredients")
    // define checkRecipe
    console.log("Got clicked!");

    // counter helps shift ingredients to next empty div
    counter++;

    // after 3 clicks, all other clicks will cease
    if (counter > 3) {
        document.getElementById("apple").removeEventListener("click", clickHappened);
        document.getElementById("durian").removeEventListener("click", clickHappened);
        document.getElementById("meat").removeEventListener("click", clickHappened);
        document.getElementById("pot").addEventListener("click", checkRecipe)
    }
};



//when window loads, add eventListeners to all 3 ingredients.
window.onload = function() {
    document.getElementById("apple").addEventListener("click", clickHappened);
    document.getElementById("durian").addEventListener("click", clickHappened);
    document.getElementById("meat").addEventListener("click", clickHappened);
}





























// ADD HEART METER
// //put all this in function
// //select all empty hearts in div
// var parent = document.querySelector(".icon-lst")
// //remove empty hearts from top
// parent.removeChild(parent.firstChild)
// //add with full hearts
// parent.appendChild(
// //remove empty hearts
// parent.removeChild(parent.lastChild)
// //insert full hearts from
// parent.insertBefore(parent.firstChild)