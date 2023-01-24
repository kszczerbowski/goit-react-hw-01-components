import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>
            {stats.map(stat => {
                return (
                    <li className={css.item} key={stat.id}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}> {stat.percentage}%</span>
                    </li>
                )
            })}
        </ul>
        </section>
    )
}