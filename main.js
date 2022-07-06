let countdowendate = new Date("feb 31 2025 23:59:59");

let counter = setInterval(() => {
    
    //Get data now
    let dateNow = new Date();
    // console.log(dateNow)
    // find date difrrent between now and countdowen
    let dateDiff = countdowendate - dateNow;

    // Get time units
    let days=Math.floor(dateDiff/(1000*60*60*24));
    let hours=Math.floor((dateDiff%(1000*60*60*24))/(1000*60*60))
    let minutes=Math.floor((dateDiff%(1000*60*60))/(1000*60))
    let seconds=Math.floor((dateDiff%(1000*60))/(1000))

    document.querySelector(".days").innerHTML=days<10?`0${days}`:days;
    document.querySelector(".hours").innerHTML=hours<10?`0${hours}`:hours;
    document.querySelector(".minuts").innerHTML=minutes<10?`0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML=seconds<10?`0${seconds}`:seconds;

    if (dateDiff<0) {
        clearInterval(counter);
    }
},1000)

window.addEventListener("scroll",() => {
    const header=document.querySelector("#header");
    header.classList.toggle("sticky",window.scrollY > 0);
});




function myFunction() {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("activ")

    let barth =  document.getElementById("barth")
}

let me = {
    firtsname:"0mar",
    lastname:"leves",
    full: function () {
        return `fullname: ${me.firtsname}${me.lastname}`;
    }
};
console.log(me.firsname);
console.log(me["firsname"]);
console.log(me.full ());