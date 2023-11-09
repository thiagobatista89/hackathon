import {ObjectId}  from "mongodb"
import { GetCollection } from "./mongo"

// Params {
//     id: string,
//     data: object
// }
async function updateById(id, data) {
    const collection = await GetCollection("cowork", "bookings")
    const result = await collection.updateOne({_id: new ObjectId(id)}, {$set: data}, {upsert: true})
    return result
  }

module.exports = {
    updateById
}