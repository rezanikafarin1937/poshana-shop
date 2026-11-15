
import Link from "next/link";
import styles from "./heading.module.scss";

/**
 * @param {Object} props
 * @param {string | null} [props.title]
 * @param {string | null} [props.linkTitle]
 * @param {string | null} [props.link]
 */
const Heading = ({
  title = null,
  linkTitle = null,
  link = null,
}) => {
  return (
    <div className={styles.heading}>
      {title ? <div>{title}</div> : ""}

      {linkTitle && link ? (
        <div className={styles.heading__link}>
          <Link href={link}>{linkTitle}</Link>
          <div className={styles.heading__arrow}></div>
        </div>
      ) : ""}
    </div>
  );
};

export default Heading;
