const CONTRACT_ADDRESS = "0x8943c469aB4aEFdE715DdcB790dCf2Cc872BD10B"
const META_DATA_URL = "ipfs://bafyreiesbkaa4bphh3pb2qemhlupb7si457gjz4octoubqulnvejdugq34/metadata.json\n"

async function mintNFT(contractAddress, metaDataURL) {
    const Minter = await ethers.getContractFactory("Minter")
    const [owner] = await ethers.getSigners()
    await Minter.attach(contractAddress).mintNFT(owner.address, metaDataURL)
    console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)

    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });