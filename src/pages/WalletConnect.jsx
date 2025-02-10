import { useConnect,useDisconnect } from 'wagmi'
import {useNavigate} from 'react-router-dom';
export default function WalletConnect() {
  const { connectors, connect } = useConnect()
  const {disconnect} = useDisconnect();
  const navigate = useNavigate();
  return( 
    <>
    {connectors.map((connector) => (
        <button key={connector.uid} onClick={()=> {connect({connector});console.log(connector); console.log("connected"); navigate("/page")}}>
      {connector.name}
    </button>
  ))
}
    <button onClick={()=>{disconnect();console.log("Disconnected")}} >Disconnect</button>
  </>
)
}