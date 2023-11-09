import { GetCollection } from "./mongo"

// Params {
//     date: string
// }
// Function that returns all the bookings in the date
async function filterByDate(date, type) {
    const collection = await GetCollection("cowork", "bookings")
    const hours = await collection.find({ date: date , type: type}).toArray();
    const bookedHours = new Map()

    for(let i = 0; i < hours.length; i++){
        for(let j = 0; j < hours[i].hour.length; j++){
            if(bookedHours.has(hours[i].hour[j])){
            let value = bookedHours.get(hours[i].hour[j])
            bookedHours.set(hours[i].hour[j], value + 1)
        } else {
            bookedHours.set(hours[i].hour[j], 1)
        }
        }
    }
    
    const bh = Array.from(bookedHours)

    return bh
  } 

module.exports = {
    filterByDate
}