import {MoonRatAirdrop} from "./moonrat-airdrop";

export const MoonRat = {
    address: process.env.VUE_APP_MOONRAT_CONTRACT_ADDRESS,
    jsonInterface: require('../assets/contracts/MoonRatToken.json')
}

export const getMoonRatContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        MoonRat.jsonInterface.abi,
        MoonRat.address,
        {
            gas: 100000,
            from: accounts[0]
        }
    );
}

export const getMoonRatAirdropBalance = async (web3Client) => {
    const contract = await getMoonRatContract(web3Client);
    const balance = await contract.methods.balanceOf(MoonRatAirdrop.address).call();
    const decimals = await contract.methods.decimals().call();
    return balance / (10 ** decimals);
};

export const getMoonRatBalance = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getMoonRatContract(web3Client);
    const balance = await contract.methods.balanceOf(accounts[0]).call();
    const decimals = await contract.methods.decimals().call();
    return balance / (10 ** decimals);
}
