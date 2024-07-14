import { ConnectKitButton } from "connectkit";
import LangSelector from "./LangSelector";

function Header(props) {
    return (
        <header className="relative h-[60px]">
            <nav className="fixed w-full z-[2] h-[60px]">
                <div className="container w-[80%] my-0 mx-auto">
                    <div className="header-content flex justify-between items-center pr-[6px]">
                        <div className="header__logo font-extrabold text-[34px] text-transparent bg-clip-text bg-gradient-logo">
                            Faucety
                        </div>
                        <div className="flex justify-between">
                            <ConnectKitButton />
                            <LangSelector />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
