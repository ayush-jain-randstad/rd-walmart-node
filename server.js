import express from 'express'
import dotenv from 'dotenv';
dotenv.config('');
import productRoutes from './routes/productRoutes.js'
import cors from "cors"
const app = express()

const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;

// for JSON
app.use(express.json());
app.use(cors())
app.use("/api", productRoutes);

app.listen(port, () => {
    console.log(`server listening at http:localhost:${port}`);
})