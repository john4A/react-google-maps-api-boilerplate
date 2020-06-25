import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import './info-window.css'

const InfoWindowWrapper = ({ data,position }) => {
    return (
        <InfoWindow position={position}>
            <div>
                {Object.keys(data).map(key => (
                    <div className="row" key={key}>
                        <div className="key">
                            <b>{key}</b>
                        </div>
                        <div className="val">
                            <span>{data[key]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </InfoWindow>
    )
}

export default InfoWindowWrapper