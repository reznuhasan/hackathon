import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const Crops = () => {
    const [show, setShow] = useState(false);
    const [reco, setReco] = useState("")
    const [data, setData] = useState({
        latitude: "",
        longitude: "",
        placeName: "",
        cropName: "",
        plantingDate: "",
        harvestingDate: "",
        cropHealth: "",
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
            cropName: data.cropName,
            plantingDate: data.plantingDate,
            harvestingDate: data.harvestingDate,
            cropHealth: parseFloat(data.cropHealth),
        }
        try {
            const res = await axios.post('http://192.168.0.107:8080/api/v1/crops/crops', newObject);
            console.log("API call successful", res.data);
            if (res.status === 200) {
                setReco(res.data)
                setShow(true)
                setData({
                    latitude: "",
                    longitude: "",
                    placeName: "",
                    cropName: "",
                    plantingDate: "",
                    harvestingDate: "",
                    cropHealth: "",
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
            <h1>Crops Analysis</h1>
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
                    <label htmlFor="cropName">Crop Name:</label>
                    <input type="text" name="cropName" id="placeName" value={data.cropName} onChange={handleInputChange} placeholder='enter your crop Name' />
                </div>
                <div className="inputField">
                    <label htmlFor="plantingDate">Planting Date:</label>
                    <input type="date" name="plantingDate" id="plantingDate" value={data.plantingDate} onChange={handleInputChange} placeholder='enter your planting Date' />
                </div>
                <div className="inputField">
                    <label htmlFor="harvestingDate">Harvesting Date:</label>
                    <input type="date" name="harvestingDate" id="harvestingDate" value={data.harvestingDate} onChange={handleInputChange} placeholder='enter your harvesting Date' />
                </div>

                <div className="inputField">
                    <label htmlFor="cropHealth">crop Health:</label>
                    <input type="text" name="cropHealth" id="cropHealth" value={data.cropHealth} onChange={handleInputChange} placeholder='enter the crop Health' />
                </div>
                <div className="buttonField">
                    <button type='submit'>Crops Info</button>
                </div>
            </form>
        </div>
    );
};

export default Crops;
