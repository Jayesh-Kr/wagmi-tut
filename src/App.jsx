import {WagmiProvider} from 'wagmi';
import {config} from "./utils/config.js";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletConnect from './pages/WalletConnect';
import SendTransaction from './pages/SendTransaction.jsx';
import ContractInteract from './pages/ContractInteract.jsx';
const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<WalletConnect/>}/>
            <Route path='/page' element={<LandingPage/>}/>
            <Route path='/send' element={<SendTransaction/>}/>
            <Route path='/interact' element={<ContractInteract/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App