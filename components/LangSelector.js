import { useContext, useMemo } from "react";
import { Context } from "./Provider";
import texts from "@/texts/texts.json";

function LangSelector() {
    const { lang, setLang } = useContext(Context);

    function selectHandler(e) {
        setLang(e.target.value);
        localStorage.setItem("lang", e.target.value);
    }

    return (
        <select
            className="ml-[15px] p-1 rounded-md bg-[#313235] hover:bg-[#414144] shadow-lang-selector active:bg-[#4c4d4f] text-white text-[17px]"
            onChange={selectHandler}
            defaultValue="Language"
        >
            <option disabled>Language</option>
            {Object.entries(texts).map((entry) => (
                <option value={entry[0]}>{entry[1].selector}</option>
            ))}
        </select>
    );
}

export default LangSelector;
