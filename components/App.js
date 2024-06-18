"use client";
import Header from "@/components/Header";
import Main from "@/components/Main";

const App = () => {
    return (
        <>
            <div className="page flex flex-col bg-[#1E1E1E] min-h-[100dvh] pt-[20px]">
                <Header />
                <Main />
            </div>
        </>
    );
};

export default App;
