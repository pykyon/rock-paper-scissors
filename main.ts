let hand = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # . .
            . . . . .
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . # . .
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            . # # # #
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
