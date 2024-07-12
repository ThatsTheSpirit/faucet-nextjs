"use client";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Provider } from "./Provider";
import { NextUIProvider } from "@nextui-org/react";

const App = () => {
    return (
        <>
            <NextUIProvider disableAnimation>
                <Provider>
                    <div className="page flex flex-col bg-[#1E1E1E] min-h-[100dvh] pt-[20px]">
                        <Header />
                        <Main />
                    </div>
                </Provider>
            </NextUIProvider>
        </>
    );
};

export default App;
