import styles from './Header.module.css'

export default function Header({ title, desc }) {
  return (
  <>
  <a href="/" className={styles.homeLink}>
    <header className={styles.header}>
      <h1 className={styles.headline}>{title}</h1>
      <p className={styles.subheadline}>{desc}</p>
    </header>
    </a>
  </>
  )
}
