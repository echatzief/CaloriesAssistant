import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../Reducers/rootReducers';
import Container from './Container';

/* Create the store in order to save the state */
export const store = createStore(rootReducers);
console.log(store.getState())
class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Container/>
            </Provider>
        );
    }
}
export default App;
