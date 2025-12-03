import styles from "./avatar.module.scss";
import { IUsagesProps } from "../fetch-usage/fetchUsage";

const Avatar = (data: IUsagesProps) => {
  console.log("data avatar = ", data);
  return (
    <div className={styles.parent}>
      <div className={styles.parent__avatar}>
        <img src={`/usage/${data.image}`} alt="سایت پوشاک" />
      </div>
      <p>{data.title}</p>
    </div>
  );
};

export default Avatar;

// import styles from './avatar.module.scss'
// import { IUsagesProps } from '../fetch-usage/fetchUsage'

// const Avatar = ({ data }: IUsagesProps) => {
//   return (
//     <div className={styles.avatar}>
//       <img src={`/uploads/${data.image}`} alt="سایت پوشاک" />
//     </div>
//   )
// }

// export default Avatar
