import { createContext, useEffect, useState } from "react";

const Context = createContext();

function Provider({ children }) {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const language = localStorage.getItem("lang");
        if (language) {
            setLang(language);
        }
    }, []);

    return (
        <Context.Provider value={{ lang, setLang }}>
            {children}
        </Context.Provider>
    );
}

export { Provider, Context };
