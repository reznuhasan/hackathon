import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const AgricultureHeader = () => {
    const location=useLocation()
    return (
        <div className='agricultureHeader'>
            <div className="agricultureMenu">
                <NavLink  to="" className={location.pathname==="/agriculture"?"myColor":""}>Forecast</NavLink>
                <NavLink  to="soil" className={location.pathname==="/agriculture/soil"?"myColor":""}>Soil</NavLink>
                <NavLink to="crops" className={location.pathname==="/agriculture/crops"?"myColor":""}>Crops</NavLink>
            </div>
        </div>
    )
}

export default AgricultureHeader