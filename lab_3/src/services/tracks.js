const axios = require('axios');

export default new Promise((resolve, reject) => {
    axios.get("http://localhost:5000/tracks/").then(resolve, reject);
});