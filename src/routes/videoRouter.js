import express from 'express';
import { watch, edit } from '../controllers/videoController';

const videoRouter = express.Router();

// const handleWatchVideo = (req, res) => res.send('Watch Video');
// const handleWEditVideo = (req, res) => res.send('Edit Video');
// videoRouter.get('/watch', handleWatchVideo);
// videoRouter.get('/edit', handleWEditVideo);

videoRouter.get('/watch', watch);
videoRouter.get('/edit', edit);

export default videoRouter;