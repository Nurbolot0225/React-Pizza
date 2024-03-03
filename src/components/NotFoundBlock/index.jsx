import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br/>
                Ничего не найдено :(
            </h1>
            <p className={styles.desc}>
                К сожелени данная страница отсутствует в нашем интернет-магазине
            </p>
            <button onClick={() => history.back()}>Назад</button>
        </div>
    )
}

export default NotFoundBlock
