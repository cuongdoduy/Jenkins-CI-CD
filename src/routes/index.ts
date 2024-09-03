import teachers from './api/teacher';
import students from './api/student';
import express from 'express';
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('APIs');
});
routes.use('/teacher', teachers);
routes.use('/student', students);

export default routes;
