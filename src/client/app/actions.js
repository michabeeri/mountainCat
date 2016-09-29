import types from './actionTypes.js';

export default {
    openRouteInfo: function (id){
        return {
            type: types.OPEN_ROUTE_INFO,
            id
        };
    },

    closeRouteInfo: function closeRouteInfo() {
        return {
            type: types.CLOSE_ROUTE_INFO
        };
    }
}