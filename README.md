# Merkle Tree Proof Project

This project was developed as part of the Ethereum Developer Bootcamp at Alchemy University. The goal was to implement a Merkle Tree-based proof system to verify membership in a predefined list (nice list) using a server-client architecture.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Implementation Details](#implementation-details)
- [Error Handling](#error-handling)
- [Lessons Learned](#lessons-learned)
- [Resources](#resources)

## Overview

The project consists of a client that sends a name and its corresponding Merkle proof to a server. The server verifies the proof against a Merkle root generated from the nice list. If the proof is valid, the server responds with a success message indicating the name is on the nice list; otherwise, it responds with a failure message.

## Project Structure

The repository is structured as follows:

- `client/`: Contains the client-side script (`index.js`) that sends the name and proof to the server.
- `server/`: Contains the server-side script (`index.js`) that verifies the proof and responds accordingly.
- `utils/`: Contains utility scripts for generating the Merkle Tree (`MerkleTree.js`), verifying proofs (`verifyProof.js`), and the nice list (`niceList.json`).

## Setup and Installation

1. **Clone the repository**:
   ```sh
   git clone [<repository-url>](https://github.com/Chizitere01/Merkle_Tree_Project-AU-w2/)
   cd Merkle_Tree_Project-AU-w2
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## Usage

1. **Start the server**:
   ```sh
   node server/index.js
   ```

2. **Run the client**:
   ```sh
   node client/index.js
   ```

3. **Follow the prompts**:
   - The client will prompt you to enter a name to check if it's on the nice list.
   - The server will respond with whether the name is on the list or not.

## Implementation Details

### Client

The client script (`client/index.js`) performs the following tasks:

1. Loads the nice list and constructs a Merkle Tree from it.
2. Prompts the user to input a name.
3. Finds the index of the name in the nice list and generates a proof.
4. Sends an HTTP request to the server with the name and the proof.
5. Prints the server's response.

### Server

The server script (`server/index.js`) performs the following tasks:

1. Creates a Merkle Tree from the nice list and gets the root.
2. Verifies incoming requests by checking the proof against the Merkle root.
3. Responds with a message indicating whether the name is on the nice list.

### Utilities

- `MerkleTree.js`: Contains the implementation of the Merkle Tree, including functions to generate the tree, get the root, and generate proofs.
- `verifyProof.js`: Contains the function to verify proofs against the Merkle root.
- `niceList.json`: A JSON file containing the list of names on the nice list.

## Error Handling

Throughout the project, robust error handling is implemented to ensure that invalid requests or unexpected issues are gracefully managed. For detailed implementation of error handling, refer to the respective scripts (`client/index.js` and `server/index.js`).

## Lessons Learned

1. **Understanding Merkle Trees**: Implemented Merkle Trees for efficient data verification.
2. **Server-Client Architecture**: Established communication using Express.js and Axios.
3. **Error Handling**: Managed errors effectively in JavaScript applications.
4. **Cryptographic Concepts**: Utilized cryptographic libraries for hashing and verification.

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [axios Documentation](https://axios-http.com/)
- [ethereum-cryptography Documentation](https://www.npmjs.com/package/ethereum-cryptography)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Merkle Trees Explained](https://brilliant.org/wiki/merkle-tree/)

