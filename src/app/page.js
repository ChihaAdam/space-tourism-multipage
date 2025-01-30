import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.article}>
        <section className={styles.end}>
        <div className={styles.left}>
          <h4 className={styles.intro}>SO, YOU WANT TO TRAVEL TO</h4>
          <h1 className={styles.space}>SPACE</h1>
          <p className={styles.paragraph}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className={styles.right}>
          <Link href="/destination" className={styles.link}>
            <div className={styles.circle}>
              <h3>explore</h3>
            </div>
          </Link>
        </div>
        </section>
      </section>
    </main>
  );
}
