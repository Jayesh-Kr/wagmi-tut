import {useConnect,useDisconnect} from 'wagmi';
const WalletConnect = () => {

    const {connectors,connect} = useConnect();
    console.log(connectors);
    const {disconnect} = useDisconnect();

  return (
    <>
   {connectors.map((connector) => {
    <button key={connector?.uid} onClick={()=>connect({connector})}>
        {connector?.name}
    </button>
  })}
  <button onClick={()=>disconnect()}>Disconnect</button>
  </>
)
}

export default WalletConnect