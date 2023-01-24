import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.tableHead}>
                <tr className={css.tableRow}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id} className={css.tableRow}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                        </tr> 
                    )
                })}
            </tbody>
        </table>
    )
}