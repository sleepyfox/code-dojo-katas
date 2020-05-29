# Data Munge
This is a simple kata involving the reading of data from files and the finding of aggregate data from those files.

## First exercise

In the first example we have a [data file](./weather.dat) from a weather station at Heathrow airport. It contains year and month, together with the max and min recorded temperature in degrees Celcius, together with rainfall, sunshine hours and other data that we will not concern ourselves with in this excercise.

The challenge is simple: find the year and month that has the smallest spread between the maximum and minimum temperature recorded for that month.

STOP READING HERE AND COMPLETE THE EXERCISE











## Second exercise

Once this is complete, there is another, similar, problem to solve. You have football scores data from the FA Premier League 2001/2 in [this file](./football.dat), each line contains the team name, the number of matches played, won, lost and drawn, together with the number of goals scored For and Against the team, and also the number of points awarded during the season and some notes on whether the team was promoted or relegated at the end of the season.

The goal (no pun intended) is to find the team that had the minimum spread between goals for and goals against during the season.

Write new tests and code. You may copy and paste.











## Third exercise

Once both exercises are complete, combine both programmes into a single programme capable of solving either problem, reusing the same tests. Refactor to remove duplication and other smells. Consider:

- Is the resulting code more or less readable than the originals?
- Did the design of the second programme change from the first? If so how, and why?
- How did the original design decisions made in the first two programmes affect the refactoring?
- Which version do you prefer, and why?
- Looking back, what tradeoffs did you make, and would you make them again?

The source of the kata is Dave Thomas of the Pragmatic Programmers and you can find the original write up from 2007 [here](http://codekata.com/kata/kata04-data-munging/).
