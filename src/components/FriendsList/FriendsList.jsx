import css from "./FriendsList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
