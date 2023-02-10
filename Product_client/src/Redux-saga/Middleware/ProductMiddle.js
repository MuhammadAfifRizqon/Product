import { call, put } from 'redux-saga/effects'
import ProductApi from '../../api/ProductApi'
import {
    GetProductSuccess, GetProductFailed, GetOneProductSuccess, GetOneProductFailed
} from '../Action/ProductActions'

function* handleGetProduct() {
    try {
        const result = yield call(ProductApi.list)
        yield put(GetProductSuccess(result))
    } catch (error) {
        yield put(GetProductFailed(error))
    }
}

function* handleGetOneProduct(action) {
    const { payload } = action
    try {
        const result = yield call(ProductApi.filtering, payload)
        yield put(GetOneProductSuccess(result))
    } catch (error) {
        yield put(GetOneProductFailed(error))
    }
}



export {
    handleGetProduct,
    handleGetOneProduct,
}