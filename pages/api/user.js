import connect from "../../utils/database"

export default async function handler(req, res) {
    const { db } = await connect()
    const response = await db.collection('users').insertOne({
        name: 'Marcelo Pontes',
        age: 43,
    })
    res.status(200).json(response.name)
}
  