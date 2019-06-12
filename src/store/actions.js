export default {
    createIncident(context, payload) {
        context.commit('createIncident', payload);
    },
    getIncidents(context) {
        context.commit('getIncidents');
    },
    triggerAlert(context, payload) {
        context.commit('triggerAlert', payload);
    }
};
