import React, { useState } from 'react';
import customMarker from './assets/circle-16.ico'
import { Marker, InfoWindow } from '@react-google-maps/api';


const MarkerWrapper = ({position,onClick}) => {
    const [showInfoWindow, setShowInfoWindow] = useState(false)


    const handleMouseOver = () => {
        setShowInfoWindow(true)
    }

    const handleMouseOut = () => {
        setShowInfoWindow(false)
    }

    return (
        <Marker position={position}
            icon={customMarker}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={onClick}
        >
            {showInfoWindow &&
                (<InfoWindow>
                    <div>
                        <b>latitude:</b><span>{position.lat}</span><br/>
                        <b>longitude:</b><span>{position.lng}</span><br/>
                    </div>

                </InfoWindow>)
            }
        </Marker>
    )
}

export default MarkerWrapper