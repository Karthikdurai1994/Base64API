var request = require('request');

request.post(
    'https://base64api.herokuapp.com/resumetoBase64',
    { json: { message: 'success' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response);
        }
    }
);