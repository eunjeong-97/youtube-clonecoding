// 이런식으로 여러개로 export를 할 수도 잇다
export const trending = (req, res) => res.send('Home Page Videos');
export const upload = (req, res) => res.send('Upload Video');
export const see = (req, res) => res.send('See Video');
export const edit = (req, res) => res.send('Edit Video');
export const remove = (req, res) => res.send('Remove Video');
