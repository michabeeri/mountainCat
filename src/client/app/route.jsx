import React from 'react';
import _ from 'lodash';

var conditional = (condition, jsx) => {return condition && jsx};

class Route extends React.Component {

    constructor(props) {
        super(props);
    }
// {id:"STRTR001", begin: [149, 434], route: [165, 365, 250, 350, 236, 334]},
    render() {
        var routeData = this.props.routeData;
        return (
            <div className="route"
            style={{
                left: Math.min(routeData.begin[0], routeData.end[0]) + 'px',
                top: Math.min(routeData.begin[1], routeData.end[1]) + 'px',
                width: Math.abs(routeData.begin[0] - routeData.end[0]) + 'px',
                height: Math.abs(routeData.begin[1] - routeData.end[1]) + 'px'
            }}></div>
        );
    }
}

export default Route;