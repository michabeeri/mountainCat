import React from 'react';
import _ from 'lodash';

var viewportPercentRatio = 5;

class Line extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var begin = this.props.begin;
        var end = this.props.end;
        var dx = window.innerWidth * (begin.x - end.x) / 100;
        var dy = window.innerHeight * (begin.y - end.y) / 100;
        var dist = Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2));
        var angle = Math.atan2(dy, dx) - Math.PI;
        return (
            <div className='line'
                 style={{
                     width: dist + 'px',
                     transform: 'rotateZ(' + angle + 'rad)'
                 }}/>

        );
    }
}

export default Line;