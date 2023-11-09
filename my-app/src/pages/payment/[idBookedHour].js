import { useRouter } from "next/router"
import styles from '../../styles/payment.module.css'
import { useState } from "react"
import Popup from "../../app/components/Popup"
import NavBar from "../../app/components/NavBar"



export default function Payment() {
  const [bookingInfo, setBookingInfo] = useState()
  const [popup, setPopup] = useState(false)
  const router = useRouter()
  const id = router.query.idBookedHour

  const options = {
    method: 'POST',
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify({
        "id": id
    })

  }

  async function fetchData() {
    const res = await fetch(`/api/getInfoById`, options);

    if(res.status === 200){
      const body = await res.json();
      setBookingInfo(body)
    }
  }

  fetchData()

  const changeURL = () => {
    router.push(`/reserveConfirmation`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
        changeURL();
      }, 5000);
      setPopup(true)
  }


  return <>
  {bookingInfo && <div className={styles.paymentContainer}>
        <h3>Dados da Marcação:</h3>
    {bookingInfo && <div className={styles.confirmation}>
        <div><h4>Nome:</h4> {bookingInfo.name}</div>
        <div><h4>Email:</h4> {bookingInfo.email}</div>
        <div><h4>Telemóvel:</h4> {bookingInfo.phone}</div>
        <div><h4>Dia:</h4> {bookingInfo.date}</div>
        <div><h4>Hora:</h4> {bookingInfo.hour.map(e => <div key={e}>{e}</div>)}</div>
        <div><h4>Preço:</h4> {bookingInfo.type === "public" ? `${bookingInfo.hour.length * 5}€` : `${bookingInfo.hour.length * 8}€`}</div>
        </div>}
        <div><h3>Pagamento por MbWay</h3></div>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}><label className={styles.labelInputText}>Telemóvel:</label>
            <input type="text" className={styles.inputText} placeholder="  888 888 888"/></div>
            <input type="submit" value="Pagar" className={styles.submit}/>
        </form>
        
        {popup ? <Popup /> : null}
  </div>}<NavBar /></>
}