alert("Hello, ini adalah program JS eksternal!");
document.getElementsByTagName("body")[0].style.backgroundColor = "lightcyan";

var card = document.getElementById("card");
card.innerHTML += "<p>Tutorial Javascript Pemula</p>";
card.innerHTML += "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam corrupti saepe laudantium obcaecati fugit neque? Dolorem provident, possimus consectetur a facere dicta in illum cupiditate illo repudiandae aut veritatis accusamus!</p>";
card.style.padding = "20px";
card.style.backgroundColor = "lightgoldenrodyellow";

function clickAlert(){
    alert("Hello, ini adalah program JS eksternal!");
}