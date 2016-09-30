import React from 'react';
import _ from 'lodash';
import MapLocationDetails from './mapLocationDetails.jsx';
import Marker from './marker.jsx';
import Line from './line.jsx';
import CanvasApi from './CanvasApi.jsx';
import Route from './Route.jsx'
import { connect } from 'react-redux';

var location = {
    coordinates: {
        x: 50,
        y: 50
    }
}

var conditional = (condition, jsx) => {return condition && jsx};

// @connect(state => ({
//     openedRouteInfoId: state.openedRouteInfoId
// }))

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {location: null};
    }

    // onLocationSelected (event) {
    //     this.setState({location: location});
    // }

    onClick (event) {
        this.setState({location: this.state.location ? null : location});
    }

    getLocationById (id) {
        return _.find(locations, {id: id});
    }

    render() {
        var currentLocation = this.state.location;
        var openedRouteInfoId = this.props.openedRouteInfoId;
        return (
            <div id="map" onClick={this.onClick.bind(this)}>
                <div id="mapBackground" className={currentLocation ? "unfocus" : ""}/>
                {_.map(this.props.locationsData, function(l, i){return <Marker key={"marker" + i} location={l}/>;})}
                <CanvasApi path={this.props.routesData}/>
                {_.map(this.props.routesData, function(r){return <Route key={r.id} routeData={r} showInfoPanel={r.id === openedRouteInfoId}/>;})}
                {/*{conditional(currentLocation, <MapLocationDetails location={currentLocation}/>)}*/}
            </div>
        );
    }
}

export default connect(state => ({
    locationsData: state.locationsData,
    routesData: state.routesData
}))(Map);