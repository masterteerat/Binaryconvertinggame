let ascii2: number;
let score = 0
// ascii2 = 255
let ms = 0
let sec = 0
let ans = 0
// ascii2 = randint(48, 57)
let life = 5
let weight = 7
// basic.show_string(String.from_char_code(ascii2))
while (true) {
    // Initial var
    ms = 0
    sec = 0
    ans = 0
    weight = 7
    // Random ascii char
    ascii2 = 255
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
                score += 1
                break
            }
            
            if (ans != ascii2) {
                basic.showIcon(IconNames.No)
                life += -1
                break
            }
            
        }
        
        // time out warning        
        if (sec >= 6) {
            music.play(music.stringPlayable("F F - - - - - - ", 500), music.PlaybackMode.InBackground)
        }
        
        // time out        
        if (sec > 11) {
            basic.showIcon(IconNames.Sad)
            break
        }
        
        if (life < 3) {
            basic.showIcon(IconNames.Sad)
            break
        }
        
        ms = ms + 300
        sec = Math.idiv(ms, 1000)
        basic.pause(300)
    }
    if (score == 5) {
        basic.showIcon(IconNames.Happy)
        break
    }
    
}
