import contractABI from './abi.json';
const contractAddress = "0x234689392a3b1ed77Ad3efb889Ebe6F1FA77Bb98";

let web3 = new Web3(window.ethereum);
let contract = new web3.eth.Contract(contractABI , contractAddress);

async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        if (err.code === 4001) {
          console.log("Please connect to MetaMask.")
        } else {
          console.error(err)
        }
      })
      document.getElementById("connectWalletBtn").innerHTML = "Wallet Connected";
      document.getElementById("address").innerHTML = accounts[0];
      console.log(accounts[0]);
    } else {
      console.error("No web3 provider detected");
    }
  }

  async function displayTweets() {
    let tweets=[];
    const userAddress = document.getElementById("address").innerText;
    console.log(userAddress);
    tweets = await contract.methods.getAllTweets(userAddress).call();
    console.log([...tweets]);
  }