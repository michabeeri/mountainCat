import React from 'react';
import _ from 'lodash';

class mapLocationDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {prevLocation: null};
    }

    componentWillReceiveProps(){
        this.setState({prevLocation: this.props.location ? this.props.location : this.props.prevLocation});
    }

    render() {
        var location = this.props.location;
        var prevLocation = this.state.prevLocation;
        return (
        <div id="locationContainer"
            className={location ? "show" : ""}
            style={{
                left: _.get(location, 'coordinates.x', _.get(prevLocation, 'coordinates.x', 0)) + '%',
                top: _.get(location, 'coordinates.y', _.get(prevLocation, 'coordinates.y', 0)) + '%'
            }}>
            <img src="resources/woods1.webp"/>
        </div>
        );
    }
}

export default mapLocationDetails;