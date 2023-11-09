import styles from '../../styles/payment.module.css'

export default function Popup() {


   return <>
   <div className={styles.mbway}>
   <p className={styles.title}>Pagamento em Curso</p>
   <p>_________________________________</p>
   <p className={styles.p} >Verifique a app MbWay para concluir o pagamento no prazo máximo de 4 minutos.</p>
   </div>
   </>
}