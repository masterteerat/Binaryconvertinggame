let ans = 0
let ascii2 = randint(48, 57)
// ascii2 = 255
let t = 0
let T = 0
let weight = 7
basic.showString(String.fromCharCode(ascii2))
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.stringPlayable("C5 C5 B B C5 - - - ", 1500), music.PlaybackMode.InBackground)
        ans = ans + 2 ** weight
        weight += -1
    }
    
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.stringPlayable("E E F F G - - - ", 1500), music.PlaybackMode.InBackground)
        weight += -1
    }
    
    if (weight == -1) {
        if (ans == ascii2) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(T)
            break
        }
        
        if (ans != ascii2) {
            basic.showIcon(IconNames.No)
            break
        }
        
    }
    
    t = t + 300
    T = Math.idiv(t, 1000)
    basic.pause(300)
}
