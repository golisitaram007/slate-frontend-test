# Your state management library code should be here

  

`rsflux` is a simple state management library which dispatch an action and mutates the state.

  

## Documentation

  

### index.js

  

This file bundle all other source files and export to use.

  

### observable.js

  

A Simple class, which publish an event and responding to the subscribers.

  

### store.js

  

A store for keeping the application state. And dispatch an action and commits, then mutates the state.

  

### stateHOC.js

  

A Higher-Order Component, which receives current state and a component and returns new component by mapping state with component props. Moreover, state is subscribed to events in store, so on every state change it updates wrapped component.

  
  

### Example

  

Create a new store, with actions, mutaions and initial state.


    import { Store } from '../../lib/rsflux';
     
    
    export default new Store({
	   	actions: {   
		    createIncident(context, payload) {
			    context.commit('createIncident', payload);
		    }
        },
		mutations: {
    	    createIncident(state, payload) {
		        state.incidents.push(payload);
		        return state;
		    }
       },
       state: {
	        incidents: []
      }
    });

  


To dispatch an action, import store which is created above into a component, then dispatch an action with type and payload

  

   
    import store from '../store'
        
    store.dispatch(type, payload)

  

To map state with props of a component, import store created. And also import `mapStateWithProps` from the library `rsflux`.

Export the component with HOC and pass store as an argument

  

    import { mapStateWithProps } from '../../lib/rsflux'
    import store from '../store'      
    
    const App = () => {
	    return (
		    <div></div>
	    )
    }
    export default mapStateWithProps(store)(App)

