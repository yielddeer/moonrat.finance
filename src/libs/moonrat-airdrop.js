export const MoonRatAirdrop = {
    address: process.env.VUE_APP_AIRDROP_CONTRACT_ADDRESS,
    jsonInterface: require('../assets/contracts/MoonRatAirdrop.json')
}

export const getAirdropContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        MoonRatAirdrop.jsonInterface.abi,
        MoonRatAirdrop.address,
        {
            gas: 100000,
            from: accounts[0]
        }
    );
}

export const claimAirdrop = async (web3Client) => {
    const contract = await getAirdropContract(web3Client);
    await contract.methods.requestTokens().send({
        value: web3Client.web3.utils.toWei('0.003', 'ether')
    });
}

export const adjustParams = async (web3Client) => {
    const contract = await getAirdropContract(web3Client);
    await contract.methods.setClaimableAmount(888).send();
    await contract.methods.setNextPeriodWaitTime(60*60*24).send();
}

export const getParticipantStatus = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getAirdropContract(web3Client);
    const result = await contract.methods.participantWaitTimeOf(accounts[0]).call();
    return {participantStatus: result};
}
