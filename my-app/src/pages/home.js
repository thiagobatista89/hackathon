import { useEffect, useState } from "react"
import NavBar from "../app/components/NavBar"
import styles from '../styles/homepage.module.css'
import { useRouter } from "next/router"

export default function Home() {
  const [date, setDate] = useState()
  const [type, setType] = useState("public")
  const [bookedHours, setBookedHours] = useState([])
  const [selectedHours, setSelectedHours] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const router = useRouter()
  const arrayHours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]

  useEffect(() => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ "date": date, "type": type })
    }

    async function fetchData() {

      const res = await fetch(`/api/fetchByDate`, options);
      if (res.status === 200) {
        const body = await res.json();
        setBookedHours(body)
      }

    }

    fetchData();

  }, [date, type])

  const handleChange = (e) => {
    setErrorMessage()
    setDate(e.target.value);
  };

  const handleSelectChange = (e) => {
    setType(e.target.value)
    setSelectedHours([])
  }

  const handleHourClick = (hour) => {
    if (selectedHours.includes(hour)) {
      setSelectedHours(selectedHours.filter((h) => h !== hour));
    } else {
      setSelectedHours([...selectedHours, hour]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`"date": ${date}, "hour": ${selectedHours}, "type": ${type}`)
    const bookingOptions = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ "date": date, "hour": selectedHours, "type": type })
    }

    async function newBooking() {

      const res = await fetch(`/api/newBooking`, bookingOptions);
      if (res.status === 200) {
        const body = await res.json();
        router.push(`/reservation/${body}`)
      } else if (res.status === 412) {
        const body = await res.json();
        setErrorMessage(body.message)
      }
    }
    newBooking()
  }

  return (
    <>
      <div className={styles.logoWrapper}><img className={styles.logo} src="/icons/3.png" /></div>
      <div className={styles.homeContainer}>
        <div className={styles.formContainer}>
          <div>
            <label className={styles.label}><h3>Que tipo de lugar necessita?</h3></label>
            <select name="type" className={styles.type} onChange={handleSelectChange}>
              <option className={styles.options} value="public">Lugar Público</option>
              <option className={styles.options} value="private">Lugar Privado</option>
            </select>
          </div>
          <div><h3>Que dia?</h3> </div>
          <input
            type="date"
            onChange={handleChange}
            className={styles.customDateInput}
          />
          {date ?
            <div>
              <div><h3>Qual horário?</h3></div>
              <div className={styles.hourWrapper}>
                {arrayHours.map((e) => {
                  const isDisabled = bookedHours.some((hour) => type === "public" ? hour[0] === e && hour[1] >= 10 : hour[0] === e && hour[1] >= 2);
                  const isSelected = selectedHours.includes(e);
                  return (
                    <button
                      key={e}
                      onClick={() => handleHourClick(e)}
                      className={`${styles.availableHour} ${isSelected ? styles.selected : ""} ${isDisabled ? styles.disabledHour : ""}`}
                      disabled={isDisabled}
                    >
                      {e}
                    </button>
                  );
                })}
              </div>
            </div>
            : null}
        </div>
        {selectedHours.length > 0 ? <div className={styles.price}>Valor da reserva: {type === "public" ? `${selectedHours.length * 5}€` : `${selectedHours.length * 8}€`}</div> : null}
        {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
        <button className={styles.submit} onClick={handleSubmit}>Confirmar</button>
      </div>
      <NavBar/>
    </>
  );
};