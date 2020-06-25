import React from 'react';
import { Marker } from '@react-google-maps/api';
import InfoWindowWrapper from './InfoWindow/InfoWindowWrapper';



class MarkerWrapper extends React.Component {

    state = {
        showInfoWindow: false,
        showDirection:false
    }

    urlBottom = "http://localhost:3000/redpin32.png"
    urlBottom=this.urlBottom+"#"+(Math.random()*100000000)

    // urlTop = "http://localhost:3000/circle-16.ico"
    // urlTop=this.urlTop+"#"+(Math.random()*100000000)

    iconBottom = {
        url: this.urlBottom,
        scaledSize: new window.google.maps.Size(30, 30),
        anchor: { x: 10, y: 10 }
    };

    // iconTop = {
    //     url: this.urlTop,
    //     scaledSize: new window.google.maps.Size(15, 15),
    //     anchor: { x: 10, y: 10 }
    // };

    handleMouseOver = () => {
        this.setState({ showInfoWindow: true })
    }

    handleMouseOut = () => {
        this.setState({ showInfoWindow: false })
    }

    componentDidMount(){
        this.setState({showDirection:true})
    }

    componentDidUpdate() {
        // const distance = this.getDistance()
        // if (!distance) {
        //     return
        // }

        // let progress = this.path.filter(coordinates => coordinates.distance < distance)

        // const nextLine = this.path.find(coordinates => coordinates.distance > distance)

        // let point1, point2

        // if (nextLine) {
        //     point1 = progress[progress.length - 1]
        //     point2 = nextLine
        // } else {
        //     point1 = progress[progress.length - 2]
        //     point2 = progress[progress.length - 1]
        // }
        // var actualAngle = window.google.maps.geometry.spherical.computeHeading(point1LatLng, point2LatLng) - 180


        var actualAngle = -120
        let marker = document.querySelector(`[src="${this.url}"]`)

        if (marker)
            marker.style.transform = `rotate(${actualAngle}deg)`
    }


    render() {

        const { position, onClick } = this.props

        return (
            <>
            <Marker position={position}
                icon={this.iconBottom}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                onClick={onClick}
                draggable={true}
            >
                {this.state.showInfoWindow &&
                    (<InfoWindowWrapper data={{ Latitude: position.lat.toFixed(5), Longitude: position.lng.toFixed(5), MeasurementDate: (new Date()).toString() }} position={position} />)
                }
            </Marker>
            {/* <Marker position={position}
            icon={this.iconTop}></Marker> */}
            </>
        )
    }
}

export default MarkerWrapper