import { createContext } from "react";

const Context = createContext();

function Provider({ children }) {
    const lang = "en";

    return <Context.Provider value={lang}>{children}</Context.Provider>;
}

export { Provider, Context };
