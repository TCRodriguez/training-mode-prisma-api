import bodyParser from 'body-parser';
import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import routes from './v1/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes)


app.listen(port, () => {
    console.log(`The beginning of TrainingMode on http://localhost:${port}`)
});