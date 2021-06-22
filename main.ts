let test = ""
let reading = 0
let log: String[] = []
let temp = input.temperature()
led.setBrightness(64)
basic.showString("" + (input.temperature()))
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
    basic.showNumber(reading)
    test = "temp:"+ temp + " humditity:" + reading
    if (log.length > 50) {
        log.push(test)
        log.slice(0, -1)
    } else {
        log.push(test)
    }
    basic.pause(5000)
})
