import React from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api'
import { withRouter } from 'react-router';
import * as data from './MOCK_DATA.json'
import MarkerWrapper from './MarkerWrapper';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const RMap = (props) => {
    const { center } = props


    var latLongData = JSON.parse(JSON.stringify(data))
    console.log(latLongData)

    const handleClick=()=>{
        props.history.push('/measurement')
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyDC0Vs8lp4QEFLUcwsirMfdJEAQB7xcBgY">
            <GoogleMap
                center={center}
                mapContainerStyle={containerStyle}
                zoom={10}
            >
                <MarkerWrapper position={center} />
                {latLongData.default.map(coord => (
                    <MarkerWrapper position={{
                        lat: coord.latitude,
                        lng: coord.longitude
                    }} 
                    onClick={handleClick}/>
                ))}


            </GoogleMap>
        </LoadScript>
    )
}

export default withRouter(RMap)