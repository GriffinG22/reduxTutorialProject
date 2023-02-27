import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import authSlice from './auth';

const store = configureStore({
    reducer: { counter : counterSlice, auth: authSlice}
});

export default store;

/* 
import { createStore } from 'redux';

const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'INCREASE') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'TOGGLE') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }
    
    return state;
};

const store = createStore(counterReducer);

export default store;
*/