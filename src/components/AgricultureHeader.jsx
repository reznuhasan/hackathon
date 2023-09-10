import React from 'react'
import { Link } from 'react-router-dom'

const AgricultureHeader = () => {
    return (
        <div className='agricultureHeader'>
            <div className="agricultureMenu">
                <Link to="/weather">Forecast</Link>
                <Link to="soil">Soil</Link>
                <Link to="crops">Crops</Link>
            </div>
        </div>
    )
}

export default AgricultureHeader