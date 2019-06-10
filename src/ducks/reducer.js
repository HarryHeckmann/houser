const initialState = {
    propertyName: '',
    address: '',
    city: '',
    propertyState: '',
    zipcode: '',
    image: '',
    mortgage: '',
    rent: ''

}

const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_ADDRESS = "UPDATE_ADDRESS"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UPDATE_STATE"
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"
const UPDATE_IMAGE = "UPDATE_IMAGE"
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE"
const UPDATE_RENT = "UPDATE_RENT"

export const updateName = (propertyName) => {
    return {
        type: UPDATE_NAME,
        payload: propertyName
    }
}
export const updateAddress = (address) => {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export const updateCity = (city) => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export const updateState = (propertyState) => {
    return {
        type: UPDATE_STATE,
        payload: propertyState
    }
}
export const updateZipcode = (zipcode) => {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}
export const updateImage = (image) => {
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}
export const updateMortgage = (mortgage) => {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}
export const updateRent = (rent) => {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}


function reducer(state = initialState, action){
    console.log('REDUCER HIT: Action ->', action)
    switch(action.type){
        case UPDATE_NAME:
        return {
            ...state,
            propertyName: action.payload
        }
        case UPDATE_ADDRESS:
        return {
            ...state,
            address: action.payload
        }
        case UPDATE_CITY:
        return {
            ...state,
            city: action.payload
        }
        case UPDATE_STATE:
        return {
            ...state,
            state: action.payload
        }
        case UPDATE_ZIPCODE:
        return {
            ...state,
            zipcode: action.payload
        }
        case UPDATE_IMAGE:
        return {
            ...state,
            image: action.payload
        }
        case UPDATE_MORTGAGE:
        return {
            ...state,
            mortgage: action.payload
        }
        case UPDATE_RENT:
        return {
            ...state,
            rent: action.payload
        }
        default: return state
    }
}

export default reducer