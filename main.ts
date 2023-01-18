input.onButtonPressed(Button.A, function () {
    _1ºn = randint(0, 10)
    _2ºn = randint(0, 10)
    basic.showNumber(_1ºn)
    basic.showString("x")
    basic.showNumber(_2ºn)
    nrjogadas += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(pontuação)
    basic.showString("de")
    basic.showNumber(nrjogadas)
    basic.pause(2000)
    basic.clearScreen()
    nrjogadas = 0
    pontuação = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(_1ºn * _2ºn)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pontuação += 1
    basic.showString("Boa")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
let pontuação = 0
let nrjogadas = 0
let _2ºn = 0
let _1ºn = 0
_1ºn = 0
_2ºn = 0
nrjogadas = 0
pontuação = 0
basic.showString("Hello!")
basic.showIcon(IconNames.Happy)
