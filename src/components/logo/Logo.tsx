import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.parent}>
      <img
        src="/logo/logo.png"
        alt="فروشگاه لباس و کفش"
      />
    </div>
  )
}

export default Logo
