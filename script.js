let date = new Date();

let day = document.querySelector(".day");
let weekday = date.getDay();

if(weekday === 1){
    day.innerHTML = "MONDAY";
}else if(weekday === 2){
    day.innerHTML = "TUESDAY";
} else if(weekday === 3){
    day.innerHTML = "WEDNESDAY";
} else if(weekday === 4){
    day.innerHTML = "THRUSDAT";
} else if(weekday === 5){
    day.innerHTML = "FRIDAY";
} else if(weekday === 6){
    day.innerHTML = "SATURDAY";
} else{
    day.innerHTML = "SUNDAY";
} 

let month = document.querySelector(".month");
let newmonth = date.getMonth();

if(newmonth === 0){
    newmonth="January";
}else if(newmonth === 1){
    newmonth="February";
}else if(newmonth === 2){
    newmonth="March";
}else if(newmonth === 3){
    newmonth="April";
}else if(newmonth === 4){
    newmonth="May";
}else if(newmonth === 5){
    newmonth="June";
}else if(newmonth === 6){
    newmonth="July";
}else if(newmonth === 7){
    newmonth="August";
}else if(newmonth === 8){
    newmonth="September";
}else if(newmonth === 9){
    newmonth="October";
}else if(newmonth === 10){
    newmonth="November";
}else{
    newmonth="December";
}

month.innerHTML = date.getDate()+"  "+newmonth;

let yyyy = document.querySelectorAll(".yy");
yyyy[3].innerHTML = date.getFullYear()%10;
yyyy[2].innerHTML = (date.getFullYear()%100-yyyy[3].innerHTML)/10;
yyyy[1].innerHTML = (date.getFullYear()%1000-yyyy[2].innerHTML*10-yyyy[3].innerHTML)/100;
yyyy[0].innerHTML = (date.getFullYear()%10000-yyyy[1].innerHTML*100-yyyy[2].innerHTML*10-yyyy[3].innerHTML)/1000;

let hour = document.querySelector(".hour");
hour.innerHTML = date.getHours();

let min = document.querySelector(".min");
min.innerHTML = date.getMinutes();

let sec = document.querySelector(".sec");
sec.innerHTML = date.getSeconds();



let ap = document.querySelector(".ap");
if(hour.innerHTML>=12){
    ap.innerHTML = "P";
}else{
    ap.innerHTML = "A";
}

hour.innerHTML = date.getHours()%12;