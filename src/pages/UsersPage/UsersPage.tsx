import { UsersList } from "../../components/UsersList/UsersList";
import styles from "./UsersPage.module.css";


export const UsersPage = () => {
  return (
    <div className={styles.container}>
      <h2>Users Page</h2>

      <UsersList />
    </div>
  );
};
