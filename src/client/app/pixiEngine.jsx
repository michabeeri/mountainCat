import React from 'react';
import PIXI from 'pixi';

class PixiEngine extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount(){
    //     var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
    //     this.refs.pixiEngineContainer.appendChild(renderer.view);
    //
    //     // create the root of the scene graph
    //     var stage = new PIXI.Container();
    //
    //     // create a texture from an image path
    //     var texture = PIXI.Texture.fromImage('resources/woods1.webp');
    //
    //     // create a new Sprite using the texture
    //     var bunny = new PIXI.Sprite(texture);
    //
    //     // center the sprite's anchor point
    //     bunny.anchor.x = 0.5;
    //     bunny.anchor.y = 0.5;
    //
    //     // move the sprite to the center of the screen
    //     bunny.position.x = 200;
    //     bunny.position.y = 150;
    //
    //     stage.addChild(bunny);
    //
    //     // start animating
    //     animate();
    //     function animate() {
    //         requestAnimationFrame(animate);
    //
    //         // just for fun, let's rotate mr rabbit a little
    //         bunny.rotation += 0.1;
    //
    //         // render the container
    //         renderer.render(stage);
    //     }
    //
    // }

    render() {
        console.log(Pixi);
        return (
            <div id="pixiEngineContainer"></div>
        );
    }
}

export default PixiEngine;