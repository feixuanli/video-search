import axios from 'axios';

const Youtube = (term) => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          'q': term,
          'part': 'snippet',
          'key': 'AIzaSyDvPakoXS8Z_LT23tfFKbx0nDGInH0sn2A'
        }
      })
      // .then(function (response) {
      //   console.log(response);
      //   return response;
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
}

export default Youtube; 