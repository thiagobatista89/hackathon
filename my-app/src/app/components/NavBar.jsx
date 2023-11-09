import { useRouter } from "next/router"
import styles from "../../styles/navbar.module.css";
// importa a biblioteca do next para mudar as pags
// importa o estilo do css


export default function NavBar() {
// exporta a navbar 
   const router = useRouter()

   return <>
   <div className={styles.nav}>
   <button className={styles.button} onClick={() => router.back('/')}><img className={styles.icon} src="/icons/back.svg" alt="" width={24} /></button>
   <button className={styles.button} onClick={() => router.push('/home')}><img className={styles.iconHome} src="/icons/home.svg" alt="" width={24}/></button>
   <button className={styles.button} onClick={() => router.push('/infopage')}><img className={styles.icon} src="/icons/info.svg" alt="" width={24}/></button>
   </div>
   </>
}