This code defines a creature with animated movement capabilities on an HTML canvas, with options to set up various forms such as a "simple" creature, a "tentacle", an "arm", and more complex forms like a "test squid" or a "lizard." The creature is made up of segments connected by joints and uses mouse interactions to follow the cursor.

Here’s a quick summary of each section:

Core Classes

1. Segment: Represents each individual section of the creature, holding properties like size, angle, and stiffness. Methods for updating position, drawing, and movement adjustments are included.
2. LimbSystem: Manages movement by connecting multiple segments. This includes positioning based on the mouse cursor.
3. LegSystem: A more specialized extension of LimbSystem, designed for leg-like movement patterns with a "swing" parameter to simulate walking.
4. Creature: Holds the overall creature structure, managing position, angle, speed, and updates each child segment and limb system to follow the mouse movements.
   
Setup Functions

1. setupSimple: Creates a basic creature with segments that move in response to mouse movements.
2. setupTentacle: Adds a tentacle limb to the creature, following the mouse in a flexible, arm-like manner.
3. setupArm: A simpler version of the tentacle, mimicking an arm with fewer segments.
4. setupTestSquid: Sets up multiple leg-like structures for a "squid" effect.
5.setupLizard: Although the definition is incomplete, likely configures the creature with a more complex combination of legs and a tail.

The code animates by repeatedly clearing the canvas and calling the follow method on each setup, which ensures smooth movement.

Mouse and Keyboard Input Management:

The Input object tracks keyboard and mouse state, storing information like key presses and mouse button states. Event listeners update this object, which is used within movement updates for interaction.

# Monster Animation

Check out the monster animation live [here](https://somyashri7.github.io/Weird-Monster/).
