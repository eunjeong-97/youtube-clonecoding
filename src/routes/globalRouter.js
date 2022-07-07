import express from 'express';
import { join } from '../controllers/userController';
import { homepageVideos } from '../controllers/videoController';

const globalRouter = express.Router();

globalRouter.get('/', homepageVideos);
globalRouter.get('/join', join);

export default globalRouter;