import express from 'express';
import { remove, edit, see, upload } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/upload', upload); // 그래서 변수가없는 path는 제일 상단에 둬야 한다
videoRouter.get('/:id', see);
videoRouter.get('/upload', upload);
// 만약 /upload path를 여기로 위치시키면, express는 upload path를 id값으로 인식해서 see함수를 실행시킨다 {id:'upload'}
// videoRouter.get('/1', see);
// videoRouter.get('/2', see);
videoRouter.get('/:id/edit', edit);
videoRouter.get('/:id/delete', remove);

export default videoRouter;

/*
URL에 :paramter가 있으면 URL에 변수를 넣을 수있게 해준다
만약 여기에 잇는 변수가 없다면 매 강의영상마다 매번 라우터를 만들어줘야 한다
그래서 URL에 파라미터인 변수를 넣어주는거다 
*/