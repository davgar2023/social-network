# Social Network Data Structure 🌐

[![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/status-active-success)](https://github.com/davgar2023/social-network)

A social network implementation using graph data structures in JavaScript. Individuals are represented as nodes and friendships as edges. This project includes features to manage individuals, establish friendships, and calculate degrees of separation between users.

**[🔗 Live Demo](#demo)** | **[📖 Full Documentation](#table-of-contents)** | **[💻 Source Code](https://github.com/davgar2023/social-network)**

---

## 📋 Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 📖 Project Description

This project implements a social network data structure using JavaScript classes. It allows you to:

- ✅ Add individuals to the network
- ✅ Establish and manage bidirectional friendships
- ✅ Calculate the degree of separation between two people (Erdős number)
- ✅ Update individual information
- ✅ Visualize all relationships in the network
- ✅ Remove friendships

The algorithm uses **BFS (Breadth-First Search)** to calculate the shortest path between two nodes, implementing the concept of the "Erdős Number" or "Six Degrees of Separation".

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 👥 User Management | Add, update, and manage individuals in the network |
| 🔗 Bidirectional Friendships | Friendships are automatically established in both directions |
| 📊 Connection Analysis | Calculate the degree of separation between any pair of users |
| 🔍 BFS Search | Efficient algorithm to find the shortest path |
| 🧪 Unit Tests | Complete test suite with Jest |
| 📝 Documentation | Well-documented code and clear examples |

---

## 📦 Requirements

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0
- Modern browser (for future web versions)

---

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/davgar2023/social-network.git
cd social-network
```

2. **Install dependencies:**
```bash
npm install
```

3. **Verify the installation:**
```bash
npm test
```

---

## 💻 Usage

### Run the Basic Example

```bash
node index.js
```

### Usage in Your Project

```javascript
const SocialNetwork = require('./modules/SocialNetwork');

// Create a social network instance
const network = new SocialNetwork();

// Add individuals
network.addIndividual('1', 'Alice');
network.addIndividual('2', 'Bob');
network.addIndividual('3', 'Charlie');

// Establish friendships
network.addFriendship('1', '2'); // Alice ↔ Bob
network.addFriendship('2', '3'); // Bob ↔ Charlie

// Calculate degree of separation
const degree = network.calculateDegreeOfSeparation('1', '3');
console.log(`Degree of separation between Alice and Charlie: ${degree}`); // Output: 2

// View all relationships
network.printRelationships();
```

---

## 📚 API

### SocialNetwork Class

#### `addIndividual(id, name)`
Adds a new individual to the social network.

| Parameter | Type | Description |
|-----------|------|-------------|
| id | string | Unique identifier of the individual |
| name | string | Name of the individual |

```javascript
network.addIndividual('1', 'Alice');
```

---

#### `addFriendship(id1, id2)`
Establishes a bidirectional friendship between two individuals.

| Parameter | Type | Description |
|-----------|------|-------------|
| id1 | string | ID of the first individual |
| id2 | string | ID of the second individual |

```javascript
network.addFriendship('1', '2'); // Alice and Bob are friends
```

---

#### `removeFriendship(id1, id2)`
Removes the friendship between two individuals.

| Parameter | Type | Description |
|-----------|------|-------------|
| id1 | string | ID of the first individual |
| id2 | string | ID of the second individual |

```javascript
network.removeFriendship('1', '2');
```

---

#### `updateIndividual(id, newName)`
Updates the name of an individual.

| Parameter | Type | Description |
|-----------|------|-------------|
| id | string | ID of the individual |
| newName | string | New name |

```javascript
network.updateIndividual('4', 'Dave');
```

---

#### `calculateDegreeOfSeparation(startId, targetId)`
Calculates the degree of separation (shortest path) between two individuals using BFS.

| Parameter | Type | Description |
|-----------|------|-------------|
| startId | string | ID of the starting individual |
| targetId | string | ID of the target individual |

**Returns:** `number` - Degree of separation or `-1` if no connection exists

```javascript
const degree = network.calculateDegreeOfSeparation('1', '4');
console.log(degree); // 3 (if connected) or -1 (if not)
```

---

#### `printRelationships()`
Prints all friendships in the network.

```javascript
network.printRelationships();
// Output:
// Alice: Bob
// Bob: Alice, Charlie
// Charlie: Bob, David
// David: Charlie
```

---

### Individual Class

#### `addFriend(friend)`
Adds a friend to the individual's friends list.

| Parameter | Type | Description |
|-----------|------|-------------|
| friend | Individual | Individual object to add as a friend |

---

#### `updateName(newName)`
Updates the individual's name.

| Parameter | Type | Description |
|-----------|------|-------------|
| newName | string | New name of the individual |

---

## 🎯 Examples

### Example 1: Simple Social Network

```javascript
const SocialNetwork = require('./modules/SocialNetwork');

const network = new SocialNetwork();

// Create a network of 4 people
network.addIndividual('1', 'Alice');
network.addIndividual('2', 'Bob');
network.addIndividual('3', 'Charlie');
network.addIndividual('4', 'David');

// Establish friendships
network.addFriendship('1', '2'); // Alice - Bob
network.addFriendship('2', '3'); // Bob - Charlie
network.addFriendship('3', '4'); // Charlie - David

// Update name
network.updateIndividual('4', 'Dave');

// Calculate degree of separation
console.log('Degree of separation between Alice and Dave:', 
            network.calculateDegreeOfSeparation('1', '4')); // Output: 3

// Show all relationships
console.log('\nFriendships:');
network.printRelationships();
```

### Example 2: More Complex Network

```javascript
const SocialNetwork = require('./modules/SocialNetwork');

const network = new SocialNetwork();

// Add 6 people
for (let i = 1; i <= 6; i++) {
  network.addIndividual(String(i), `Person${i}`);
}

// Create connections
network.addFriendship('1', '2');
network.addFriendship('2', '3');
network.addFriendship('3', '4');
network.addFriendship('4', '5');
network.addFriendship('5', '6');
network.addFriendship('1', '6'); // Create a cycle

// Analyze connections
console.log('Separation 1→6:', network.calculateDegreeOfSeparation('1', '6')); // 1
```

---

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Test Coverage

The project includes tests for:
- ✅ Adding individuals to the network
- ✅ Establishing friendships
- ✅ Removing friendships
- ✅ Calculating degree of separation
- ✅ Handling non-existent individuals

**Expected results:**
```
Social Network Tests
  ✔ should add individuals to the network
  ✔ should establish friendships
  ✔ should remove a friendship
  ✔ should calculate the degree of separation
  ✔ should handle non-existent individuals in removeFriendship

5 passing
```

---

## 📁 Project Structure

```
social-network/
├── index.js                    # Entry point - usage example
├── package.json               # npm configuration
├── package-lock.json          # Locked dependencies
├── README.md                  # This file
├── LICENSE                    # MIT License
├── .gitignore                 # Git ignored files
├── modules/
│   ├── SocialNetwork.js       # Main social network class
│   └── Individual.js          # Class representing individuals
└── __test__/
    └── SocialNetwork.test.js  # Test suite
```

---

## 🔗 Demo

### Option 1: Run Locally

```bash
# Clone and setup
git clone https://github.com/davgar2023/social-network.git
cd social-network
npm install

# Run the example
node index.js
```

### Option 2: Online Visualization

You can interact with the code on platforms like:

- **[RunKit](https://runkit.com)** - Run Node.js code online
- **[Replit](https://replit.com)** - Create a forked project of the repository
- **[CodeSandbox](https://codesandbox.io)** - Interactive development environment

### Option 3: Interactive Playground

For a complete interactive experience, use:
```bash
node -i -e "const SocialNetwork = require('./modules/SocialNetwork'); const network = new SocialNetwork();"
```

Then in the Node REPL:
```javascript
network.addIndividual('1', 'Alice');
network.addIndividual('2', 'Bob');
network.addFriendship('1', '2');
network.calculateDegreeOfSeparation('1', '2'); // Returns: 1
```

### Quick Test without Installation

Visit any Node.js playground and paste the code from the [Examples](#examples) section above.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create a branch** for your feature (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass (`npm test`)

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for more details.

```
MIT License

Copyright (c) 2024 davgar2023

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👤 Author

**David García** (davgar2023)

- 🐙 GitHub: [@davgar2023](https://github.com/davgar2023)
- 📧 Contact via GitHub

---

## 📞 Support

If you have questions or encounter issues, please:

1. Check [existing Issues](https://github.com/davgar2023/social-network/issues)
2. [Create a new Issue](https://github.com/davgar2023/social-network/issues/new) with a detailed description
3. Include code examples if possible

---

## 🗺️ Future Roadmap

- [ ] Web Interface (React)
- [ ] REST API with Express
- [ ] Database Integration (MongoDB)
- [ ] Network Visualization (D3.js)
- [ ] Alternative Path Search
- [ ] Community Analysis
- [ ] Centrality Metrics
- [ ] GraphQL API

---

## ⭐ If this project was helpful, consider giving it a star!

**[⬆ Back to top](#social-network-data-structure-)**
