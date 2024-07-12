import { useContext, useMemo } from "react";
import { Context } from "./Provider";
import texts from "@/texts/texts.json";
import { Select, Avatar, SelectItem } from "@nextui-org/react";

function LangSelector() {
    const { lang, setLang } = useContext(Context);

    function selectHandler(e) {
        const selectedLang = e.target.value;
        console.log(`Selected language: ${selectedLang}`);
        setLang(selectedLang);
        localStorage.setItem("lang", e.target.value);
    }

    return (
        <div className="h-[10px]">
            <Select
                className="w-[160px] ml-[15px] text-[17px] dark"
                onChange={selectHandler}
                label="Select lang"
                size="sm"
                color="default"
            >
                {Object.entries(texts).map((entry) => (
                    <SelectItem
                        key={entry[0]}
                        value={entry[0]}
                        startContent={
                            <Avatar
                                alt={entry[1].selector}
                                className="w-7 h-6"
                                src={`https://flagcdn.com/${entry[0]}.svg`}
                            />
                        }
                    >
                        {entry[1].selector}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}

export default LangSelector;
