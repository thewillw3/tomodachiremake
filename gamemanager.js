// This module handles all game logic.
class GameManager {
    charManager;

    constructor(cManager) {
        this.charManager = new CharacterManager();
    }
}

let test = new GameManager();

test.charManager.createCharacter(["Fuck", "Face", "McGee"], "Female");

console.log(test.charManager.characterList);