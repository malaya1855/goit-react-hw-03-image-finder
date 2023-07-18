import axios from "axios";

const API_KEY = '37072285-b3efa6f8cf1db58cd30a34c91';
const BASE_URL = 'https://pixabay.com/api/';


export const getImages =  async (query, page) => {
    const {data} = await axios.get(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
  };
