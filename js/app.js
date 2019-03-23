/*state varibles - changes the UI*/
var snow = document.querySelector(".snows"),
    app = document.querySelector("#app");

/*listeners*/
function ClickSnow(){
    MakeSnow();
    MakeSnow();
}

/*functions*/
function MoveSnow(s){
    //this function moves the snow
    
    //delay 100ms
    setTimeout(function(){
    s.style.top = window.innerHeight+"px";
    
    //delay 1000ms = 1s
        setTimeout(function(){
            RemoveSnow(s);
        }, 5000);
        
    }, 100);
}

function MakeSnow(){
    //this function creates the snow
    var newSnow = document.createElement("img");
    newSnow.src = "imgs/Skittlescandy.svg";
    newSnow.className = "snows";
    newSnow.style.left = Math.round(Math.random()*window.innerWidth) + "px";
    newSnow.style.top = "-100px";
    var dim = Math.round(Math.random()*50);
    newSnow.style.width = dim + "px";
    newSnow.style.height = dim + "px";
    newSnow.style.opacity = dim/50;
    
    //multiple classes
    //newSnow.classList = ["snows", "class2"]
    app.appendChild(newSnow);
    MoveSnow(newSnow);
}

function RemoveSnow(snowToRemove){
    //this function removes snow
    app.removeChild(snowToRemove);
}

document.querySelector("#chew").addEventListener("click", function toggle(){
            document.getElementById("chew").style.top += "20px";
            document.querySelector("#text").innerHTML = "Chewies: Green (lime), orange (orange), yellow (lemon), purple (blackcurrant),pink (strawberry)";
            });

document.querySelector("#dark").addEventListener("click", function toggle(){
            document.getElementById("dark").style.top += "320px";
            document.querySelector("#text").innerHTML = "Darkside: Red (wicked pomegranate/black cherry), blue (forbidden fruit), green,(midnight lime), purple (dark berry), orange (blood orange)"
            });

document.querySelector("#dessert").addEventListener("click", function toggle(){
            document.getElementById("dessert").style.top += "250px";
            document.querySelector("#text").innerHTML = "Desserts: Red (raspberry sorbet), blue (blueberry tart), green (key lime pie), orange (orange crème), pink (strawberry milkshake)"
            });

document.querySelector("#original").addEventListener("click", function toggle(){
            document.getElementById("original").style.top += "20px";
            document.querySelector("#text").innerHTML = "Original: Purple (grape), yellow (lemon), green (green apple), orange (orange), red (strawberry)"
            });

document.querySelector("#orchard").addEventListener("click", function toggle(){
            document.getElementById("orchard").style.top += "250px";
            document.querySelector("#text").innerHTML = "Orchards: Light red (red apple), dark red (cherry), green (lime), peach (peach), orange (orange)"
            });

document.querySelector("#heat").addEventListener("click", function toggle(){
            document.getElementById("heat").style.top += "60px";
            document.querySelector("#text").innerHTML = "Sweet Heat: Light orange (blazin’ mango), light pink (sizzlin’ strawberry), yellow (lemon spark), pink (fiery watermelon), orange (flamin’ orange)"
            });

document.querySelector("#sour").addEventListener("click", function toggle(){
            document.getElementById("sour").style.top += "240px";
            document.querySelector("#text").innerHTML = "Sour: Purple (sour grape), green (sour lime), yellow (sour lemon), red (sour strawberry), orange (sour orange), green (green apple)"
            });

document.querySelector("#tropical").addEventListener("click", function toggle(){
            document.getElementById("tropical").style.top += "90px";
            document.querySelector("#text").innerHTML = "Tropical: Yellow (banana berry), green (kiwi lime), orange (mango tangelo), blue (pineapple passion fruit), pink (strawberry starfruit)"
            });

document.querySelector("#wild").addEventListener("click", function toggle(){
            document.getElementById("wild").style.top += "170px";
            document.querySelector("#text").innerHTML = "Wild Berry: Violet (berry punch), green (melon berry), blue (raspberry), pink(strawberry), red (wild cherry)"
            });

document.querySelector("#riddle").addEventListener("click", function toggle(){
            document.getElementById("riddle").style.top += "365px";
            document.querySelector("#text").innerHTML = "Riddles: Colours: red, pink, green, teal, blue; Flavours are randomized: watermelon, cherry, punch, apple, raspberry"
            });




