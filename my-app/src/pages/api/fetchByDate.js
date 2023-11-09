import { filterByDate } from '../../server/data/filterByDate'

export default async function fetchByDate(req, res) {
    try{
        const {date, type} = req.body
        const result = await filterByDate(date, type)
        res.status(200).json(result)
    }
    catch {
        res.status(400).end()
    }
    
}