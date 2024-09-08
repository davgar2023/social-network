# Social Network Data Structure

This project implements a basic social network data structure using JavaScript classes. Individuals are represented as nodes, and friendships between them are edges. The main functionalities include adding individuals, establishing friendships, updating individual details, and calculating the degree of separation between two individuals using the Breadth-First Search (BFS) algorithm.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Example](#example)

### Project Structure
.
├── index.js              # Entry point of the project
├── modules/
│   ├── SocialNetwork.js  # Social Network class containing main functionalities
│   └── Individual.js     # Individual class representing each person in the network
└── README.md             # Project documentation



## Installation

    To get started with the project, clone the repository and install the dependencies.

    ```bash ```
    git clone https://github.com/davgar2023/social-network.git
    cd <social-network>
    npm install


### api

SocialNetwork Class
addIndividual(id, name): Adds a new individual to the social network.
addFriendship(id1, id2): Establishes a friendship between two individuals.
updateIndividual(id, newName): Updates the name of an individual.
calculateDegreeOfSeparation(startId, targetId): Calculates the degree of separation between two individuals using BFS. Returns -1 if they are not connected.
printRelationships(): Prints all the friendships in the network.

### Individual Class
addFriend(friend): Adds a friend to the individual's friends list.
updateName(newName): Updates the name of the individual.


### example

const SocialNetwork = require('./modules/SocialNetwork');

// Create a new social network instance
const network = new SocialNetwork();

// Add individuals
network.addIndividual('1', 'Alice');
network.addIndividual('2', 'Bob');
network.addIndividual('3', 'Charlie');
network.addIndividual('4', 'David');

// Establish friendships
network.addFriendship('1', '2'); // Alice - Bob
network.addFriendship('2', '3'); // Bob - Charlie
network.addFriendship('3', '4'); // Charlie - David

// Update individual's details
network.updateIndividual('4', 'Dave');

// Calculate degree of separation
console.log('Degree of separation between Alice and David:', network.calculateDegreeOfSeparation('1', '4'));

// Print relationships
console.log('Friendships:');
network.printRelationships();
