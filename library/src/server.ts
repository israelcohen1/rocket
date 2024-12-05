import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import cors from 'cors';

const dbLink=process.env.DB_LINK as string;


const app = express();
const port = 3000;
//connection to db
const mongoose = require('mongoose');
mongoose.connect(dbLink).then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

//cors setup
const allowedOrigin = 'https://localhost:5173';
// Configure CORS middleware
const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
      if (origin === allowedOrigin || !origin) {
        // Allow requests with no origin (e.g., mobile apps or curl requests)
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  };

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(cors(corsOptions));

//routes
import userRouter from './routes/public/userRouter';
app.use('/user',userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})