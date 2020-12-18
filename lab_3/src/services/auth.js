export default (url, data) => {

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            }).then(resolve, reject);
        })

};