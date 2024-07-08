import { Context } from "@/components/Provider";
import { useContext } from "react";
import texts from "@/texts/texts.json";

function useTexts() {
    const { lang } = useContext(Context);
    return texts[lang];
}

export default useTexts;
