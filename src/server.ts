import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "tsapp",
  password: "tsapp",
  database: "tsapp",
  synchronize: true,
  logging: false,
});

import { router } from './routes';
import swagger from './swagger.json';

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

const app = express();
app.use(express.json());

const port = 3333

app.use(router);

app.use('/api-docs', serve, setup(swagger))

app.listen(port, () => console.log(`Server running on ${port}`));