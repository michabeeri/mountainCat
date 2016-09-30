import _ from 'lodash';
import types from '../actionTypes.js';

const initialState = [
    {id:"STRTR001", begin: [149, 434], control: [165, 365, 250, 350], end: [236, 334], name: 'Brirb Trail'},
    {id:"R001R002", begin: [234, 318], control: [220, 290, 230, 350], end: [187, 267], name: 'Cekipt Route'},
    {id:"R002R003", begin: [181, 251], control: [190, 220, 210, 200], end: [222, 190], name: 'South Fork Trail'},
    {id:"R003BRDG", begin: [218, 182], control: [190, 160, 170, 150], end: [146, 144], name: 'Tuolumne River Trail'},
    {id:"STRTL001", begin: [133, 434], control: [80, 385, 150, 360], end: [104, 320], name: 'Porcupine Creek'},
    {id:"L001L002", begin: [88, 304], control: [60, 290, 60, 220], end: [46, 171], name: 'Parker Pass'},
    {id:"L002BRDG", begin: [46, 155], control: [70, 150, 100, 118], end: [126, 136], name: 'Glen Aulin'},
    {id:"BRDGFINL", begin: [142, 136], control: [145, 120, 152, 100], end: [160, 89], name: 'Happy Isles'}
];

export default function routesData(state = initialState, action) {
    switch (action.type) {

        case types.OPEN_ROUTE_INFO:
            return _.map(initialState, function(rd){
                return _.assign({}, rd, {selected: rd.id === action.id});
            });

        case types.CLOSE_ROUTE_INFO:
            // obsolete - use open with null id
            return _.map(initialState, function(rd){
                return _.assign({}, rd, {selected: false});
            });

        default:
            return state;
    }
}
