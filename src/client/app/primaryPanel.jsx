import React from 'react';
import _ from 'lodash';

var conditional = (condition, jsx) => {return condition && jsx};

class PrimaryPanel extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {location: null};
    }

    render() {
        return (
            <div id="primaryPanel">
                <div id="hungerIndicator" className="panelIndicator">
                    <h6>{"55"}</h6>
                </div>
                <div id="thirstIndicator" className="panelIndicator">
                    <h6>{"55"}</h6>
                </div>
                <div id="restIndicator" className="panelIndicator">
                    <h6>{"55"}</h6>
                </div>
                <div id="healthIndicator" className="panelIndicator">
                    <h6>{"55"}</h6>
                </div>
            </div>
        );
    }
}

export default PrimaryPanel;