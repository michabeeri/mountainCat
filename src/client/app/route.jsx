import React from 'react';
import _ from 'lodash';
import RouteInfoPanel from './routeInfoPanel.jsx'
import actions from './actions';
import { connect } from 'react-redux';

var MIN_EDGE = 48;
var MARGIN = 12;
var INFO_PANEL_DISTANCE = 60;
var MAP_CENTER = [160, 240];

var sign = x => x >= 0 ? 1 : -1;

class Route extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick(event){
        if (this.props.showInfoPanel) {
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
            left: responsiveBoxStyle.left + sign(MAP_CENTER[0] - responsiveBoxStyle.left) * INFO_PANEL_DISTANCE,
            top: responsiveBoxStyle.top + sign(MAP_CENTER[1] - responsiveBoxStyle.top) * INFO_PANEL_DISTANCE,
        };
        return (
            <div>
                <div className="route" style={responsiveBoxStyle} onClick={this.onClick.bind(this)}></div>
                <RouteInfoPanel show={this.props.showInfoPanel} infoPanelBox={infoPanelBox}></RouteInfoPanel>
            </div>
        );
    }
}

export default connect(state => ({}))(Route);