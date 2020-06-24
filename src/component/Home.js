import React from 'react';
import RMap from './RMap';

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            center: {
                lat: 0,
                lng: 0
            } 
        }
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((pos)=>{
            this.setState({center:{lat:pos.coords.latitude,lng:pos.coords.longitude}})
        })
    }

    render(){
        return(
            <RMap center={this.state.center}/>
        )
    }
}