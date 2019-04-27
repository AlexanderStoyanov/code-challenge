import {
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS,
    PRODUCTS_REQUEST_FAILURE
} from './productsAction';

const initialState = {
    loading: false,
    products: null,
    error: null
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                    loading: true
                };
        case RECEIVE_PRODUCTS:
            return {
                    loading: false,
                    error: null,
                    products: action.payload,
                };
        case PRODUCTS_REQUEST_FAILURE:
            return {
                    loading: false,
                    error: action.payload.error
                };
        default:
            return state;
    }
}