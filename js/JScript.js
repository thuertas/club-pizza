//*------------ FUNCTIONS FOR THE HEADER TEXT ------------*
//The following function is intentded to change the color of the text
function textColor() {
    var color = "#"+((1<<24)*Math.random()|0).toString(16);//Generates random colors found here: https://stackoverflow.com/questions/1484506/random-color-generator
    document.getElementById("colorChanging").style.color = color;
}

//This function is intentded to change the text content of the header and replaced with an already defined list of sentences
function changeText() {
    //List of sentences that will be displayed in the header
    var sentences = new Array();
        sentences[0] = "Try to slice the pizza";
        sentences[1] = "Getting hungry?";
        sentences[2] = "Hurry up!!";
        sentences[3] = "Dude you need to be faster!";
        sentences[4] = "Come on! is not that difficult!!";
        sentences[5] = "Really....";
        sentences[6] = "We don't have all day";
        sentences[7] = "I'm getting impatient";
        sentences[8] = "Man don't you wanna eat?";
        sentences[9] = "Are you serious?!";
        sentences[10] = "Why are you still doing this?";

    for (var i = 0; i <= sentences.length; i++) {
        //This following function will change the text every 9 sec
        (function(i){
            window.setTimeout(function(){//Needed the setTimeout to make a "pause/wait" between each sentence
                document.getElementById("colorChanging").innerHTML = sentences[i];
            }, i * 9000);
            //This is to set the text in the initial sentence (0)
            if (i == sentences.length) {
                i = 0;
            }
        }(i));
    }
}

//This function is intentded to add the class 'pulse' when the for of the function changeText has finished the cicle
function heartBeat() {
    var element = document.getElementById("colorChanging");
    if (element.innerHTML != null && element.innerHTML != "") {//to make sure that the text is not empty
        element.classList.add("pulse");
    }
}

//*------------ FUNCTIONS FOR THE PIZZA ------------*
$(document).ready(function () {
    //JQuery to make the pizza move around the page (this function will run after the document is ready)
    $('.movingPizza').on('mouseover mouseenter mousemove',function(){//Finds the element with the class 'movingPizza' and uses three Event listeners to make it hard to catch
        //these variables are needed to get the size of the screen - the dimentions of the pizza:
        var maxWidth = $(window).width() - $(this).width();
        var maxHeight = $(window).height() - $(this).height();
        //this is to change the css of the element with the class "movingPizza":
        $(this).css({
            //both left and top call the getRandomNum function
            'left':getRandomNum(0, maxWidth),
            'top':getRandomNum(0, maxHeight)
        });
    });

    //this function is intended to get random numbers between 0 and either the window width or height - the dimentions of the pizza
    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;//Found info about Math.random() here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    }
});
