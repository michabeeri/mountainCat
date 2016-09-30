import React from 'react';
import _ from 'lodash';

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

    setStrokeParams(ctx, routeData){
        var isSelected = routeData.selected;
        ctx.setLineDash([8, 8]);
        ctx.lineWidth = isSelected ? 3 : 2;
        ctx.strokeStyle = isSelected ? '#84325b' : '#003366';
    }

    drawSingleRoute(ctx, rd){
        if(rd.selected){
            ctx.setLineDash([10, 6]);
            ctx.lineDashOffset = 1;
            ctx.lineWidth = 5;
            ctx.strokeStyle ='#a36684';
            ctx.beginPath();
            ctx.moveTo(...rd.begin);
            ctx.bezierCurveTo(...rd.control.concat(rd.end));
            ctx.stroke();
            ctx.setLineDash([8, 8]);
            ctx.lineDashOffset = 0;
            ctx.lineWidth = 3;
            ctx.strokeStyle ='#84325b';
            ctx.beginPath();
            ctx.moveTo(...rd.begin);
            ctx.bezierCurveTo(...rd.control.concat(rd.end));
            ctx.stroke();
        } else {
            ctx.setLineDash([8, 8]);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#003366';
            ctx.beginPath();
            ctx.moveTo(...rd.begin);
            ctx.bezierCurveTo(...rd.control.concat(rd.end));
            ctx.stroke();
        }
    }

    draw () {
        var path = this.props.path;
        var canvas = this.refs.canvas;
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        _.forEach(path, rd => {
            // this.setStrokeParams(ctx, rd);
            // ctx.beginPath();
            // ctx.moveTo(...rd.begin);
            // ctx.bezierCurveTo(...rd.control.concat(rd.end));
            // ctx.stroke();
            this.drawSingleRoute(ctx, rd);
        });
    }

    render() {
        return (
            <canvas id="pathCanvas" ref="canvas" width='320px' height='480px'></canvas>
        );
    }
}

export default CanvasApi;