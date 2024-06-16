// import Header from "@/components/Header";
// import Main from "@/components/Main";

export default function Home() {
    return (
        <>
            <div className="page flex flex-col bg-[#1E1E1E] min-h-[100dvh] pt-[20px]">
                <header className="relative h-[60px]">
                    <nav className="fixed w-full z-[2] h-[60px]">
                        <div className="container w-[80%] my-0 mx-auto">
                            <div className="header-content flex justify-between items-center pr-[6px]">
                                <div className="header__logo font-extrabold text-[34px] text-transparent bg-clip-text bg-gradient-logo">
                                    Faucety
                                </div>
                                <button className="border-1 border-solid border-[#144ee3] w-[178px] h-[60px] bg-[#144ee3] rounded-[48px] font-semibold text-center text-[16px] text-white cursor-pointer shadow-btn-primary">
                                    Connect
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="mt-[130px]">
                    <div className="container w-[80%] my-0 mx-auto">
                        <div className="upper my-0 mx-auto w-[66%]">
                            <h1 className="upper__title text-[60px] text-center my-0 mx-auto leading-[133%] font-extrabold text-transparent bg-clip-text bg-gradient-logo">
                                Get testnet tokens :&#41;
                            </h1>
                            <p className="upper__desc mt-[20px] mx-auto mb-0 w-[57.5%] font-light text-[16px] text-center leading-[147%] text-[#c9ced6]">
                                Faucety is an efficient and easy-to-use testnet
                                faucet service that allows you to claim free
                                tokens.
                            </p>
                            <div className="send-data mt-[46px] mx-auto mb-0 w-[60%] h-[63px] flex justify-between items-center">
                                <input
                                    className="send-data__address text-white pl-[20px] border-solid border-[4px] border-[#353c4a] rounded-[48px] shadow-sh-primary bg-[#181e29] h-[100%] w-[68%]"
                                    type="text"
                                    name=""
                                    id=""
                                    required
                                    placeholder="Type your address here..."
                                />
                                <button
                                    className="border-1 border-solid border-[#144ee3] w-[178px] h-[60px] bg-[#144ee3] rounded-[48px] font-semibold text-center text-[16px] text-white cursor-pointer shadow-btn-primary"
                                    type="submit"
                                >
                                    Get tokens
                                </button>
                            </div>
                        </div>
                        <div className="transactions mt-[127px]">
                            <div className="row text-center flex justify-around items-center w-full h-[63px] backdrop:blur-[56px] shadow-sh-primary bg-[#242425] first:rounded-t-lg first:bg-[#181e29] first:text-[15px] first:text-[#c9ced6] first:font-bold first:backdrop:blur-[28px]">
                                <div className="address w-[33%] font-light text-center text-[14px] text-[#c9ced6]">
                                    To
                                </div>
                                <div className="date font-light text-center text-[14px] text-[#c9ced6] w-[20%]">
                                    Date
                                </div>
                                <div className="amount font-light text-center text-[14px] text-[#c9ced6] w-[20%]">
                                    Amount
                                </div>
                                <div className="status w-[10%] ">Status</div>
                            </div>
                            <div className="row">
                                <div className="address"></div>
                                <div className="date"></div>
                                <div className="amount"></div>
                                <div className="status"></div>
                            </div>
                            <div className="row">
                                <div className="address"></div>
                                <div className="date"></div>
                                <div className="amount"></div>
                                <div className="status"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
