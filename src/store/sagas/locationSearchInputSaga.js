import axios from "axios";

const CONSUMPTION_SAVE_END_POINT = 'consumptionAdd'

export function* savePlacesApiConsumptionSaga(action) {
    const savePlacesApiConsumptionRequest = {
        "customer_id": action.customerId,
        "places": 1,
        "directions": 0,
        "geocoding": 0
    }
    let url = process.env.REACT_APP_API_URL + CONSUMPTION_SAVE_END_POINT;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const response = yield axios.post(url, savePlacesApiConsumptionRequest);
    } catch (error) {

    }
}