import React from 'react';
import _ from 'lodash';

class Line extends React.Component {

    constructor(props) {
        super(props);
    }

    getLineParams(){
        var viewport = {
            w: window.innerWidth,
            h: window.innerHeight
        };

        var begin = this.props.begin;
        var end = this.props.end;
        var dx = viewport.w * (begin.x - end.x) / 100;
        var dy = viewport.h * (begin.y - end.y) / 100;
        var dist = Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2));
        var angle = Math.atan2(dy, dx) - Math.PI;

        return {
            x: viewport.w * begin.x / 100,
            y: viewport.h * begin.y / 100,
            d: dist,
            a: angle
        }
    }

    render() {
        var lineParams = this.getLineParams()
        return (
            <div className='line'
                 data-metaatt={this.props.tt}
                 style={{
                     top: lineParams.y + 'px',
                     left: lineParams.x + 'px',
                     width: lineParams.d + 'px',
                     transform: 'rotateZ(' + lineParams.a + 'rad)'
                 }}/>

        );
    }
}

export default Line;