import {useConnect} from 'wagmi';
const WalletConnect = () => {

    const {connectors,connect} = useConnect();

  return connectors.map((connector) => {
    <button key={connector.uid} onClick={()=>connect({connector})}>
        {connector.name}
    </button>
  })
}

export default WalletConnect