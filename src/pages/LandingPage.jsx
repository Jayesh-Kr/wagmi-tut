import {useAccount,useEnsName,} from 'wagmi';

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


    const {address,isConnected} = useAccount();
    console.log(address);
    console.log(isConnected);
    const {data,error,status} = useEnsName({address});
    
    if(status == 'pending') return <div>Loading ENS name</div>
    if(status == 'error') return <div>Error while fetching ENS name : {error.message}</div>
  return (
    <div>ENS name : {data} </div>
  )
}

export default LandingPage