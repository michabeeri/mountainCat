import React from 'react';
import _ from 'lodash';
import MapLocationDetails from './mapLocationDetails.jsx';
import Marker from './marker.jsx';
import Line from './line.jsx';
import CanvasApi from './CanvasApi.jsx';

var location = {
    coordinates: {
        x: 50,
        y: 50
    }
}

var locations = [
    {id: 'STRT', coordinates: {x: 141, y: 442}, siblings:['L001', 'R001']},
    {id: 'L001', coordinates: {x: 96, y: 312}, siblings:['STRT', 'L002']},
    {id: 'R001',coordinates: {x: 242, y: 326}, siblings:['STRT', 'R002']},
    {id: 'R002',coordinates: {x: 179, y: 259}, siblings:['R001', 'R003']},
    {id: 'L002',coordinates: {x: 38, y: 163}, siblings:['L001', 'BRDG']},
    {id: 'R003', coordinates: {x: 230, y: 182}, siblings:['R002', 'BRDG']},
    {id: 'BRDG', coordinates: {x: 134, y: 144}, siblings:['L002', 'R003', 'FINL']},
    {id: 'FINL', coordinates: {x: 160, y: 77}, siblings:['BRDG']}


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
            <div id="map" onClick={this.onClick.bind(this)}>
                <div id="mapBackground" className={currentLocation ? "unfocus" : ""}/>
                {_.map(locations, function(l, i){return <Marker key={"marker" + i} location={l}/>;})}
                {/*{this.createPath()}*/}
                <CanvasApi path={[
                    {id:"STRTR001", begin: [149, 434], route: [165, 365, 250, 350, 236, 334]},
                    {id:"R001R002", begin: [234, 318], route: [220, 290, 230, 350, 187, 267]},
                    {id:"R002R003", begin: [181, 251], route: [190, 220, 210, 200, 222, 190]},
                    {id:"R003BRDG", begin: [218, 182], route: [190, 160, 170, 150, 146, 144]},
                    {id:"STRTL001", begin: [133, 434], route: [80, 385, 150, 360, 104, 320]},
                    {id:"L001L002", begin: [88, 304], route: [60, 290, 60, 220, 46, 171]},
                    {id:"L002BRDG", begin: [46, 155], route: [70, 150, 100, 118, 126, 136]},
                    {id:"BRDGFINL", begin: [142, 136], route: [145, 120, 152, 100, 160, 89]}
                ]}/>
                {conditional(currentLocation, <MapLocationDetails location={currentLocation}/>)}
            </div>
        );
    }
}

export default Map;