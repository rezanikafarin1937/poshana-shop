import Whatsapp from "@/components/icons/Whatsapp";
import Instagram from "@/components/icons/Instagram";
import Telegram from "@/components/icons/Telegram";
import Linkdin from "@/components/icons/Linkdin";
import Pintrest from "@/components/icons/Pintrest";
import Twitter from "@/components/icons/Twitter";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="space"></div>
      {/* icons */}
      <div className={styles.footer__icons}>
        <span className={styles.footer__icon}>
          <span className="w-[30px] h-[30px]">
            <Whatsapp color="#fff" />
          </span>
        </span>
        <span className={styles.footer__icon}>
          <span className="w-[30px] h-[30px]">
            <Instagram color="#fff" />
          </span>
        </span>
        <span className={styles.footer__icon}>
          <span className="w-[30px] h-[30px]">
            <Telegram color="#fff" />
          </span>
        </span>
        <span className={styles.footer__icon}>
          <span className="w-[30px] h-[30px]">
            <Pintrest color="#fff" />
          </span>
        </span>
        <span className={styles.footer__icon}>
          <span className="w-[30px] h-[30px]">
            <Linkdin color="#fff" />
          </span>
        </span>
        <span className={styles.footer__icon}>
          <span className="w-[30px] h-[30px]">
            <Twitter color="#fff" />
          </span>
        </span>
      </div>
      <div className="space"></div>

      <div className={styles.footer__desc}>
        <div className={styles.footer__description}>
          <h1>
            <span>
              <strong>سایت لباس پوشانا</strong>
            </span>
          </h1>
          <p>
            <span>
              فروشگاه لباس پوشانا گرگان مجموعه ای کامل و جامع&nbsp;برای خرید
              انواع لباس راحتی، بیرونی و لباس زمستانه و
              تابستانه&nbsp;زنانه،&nbsp;مردانه و بچگانه.&nbsp;پادمیرا از اولین و
              خوش نام ترین وب سایت‌های فروشگاهی لباس در اراک و البته کشور است که
              با هدف عرضه لباس باکیفیت و قیمت مناسب فعالیت می‌کند و با
              نام&nbsp;فروشگاه اینترنتی لباس ارزان&nbsp;در بین مشتریان خود
              شناخته می‌شود.
            </span>
          </p>
        </div>
      </div>

      <div className="space"></div>
      {/* links and map */}
      <div className={styles.footer__items}>
        <div className={styles.footer__item}>
          <div className={styles.footer__links}>
            <div className={styles.footer__title}>لینک های کاربردی</div>
            <div className={styles.footer__link}> خرید رایگان از پادمیرا</div>
            <div className={styles.footer__link}> اخبار پادمیرا</div>
            <div className={styles.footer__link}> پادمیرا مگ</div>
            <div className={styles.footer__link}> ورود/ثبت نام</div>
          </div>
        </div>
        <div className={styles.footer__item}>
          <div className={styles.footer__location}>
            <img src="/location/Location.png" alt="" />
            <p>گلستان ،گرگان ،گرگانپارس ، بین اردیبهشت و خرداد شرقی</p>
          </div>
          <div className={styles.footer__address}>
            <div>
              <img src="/location/waze.png" alt="" />
            </div>
            <div>
              <img src="/location/google-map.png" alt="" />
            </div>
            <div>
              <img src="/location/neshan.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__items}>
        <div className={styles.footer__item}>
          <div className={styles.footer__links}>
            <div className={styles.footer__title}>لینک های کاربردی</div>
            <div className={styles.footer__link}> خرید رایگان از پادمیرا</div>
            <div className={styles.footer__link}> اخبار پادمیرا</div>
            <div className={styles.footer__link}> پادمیرا مگ</div>
            <div className={styles.footer__link}> ورود/ثبت نام</div>
          </div>
        </div>
        <div className={styles.footer__item}>
          <div className={styles.footer__location}>
            <img src="/location/Calling.png" alt="" />
            <div>
              <p>تلفن پشتیبانی</p>
              <p>01791013704</p>
              <p>ساعات پاسخگویی 8 صبح </p>
            </div>
          </div>
          <div className={styles.footer__address}>
            <div className={styles.footer__enamad}>
              <img
                src="/enamad/footer-post.png"
                alt=""
                className="w-full h-full object-cover obje"
              />
            </div>

            <div className={styles.footer__enamad}>
              <img
                src="/enamad/enamad.png"
                alt=""
                className="w-full h-full object-cover obje"
              />
            </div>
            <div className={styles.footer__enamad}>
              <img
                src="/enamad/footer-parsian.png"
                alt=""
                className="w-full h-full object-cover obje"
              />
            </div>
          </div>
        </div>
      </div>

      {/* copy right */}
      <div className={styles.footer__copy}>
        <p>©️ تمامی حقوق متعلق به فروشگاه پوشانا است.</p>
      </div>
    </div>
  );
};

export default Footer;
