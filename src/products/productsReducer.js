import {
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS,
    PRODUCTS_REQUEST_FAILURE,
    REQUEST_PRODUCT,
    RECEIVE_PRODUCT,
    PRODUCT_REQUEST_FAILURE
} from './productsAction';

const initialState = {
    loading: false,
    products: null,
    product: null,
    error: null
};

//Redux reducer that listens to actions and changes the state accordingly
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
        case REQUEST_PRODUCT:
            return {
                loading: true
            };
        case RECEIVE_PRODUCT:
            return {
                loading: false,
                error: null,
                product: action.payload,
            };
        case PRODUCT_REQUEST_FAILURE:
            return {
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}