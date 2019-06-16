import React, {Component} from 'react';
import GrammsDisplayContainer from '../Containers/GrammsDisplayContainer';

class GrammsDisplayScreen extends Component{
    static navigationOptions = {
        title: 'GrammsDisplayScreen',
    };
    render(){
        return(
            <GrammsDisplayContainer/>
        )
    }
}
export default GrammsDisplayScreen;