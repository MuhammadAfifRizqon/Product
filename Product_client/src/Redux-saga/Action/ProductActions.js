import * as ActionType from '../Constant/ProductConstant'

export const GetProductRequest = () => ({
    type: ActionType.GET_PRODUCT_REQUEST
})

export const GetProductSuccess = (payload) => ({
    type: ActionType.GET_PRODUCT_SUCCESS,
    payload
})

export const GetProductFailed = (payload) => ({
    type: ActionType.GET_PRODUCT_FAILED,
    payload
})

export const GetOneProductRequest = (payload) => ({
    type: ActionType.GETONE_PRODUCT_REQUEST,
    payload
})

export const GetOneProductSuccess = (payload) => ({
    type: ActionType.GETONE_PRODUCT_SUCCESS,
    payload
})

export const GetOneProductFailed = (payload) => ({
    type: ActionType.GETONE_PRODUCT_FAILED,
    payload
})

