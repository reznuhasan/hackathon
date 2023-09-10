import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const Soil = () => {
    const [show, setShow] = useState(false);
    const [reco, setReco] = useState("")
    const [data, setData] = useState({
        latitude: "",
        longitude: "",
        placeName: "",
        analysisDate: "",
        pHLevel: "",
        nutrientLevel: "",
        moistureContent: "",
        soilType: ""
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
    const handleClose = () => {
        setShow(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newObject = {
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.analysisDate),
            placeName: data.placeName,
            analysisDate: data.analysisDate,
            pHLevel: parseFloat(data.pHLevel),
            nutrientLevel: parseFloat(data.nutrientLevel),
            moistureContent: parseFloat(data.moistureContent),
            soilType: data.soilType
        }
        try {
            const res = await axios.post('http://192.168.0.107:8080/api/v1/soil-analyses/soil-analysis', newObject);
            console.log("API call successful", res.data);
            if (res.status === 200) {
                setReco(res.data)
                setShow(true)
                setData({
                    latitude: "",
                    longitude: "",
                    placeName: "",
                    analysisDate: "",
                    pHLevel: "",
                    nutrientLevel: "",
                    moistureContent: "",
                    soilType: ""
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
                <Modal.Body>{reco !== "" ? reco : null}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1>Soil</h1>
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
                    <label htmlFor="analysisDate">Analysis Date:</label>
                    <input type="date" name="analysisDate" id="analysisDate" value={data.analysisDate} onChange={handleInputChange} placeholder='enter your Analysis Date' />
                </div>

                <div className="inputField">
                    <label htmlFor="pHLevel">PH Level:</label>
                    <input type="text" name="pHLevel" id="pHLevel" value={data.pHLevel} onChange={handleInputChange} placeholder='enter the temperature' />
                </div>
                <div className="inputField">
                    <label htmlFor="nutrientLevel">Nutrient Level:</label>
                    <input type="text" name="nutrientLevel" id="nutrientLevel" value={data.nutrientLevel} onChange={handleInputChange} placeholder='enter the humidity' />
                </div>

                <div className="inputField">
                    <label htmlFor="moistureContent">Moisture Content:</label>
                    <input type="text" name="moistureContent" id="moistureContent" value={data.windSpeed} onChange={handleInputChange} placeholder='enter the Moisture Content' />
                </div>
                <div className="inputField">
                    <label htmlFor="soilType">Soil Type:</label>
                    <input type="text" name="soilType" id="soilType" value={data.soilType} onChange={handleInputChange} placeholder='enter the Moisture Content' />
                </div>
                <div className="buttonField">
                    <button type='submit'>weather forecast</button>
                </div>
            </form>
        </div>
    );
};

export default Soil;
