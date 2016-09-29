import types from '../actionTypes.js';

const initialState = {
    openedRouteInfoId: null
};

export default function main(state = initialState, action) {
    switch (action.type) {

        case types.OPEN_ROUTE_INFO:
            return {
                openedRouteInfoId: action.id
            };

        case types.CLOSE_ROUTE_INFO:
            return {
                openedRouteInfoId: null
            };

        default:
            return state;
    }
}