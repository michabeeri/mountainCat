import React from 'react';
import _ from 'lodash';

class Marker extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var left = this.props.location.coordinates.x - 12;
        var top = this.props.location.coordinates.y - 12;
        return (
            <div className="marker"
                 style={{
                     left: left + 'px',
                     top: top + 'px'
                 }}>
            </div>
        );
    }
}

export default Marker;