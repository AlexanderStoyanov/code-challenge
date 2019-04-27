import axios from 'axios';
import request from '../common/request';
import receive from '../common/receive';
import error from '../common/error';

//Loads products @init
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const PRODUCTS_REQUEST_FAILURE = 'PRODUCTS_REQUEST_FAILURE';
export const loadProducts = () => {
    return async dispatch => {
        dispatch(request(REQUEST_PRODUCTS));
        try {
            let res = await axios.get('http://localhost:3030/products');
            dispatch(receive(RECEIVE_PRODUCTS, res.data));
        } catch (err) {
            dispatch(error(PRODUCTS_REQUEST_FAILURE, err.message));
        }
    };
};

//Loads product
export const REQUEST_PRODUCT = 'REQUEST_PRODUCT';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const PRODUCT_REQUEST_FAILURE = 'PRODUCT_REQUEST_FAILURE';
export const loadProduct = (productId) => {
    return async dispatch => {
        dispatch(request(REQUEST_PRODUCT));
        try {
            let res = await axios.post('http://localhost:3030/product/:id', {productId: productId});
            console.log(res);
            dispatch(receive(RECEIVE_PRODUCT, res.data));
        } catch (err) {
            dispatch(error(PRODUCT_REQUEST_FAILURE, err.message));
        }
    };
};