import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import authReducer from "./store/reducers/authReducer";
import mapReducer from "./store/reducers/mapReducer";
import sideContentReducer from "./store/reducers/sideContentReducer";
import driverReducer from "./store/reducers/driverReducer";
import homeReducer from "./store/reducers/homeReducer";
import dashboardSummaryReducer from "./store/reducers/dashboardSummaryReducer";
import travelLogReducer from "./store/reducers/travelLogReducer";
import dashBoardSettingsReducer from "./store/reducers/dashBoardSettingsReducer"

import rootSaga, {watchAuth, watchDashboardSettings, watchHome, watchMap, watchSideContent} from "./store/sagas";
import './assets/Mina-Regular.ttf';
import './assets/Mina-Bold.ttf';
import {BrowserRouter} from "react-router-dom";

const rootReducer = combineReducers({
    map: mapReducer,
    auth: authReducer,
    sideContent: sideContentReducer,
    home: homeReducer,
    driver: driverReducer,
    dashboardSummary: dashboardSummaryReducer,
    travelLog: travelLogReducer,
    dashboardSettings: dashBoardSettingsReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(watchMap);
sagaMiddleware.run(watchSideContent);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchDashboardSettings);
sagaMiddleware.run(watchHome);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter><App/></BrowserRouter>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
