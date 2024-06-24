import { Contract } from "ethers";
import CONFIG from "@/config/config";
import chainToAddress from "./addresses";
import abi from "./abi";
import defaultProvider from "./defaultProvider";

const contract = new Contract(
    chainToAddress[CONFIG.NETWORK],
    abi,
    defaultProvider
);
export default contract;
