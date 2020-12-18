const transformData = form => {
        const formData = new FormData(form),
        dataArr = [...formData].filter(item => item[0] !== 'ad_password');

        return JSON.stringify(Object.fromEntries(dataArr));
};

export default transformData;