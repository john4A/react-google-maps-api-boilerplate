import React from 'react';
import RMap from './RMap';
import { LoadScript } from '@react-google-maps/api';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 0,
                lng: 0
            },
        }
    }

    apiKey = "AIzaSyDC0Vs8lp4QEFLUcwsirMfdJEAQB7xcBgY"

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.setState({ center: { lat: pos.coords.latitude, lng: pos.coords.longitude } })
        })
    }
    render() {
        return (
            <>
                <LoadScript
                    googleMapsApiKey={this.apiKey}
                    libraries={['visualization']}
                    >
                    < RMap center={this.state.center} />
                </LoadScript>
            </>
        )
    }
}