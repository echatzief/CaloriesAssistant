import {AppRegistry} from 'react-native';
import App from './Components/App';
import {store} from './Components/App';
import {name as appName} from './app.json';

const render = ()=> AppRegistry.registerComponent(appName, () => App);

render();

//Subscribe the render to the store
store.subscribe(render);
