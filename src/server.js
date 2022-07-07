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
만약 /users/edit URL을 감지하면 express는 우선
URL포탈같이 /users로 시작하는 userRouter로 진입해서 userRouter에서 /edit의 path를 찾는다

컨트롤러에서 많은 작업이 진행될것이기 때문에 라우터와 컨트롤러를 병행해서 사용하면 좋지 않다
컨트롤러는 함수이고, 라우터는 그러한 함수를 사용하는 입장이다

videoController, userController 파일을 만들었지만 globalController를 만들 필요는 없다
Home에서는 동영상들을 보여줄 것이고, Join은 유저가 하는것이라 글로벌라우터가 실질적으로 하는 일은 없는 거다
즉, 글로벌라우터는 URL을 깔끔하게 하기 위해 사용하는거지 기능을 구분하지는 않는다

export default 를 사용해서 하나만 export하던지
export const functionName = () => {} 처럼사용해서 여러개를 export할 수 있는데

export default를 사용하면 다른파일에서 import할 때 내가 원하는 어떤 이름으로 import할 수 있다
즉, 하나의 파일은 하나의 export default만을 가질 수 있기 때문에 node.js가 default export를 가지고 이름을 바꿔준다는 말이다


한편 그냥 export를 한경우 {}로 구조분해할당처럼 import해야 한다
이때 다른이름으로 import를 하면 object undefined에러를 보게 되는데, 라우터는 함수가 필요하지만 정의되지 않은것을 받았다는 말이고, 즉 라우터에게 존재하지 않은 함수를 지정해줫다는 뜻이다

*/