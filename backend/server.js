import express from 'express';
import corse from 'cors';
import dotenv from 'dotenv';
import { connectDB }  from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());   
app.use(corse());

app.get('/', (req, res) => {
    res.send('API is running...');
});

connectDB(); 

app.listen(5001,() => {
    console.log('Server is running on port 5001');
});