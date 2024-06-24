const hre = require("hardhat");

async function main() {
    // Get the contract factory
    const Payment = await hre.ethers.getContractFactory("Payment");
    
    // Deploy the contract
    const payment = await Payment.deploy();

    // Wait for the contract to be deployed
    await payment.waitForDeployment();

    // Get the contract address
    const contractAddress = await payment.getAddress();

    // Log the address to the console
    console.log("Payment deployed to:", contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
