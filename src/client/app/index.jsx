import React from 'react';
import {render} from 'react-dom';
import Map from './map.jsx';
import PrimaryPanel from './primaryPanel.jsx';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers } from 'redux';
import main from './reducers/main';
import actions from './actions';

const finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(main);

class App extends React.Component {
    onClick() {
        store.dispatch(actions.closeRouteInfo());
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
