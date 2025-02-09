import { useState } from 'react';
import {useAccount,useEnsName,useDisconnect} from 'wagmi';

const LandingPage = () => {
    // const {...a} = useAccount();
    // address : undefined
    // addresses:undefined 
    // chain:undefined
    // chainId: undefined
    // connector: undefined
    // isConnected:false
    // isConnecting:true
    // isDisconnected:false
    // isReconnecting:false
    // status:"connecting"
    // console.log(a);

    const [count , setCount] = useState(0);
    const {address} = useAccount();
    // console.log(address);
    // console.log(isConnected);
    const {data,error,status} = useEnsName({address});
    const {disconnect} = useDisconnect();
    console.log("ENS data : ",data);
    if(status == 'pending') return <div>Loading ENS name</div>
    if(status == 'error') return <div>Error while fetching ENS name : {error.message}</div>
  return (
    <>
    <div>Address : {address}</div>
    <div>ENS name : {data} </div>
    <button onClick={()=>disconnect()}>Disconnect</button>
    <button onClick={()=>setCount(count+1)}>Count +1</button>
    <div>{count}</div>
    </>
  )
}

export default LandingPage