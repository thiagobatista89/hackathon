import { updateById } from '../../server/data/update'

export default async function updateBooking(req, res) {
    try{
        const {id, data} = req.body
        console.log(data)
        if(!data || !data.name || !data.email || !data.phone){
            res.status(412).json({message: "Todos os campos são obrigatórios"})
        } else {
            const result = await updateById(id, data)
            res.status(200).json(result)
        }
    }
    catch {
        res.status(400).end()
    }
    
}