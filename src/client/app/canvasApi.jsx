import React from 'react';
import _ from 'lodash';

var route = {
    begin: [100, 100],
    route: [165, 365, 250, 350, 242, 326],
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

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setLineDash([10, 15]);
        ctx.beginPath();

        _.forEach(path, p => {
            ctx.moveTo(...p.begin);
            ctx.bezierCurveTo(...p.route);
        });

        ctx.lineWidth = 2;

        // set line color
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    }

    render() {
        return (
            <canvas id="pathCanvas" ref="canvas" width='320px' height='480px'></canvas>
        );
    }
}

export default CanvasApi;