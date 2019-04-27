import axios from 'axios';
import request from '../common/request';
import receive from '../common/receive';
import error from '../common/error';

const proxy = {
    host: '127.0.0.1',
    port: 3030
}

//Loads products @init
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const PRODUCTS_REQUEST_FAILURE = 'PRODUCTS_REQUEST_FAILURE';
export const loadProducts = () => {
    return async dispatch => {
        dispatch(request(REQUEST_PRODUCTS));
        try {
            let res = await axios.get('/products', { proxy });
            dispatch(receive(RECEIVE_PRODUCTS, res.data.payload));
        } catch (err) {
            dispatch(error(PRODUCTS_REQUEST_FAILURE, err.message));
        }
    };
};