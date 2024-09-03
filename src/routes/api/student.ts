import express from 'express';
const students = express.Router();
students.get('/', (req: express.Request, res: express.Response) => {
    res.send('Students API');
}
);

export default students;