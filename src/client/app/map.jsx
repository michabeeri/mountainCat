import React from 'react';
import _ from 'lodash';
import MapLocationDetails from './mapLocationDetails.jsx';

var location = {
    coordinates: {
        x: 30,
        y: 30
    }
}

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {location: null};
        this.onClick = this.onClick.bind(this);
    }

    // onLocationSelected (event) {
    //     this.setState({location: location});
    // }

    onClick (event) {
        this.setState({location: this.state.location ? null : location});
    }

    render() {
        var currentLocation = this.state.location;
        // const locationContainerStyle = currentLocation ? {
        //     left: _.get(currentLocation, 'coordinates.x', 0) + '%',
        //     top: _.get(currentLocation, 'coordinates.y', 0) + '%'
        // }: {}
        return (
            <div className="map" onClick={this.onClick}>
                <div id="mapContainer" className={currentLocation ? "unfocus" : ""}>
                    <img src="resources/demoMap.webp"/>
                </div>
                <div className="bannerContainer animate">
                    <h3 className="mapName">laughing steppes</h3>
                </div>
                <MapLocationDetails location={this.state.location}/>
            </div>
        );
    }
}

export default Map;