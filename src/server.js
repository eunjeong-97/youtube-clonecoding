import express from 'express';
import morgan from 'morgan';

const PORT = 4000;
const app = express();
const logger = morgan('dev');
app.use(logger);

// 실행할 함수
const handleHome = (req, res) => res.send('Home');
const handleEditUser = (req, res) => res.send('Edit User');
const handleWatchVideo = (req, res) => res.send('Watch Video');

// 라우터 설치
const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

// 라우터 사용
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

/* 
/videos로 시작하는 URL에 접근하면 express는 videoRouter 안에 들어가서 controller를 찾게 만든다
그리고 videoRouter에는 /watch 하나만 존재한다
*/

// app.get() 대신에 
globalRouter.get('/', handleHome);
userRouter.get('/edit', handleEditUser);
videoRouter.get('/watch', handleWatchVideo); // videoRouter 안에 접속해서 /watch이면 express는 handleWatchVideo controller 실행

const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

/*
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/edit -> Edit User
/users/delete -> Delete User

/videos/watch 
/videos/edit
/videos/delete
/videos/comments/delete
/videos/comments/delete

/users/join, /users/login, /videos/search 라고 안하는 이유
가능한한 일맥상통하게 만드는게 맞지만 규칙을 어기고 깔끔한 URL을 만들 수 있다
만약 nomadcoders.co/users/login 이라고 하는것보다는 nomadcoders.co/login 이 더 보기도 좋고
마케팅적으로 더 괜찮음
*/