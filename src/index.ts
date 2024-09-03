import express from 'express';
import routes from './routes/index';
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 5000; // Default port

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

// Use routes
app.use('/api', routes);

// Start server
app.listen(port, (): void => {
  console.log(`App listening on port ${port}`);
});

export default app;
