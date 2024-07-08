import { useContext } from "react";
import { Context } from "./Provider";

function LangSelector({ children }) {
    const { lang, setLang } = useContext(Context);

    function selectHandler(e) {
        setLang(e.target.value);
        localStorage.setItem("lang", e.target.value);
    }

    return (
        <select
            className="p-1 rounded-md bg-[#313235] hover:bg-[#414144] shadow-lang-selector active:bg-[#4c4d4f] text-white text-[17px]"
            onChange={selectHandler}
            defaultValue="Language"
        >
            <option disabled>Language</option>
            <option value="en">English</option>
            <option value="ru">Russian</option>
        </select>
    );
}

export default LangSelector;
