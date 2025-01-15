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
        );
    }

    /**
     * Function for creating a gender and adding it into the gender list.
     * @param {string} gName - Name of the gender.
     * @param {string[]} gPronouns - ALl the necessary pronouns.
     * @param {boolean} gPregEnabled - Can this gender get pregnant?
     * @param {boolean} gImpregEnabled - Can this gender get others pregnant?
     */
    createGender(gName, gPronouns, gPregEnabled, gImpregEnabled) {
        const newGender = new Gender(gName, gPronouns, gPregEnabled, gImpregEnabled);

        this.genderList.set(gName, newGender);
    }

    /**
     * Function to delete a specific gender from the gender list.
     * @param {string} gKey - Key of the gender to delete. 
     * @returns - Nothing.
     */
    deleteGender(gKey) {
        if (!this.genderList.has(gKey)) {
            console.log(`"${gKey}" does not exist.`);
            return;
        }

        this.genderList.delete(gKey);
    }

    /**
     * Function for creating a new character and adding it to the character list.
     * @param {string[]} cAliases - An array of strings containing all needed names (see Character).
     * @param {string} cGenderKey - Key of the selected gender in the map.
     */
    createCharacter(cAliases, cGenderKey) {
        const gender = this.genderList.get(cGenderKey);
        const newCharacter = new Character(cAliases, gender);

        // Creating the key for this character.
        let key = cAliases[0] + cAliases[1] + cAliases[2] + gender.name;
        let duplicateCode = 0;

        while (this.characterList.has(key + duplicateCode)) {
            duplicateCode++;
        }

        this.characterList.set((key + duplicateCode), newCharacter);
    };

    /**
     * Function to delete a character from the list. Goes through and removes relationship from all other characters.
     * @param {string} cKey - Key of the character to delete. 
     * @returns - Nothing.
     */
    deleteCharacter(cKey) {
        if (!this.characterList.has(cKey)) {
            console.log(`Character "${cKey}" could not be deleted.`);
            return;
        }

        this.characterList.delete(cKey);

        for (const character of this.characterList.values()) {
            // deleteRelationship will automatically check if this character knows the one being deleted.
            // No additional logic needed.
            character.deleteRelationship(cKey);
        }
    }

    /**
     * Function for quickly getting a character by its key.
     * @param {string} cKey - Key that indexes the character in the map.
     */
    findCharacter(cKey) {
        if (this.characterList.has(cKey)) {
            return this.characterList.get(cKey);
        }

        console.log(`Character "${cKey}" was not found.`);
    }

    /**
     * Function that creates a friendship between two people.
     * @param {string} cKeyOne - Key to find the first character in the list.
     * @param {string} cKeyTwo - Key to find the second character in the list.
     */
    createFriendship(cKeyOne, cKeyTwo) {
        this.findCharacter(cKeyOne).createRelationship(cKeyTwo);
        this.findCharacter(cKeyTwo).createRelationship(cKeyOne);
    }
}