import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

import "./App.css";

// Request Airdrop Component import
import { RequestAirdrop } from "./RequestAirdrop";

// Show Solana balance component import
import { ShowSolBalance } from "./ShowSolBalance";
import { SendTokens } from "./SendToken";
import { SignMessage } from "./SignMessage";

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="flex flex-col items-center justify-center">
            <ShowSolBalance />
            <WalletMultiButton />
            <RequestAirdrop />
            <SendTokens />
            <SignMessage />
          </div>

          <div>
            <my-widget project-id="1"></my-widget>
            <script src="http://localhost:5173/widget.umd.js"></script>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
