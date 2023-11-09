import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"

// Params {
//     id: string
// }
async function fetchById(id) {
    const collection = await GetCollection("cowork","bookings")
    const result = await collection.findOne({_id: new ObjectId(id)})
    return result
  } 

module.exports = {
    fetchById
}