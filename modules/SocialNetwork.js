// modules/SocialNetwork.js
const Individual = require('./Individual');

/**
 * Class representing the social network.
 */
class SocialNetwork {
  constructor() {
    this.individuals = new Map(); // Map to store individuals by their ID.
  }

  /**
   * Add a new individual to the social network.
   * @param {string} id - The unique identifier of the individual.
   * @param {string} name - The name of the individual.
   */
  addIndividual(id, name) {
    if (!this.individuals.has(id)) {
      const individual = new Individual(id, name);
      this.individuals.set(id, individual);
    } else {
      console.log(`Individual with ID ${id} already exists.`);
    }
  }

  /**
   * Establish a friendship between two individuals.
   * @param {string} id1 - The ID of the first individual.
   * @param {string} id2 - The ID of the second individual.
   */
  addFriendship(id1, id2) {
    const person1 = this.individuals.get(id1);
    const person2 = this.individuals.get(id2);
    if (person1 && person2) {
      person1.addFriend(person2);
      person2.addFriend(person1); // Mutual friendship.
    } else {
      console.log('One or both individuals not found.');
    }
  }

  /**
   * Update an individual's details.
   * @param {string} id - The ID of the individual.
   * @param {string} newName - The new name of the individual.
   */
  updateIndividual(id, newName) {
    const person = this.individuals.get(id);
    if (person) {
      person.updateName(newName);
    } else {
      console.log(`Individual with ID ${id} not found.`);
    }
  }

  /**
   * Calculate the degree of separation between two individuals using BFS.
   * @param {string} startId - The ID of the starting individual.
   * @param {string} targetId - The ID of the target individual.
   * @returns {number} The degree of separation or -1 if not connected.
   */
  calculateDegreeOfSeparation(startId, targetId) {
    if (!this.individuals.has(startId) || !this.individuals.has(targetId)) {
      return -1;
    }

    const queue = [[startId, 0]]; // [individualId, degree]
    const visited = new Set();
    visited.add(startId);

    while (queue.length > 0) {
      const [currentId, degree] = queue.shift();
      const currentPerson = this.individuals.get(currentId);

      if (currentId === targetId) {
        return degree;
      }

      for (let friend of currentPerson.friends) {
        if (!visited.has(friend.id)) {
          visited.add(friend.id);
          queue.push([friend.id, degree + 1]);
        }
      }
    }

    return -1; // Return -1 if no connection is found.
  }
/**
   * Remove a friendship between two individuals.
   * @param {string} id1 - The ID of the first individual.
   * @param {string} id2 - The ID of the second individual.
   */
removeFriendship(id1, id2) {
  const person1 = this.individuals.get(id1);
  const person2 = this.individuals.get(id2);
  if (person1 && person2) {
    person1.friends.delete(person2);
    person2.friends.delete(person1);
    console.log(`Friendship removed between ${person1.name} and ${person2.name}`);
  } else {
    console.log('One or both individuals not found.');
  }
}
/**
   * Print all relationships (friendships) in the social network.
   */
printRelationships() {
    this.individuals.forEach((person) => {
      const friendsNames = [...person.friends].map(friend => friend.name).join(', ');
      console.log(`${person.name}'s friends: ${friendsNames}`);
    });
  }

}

module.exports = SocialNetwork;
