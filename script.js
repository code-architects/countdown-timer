let countdate = new Date("Jan 1, 2021 00:00:00").getTime();
let x = setInterval(function() {
    let current = new Date().getTime();
    let distance = countdate - current;
    let daysleft = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hoursleft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesleft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondsleft = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = daysleft + "d " + hoursleft + "h "+ minutesleft + "m " + secondsleft + "s";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "🎊 HAPPY NEW YEAR 🎊";
    }
}, 1000);