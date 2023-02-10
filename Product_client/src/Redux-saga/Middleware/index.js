import { takeEvery, all } from 'redux-saga/effects'

import { handleGetProduct, handleGetOneProduct } from './ProductMiddle'

import * as ActionTypeProduct from '../Constant/ProductConstant'


function* watchAll() {
    yield all([
        takeEvery(ActionTypeProduct.GET_PRODUCT_REQUEST, handleGetProduct),
        takeEvery(ActionTypeProduct.GETONE_PRODUCT_REQUEST, handleGetOneProduct)
    ])
}

export default watchAll