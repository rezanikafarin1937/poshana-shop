"use client";
import { useRouter } from "next/navigation";
import styles from "./avatar.module.scss";
import { IUsagesProps } from "../fetch-usage/fetchUsage";

const Avatar = (data: IUsagesProps) => {
  const router = useRouter();
  console.log("data avatar = ", data);
  const handleClick = (title : string) => {
    router.push(`/usage?title=${title}`);
  }
  return (
    <div className={styles.parent}>
      <div className={styles.parent__avatar} onClick={() => handleClick(data.title)}>
        <img src={`/usage/${data.image}`} alt="سایت پوشاک" />
      </div>
      <p>{data.title}</p>
    </div>
  );
};

export default Avatar;

