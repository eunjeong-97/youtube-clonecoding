import express from 'express';
import { join } from '../controllers/userController';
import { homepageVideos } from '../controllers/videoController';

const globalRouter = express.Router();

// const handleHome = (req, res) => res.send('Home'); // video controller
// const handleJoin = (req, res) => res.send('Join'); // user controller
// globalRouter.get('/', handleHome);
// globalRouter.get('/join', handleJoin);

globalRouter.get('/', homepageVideos);
globalRouter.get('/join', join);

// 이렇게 만들면 누구든 globalRouter.js를 import하면 globalRouter 자체를 import해서 사용할 수 있게 된다
// 다만 export default 키워드를 사용하면 파일에서 하나만 export할 수 있다
export default globalRouter;