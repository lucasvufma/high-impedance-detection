const axios = require('axios').default;
const urlToEsp8266 = "ip adress";

export default function request(object){
    axios.post(urlToEsp8266,object).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    });
}