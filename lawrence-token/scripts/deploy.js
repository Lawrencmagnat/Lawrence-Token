const hre = require("hardhat");

async function main() {
  const LawrenceToken = await ethers.getContractFactory("LawrenceToken");
  const lawrenceToken = await LawrenceToken.deploy(100000000, 1000); // deploy with cap of 100000000 and block reward of 1000
  await lawrenceToken.deployed();
  console.log("LawrenceToken deployed to:", lawrenceToken.address);

  // set a gas limit when calling the setBlockReward function
  const tx = await lawrenceToken.setBlockReward(2000, { gasLimit: 1000000 });
  console.log("setBlockReward transaction hash:", tx.hash);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
