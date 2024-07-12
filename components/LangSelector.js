import { useContext, useMemo, useRef } from "react";
import { Context } from "./Provider";
import texts from "@/texts/texts.json";
import { Select, Avatar, SelectItem } from "@nextui-org/react";

function LangSelector() {
    const { lang, setLang } = useContext(Context);

    function selectHandler(e) {
        const selectedLang = e.target.value;
        setLang(selectedLang);
        localStorage.setItem("lang", e.target.value);
    }

    return (
        <Select
            className="w-[160px] ml-[15px] text-[17px] dark"
            onChange={selectHandler}
            size="40px"
            color="default"
            labelPlacement="inside"
            placeholder="Select lang"
        >
            {Object.entries(texts).map(([langvalue, langTitle]) => (
                <SelectItem
                    key={langvalue}
                    value={langvalue}
                    startContent={
                        <Avatar
                            alt={langTitle.selector}
                            className="w-7 h-6"
                            src={`https://flagcdn.com/${langvalue}.svg`}
                        />
                    }
                >
                    {langTitle.selector}
                </SelectItem>
            ))}
        </Select>
    );
}

export default LangSelector;
