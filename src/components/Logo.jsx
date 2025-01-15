<<<<<<< HEAD
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
=======
import styles from "./Logo.module.css";

function Logo() {
  return <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />;
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
}

export default Logo;
