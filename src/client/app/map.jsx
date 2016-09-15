import React from 'react';

class Map extends React.Component {
    render() {
        return (
            <div className="map">
                <div className="mapContainer">
                    <img src="resources/demoMap.webp"/>
                </div>
                <div className="bannerContainer animate">
                    <h3 className="mapName">laughing steppes</h3>
                </div>
            </div>
        );
    }
}

export default Map;