"use client";
function Transaction({ address = "", date = "", amount = "", status = "" }) {
    return (
        <div className="row text-center flex justify-around items-center w-full h-[63px] backdrop:blur-[56px] shadow-sh-primary bg-[#242425] first:rounded-t-lg first:bg-[#181e29] first:text-[15px] first:text-[#c9ced6] first:font-bold first:backdrop:blur-[28px]">
            <div className="address w-[33%] font-light text-center text-[14px] text-[#c9ced6]">
                {address}
            </div>
            <div className="date font-light text-center text-[14px] text-[#c9ced6] w-[20%]">
                {date}
            </div>
            <div className="amount font-light text-center text-[14px] text-[#c9ced6] w-[20%]">
                {amount}
            </div>
            <div className="status w-[10%] ">{status}</div>
        </div>
    );
}

export default Transaction;
