import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {getAllPizzasReducer} from './reducers/pizzaReducers'
import {cartReducer} from './reducers/cartReducer'
import { registerUserReducer } from './reducers/userReducer'
import { loginUserReducer } from './reducers/userReducer'
import {placeOrderReducer} from './reducers/orderReducer'
import {getUserOrdersReducer} from './reducers/orderReducer'
import {addPizzaReducer} from './reducers/pizzaReducers'
import { getPizzaByIdReducer } from './reducers/pizzaReducers'
import { editPizzaReducer } from './reducers/pizzaReducers'
import { getAllOrdersReducer } from './reducers/orderReducer'
import { getAllUsersReducer } from './reducers/userReducer'


const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addPizzaReducer : addPizzaReducer,
    getPizzaByIdReducer :getPizzaByIdReducer,
    editPizzaReducer : editPizzaReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllUsersReducer : getAllUsersReducer

})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    cartReducer : {
       cartItems: cartItems    
},
loginUserReducer : {
    currentUser : currentUser
}
}
const composeEnhancers= composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store