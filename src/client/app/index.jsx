import React from 'react';
import {render} from 'react-dom';
import Map from './map.jsx';
import PrimaryPanel from './primaryPanel.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <Map/>
                <PrimaryPanel/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
