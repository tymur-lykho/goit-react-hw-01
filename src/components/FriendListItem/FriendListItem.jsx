import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.isOnline : css.status}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
