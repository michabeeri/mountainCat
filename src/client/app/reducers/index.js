import { combineReducers } from 'redux';
import locationsData from './locationsData';
import routesData from './routesData';
const reducer = combineReducers({
    locationsData,
    routesData
});
export default reducer;
