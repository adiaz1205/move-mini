enum RadioMessage {
    message1 = 49434,
    Stop = 61268,
    Forward = 16348,
    Backwards = 56537,
    Red = 30290,
    Blue = 39494,
    Left = 14947,
    Right = 32391
}
radio.onReceivedMessage(RadioMessage.Forward, function () {
    pins.servoWritePin(AnalogPin.P1, antiSpeed)
    pins.servoWritePin(AnalogPin.P2, speed)
})
radio.onReceivedNumber(function (receivedNumber) {
    speed = 90 + receivedNumber / 684 * 90
    antiSpeed = 180 - speed
    radio.sendNumber(speed)
})
radio.onReceivedMessage(RadioMessage.Red, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
radio.onReceivedMessage(RadioMessage.Blue, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
radio.onReceivedMessage(RadioMessage.Right, function () {
    pins.servoWritePin(AnalogPin.P1, antiSpeed)
    pins.servoWritePin(AnalogPin.P2, antiSpeed)
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
radio.onReceivedMessage(RadioMessage.Backwards, function () {
    pins.servoWritePin(AnalogPin.P1, speed)
    pins.servoWritePin(AnalogPin.P2, antiSpeed)
})
radio.onReceivedMessage(RadioMessage.Stop, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
radio.onReceivedMessage(RadioMessage.Left, function () {
    pins.servoWritePin(AnalogPin.P1, speed)
    pins.servoWritePin(AnalogPin.P2, speed)
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onSound(DetectedSound.Loud, function () {
    strip.clear()
    strip.show()
})
let speed = 0
let antiSpeed = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
	
})
