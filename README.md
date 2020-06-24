# Tomogatchi-Project

Tomogatchi Project #0

SILENT BOB!

==User Stories/ game logic

The goal of the game is to keep the pet alive by feeding it when it is hungry, play when bored, sleep when tired.

// -------missing details----------//

name- Silent Bob
Hunger
Boredom
Sleepiness

//---------Buttons---------

"Eat" Button
"Play" Button
"Nap" Button

// --------Variables needed-----------

-mood- stores a value that will determine the mood boredom, sleepiness, hunger)

- boredom- a boolean variable that will show a happy face when its TRUE
- Hunger- a boolean variable that will show a sad face when its TRUE, meaning the pet is hungry
- sleepiness- a boolean variable that will show a sad face when its TRUE, meaning the pet is sleepy
- dead- a boolean variable that will show a lifeless face when its TRUE, meaning the pet is dead
- Un-happy timer- stores a value that will be used to count down from when the pet is not happy.
- cont... The pet will die when the timer reaches zero.

  // ----------Mood Changes--------------------

  When the pets mood changes when it is Boredom, hungry, sleepy

  If "Boredom" is true, then set "Mood" to a random value between 0 and 5000

  if "Mood " is <=1 (less than or equal to 1) then:
  set "boredom" to false
  set "hunger" to true
  set "sleepiness" to false

         else if "mood" is >=1 (greater than or equal to 1) and <=3 then
            set "boredom" to false
            set "hunger" to false
             set "sleepiness" to true

         else then
             set "boredom" to true
            set "hunger" to false
             set "sleepiness" to false

  ***

        if ("hunger" is equal to true or "sleepiness" is = to true) and "unhappy timer" is = to 0, then:
             set dead to true

         if "hunger is equal to true or "sleepiness" is equal to true, then
             show sad face
             change "unhappy timer" by -1

         if "dead" is true, then:
             show dead face
            game over


    //------- Feeding and putting to sleep------------------

         This section is for the player to be able to press either "eat" button, "play" button, "nap" button
            Cont. when the pet is hungry or tired to make the pet happy again before it dies.


        on "Eat" button pressed
             if "hunger" is = true, then
                 set "boredom" to true
                 set "hunger" to false
                 set "sleepiness" to false
                 set "unhappy timer" to 100
            else then
                 show "tick" icon

         on "play" button pressed
            if "sleepy" is = true, then
                 set "boredom" to true
                 set "hunger" to false
                 set "sleepiness" to false
                 set "unhappy timer" to 100
                 show "tick" icon
              else then
                show "X" icon
