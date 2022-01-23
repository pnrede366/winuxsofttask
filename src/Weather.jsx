import React, { useEffect, useState } from 'react'

const Weather = () => {
        const [city, setCity] = useState(null);
        const [Weather, setWeather] = useState('pune')
        const [MyCity, setMyCity] = useState(Weather)

    useEffect(() => {
        return () => {
                    const fetchApi=async()=>{
                        const url = `https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&APPID=d2111b21402c817410ebbac49f76099c`;
                        const response = await fetch(url);
                        const resJson=await response.json();
                        console.log(resJson);
                        setCity(resJson)
                    }
                    fetchApi();
                }
            }, [MyCity])
 
    return (
        <div>
                <div>
                    <input type="search" value={Weather} onChange={(e)=>{
                                setWeather(e.target.value)
                                // console.log(city);
                    }} />
                    <button className="btn btn-success" onClick={
                        ()=>{
                            setMyCity(Weather)
                        }
                    }>Search</button>
                    {city==null?'not found':city.main.temp}
                </div>
        </div>
    )
}

export default Weather
