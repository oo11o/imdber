const axios = require('axios');

module.exports = async (url) => axios.get(url)
  .then((response) => ({
    status: response.status,
    data: response.data,
  }))
  .catch((error) => `Axios ${error}`);
