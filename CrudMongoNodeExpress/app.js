import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import router from './routes/producto.js'
import conectarDB from './config/db.js'

const app = express()
app.use(json())
app.use(cors())
app.use('/api/productos', router)

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'test') {
  try {
    await conectarDB()
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`))
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message)
    process.exit(1)
  }
}

export default app
