import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export function SendTokens() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amt").value;
        console.log(to, amount);
        
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return <div className="flex flex-col mt-3 gap-3 border-solid border-2 border-sky-500 p-5 rounded-xl">
        <input className="px-2 py-1  rounded-xl font-semibold" id="to" type="text" placeholder="To" />
        <input className="px-2 py-1 rounded-xl font-semibold" id="amt" type="text" placeholder="Amount" />
        <button className="bg-[#0EA5E9] px-2 py-1 rounded-xl font-semibold hover:bg-[#236d8f]" onClick={sendTokens}>Send</button>
    </div>
}