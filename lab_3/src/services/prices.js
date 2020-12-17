const axios = require('axios');

export default new Promise((resolve, reject) => {
    axios.get("http://localhost:5000/prices/").then(resolve, reject);
});

