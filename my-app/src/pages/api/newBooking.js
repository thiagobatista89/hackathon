import { createDocument } from '../../server/data/create'

export default async function newBooking(req, res) {
    try{
        const {date, hour, type} = req.body
        if(!date || hour.length === 0 || !type){
            res.status(412).json({message: "Tem de indicar uma data e hora."})
        } else {
            const result = await createDocument({"date":date, "hour": hour, "type": type})
            res.status(200).json(result)}
        
    }
    catch {
        res.status(400).end()
    }
    
}