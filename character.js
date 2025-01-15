// Template for creating characters.
class Character {
    aliases;
    gender;
    relationships;

    /**
     * Constructor function for the Character class.
     * @param {string[]} cAliases - The list of the character's aliases: [firstName, lastName, nickName].
     * @param {Gender} cGender - The character's gender.
     * @param {Map<string, number>} cRelationships - Map storing characters and their relationship scores.
     */
    constructor(cAliases, cGender, cRelationships=new Map()) {
        this.aliases = cAliases;
        this.gender = cGender;
        this.relationships = cRelationships;
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
     * @returns {string} - string containing the character's nickname.
     */
    nickName() {
        return this.aliases[2];
    }

    /**
     * This function adds a new relationship to this character's list.
     * @param {string} cKey - The key of the character to establish a relationship with. 
     */
    createRelationship(cKey) {
        this.relationships.set(cKey, 0.5);
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