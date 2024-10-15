import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {

    const { connection }  = useConnection();
    const wallet = useWallet();
    const publicKey = wallet.publicKey;

    async function getBalance(){
        if(wallet.publicKey){
            const balance = await connection.getBalance(publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL
        }
    }

    getBalance();

    return (
        <div>
         <h3>SOL Balance: <div id="balance"></div> </h3> 
        </div>
    )
}
