import { Contract } from "ethers";
import { CONFIG } from "@/config/config";
import chainToAddress from "./addresses";
import abi from "./abi";

export const contract = new Contract(chainToAddress[CONFIG.NETWORK], abi);
