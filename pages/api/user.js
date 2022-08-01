import connect from "../../utils/database"

export default async function handler(req, res) {
    if (req.method === "POST"){
        
        const { nome, idade } = req.body

        if ( !nome || !idade ){
            res.status(400).json({ message: 'Faltou enviar algum(s) dado(s)' })
            return
        }

        const { db } = await connect()

        const response = await db.collection('users').insertOne({
            nome,
            idade
        })
        res.status(200).json(response.name)
    }else{
        res.status(400).json({ message: "Deve usar o método post" })
    } 
}
  