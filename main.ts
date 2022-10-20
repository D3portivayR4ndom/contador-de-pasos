input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    Pasos = 0
})
input.onGesture(Gesture.Shake, function () {
    Pasos += 1
    basic.showNumber(Pasos)
})
input.onButtonPressed(Button.B, function () {
    let Congelar_número = 0
    Pausar_cuenta = Congelar_número
    Pausar = Congelar_número
    basic.showNumber(Congelar_número)
})
let Pausar = 0
let Pausar_cuenta = 0
let Pasos = 0
basic.showNumber(0)
Pasos = 0
