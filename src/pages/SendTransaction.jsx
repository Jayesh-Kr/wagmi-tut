import { useRef } from "react";
import {useAccount, useBalance, useSendTransaction} from 'wagmi';
import {parseEther} from 'viem';

const SendTransaction = () => {
    const addressRef = useRef("");
    const valueRef = useRef(0);
    const handleSubmit = () => {
        const receiverAddress = addressRef.current.value;
        const amount = valueRef.current.value;
        console.log(parseEther(amount));
        sendTransaction({to:receiverAddress , value: parseEther(amount)});
    }
    const {data:hash , sendTransaction} = useSendTransaction();
    const {address} = useAccount();
    const balance = useBalance({address,unit:"ether"});
    // console.log({...balance});
  return (
    <div>
        <input ref={addressRef} type="text" />
        <input ref={valueRef} type="number" />
        <button onClick={handleSubmit}>Submit</button>
        <div>Balance : {balance.data?.formatted}</div>
        {hash && <div>Transaction hash : {hash}</div> }
    </div>
  )
}

export default SendTransaction