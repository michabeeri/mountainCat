import React from 'react';
import _ from 'lodash';
import Line from './line.jsx';

class mapLocationDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var location = this.props.location;
        var center = {
            x: location.coordinates.x + 30,
            y: location.coordinates.y - 30
        };
        var left = _.get(center, 'x', 0) - 10; // _.get(prevLocation, 'coordinates.x', 0)) - 10;
        var top = _.get(center, 'y',0) - 10; //_.get(prevLocation, 'coordinates.y', 0)) - 10;
        return (
        <div id="locationContainer"
            className={location ? "show" : ""}
            style={{
                left: left + '%',
                top: top + '%'
            }}>
            <img src="resources/woods1.webp"/>
            <Line begin={center} end={location.coordinates}/>
        </div>
        );
    }
}

export default mapLocationDetails;