import actions from './actions.js';
import mutations from './mutations.js';
import state from './state.js';
import { Store } from '../../lib/rsflux';

export default new Store({
    actions,
    mutations,
    state
});
