import axios from 'axios';

const KEY = 'AIzaSyDvPakoXS8Z_LT23tfFKbx0nDGInH0sn2A';

// an axios instance 
export default axios.create({
  baseURL:  'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5, 
    key: KEY,
  }
});