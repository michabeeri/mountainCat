import React from 'react';
import _ from 'lodash';

var MIN_EDGE = 48;
var MARGIN = 12;

class Route extends React.Component {

    constructor(props) {
        super(props);
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

        return (
            <div className="route" style={responsiveBoxStyle}></div>
        );
    }
}

export default Route;