import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'

// Request Airdrop Component import
import { RequestAirdrop } from './RequestAirdrop';

// Show Solana balance component import
import { ShowSolBalance } from './ShowSolBalance'
import { SendTokens } from './SendToken';

function App() {

  
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  


  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div>
            <ShowSolBalance />
            <WalletMultiButton />
            <RequestAirdrop />
            <SendTokens />
          </div>
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}

export default App
