import {
  Whatsapp,
  Instagram,
  Telegram,
  Linkdin,
  Pintrest,
  Twitter,
} from "@/icons";

import Link from "next/link";
import { publicPath } from "@/utils/path";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__card}>
        <span>
          <h1>
            <span>
              <strong className={styles.footer__title}>سایت لباس پوشانا</strong>
            </span>
          </h1>
          <p>
            <span>
              فروشگاه لباس پوشانا اراک مجموعه ای کامل و جامع&nbsp;برای خرید
              انواع لباس راحتی، بیرونی و لباس زمستانه و
              تابستانه&nbsp;زنانه،&nbsp;مردانه و بچگانه.&nbsp;پوشانا از اولین و
              خوش نام ترین وب سایت‌های فروشگاهی لباس در اراک و البته کشور است که
              با هدف عرضه لباس باکیفیت و قیمت مناسب فعالیت می‌کند و با
              نام&nbsp;فروشگاه اینترنتی لباس ارزان&nbsp;در بین مشتریان خود
              شناخته می‌شود.
            </span>
          </p>
        </span>

        <div className={styles.footer__address}>
          <div className={styles.footer__enamad}>
            <img
              src={publicPath("/enamad/footer-post.png")}
              alt=""
              className="w-full h-full object-cover obje"
            />
          </div>

          <div className={styles.footer__enamad}>
            <img
              src={publicPath("/enamad/enamad.png")}
              alt=""
              className="w-full h-full object-cover obje"
            />
          </div>

          <div className={styles.footer__enamad}>
            <img
              src={publicPath("/enamad/footer-parsian.png")}
              alt=""
              className="w-full h-full object-cover obje"
            />
          </div>
        </div>
      </div>

      <div className={styles.footer__card}>
        <div className={styles.footer__location}>
          <div className="flex flex-col items-center">
            <img src={publicPath("/location/Location.png")} alt="" />
            <div className="text-[1.25rem] text-center mt-4">
              مرکزی ، اراک ، بین اردیبهشت و خرداد شرقی
            </div>
            <p className="dir-rtl">
              فروشگاه لباس پوشانا در قلب شهر اراک واقع شده است و به راحتی قابل
              دسترسی از تمام نقاط شهری می‌باشد.
            </p>
          </div>
        </div>

        <div className={styles.footer__address}>
          <div>
            <img src={publicPath("/location/waze.png")} alt="" />
          </div>
          <div>
            <img src={publicPath("/location/google-map.png")} alt="" />
          </div>
          <div>
            <img src={publicPath("/location/neshan.png")} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.footer__card}>
        <div className={styles.footer__location}>
          <div>
            <div className="flex flex-col items-center">
              <img src={publicPath("/location/Calling.png")} alt="" />
              <div className="text-[1.25rem] text-center mt-4">
                تلفن پشتیبانی
              </div>
              <div className="font-bold m-0 text-xl text-[var(--active-text)]">
                01791013704
              </div>
              <p>
                در صورت هر گونه مشکل یا سوال، لطفاً با شماره بالا تماس بگیرید.
                تیم پشتیبانی ما آماده پاسخگویی به شماست.
              </p>
              <div className={styles.footer__link}>
                <Link href="/contact">تماس با ما</Link>
              </div>
            </div>
          </div>
        </div>
        <div>ساعات پاسخگویی 8 صبح </div>
      </div>

      <div className={styles.footer__card}>
        <div className="flex flex-col mr-[2rem]" dir="rtl">
          <div className={styles.footer__title}>
            <strong>پشتیبانی</strong>
          </div>
          <ul className="text-right text-[14px] mt-[1rem] list-disc">
            <li className="cursor-pointer">
              <Link href="/contact">تماس با ما</Link>
            </li>
            <li className="cursor-pointer">سوالات متداول</li>
            <li className="cursor-pointer">گزارش خطای فنی</li>
            <li className="cursor-pointer">پیگیری سفارش ها</li>
            <li className="cursor-pointer">پیشنهاد امکانات جدید</li>
          </ul>
        </div>
        <p className="text-xl text-[var(--active-text)] text-center w-full flex justify-center">
          منتظر پیشنهادات و انتقادات شما هستیم
        </p>
      </div>

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

      {/* copy right */}
      <div className={styles.footer__copy}>
        <p>©️ تمامی حقوق متعلق به فروشگاه پوشانا است.</p>
      </div>
    </div>
  );
};

export default Footer;
