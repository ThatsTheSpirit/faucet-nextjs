"use client";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useAccount, useAccountEffect, useSwitchAccount } from "wagmi";
import { getContractWithSigner } from "@/contract/getContractWithSigner";
import Transaction from "@/components/Transaction";

function Main() {
    const { address } = useAccount();
    const [receiverAddress, setReceiverAddress] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [faucetContract, setFaucetContract] = useState();
    // const {} = useSwitchAccount()

    useEffect(() => {
        (async () => {
            const contract = await getContractWithSigner();
            setFaucetContract(contract);
        })();
    }, [address]);

    useAccountEffect({
        onConnect(data) {
            console.log("Connected!", data.address);
            setDisabled(false);
        },
        onDisconnect() {
            setDisabled(true);
        },
    });

    // faucetContract?.on("Request", (e, data) => {
    //     console.log(e, data);
    // });

    function handleAddress(e) {
        setReceiverAddress(e.target.value);
    }

    async function handleBtnClick() {
        if (ethers.isAddress(receiverAddress)) {
            setDisabled(true);
            try {
                console.log("Ждем выполнение транзакции..");
                const tx = await faucetContract?.getTokens();
                console.log(tx);
                const receipt = await tx.wait();
                console.log("Успешно", receipt);
            } catch (e) {
                console.error(faucetContract.interface.parseError(e.data));
            } finally {
                setDisabled(false);
            }
        } else {
            alert("Wrong address!");
        }
    }

    return (
        <main className="mt-[130px]">
            <div className="container w-[80%] my-0 mx-auto">
                <div className="upper my-0 mx-auto w-[66%]">
                    <h1 className="upper__title text-[60px] text-center my-0 mx-auto leading-[133%] font-extrabold text-transparent bg-clip-text bg-gradient-logo">
                        Get testnet tokens :&#41;
                    </h1>
                    <p className="upper__desc mt-[20px] mx-auto mb-0 w-[57.5%] font-light text-[16px] text-center leading-[147%] text-[#c9ced6]">
                        Faucety is an efficient and easy-to-use testnet faucet
                        service that allows you to claim free tokens.
                    </p>
                    <div className="send-data mt-[46px] mx-auto mb-0 w-[60%] h-[63px] flex justify-between items-center">
                        <input
                            className="send-data__address disabled:text-gray-400 text-white px-[20px] border-solid border-[4px] border-[#353c4a] rounded-[48px] shadow-sh-primary bg-[#181e29] h-[100%] w-[68%]"
                            type="text"
                            name=""
                            id=""
                            required
                            placeholder="Type your address here..."
                            onChange={handleAddress}
                            value={receiverAddress}
                        />
                        <button
                            className="border-1 border-solid border-[#144ee3] w-[178px] h-[60px] bg-[#144ee3] active:bg-red-500 disabled:bg-gray-400 rounded-[48px] font-semibold text-center text-[16px] text-white cursor-pointer shadow-btn-primary"
                            type="submit"
                            onClick={handleBtnClick}
                            disabled={disabled}
                        >
                            Get tokens
                        </button>
                    </div>
                </div>
                <div className="transactions mt-[127px]">
                    <Transaction
                        address="To"
                        date="Date"
                        amount="Amount"
                        status="Status"
                    />
                </div>
            </div>
        </main>
    );
}

export default Main;
