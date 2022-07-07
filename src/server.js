import express from 'express';
import morgan from 'morgan';

const PORT = 4000;
const app = express();

const home = (req, res) => {
    return res.send('<h1>home</h1>');
};

const login = (req, res) => {
    return res.send('<h1>login</h1>')
}

app.use(morgan('dev'))
app.get('/', home);
app.get('/login', login);

const handleListening = () => console.log(`Server Listening on http:localhost:${PORT}`);
app.listen(PORT, handleListening);

/*
router: controller와 URL의 관리를 쉽게 해주는 미니 어플리케이션이다
이러한 라우터를 이해하기 위해서 프로젝트를 진행하면 많은 도움이 된다
프로젝트에 대해 생각해볼대 가장 먼저 생각해야 하는건 데이터이다 (어떤 종류의 데이터를 사용해야하는가)

유튜브에는 크게 두가지에 대한 데이터가 있는데
1. 비디오(영상): 영상업로드, 시청, 영상편집, 자막추가, 영상삭제 
2. 유저: 이러한 비디오작업은 유저가 한다

비디오와 유저 두 가지가 흔히 말하는 우리 프로젝트의 도메인이다
이러한 도메인을 URL의 차원에서 생각해보면 

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit User -> /users/edit
/delete-user -> Delete User -> /users/delete

/watch-video -> Watch Video -> /videos/watch
/edit-video -> Edit Video -> /videos/edit
/delete-video -> Delete Video -> /videos/delete
/videos/comments/delete
/videos/comments/delete

이러한 URL들은 뭔가를 수정하거나 프로필을 삭제하거나 하는 행동을 나타낸다
라우터를 도메인별로 나누는게 제일 좋다: 유저의 ID를 가져오거나 동영상의 URL을 가져와서 라우터 안에 넣는것이다

우선 라우터의 URL이 어떻게 생겼는지 알아보면, 위와같이 표시할 수 잇는데
/users/ vs /video/ 인 부분이 바로 라우터가 하는 역할이다
라우터는 내가 작업중인 주제를 기반으로 URL을 그룹화해준다

즉, Home, Join, Login, Search URL 또한 루트에 가깝지만 라우터(global router)를 가졌다고 할 수 있다

그리고 /users/ 이 포함된 URL은 user router라는 다른 라우터가 존재하고,
/videos/이 포함된 URL은 video router도 존재한다

*/