import { Avatar } from "@material-ui/core";
import styles from '../styles/personAvatar.module.scss'
export default function PersonAvatar({ userImg, userName }) {
    console.log(userImg, userName)
    return (
        <Avatar classes={{ root: styles.personAvatar }} alt={userName} src={userImg} />
    )
}
