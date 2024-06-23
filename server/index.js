const express = require("express");
const verifyProof = require("../utils/verifyProof");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const port = 1225;

const app = express();
app.use(express.json());

// Create the Merkle tree and get the root.
const merkleTree = new MerkleTree(niceList);
const MERKLE_ROOT = merkleTree.getRoot(); // Ensure this is in hexadecimal format
console.log("Merkle Root:", MERKLE_ROOT);

app.post("/gift", (req, res) => {
  try {
    const { name, proof } = req.body;

    if (!name || !proof) {
      res.status(400).send("Invalid request: name and proof are required");
      return;
    }

    // Verify that the proof is valid and the name is in the list
    const isInTheList = verifyProof(proof, name, MERKLE_ROOT);

    if (isInTheList) {
      res.send("You got a toy robot!");
    } else {
      res.send("You are not on the list :(");
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
