import {WagmiProvider} from 'wagmi';
import { config } from './utils/config';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import LandingPage from './pages/LandingPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <LandingPage/>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App