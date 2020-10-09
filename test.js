var request = require('request');

request.post(
    'https://base64api.herokuapp.com/resumetoBase64',
    { json: { message: 'https://drive.google.com/file/d/1qc1jd0fkLzmE3KlmOAtvejJ_DCSJUx2n/view?usp=sharing' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response.body);
        }
    }
);