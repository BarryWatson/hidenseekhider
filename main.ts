input.onButtonPressed(Button.A, function () {
    power += -1
    radio.setTransmitPower(power)
    basic.showNumber(power)
})
input.onButtonPressed(Button.B, function () {
    power += 1
    radio.setTransmitPower(power)
    basic.showNumber(power)
})
let power = 0
power = 6
radio.setGroup(1)
radio.setTransmitPower(power)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(1000)
})
