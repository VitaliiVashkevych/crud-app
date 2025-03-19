import express from "express";
import cors from "cors";
import userRoutes from './routes/userRoute.ts'

const server = express();

server.use(express.json());
server.use(cors());

server.use('/', userRoutes);

server.listen(3000, () => console.log("http://localhost:3000/"));
