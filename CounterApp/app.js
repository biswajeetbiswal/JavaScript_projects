var Decrease=document.getElementById("btn-decrease");
var increase=document.getElementById("btn-increase");
var reset=document.getElementById("btn-reset");
var number=document.getElementById("data");

//change color
function changecolor()
{
    if(Number(number.innerHTML)>0)
    {
        number.style.color="green";
    }
    else if(Number(number.innerHTML)<0){
        number.style.color="red";
    }
    else{
        number.style.color="black";
    }
}
function decreament()
{
    number.innerHTML=Number(number.innerHTML)-1;
    changecolor();
}
function increament()
{
    number.innerHTML=Number(number.innerHTML)+1;
    changecolor();
}
function clear()
{
    number.innerHTML=0;
    changecolor();
}

//call the fuction
Decrease.addEventListener('click',decreament);
increase.addEventListener('click',increament);
reset.addEventListener('click',clear);