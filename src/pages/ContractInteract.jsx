import { useReadContract, useAccount } from 'wagmi';
import { wagmiContractConfig } from './contracts';

const ContractInteract = () => {
    const { address } = useAccount();

    // Fetch all tweets first
    const { data: allTweets } = useReadContract({
        ...wagmiContractConfig,
        functionName: 'getAllTweets',
        args: [address],
    });
    // Fetch single tweet only if tweets exist
    const { data, error, isPending } = useReadContract({
        ...wagmiContractConfig,
        functionName: 'getTweet',
        args: [BigInt(0)],
        enabled: allTweets && allTweets.length > 0, // Prevents calling if no tweets
    });

    if (error) {
        console.log(error);
        return <div>Error: {error.shortMessage || error.message}</div>;
    }
    if (isPending) return <div>Loading...</div>;

    return (
        <div>
            {console.log([...allTweets])}
            {data ? (
                <div>Tweet: {data.tweet}</div>
            ) : (
                <div>No tweets found.</div>
            )}
        </div>
    );
};

export default ContractInteract;
