// 이런식으로 여러개로 export를 할 수도 잇다
export const trending = (req, res) => res.send('Home Page Videos');
export const upload = (req, res) => res.send('Upload Video');
export const see = (req, res) => {
    console.log(req.params); // ID 변수명(우리가 지정한 파라미터명)과 값을 확인할 수잇다 {id:12121212}
    res.send(`See Video: ${req.params.id}`);
}
export const edit = (req, res) => res.send('Edit Video');
export const remove = (req, res) => res.send('Remove Video');
