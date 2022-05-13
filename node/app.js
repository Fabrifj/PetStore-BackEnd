import express from 'express'
import cors from 'cors'
import db from "./database/db.js"

// enrutador
import appointmentRoutes from "./routes/appointmentRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/appointments', appointmentRoutes)


try {
    await db.authenticate()
    console.log("successful connection")
} catch (error) {
    console.log("Error: ${error.message}")
}

app.listen(8000, () => {
    console.log('Running in http://localhost:8000/')
})