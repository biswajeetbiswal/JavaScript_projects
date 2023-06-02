function decrease()
{
    let x=parseInt(document.getElementById("data").innerHTML);
    let sub=0;
    sub=x-1;
    document.getElementById("data").innerHTML=sub;
    if(sub>0)
    {
       document.getElementById("data").style.color="green";
    }
    else if(sub<0){
        document.getElementById("data").style.color="red";
    }
    else{
        document.getElementById("data").style.color="black";
    }
}
function increase()
{
    let x=parseInt(document.getElementById("data").innerHTML);
    let add=0;
    add=x+1;
    document.getElementById("data").innerHTML=add;
    if(add>0)
    {
       document.getElementById("data").style.color="green";
    }
    else if(add<0){
        document.getElementById("data").style.color="red";
    }
    else{
        document.getElementById("data").style.color="black";
    }
}
function reset()
{
    document.getElementById("data").innerHTML=0;
    document.getElementById("data").style.color="black";
}