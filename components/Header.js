import styles from './Header.module.css'

export default function Header({ title, desc }) {
  return (
  <>
    <header className={styles.header}>
      <h1 className={styles.headline}>{title}</h1>
      <p className={styles.subheadline}>{desc}</p>
    </header>
  </>
  )
}
