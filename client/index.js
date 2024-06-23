const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");
const prompt = require("prompt-sync")();

const serverUrl = "http://localhost:1225";

async function main() {
  // Create the Merkle tree and get the root.
  const merkleTree = new MerkleTree(niceList);
  const root = merkleTree.getRoot(); // console.log the root to check if necessary
  console.log("Merkle Root:", root);

  // Ask user input to get the name which will be searched and be sure it is not null.
  const name = prompt("Which name do you want to check? ").trim();
  if (!name) {
    console.error("You have to type a name");
    return;
  }

  // Find the index of the name and get proof from the Merkle tree.
  const index = niceList.findIndex((n) => n === name);
  if (index === -1) {
    console.error("Name not found in the nice list");
    return;
  }

  const proof = merkleTree.getProof(index);

  try {
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      name,
      proof,
    });

    console.log({ gift });
  } catch (error) {
    console.error("Error fetching gift:", error);
  }
}

main();
