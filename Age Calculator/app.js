const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var button_click=document.getElementById("btn");
var output=document.getElementById("result");
button_click.addEventListener('click',function(){
    var user_input=document.getElementById("data").value;
    if(user_input=="")
    {
        output.innerHTML="Please Enter Your DOB";
        return;
    }
    user_input=new Date(user_input);
    var today=new Date();
    var todaydate=today.getDate();
    var todaymonth=today.getMonth()+1;
    var todayyear=today.getFullYear();
    var inputdate=user_input.getDate();
    var inputmonth=user_input.getMonth()+1;
    var inputyear=user_input.getFullYear();
    //console.log(user_input.getMonth());
    //cheack leap year
    leapyear(todayyear);
     var resultyear,resultmonth,resultdate;
    if (
        inputyear > todayyear ||
        (inputmonth > todaymonth && inputyear == todayyear) ||
        (inputdate > todaydate && inputmonth == todaymonth && inputyear == todayyear)
    )
    {
        output.innerHTML="Invalid Input";
        return;
    }
    else{
        resultyear=todayyear-inputyear;
    }
    if(todaymonth>inputmonth)
    {
        resultmonth=todaymonth-inputmonth;
    }
    else{
        resultyear--;
        resultmonth=12+todaymonth-inputmonth;
    }
    if(todaydate>inputdate)
    {
        resultdate=todaydate-inputdate;
    }
    else{
        resultmonth--;
        var days=months[todaymonth-1];
        resultdate=days+todaydate-inputdate;
        if(inputmonth<0)
        {
            inputmonth=11;
            inputyear--;
        }
    }
   button_click.textContent="Ok got it";
    output.innerHTML="Your Age is "+resultyear+" year "+resultmonth+" months "+resultdate+" days";
    
});
function leapyear(year)
{
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
    else {
        months[1] = 28;
    }
}