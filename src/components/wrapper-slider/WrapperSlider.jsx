import styles from "./wrapperslider.module.scss";

/**
 * @param {Object} props
 * @param {string | null} [props.bgColor]
 * @param {string | null} [props.textColor]
 * @param {string} [props.title]
 * @param {string} [props.btnTitle]
 * @param {import("react").ReactNode} [props.children]
 */
const WrapperSlider = ({
  bgColor = null,
  textColor = null,
  title = "",
  btnTitle = "",
  children,
}) => {
  const headerStyle = bgColor
    ? {
        backgroundColor: bgColor,
        color: textColor || undefined,
      }
    : {};

  const arrowStyle = bgColor && textColor ? { borderColor: textColor } : {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__header} style={headerStyle}>
        <span className={styles.wrapper__title}>{title}</span>

        <span className={styles.wrapper__btnTitle}>
          <div className={styles.wrapper__arrow} style={arrowStyle}></div>
          <span style={{ margin: "0 .25rem" }}></span>
          {btnTitle}
        </span>
      </div>

      <div className={styles.wrapper__content}>{children}</div>
    </div>
  );
};

export default WrapperSlider;
