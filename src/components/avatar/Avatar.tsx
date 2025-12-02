import React from 'react'
import styles from './avatar.module.scss'

type AvatarProps = {
  image: string;
};

const Avatar = ({ image }: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      <img src={`/uploads/${image}`} alt="سایت پوشاک" />
    </div>
  )
}

export default Avatar
