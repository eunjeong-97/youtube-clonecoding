// 이런식으로 여러개로 export를 할 수도 잇다
export const homepageVideos = (req, res) => res.send('Home Page Videos');
export const watch = (req, res) => res.send('Watch Video');
export const edit = (req, res) => res.send('Edit Video');
