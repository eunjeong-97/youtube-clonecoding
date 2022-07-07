import express from 'express';
import { remove, edit, see, upload } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/upload', upload);
videoRouter.get('/:id(\\d+)', see); // 숫자형태의 id값만 허용가능
videoRouter.get('/:id(\\d+)/edit', edit);
videoRouter.get('/:id(\\d+)/delete', remove);
videoRouter.get('/(\\d+)/delete', remove); // 이런식으로 해도 되긴 하겠지만 변수에 이름을 지어주고 싶기 때문에 parameter를 적었다

export default videoRouter;

/*
upload를 변수가 포함된 URL다음으로 위치시키면 express가 찾을 수없다
id자리에 뭐든 입력하면 express는 id값이라 인식하는데 우리는 숫자에 해당하는 id값만 받아와야 한다
이러한 문제를 해결하기 위해서는 express routing을 활용하면 좋다

*는 어떤 문자던 상관없다는 뜻으로 /abxcd, /abRANDOMcd, /ab123cd 도 작동된다
app/get('ab*cd', (req, res)=>res.send('ab*cd));

+는 바로앞의 문자를 더해도된다는 뜻이다 /abbcd /abbbbbbcd 도 작동된다
app/get('ab+cd', (req, res)=>res.send('ab*cd));

?는 옵션적으로 선택가능하다는 뜻이다 /abcd /acd가능
app/get('ab?cd', (req, res)=>res.send('ab*cd));

()괄호 안에 잇는 cd가 옵션적으로 넣어도 된다 /abcde /abe /abce /abde 가능
app/get('ab(cd)?e', (req, res)=>res.send('ab*cd));

그리고 우리가 사용하는 id는 문자열이 아니라 숫자이어야 하는 이유는 데이터베이스와 관련되어잇다

====정규식===
만약 nicolas를 선택하고 싶으면 /nicolas/g를 하면되지만
nico로 시작하는 모든 문자를 선택하고 싶으면 /(nico\w+)/g 라고 정규식을 설정하면 된다
\:앞에 잇는 문자 다음으로, w: 아무문자, +:정규식끝

만약 숫자만을 선택하고 싶다면 /(\d+)/g 라고 하면된다
d: 숫자

이렇게 만들어진 정규식을 express에게 전달하면 되는데 정규식은 자바스크립트이기 때문에 앞에 \을 하나 더 써준다
videoRouter.get('/:id(\\d+)', see);

하지만 우리가 만들 데이터베이스는 이런 형식이 아니기때문에 이러한 숫자정규식을 사용하지 않는다
*/