import React from 'react';
import _ from 'lodash';

class RouteInfoPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    createIconGroup(type, count){
        return <div className={"iconGroup " + type}>
            {Array(3).fill(0).map((e,i) => <div className={"icon" + (i >= count ? " hidden" : "")} key={type+'icon'+i}/>)}
        </div>
    }

    render() {
        var routeData = this.props.routeData;

        var infoPanelClass = "routeInfoPanel" + (this.props.show ? "" : " hidden");
        return (
            <div className={infoPanelClass} style={this.props.infoPanelBox}>
                {this.createIconGroup('mountain', 3)}
                {this.createIconGroup('river', 1)}
                {this.createIconGroup('tree', 2)}
            </div>
        );
    }
}

export default RouteInfoPanel;