import contractABI from './abi.json';
import Web3 from "https://cdnjs.cloudflare.com/ajax/libs/web3/1.6.1/web3.min.js";
import detectEthereumProvider from "https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js";
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
    })
    document.getElementById("connectWalletBtn").innerHTML = "Wallet Connected";
    setConnected(accounts[0]);
  } else {
    console.error("No web3 provider detected");
    document.getElementById("connectMessage").innerText =
      "No web3 provider detected. Please install MetaMask.";
  }
}



function shortAddress(address, startLength = 6, endLength = 4) {
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}
const displayTweets = async (userAddress) => {
    let tweets = [];
    tweets = await contract.methods.getAllTweets(userAddress).call();
    console.log([...tweets]);
}
displayTweets().then(()=>console.log("DisplayTweets called")).catch((err)=>console.log(err));

function setConnected(address) {
  document.getElementById("userAddress").innerText =
    "Connected: " + shortAddress(address);
  document.getElementById("connectMessage").style.display = "none";
  document.getElementById("tweetForm").style.display = "block";
}

document
  .getElementById("connectWalletBtn")
  .addEventListener("click", connectWallet);
