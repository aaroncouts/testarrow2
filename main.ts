input.onButtonPressed(Button.A, function () {
    chDir(-1)
})
function chDir (Aa: number) {
    Dir += Aa
    if (Dir < 0) {
        Dir = Arrows.length - 1
    }
    if (Dir >= Arrows.length) {
        Dir = 0
    }
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    basic.showArrow(Arrows[Dir], ShowInterval)
}
function spin (Aa2: number) {
    NumSpin = randint(SpinMin, SpinMax)
    for (let index = 0; index < NumSpin; index++) {
        chDir(Aa2)
    }
}
input.onButtonPressed(Button.AB, function () {
    spin(1)
})
input.onButtonPressed(Button.B, function () {
    chDir(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    spin(-1)
})
let NumSpin = 0
let SpinMax = 0
let SpinMin = 0
let Arrows: number[] = []
let Dir = 0
SpinMin = 1
SpinMax = 7
let ShowInterval = 50
Arrows = [
ArrowNames.North,
ArrowNames.NorthEast,
ArrowNames.East,
ArrowNames.SouthEast,
ArrowNames.South,
ArrowNames.SouthWest,
ArrowNames.West,
ArrowNames.NorthWest
]
Dir = 0
basic.showArrow(Arrows[Dir])
