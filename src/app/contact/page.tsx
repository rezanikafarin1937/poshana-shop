"use client";

import { useState, type FormEvent } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa6";

import styles from "./contact.module.scss";

const contactItems = [
  {
    id: "phone",
    title: "شماره تماس",
    value: "شماره تماس فروشگاه",
    icon: FaPhone,
  },
  {
    id: "email",
    title: "پست الکترونیکی",
    value: "info@poshana.ir",
    icon: FaEnvelope,
  },
  {
    id: "address",
    title: "آدرس فروشگاه",
    value: "آدرس فروشگاه خود را وارد کنید",
    icon: FaLocationDot,
  },
  {
    id: "hours",
    title: "ساعات پاسخگویی",
    value: "شنبه تا پنجشنبه، ۹ الی ۱۸",
    icon: FaClock,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // در این قسمت بعداً درخواست ارسال اطلاعات به API قرار می‌گیرد.
    setSubmitted(true);
  };

  return (
    <main className={styles.contactPage} dir="rtl">
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <span className={styles.headerLabel}>POSHANA STORE</span>

        <h1>با ما در ارتباط باشید</h1>

        <p>
          سوالی دارید یا به راهنمایی بیشتری نیاز دارید؟
          <br />
          ما همیشه آماده پاسخگویی به شما هستیم.
        </p>
      </section>

      {/* Contact Content */}
      <section className={styles.contactWrapper}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <div className={styles.infoHeading}>
            <h2>راه‌های ارتباطی</h2>
            <p>
              از طریق راه‌های زیر می‌توانید با فروشگاه پوشانا در ارتباط باشید.
            </p>
          </div>

          <div className={styles.infoList}>
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div className={styles.infoItem} key={item.id}>
                  <div className={styles.infoIcon}>
                    <Icon />
                  </div>

                  <div className={styles.infoText}>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.socialBox}>
            <div>
              <h3>ما را در شبکه‌های اجتماعی دنبال کنید</h3>
              <p>از جدیدترین محصولات و تخفیف‌های پوشانا باخبر شوید.</p>
            </div>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساپ پوشانا"
              className={styles.whatsapp}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactFormBox}>
          <div className={styles.formHeading}>
            <span>CONTACT US</span>
            <h2>پیام خود را برای ما ارسال کنید</h2>
            <p>
              فرم زیر را تکمیل کنید تا در اولین فرصت با شما تماس بگیریم.
            </p>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">نام و نام خانوادگی</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">شماره موبایل</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0912xxxxxxx"
                  pattern="09[0-9]{9}"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">ایمیل (اختیاری)</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">موضوع پیام</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="موضوع پیام خود را بنویسید"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">متن پیام</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="پیام خود را اینجا بنویسید..."
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>ارسال پیام</span>
              <FaPaperPlane />
            </button>

            {submitted && (
              <p className={styles.formNotice} role="status">
                فرم از نظر ظاهری آماده است؛ برای ارسال واقعی پیام باید آن را
                به API متصل کنیم.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Bottom Message */}
      <section className={styles.bottomMessage}>
        <h2>پوشانا، همراه انتخاب‌های زیبای شما</h2>
        <p>
          رضایت شما، انگیزه ما برای ارائه محصولات بهتر و خدمات باکیفیت‌تر است.
        </p>
      </section>
    </main>
  );
}