// index.js
const SocialNetwork = require('./modules/SocialNetwork');

// Create a new social network instance
const network = new SocialNetwork();

// Add individuals to the network
network.addIndividual('1', 'Alice');
network.addIndividual('2', 'Bob');
network.addIndividual('3', 'Charlie');
network.addIndividual('4', 'David');

// Establish friendships
network.addFriendship('1', '2'); // Alice - Bob
network.addFriendship('2', '3'); // Bob - Charlie
network.addFriendship('3', '4'); // Charlie - David

// Update an individual's details
network.updateIndividual('4', 'Dave');

// Calculate degree of separation
console.log('Degree of separation between Alice and David:', network.calculateDegreeOfSeparation('1', '4'));
console.log('Degree of separation between Alice and Charlie:', network.calculateDegreeOfSeparation('1', '3'));
console.log('Degree of separation between Alice and Bob:', network.calculateDegreeOfSeparation('1', '2'));
console.log('Degree of separation between Alice and a non-existent person:', network.calculateDegreeOfSeparation('1', '5'));


// Print relationships
console.log('Friendships:');
network.printRelationships();