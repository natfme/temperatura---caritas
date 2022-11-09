let Temperatura = 0
basic.forever(function () {
    Temperatura = input.temperature()
    if (Temperatura <= 10) {
        basic.showString("Frío")
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.OnceInBackground)
        basic.showLeds(`
            . # . # .
            . # # # .
            # # . # #
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . # . # .
            # # # # #
            . . # . .
            `)
    } else if (Temperatura > 10 && Temperatura < 30) {
        basic.showString("Templado")
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showString("Caliente")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
    }
})
