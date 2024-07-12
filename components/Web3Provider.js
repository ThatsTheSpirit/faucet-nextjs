"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia, optimism } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import CONFIG from "@/config/config";

const appConfig = createConfig(
    getDefaultConfig({
        // Your dApps chains
        chains: [sepolia],
        transports: {
            // RPC URL for each chain
            [sepolia.id]: http(`${CONFIG.RPC_URL}${CONFIG.ALCHEMY_ID}`),
        },

        // Required API Keys
        walletConnectProjectId:
            process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,

        appName: "Faucety",

        // Optional App Info
        appDescription: "Free faucet",
        appUrl: "faucet-nextjs-bice.vercel.app", // your app's url
        appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => {
    return (
        <WagmiProvider config={appConfig}>
            <QueryClientProvider client={queryClient}>
                <ConnectKitProvider
                    theme="midnight"
                    options={{ language: "en-US" }}
                >
                    {children}
                </ConnectKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};
