
import NavBar from '../app/components/NavBar'
import styles from '../styles/chek.module.css'

export default function Confirmation () {
    return (<>
        <div className={styles.Confirmationcontainer}>
        <div className={styles.logoWrapper}><img className={styles.logo} src="/icons/3.png" /></div>
        <div className={styles.cp}> 
        <div className={styles.logo}>
        <img src="icons/check.png"  width={150} height={150}/> 
        </div>
        <p>A sua reserva foi feita com sucesso!</p>
        <p>Receberá no seu e-mail todos os dados da reserva.</p>
        </div></div>
        <NavBar/>
        </>
    )

}