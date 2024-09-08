class Individual {
  // Private fields
  #id;
  #name;
  #friends;

  /**
   * Create a new individual.
   * @param {string} id - The unique identifier of the individual.
   * @param {string} name - The name of the individual.
   */
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    this.#friends = new Set(); // Use Set to avoid duplicate friendships.
  }

  /**
   * Get the individual's ID.
   * @returns {string} - The unique identifier of the individual.
   */
  getId() {
    return this.#id;
  }

  /**
   * Get the individual's name.
   * @returns {string} - The name of the individual.
   */
  getName() {
    return this.#name;
  }

  /**
   * Set a new name for the individual.
   * @param {string} newName - The new name for the individual.
   */
  updateName(newName) {
    this.#name = newName;
  }

  /**
   * Add a friend to the individual's friends list.
   * @param {Individual} friend - The friend to add.
   */
  addFriend(friend) {
    this.#friends.add(friend);
  }

  /**
   * Remove a friend from the individual's friends list.
   * @param {Individual} friend - The friend to remove.
   */
  removeFriend(friend) {
    this.#friends.delete(friend);
  }

  /**
   * Get the list of friends.
   * @returns {Set<Individual>} - A set of the individual's friends.
   */
  getFriends() {
    return this.#friends;
  }
}

module.exports = Individual;
