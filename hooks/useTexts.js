import { Context } from "@/components/Provider";
import { useContext } from "react";
import texts from "@/texts/texts.json";

function useTexts() {
    const { lang } = useContext(Context);
    if (!texts[lang]) {
        console.error(`Language '${lang}' not found in texts`);
        localStorage.clear();
        return { lang: "us" };
    }
    return texts[lang];
}

export default useTexts;
