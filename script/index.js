import contractABI from './contractABI.js';
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
const contractAddress = "0x234689392a3b1ed77Ad3efb889Ebe6F1FA77Bb98";
const provider = await detectEthereumProvider();
let web3 = new Web3(provider);
let contract = new web3.eth.Contract(contractABI , contractAddress);

console.log("Hello world...");

async function connectWallet() {
  if (provider) {
    const accounts = await provider
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      if (err.code === 4001) {
        console.log("Please connect to MetaMask.")
      } else {
        console.error(err)
      }
    });
    console.log(accounts[0]);
    return accounts[0];
  } else {
    console.error("No web3 provider detected");
  }
}


const displayTweets = async (userAddress) => {
    let tweets = [];
    tweets = await contract.methods.getAllTweets(userAddress).call();
    console.log([...tweets]);
}

const callFunction = async () => {
    const address = await connectWallet();
    await displayTweets(address);
}

callFunction().then(()=>console.log("Function is called. Process started.....")).catch((err)=>console.log(err));