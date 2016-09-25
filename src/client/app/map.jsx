import React from 'react';
import _ from 'lodash';
import MapLocationDetails from './mapLocationDetails.jsx';
import Marker from './marker.jsx';
import Line from './line.jsx';
import CanvasApi from './CanvasApi.jsx';
import Route from './Route.jsx'

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

var routesData = [
    {id:"STRTR001", begin: [149, 434], control: [165, 365, 250, 350], end: [236, 334]},
    {id:"R001R002", begin: [234, 318], control: [220, 290, 230, 350], end: [187, 267]},
    {id:"R002R003", begin: [181, 251], control: [190, 220, 210, 200], end: [222, 190]},
    {id:"R003BRDG", begin: [218, 182], control: [190, 160, 170, 150], end: [146, 144]},
    {id:"STRTL001", begin: [133, 434], control: [80, 385, 150, 360], end: [104, 320]},
    {id:"L001L002", begin: [88, 304], control: [60, 290, 60, 220], end: [46, 171]},
    {id:"L002BRDG", begin: [46, 155], control: [70, 150, 100, 118], end: [126, 136]},
    {id:"BRDGFINL", begin: [142, 136], control: [145, 120, 152, 100], end: [160, 89]}
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

    render() {
        var currentLocation = this.state.location;
        return (
            <div id="map" onClick={this.onClick.bind(this)}>
                <div id="mapBackground" className={currentLocation ? "unfocus" : ""}/>
                {_.map(locations, function(l, i){return <Marker key={"marker" + i} location={l}/>;})}
                <CanvasApi path={routesData}/>
                {_.map(routesData, function(r){return <Route key={r.id} routeData={r}/>;})}
                {conditional(currentLocation, <MapLocationDetails location={currentLocation}/>)}
            </div>
        );
    }
}

export default Map;