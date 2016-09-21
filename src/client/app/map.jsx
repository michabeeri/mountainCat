import React from 'react';
import _ from 'lodash';
import MapLocationDetails from './mapLocationDetails.jsx';

var location = {
    coordinates: {
        x: 50,
        y: 50
    }
}

var conditional = (condition, jsx) => {return condition && jsx};

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
        return (
            <div className="map" onClick={this.onClick}>
                <div id="mapContainer" className={currentLocation ? "unfocus" : ""}>
                    <img src="resources/demoMapTransperent.webp"/>
                </div>
                <div className="bannerContainer animate">
                    <h3 className="mapName">laughing steppes</h3>
                </div>
                {conditional(currentLocation, <MapLocationDetails location={currentLocation}/>)}
            </div>
        );
    }
}

export default Map;