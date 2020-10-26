import {put, takeEvery} from 'redux-saga/effects';
import axios from "axios";
import * as actions from "../actions";
import * as actionTypes from '../actions/actionTypes'

const FETCH_RECENT_ROUTES_END_POINT = 'recentRoutes'

function* getDashboardSummaryData(action) {
    const customerID = action.customerID;
    const startDate = action.startDate;
    const endDate = action.endDate;

    const apiUrl = process.env.REACT_APP_API_URL + `getSummary?customerID=${customerID}&startDate=${startDate}&endDate=${endDate}`;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://www.routesonar.com';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'http://www.routesonar.com';
        axios.defaults.headers.post['Access-Control-Expose-Headers'] = 'http://www.routesonar.com';
        axios.defaults.headers.post['Access-Control-Allow-Credentials'] = true;
        const response = yield axios.get(apiUrl);
        if (response.status === 200) {
            yield put({
                type: 'DASHBOARD_SUMMARY_SUCCESS',
                data: response.data
            })
        } else {
            throw Error;
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: 'DASHBOARD_SUMMARY_FAILURE',
            error: error.message
        })
    }
}

export function* fetchRecentRoutesSaga(action) {
    yield put(actions.startFetchRecentRoutes(true))
    const queryParams = '?customerID=' + action.customerId + '&startDate=' + action.startDate + '&endDate=' + action.endDate + '&limit=' + action.limit;
    let url = process.env.REACT_APP_API_URL + FETCH_RECENT_ROUTES_END_POINT;
    try {
        const recentRoutes = [];
        const response = yield axios.get(url + queryParams);
        response.data.map(route => {
            recentRoutes.push(route);
        })
        yield put(actions.setFetchRecentRoutesSuccess(recentRoutes));
    } catch (error) {
        if (error) {
            console.log(error);
            yield put(actions.setFetchRecentRoutesFail(error));
        }
    }
}

export function* fetchSpecificRouteSaga(action) {
    let url = process.env.REACT_APP_API_URL + 'route?tripID=' + action.tripIDPayload;
    try {
        const response = yield axios.get(url);
        yield put(actions.fetchSpecificRouteSuccess(response));
    } catch (error) {
        if (error) {
            console.log(error);
            yield put(actions.fetchSpecificRouteFail(error));
        }
    }
}

export function* fetchWeeklySummarySaga(action) {

    let url = process.env.REACT_APP_API_URL + 'weeklyOrders?customerID=' + action.payload;
    try {
        const response = yield axios.get(url);
        const data = {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: 'Avg orders delivered',
                backgroundColor: 'rgba(23, 162, 184,0.5)',
                borderColor: 'rgba(23, 162, 184,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(23, 162, 184,1)',
                hoverBorderColor: 'rgba(23, 162, 184,0.5)',
                data: [65, 59, 80, 81, 56, 55, 40, 12]
            }, {
                label: 'Avg distance traveled (km)',
                backgroundColor: 'rgba(0, 123, 255,0.5)',
                borderColor: 'rgba(0, 123, 255,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 123, 255,1)',
                hoverBorderColor: 'rgba(0, 123, 255,0.5)',
                data: [135, 139, 60, 71, 142, 123, 67, 35]
            }]
        };
        const weeklyOrders = response.data;
        let avgDistance = [];
        let avgOrders = [];
        for (let i=0; i<7; i++){
            if (i===0){
                if (weeklyOrders['Monday']){
                    avgDistance.push(weeklyOrders['Monday'].distanceTravelled);
                    avgOrders.push(weeklyOrders['Monday'].ordersDelivered);
                }
                else{
                    avgDistance.push(0);
                    avgOrders.push(0);
                }
                
            }
            else if (i===1){
                if (weeklyOrders['Tuesday']){
                    avgDistance.push(weeklyOrders['Tuesday'].distanceTravelled);
                    avgOrders.push(weeklyOrders['Tuesday'].ordersDelivered);
                }
                else{
                    avgDistance.push(0);
                    avgOrders.push(0);
                }
                
            }
            else if (i===2){
                if (weeklyOrders['Wednesday']){
                    avgDistance.push(weeklyOrders['Wednesday'].distanceTravelled);
                    avgOrders.push(weeklyOrders['Wednesday'].ordersDelivered);
                }
                else{
                    avgDistance.push(0);
                    avgOrders.push(0);
                }
                
            }
            else if (i===3){
                if (weeklyOrders['Thursday']){
                    avgDistance.push(weeklyOrders['Thursday'].distanceTravelled);
                    avgOrders.push(weeklyOrders['Thursday'].ordersDelivered);
                }
                else{
                    avgDistance.push(0);
                    avgOrders.push(0);
                }
                
            }
            else if (i===4){
                if (weeklyOrders['Friday']){
                    avgDistance.push(weeklyOrders['Friday'].distanceTravelled);
                    avgOrders.push(weeklyOrders['Friday'].ordersDelivered);
                }
                else{
                    avgDistance.push(0);
                    avgOrders.push(0);
                }
            }
            else if (i===5){
                if (weeklyOrders['Saturday']){
                    avgDistance.push(weeklyOrders['Saturday'].distanceTravelled);
                    avgOrders.push(weeklyOrders['Saturday'].ordersDelivered);
                }
                else{
                    avgDistance.push(0);
                    avgOrders.push(0);
                }
            }
            else if (i===6){
                if (weeklyOrders['Sunday']){
                    avgDistance.push(weeklyOrders['Sunday'].distanceTravelled);
                    avgOrders.push(weeklyOrders['Sunday'].ordersDelivered);
                }
                else{
                    avgDistance.push(0);
                    avgOrders.push(0);
                }
            }
        }

        data.datasets[0].data = avgOrders;
        data.datasets[1].data = avgDistance;
        // hello.forEach(element => {
            
        // });

        yield put(actions.fetchWeeklySummarySuccess(data));
    } catch (error) {
        if (error) {
            console.log(error);
            yield put(actions.fetchWeeklySummaryFail(error));
        }
    }
}

export function* dashboardSummarySaga() {
    yield takeEvery(actionTypes.DASHBOARD_SUMMARY_REQUEST, getDashboardSummaryData)
    yield takeEvery(actionTypes.FETCH_RECENT_ROUTES, fetchRecentRoutesSaga)
    yield takeEvery(actionTypes.FETCH_SPECIFIC_ROUTE_REQUEST, fetchSpecificRouteSaga)
    yield takeEvery(actionTypes.FETCH_WEEKLY_SUMMARY_REQUEST, fetchWeeklySummarySaga)
}