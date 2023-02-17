let getal = 3
basic.forever(function () {
    if (getal < 15) {
        basic.showNumber(getal)
        getal += 3
        basic.pause(1000)
    } else {
        if (getal == 12) {
            getal += 0
        }
    }
})
