// Template for creating characters.
class Character {
    aliases;
    gender;
    relationships;
    romanceable;

    /**
     * Constructor function for the Character class.
     * @param {string[]} cAliases - The list of the character's aliases: [firstName, lastName, nickName].
     * @param {Gender} cGender - The character's gender.
     * @param {Map<string, number>} cRelationships - Map storing characters and their relationship scores (Should be left empty).
     * @param {Set<Gender>} cRomanceable - An set of genders that the character will date (Should be left empty).
     */
    constructor(cAliases, cGender, cRelationships=new Map(), cRomanceable=new Set()) {
        this.aliases = cAliases;
        this.gender = cGender;
        this.relationships = cRelationships;
        this.romanceable = cRomanceable;
    }
    
    /**
     * This function returns the character's full name.
     * @param {boolean} displayNickname - Whether or not display the nickname.
     * @returns {string} - string containing the character's full name.
     */
    fullName(displayNickname=false) {
        if (displayNickname) {
            return this.aliases[0] + ' "' + this.aliases[2] + '" ' + this.aliases[1];
        }

        return this.aliases[0] + " " + this.aliases[1];
    }

    /**
     * This function returns the character's nickname.
     * @returns {string} - String containing the character's nickname.
     */
    nickName() {
        return this.aliases[2];
    }

    /**
     * Function returns the relationship value between this character and the selected friend.
     * @param {string} cKey - Key of the character in the character's friends list. 
     * @returns - Nothing.
     */
    relationshipVal(cKey) {
        if (!this.relationships.has(cKey)) {
            console.log(`Character "${this.aliases[0]}" does not know character "${`cKey`}".`);
        }

        return this.relationships.get(cKey);
    }

    /**
     * This function adds a new relationship to this character's list.
     * @param {string} cKey - The key of the character to establish a relationship with. 
     */
    createRelationship(cKey) {
        const startingValue = 0.5;
        this.relationships.set(cKey, startingValue);
    }

    /**
     * This function deletes a relationship from this character.
     * @param {string} cKey - The character who is getting removed from the list.
     */
    deleteRelationship(cKey) {
        // Potentially add a flag where this character can say lines like "Do you ever feel like you're forgetting someone?" or something.

        if (!this.relationships.has(cKey)) {
            console.log(`Character "${this.aliases[0]}" does not know "${cKey}."`);
            return;
        }
        
        this.relationships.delete(cKey);
    }

    /**
     * This function modifies the relationship value with another character.
     * @param {string} cKey - The character to modify the relationship with.
     * @param {number} cRelChange - The amount to change the relationship by.
     * @returns - Nothing.
     */
    modifyRelationship(cKey, cRelChange) {
       this.relationships.set(cKey, this.relationshipVal(cKey) + cRelChange);
    }

    /**
     * This function allows the addition of genders this character is attracted to.
     * @param {Gender} rGender - Gender that character should be able to romance.
     */
    addRomanceable(rGender) {
        const genderName = rGender.name;
        this.romanceable.add(genderName);
    }

    /**
     * This function allows the removal of a gender this character is attracted to.
     * @param {Gender} rGender - Gender to remove from the romanceable list.
     * @returns - Nothing.
     */
    deleteRomanceable(rGender) {
        const genderName = rGender.name;

        if (!this.romanceable.has(genderName)) {
            console.log(`"${genderName}" does not exist in the set.`);
            return;
        }

        this.romanceable.delete(genderName);
    }
}

// Modular gender system.
class Gender {
    name;
    pronouns;
    pregEnabled;
    impregEnabled;

    /**
     * The constructor function for the Gender class.
     * @param {string} cName - Name / identifier of the gender (male, female, non-binary).
     * @param {string[]} cPronouns - An array of strings containing all pronouns.
     * @param {boolean} cPregEnabled - Can this gender become pregnant?
     * @param {boolean} cImpregEnabled - Can this gender get others pregnant?
     */
    constructor(cName, cPronouns, cPregEnabled, cImpregEnabled) {
        this.name = cName;
        this.pronouns = cPronouns;
        this.pregEnabled = cPregEnabled;
        this.impregEnabled = cImpregEnabled;    
    }
}