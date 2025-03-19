import "dotenv/config";
import pg, { ClientConfig } from 'pg';

const config: ClientConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
}

const { Client } = pg;

const client = new Client(config);
client.connect();
client.on('error', (error) => {
  console.error(error)
  process.exit(-1);
});

export const query = (text: string, params?) => client.query(text, params)





