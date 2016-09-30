import types from '../actionTypes.js';

const initialState = [
    {id: 'STRT', coordinates: {x: 141, y: 442}, siblings:['L001', 'R001']},
    {id: 'L001', coordinates: {x: 96, y: 312}, siblings:['STRT', 'L002']},
    {id: 'R001',coordinates: {x: 242, y: 326}, siblings:['STRT', 'R002']},
    {id: 'R002',coordinates: {x: 179, y: 259}, siblings:['R001', 'R003']},
    {id: 'L002',coordinates: {x: 38, y: 163}, siblings:['L001', 'BRDG']},
    {id: 'R003', coordinates: {x: 230, y: 182}, siblings:['R002', 'BRDG']},
    {id: 'BRDG', coordinates: {x: 134, y: 144}, siblings:['L002', 'R003', 'FINL']},
    {id: 'FINL', coordinates: {x: 160, y: 77}, siblings:['BRDG']}
];

export default function locationsData(state = initialState, action) {
    switch (action.type) {
        case types.OPEN_ROUTE_INFO:
        case types.CLOSE_ROUTE_INFO:
        default:
            return state;
    }
}
