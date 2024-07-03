import { memo } from "react";
import Transaction from "./Transaction";

const TransactionList = memo(({ transactions }) => {
    return transactions.map((data, index) => (
        <Transaction key={index} {...data} />
    ));
});

export default TransactionList;
