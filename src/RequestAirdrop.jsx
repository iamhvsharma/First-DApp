import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";


export function RequestAirdrop() {
    const wallet = useWallet()
    const { connection } = useConnection()

    function requestAirdrop(){
       const publicKey = wallet.publicKey;
       const amount = document.getElementById("amount").value;
       connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL )
    }


    return <div className="mt-3 border-solid border-2 border-sky-500 p-3 rounded-xl" >
        <input className="px-2 py-2 rounded-xl font-semibold" id="amount" type="text" placeholder="Amount" />
        <button className="bg-[#0EA5E9] px-3 py-2 rounded-xl font-semibold hover:bg-[#236d8f] " onClick={requestAirdrop}>Request Airdrop</button>
        {/* {wallet.publicKey?.toBase58()} */}
    </div>
}