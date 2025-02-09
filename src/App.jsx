import {WagmiProvider} from 'wagmi';
import {config} from "./utils/config.js";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
// import LandingPage from './pages/LandingPage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletConnect from './pages/WalletConnect';
const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <Router> */}
          {/* <Routes> */}
            {/* <Route path='/' element={<WalletConnect/>}/> */}
            {/* <Route path='/page' element={<LandingPage/>}/> */}
          {/* </Routes> */}
        {/* </Router> */}
        <WalletConnect/>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App