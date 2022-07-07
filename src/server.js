import express from 'express';
import morgan from 'morgan';

import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

const PORT = 4000;
const app = express();
const logger = morgan('dev');
app.use(logger);

// 모듈화된 router를 import해와야 한다
// 파일 전체말고 변수화된 router만 import하고 싶다
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

/*
clean code
머릿속에 잇는 코드를 작성하느라 처음에는 정리되지 않은 상태로 지저분하게 코드를 작성한다
얼마나 지저분하던지 상관안하고 일단 코드를 작성하고, 코드를 작성한 시간만큼 코드를 정리하는 시간을 들여야 한다

1. 컨트롤러와 라우터로 나눈다
자바스크립트에서는 모든 파일이 자기만의 세계를 가지기 때문에 여러 파일에서 동일한 express를 import해도 상관이 없다
import express from 'express';

각각의 자바스크립트파일에서 만드는 것은 모듈이기 때문에 한 파일안에서도 돌아가는 환경을 만들어야 한다

2. 라우터에서 URL에 따른 controller관리하는 코드: router.get('/path', controller);
*/