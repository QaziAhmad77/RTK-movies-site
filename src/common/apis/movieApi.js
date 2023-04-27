import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.omdbapi.com',
});

// const instance = axios.create({
//   baseURL: "https://www.pmdbapi.com",
// })

// export default instance;
