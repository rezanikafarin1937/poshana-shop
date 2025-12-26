import HomeDelivery from '@/components/icons/HomeDelivery';
import Payment from '@/components/icons/Payment';
import ReturnProduct from '@/components/icons/ReturnProduct';
import Support from '@/components/icons/Support';
import styles from './guarantee.module.scss';
const Guarantee = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.parent__item}>
        <div className={styles.parent__icon}>
            <HomeDelivery color="var(--active-text)"/>
        </div>
        <p>تحویل درب منزل</p>
      </div>
      <div className={styles.parent__item}>
        <div className={styles.parent__icon}>
            <Payment color="var(--active-text)"/>
        </div>
        <p>امکان پرداخت در محل</p>
      </div>
      <div className={styles.parent__item}>
        <div className={styles.parent__icon}>
            <ReturnProduct color="var(--active-text)"/>
        </div>
        <p>ضمانت بازگشت کالا</p>
      </div>
      <div className={styles.parent__item}>
        <div className={styles.parent__icon}>
            <Support color="var(--active-text)"/>
        </div>
        <p>پشتیبانی آنلاین و تلفنی</p>
      </div>
    </div>
  )
 }

export default Guarantee
