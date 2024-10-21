import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import React from "react";

export function SignMessage() {
  const { publicKey, signMessage } = useWallet();

  async function onClick() {
    if (!publicKey) throw new Error("Wallet not connected!");
    if (!signMessage)throw new Error("Wallet does not support message signing!");
    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);
    console.log(signature);
    

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Message signature invalid!");
    alert("success", `Message signature: ${bs58.encode(signature)}`);
  }

  return (
    <div className="mb-10 border-solid border-2 border-sky-500 p-2 rounded-xl mt-3">
      
      <input className="px-2 py-1 m-4 rounded-xl font-semibold" type="text" id="message" placeholder="Message" />
      <button className="bg-[#0EA5E9] px-2 py-1 rounded-xl font-semibold hover:bg-[#236d8f]" onClick={onClick}>Sign Message</button>
    </div>
  );
}
