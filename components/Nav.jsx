import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <div className={styles.wrap}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.card}>
          <h1>Ian Pratt</h1>
          <h3>Just a gay programmer</h3>
        </div>
      </div>
      <hr />
    </nav>
  );
}
