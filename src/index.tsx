import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "@reduxjs/toolkit";
import {rootReducer} from "./slices/root.reducer";
import {Provider, useDispatch} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./sagas/root.saga";

const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware()
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() //
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
sagaMiddleware.run(rootSaga)