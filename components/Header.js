import { ConnectKitButton } from "connectkit";

function Header(props) {
    return (
        <header className="relative h-[60px]">
            <nav className="fixed w-full z-[2] h-[60px]">
                <div className="container w-[80%] my-0 mx-auto">
                    <div className="header-content flex justify-between items-center pr-[6px]">
                        <div className="header__logo font-extrabold text-[34px] text-transparent bg-clip-text bg-gradient-logo">
                            Faucety
                        </div>
                        {/* <button className="border-1 border-solid border-[#144ee3] w-[178px] h-[60px] bg-[#144ee3] rounded-[48px] font-semibold text-center text-[16px] text-white cursor-pointer shadow-btn-primary">
                            Connect
                        </button> */}
                        <ConnectKitButton>Connect</ConnectKitButton>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
