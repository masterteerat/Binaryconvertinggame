#Initialize starting var
lvl = 1
score = 0

#level loop
while True:
    #Initialize var
    ms = 0
    sec = 0
    ans = 0    
    weight = 7
    life = 3
    #Random ascii char
    ascii2 = 255
    basic.show_string(String.from_char_code(ascii2))
    #round loop
    while True:
        if input.button_is_pressed(Button.A):
            music.play(music.string_playable("C5 C5 B B C5 - - - ", 1500),
                music.PlaybackMode.IN_BACKGROUND)
            ans = ans + 2 ** weight
            weight += -1
        if input.button_is_pressed(Button.B):
            music.play(music.string_playable("E E F F G - - - ", 1500),
                music.PlaybackMode.IN_BACKGROUND)
            weight += -1
        if weight == -1:
            if ans == ascii2:
                basic.show_icon(IconNames.YES)
                score += 1
                break
            if ans != ascii2:
                basic.show_icon(IconNames.NO)
                life += -1
                break
        #time out warning        
        if sec >= 6:
            music.play(music.string_playable("F F - - - - - - ", 500),
                music.PlaybackMode.IN_BACKGROUND)
        #time out        
        if sec > 11:
            basic.show_icon(IconNames.SAD)
            break       
        ms = ms + 300
        sec = ms // 1000
        basic.pause(300) 
    #Game over checker
    if life == 0:
        basic.show_icon(IconNames.SAD)
        break       
    #Win checker
    if score == 5:
        basic.show_icon(IconNames.HAPPY)
        break    