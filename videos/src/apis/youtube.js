import axios from 'axios';

const KEY = 'AIzaSyAtlzBgNt5NdkHDWGGDI5_8g0_c1kjUwYo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});