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
        <div className=" flex items-center justify-center h-20 text-center mt-12 text-3xl font-bold">
         <div className="border-solid border-2 border-sky-500 p-5 rounded-xl">
         <h3>SOL Balance <div id="balance"></div> </h3> 
         </div>
        </div>
    )
}
