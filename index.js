 var random=Math.floor(Math.random()*6 +1);
var randomimg="images/dice"+random+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg);

var random1=Math.floor(Math.random()*6 +1);
var randomimg1="images/dice"+random1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimg1);

if(random>random1)
    document.querySelector("h1").innerHTML="Player 1 is the winner";

    else if(random === random1)
        document.querySelector("h1").innerHTML="It's a Tie";

    else
    document.querySelector("h1").innerHTML="Player 2 is the winner";
    