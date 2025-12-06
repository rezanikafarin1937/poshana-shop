import styles from './good-news.module.scss'

type TitleProps = {
  title : string
  color ?: string
}

const GoodNews = ({title, color} : TitleProps) => {
  return (
    <div className={styles.parent} style={{ color : `${color}`}}>
      <h2 className={styles.parent__title}>{title}</h2>
    </div>
  )
}

export default GoodNews
