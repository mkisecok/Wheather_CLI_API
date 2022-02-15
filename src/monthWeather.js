require('dotenv').config();
const axios=require('axios');

const[node,script, ...args]=process.argv;

const baseUrl='https://api.openweathermap.org/data/2.5/forecast?'

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

    console.log(`In  ${res.data.city.name}, ${res.data.city.country} ` );

     res.data.list.forEach((day)=>{
        console.log(` The Weather at ${day.dt}  is ${day.main.temp.toFixed(2)}${units().symbol }, conditions are: ${day.weather[0].description}`)
    
})
 }).catch((err)=>{
     console.log(err)
 })