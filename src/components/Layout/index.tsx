import Link from "next/link";
import styles from "./styles.module.css";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/">Index</Link>
        <Link href="/home">Home</Link>
        <Link href="/posts/123">Post Detail</Link>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
