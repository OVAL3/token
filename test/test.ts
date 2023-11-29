import { expect } from "chai";
import { ethers } from "hardhat";

describe("OVAL3", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("OVAL3");

    const initialOwner = (await ethers.getSigners())[0].address;

    const instance = await ContractFactory.deploy(initialOwner);
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("OVAL3");
  });
});
