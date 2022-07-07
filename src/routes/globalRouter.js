import express from 'express';

const globalRouter = express.Router();

const handleHome = (req, res) => res.send('Home');

globalRouter.get('/', handleHome);

// 이렇게 만들면 누구든 globalRouter.js를 import하면 globalRouter 자체를 import해서 사용할 수 있게 된다
export default globalRouter;