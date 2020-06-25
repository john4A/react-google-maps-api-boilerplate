import React, { useEffect, useState } from 'react';
import { LoadScript, GoogleMap, MarkerClusterer } from '@react-google-maps/api'
import { withRouter } from 'react-router';
import * as data from './MOCK_DATA.json'
import MarkerWrapper from './MarkerWrapper/MarkerWrapper';
import Toast from './Toast';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const RMap = (props) => {
    const { center } = props

    const [showToast, setShowToast] = useState(false)


    var latLongData = JSON.parse(JSON.stringify(data))

    const handleClick = () => {
        props.history.push('/measurement')
    }

    useEffect(() => {
        if (latLongData.default.length > 999) {
            setShowToast(true)
        }
    }, [])

    const handleToastClose = () => {
        setShowToast(false)
    }

    return (
        <>
            <LoadScript googleMapsApiKey="AIzaSyDC0Vs8lp4QEFLUcwsirMfdJEAQB7xcBgY">
                <GoogleMap
                    center={center}
                    mapContainerStyle={containerStyle}
                    zoom={13}
                >
                    <MarkerClusterer
                        averageCenter
                        enableRetinaIcons
                        gridSize={60}
                    >

                        {clusterer => (
                            <>
                                <MarkerWrapper position={center} onClick={handleClick} clusterer={clusterer}/>
                                {
                                    latLongData.default.map(coord => (
                                        <MarkerWrapper position={{
                                            lat: coord.latitude,
                                            lng: coord.longitude
                                        }}
                                            onClick={handleClick}
                                            clusterer={clusterer}
                                        />
                                    ))
                                }
                            </>)}
                    </MarkerClusterer>

                </GoogleMap>
            </LoadScript>
            {showToast && <Toast message="Can't show all the warnings on the map" handleClick={handleToastClose} />}
        </>
    )
}

export default withRouter(RMap)