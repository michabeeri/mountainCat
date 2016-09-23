import React from 'react';
import _ from 'lodash';

class Marker extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var left = this.props.location.coordinates.x - 4;
        var top = this.props.location.coordinates.y - 4;
        return (
            <div className="marker"
                 style={{
                     left: left + '%',
                     top: top + '%'
                 }}>
                <img src="resources/marker.webp"/>
            </div>
        );
    }
}

export default Marker;