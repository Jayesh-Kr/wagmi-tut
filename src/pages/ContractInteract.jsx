import {useAccount, useReadContract} from 'wagmi';
import { wagmiContractConfig } from './contracts'
const ContractInteract = () => {
    const {address} = useAccount();
    const {data,error,isPending} = useReadContract({
        ...wagmiContractConfig,
        functionName : 'getAllTweets',
        args : [address],
    });
    if(error) {
        console.log(error)
        return (
            <div>
              Error: {(error).shortMessage || error.message}
            </div>
          )
    }
    if (isPending) return <div>Loading...</div>
  return (
    <div>
        {console.log([...data])}
        {data.map((data)=>(
            <div key={data.id}>{data.tweet}</div>
        ))}
    </div>
  )
}

export default ContractInteract