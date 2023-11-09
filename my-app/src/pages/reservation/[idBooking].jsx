import { useRouter } from "next/router"
import ReservationForm from "../../app/components/ReservationForm"
import styles from '../../styles/reservationForm.module.css'
import NavBar from "../../app/components/NavBar"



export default function Reservation() {
  const router = useRouter()
  const id = router.query.idBooking
  

  return <>
    <div className={styles.logoWrapper}><img className={styles.logo} src="/icons/3.png" /></div>
    <div className={styles.reservationContainer}>
    <div> <h2>Informações da reserva</h2>
    </div>
   <div>
    <ReservationForm id={id}/>
    </div>
    <NavBar />
    </div>
    </>
}