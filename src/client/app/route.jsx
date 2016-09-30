import React from 'react';
import _ from 'lodash';
import RouteInfoPanel from './routeInfoPanel.jsx'
import actions from './actions';
import { connect } from 'react-redux';

var MIN_EDGE = 48;
var MARGIN = 12;
var INFO_PANEL_DISTANCE = 80;
var INFO_PANEL_EST_CENTER = 55;
var MAP_CENTER = [160, 240];

var sign = x => x >= 0 ? 1 : -1;

class Route extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick(event){
        if (this.props.routeData.selected) {
            return;
        }

        this.props.dispatch(actions.openRouteInfo(this.props.routeData.id));
        event.stopPropagation();
    }

    render() {
        var routeData = this.props.routeData;
        var boundingRect = {
            left: Math.min(routeData.begin[0], routeData.end[0]),
            top: Math.min(routeData.begin[1], routeData.end[1]),
            width: Math.abs(routeData.begin[0] - routeData.end[0]),
            height: Math.abs(routeData.begin[1] - routeData.end[1])
        };

        var center = {
            top: boundingRect.top + boundingRect.height / 2,
            left: boundingRect.left + boundingRect.width / 2
        };

        var responsiveAreaSize = {
            width: Math.max(boundingRect.width - 2 * MARGIN, MIN_EDGE),
            height: Math.max(boundingRect.height - 2 * MARGIN, MIN_EDGE),
        };

        var responsiveBoxStyle = _.assign(responsiveAreaSize, {
            left: center.left - responsiveAreaSize.width / 2,
            top: center.top - responsiveAreaSize.height / 2
        });

        var infoPanelBox = {
            left: center.left + sign(MAP_CENTER[0] - center.left) * INFO_PANEL_DISTANCE - INFO_PANEL_EST_CENTER,
            top: center.top + sign(MAP_CENTER[1] - center.top) * INFO_PANEL_DISTANCE - INFO_PANEL_EST_CENTER,
        };
        return (
            <div>
                <div className="route" style={responsiveBoxStyle} onClick={this.onClick.bind(this)}></div>
                <RouteInfoPanel show={routeData.selected} infoPanelBox={infoPanelBox} routeData={routeData}></RouteInfoPanel>
            </div>
        );
    }
}

export default connect(state => ({}))(Route);