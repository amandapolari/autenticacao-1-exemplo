import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { userRouter } from './router/userRouter'

// Chamar o `dotenv` SEMPRE na primeira linha após os imports:

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Fazer substituição:
// app.listen(3003, () => {
//     console.log(`Servidor rodando na porta ${3003}`)
// })
app.listen( Number(process.env.PORT) || 3003 , () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`)
})

app.use("/users", userRouter)
