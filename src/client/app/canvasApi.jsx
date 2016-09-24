import React from 'react';
import _ from 'lodash';

var route = {
    begin: [100, 100],
    route: [150, 120, 220, 270, 300, 300],
    progress: 0.5
}

var conditional = (condition, jsx) => {return condition && jsx};

class CanvasApi extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate () {
        this.draw();
    }

    componentDidMount () {
        this.draw();
    }

    draw () {
        var path = this.props.path;
        var canvas = this.refs.canvas;
        var ctx = canvas.getContext('2d');

        ctx.setLineDash([8, 15]);
        ctx.beginPath();
        ctx.moveTo(...path[0].begin);
        ctx.bezierCurveTo(...path[0].route);
        ctx.lineWidth = 2;

        // set line color
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    }

    render() {
        return (
            <canvas id="pathCanvas" ref="canvas" width={window.innerWidth} height={window.innerHeight}></canvas>
        );
    }
}

export default CanvasApi;