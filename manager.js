class CharacterManager {
    characterList;
    genderList;

    /**
     * Constructor function for the character manager.
     * @param {Map<string, Character>} cCharacterList - Map containing all characters in the game.
     */
    constructor(cCharacterList=new Map()) {
        this.characterList = cCharacterList;

        // Setting up the list of premade genders.
        this.genderList = new Map();
        // Male.
        this.genderList.set(
            "Male", 
            new Gender("Male", ["He", "Him", "His", "Himself"], false, true)
        );
        // Female.
        this.genderList.set(
            "Female",
            new Gender("Female", ["She", "Her", "Hers", "Herself"], true, false)
        );
        // Non-Binary.
        this.genderList.set(
            "Non-Binary",
            new Gender("Non-Binary", ["They", "Them", "Theirs", "Themselves"], false, false)
        )
    }

    createGender() {

    }

    createCharacter() {
        // Creating a test guy!
        let character = new Character(["Test", "Test", "Test"], this.genderList.get("Male"));

        // Creating the character key.
        let key = character.aliases[0] + character.aliases[1];
        
        // Checking to see if the character already exists, if so, differentiate it.
        if (this.characterList.has(key)) {
            key += "C"; // Just stands for "Copy."
            this.characterList.set(key, character);
            return;
        }

        this.characterList.set(key, character);
    }

    printList() {
        return this.characterList;
    }
}