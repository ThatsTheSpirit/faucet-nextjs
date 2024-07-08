import { Contract } from "ethers";
import CONFIG from "@/config/config";
import chainToAddress from "./addresses";
import abi from "./abi";
import browserProvider from "./providers/browserProvider";

async function getContractWithSigner() {
    const signer = await browserProvider?.getSigner();
    return new Contract(chainToAddress[CONFIG.NETWORK], abi, signer);
}

export default getContractWithSigner;
