import express from "express";
import mongoose  from "mongoose";
import { health } from './controllers/health.js';
import categoryRouter from './routers/base.router.js';
import groceryRouter from './routers/grocery.router.js';
import electronicsRouter from './routers/electronis.router.js';
import ecoRouter from './routers/eco.router.js';
import homeappRouter from './routers/homeapp.router.js';
import toysRouter from './routers/toys.router.js';
import videogamesRouter from './routers/videogames.router.js';
import clothesRouter from './routers/clothes.router.js';
import {directSearch} from './controllers/base_category/index.js';
import cors from "cors";

mongoose
    .connect('mongodb://localhost:27017/walmart')
    .then(()=> { console.log("MongoDb connected")})
    .catch((e) => console.log(e));


const app = express();
app.use(cors({
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
  }));
app.use(express.json());

const PORT = 3001;

app.get('/health/ping', health);
app.use('/category', categoryRouter);
app.use('/groceries', groceryRouter);
app.use('/electronics', electronicsRouter);
app.use('/eco_friendly', ecoRouter);
app.use('/homeappliances', homeappRouter);
app.use('/toys', toysRouter);
app.use('/clothes', clothesRouter);
app.use('/videogames', videogamesRouter);
app.get('/search', directSearch);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message, 
    });
})

app.listen(PORT , () => {
    console.log(`Server started at Port: ${PORT}`)
})
