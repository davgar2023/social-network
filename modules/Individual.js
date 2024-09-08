// modules/Individual.js

/**
 * Class representing an individual (node) in the social network.
 */
class Individual {
    /**
     * Create a new individual.
     * @param {string} id - The unique identifier of the individual.
     * @param {string} name - The name of the individual.
     */
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.friends = new Set(); // Use Set to avoid duplicate friendships.
    }
  
    /**
     * Add a friend to the individual's friends list.
     * @param {Individual} friend - The friend to add.
     */
    addFriend(friend) {
      this.friends.add(friend);
    }
  
    /**
     * Update the individual's name.
     * @param {string} newName - The new name for the individual.
     */
    updateName(newName) {
      this.name = newName;
    }
  }
  
  module.exports = Individual;
  