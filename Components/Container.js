import {createStackNavigator, createAppContainer} from 'react-navigation';
import StartingView from './StartingView';
import AdjustCalories from './AdjustCalories';
import GrammsDisplayScreen from './GrammsDisplayScreen';
import BMRForm from './BMRForm';
import AfterMode from './AfterMode';

/* Create the navigation in order to change the screen */
const MainNavigator = createStackNavigator({
    StartingView:{screen:StartingView},
    BMRForm:{screen:BMRForm},
    AdjustCalories:{screen:AdjustCalories},
    AfterMode:{screen:AfterMode},
    GrammsDisplayScreen:{screen:GrammsDisplayScreen},
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
 });

/* Contain all the components inside a high level one */
const Container = createAppContainer(MainNavigator);
export default Container;
