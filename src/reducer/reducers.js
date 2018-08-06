import { GET_COUNTRIES, GET_BEERS } from '../actions/actions';

const getBeers = fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then(response => response.json())
    .then(data => {
        return data
        console.log(data);
})
;
const initialState = {
    beers: getBeers
};

const beersReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_BEERS:
            return Object.assign({}, state, {beers: state.beers});

        default:
        return state;
    }
};

export default beersReducer;