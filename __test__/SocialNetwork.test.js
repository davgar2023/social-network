const assert = require('assert');
const SocialNetwork = require('../modules/SocialNetwork');

// Start Mocha's test suite
describe('Social Network Tests', function() {

  let network;

  // Run this before each test case
  beforeEach(function() {
    network = new SocialNetwork();
    network.addIndividual('1', 'Alice');
    network.addIndividual('2', 'Bob');
    network.addIndividual('3', 'Charlie');
    network.addIndividual('4', 'David');
    network.addIndividual('5', 'Eve'); // New individual Eve
  });

  it('should add individuals to the network', function() {
    assert.strictEqual(network.individuals.get('1').getName(), 'Alice', 'Individual Alice should be added.');
    assert.strictEqual(network.individuals.get('2').getName(), 'Bob', 'Individual Bob should be added.');
    assert.strictEqual(network.individuals.get('3').getName(), 'Charlie', 'Individual Charlie should be added.');
    assert.strictEqual(network.individuals.get('4').getName(), 'David', 'Individual David should be added.');
    assert.strictEqual(network.individuals.get('5').getName(), 'Eve', 'Individual Eve should be added.');
  });

  it('should establish friendships', function() {
    network.addFriendship('1', '2'); // Alice - Bob
    network.addFriendship('2', '3'); // Bob - Charlie
    network.addFriendship('3', '4'); // Charlie - David
    network.addFriendship('4', '5'); // David - Eve

    assert.strictEqual(network.individuals.get('1').getFriends().has(network.individuals.get('2')), true, 'Alice and Bob should be friends.');
    assert.strictEqual(network.individuals.get('2').getFriends().has(network.individuals.get('3')), true, 'Bob and Charlie should be friends.');
    assert.strictEqual(network.individuals.get('3').getFriends().has(network.individuals.get('4')), true, 'Charlie and David should be friends.');
    assert.strictEqual(network.individuals.get('4').getFriends().has(network.individuals.get('5')), true, 'David and Eve should be friends.');
  });

  it('should remove a friendship', function() {
    network.addFriendship('1', '2'); // Establish friendship between Alice and Bob
    network.removeFriendship('1', '2'); // Remove friendship between Alice and Bob

    assert.strictEqual(network.individuals.get('1').getFriends().has(network.individuals.get('2')), false, 'Friendship between Alice and Bob should be removed.');
    assert.strictEqual(network.individuals.get('2').getFriends().has(network.individuals.get('1')), false, 'Friendship between Bob and Alice should be removed.');
  });

  it('should calculate the degree of separation', function() {
    network.addFriendship('1', '2'); // Alice - Bob
    network.addFriendship('2', '3'); // Bob - Charlie
    network.addFriendship('3', '4'); // Charlie - David
    network.addFriendship('4', '5'); // David - Eve

    const degreeAliceToEve = network.calculateDegreeOfSeparation('1', '5'); // Alice -> Bob -> Charlie -> David -> Eve
    const degreeCharlieToEve = network.calculateDegreeOfSeparation('3', '5'); // Charlie -> David -> Eve

    assert.strictEqual(degreeAliceToEve, 4, 'Degree of separation between Alice and Eve should be 4.');
    assert.strictEqual(degreeCharlieToEve, 2, 'Degree of separation between Charlie and Eve should be 2.');
  });

  it('should handle non-existent individuals in removeFriendship', function() {
    network.removeFriendship('1', '999'); // Attempt to remove friendship with non-existent individual
    assert.strictEqual(network.individuals.has('999'), false, 'Non-existent individual 999 should not exist.');
  });
});
