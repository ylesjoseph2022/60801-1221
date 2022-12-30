radio.onReceivedNumber(function (receivedNumber) {
    你出拳 = receivedNumber
    while (我出拳 == 0) {
        basic.showString("?")
    }
    basic.pause(1000)
    判段輸贏()
    basic.pause(3000)
    設定出值()
})
input.onButtonPressed(Button.A, function () {
    if (我出拳 == 0) {
        我出拳 = 1
        basic.showIcon(IconNames.Scissors)
        radio.sendNumber(我出拳)
    }
})
function 設定出值 () {
    basic.showArrow(ArrowNames.North)
    我出拳 = 0
    你出拳 = 0
}
input.onButtonPressed(Button.AB, function () {
    if (我出拳 == 0) {
        我出拳 = 3
        basic.showIcon(IconNames.Square)
        radio.sendNumber(我出拳)
    }
})
input.onButtonPressed(Button.B, function () {
    if (我出拳 == 0) {
        我出拳 = 2
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendNumber(我出拳)
    }
})
function 判段輸贏 () {
    if (我出拳 == 你出拳) {
        basic.showIcon(IconNames.Pitchfork)
    } else if (我出拳 == 1 && 你出拳 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (我出拳 == 2 && 你出拳 == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (我出拳 == 3 && 你出拳 == 2) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
let 我出拳 = 0
let 你出拳 = 0
radio.setGroup(2)
設定出值()
