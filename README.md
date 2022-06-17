# Polygon-NFTMinter

###  Mint a NFT on Polygon using hardhat and verify the contract on Polygonscan.

### The Asset (which is picture) is Stored to Filecoin and IPFS using NFT.Storage, which provides guarantee of immutability and durability.

- The script store-asset.mjs helps with storing the digital asset to NFT.Storage. 
- After a successful run of the script, below confirmation is displayed on the terminal:
  - Metadata stored on Filecoin and IPFS with URL: ipfs://bafyreiesbkaa4bphh3pb2qemhlupb7si457gjz4octoubqulnvejdugq34/metadata.json

### Smart contract is called Minter.sol and it is found in the contracts dir.
- The script deploy-contract.mjs helps us deploy the smart contract to mumbai(polygon testnet), 
  after running npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai. The confirmations below are both from the Polygonscan and Terminal:
  - The link to Polygonscan => https://mumbai.polygonscan.com/tx/0xf9c44eb6661bd91a7d04b911b24d4092c6a8309d813d2ff301f4f660233ac54d .
  - The confirmation from the terminal => Downloading compiler 0.8.12
                                          Compiled 13 Solidity files successfully
                                          Contract deployed to address: 0x8943c469aB4aEFdE715DdcB790dCf2Cc872BD10B

### Minting NFT
- To mint our nft we have to call the smart contract that we deployed to Polygon earlier.
- With the first 2 variables inside the mint-nft.mjs script are CONTRACT_ADDRESS and META_DATA_URL help with minting nft.
    -By running npx hardhat run scripts/mint-nft.mjs \--network PolygonMumbai, confirmation that it is minted to a specific wallet address is received:
        -NFT minted to:  0xc381Dc65A9925A96f8E2B0dFEfc61912d7C20d0E
