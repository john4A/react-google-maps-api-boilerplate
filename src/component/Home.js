import React from 'react';
import RMap from './RMap';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 0,
                lng: 0
            },
            isScriptLoaded: false
        }
    }
    
    apiKey="AIzaSyDC0Vs8lp4QEFLUcwsirMfdJEAQB7xcBgY"

    componentDidMount() {
        var script=document.createElement("script")
        script.src=`https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=visualization&callback=initMap`
        script.defer=true
        script.async=true

        window.initMap=()=>{
            this.setState({...this.state,isScriptLoaded:true})
        }

        document.head.appendChild(script)


        navigator.geolocation.getCurrentPosition((pos) => {
            this.setState({ center: { lat: pos.coords.latitude, lng: pos.coords.longitude } })
        })
    }
    render() {
        return (
            <>
                {this.state.isScriptLoaded ? < RMap center={this.state.center} />:<div></div>}
            </>
        )
    }
}