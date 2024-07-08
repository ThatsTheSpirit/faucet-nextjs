import useTexts from "@/hooks/useTexts";
import { ConnectKitButton } from "connectkit";
import LangSelector from "./LangSelector";

function Header(props) {
    const { header } = useTexts();

    return (
        <header className="relative h-[60px]">
            <nav className="fixed w-full z-[2] h-[60px]">
                <div className="container w-[80%] my-0 mx-auto">
                    <div className="header-content flex justify-between items-center pr-[6px]">
                        <div className="header__logo font-extrabold text-[34px] text-transparent bg-clip-text bg-gradient-logo">
                            Faucety
                        </div>
                        <div className="flex justify-between">
                            <ConnectKitButton className="pt-50">
                                {header.connectBtn}
                            </ConnectKitButton>
                            <LangSelector className="ml-[15px]" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
