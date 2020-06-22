console.log ('Hi im Silent Bob')

// ==User Stories/ game logic ==//
//The goal of the game is to keep the pet alive by feeding it when it is hungry, healing it when it is sick, when to sleep, and not to die


// -------missing details----------//
    // name- Silent Bob
    // Hunger (1-10)
    // Sleepiness (1-10)
    // Boredom(1-10)
    // Age (1)

//---------Buttons---------
    // "A" Button (plays with your pet)
    // "B" Button (Feed your pet)
    // "C" Button (turn off the lights)

// --------Variables needed-----------
    
    // mood- stores a value that will determine the mood (happy, sleepy, hungry)
    // Happy- a boolean variable that will show a happy face when its TRUE
    // Hunger- a boolean variable that will show a sad face when its TRUE, meaning the pet is hungry
    // sleepiness- a boolean variable that will show a sad face when its TRUE, meaning the pet is sleepy
    // Boredom- a boolean variable that will show a lifeless face when its TRUE, meaning the pet is bored
    // Un-happy timer- stores a value that will be used to count down from when the pet is not happy. 
            // cont... The pet will die when the timer reaches zero.

            //--------Eye movement (to show happy, sad, or dead)---------//
            // When the pet is happy, its eyes should glance from left to right
            // Eye movement  (EM) - stores a value that will determine the value stored in "eye movement state"

    // eye movement state (EMS) - stores a value that will determine where the pet's eyes will look.

    // set EMC to random value between 0 and 100
    // if EM is <= 10, then set EMS = 2
        //else if EMC is greater than 10 and <= 20, then set EMS = 1
            //else then EMS = 0

    // if "happy" is true then:
        // if "EMS" is = 0, then show face looking forward
            //else if "EMS" is = 1, then show face looking left
            //else then show face looking right. 
            
    //----------Mood Changes--------------------
        // When the pets mood changes when it is happy, hungry, sleepy
    
    // If "Happy" is true, then set "Mood" to a random value between 0 and 5000

    // if "Mood " is <=1 (less than or equal to 1) then:
        // set "happy" to false
        // set "hungry" to true
        // set "sleepy" to false
    
        // else if "mood" is >=1 (greater than or equal to 1) and <=3 then
            //set "happy" to false
            //set "hungry" to false
            // set "sleepy" to true

        // else then
            // set "happy" to true
            // set "hungry" to false
            // set "sleepy" to false

    // ----------

        // if ("hungry" is equal to true or "sleepy" is = to true) and "unhappy timer" is = to 0, then:
            // set dead to true

        // if "hungry" is equal to true or "sleepy" is equal to true, then
            // show sad face
            // change "unhappy timer" by -1

        // if "dead" is true, then:
            // show dead face
            //game over
        

    //-------------------------- Feeding and putting to sleep------------------

        // This section is for the player to be able to press either A button or B button
            //Cont. when the pet is hungry or tired to make the pet happy again before it dies.
    
        
        // on "A" button pressed
            // if "hungry" is = true, then
                // set "happy" to true
                // set "hungry" to false
                // set "sleepy" to false
                // set "unhappy timer" to 100
            //else then
                // show "tick" icon

        // on "B" button pressed
            // if "sleepy" is = true, then
                // set "happy" to true
                // set "hungry" to false
                //set "sleepy" to false
                // set "unhappy timer" to 100
                // show "tick" icon
            // else then
                // show "X" icon





    
