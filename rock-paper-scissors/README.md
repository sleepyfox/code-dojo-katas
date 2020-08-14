# Code Dojo 38

This is the code kata from the 38th meeting of the London Code Dojo.

The source of the kata is the ancient game of Rock-Paper-Scissors, or 'Roshambo', which originated in ancient China as 'shoushili' and then was exported to Japan as 'sansukimi-ken' and later 'kitsune-ken': a variation which uses both hands. More can be found of its history [here](https://en.wikipedia.org/wiki/Rock-paper-scissors#History).
You can find out more about the London Code Dojo at our [homepage](http://www.meetup.com/London-Code-Dojo/).

## Kata: Rock-Paper-Scissors

Two players make signs using one hand simultaneously - usually on calling 'three, two, one, go!'

The signs can be:

* Rock - represented by a closed fist;
* Paper - represented by the hand held open;
* Scissors - represented by the first and second fingers being held apart in a 'V' to show the open blades of the scissors.

The match is decided based upon the simple rules:

* Two of the same sign results in a draw;
* Rock blunts Scissors (Rock wins);
* Scissors cuts Paper (Scissors wins);
* Paper envelops Rock (Paper wins).

The constraints are as follows:

The all-powerful Architect has declared that the team must use OOP (Object-Oriented Programming), and has decided on the following design:

* The program will have three classes: 'Rock', 'Paper' and 'Scissors';
* All classes will inherit from a superclass called 'Thing';
* All classes will have a method 'beats' that takes an object of type 'Thing' or of one of its subclasses, and returns True, False or None depending on whether the instance beats the thing passed in, is beaten or there is a standoff, respectively.

Example: (Python syntax)

* `Rock().beats(Paper())` would return False;
* `Rock().beats(Rock())` would return None.

When you are finished, proceed to the second stage, described [here](./README_2nd.md).

# License
The code samples are licensed under the CC-SA-NC-4.0 license, as shown in the [LICENSE](/LICENSE) file.
