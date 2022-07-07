import express from 'express';
import morgan from 'morgan';

import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

const PORT = 4000;
const app = express();
const logger = morgan('dev');
app.use(logger);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

/*
server.js에서 app.get()으로 각각의 URL별로 controller를 관리하면 너무 복잡해져서
URL이 어떻게 시작하는지에 따라 나누는 방법인 라우터를 이용해서 그룹으로 관리하기로 했다

그리고 도메인을 기반해서 그룹을 골랐는데 
URL을 더 낫고 독립적인 방법으로 관리하기 위해 라우터를 사용한다
*/