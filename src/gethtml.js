import axios from 'axios';

export default async (url) => {
  return await axios.get(url)
    .then((response) => ({
      status: response.status,
      data: response.data,
    }))
    .catch((error) => `Axios ${error}`);
};
