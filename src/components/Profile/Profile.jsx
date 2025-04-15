import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.content}>
        <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.grayText}>@{tag}</p>
        <p className={css.grayText}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css["stats-item"]}>
          <span>Followers</span>
          <span className={css["stats-counter"]}>{stats.followers}</span>
        </li>
        <li className={css["stats-item"]}>
          <span>Views</span>
          <span className={css["stats-counter"]}>{stats.views}</span>
        </li>
        <li className={css["stats-item"]}>
          <span>Likes</span>
          <span className={css["stats-counter"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
