require('dotenv').config();
const axios=require('axios');

const[node,script, ...args]=process.argv;

const baseUrl='https://api.openweathermap.org/data/2.5/weather?'

const units=(units='metric', symbol='C')=>{ 

    if(args[1] === 'f' || args[1]==='F')
        {
            units='standard';
            symbol='F'
        };
        return {units,symbol};
};

const params={
    q:args[0],
    appid:process.env.API_KEY,
    units:units().units
};

 axios.get(baseUrl,{params} )
 .then(res=>{
    
     console.log(`It is now ${res.data.main.temp}°${units().symbol } in ${res.data.name}, ${ res.data.sys.country}\n`+
     `The current weather conditions are: ${res.data.weather[0].description}`)
     
 }).catch((err)=>{
     console.log(err.response.status)
 })

