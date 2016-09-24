import React from 'react';
import _ from 'lodash';
import MapLocationDetails from './mapLocationDetails.jsx';
import Marker from './marker.jsx';
import Line from './line.jsx';

var location = {
    coordinates: {
        x: 50,
        y: 50
    }
}

var locations = [
    {id: 'STRT', coordinates: {x: 44, y: 92}, siblings:['L001', 'R001']},
    {id: 'L001', coordinates: {x: 30, y: 65}, siblings:['STRT', 'L002']},
    {id: 'R001',coordinates: {x: 70, y: 68}, siblings:['STRT', 'R002']},
    {id: 'R002',coordinates: {x: 56, y: 54}, siblings:['R001', 'R003']},
    {id: 'L002',coordinates: {x: 12, y: 34}, siblings:['L001', 'BRDG']},
    {id: 'R003', coordinates: {x: 72, y: 38}, siblings:['R002', 'BRDG']},
    {id: 'BRDG', coordinates: {x: 42, y: 30}, siblings:['L002', 'R003', 'FINL']},
    {id: 'FINL', coordinates: {x: 50, y: 16}, siblings:['BRDG']}


];

var conditional = (condition, jsx) => {return condition && jsx};

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

    createRoutes (location) {
        return _.map(location.siblings, s => ({
            begin: location.coordinates,
            end: this.getLocationById(s).coordinates,
            key: location.id + this.getLocationById(s).id
        }));
    }

    createPath () {
        return _(locations)
            .map(l => this.createRoutes(l))
            .flatten()
            .map(l => (<Line begin={l.begin} end={l.end} key={l.key} tt={l.key}/>))
            .value();
    }

    render() {
        var currentLocation = this.state.location;
        return (
            <div className="map" onClick={this.onClick.bind(this)}>
                <div id="mapContainer" className={currentLocation ? "unfocus" : ""}>
                    <img src="resources/demoMapTransperent.webp"/>
                </div>
                <div className="bannerContainer animate">
                    <h3 className="mapName">laughing steppes</h3>
                </div>
                {_.map(locations, function(l, i){return <Marker key={"marker" + i} location={l}/>;})}
                {this.createPath()}
                {conditional(currentLocation, <MapLocationDetails location={currentLocation}/>)}
            </div>
        );
    }
}

export default Map;