# dice-rolling-simulator
A simple game for Day 1

## Description
The program should roll the dice for you. Since the world we are in is imaginary, let's pretend that we can roll literally ANY dice. Therefore, we can roll a d<number> dice a <number> of times.
For example, for 4d6 dice the output may be:
```txt
3
4
2
5
```


### Extra
Have you ever heard of DnD? A roll is succesful if the value is bigger than the DM's roll. 


### Extra 2
What if you encounter a monster? With given monster HP and XdN attack, and 'armor class' find out if your hero (with HP and attack, too) can defeat him. How many steps will it take?

Example:
```txt
Hero:
    attack: 2d6
    HP: 14
Monster: 
    attack: 1d5
    HP: 20
``` 
Output:
```
Hero (14) attacks Monster (20). Hit: 3 + 1 = 4
Monster (16) attacks Hero (14). Hit: 4
...
Hero (1) attacks Monster (6). Hit: 5 + 4 = 9
Monster has been defeated! Hooray!

OR:
Monster (2) attacks Hero (1). Hit: 1
YOU DIED.

```

## Requirements
- [ ] upload the activity diagram
- [ ] comment your code where possible

## Tips
- You may write it in any language you want
- Try rewriting it in another programming language
- Try adding command line arguments instead of reading from stdin
