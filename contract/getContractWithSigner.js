import { Contract, BrowserProvider } from "ethers";
import CONFIG from "@/config/config";
import chainToAddress from "./addresses";
import abi from "./abi";

export async function getContractWithSigner() {
    if (
        typeof window !== "undefined" &&
        typeof window.ethereum !== "undefined"
    ) {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider?.getSigner();
        return new Contract(chainToAddress[CONFIG.NETWORK], abi, signer);
    }
}
