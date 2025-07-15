import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import styles from "./UsersList.module.css";

export const UsersList = () => {
  // custom hook
  const { users, loading, error } = useUsers();

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.usersList}>
      <ul className={styles.list}>
        {users.map((u) => (
          // <li key={u.id}>
          //   <Link to={`/users/${u.id}`}>{u.name}</Link>
          <li key={u.id} className={styles.userItem}>
            <img
              src={u.avatar}
              alt="avatar"
              // width={"200px"}
              className={styles.avatar}
              onError={(e) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                e.target.src =
                  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg";
              }}
            />
              <Link to={`/users/${u.id}`} className={styles.name}>
              {u.name}
            </Link>
            <p className={styles.email}>{u.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
