import React, {Component} from 'react';
import AfterAdjustContainer from '../Containers/AfterAdjustContainer';

class AfterMode extends Component{
    static navigationOptions = {
        title: 'AfterMode',
    };
    render(){
        return(
            <AfterAdjustContainer navigation={this.props.navigation}/>
        );
    }
}
export default AfterMode;