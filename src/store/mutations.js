export default {
    createIncident(state, payload) {
        state.incidents.push(payload);
        return state;
    },
    getIncidents(state) {
        return state;
    },
    triggerAlert(state, payload) {
        state.alert = payload
        return state;
    }
};
