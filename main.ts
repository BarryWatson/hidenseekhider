radio.setGroup(1)
radio.setTransmitPower(6)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(500)
})
