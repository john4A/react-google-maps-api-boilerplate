import React, { useEffect, useState } from 'react';
import { GoogleMap, MarkerClusterer, HeatmapLayer } from '@react-google-maps/api'
import { withRouter } from 'react-router';
import * as data from './latlngtyp.json'
import MarkerWrapper from './MarkerWrapper/MarkerWrapper';
import Toast from './Toast';
import * as iconHelper from '../helpers/iconHelper'

const containerStyle = {
    width: '100%',
    height: '100%'
};

const RMap = (props) => {
    const { center } = props

    const [showToast, setShowToast] = useState(false)

    const [isHeatMap, setIsHeatMap] = useState(true)


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

    const criticalStyles = [
        {
            url: iconHelper.getClusterIcon(1),
            height: 32,
            width: 32,
        }
    ]

    const warningStyles = [
        {
            url: iconHelper.getClusterIcon(2),
            height: 32,
            width: 32,
        }
    ]

    const calculator = (markers, numStyles) => {
        var index = 1;
        var total = markers.length

        return {
            text: total + "",
            index: index
        }
    }

    return (
        <>
            <GoogleMap
                center={center}
                mapContainerStyle={containerStyle}
                zoom={3}
            >

                {isHeatMap && <HeatmapLayer data={latLongData.default.map(coord => new window.google.maps.LatLng(coord.latitude, coord.longitude))} />}
                {!isHeatMap &&
                    <>
                        <MarkerClusterer
                            averageCenter
                            enableRetinaIcons
                            gridSize={60}
                        >

                            {clusterer => {
                                clusterer.setCalculator(calculator)
                                clusterer.setStyles(criticalStyles)
                                return (
                                    <>
                                        <MarkerWrapper position={center} onClick={handleClick} clusterer={clusterer} />
                                        {
                                            latLongData.default.filter(data => data.type === 1).map(coord => (
                                                <MarkerWrapper position={{
                                                    lat: coord.latitude,
                                                    lng: coord.longitude
                                                }}
                                                    onClick={handleClick}
                                                    clusterer={clusterer}
                                                    imgUrl={iconHelper.getMarkerIcon(1)}
                                                    zIndex={2}
                                                />
                                            ))
                                        }
                                    </>)
                            }}
                        </MarkerClusterer>

                        <MarkerClusterer
                            averageCenter
                            enableRetinaIcons
                            gridSize={60}
                        >

                            {clusterer => {
                                clusterer.setCalculator(calculator)
                                clusterer.setStyles(warningStyles)

                                return (
                                    <>
                                        <MarkerWrapper position={center} onClick={handleClick} clusterer={clusterer} />
                                        {
                                            latLongData.default.filter(data => data.type === 2).map(coord => (
                                                <MarkerWrapper position={{
                                                    lat: coord.latitude,
                                                    lng: coord.longitude
                                                }}
                                                    onClick={handleClick}
                                                    clusterer={clusterer}
                                                    imgUrl={iconHelper.getMarkerIcon(2)}
                                                    zIndex={1}
                                                />
                                            ))
                                        }
                                    </>)
                            }}
                        </MarkerClusterer>
                    </>}

            </GoogleMap>
            {showToast && <Toast message="Can't show all the warnings on the map" handleClick={handleToastClose} />}
        </>
    )
}

export default withRouter(RMap)