import styles from './Footer.module.css'
const milk = "test"
const hrt = "https://form.questionscout.com/5fceb6cba4404526daf7b364?tn="+milk+"&tp="
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      <a id="jximtydqlledrm-btn" href={hrt} target="_blank">Open Form</a>
      </footer>
    </>
  )
}
