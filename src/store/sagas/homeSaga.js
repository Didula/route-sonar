import axios from "axios";

const CONSUMPTION_SAVE_END_POINT = 'consumptionAdd'

export function* saveApiConsumptionSaga(action) {
    const saveApiConsumptionRequest = {
        "customer_id": action.customerId,
        "places": action.placesNumber,
        "directions": action.directionsNumber,
        "geocoding": action.geoCodeNumber
    }
    let url = process.env.REACT_APP_API_URL + CONSUMPTION_SAVE_END_POINT;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const response = yield axios.post(url, saveApiConsumptionRequest);
    } catch (error) {

    }
}