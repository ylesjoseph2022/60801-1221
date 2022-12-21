input.onButtonPressed(Button.A, function () {
    我出拳 = 1
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(1)
})
function 設定出值 () {
    basic.showArrow(ArrowNames.North)
    我出拳 = 0
    你出拳 = 0
}
input.onButtonPressed(Button.AB, function () {
    我出拳 = 3
    basic.showIcon(IconNames.Square)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    我出拳 = 2
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(1)
})
let 你出拳 = 0
let 我出拳 = 0
radio.setGroup(2)
設定出值()
