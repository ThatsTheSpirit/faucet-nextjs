import { AlchemyProvider } from "ethers";
import CONFIG from "@/config/config";

const defaultProvider = new AlchemyProvider(CONFIG.NETWORK, CONFIG.ALCHEMY_ID);

export default defaultProvider;
