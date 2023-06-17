let ms: number;
let sec: number;
let ans: number;
let weight: number;
let life: number;
let ascii2: number;
// Initialize starting var
let lvl = 1
let score = 0
let timeout = 0
// level loop
while (true) {
    // Initialize var
    ms = 0
    sec = 0
    ans = 0
    weight = 7
    life = 3
    // Random ascii char
    if (lvl == 1) {
        ascii2 = randint(48, 57)
        timeout = 20
    }
    
    if (lvl == 2) {
        ascii2 = randint(65, 90)
        timeout = 17
    }
    
    if (lvl == 3) {
        ascii2 = randint(65, 122)
        timeout = 14
    }
    
    if (lvl == 4) {
        ascii2 = randint(48, 126)
        timeout = 10
    }
    
    // ascii2 = 255
    basic.showString(String.fromCharCode(ascii2))
    // round loop
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
        if (sec >= timeout - 5) {
            music.play(music.stringPlayable("F F - - - - - - ", 500), music.PlaybackMode.InBackground)
        }
        
        // time out        
        if (sec > timeout) {
            basic.showIcon(IconNames.No)
            life += -1
            break
        }
        
        ms = ms + 300
        sec = Math.idiv(ms, 1000)
        basic.pause(300)
    }
    // Game over checker
    if (life == 0) {
        basic.showIcon(IconNames.Sad)
        break
    }
    
    // Win checker
    if (score == 5) {
        basic.showIcon(IconNames.Happy)
        // level up
        score = 0
        life = 3
        lvl += 1
    }
    
}
