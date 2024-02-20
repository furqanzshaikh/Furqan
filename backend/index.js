
import express from 'express'
import dotenv from 'dotenv'
import Image from './models/Images.js';
dotenv.config()
const port = process.env.PORT || 4000 ;
import cors from 'cors'
import ConnectToDb from './connection/ConnectToDb.js';
import cookieParser from 'cookie-parser';
import UserRoutes from './routes/UserRoutes.js'
import { notFound } from './middleware/errorMiddleware.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import path from 'path'
import multer from 'multer';
const app = express();
app.use("/uploads",express.static("uploads"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser())
ConnectToDb();


app.use('/api/users',UserRoutes)



app.get("/", async (req, res) => {
  res.send('Server is ready')
});








  



app.use(notFound);

app.use(errorHandler);

















app.listen(port , () => {
  console.log(`server started on port ${port}`);
});
