import React from 'react';
import {render} from 'react-dom';
import Map from './map.jsx';
import PrimaryPanel from './primaryPanel.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import actions from './actions';

const store = createStore(reducer);

class App extends React.Component {
    onClick() {
        store.dispatch(actions.openRouteInfo(null));
    }

    render () {
        return (
            <div id="appContainer" onClick={this.onClick.bind(this)}>
                <div className="bannerContainer animate">
                    <h3 className="mapName">laughing steppes</h3>
                </div>
                <Map/>
                <PrimaryPanel/>
            </div>
        );
    }
}

render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('app')
)
