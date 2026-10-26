function byela () {
    basic.showIcon(IconNames.Skull)
}
input.onGesture(Gesture.ThreeG, function () {
    _1()
})
function _2 () {
    basic.showIcon(IconNames.Angry)
}
input.onGesture(Gesture.Shake, function () {
    colightshow += 1
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.SixG, function () {
    _2()
})
input.onButtonPressed(Button.AB, function () {
    colightshow = 0
})
input.onGesture(Gesture.EightG, function () {
    byela()
})
function bye () {
    if (colightshow > 3) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showNumber(colightshow)
    }
}
function _1 () {
    basic.showIcon(IconNames.Sad)
}
let colightshow = 0
colightshow = 0
basic.forever(function () {
    bye()
})
