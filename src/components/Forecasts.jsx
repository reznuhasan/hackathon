import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const Forecasts = () => {
    const [show, setShow] = useState(false);
    const [reco,setReco]=useState("")
    const [data, setData] = useState({
        latitude: "",
        longitude: "",
        placeName: "",
        startDate: "",
        endDate: "",
        includeTemperature: true,
        temperature: "",
        includePrecipitation: true,
        includeHumidity: true,
        humidity: "",
        includeWindSpeed: true,
        windSpeed: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value === "true",
        }));
    };
    const handleClose=()=>{
        setShow(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newObject = {
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude),
            placeName: data.placeName,
            startDate: data.startDate,
            endDate: data.endDate,
            includeTemperature: data.includeTemperature,
            temperature: parseFloat(data.temperature),
            includePrecipitation: data.includePrecipitation,
            includeHumidity: data.includeHumidity,
            humidity: parseFloat(data.humidity),
            includeWindSpeed: data.includeHumidity,
            windSpeed: parseFloat(data.windSpeed),
        }
        try {
            const res = await axios.post('http://192.168.0.107:8080/api/v1/weather/save', newObject);
            console.log("API call successful", res.data);
            console.log(res.status)
            // Check if the response status is in the 2xx range (indicating success)
            if (res.status === 200) {
                setReco(res.data.recommendations)
                setShow(true)
                setData({
                    latitude: "",
                    longitude: "",
                    placeName: "",
                    startDate: "",
                    endDate: "",
                    includeTemperature: true,
                    temperature: 0,
                    includePrecipitation: true,
                    includeHumidity: true,
                    humidity: 0,
                    includeWindSpeed: true,
                    windSpeed: 0,
                })
            }
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <div className='weather'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Recommendations Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>{reco!==""?reco:null}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1>Weather Forecasts</h1>
            <form onSubmit={handleSubmit} className='weather-form'>
                <div className="inputField">
                    <label htmlFor="latitude">Latitude:</label>
                    <input type="text" name="latitude" id="latitude" value={data.latitude} onChange={handleInputChange} placeholder='enter your latitude' />
                </div>
                <div className="inputField">
                    <label htmlFor="longitude">Longitude:</label>
                    <input type="text" name="longitude" id="longitude" value={data.longitude} onChange={handleInputChange} placeholder='enter your longitude' />
                </div>
                <div className="inputField">
                    <label htmlFor="placeName">Place Name:</label>
                    <input type="text" name="placeName" id="placeName" value={data.placeName} onChange={handleInputChange} placeholder='enter your place Name' />
                </div>
                <div className="inputField">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" name="startDate" id="startDate" value={data.startDate} onChange={handleInputChange} placeholder='enter your start Date' />
                </div>
                <div className="inputField">
                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" name="endDate" id="endDate" value={data.endDate} onChange={handleInputChange} placeholder='enter your end Date' />
                </div>
                <div className="radioButton">
                    <label>Include Temperature:</label>
                    <input type="radio" name="includeTemperature" value="true" checked={data.includeTemperature} onChange={handleRadioChange} />
                    <label>Yes</label>
                    <input type="radio" name="includeTemperature" value="false" checked={!data.includeTemperature} onChange={handleRadioChange} />
                    <label>No</label>
                </div>
                <div className="inputField">
                    <label htmlFor="temperature">Temperature:</label>
                    <input type="text" name="temperature" id="temperature" value={data.temperature} onChange={handleInputChange} placeholder='enter the temperature' />
                </div>
                <div className="radioButton">
                    <label>Include Precipitation:</label>
                    <input type="radio" name="includePrecipitation" value="true" checked={data.includePrecipitation} onChange={handleRadioChange} />
                    <label>Yes</label>
                    <input type="radio" name="includePrecipitation" value="false" checked={!data.includePrecipitation} onChange={handleRadioChange} />
                    <label>No</label>
                </div>
                <div className="radioButton">
                    <label>Include Humidity:</label>
                    <input type="radio" name="includeHumidity" value="true" checked={data.includeHumidity} onChange={handleRadioChange} />
                    <label>Yes</label>
                    <input type="radio" name="includeHumidity" value="false" checked={!data.includeHumidity} onChange={handleRadioChange} />
                    <label>No</label>
                </div>
                <div className="inputField">
                    <label htmlFor="humidity">Humidity:</label>
                    <input type="text" name="humidity" id="humidity" value={data.humidity} onChange={handleInputChange} placeholder='enter the humidity' />
                </div>
                <div className="radioButton">
                    <label>Include Wind Speed:</label>
                    <input type="radio" name="includeWindSpeed" value="true" checked={data.includeWindSpeed} onChange={handleRadioChange} />
                    <label>Yes</label>
                    <input type="radio" name="includeWindSpeed" value="false" checked={!data.includeWindSpeed} onChange={handleRadioChange} />
                    <label>No</label>
                </div>
                <div className="inputField">
                    <label htmlFor="windSpeed">Wind Speed:</label>
                    <input type="text" name="windSpeed" id="windSpeed" value={data.windSpeed} onChange={handleInputChange} placeholder='enter the wind speed' />
                </div>
                <div className="buttonField">
                    <button type='submit'>weather forecast</button>
                </div>
            </form>
        </div>
    );
};

export default Forecasts;
