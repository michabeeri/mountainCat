import React from 'react';
import {render} from 'react-dom';
import Map from './map.jsx';
// import PixiEngine from './pixiEngine.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <Map/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
