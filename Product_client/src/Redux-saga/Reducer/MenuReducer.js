import * as ActionType from '../Constant/ProductConstant'

const INIT_STATE = {
    viewProducts: [],
    viewProduct: []
}

const ProductReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_REQUEST:
            return { ...state }
        case ActionType.GET_PRODUCT_SUCCESS:
            return GetProductSucceed(state, action)
        case ActionType.GETONE_PRODUCT_REQUEST:
            return { ...state }
        case ActionType.GETONE_PRODUCT_SUCCESS:
            return GetOneProductSucceed(state, action)
        default:
            return GetProductSucceed(state, action)
    }
}

const GetProductSucceed = (state, action) => {
    return {
        ...state,
        viewProducts: action.payload
    }
}

const GetOneProductSucceed = (state, action) => {
    return {
        ...state,
        viewProduct: action.payload
    }
}

export default ProductReduce