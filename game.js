var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

$(".btn").click(function(){
    var userChosenColour = $(".btn").attr("id");
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
});

function nextSequence(){
    var randomNumber =  Math.floor((Math.random()*3));
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    (new Audio("sounds/" + name + ".mp3")).play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass('pressed');
    setTimeout(function(){
        $("#"+currentColor).removeClass('pressed');
    }, 100);
}